import React, { Component } from 'react';

class TravellerProfile extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flex: '1'}}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: '1', alignItems: 'center'}}>
          <img src='http://fillmurray.com/200/200' alt='fillmurray' />
          <h1> Matt Willcox </h1>
          <div style={{ borderStyle: 'solid', padding: '1em', width: '10em', marginBottom: '2em'}}>
            <h2> About Me </h2>
            <h3> School </h3>
            <h3> Work </h3>
            <h3> Languages </h3>
          </div>
          <div style={{ borderStyle: 'solid', padding: '1em', width: '10em' }}>
            <h2> Info </h2>
            <h3> Phone Number </h3>
            <h3> Email </h3>
            <h3> skypeID </h3>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: '2'}}>
          <h1> Hi I'm Alexander! </h1>
          <p> Vancouver, Canada. Joined August 2015 </p>
          <div style={{ padding: '1em' }}>
            <p>🚚 40 Deliveries Completed</p>
          </div>
          <div style= {{ padding: '1em', display: 'flex', flexWrap: 'wrap'}}>
            <p>Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. </p>
          </div>
          <div>
            <h2> Review from Customers (38) </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div style={{borderRadius: '50%', height: '5em', width: '5em', backgroundColor: '#D3D3D3', flexShrink: '0', margin: '1em'}} />
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
              <p>Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div style={{borderRadius: '50%', height: '5em', width: '5em', backgroundColor: '#D3D3D3', flexShrink: '0', margin: '1em'}} />
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
              <p>Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div style={{borderRadius: '50%', height: '5em', width: '5em', backgroundColor: '#D3D3D3', flexShrink: '0', margin: '1em'}} />
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
              <p>Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div style={{borderRadius: '50%', height: '5em', width: '5em', backgroundColor: '#D3D3D3', flexShrink: '0', margin: '1em'}} />
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
              <p>Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div style={{borderRadius: '50%', height: '5em', width: '5em', backgroundColor: '#D3D3D3', flexShrink: '0', margin: '1em'}} />
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
              <p>Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div style={{borderRadius: '50%', height: '5em', width: '5em', backgroundColor: '#D3D3D3', flexShrink: '0', margin: '1em'}} />
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
              <p>Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. Blah blah blah blah. </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravellerProfile;