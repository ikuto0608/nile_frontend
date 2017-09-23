import React, { Component } from 'react';
import Home from './Home/Home.jsx';
import CustomerPost from './CustomerPost/CustomerPost.jsx';
import SearchContainer from './SearchResults/SearchContainer.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      loggedIn: this.props.loggedIn,
      userType: '',
      currentPage: 'Home',
      source: '',
      destination: ''
    }
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  getSearchResults(userType, source, destination) {
    this.setState({currentPage: 'SearchContainer', userType: userType, source: source, destination: destination});
  }

  render() {
    const { currentUser, loggedIn } = this.props;
    const { userType, source, destination } = this.state;
    switch(this.state.currentPage) {
      case 'Home':
        return (
          <Home currentUser={currentUser} loggedIn={loggedIn} getSearchResults={this.getSearchResults} />
        );
        break;

      case 'SearchContainer':
        return (
          <SearchContainer userType={userType} source={source} destination={destination} />
        );

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