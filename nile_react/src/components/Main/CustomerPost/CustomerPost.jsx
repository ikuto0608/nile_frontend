import React, { Component } from 'react';

const testData = {
  userName: 'Matt Willcox',
  rating: '3.5',
  numOfRatings: '10',
  wantFrom: 'Japan',
  deliverTo: 'Vancouver',
  deliverBy: '12th December 2017',
  product: 'Computer',
  price: 'CAD $40',
  message: 'Blah blah blah blah blah blah. Blah blah blah blah blah blah. Blah blah blah blah blah blah. Blah blah blah blah blah blah. Blah blah blah blah blah blah. Blah blah blah blah blah blah. Blah blah blah blah blah blah.',
  avatar: 'http://fillmurray.com/200/200'
}

class CustomerPost extends Component {

  render() {
    const {userName, rating, numOfRatings, wantFrom, deliverTo, deliverBy, product, price, message, avatar} = testData;
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', paddingLeft: '2em'}}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingRight: '2em'}}>
            <div>
              <img src={avatar} alt='fillmurray' />
            </div>
            <div>
              <button style={{borderRadius: '10%', margin: '1em'}}>Offer Delivery</button>
            </div>
          </div>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <div>
            <span style={{backgroundColor: '#D3D3D3'}}>CUSTOMER</span>
            <div>
              <h1>{userName}</h1>
              <div style={{ display: 'flex', flexDirection: 'row'}}>
              <div style={{paddingRight: '1em'}}>Rating: </div>
              <div style={{paddingRight: '1em'}}>{rating}</div>
              <div style={{paddingRight: '1em'}}>({numOfRatings})</div>
              </div>
            </div>
            <div style= {{ display: 'flex', flexDirection: 'row' }}>
              <div style={{paddingRight: '2em'}}>
                <p>Want something from: </p>
                <p>Deliver to: </p>
                <p>Delivered by: </p>
                <p>Product: </p>
                <p>Delivery Price: </p>
              </div>
              <div>
                <p>{wantFrom}</p>
                <p>{deliverTo} </p>
                <p>{deliverBy}</p>
                <p>{product}</p>
                <p>{price}</p>
              </div>
            </div>
          </div>
          <div style= {{ display: 'flex', flexDirection: 'row'}}>
            <div style={{ paddingRight: '2em'}}>
              <p>Message: </p>
            </div>
            <div style={{display: 'flex', width: '20em', flexWrap: 'wrap'}}>
              {message}
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <p>Delivered From: GREEN</p>
            <p>Delivered To: RED</p>
          </div>
          <div>
            <div style={{height: '300px', width: '500px', backgroundColor: 'steelblue'}}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerPost;