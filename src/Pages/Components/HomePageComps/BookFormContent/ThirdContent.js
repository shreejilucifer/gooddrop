import React, { PureComponent } from 'react';

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
                    <b>Pulsar 150</b>
                  </td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">Shipping Date</td>
                  <td className="pickupdetailscells">
                    <b>21/07/2016</b>
                  </td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">Pickup Date</td>
                  <td className="pickupdetailscells">
                    <b>21/07/2016</b>
                  </td>
                </tr>
                <tr>
                  <td className="pickupdetailscells">Pickup Slot</td>
                  <td className="pickupdetailscells">
                    <b>SLOT - A</b>
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
                        PICKUP DETAILS
                      </h3>
                    </td>

                  </tr>
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
                </tbody>
              </table>
            </div>
            <br/>
            <div>
              <input type="checkbox" name="terms"/>
              <span>
                &nbsp;
              </span>
              <label className="pickupdetailsformlabel">
                I have read and understood the terms and conditions and i agree with it.
              </label>
            </div>

          </div>
        </div>
        )}
      </Consumer>
      );
  }

}

export default ThirdContent;
