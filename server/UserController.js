const jwt = require('jwt-simple');
const Sequelize = require('sequelize');
const sequelize = require('./DB');
const Bcrypt = require('bcrypt');
const Promise = require('promise');


const User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
}, {
  freezeTableName: true,
  instanceMethods: {
    comparePasswords: function (candidatePassword, callback) {
      const dbPassword = this.password;
      Bcrypt.compare(candidatePassword, dbPassword, function (err, isMatch) {
         callback(err, isMatch);
      });
    }
  }
});

function encrypt(pass) {
  return new Promise(function (fulfill, reject){
    Bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        reject(console.error(err));
      }
      return Bcrypt.hash(pass, salt, function (error, hash) {
        if (error) {
          reject(console.error(error));
        }
        // console.log(hash);
        fulfill(hash);
      });
    });
  });
}

module.exports = {

  signup: function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    // check to see if user already exists
    User.findOne({ where: { username: username } })
      .then(function (user) {
        if (user) {
          next(new Error('User already exist!'));
        } else {
          encrypt(password)
            .then((encryptedPw) => {
              return User.create({
                username: username,
                password: encryptedPw
              })
              .then(function (newlyCreatedUser) {
                console.log(newlyCreatedUser.get({ plain: true }));
              });
            })
            .then(function (respUser) {
              // create token to send back for auth
              const token = jwt.encode(respUser, 'secret');
              res.json({ token: token });
            })
            .fail(function (error) {
              next(error);
            });
        }
      });
  },

  signin: function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ where: { username: username } })
      .then(function (user) {
        if (!user) {
          next(new Error('User does not exist'));
        } else {
          user.comparePasswords(password, function (err, isMatch) {
            if (err) {
              next(new Error('Password doesn\'t match'));
            }
            if (isMatch) {
              const token = jwt.encode(user, 'secret');
              res.json({ token: token });
            }
          });
        }
      })
      .fail(function (error) {
        next(error);
      });
  }
};

//
//   checkAuth: function (req, res, next) {
//     // checking to see if the user is authenticated
//     // grab the token in the header is any
//     // then decode the token, which we end up being the user object
//     // check to see if that user exists in the database
//     var token = req.headers['x-access-token'];
//     if (!token) {
//       next(new Error('No token'));
//     } else {
//       var user = jwt.decode(token, 'secret');
//       findUser({username: user.username})
//         .then(function (foundUser) {
//           if (foundUser) {
//             res.send(200);
//           } else {
//             res.send(401);
//           }
//         })
//         .fail(function (error) {
//           next(error);
//         });
//     }
//   }


// function encrypt(pass) {
//   return Bcrypt.genSalt(10, function (err, salt) {
//     if (err) {
//       return console.error(err);
//     }
//     return Bcrypt.hash(pass, salt, function (error, hash) {
//       if (error) {
//         return console.error(error);
//       }
//       console.log(hash);
//       return hash;
//     });
//   });
// };
//
// const dummyPW = encrypt('AYOO');
//
// sequelize.sync().then(function(){
//   const hey = encrypt('Ayo');
//   hey.then((resp) => {
//     User.create({
//       username: 'janedoe',
//       password: resp
//     })
//     .then(function (jane) {
//       console.log(jane.get({
//         plain: true
//       }));
//     });
//   });
// });
