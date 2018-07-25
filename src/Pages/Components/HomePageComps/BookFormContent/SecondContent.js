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
            <input
              type="text"
              className="pickupdetailsforminput"
              width="100%"
              name="towncity"
              value={state.receivertownCity}
              onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receivertowncity')}} />
            <br/>
            <label className="pickupdetailsformlabel">State</label>
            <Select
              showSearch
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              width="100%"
              name="state"
              defaultValue=""
              value={state.receiveraddressState}
              onChange={(e)=>{actions.destinationDetailsChange(e, 'receiveraddressstate')}}>
              <Option value="Andaman & Nicobar">Andaman and Nicobar Islands</Option>
              <Option value="Andhra Pradesh">Andhra Pradesh</Option>
              <Option value="Arunachal Pradesh">Arunachal Pradesh</Option>
              <Option value="Assam">Assam</Option>
              <Option value="Bihar">Bihar</Option>
              <Option value="Chandigarh">Chandigarh</Option>
              <Option value="Chhattisgarh">Chhattisgarh</Option>
              <Option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</Option>
              <Option value="Daman and Diu">Daman and Diu</Option>
              <Option value="Delhi">Delhi</Option>
              <Option value="Goa">Goa</Option>
              <Option value="Gujarat">Gujarat</Option>
              <Option value="Haryana">Haryana</Option>
              <Option value="Himachal Pradesh">Himachal Pradesh</Option>
              <Option value="Jammu & Kashmir">Jammu and Kashmir</Option>
              <Option value="Jharkhand">Jharkhand</Option>
              <Option value="Karnataka">Karnataka</Option>
              <Option value="Kerala">Kerala</Option>
              <Option value="Lakshadweep">Lakshadweep</Option>
              <Option value="Madhya Pradesh">Madhya Pradesh</Option>
              <Option value="Maharashtra">Maharashtra</Option>
              <Option value="Manipur">Manipur</Option>
              <Option value="Meghalaya">Meghalaya</Option>
              <Option value="Mizoram">Mizoram</Option>
              <Option value="Nagaland">Nagaland</Option>
              <Option value="Odisha">Odisha</Option>
              <Option value="Puducherry">Puducherry</Option>
              <Option value="Punjab">Punjab</Option>
              <Option value="Rajasthan">Rajasthan</Option>
              <Option value="Sikkim">Sikkim</Option>
              <Option value="Tamil Nadu">Tamil Nadu</Option>
              <Option value="Telangana">Telangana</Option>
              <Option value="Tripura">Tripura</Option>
              <Option value="Uttarakhand">Uttarakhand</Option>
              <Option value="Uttar Pradesh">Uttar Pradesh</Option>
              <Option value="West Bengal">West Bengal</Option>
            </Select> <br/>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SecondContent;
