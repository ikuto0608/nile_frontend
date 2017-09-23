import React, { Component } from 'react';

class NileInfo extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '30em',
        backgroundColor: '#d3d3d3',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white'
      }}>
        <div>
          <h1>How It Works:</h1>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
          <div style={{display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '15em', width: '15em', backgroundColor: '#FEFEFE', borderRadius: '50%'}}>
            </div>
            <div style={{width: '15em'}}>
              <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '15em', width: '15em', backgroundColor: '#FEFEFE', borderRadius: '50%'}}>
            </div>
            <div style={{width: '15em'}}>
              <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '15em', width: '15em', backgroundColor: '#FEFEFE', borderRadius: '50%'}}>
            </div>
            <div style={{width: '15em'}}>
              <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NileInfo;