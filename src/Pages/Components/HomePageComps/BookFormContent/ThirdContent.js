import React, { PureComponent } from 'react';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';

class ThirdContent extends PureComponent {

  parcelDateFunction = (parcelDate) => {

    var year = parcelDate.slice(0,4);
    var month = parcelDate.slice(5,7);
    var day = parcelDate.slice(8,10);
    var res = day.concat("-",month,"-",year);

    return res;
  }

  pickupDateFunction = (pickupDate) => {
    var year2 = pickupDate.slice(0,4);
    var month2 = pickupDate.slice(5,7);
    var day2 = pickupDate.slice(8,10);
    var res2 = day2.concat("-",month2,"-",year2);
    return res2 ;
  }

  renderCapital = (cap) => {
    return cap.charAt(0).toUpperCase() + cap.substr(1);
  }

  render() {
    const Consumer = this.props.Consumer ;

    return (
      <Consumer>
        {({ state, actions }) => (
          <div>
          <div className="pickupdetailsform">
            <br/>
            <h3 className="pickupdetailsformtitle">
              <b> The Total Price To Ship Your Bike is Rs. {state.orderCharge}/- </b>
            </h3>
            <h3>
              PICKUP DETAILS
            </h3>
            <table width="100%">
              <tbody>
                <tr>
                  <td className="pickupdetailscells">Bike Details</td>
                  <td className="pickupdetailscells">
                    <b> {state.bikeCC} CC</b>
                  </td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">Shipping Date</td>
                  <td className="pickupdetailscells">
                    <b>{this.parcelDateFunction(state.parcelDate)}</b>
                  </td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">Pickup Date</td>
                  <td className="pickupdetailscells">
                    <b>{this.pickupDateFunction(state.pickupDate)}</b>
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
                    <td className="pickupdetailscells">{this.renderCapital(state.townCity)}</td>
                  </tr>
                  <tr>
                    <td className="pickupdetailscells">{this.renderCapital(state.addressState)}</td>
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
                    <td className="pickupdetailscells">{this.renderCapital(state.receivertownCity)}</td>
                  </tr>
                  <tr>
                    <td className="pickupdetailscells">{this.renderCapital(state.receiveraddressState)}</td>
                  </tr>

                  <tr>
                    <td className="pickupdetailscells">Mob +91{state.receivercontactNumber}</td>
                  </tr>

                </tbody>
              </table>
            </div>
            <br/>
            <div>
              <Checkbox onChange={actions.onChangeCheckBox}>
                I have read and understood all <Link to="/terms">Terms and Conditions</Link>, <Link to="/shippingpolicy">Shipping Policies</Link> & <Link to="/paymentpolicy">Payment Policies</Link> and I agree with them.
              </Checkbox>
            </div>

          </div>
        </div>
        )}
      </Consumer>
      );
  }

}

export default ThirdContent;
