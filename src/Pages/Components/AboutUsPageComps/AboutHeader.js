import React, { Component } from 'react';
import '../CSS/AboutUsPageCSS/aboutheader.css';

class AboutHeader extends Component {

  render() {
    return (
        <div className="aboutusheader">
          <h2 className="headertitle"> {this.props.title} </h2>
        </div>
    );
  }

}

export default AboutHeader;
