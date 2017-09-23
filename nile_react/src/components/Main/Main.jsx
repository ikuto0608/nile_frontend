import React, { Component } from 'react';
import Home from './Home/Home.jsx';

class Main extends Component {
  state = {
    currentUser: this.props.currentUser,
    loggedIn: this.props.loggedIn,
    userType: this.props.userType,
    currentPage: 'Home'
  }



  render() {
    const {currentUser, loggedIn, userType} = this.props;
    switch(this.state.currentPage) {
      case 'Home':
        return (
          <Home currentUser={currentUser} loggedIn={loggedIn} userType={userType} />
        );
        break;

      // case 'Profile':
      //   return (
      //     <Profile />
      //   );
      //   break;
    }
  }
}

export default Main;