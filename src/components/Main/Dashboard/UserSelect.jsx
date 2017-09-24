import React, { Component } from 'react';

class UserSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      loggedIn: this.props.loggedIn,
    }
  }

  render() {
    return (
      <nav>
        <ul>
          <li>Traveller</li>
          <li>Customer</li>
        </ul>
      </nav>
    );
  }
}

export default UserSelect;