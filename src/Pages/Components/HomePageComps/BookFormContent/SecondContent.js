import React, { PureComponent } from 'react';
import { Select } from 'antd';
const Option = Select.Option;

class SecondContent extends PureComponent {

  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="pickupdetailsform" >
            <br/>
            <h3 className="pickupdetailsformtitle"><b>The Total Price To Ship Your Bike is Rs. {state.orderCharge}/- </b></h3>
            <h3> DESTINATION DETAILS </h3>
            <form className="pickupdetailsactualform">
              <label className="pickupdetailsformlabel">Receiver's Name</label>
              <input
                className="pickupdetailsforminput"
                type="text"
                width="100%"
                name="receivername"
                value={state.receiverName}
                onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receivername')}}
              /> <br/>
              <label className="pickupdetailsformlabel">Contact Number</label>
              <input className="pickupdetailsforminput"
                type="text"
                width="100%"
                name="receivercontactnum"
                value={state.receivercontactNumber}
                onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receivercontactnumber')}}
              /> <br/>
            <label className="pickupdetailsformlabel">Address Line</label>
            <input
              className="pickupdetailsforminput"
              type="text"
              width="100%"
              name="addressline"
              value={state.receiveraddressLine}
              onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receiveraddressline')}}
            /> <br/>
            <label className="pickupdetailsformlabel">Town/City</label>
            <Select
              width="100%"
              name="towncity"
              defaultValue=""
              value={state.receivertownCity}
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
              value={state.receiveraddressState}
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
