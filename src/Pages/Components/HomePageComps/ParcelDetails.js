import React, {Component} from 'react';
import moment from 'moment';
import {Select, DatePicker } from 'antd';
const Option = Select.Option;

class ParcelDetails extends Component {

  state = {
    fromvalue: null
  }

   handleChange = (value) => {
    //console.log(`selected ${value}`);
  }

  handleChangeFrom = (value) => {
   //console.log(`selected ${value}`);
   this.setState({fromvalue: value})
 }

   handleBlur = () => {
    //console.log('blur');
  }

   handleFocus = () => {
    //console.log('focus');
  }

  disabledDate(current) {
    return current && current < moment().add(2, 'days');
  }

  render() {
    let viewto = true;

    if( this.state.fromvalue != null )
      viewto = false ;

    return (<div className="parceldetails">
      <div>
        <h3 className="parceldetailsformtitle">
          Parcel Details
        </h3>
        <form className="parceldetailsform">
          <div className="parcelinputcontainer">
            <label className="parceldetailsformlabel">From:</label>
            <Select
              showSearch
              className="parceldetailsformselect"
              placeholder="Select Source Place"
              optionFilterProp="children"
              onChange={this.handleChangeFrom}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
              <Option value="ahmedabad">Ahmedabad</Option>

            </Select>
          </div>

          <div className="parcelinputcontainer">
            <label className="parceldetailsformlabel">To:</label>
            <Select
              disabled={viewto}
              showSearch
              className="parceldetailsformselect"
              placeholder="Select Destination Place"
              optionFilterProp="children"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
              <Option value="hyderabad">Hyderabad</Option>

            </Select>
          </div>

          <div className="parcelinputcontainer">
            <label className="parceldetailsformlabel">Parcel Date:</label>
            <DatePicker
              disabledDate={this.disabledDate}
              showToday={false}
            />
          </div>

        </form>
      </div>
      <div className="parceldetailsbuttons">
        <button className="parceldetailsnextbtn" onClick={this.props.nexthandler}>Next</button>
        <button className="parceldetailscancelbtn" onClick={this.props.cancelhandler}>Cancel</button>
      </div>
    </div>);
  }

}

export default ParcelDetails;
