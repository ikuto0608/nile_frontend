import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flex: '1'}}>
        <div style={{width: '100%', paddingBottom: '2em'}}>I am a nav bar.</div>
      </div>
    );
  }
}

export default NavBar;