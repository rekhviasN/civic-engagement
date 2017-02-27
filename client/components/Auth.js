import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ProfileEdit from '../components/ProfileEdit';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promise: false,
      info: 'empty info state'
    };
  }

  componentWillMount() {
    console.log('Auth did mountT');
    axios.get('/api/users/checkAuth')
      .then((res) => {
        console.log('req in will mounTT', res, 'res.status', res.status);
        console.log('type of reqstatus', typeof res.status);
        if (res.status !== 401) {
          this.setState({ promise: true, info: res.data });
          console.log('thisstate.promise after res status good', this.state.promise);
          console.log('req.body should be user and info, this is res: ', res);
        } else {
          console.log('7373res.status not equal to number 200; look at type of res status');
        }
      })
      .catch((err) => { console.log(err); });
  }
// <Redirect to={{ pathname: 'signin' }}
  render() {
    console.log('rendering, this.state.promise', this.state.promise);
    console.log('this.state.info from auth', this.state.info);
    return (
      <div>
        {
           this.state.promise ? <ProfileEdit info={this.state.info} /> : null
        }
      </div>
    );
  }
}
