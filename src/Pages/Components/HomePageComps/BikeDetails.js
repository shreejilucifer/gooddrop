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
          <div style={{ display: state.displayNone }} className="bikedetails">
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
              <div className="errorMsg">{state.errorPrint}</div>
            </div>
            <div className="parceldetailsbuttons">
              <button
                className="parceldetailssendotpbtn"
                onClick={()=>{actions.openOTPModal(state.bikeCC, state.bikeValue, state.tempContact);}}>
                Send OTP
              </button>
              <Modal
                closeIconSize={15}
                open={state.otpModal}
                onClose={actions.closeOTPModal} center>

                  {
                    (state.verified === false && state.otpModal === true )?
                    <div className="otpmodal">
                      <div>An OTP is sent to your Mobile No. : <br/><b>+91{state.tempContact}</b></div> <br/>
                      <div>Enter the OTP below: </div> <br/>
                      <div><Input onChange={actions.onChangeOTP} name="otpnumber" placeholder="XXXX" /></div> <br/>
                      <div className="errorMsg" style={{color: "#000"}}>{state.errorPrint}</div>
                      <div><button onClick={()=>{actions.onChangeVerifyContact(state.OTP, state.tempContact);}} className="verifyestimatebtn">Verify & Estimate Price</button></div>
                    </div>
                    :
                    <div className="otpmodal">
                      <h3>The Price is <b>Rs.{state.orderCharge}</b> </h3>
                      <h3 style={{textTransform: 'uppercase'}}> From: <b>{state.fromPlace}</b> To: <b>{state.toPlace}</b> </h3> <br/>
                      <h3> On Date: <b>{state.parcelDate}</b> </h3>
                      <h3> BikeCC: <b>{state.bikeCC}</b> <br/> Bike Value: <b>{state.bikeValue}</b> </h3>
                      <button className="otpbooknowbtn" onClick={actions.openBookModal}>Book Now</button> <br/>
                      <button className="otpcancelbtn" onClick={actions.closeOTPModal}>Cancel</button>
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
