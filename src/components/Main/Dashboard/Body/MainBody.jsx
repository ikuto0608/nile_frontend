import React, { Component } from 'react';

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      loggedIn: this.props.loggedIn,
    }
  }

  render() {

    return (
      <div>
        <h2>Profile</h2>
        <div>
          <img src="http://fillmurray.com/200/300" alt="Bill Murray" />
          
        </div>
        <h2>Messages</h2>
      </div>
    );
  }
}

export default MainBody;