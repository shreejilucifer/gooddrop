import React, {PureComponent} from 'react';
import moment from 'moment';
import {Select, Spin, DatePicker} from 'antd';
import axios from 'axios';
const Option = Select.Option;

class ParcelDetails extends PureComponent {

  state = {
    res: [],
    sourcePlace: [],
    destinationPlace: [],
    loading: true,
    loadingDest: true
  }

  handleBlurDestination = () => {
    // console.log('blur');
  }

  handleFocusDestination = () => {
    // console.log('focus');
  }

  disabledDate(current) {
    return current && current < moment().add(2, 'days');
  }


  componentWillMount() {

    this.setState({loading: true});

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://18.206.137.13/api/station_list",
      "method": "POST",
      "headers": {
        "Accept": "application/json",
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNlZTYxODQyYmUwNmM5MWRhMjY0ZjZmMDY3NzE1YTY0ZTk5NDRlMmIyY2M2OWJjNjQ3MGY2NDA4ZTFkMjI3OGIzNDNmODNlMzRjOTVjNjQwIn0.eyJhdWQiOiIxIiwianRpIjoiY2VlNjE4NDJiZTA2YzkxZGEyNjRmNmYwNjc3MTVhNjRlOTk0NGUyYjJjYzY5YmM2NDcwZjY0MDhlMWQyMjc4YjM0M2Y4M2UzNGM5NWM2NDAiLCJpYXQiOjE1MzE2Nzk1NDUsIm5iZiI6MTUzMTY3OTU0NSwiZXhwIjoxNTYzMjE1NTQ1LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.pK9IzZedIv7x8m2eb8drmcf0oH5QBQgpsAFU1GTM-wQlWOnwdY_lRxuqiaUBHSxHBZLSz6VCi77JQWB8_ewnU-vIBXdwFEfIW72z3P0wctXjiRcNZZShJA_yYvCyUvZbqMayunGj84cViFLZ12cjjecffofQsl_92RRdmDiaics_yH3GHr_lF9LjGhOArui7mT2ukU6qpmAlYtVk2H6VYDzAJ26mhAFlpuhCdCNxTxBhZjQrIAoajFgkfQTHXexHP81FvN2HluzJI52p9Q-jyipqguq5yO9xg6LDq4zrJVlPwmebTkz8q9YZYF9e6UW-BYiU547yrKLJWsY2yP5L7xB54u3ibJDnXSXtYCYN0ikWT5bJYCcf5ESInj_Qe0SY-GVbmPEGVteqXUAC-NrwISKkeRsT6oFMrqXXHhA0V86cbmqmJINuuczcTnjfhylgU9x8_M3fX3glpQnXu3ytlVKttjoHbjpFZ4vY5CZXMhafLHv6u682GVjxUvjkk-B_VyDizFeIhhOKlyG5GU0bVatpzxkdyUPhIn_yvAo8qzGK5ZHxFy_Sg9AfUfJTzqDT0BNz5AocdwMcxC3X-gUL2vAs4bsp6JaaJFTS15-GGWVE9m9ai6FYtyHyZck3N2Rt2NaR3ALDyXfVreamAMCJ3L-GT3Op_jecc1lLXNSTsYU"
      }
    }

    axios(settings).then((res) => {

    let i ;
      var uniqueNames = [];

      for(i = 0; i< res.data.length; i++)
      {
      if(uniqueNames.indexOf(res.data[i].SOURCE_STATION) === -1)
      {
          uniqueNames.push(res.data[i].SOURCE_STATION);
      }
    }

      this.setState({ res: res.data, sourcePlace: uniqueNames, loading: false });

    }).catch((err) => {
      console.log(err);
    })

  }

  changeinsource = (e) => {

    this.setState({loadingDest: true});

    var x = e.charAt(0).toUpperCase() + e.slice(1);
    var i ;
    var destination = [];

    for( i=0 ; i<this.state.res.length; i++ )
    {
      if(this.state.res[i].SOURCE_STATION === x ) {
        destination.push(this.state.res[i].DEST_STATION);
      }
    }

    this.setState({destinationPlace: destination ,loadingDest: false});
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
                    this.changeinsource(e);
                  }}
                  notFoundContent={this.state.loading ? <Spin size="small" /> : null}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {
                    this.state.sourcePlace.map(d => <Option key={1} value={d.toLowerCase()}>{d}</Option>)
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
                    notFoundContent={this.state.loadingDest ? <Spin size="small" /> : null}
                    onChange={(e) => {
                    actions.handleChangeTo(e)
                  }}
                  onFocus={this.handleFocusDestinatio}
                  onBlur={this.handleBlurDestination}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {
                    this.state.destinationPlace.map(d => <Option key={1} value={d.toLowerCase()}>{d}</Option>)
                  }
                </Select>
              </div>

              <div className="parcelinputcontainer">
                <label className="parceldetailsformlabel">Parcel Date:</label>
                <DatePicker value={state.parcelDateActual} onChange={actions.handleChangeParcelDate} disabledDate={this.disabledDate} showToday={false}/>
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
        </div>)
      }
    </Consumer>);
  }

}

export default ParcelDetails;
