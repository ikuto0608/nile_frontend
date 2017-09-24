import React, { Component } from 'react';

const testData = {
  userName: 'Matt Willcox',
  wantFrom: 'Japan',
  deliverTo: 'Vancouver',
  deliverBy: '12th December 2017',
  product: 'Computer',
  message: 'Blah blah blah blah blah blah. Blah blah blah blah blah blah. Blah blah blah blah blah blah. Blah blah blah blah blah blah. Blah blah blah blah blah blah. Blah blah blah blah blah blah. Blah blah blah blah blah blah.',
  avatar: 'http://fillmurray.com/200/200'
}

class CustomerPost extends Component {

  render() {
    const {userName, wantFrom, deliverTo, deliverBy, product, message, avatar} = testData;
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
            <span style={{backgroundColor: '#D3D3D3', padding: '1em'}}>CUSTOMER</span>
            <div>
              <h1>{userName}</h1>
            </div>
            <div style= {{display: 'flex', flexDirection: 'row' }}>
              <div style={{paddingRight: '2em'}}>
                <p>Want something from: </p>
                <p>Deliver to: </p>
                <p>Delivered by: </p>
                <p>Product: </p>
              </div>
              <div>
                <p>{wantFrom}</p>
                <p>{deliverTo} </p>
                <p>{deliverBy}</p>
                <p>{product}</p>
              </div>
            </div>
          </div>
          <div style= {{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ paddingRight: '2em' }}>
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