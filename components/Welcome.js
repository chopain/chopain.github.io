import React, { Component } from 'react';
import {accessId, APIkey} from '../secrets.js'

class Welcome extends Component {

  importAll = (r) => {
    let icons = {};
    r.keys().map((item, index) => { icons[item.replace('./', '')] = r(item); });
    return icons;
  }

  render() {
  
    return (
      <div className="Welcome section">

        <h1 className="welcome-intro">
          Hi, my name is Kirsey!
        <br/>
        <br/>
          <a href="https://github.com/chopain" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/></a>  <a href="mailto:symphonicat@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/></a>
        <br/>
          <a href="https://drive.google.com/file/d/1X6GmTYkSVll7EDTvvZkog_xw7dzwGFuS/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="button resume-button">Resume <i className="fa fa-file-pdf-o" aria-hidden="true"/></button></a>


        </h1>
        <div className="bio">
          <p>I'm a soon-to-be-graduating senior at Lawrence University studying math, computer science and Russian studies. I like to make things out of code, paint and ink. 
          </p>
          <p>I've coded projects for Professors in the Economics Department, working on tools to help teach game theory. I've also been a Teaching Assistant in intro computer science courses and am passionate about coding projects related to music and art.
          </p>
        </div>
      </div>
    );
  }
}

export default Welcome;
