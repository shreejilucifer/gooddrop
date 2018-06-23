import React, { Component } from 'react';
import { Input } from 'antd';
import Modal from 'react-responsive-modal';

class BikeDetails extends Component {

  state = {
      openOTPModal: false,
      tempcontact: null
    };

    onOpenModal = () => {
      this.setState({ openOTPModal: true });
    };

    onCloseModal = () => {
      this.setState({ openOTPModal: false });
    };

  render() {
    return (
      <div className="bikedetails">
        <div>
          <h3 className="parceldetailsformtitle">
            Bike Details
          </h3>
          <form className="parceldetailsform" >
            <div  className="parcelinputcontainer">
              <label className="parceldetailsformlabel">Bike CC</label>
              <Input name="bikecc" placeholder="500 CC" />
            </div>

            <div  className="parcelinputcontainer">
              <label className="parceldetailsformlabel" >Bike Value</label>
              <Input name="bikevalue" placeholder="Rs. 15000" />
            </div>

            <div className="parcelinputcontainer">
              <label className="parceldetailsformlabel">Contact Number</label>
              <Input onChange={(e)=>{this.setState({tempcontact: e.target.value})}} name="contactnum" placeholder="9812312312" />
            </div>

          </form>
        </div>
        <div className="parceldetailsbuttons">
          <button className="parceldetailssendotpbtn" onClick={this.onOpenModal}>Send OTP</button>
          <Modal closeIconSize={15} open={this.state.openOTPModal} onClose={this.onCloseModal} center>
            <div className="otpmodal">
              <div>An OTP is sent to your Mobile No. : <br/><b>+91{this.state.tempcontact}</b></div>
              <br/>
              <div>Enter the OTP below: </div>
              <br/>
              <div>
                <Input name="otpnumber" placeholder="XXXX" />
              </div>
              <br/>
            </div>
            <div>
              <button onClick={()=>{}} className="verifyestimatebtn">
                Verify & Estimate Price
              </button>
            </div>
          </Modal>
          <button className="parceldetailscancelbtn" onClick={this.props.cancelhandler}>Cancel</button>
        </div>
      </div>
    );
  }

}

export default BikeDetails;
