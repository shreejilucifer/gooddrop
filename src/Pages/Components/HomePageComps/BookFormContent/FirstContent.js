import React, { PureComponent } from 'react';
import {Select, DatePicker } from 'antd';
const Option = Select.Option;

class FirstContent extends PureComponent {

    disabledStartDate = (startValue, endValue) => {
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    }

  render() {
    const Consumer = this.props.Consumer ;

    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="pickupdetailsform">
          <br/>
          <h3 className="pickupdetailsformtitle">Charges for this order would be INR
            <b> {state.orderCharge}/-
            </b>
          </h3>
          <h3>
            PICKUP DETAILS
          </h3>
          <form className="pickupdetailsactualform">
            <label className="pickupdetailsformlabel">Sender's Name</label>
            <input
              className="pickupdetailsforminput"
              type="text"
              width="100%"
              name="sendername"
              value={state.senderName}
              onChange={(e)=>{actions.pickupDetailsChange(e.target.value, 'sendername')}}
            />
            <br/>
            <label className="pickupdetailsformlabel">Contact Number</label>
            {
              (state.tempContact === null)? <input
                className="pickupdetailsforminput"
                type="text"
                width="100%"
                name="contactnum"
                onChange={(e)=>{actions.pickupDetailsChange(e.target.value, 'contactnumber');}}
              />:
              <div>{state.contactNumber}</div>
            }
            <br/>
            <label className="pickupdetailsformlabel">Email ID</label>
            <input
              className="pickupdetailsforminput"
              type="text"
              width="100%"
              name="emailid"
              value={state.emailID}
              onChange={(e)=>{actions.pickupDetailsChange(e.target.value, 'emailid')}}
            />
            <br/>
            <div className="slotanddate">
              <label className="pickupdetailsformlabel">Pickup Date</label>
              <DatePicker
                value={state.pickupDateActual}
                disabledDate={(current)=>{
                  return (current > state.parcelDateActual) }}
                onChange={actions.pickupDetailsChangePickUpdate}
                name="pickupdate"
                showToday={false}
              />
              <br/>
              <label className="pickupdetailsformlabel">Pickup Slot</label>
              <Select
                value={state.pickupSlot}
                style={{ width: 120 }}
                defaultValue=""
                onChange={(e)=>{actions.pickupDetailsChange(e, 'pickupslot')}}>
                <Option value="6to7">6 AM - 10 AM</Option>
                <Option value="10to12">10 AM - 12 PM</Option>
                <Option value="12to4">12 PM - 4 PM</Option>
                <Option value="4to7">4 PM - 7 PM</Option>
                <Option value="7to11">7 PM - 11 PM</Option>
              </Select>

            </div><br/>
            <label className="pickupdetailsformlabel">Address Line</label>
            <input
              className="pickupdetailsforminput"
              type="text"
              width="100%"
              name="addressline"
              value={state.addressLine}
              onChange={(e)=>{actions.pickupDetailsChange(e.target.value, 'addressline')}}
            />
            <br/>
            <label className="pickupdetailsformlabel">Town/City</label>
            <Select
              width="100%"
              name="towncity"
              defaultValue=""
              value={state.townCity}
              onChange={(e)=>{actions.pickupDetailsChange(e, 'towncity')}}>
              <Option value="ahmedabad">Ahmedabad</Option>
              <Option value="mumbai">Mumbai</Option>
            </Select>
            <br/>
            <label className="pickupdetailsformlabel">State</label>
            <Select
              width="100%"
              name="state"
              defaultValue=""
              value={state.addressState}
              onChange={(e)=>{actions.pickupDetailsChange(e, 'addressstate')}}>
              <Option value="gujarat">Gujarat</Option>
              <Option value="maharastra">Maharastra</Option>
            </Select>
            <br/>
          </form>
        </div>
        )}
      </Consumer>
      );
  }

}

export default FirstContent;
