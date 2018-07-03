import React, { PureComponent } from 'react';
import Navbar from './Components/HomePageComps/Navbar';
import TempFooter from './Components/HomePageComps/TempFooter';
import AboutHeader from './Components/AboutUsPageComps/AboutHeader';

class HowItWorks extends PureComponent {

  render() {
    return (
      <div>
        <Navbar Consumer={this.props.Consumer}/>
        <AboutHeader title="HOW IT WORKS"/>
        <div style={{
        textAlign: "justify",
        marginTop: "50px",
        marginBottom: "50px",
        marginLeft: "200px",
        marginRight: "200px"
      }}>
        
        <ol>
          <li>
            You create an order by searching Train availability where you have to provide the needful information i.e
            <ul>
              <li>Destination station to which your beloved bike has to be shipped. </li>
              <li>Pick up date and time slot as per your convenience and then bike type, weight, current value of the bike.</li>
              <li>Pick up location details with contact number and mailing information.</li>
              <li>You need to provide the shipment receiver’s details such as their full name, address and phone number. </li>
              <li>You must also provide the shipment receiver’s personal address to which we will courier the railway’s airbill (original) receipt and your bike. Without these the receiver cannot get the bike at destination railway station. So please provide us with genuine info. </li>
            </ul>
          </li>
          <li>Once you done with the order placing process just sit back and relax, Goodrop team will call you and confirm your order and the pickup info provided by you. </li>
          <li>Once your order get confirmed you will receive an e mail with the details of your order and details of dedicated pick up executive , which includes executive name, photo phone no and DL details. </li>
          <li>
            Now our executive will call you and reach your door step at your convenient and pick up your bike. Please cooperate with our executive for documentation process.
            <ul>
              <li>Please provide the photocopy of your bike / RC book/ Card, DL and insurance copy. ( we don’t take the bike shipping order of bike which have 3rd party insurance) </li>
              <li>Please produce original documents for our executives for reference and cross check. </li>
              <li>Undersign the documents which need to submit to the railways i.e railways shipment/ parcel form, driving license, RC copy, insurance copy, shipment authorization letter, Goodrop undertaking letter.</li>
              <li>Pay the invoice amount if you have chosen cash on pick up</li>
              <li>Take a selfie with our executive hand over your bike to our care.</li>
            </ul>
          </li>
          <li>
            The moment you handover your bike to our executive, you could start tracking your bike movements. You will also get the updates on your bike shipment process till it get shipped to train.
            <ul>
              <li>Our executive bring bike to our shipment hub where one of the designated manager look after it throughout the journey.</li>
              <li>The bike will be packed depending upon the shipment date requested by you and as per the railways rules and regulations. You will also receive an update on this with packed bike photos. The designated manager cross check the packing quality and insist for further shipment process.</li>
              <li>The details will be shared with Bangaluru city Police on request by the Police Department to avoid the illegal bike transmission and any such activities. </li>
              <li>The bike will be handed over to railways with all the documents provided by you on the right date</li>
              <li>Our shipment team at railway station make sure that your bike will be shipped to the correct train in safe condition.</li>
              <li>Once we ship the bike, Goodrop team will send the railway airbill/receipts and Bike Key to the receiver’s postal address shared by you through speed post / express courier service and will share the courier details with both (sender and receiver) . it will be receivers responsibility to collect the courier and get the bike from destination railway station</li>
              <li>You will be receiving an e mail with photos and scan copy of railway airbill and courier bill. </li>
              <li>We wish to get a small reply at the end “when you meet your beloved bike“ at destination.</li>
            </ul>
          </li>
        </ol>
        </div>
        <TempFooter Consumer={this.props.Consumer}/>
      </div>
    );
  }

}

export default HowItWorks;
