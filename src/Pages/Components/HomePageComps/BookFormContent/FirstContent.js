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
          <h3 className="pickupdetailsformtitle">
            <b> The Total Price To Ship Your Bike is Rs. {state.orderCharge}/- </b>
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
              <div className="slotanddatepart">
                <label className="pickupdetailsformlabel">Pickup Date</label>
                <DatePicker
                  value={state.pickupDateActual}
                  disabledDate={(current)=>{
                    return (current > state.parcelDateActual) }}
                  onChange={actions.pickupDetailsChangePickUpdate}
                  name="pickupdate"
                  showToday={false}
                />
              </div>

              <br/>
              <div className="slotanddatepart">
                <label className="pickupdetailsformlabel">Pickup Slot</label>
                <Select
                  value={state.pickupSlot}
                  style={{ width: 140 }}
                  defaultValue=""
                  onChange={(e)=>{actions.pickupDetailsChange(e, 'pickupslot')}}>
                  <Option value="6AM to 7AM">6 AM - 10 AM</Option>
                  <Option value="10AM to 12PM">10 AM - 12 PM</Option>
                  <Option value="12PM to 4PM">12 PM - 4 PM</Option>
                  <Option value="4PM to 7PM">4 PM - 7 PM</Option>
                  <Option value="7PM to 11PM">7 PM - 11 PM</Option>
                </Select>
              </div>


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
            <div>Bangalore</div>
            <br/>
            <label className="pickupdetailsformlabel">State</label>
            <div>Karnataka</div>
            <br/>
          </form>
        </div>
        )}
      </Consumer>
      );
  }

}

export default FirstContent;
