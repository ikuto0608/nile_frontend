import React, { Component } from 'react';

class CustomerCard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { username, rating, wantFrom, deliverTo, deliverBy, product, price } = this.props;
    return (
      <div style={{width: '40em', height: '15em', borderStyle: 'solid', marginBottom: '4em', padding: '1em'}}>
       <p>Username: {username}</p>
       <p>Rating: {rating}</p>
       <p>Want from: {wantFrom}</p>
       <p>Deliver to: {deliverTo}</p>
       <p>Delivered by: {deliverBy}</p>
       <p>Product: {product}</p>
       <p>Price: {price}</p>
      </div>
    );
  }
}

export default CustomerCard;