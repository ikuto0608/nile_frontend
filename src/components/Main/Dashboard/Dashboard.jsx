import React, { Component } from 'react';
import UserSelect from './UserSelect.jsx';
import OptionsList from './OptionsList.jsx';
import MainBody from './Body/MainBody.jsx';

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
      <div className="container">
        <UserSelect />
        <div className="columns">
          <div className="column is-one-quarter">
            <OptionsList />
          </div>
          <div className="column">
            <MainBody />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;