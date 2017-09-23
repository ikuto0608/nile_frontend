import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';

class App extends Component {
    state = {
      userType: 'customer',
      loggedIn: false,
      currentUser: ''
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <Main
          userType={this.state.userType}
          loggedIn={this.state.loggedIn}
          currentUser={this.state.currentUser}
          />
        <Footer />
      </div>
    );
  }
}

export default App;
