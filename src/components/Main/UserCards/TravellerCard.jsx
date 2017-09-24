import React, { Component } from 'react';

class TravellerCard extends Component {

  render() {
    const { username, rating, comingFrom, goingTo, arriving} = this.props;
    return (
      <div onClick={this.props.handleOrderClick} style={{cursor: 'pointer', width: '40em', height: '15em', borderStyle: 'solid', marginBottom: '4em', padding: '1em'}}>
       <p>Username: {username}</p>
       <p>Rating: {rating}</p>
       <p>Coming from: {comingFrom}</p>
       <p>Going to: {goingTo}</p>
       <p>Arriving: {arriving}</p>
      </div>
    );
  }
}

export default TravellerCard;