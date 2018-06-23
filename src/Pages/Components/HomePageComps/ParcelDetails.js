import React, { Component } from 'react';

class ParcelDetails extends Component {

  render() {
    return (
      <div className="parceldetails">
        <div>
          <form className="parceldetailsform" >
            <div  className="parcelinputcontainer">
              <label className="parceldetailsformlabel">From:</label>
              <select name="from">
                <option>Ahmedabad</option>
              </select>
            </div>

            <div  className="parcelinputcontainer">
              <label className="parceldetailsformlabel" >To:</label>
              <select name="to">
                <option>Ahmedabad</option>
              </select>
            </div>

            <div className="parcelinputcontainer">
              <label className="parceldetailsformlabel">Parcel Date:</label>
              <input type="date" name="date"/>
            </div>

          </form>
        </div>
        <div className="parceldetailsbuttons">
          <button className="parceldetailsnextbtn">Next</button>
          <button className="parceldetailscancelbtn">Cancel</button>
        </div>
      </div>
    );
  }

}

export default ParcelDetails;
