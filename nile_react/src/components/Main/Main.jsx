import React, { Component } from 'react';
import Home from './Home/Home.jsx';
import CustomerPost from './CustomerPost/CustomerPost.jsx';

class Main extends Component {
  state = {
    currentUser: this.props.currentUser,
    loggedIn: this.props.loggedIn,
    userType: this.props.userType,
    currentPage: 'CustomerPost',
    customerClicked: ''
  }



  render() {
    const {currentUser, loggedIn, userType} = this.props;
    switch(this.state.currentPage) {
      case 'Home':
        return (
          <Home currentUser={currentUser} loggedIn={loggedIn} userType={userType} />
        );
        break;

      case 'CustomerPost':
        return (
          <CustomerPost customerPostInfo={testData.customerPostInfo}/>
        )
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


const testData = {
    customerPostInfo: {
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
}