import React, { Component } from 'react';
import TravellerCard from '../../UserCards/TravellerCard.jsx';

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      loggedIn: this.props.loggedIn,
    }
  }

  render() {

    return (
      <div className='content'>
        <h1>Profile</h1>
        <TravellerCard />
      </div>
    );
  }
}

export default MainBody;