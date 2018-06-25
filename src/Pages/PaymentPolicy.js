import React, {PureComponent} from 'react';
import Navbar from './Components/HomePageComps/Navbar';
import Footer from './Components/HomePageComps/Footer';
import AboutHeader from './Components/AboutUsPageComps/AboutHeader';

class PaymentPolicy extends PureComponent {

  render() {
    return (<div>
        <Navbar Consumer={this.props.Consumer}/>
        <AboutHeader title="PAYMENT POLICY"/>
        <div style={{
            textAlign: "justify",
            marginTop: "50px",
            marginBottom: "50px",
            marginLeft: "200px",
            marginRight: "200px"
          }}>
          <ol>
            <li>If GOODDROP is not able to collect the bike and the documents at the planned pickup date, we will provide full refund and 10% discount on next order.</li>
            <li>If a customer cancels the order before the planned pick up date. GOODDROP will provide 100% refund. (It would be cancel through website only)</li>
            <li>If a customer wants to cancel the order after the bike has been picked up by our executive. Customer will have to call our customer care to facilitate the drop of the bike. Then, order would be cancelled and an inconvenience charge of Rupees 860 would be levied on the customer. Rest of the amount would be deposited back to the customer's account.</li>
            <li>If a customer fails to show the original documents at the time of pick up to the pickup expert or the uploaded documents do not match with the originals. Order would be cancelled and an inconvenience charge of 860rs would be levied on the customer. Rest of the amount would be deposited back to the customer's account.
            </li>
            <li>There will be no COP (Cash On Pickup) option available for the orders where customer has selected to provide the documents during pick up
            </li>
            <li>If due to some unforeseen circumstances, the train which is supposed to carry the bike to its destination gets cancelled or postponed for more than 5 days. Customer will have the option to recall the order. GOODDROP will help the customer in re-planning the parcel. If the customer still wants to recall the order then GOODDROP would levy service charge of Rupees 860 and rest of the amount would be deposited back to customer's account.</li>
            <li>How will we refund money for customers who opted COP: To customer's bank account.</li>
          </ol>
        </div>
        <Footer Consumer={this.props.Consumer}/>
      </div>
      );
  }

}

export default PaymentPolicy;
