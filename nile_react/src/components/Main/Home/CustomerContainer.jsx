import React, { Component } from 'react';
import CustomerCard from '../UserCards/CustomerCard.jsx'

const testData = [{
  username: 'Alexander Xavior',
  rating: 4.5,
  wantFrom: 'Tokyo',
  deliverTo: 'Vancouver',
  deliverBy: '12th December 2017',
  product: 'Computer',
  price: '< $20 CAD'
}, {
  username: 'Alexander Xavior',
  rating: 4.5,
  wantFrom: 'Tokyo',
  deliverTo: 'Vancouver',
  deliverBy: '12th December 2017',
  product: 'Computer',
  price: '< $20 CAD'
}, {
  username: 'Alexander Xavior',
  rating: 4.5,
  wantFrom: 'Tokyo',
  deliverTo: 'Vancouver',
  deliverBy: '12th December 2017',
  product: 'Computer',
  price: '< $20 CAD'
}, {
  username: 'Alexander Xavior',
  rating: 4.5,
  wantFrom: 'Tokyo',
  deliverTo: 'Vancouver',
  deliverBy: '12th December 2017',
  product: 'Computer',
  price: '< $20 CAD'
}];

class CustomerContainer extends Component {
  render() {
    const customerCards = testData.map((traveller, i) => {
      return (
        <CustomerCard
        key={i}
        username={traveller.username}
        rating={traveller.rating}
        wantFrom={traveller.wantFrom}
        deliverTo={traveller.deliverTo}
        deliverBy={traveller.deliverBy}
        product={traveller.product}
        price={traveller.price}
        />
      )
    })

    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '1400px', paddingLeft: '3em', paddingTop: '2em', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <h2>Customer</h2>
          <a href='#UserFilter'>See All</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {customerCards}
        </div>
      </div>
    );
  }
}

export default CustomerContainer;