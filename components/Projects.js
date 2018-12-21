import React, { Component } from 'react';
import lu from '../images/lupd.png'
import waldo from '../images/waldo.png'
import musiary from '../images/musiary.png'

class Projects extends Component {
  render() {
    return (
      <div className="Projects section flex-container">
        <div className="item">
          <img src={lu} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Prisoner's Dilemma</h3>
              <p><strong>Simulating the iterated prisoner's dilemma</strong></p>
              <p>Developed with economics faculty</p>
              <p>JavaScript, React, Ruby/Rails, PostgreSQL, ElasticSearch</p>
              <p><a href="https://lu-prisoners-dilemma.herokuapp.com" target="_blank" rel="noopener noreferrer">Explore Project <i className="fa fa-external-link"/></a></p>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={waldo} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Finding Waldo</h3>
              <p><strong>Model to find Waldo given a set of images to train on</strong></p>
              <p>~93% accuracy out of sample performance</p>
              <p>PCA, KNN algorithms</p>
              <p><a href="https://github.com/chopain/WheresWaldo" target="_blank" rel="noopener noreferrer">Explore Project <i className="fa fa-external-link"/></a></p>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={musiary} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Musiary</h3>
              <p><strong>Platform for musicians to collaborate more efficiently</strong></p>
              <p>Users collaborate with specific pieces</p>
              <p>Profiles with criteria for easy assessment</p>
              <p>Javascript, Ruby/Rails, PostgreSQL, Heroku, Mail servers</p>
              <p><a href="http://musiary.com/" target="_blank" rel="noopener noreferrer">Explore Project <i className="fa fa-external-link"/></a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;