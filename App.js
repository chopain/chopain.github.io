import React, { Component } from 'react';
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import NavBar from './components/NavBar'
import Extra from './components/Extra.js'
import Footer from './components/Footer.js'
import arrow from './images/arrow.gif'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="home">
          <NavBar />
          <Welcome />
          <div className="down-arrow">
          <img src={arrow} alt="Scroll"  width="50px"/>
          </div>
        <h2 className="heading" id="projects">Projects</h2>
          <Projects />
        <h2 className="heading" id="more">Additional Work</h2>
          <Extra />
        <h2 className="heading" id="footer">Contact</h2>
          <Footer />
      </div>
    );
  }
}

export default App;