import React, { PureComponent } from 'react';
import '../CSS/HomePageCSS/stationrequestform.css';

class StationRequestForm extends PureComponent {

  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
        <div className="stationform">
          <br/>
          <h3>
            ADD A STATION
          </h3>
            <label className="stationformlabel">Source Station</label>
            <input
              className="stationforminput"
              type="text"
              width="100%"
              value={state.sourceStation}
              onChange={(e)=>{actions.stationRequestHandler(e.target.value, "sourcestation" )}}
            />
            <br/>
            <label className="stationformlabel">Destination Station</label>
            <input
              className="stationforminput"
              type="text"
              width="100%"
              value={state.destinationStation}
              onChange={(e)=>{actions.stationRequestHandler(e.target.value, "destinationstation" )}}
            />
            <br/>
            <label className="stationformlabel">Enter Your Name</label>
            <input
              className="stationforminput"
              type="text"
              width="100%"
              value={state.stationName}
              onChange={(e)=>{actions.stationRequestHandler(e.target.value, "stationname" )}}
            />
            <br/>
            <label className="stationformlabel">Enter Your Phone Number</label>
            <input
              className="stationforminput"
              type="text"
              width="100%"
              value={state.stationPhone}
              onChange={(e)=>{actions.stationRequestHandler(e.target.value, "stationphone" )}}
            />
            <br/>
            <label className="stationformlabel">Enter Your Email ID</label>
            <input
              className="stationforminput"
              type="text"
              width="100%"
              value={state.stationEmail}
              onChange={(e)=>{actions.stationRequestHandler(e.target.value, "stationemail" )}}
            />
            <br/>
            <label className="stationformlabel">Enter Number Of Bikes</label>
            <input
              className="stationforminput"
              type="text"
              width="100%"
              value={state.stationBikeno}
              onChange={(e)=>{actions.stationRequestHandler(e.target.value, "stationbikesno" )}}
            />
            {state.errorStation}
            <button className="stationbutton" onClick={() => {
              actions.onSubmitStationRequest(
                state.sourceStation, state.destinationStation, state.stationName,
                state.stationPhone, state.stationEmail, state.stationBikeno, state.auth )
            }}>
              Submit
            </button>
        </div>
        )}
      </Consumer>

    );
  }

}

export default StationRequestForm;
