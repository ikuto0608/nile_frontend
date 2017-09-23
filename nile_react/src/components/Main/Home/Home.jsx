import React, { Component } from 'react';
import NileInfo from './NileInfo.jsx';
import TravellerContainer from './TravellerContainer.jsx';

const testData = {};

class Home extends Component {
  render() {
    return (
      <div>
        <NileInfo />

        <TravellerContainer />

      </div>

    );
  }
}

export default Home;