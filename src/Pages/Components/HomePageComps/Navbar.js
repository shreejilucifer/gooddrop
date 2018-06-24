import React, { PureComponent } from 'react';

import showcaselogo from '../Assets/showcaselogo.png';
import telephone from '../Assets/telephone.png';
import accounticon from '../Assets/delivery.png';
import '../CSS/HomePageCSS/navbar.css';

class Navbar extends PureComponent {
  state = {
    user: "navbar"
  }
  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="navbar">
          <div className="logo">
            <img src={showcaselogo} alt="GoodDrop" height="100%"/>
          </div>
          <div className="rightsection">
            <div className="phonenumber">
              <img className="navbaricon" src={telephone} alt="call" height="15px"/>
              9566123640
            </div>
            <div className="account">
              <img className="navbaricon" src={accounticon} alt="TrackShipment" height="20px"/>
              <a className="links">Track Shipment</a>
            </div>
          </div>
        </div>
        )}
      </Consumer>
  );
  }
}

export default Navbar;
