import React, { PureComponent } from 'react';
import Navbar from './Components/HomePageComps/Navbar';
import TempFooter from './Components/HomePageComps/TempFooter';
import AboutHeader from './Components/AboutUsPageComps/AboutHeader';

class Terms extends PureComponent {

  render() {
    return (
      <div>
        <Navbar Consumer={this.props.Consumer}/>
        <AboutHeader title="TERMS & CONDITIONS"/>
        <div style={{
        textAlign: "justify",
        marginTop: "50px",
        marginBottom: "50px",
        marginLeft: "200px",
        marginRight: "200px"
      }}>
        <b>Terms & Conditions</b><br/>
        <ol>
          <li>'GOODDROP.in', 'GOODDROP',’Goodrop’, 'www.GOODDROP.in', 'we', and ‘us’ refer to the GOODDROP Innovative Technologies LLP. 'User', 'customer', 'you' refers to the customer of GOODDROP who is availing the GOODDROP services. </li>
          <li>GOODDROP provides hassle free services to those who intend to send their bikes through Railways Parcel department. GOODDROP provides door step pick up service, complete the documentation facility with Railways on customer's behalf, package the bike to make it parcel ready. </li>
          <li>GOODDROP cannot track the shipping status once the bike gets shipped or while the train is in transit, however, GOODDROP would try to communicate the tentative arrival date of the bike to its destination Railways station.</li>
          <li>GOODDROP strictly complies with KYC documentation process. Orders where proper documents are not been provided by the customers, will stand cancelled.</li>
          <li>The bikes which have valid first party insurance policy/package only are eligible for parcel/courier/shipping. Customer will use his/her discretion to establish it before placing the order with GOODDROP. GOODDROP will hold no responsibility whatsoever for invalid/expired/3rd party/liability insurance.</li>
          <li>GOODDROP holds the safety and security of the bike until it is handed over to Railways parcel department. Once the bike is handed over to Railways parcel office, GOODDROP will not be liable for any damage, safety and security related issues. The bike parcel will then be subjected to Railways rules and regulations. Further to this, customer would have to contact Railways for any complaint or query. </li>
          <li>GOODDROP will take utmost care in handling the bike, however, if due to some unforeseen reasons, the bike gets damaged, then GOODDROP will take the responsibility to ship the bike to the designated insurance office as per customer's request. Customer should take care of claiming the insurance on the accident. </li>
          <li>If any damage happens to the bike while in journey or when under the control of Railways, the matter would be subjected to Railways rules and regulations. GOODDROP will be no party to such procedures and customer would have to interact with Railways directly. (Please refer to Railways rules and regulations here: http://www.indianrail.gov.in/doc/Rulesratesforcharging_bic.pdf   and http://www.indianrail.gov.in/luggage_Rule.html )</li>
          <li>When the bike reaches the destination city. It would be customer's responsibility to receive the bike from the destination Railways parcel office. GOODDROP would send the acknowledgment/NOC receipt by speed post/courier to the recipient nominated by the customer. The recipient should produce the receipt while collecting the bike.</li>
          <li>GOODDROP strives its best to send the bike parcel as per the date preferred by the customer but it is not in GOODDROP’s control to parcel the bike on the selected date. Railways parcel department holds the complete control over the shipping process and the actual parcel date may be different from the selected date based on factors like luggage coach unavailability, unforeseen weather conditions etc.</li>
          <li>Customer will hold GOODDROP indemnified and harmless from and against any losses, liabilities, claims, damages, demands, costs and expenses (including legal fees and disbursements in connection therewith and interest chargeable thereon) asserted against or incurred by GOODDROP that arise out of, result from, or may be payable by virtue of, any breach of any representation  or agreement made or obligations arising out of the terms or additional terms applicable while availing our services.</li>
          <li>In no event shall GOODDROP, its officers, directors, employees, executives, partners etc. will be liable to the customer for any special, indirect, consequential or punitive damages whatsoever, whether foreseeable or not.  GOODDROP’s entire liability to the customer under these terms of service shall be refund of the money charged from the customer, which will be subjected to the refund policy. </li>
          <li>GOODDROP will not be liable for any loss that you may incur as a consequence of unauthorized use of your account or account information, either with or without your knowledge. </li>
          <li>GOODDROP does not provide any warranties relating to the quality, accuracy or completeness of any data, information, product or service. GOODDROP shall not be responsible for the delay or inability to use the website or related functionalities, the provision of or failure to provide functionalities.</li>
          <li>GOODDROP is not responsible for non-availability of the website during periodic maintenance operations or any unplanned suspensions of access to the website that may occur due to technical reasons or for any reason. </li>
          <li>All claims, differences and disputes arising under or in connection with or in relation hereto the Website, the Terms or any transactions entered into on or through the Website shall be subject to the exclusive jurisdiction of the courts at Bangalore Urban District, India and customer hereby accede to and accept the jurisdiction of such courts</li>
          <li>Customer confirms that he/she has read and fully understands the Privacy Policy and Terms of Use of GOODDROP in respect of the Website. Customer further consents that the terms and contents of such Privacy Policy are acceptable to him/her and have been accepted during the sign up process.</li>
          <li>GOODDROP at its sole discretion and without any prior notice may terminate or suspend any customer's access to the website. GOODDROP may exercise removal of user information etc if any customer's usage of website or our services violate (a) GOODDROP's user agreement, right of GOODDROP and its affiliates, (b) any law or regulation etc. </li>
          <li>Following activities (not an exhaustive list) are prohibited and are punitive in nature:
            <ul>
              <li>(i) Attempts to obtain the source code for the software</li>
              <li>(ii) Malicious attempts to impose disproportionately large load on GOODDROP's servers.</li>
            </ul>
          </li>
          <li>GOODDROP website may contain links to affiliates, and websites owned and operated by third parties. GOODDROP does not sponsor or express any warrantee or guarantee whether direct or implied for the websites linked to or from the GOODDROP website. GOODDROP is not responsible for any loss or damage whatsoever incurred by the customer while interacting/transacting with these websites.</li>
        </ol>
        </div>
        <TempFooter Consumer={this.props.Consumer}/>
      </div>
    );
  }

}

export default Terms;
