import React, { Component } from 'react';
import UserSelect from 'UserSelect.jsx';
import OptionsList from 'OptionsList.jsx';

class Dashboard extends Component {
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
        <UserSelect />
        <OptionsList />
      </div>
    );
  }
}

export default Dashboard;