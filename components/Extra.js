import React, { Component } from 'react';
import snow from '../images/snow.png'
import water from '../images/water.png'
import deer from '../images/deer.jpg'


class Extra extends Component {

  render() {
    return (
      <div className="Teaching section flex-container">

        <div className="item">
        <a href="https://www.behance.net/gallery/66099853/Sketches-in-Watercolor">  
        <h3>Paintings</h3>
          <img src={snow} className="thumb"/>
          <div className="overlay">

            <div className="text"> 
            
              <p>Sketches in watercolor</p>
            
            </div>
          </div>
          </a>
        </div>


        <div className="item">
          <a href="">  

          <h3>Design</h3>              
          <img src={water} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <p>Design work</p>
            </div>
          </div>
          </a>
        </div>

        <div className="item">
        <a href="https://500px.com/pianichi">  
        <h3>Photography</h3>
          <img src={deer} className="thumb"/>
          <div className="overlay">

            <div className="text"> 
            
              <p>Mostly nonhuman subjects</p>
            
            </div>
          </div>
          </a>
        </div>

      </div>
    );
  }
}
export default Extra;