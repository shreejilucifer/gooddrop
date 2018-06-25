import React, { PureComponent } from 'react';
import { Select } from 'antd';
const Option = Select.Option;

class FirstContent extends PureComponent {

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
              onChange={(e)=>{actions.pickupDetailsChange(e.target.value, 'emailid')}}
            />
            <br/>
            <div className="slotanddate">
              <label className="pickupdetailsformlabel">Pickup Date</label>
              <input
                className="pickupdetailsforminput"
                type="date"
                name="pickupdate"
                onChange={(e)=>{actions.pickupDetailsChange(e.target.value, 'pickupdate')}}
              />
              <br/>
              <label className="pickupdetailsformlabel">Pickup Slot</label>
              <Select
                style={{ width: 100 }}
                defaultValue=""
                onChange={(e)=>{actions.pickupDetailsChange(e, 'pickupslot')}}>
                <Option value="slota">Slot A</Option>
                <Option value="slotb">Slot B</Option>
                <Option value="slotc">Slot C</Option>
                <Option value="slotd">Slot D</Option>
              </Select>

            </div><br/>
            <label className="pickupdetailsformlabel">Address Line</label>
            <input
              className="pickupdetailsforminput"
              type="text"
              width="100%"
              name="addressline"
              onChange={(e)=>{actions.pickupDetailsChange(e.target.value, 'addressline')}}
            />
            <br/>
            <label className="pickupdetailsformlabel">Town/City</label>
            <select
              className="pickupdetailsforminput"
              width="100%"
              name="towncity"
              onChange={(e)=>{actions.pickupDetailsChange(e.target.value, 'towncity')}}
              >
              <option value="ahmedabad">Ahmedabad</option>
              <option value="delhi">Delhi</option>

            </select>
            <br/>
            <label className="pickupdetailsformlabel">State</label>
            <select
              className="pickupdetailsforminput"
              width="100%"
              name="state"
              onChange={(e)=>{actions.pickupDetailsChange(e.target.value, 'addressstate')}}
              >
              <option value="gujarat">Gujarat</option>
              <option value="maharastra">Maharastra</option>

            </select>
            <br/>
          </form>
        </div>
        )}
      </Consumer>
      );
  }

}

export default FirstContent;
