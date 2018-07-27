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
              value={state.receiveraddressLine1}
              onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receiveraddressline1')}}
            />
            <input
              style={{marginTop: "5px"}}
              className="pickupdetailsforminput"
              type="text"
              width="100%"
              name="addressline"
              value={state.receiveraddressLine2}
              onChange={(e)=>{actions.destinationDetailsChange(e.target.value, 'receiveraddressline2')}}
            /><br/>
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
              <Option value="andaman & nicobar">Andaman and Nicobar Islands</Option>
              <Option value="andhra pradesh">Andhra Pradesh</Option>
              <Option value="arunachal pradesh">Arunachal Pradesh</Option>
              <Option value="assam">Assam</Option>
              <Option value="bihar">Bihar</Option>
              <Option value="chandigarh">Chandigarh</Option>
              <Option value="chhattisgarh">Chhattisgarh</Option>
              <Option value="dadra and nagar haveli">Dadra and Nagar Haveli</Option>
              <Option value="daman and diu">Daman and Diu</Option>
              <Option value="delhi">Delhi</Option>
              <Option value="goa">Goa</Option>
              <Option value="gujarat">Gujarat</Option>
              <Option value="haryana">Haryana</Option>
              <Option value="himachal pradesh">Himachal Pradesh</Option>
              <Option value="jammu & kashmir">Jammu and Kashmir</Option>
              <Option value="jharkhand">Jharkhand</Option>
              <Option value="karnataka">Karnataka</Option>
              <Option value="kerala">Kerala</Option>
              <Option value="lakshadweep">Lakshadweep</Option>
              <Option value="madhya pradesh">Madhya Pradesh</Option>
              <Option value="maharashtra">Maharashtra</Option>
              <Option value="manipur">Manipur</Option>
              <Option value="meghalaya">Meghalaya</Option>
              <Option value="mizoram">Mizoram</Option>
              <Option value="nagaland">Nagaland</Option>
              <Option value="odisha">Odisha</Option>
              <Option value="puducherry">Puducherry</Option>
              <Option value="punjab">Punjab</Option>
              <Option value="rajasthan">Rajasthan</Option>
              <Option value="sikkim">Sikkim</Option>
              <Option value="tamil nadu">Tamil Nadu</Option>
              <Option value="telangana">Telangana</Option>
              <Option value="tripura">Tripura</Option>
              <Option value="uttarakhand">Uttarakhand</Option>
              <Option value="uttar pradesh">Uttar Pradesh</Option>
              <Option value="west bengal">West Bengal</Option>
            </Select> <br/>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SecondContent;
