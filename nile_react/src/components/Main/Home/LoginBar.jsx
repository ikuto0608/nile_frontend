import React, { Component } from 'react';

class LoginBar extends Component {
  render() {

    const style = {
      margin: "auto",
      width: "50%",
      textAlign: "center"
    }

    return (
      <div style={style}>
        <button>Sign up for free</button>
      </div>
    )
  }
}

export default LoginBar;