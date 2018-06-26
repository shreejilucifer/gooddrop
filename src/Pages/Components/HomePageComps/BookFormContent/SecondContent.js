import React, { PureComponent } from 'react';
import { Select, DatePicker } from 'antd';
const Option = Select.Option;

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
                <DatePicker
                  onChange={actions.destinationDetailsChangePickUpdate}
                  name="pickupdate"
                  showToday={false}
                />
                <label className="pickupdetailsformlabel">Pickup slot</label>
                <Select
                  style={{ width: 120 }}
                  defaultValue=""
                    onChange={(e)=>{actions.destinationDetailsChange(e, 'receiverpickupslot')}}>
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
              onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receiveraddressline')}}
            /> <br/>
            <label className="pickupdetailsformlabel">Town/City</label>
            <Select
              width="100%"
              name="towncity"
              defaultValue=""
              onChange={(e)=>{actions.destinationDetailsChange(e, 'receivertowncity')}}>
              <Option value="ahmedabad">Ahmedabad</Option>
              <Option value="mumbai">Mumbai</Option>
            </Select>
            <br/>
            <label className="pickupdetailsformlabel">State</label>
            <Select
              width="100%"
              name="state"
              defaultValue=""
              onChange={(e)=>{actions.destinationDetailsChange(e, 'receiveraddressstate')}}>
              <Option value="gujarat">Gujarat</Option>
              <Option value="maharastra">Maharastra</Option>
            </Select> <br/>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SecondContent;
