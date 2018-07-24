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

    renderParcelDate = (date) => {

      var year = date.slice(0,4);
      var month = date.slice(5,7);
      var day = date.slice(8,10);
      var res = day.concat("-",month,"-",year);

      return res ;
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
                  <Input value={state.bikeCC} onChange={actions.bikeCCChange} name="bikecc" placeholder="Ex: 100" />
                </div>

                <div  className="parcelinputcontainer">
                  <label className="parceldetailsformlabel" >Bike Value</label>
                  <Input value={state.bikeValue} onChange={actions.bikeValueChange} name="bikevalue" placeholder="Rs. 50000" />
                </div>

                <div className="parcelinputcontainer">
                  <label className="parceldetailsformlabel">Contact Number</label>
                  <Input onChange={actions.bikeContactChange}
                          name="contactnum"
                          placeholder="9876543210"
                          value={state.tempContact}
                   />
                </div>

              </form>
              <div className="errorMsg">{state.errorPrint}</div>
            </div>
            <div className="parceldetailsbuttons">
              <button
                className="parceldetailssendotpbtn"
                onClick={()=>{actions.openOTPModal(state.bikeCC, state.bikeValue, state.tempContact, state.auth);}}>
                Send OTP
              </button>
              <Modal
                closeIconSize={15}
                open={state.otpModal}
                onClose={actions.resetState} center>

                  {
                    (state.verified === false && state.otpModal === true )?
                    <div className="otpmodal">
                      <div>An OTP is sent to your Mobile No. : <br/><b>+91{state.tempContact}</b></div> <br/>
                      <div>Enter the OTP below: </div> <br/>
                      <div><Input onChange={actions.onChangeOTP} name="otpnumber" placeholder="XXXX" /></div> <br/>
                      <div className="errorMsg" style={{color: "#000"}}>{state.errorPrint}</div>
                      <div className="errorMsg" style={{color: "#000"}}>{state.loadingMsg}</div>
                      <div>

                        <button onClick={()=>{actions.onChangeVerifyContact(
                        state.OTP, state.tempContact, state.auth,
                        state.fromPlace, state.toPlace, state.parcelDate,
                        state.bikeCC, state.bikeValue, state.tempContact, state.otpmsgid
                      );}} className="verifyestimatebtn">Verify & Estimate Price</button>
                      <br/><br/>
                      <a onClick={()=>{actions.openOTPModal(state.bikeCC, state.bikeValue, state.tempContact, state.auth);}}>
                        Resend OTP
                      </a>
                    </div>
                    </div>
                    :
                    <div className="otpmodal">

                      <h3 style={{textTransform: 'uppercase'}}> Price: <b>Rs. {state.orderCharge}/-</b> <br/>From: <b>{state.fromPlace}</b> <br/>To: <b>{state.toPlace}</b> </h3> <br/>

                      <h3> On Date: <b>{this.renderParcelDate(state.parcelDate)}</b> </h3>
                      <h3>The Total Price To Ship Your Bike is Rs. {state.orderCharge}/- </h3>
                      <button className="otpbooknowbtn" onClick={actions.openBookModal}>Book Now</button> <br/>
                      <button className="otpcancelbtn" onClick={actions.resetState}>Cancel</button>
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
