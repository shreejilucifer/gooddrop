import React, { PureComponent } from 'react';
import '../CSS/HomePageCSS/priceestimate.css';
import ParcelDetails from './ParcelDetails';
import BikeDetails from './BikeDetails';


class PriceEstimate extends PureComponent {
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
                  <button className="selectbox1" onClick={()=>{
                    actions.priceEstimateButtons(!state.showResults, false)
                    actions.bringDetails(state.auth);
                  }
                  }>
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
              { state.showResults ?

                  <ParcelDetails
                  Consumer={Consumer}
                  nexthandler={()=>{actions.priceEstimateButtons(false, true, state.fromPlace , state.toPlace, state.parcelDate )}}
                  cancelhandler={actions.resetState}
                />

                 : null }
              { state.showBikeDetails ? <BikeDetails
                Consumer={Consumer}
                cancelhandler={actions.resetState}
              /> : null }
            </div>
          </div>
        )}
      </Consumer>
    );
  }

}

export default PriceEstimate;
