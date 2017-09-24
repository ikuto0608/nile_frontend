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
      <aside className="menu">
        <ul className="menu-list">
          <li><a>Dashboard</a></li>
          <li><a>Messages</a></li>
          <li><a>Your Posts</a></li>
          <li><a>Profile</a></li>
          <li><a>Account</a></li>
          <li><a>Favorites</a></li>
        </ul>
      </aside>
    );
  }
}

export default OptionsList;