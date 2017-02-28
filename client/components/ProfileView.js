import React, { Component } from 'react';

class ProfileView extends Component {
  // render to state this person's information.

  render() {
    const info = this.props;
    console.log('info', info);

    return (
      <div>
        <h1> Hollaback </h1>
      	<p>Profile view </p>
        <p>info props: {this.props.info} </p>
      </div>
    )
  }
}

export default ProfileView;
