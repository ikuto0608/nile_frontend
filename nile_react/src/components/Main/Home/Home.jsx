import React, { Component } from 'react';
import NileInfo from './NileInfo.jsx';
import TravellerContainer from './TravellerContainer.jsx';
import CustomerContainer from './CustomerContainer.jsx';
import TravellerCard from '../UserCards/TravellerCard.jsx';

const testData = {};

class Home extends Component {
  render() {
    return (
      <div>
        <NileInfo />

        <TravellerContainer />
        <CustomerContainer />
      </div>

    );
  }
}

export default Home;