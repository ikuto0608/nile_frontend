import React, { Component } from 'react';

class TravellerContainer extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '1400px', padding: '3em', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <h2>Deliverer</h2>
          <a href='#UserFilter'>See All</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{width: '40em', height: '15em', borderStyle: 'solid', marginBottom: '4em', padding: '1em'}}>
           <p>ALEXANDER XAVIER</p>
          </div>
          <div style={{width: '40em', height: '15em', borderStyle: 'solid', marginBottom: '4em', padding: '1em'}}>
           <p>IKUTO NAPOLEAN</p>
          </div>
          <div style={{width: '40em', height: '15em', borderStyle: 'solid', marginBottom: '4em', padding: '1em'}}>
           <p>JONATHON RAMSES</p>
          </div>
          <div style={{width: '40em', height: '15em', borderStyle: 'solid', marginBottom: '4em', padding: '1em'}}>
           <p>AYAKO HATSHEPSUT</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TravellerContainer;