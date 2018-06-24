import React, { PureComponent } from 'react';

class SecondContent extends PureComponent {

  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="pickupdetailsform" >
            <br/>
            <h3 className="pickupdetailsformtitle">Charges for this order would be INR <b>{state.orderCharge}/- </b></h3>
            <h3> DESTINATION DETAILS </h3>
            <form className="pickupdetailsactualform">
              <label className="pickupdetailsformlabel">Receiver's Name</label>
              <input
                className="pickupdetailsforminput"
                type="text"
                width="100%"
                name="receivername"
                onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receivername')}}
              /> <br/>
              <label className="pickupdetailsformlabel">Contact Number</label>
              <input className="pickupdetailsforminput"
                type="text"
                width="100%"
                name="receivercontactnum"
                onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receivercontactnumber')}}
              /> <br/>
              <label className="pickupdetailsformlabel">Email ID</label>
              <input
                className="pickupdetailsforminput"
                type="text"
                width="100%"
                name="receiveremailid"
                onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receiveremailid')}}
              /> <br/>
              <div>
                <label className="pickupdetailsformlabel">Pickup Date</label>
                <input
                  className="pickupdetailsforminput"
                  type="date"
                  name="pickupdate"
                  onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receiverpickupdate')}}
                />
                <label className="pickupdetailsformlabel">Pickup slot</label>
                <select
                  className="pickupdetailsforminput"
                  type="date"
                  name="pickupslot"
                  onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receiverpickupslot')}}
                  >
                  <option value="slota">Slot A</option>
                  <option value="slotb">Slot B</option>
                </select>
            </div><br/>
            <label className="pickupdetailsformlabel">Address Line</label>
            <input
              className="pickupdetailsforminput"
              type="text"
              width="100%"
              name="addressline"
              onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receiveraddressline')}}
            /> <br/>
            <label className="pickupdetailsformlabel">Town/City</label>
            <select
              className="pickupdetailsforminput"
              width="100%"
              name="towncity"
              onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receivertowncity')}}
              >
              <option value="ahmedabad">Ahmedabad</option>
              <option value="mumbai">Mumbai</option>
            </select> <br/>
            <label className="pickupdetailsformlabel">State</label>
            <select
              className="pickupdetailsforminput"
              width="100%"
              name="state"
              onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receiveraddressstate')}}
              >
              <option value="gujarat">Gujarat</option>
              <option value="maharastra">Maharastra</option>
            </select> <br/>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SecondContent;
