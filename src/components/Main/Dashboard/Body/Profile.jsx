import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      loggedIn: this.props.loggedIn,
    }
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Profile;