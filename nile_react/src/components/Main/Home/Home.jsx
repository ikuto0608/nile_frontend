import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '30em',
        backgroundColor: '#d3d3d3',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ color: 'white' }}>How It Works:</h1>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'space-between', flex: 1}}>
          <div style={{ height: '15em', width: '15em', backgroundColor: '#FEFEFE', borderRadius: '50%'}}>
          </div>
          <div style={{ height: '15em', width: '15em', backgroundColor: '#FEFEFE', borderRadius: '50%'}}>
          </div>
          <div style={{ height: '15em', width: '15em', backgroundColor: '#FEFEFE', borderRadius: '50%'}}>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;