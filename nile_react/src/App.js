import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';

class App extends Component {
  render() {
    return (
      <NavBar />
      <Main />
      <Footer />
    );
  }
}

export default App;
