import React, { PureComponent } from 'react';

import showcaselogo from '../Assets/showcaselogo.png';
import telephone from '../Assets/telephone.png';
import accounticon from '../Assets/delivery.png';
import '../CSS/HomePageCSS/navbar.css';
import { Link } from 'react-router-dom';

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
          <Link to="/"><img src={showcaselogo} alt="GoodDrop" height="100%"/></Link>
          </div>
          <div className="rightsection">
            <div className="phonenumber">
              <img className="navbaricon" src={telephone} alt="call" height="15px"/>
              9742834253‬
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
