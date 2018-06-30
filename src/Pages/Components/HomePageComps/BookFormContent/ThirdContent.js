import React, { PureComponent } from 'react';
import { Checkbox } from 'antd';

class ThirdContent extends PureComponent {

  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div>
          <div className="pickupdetailsform">
            <br/>
            <h3 className="pickupdetailsformtitle">Charges for this order would be INR
              <b> {state.orderCharge}/-
              </b>
            </h3>
            <h3>
              PICKUP DETAILS
            </h3>
            <table width="50%">
              <tbody>
                <tr>
                  <td className="pickupdetailscells">Bike Details</td>
                  <td className="pickupdetailscells">
                    <b>{state.bikeCC} CC</b>
                  </td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">Shipping Date</td>
                  <td className="pickupdetailscells">
                    <b>{state.parcelDate}</b>
                  </td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">Pickup Date</td>
                  <td className="pickupdetailscells">
                    <b>{state.pickupDate}</b>
                  </td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">Pickup Slot</td>
                  <td className="pickupdetailscells">
                    <b>{state.pickupSlot}</b>
                  </td>
                </tr>
              </tbody>
            </table>
            <br/>
            <div className="pickupdetailstwocol">
              <table>

                <tbody>
                  <tr>
                    <td>
                      <h3>
                        SENDER DETAILS
                      </h3>
                    </td>

                  </tr>
                  <tr>
                    <td className="pickupdetailscells">{state.senderName}</td>
                  </tr>
                  <tr>
                    <td className="pickupdetailscells">{state.addressLine}</td>
                  </tr>
                  <tr>
                    <td className="pickupdetailscells">City-{state.townCity}</td>
                  </tr>
                  <tr>
                    <td className="pickupdetailscells">{state.addressState}</td>
                  </tr>
                  <tr>
                    <td className="pickupdetailscells">Mob +91{state.contactNumber}</td>
                  </tr>
                  <tr>
                    <td className="pickupdetailscells">Email-{state.emailID}</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h3>
                        RECEIVER ADDRESS
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td className="pickupdetailscells">{state.receiverName}</td>
                  </tr>
                  <tr>
                    <td className="pickupdetailscells">{state.receiveraddressLine}</td>
                  </tr>
                  <tr>
                    <td className="pickupdetailscells">City-{state.receivertownCity}</td>
                  </tr>
                  <tr>
                    <td className="pickupdetailscells">{state.receiveraddressState}</td>
                  </tr>

                  <tr>
                    <td className="pickupdetailscells">Mob +91{state.receivercontactNumber}</td>
                  </tr>
                  <tr>
                    <td className="pickupdetailscells">Email-{state.receiveremailID}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br/>
            <div>
              <Checkbox onChange={actions.onChangeCheckBox}>I have read and understood the terms and conditions and i agree with it.</Checkbox>
            </div>

          </div>
        </div>
        )}
      </Consumer>
      );
  }

}

export default ThirdContent;
