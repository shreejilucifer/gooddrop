import React, { PureComponent } from 'react';
import '../CSS/HomePageCSS/homeheader.css';
import PriceEstimate from './PriceEstimate';
import bikesvg from '../Assets/bikeblue.png';

class HomeHeader extends PureComponent {

  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="homeheader">
            <div className="homeheadertitle">Bike Shipping Through Railways Got Convenient and Easy</div>
            <div>
              <img className="bikesvg" src={bikesvg} alt="Bike" height="250px"/>
            </div>
            <PriceEstimate Consumer={Consumer}/>
          </div>
        )}
      </Consumer>
    );
  }
}

export default HomeHeader;
