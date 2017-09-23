import React, { Component } from 'react';
import NileInfo from './NileInfo.jsx';
import UserFilter from './UserFilter.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <UserFilter />
        <NileInfo />
      </div>
    );
  }
}

export default Home;