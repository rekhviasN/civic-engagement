import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import sidebar from '../containers/sidebarContainer';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promise: false,
      info: 'empty info state'
    };
  }

  componentWillMount() {
    console.log("Auth did mount");
    axios.get('/api/users/checkAuth')
      .then((req) => {
        console.log('req in will mount', req, 'req.status', req.status);
        if (req.status === '200') {
          this.setState({ promise: true, info: req.body });
        }
      });
  }

  render() {
    console.log(this.state.promise);
    return (
      <div>
        {
           this.state.promise ? <sidebar prop={this.state.info} /> : <Redirect to={{ pathname: 'signin' }} />
        }
      </div>
    );
  }
}
