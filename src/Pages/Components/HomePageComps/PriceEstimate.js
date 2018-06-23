import React, { Component } from 'react';
import '../CSS/HomePageCSS/priceestimate.css';
import ParcelDetails from './ParcelDetails';
import BikeDetails from './BikeDetails';

class PriceEstimate extends Component {
  state = {
    showResults: false,
    showBikeDetails: false
  }

  onClick = () => {
    let result = this.state.showResults ;
    this.setState({showResults: !result, showBikeDetails: false });
  }

  onClickBike = () => {
    let result = this.state.showBikeDetails ;

    this.setState({showResults: false, showBikeDetails: !result });
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
            <button className="selectbox2" onClick={this.onClickBike}>
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
          { this.state.showResults ? <ParcelDetails
            nexthandler={()=>{
            this.setState({showResults: false, showBikeDetails: true });
            }}
            cancelhandler={()=>{
              this.setState({showResults: false, showBikeDetails: false });
            }}
          /> : null }
          { this.state.showBikeDetails ? <BikeDetails
            cancelhandler={()=>{
            this.setState({showResults: false, showBikeDetails: false });
          }}/> : null }
        </div>
      </div>
    );
  }

}

export default PriceEstimate;
