import React, { Component } from 'react';

class ThirdContent extends Component {

  render() {
    const orderCharge = 500 ;
    return (
      <div>
        <div className="pickupdetailsform" >
          <br/>
          <h3 className="pickupdetailsformtitle">Charges for this order would be INR <b>{orderCharge}/- </b></h3>
          <h3> PICKUP DETAILS </h3>
            <table width="50%">
              <tr>
                <td className="pickupdetailscells">Bike Details</td>
                <td className="pickupdetailscells"><b>Pulsar 150</b></td>
              </tr>
              <tr>
                <td className="pickupdetailscells">Shipping Date</td>
                <td className="pickupdetailscells"><b>21/07/2016</b></td>
              </tr>
              <tr>
                <td className="pickupdetailscells">Pickup Date</td>
                <td className="pickupdetailscells"><b>21/07/2016</b></td>
              </tr>
              <tr>
                <td className="pickupdetailscells">Pickup Slot</td>
                <td className="pickupdetailscells"><b>SLOT - A</b></td>
              </tr>
            </table>
            <br/>
            <div className="pickupdetailstwocol">
              <table>
                <h3> PICKUP DETAILS </h3>
                <tr>
                  <td className="pickupdetailscells">Simerpreet Kaur</td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">Plot No 5XX1</td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">XXXXXXXXXXXXXXXXXXXXXXX</td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">XXXXXXXXX</td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">City-XXXXXXXXX</td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">Mob 91 -XXXXXXXXX</td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">Email 91 -XXXXXXXXX@XXX.com</td>
                </tr>
              </table>
              <table>
                <h3> RECEIVER ADDRESS </h3>
                <tr>
                  <td className="pickupdetailscells">Simerpreet Kaur</td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">Plot No 5XX1</td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">XXXXXXXXXX</td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">XXXXXXXXX</td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">City-XXXXXXXXX</td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">Mob 91 -XXXXXXXXX</td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">Email -XXXXXXXXX@XXX.com</td>
                </tr>
              </table>
            </div>
            <br/>
            <div>
              <label className="pickupdetailsformlabel">Enter the OTP Sent to your Contact Number</label>
              <input className="pickupdetailsotpinput" type="number" name="otp" placeholder="OTP"/>
            </div>
            <br/>
            <div>
              <input type="checkbox" name="terms"/> <span> &nbsp; </span>
              <label className="pickupdetailsformlabel">
                I have read and understood the terms and conditions and i agree with it.
              </label>
            </div>

        </div>
      </div>
    );
  }

}

export default ThirdContent;
