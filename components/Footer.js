import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer">
          <p><a href="mailto:symphonicat@gmail.com" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/> symphonicat@gmail.com</a></p>
          <p><a href="https://github.com/chopain" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/> Github</a></p>
        </div>
      </div>
    );
  }
}

export default Footer;