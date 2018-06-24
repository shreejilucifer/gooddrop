import React, { Component } from 'react';
import '../CSS/HomePageCSS/priceestimate.css';
import ParcelDetails from './ParcelDetails';
import BikeDetails from './BikeDetails';

class PriceEstimate extends Component {
  state = {

  }
  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div>

              <div className="priceestimate">
                <div>
                  <button className="selectbox1" onClick={()=>{actions.priceEstimateButtons(!state.showResults, false)}}>
                    Your Parcel Details <span className="caret"></span>
                  </button>

                </div>
                <br/>
              <div>
                <button className="selectbox2" onClick={()=>{actions.priceEstimateButtons(false, !state.showBikeDetails)} }>
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
              { state.showResults ? <ParcelDetails
                Consumer={Consumer}
                nexthandler={()=>{actions.priceEstimateButtons(false, true)}}
                cancelhandler={()=>{actions.priceEstimateButtons(false, false)}}
              /> : null }
              { state.showBikeDetails ? <BikeDetails
                Consumer={Consumer}
                cancelhandler={()=>{actions.priceEstimateButtons(false, false)}}
              /> : null }
            </div>
          </div>
        )}
      </Consumer>
    );
  }

}

export default PriceEstimate;
