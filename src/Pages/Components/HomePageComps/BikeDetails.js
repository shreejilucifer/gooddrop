import React, { PureComponent } from 'react';
import { Input } from 'antd';
import Modal from 'react-responsive-modal';

class BikeDetails extends PureComponent {

    onOpenModal = () => {
      this.setState({ openOTPModal: true });
    };

    onCloseModal = () => {
      this.setState({ openOTPModal: false });
    };

    onCloseVerify = () => {
      this.setState({ verified: true })
    }


  render() {
    const Consumer = this.props.Consumer ;

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
                onClick={actions.openOTPModal}>
                Send OTP
              </button>
              <Modal
                closeIconSize={15}
                open={state.otpModal}
                onClose={actions.closeOTPModal} center>

                  {
                    (state.otpModal === true && state.verified === false )?
                    <div className="otpmodal">
                      <div>An OTP is sent to your Mobile No. : <br/><b>+91{state.tempContact}</b></div> <br/>
                      <div>Enter the OTP below: </div> <br/>
                      <div><Input onChange={actions.onChangeOTP} name="otpnumber" placeholder="XXXX" /></div> <br/>
                      <div><button onClick={actions.onChangeVerifyContact} className="verifyestimatebtn">Verify & Estimate Price</button></div>
                    </div>
                    :
                    <div className="otpmodal">
                      <h3>The Price is Rs. 500 </h3>
                      <button onClick={actions.openBookModal}>Book Now</button> <br/>
                      <button onClick={actions.closeOTPModal}>Cancel</button>
                    </div>
                  }

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
