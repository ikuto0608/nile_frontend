import React, { Component } from 'react';

class TravellerCard extends Component {

  render() {
    const { username, rating, comingFrom, goingTo, arriving, price } = this.props;
    return (
      <div style={{width: '40em', height: '15em', borderStyle: 'solid', marginBottom: '4em', padding: '1em'}}>
       <p>Username: {username}</p>
       <p>Rating: {rating}</p>
       <p>Coming from: {comingFrom}</p>
       <p>Going to: {goingTo}</p>
       <p>Arriving: {arriving}</p>
       <p>Price: {price}</p>
      </div>
    );
  }
}

export default TravellerCard;