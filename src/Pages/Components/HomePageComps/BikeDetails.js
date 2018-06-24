import React, { Component } from 'react';
import { Input } from 'antd';
import Modal from 'react-responsive-modal';

class BikeDetails extends Component {

  state = {
      openOTPModal: false,
    //  tempcontact: null,
      verified: false,
      openEstimateModal: false
    };

    onOpenModal = () => {
      this.setState({ openOTPModal: true });
    };

    onOpenModalEstimateModal = () => {
      this.setState({ openEstimateModal: true });
    };

    onCloseModal = () => {
      this.setState({ openOTPModal: false });
    };

    onCloseEstimateModal = () => {
      this.setState({ openEstimateModal: false });
    };

    onCloseVerify = () => {
      this.setState({ verified: true })
    }

    
  render() {
    const Consumer = this.props.Consumer ;

    let verifyestimate;

    if( this.state.openOTPModal === true && this.state.verified === false )
      verifyestimate = (
        <div className="otpmodal">
        <div>An OTP is sent to your Mobile No. : <br/><b>+91{this.state.tempcontact}</b></div>
        <br/>
        <div>Enter the OTP below: </div>
        <br/>
        <div>
          <Input name="otpnumber" placeholder="XXXX" />
        </div>
        <br/>

      <div>
        <button onClick={this.onCloseVerify} className="verifyestimatebtn">
          Verify & Estimate Price
        </button>
      </div>
    </div>
  );
      else
      if ( this.state.verified === true )
        verifyestimate = (
          <div className="otpmodal">
            <h3>The Price is Rs. 500 </h3>
            <button>Book Now</button>
            <button onClick={this.onCloseModal}>Cancel</button>
          </div>
        );

    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="bikedetails">
            <div>
              <h3 className="parceldetailsformtitle">
                Bike Details
              </h3>
              <form className="parceldetailsform" >
                <div  className="parcelinputcontainer">
                  <label className="parceldetailsformlabel">Bike CC</label>
                  <Input onChange={actions.bikeCCChange} name="bikecc" placeholder="500 CC" />
                </div>

                <div  className="parcelinputcontainer">
                  <label className="parceldetailsformlabel" >Bike Value</label>
                  <Input onChange={actions.bikeValueChange} name="bikevalue" placeholder="Rs. 15000" />
                </div>

                <div className="parcelinputcontainer">
                  <label className="parceldetailsformlabel">Contact Number</label>
                  <Input onChange={actions.bikeContactChange}
                          name="contactnum"
                          placeholder="9812312312"
                   />
                </div>

              </form>
            </div>
            <div className="parceldetailsbuttons">
              <button
                className="parceldetailssendotpbtn"
                onClick={this.onOpenModal}>
                Send OTP
              </button>
              <Modal
                closeIconSize={15}
                open={this.state.openOTPModal}
                onClose={this.onCloseModal} center>
                {verifyestimate}
              </Modal>
              <button
                className="parceldetailscancelbtn"
                onClick={this.props.cancelhandler}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </Consumer>
    );
  }

}

export default BikeDetails;
/*
 */
