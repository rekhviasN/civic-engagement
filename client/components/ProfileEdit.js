import React, { Component } from 'react';
import ImageUpload from './ImageUpload';

const divStyle = {
  fontFamily: 'Andale Mono',
	fontSize: '14px',
  fontStyle: 'normal',
	fontVariant: 'normal',
	fontWeight: '400',
	lineHeight: '20px'
};

class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issues: this.props.info.issues || 'n/a'
    };

    this.handleIssuesChange = this.handleIssuesChange.bind(this);
    // this.handleQuoteChange = this.handleQuoteChange.bind(this);
    // this.handleAboutMeChange = this.handleAboutMeChange.bind(this);

  }
  handleIssuesChange(e) {
    this.setState({ issues: e.target.value });
  }

  render() {
    const info = this.props;
    console.log('info', info);
    console.log('in render, issues',this.state.issues)
    return (
      <div style={divStyle} >
        <h1> Welcome to your profile </h1>
        <h2>Username: {this.props.info.username} </h2>
        <h3>Day of profile creation: { this.props.info.createdAt } </h3>
        <form onSubmit={this.handleSubmit} >
          <p className='profileTopic'>Top 3 Issues I care about </p>
          <div> {this.props.info.issues || 'n/a'} </div>
          <div> Edit: <input type="text" name="issues" value={this.state.issues} placeholder="Issues" onChange={this.handleIssuesChange} /> </div>
          <p className='profileTopic'>Top Quote</p>
          <div>{this.props.info.quote || 'n/a'}</div>
          <div> Edit: <input type="text" name="quote" placeholder="Quote" onChange={this.handleQuoteChange} /> </div>
          <p className='profileTopic'>Who I Am</p>
          <div>{this.props.info.aboutme || 'n/a'}</div>
          <div> Edit: <input type="text" name="aboutMe" placeholder="About Me" onChange={this.handleAboutMeChange} /></div>
          <div className="submitButton">
            <input type="submit" value="Submit Changes" />
          </div>
        </form>

        <div>Photo</div>
        { this.props.info.photo ? <img src={this.props.info.photo} /> : <img src="http://melplex.eu/wp-content/uploads/2015/06/provider_female.jpg" /> }
        <div>
          <ImageUpload />
        </div>
      </div>
    );
  }
}


export default ProfileEdit;
//
// class Signup extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { email: this.props, password: '', valid: false };
//     this.handleEmailChange = this.handleEmailChange.bind(this);
//     this.handlePasswordChange = this.handlePasswordChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleEmailChange(event) {
//     console.log(event.target.value);
//     this.setState({ email: event.target.value });
//   }
//
//   handlePasswordChange(event) {
//     console.log(event.target.value);
//     this.setState({ password: event.target.value });
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     console.log('Email and pword submitted ', this.state.email + this.state.password);
//     Axios.post('/api/users/signup', {
//       username: this.state.email,
//       password: this.state.password
//     }).then((resp) => {
//       Cookies.set('com.CivicsPortal', resp.data.token, { expires: 7 });
//     }).then(() => {
//       this.setState({ valid: true });
//     }).catch((err) => {
//       console.log(err);
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit} >
//           <h1>Your Profile</h1>
//           <h3>Username: {this.props.info.username}</h3>
//           <h3>Day of profile creation: {this.props.info.createdAt} </h3>
//           <div> Update photo
//           <input type="text" name="username" placeholder="Email Address" onChange={this.handleEmailChange} />
//           <h3>Password</h3>
//           <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} />
//           <input type="submit" value="Signup"/>
//         </form>
//         {
//            this.state.valid ? <Redirect to={{ pathname: '/auth' }} /> : null
//          }
//       </div>);
//     }
// }
//
// export default Signup;
