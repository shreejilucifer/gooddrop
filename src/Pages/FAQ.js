import React, { PureComponent } from 'react';
import Navbar from './Components/HomePageComps/Navbar';
import TempFooter from './Components/HomePageComps/TempFooter';
import AboutHeader from './Components/AboutUsPageComps/AboutHeader';
import '../Pages/Components/CSS/AboutUsPageCSS/aboutdata.css';

class DocumentsRequired extends PureComponent {

  render() {
    return (
      <div>
        <Navbar Consumer={this.props.Consumer}/>
        <AboutHeader title="FAQs"/>
        <div className="howitworksdata">

        <ol>
          <li>
            <b>Does Gooddrop offer roadways transport facility?</b>
            <ul>
              <li>No, Gooddrop offers bike transport facility only through Railways.</li>
            </ul>
          </li>
          <br/>
          <li>
            <b>Does Gooddrop takes bulk shipping orders?</b>
            <ul>
              <li>Yes. we wish to do anything for you :)</li>
            </ul>
          </li>
          <br/>
          <li>
            <b>The “From” and “To” station which I am looking for are not in the list, what to do?</b>
            <ul>
              <li>Please click on “Add Station” tab and let us from Where to Where you are willing to ship your bike. We will definitely help you out.</li>
            </ul>
          </li>
          <br/>
          <li>
            <b>Will I get my bike delivered to my doorstep at destination city?</b>
            <ul><li>
              No we are sorry! Currently we are , the customer has to pick up the motor bike from the destination Railway station. But we are aiming at providing doorstep delivery in the destination cities shortly.

            </li>
          </ul>
        </li>
        <br/>
        <li>
          <b>Is the pickup inclusive of the charges?</b>
          <ul>
            <li>Yes. Gooddrop doesn’t encourage its customer to pay any additional charges apart from the charges levied at the time of booking.</li>
          </ul>
        </li>
        <br/>
        <li>
          <b>What if I am transporting a bike in a bad condition?</b>
          <ul>
            <li>Gooddrop executives check the condition of the motorbikes with all the required documents. Upon verification, if it meets the standard of transportation the booking will be confirmed.</li>
          </ul>
        </li>
        <br/>
        <li>
          <b>Should I pay at the destination station to collect my bike?</b>
          <ul>
            <li>Not at all !! You just need to collect the bike within 6 hours from the time bike has reached the destination station, otherwise you might be charged warehouse charges (Rs 10/ hour) by Railway parcel office. Otherwise, there won’t be any other charges you need to pay.</li>
          </ul>
        </li>
        <br/>
        <li>
          <b>Is Gooddrop liable to any damages occurred during transport of the motorbike?</b>
          <ul>
            <li>We at Gooddrop are just doing the job what you might have done yourself to ship your bike :) Once we handover the bike to Railways, we won’t be having any control over the shipment so Gooddrop will not be responsible for any damages incurred during the transport.</li>
          </ul>
        </li>
        <br/>
        <li>
          <b>Will my motorbike be insured during my time of transport?</b>
          <ul>
            <li>No. We don’t ship bikes which are not insured.And  we don’t take the bike shipping order of bike which have 3rd party insurance</li>
          </ul>
        </li>
        <br/>
        <li>
          <b>Can I transport my bicycle through Gooddrop?</b>
          <ul>
            <li>Yes, love bicycles as well :).</li>
          </ul>
        </li>
        <br/>
        <li>
          <b>Why we need to enter Bike Value and Bike CC.</b>
          <ul>
            <li>Bike Value and Bike CC are 2 main attributes which railways uses to calculate the shipping cost so we are.</li>
          </ul>
        </li>
        <br/>
        <li>
          <b>What are the documents required to collect the bike at destination station?</b>
          <ul>
            <li>The original receipt issued by Railways which we will send it to your destination address through courier and original ID proof of the recipient on whose name the shipment has booked.</li>
          </ul>
        </li>
        <br/>
        <li>
          <b>What are the payment modes you accept?</b>
          <ul>
            <li>From bitcoin, ethereum to netbanking, UPI, card payments, cash, any of these mode is fine with us.</li>
          </ul>
        </li>
        <br/>
        <li>
          <b>What material does Gooddrop use to pack the bikes?</b>
          <ul>
            <li>We use gunny material/ plastic sheets/ bubble raps to pack the bikes.</li>
          </ul>
        </li>
        <br/>
        <li>
          <b>Is it mandatory to carry original Railway receipt to collect the bike at the destination station?</b>
          <ul>
            <li>Yes, it is a must! We will either courier the Railway shipment receipt to your destination address or we will hand over the same to you in person at your source's address.</li>
          </ul>
        </li>
        </ol>
        </div>

        <TempFooter Consumer={this.props.Consumer}/>

      </div>
    );
  }

}

export default DocumentsRequired;
