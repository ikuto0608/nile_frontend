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
      <div className="select">
        <select>
          <option>Customer</option>
          <option>Traveller</option>
        </select>
      </div>
    );
  }
}

export default UserSelect;