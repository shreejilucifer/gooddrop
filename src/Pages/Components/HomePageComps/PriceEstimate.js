import React, { Component } from 'react';
import '../CSS/HomePageCSS/priceestimate.css';
import ParcelDetails from './ParcelDetails';

class PriceEstimate extends Component {
  state = {
    showResults: false
  }

  onClick = () => {
    let result = this.state.showResults ;
    this.setState({showResults: !result });
  }

  render() {
    return (
      <div>
          <div className="priceestimate">
            <div>
              <button className="selectbox1" onClick={this.onClick}>
                Your Parcel Details <span className="caret"></span>
              </button>

            </div>
            <br/>
          <div>
            <button className="selectbox2">
              Your Bike Details <span className="caret"></span>
            </button>
          </div>
          <br/>
          <div>
            <button className="selectbox3">
              PRICE ESTIMATE
            </button>
          </div>
        </div>
        <div>
          { this.state.showResults ? <ParcelDetails /> : null }
        </div>
      </div>
    );
  }

}

export default PriceEstimate;
