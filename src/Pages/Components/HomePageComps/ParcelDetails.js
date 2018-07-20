import React, { PureComponent } from 'react';
import moment from 'moment';
import {Select, DatePicker } from 'antd';
const Option = Select.Option;

class ParcelDetails extends PureComponent {

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
    const Consumer = this.props.Consumer ;

    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="parceldetails">
          <div>
            <h3 className="parceldetailsformtitle">
              Parcel Details
            </h3>
            <form className="parceldetailsform">
              <div className="parcelinputcontainer">
                <label className="parceldetailsformlabel">Parcel From:</label>
                  <Select
                    showSearch
                    className="parceldetailsformselect"
                    placeholder="Select Source Place"
                    optionFilterProp="children"
                    value={state.fromPlace}
                    onChange={(e)=>{actions.handleChangeFrom(e)}}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                    <Option value="ahmedabad">Ahmedabad</Option>
                  </Select>
              </div>

              <div className="parcelinputcontainer">
                <label className="parceldetailsformlabel">Parcel To:</label>
                <Select
                  disabled={(state.fromPlace !== null)? false : true}
                  showSearch
                  className="parceldetailsformselect"
                  placeholder="Select Destination Place"
                  optionFilterProp="children"
                  value={state.toPlace}
                  onChange={(e)=>{actions.handleChangeTo(e)}}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  <Option value="hyderabad">Hyderabad</Option>

                </Select>
              </div>

              <div className="parcelinputcontainer">
                <label className="parceldetailsformlabel">Parcel Date:</label>
                <DatePicker
                  value={state.parcelDateActual}
                  onChange={actions.handleChangeParcelDate}
                  disabledDate={this.disabledDate}
                  showToday={false}
                />
              </div>

            </form>
            <div className="errorMsg">{state.errorPrint}</div>
          </div>
          <div className="parceldetailsbuttons">
            <button className="parceldetailsnextbtn" onClick={this.props.nexthandler}>
              Next
            </button>
            <button className="parceldetailscancelbtn" onClick={this.props.cancelhandler}>Cancel</button>
          </div>
        </div>
        )}
      </Consumer>
      );
  }

}

export default ParcelDetails;
