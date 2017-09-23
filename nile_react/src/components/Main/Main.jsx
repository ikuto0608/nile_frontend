import React, { Component } from 'react';
import Home from './Home/Home.jsx';

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

      // case 'Profile':
      //   return (
      //     <Profile />
      //   );
      //   break;
    }
  }
}

export default Main;