import React, { Component } from 'react';
import '../CSS/HomePageCSS/homeheader.css';
import PriceEstimate from './PriceEstimate';
import bikesvg from '../Assets/bikeblue.png';

class HomeHeader extends Component {

  render() {
    return (
      <div className="homeheader">
        <div className="homeheadertitle">Bike Shipping Through Railways Got Convienient and Easy</div>
        <div>
          <img className="bikesvg" src={bikesvg} alt="Bike" height="250px"/>
        </div>
        <PriceEstimate />
      </div>
    );
  }

}

export default HomeHeader;
