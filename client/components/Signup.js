import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      location: '',
      issues: '',
      quote: '',
      aboutme: '',
      valid: false };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleIssuesChange = this.handleIssuesChange.bind(this);
    this.handleQuoteChange = this.handleQuoteChange.bind(this);
    this.handleAboutMeChange = this.handleAboutMeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  }

  handleLocationChange(event) {
    console.log(event.target.value);
    this.setState({ location: event.target.value });
  }

  handleIssuesChange(event) {
    console.log(event.target.value);
    this.setState({ issues: event.target.value });
  }

  handleQuoteChange(event) {
    console.log(event.target.value);
    this.setState({ quote: event.target.value });
  }

  handleAboutMeChange(event) {
    console.log(event.target.value);
    this.setState({ aboutme: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Email and pword submitted ', this.state.email + this.state.password);
    Axios.post('/api/users/signup', {
      username: this.state.email,
      password: this.state.password,
      location: this.state.location,
      issues: this.state.issues,
      quote: this.state.quote,
      aboutme: this.state.aboutme
    }).then((resp) => {
      Cookies.set('com.CivicsPortal', resp.data.token, { expires: 7 });
    }).then(() => {
      this.setState({ valid: true });
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <h2>Please signup</h2>
          <h3>E-mail</h3>
          <input type="text" name="username" placeholder="Email Address" onChange={this.handleEmailChange} />
          <h3>Password</h3>
          <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} />
          <h3>Location or Zip</h3>
          <input type="text" name="location" placeholder="Location" onChange={this.handleLocationChange} />
          <h3>Top 3 Issues I Care About</h3>
          <input type="text" name="issues" placeholder="Issues" onChange={this.handleIssuesChange} />
          <h3>Favorite Quote</h3>
          <input type="text" name="quote" placeholder="Quote" onChange={this.handleQuoteChange} />
          <h3>Who I Am</h3>
          <input type="text" name="AboutMe" placeholder="About Me" onChange={this.handleAboutMeChange} />
          <br />
          <input type="submit" value="Signup" />
        </form>
        {
           this.state.valid ? <Redirect to={{ pathname: '/auth' }} /> : null
         }
      </div>);
  }
}

export default Signup;
