import React, { Component } from 'react';

class OptionsList extends Component {
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
        <ul>
          <li>Dashboard</li>
          <li>Messages</li>
          <li>Your Posts</li>
          <li>Profile</li>
          <li>Account</li>
          <li>Favorites</li>
        </ul>
      </div>
    );
  }
}

export default OptionsList;