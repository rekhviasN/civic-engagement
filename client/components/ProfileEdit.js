import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLoggedIn } from '../actions/loggingActions';
import ImageUpload from './ImageUpload';




const divStyle = {
  fontFamily: 'Andale Mono',
	fontSize: '14px',
  fontStyle: 'normal',
	fontVariant: 'normal',
	fontWeight: '400',
	lineHeight: '20px'
};


function mapStateToProps(state) {
  return {
    UserData: state.LoggedIn.userData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setLoggedIn }, dispatch);
}

class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.UserData.username || 'n/a',
      location: this.props.UserData.location || 'n/a',
      issues: this.props.UserData.issues || 'n/a',
      quote: this.props.UserData.quote || 'n/a',
      aboutme: this.props.UserData.aboutme || 'n/a',
      createAt: this.props.UserData.createdAt || 'n/a',
      image: this.props.UserData.image || 'n/a',
      log: true
    };

    this.handleIssuesChange = this.handleIssuesChange.bind(this);
    this.handleQuoteChange = this.handleQuoteChange.bind(this);
    this.handleAboutMeChange = this.handleAboutMeChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleIssuesChange(e) {
    this.setState({ issues: e.target.value });
  }

  handleQuoteChange(e) {
    this.setState({ quote: e.target.value });
  }

  handleAboutMeChange(e) {
    this.setState({ aboutme: e.target.value });
  }

  handleLocationChange(e) {
    this.setState({ location: e.target.value });
  }

  handleSubmit() {
    Axios.post('/api/users/update', {
      location: this.state.location,
      issues: this.state.issues,
      quote: this.state.quote,
      aboutme: this.state.aboutme,
      image: this.state.image
    }).then((resp) => {
      console.log('we have returned from the server with gooold!', resp.data);
      if (resp.status === 200) {
        Cookies.set('com.CivicsPortal', resp.data.token, { expires: 7 });
        this.props.setLoggedIn(resp.data.user);
      } else {
        console.log('did not receive "200" status');
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleLogout() {
    Cookies.remove('com.CivicsPortal');
    this.setState({ log: false }, () => { console.log('log', this.state.log); })
  }

  render() {
    return (
      <div>
      <Columns>
        <Box align='center'
          pad='medium'
          margin='small'
          colorIndex='light-2'>
          Box 1
        </Box>
      </Columns>
      <Columns justify='center'>
        <Box align='center'
          pad='medium'
          margin='small'
          colorIndex='light-2'>
          Box 1
        </Box>
      </Columns>
        <Columns justify='end'>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 1
          </Box>
        </Columns>
        <div style={divStyle} >
          <h1> Welcome to your profile </h1>
          <div>Photo</div>
          { this.state.image ? <img src={this.state.image} /> : <img src="http://melplex.eu/wp-content/uploads/2015/06/provider_female.jpg" /> }
          <div>
          <button onClick={this.handleLogout} >Logout </button>
          <h2>Username: {this.state.username} </h2>
          <h3>Day of profile creation: { this.state.createdAt } </h3>
          <form onSubmit={this.handleSubmit} >
            <p className='profileTopic'>Top 3 Issues I care about </p>
            <div> {this.props.UserData.issues || 'n/a'} </div>
            <div> Edit: <input type="text" name="issues" value={this.state.issues} placeholder="Issues" onChange={this.handleIssuesChange} /> </div>
            <p className='profileTopic'>Top Quote</p>
            <div>{this.props.UserData.quote || 'n/a'}</div>
            <div> Edit: <input type="text" name="quote" value={this.state.quote} placeholder="Quote" onChange={this.handleQuoteChange} /> </div>
            <p className='profileTopic'>Who I Am</p>
            <div>{this.props.UserData.aboutme || 'n/a'}</div>
            <div> Edit: <input type="text" name="aboutMe" value={this.state.aboutme} placeholder="About Me" onChange={this.handleAboutMeChange} /></div>
            <p className='profileTopic'>Location</p>
            <div>{this.props.UserData.location || 'n/a'}</div>
            <div> Edit: <input type="text" name="location" value={this.state.location} placeholder="Location" onChange={this.handleLocationChange} /></div>
            <div className="submitButton">
              <input type="submit" value="Submit Changes" />
            </div>
          </form>

            <ImageUpload />
          </div>
          { !this.state.log ? <Redirect to={{ pathname: '/' }} /> : null }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
