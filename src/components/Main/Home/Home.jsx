import React, { Component } from 'react';
import NileInfo from './NileInfo.jsx';
import TravellerContainer from './TravellerContainer.jsx';
import CustomerContainer from './CustomerContainer.jsx';
import UserFilter from './UserFilter.jsx';

class Home extends Component {
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
        <UserFilter getSearchResults={this.props.getSearchResults} />
      </div>
    );
  }
}

export default Home;