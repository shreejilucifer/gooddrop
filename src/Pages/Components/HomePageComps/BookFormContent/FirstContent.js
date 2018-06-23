import React, { Component } from 'react';

class FirstContent extends Component {

  render() {
    const orderCharge = 500 ;
    return (
        <div className="pickupdetailsform" >
          <br/>
          <h3 className="pickupdetailsformtitle">Charges for this order would be INR <b>{orderCharge}/- </b></h3>
          <h3> PICKUP DETAILS </h3>
          <form className="pickupdetailsactualform">
            <label className="pickupdetailsformlabel">Sender's Name</label>
            <input className="pickupdetailsforminput" type="text" width="100%" name="sendername" /> <br/>
            <label className="pickupdetailsformlabel">Contact Number</label>
            <input className="pickupdetailsforminput" type="text" width="100%" name="contactnum" /> <br/>
            <label className="pickupdetailsformlabel">Email ID</label>
            <input className="pickupdetailsforminput" type="text" width="100%" name="emailid" /> <br/>
            <div className="slotanddate">
              <label className="pickupdetailsformlabel">Pickup Date</label>
              <input className="pickupdetailsforminput" type="date" name="pickupdate" /> <br/>
              <label className="pickupdetailsformlabel">Pickup slot</label>
              <select className="pickupdetailsforminput" type="date" name="pickupslot" >
                <option>9 - 10</option>
              </select>
          </div><br/>
          <label className="pickupdetailsformlabel">Address Line</label>
          <input className="pickupdetailsforminput" type="text" width="100%" name="addressline" /> <br/>
          <label className="pickupdetailsformlabel">Town/City</label>
          <select className="pickupdetailsforminput" width="100%" name="towncity" >
            <option>Ahmedabad</option>
          </select> <br/>
          <label className="pickupdetailsformlabel">State</label>
          <select className="pickupdetailsforminput" width="100%" name="state" >
            <option>Gujarat</option>
          </select> <br/>
          </form>
        </div>
    );
  }

}

export default FirstContent;
