import React, {PureComponent} from 'react';
import moment from 'moment';
import {Select, Spin, DatePicker} from 'antd';
const Option = Select.Option;

class ParcelDetails extends PureComponent {

  handleBlurDestination = () => {
    // console.log('blur');
  }

  handleFocusDestination = () => {
    // console.log('focus');
  }

  disabledDate(current) {
    return current && current < moment().add(2, 'days');
  }


  render() {
    const Consumer = this.props.Consumer;

    return (<Consumer>
      {
        ({state, actions}) => (<div className="parceldetails">
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
                  onChange={(e) => {
                    actions.handleChangeFrom(e);
                    actions.changeinsource(e, state.res);
                  }}
                  notFoundContent={state.loading ? <Spin size="small" /> : null}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {
                    state.sourcePlace.map(d => <Option key={1} value={d}>{d}</Option>)
                  }
                </Select>
              </div>

              <div className="parcelinputcontainer">
                <label className="parceldetailsformlabel">Parcel To:</label>
                <Select disabled={(
                    state.fromPlace !== null)
                    ? false
                    : true}
                    showSearch
                    className="parceldetailsformselect"
                    placeholder="Select Destination Place"
                    optionFilterProp="children"
                    value={state.toPlace}
                    notFoundContent={state.loadingDest ? <Spin size="small" /> : null}
                    onChange={(e) => {
                    actions.handleChangeTo(e)
                  }}
                  onFocus={this.handleFocusDestinatio}
                  onBlur={this.handleBlurDestination}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {
                    state.destinationPlace.map(d => <Option key={1} value={d}>{d}</Option>)
                  }
                </Select>
              </div>

              <div className="parcelinputcontainer">
                <label className="parceldetailsformlabel">Parcel Date:</label>
                <DatePicker
                  value={state.parcelDateActual}
                  onChange={actions.handleChangeParcelDate}
                  disabledDate={this.disabledDate}
                  showToday={false}/>
              </div>

            </form>
            <div className="errorMsg">{state.errorPrint}</div>
          </div>
          <div className="parceldetailsbuttons">
            <button className="parceldetailsnextbtn" onClick={this.props.nexthandler}>
              Next
            </button>
            <button className="parceldetailscancelbtn" onClick={
              this.props.cancelhandler
            }>Cancel</button>
          </div>
        </div>)
      }
    </Consumer>);
  }

}

export default ParcelDetails;
