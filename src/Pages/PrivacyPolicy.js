import React, {PureComponent} from 'react';
import Navbar from './Components/HomePageComps/Navbar';
import Footer from './Components/HomePageComps/Footer';
import AboutHeader from './Components/AboutUsPageComps/AboutHeader';

class PrivacyPolicy extends PureComponent {

  render() {
    return (<div className="privacypolicy">
      <Navbar Consumer={this.props.Consumer}/>
      <AboutHeader title="PRIVACY POLICY"/>
      <div style={{
          textAlign: "justify",
          marginTop: "50px",
          marginBottom: "50px",
          marginLeft: "200px",
          marginRight: "200px"
        }}>
        Privacy Policy explains how Goodrop Innovations Technologies LLP (also referred as Goodrop, GOODDROP, GoodDROP, Gooddrop, GOODDROP.in, www.gooddrop.in, we, us, our) collects, uses and shares information about customer (also referred as 'user', 'you', 'your')
        <br/>
        <br/>
        <b>Agreement</b>
        <br/>
        We review our Privacy Policy quite often, please check this page from time to time to be aware of the changes in our Privacy Policy. By signing up with GOODDROP, you agree to the terms of GOODDROP's privacy policy, terms of use and Terms and conditions. Customer consents and agrees that GOODDROP may collect, use and disclose such Personally Identifiable Information in accordance with this Privacy Policy, Terms of Use and Terms and Conditions etc. as permitted or required by law. If you refuse or withdraw your consent, or if you choose not to provide us with any required Personally Identifiable Information, we may not be able to provide you with the services that can be offered on our Website.
        <br/>
        <b>What user or customer information we collect</b><br/>
        <ol>
          <li>Customer personal information, which could potentially be used to identify a customer personally, such as name, e-mail address, address and mobile number, identity documents etc. (“Personal Information”).
          </li>
          <li>We may collect this information through various forms and in various places through our website. Including account registration forms, contact us, booking an order etc.</li>
          <li>
            Your transaction or banking details such as credit card number, cardholder name, expiration date and CVV or other information as required for internet banking or other payment instruments is not held by GOODDROP but is held by our Payment Gateway partners. Our payment gateway partner is "VeriSign Secured" and "PCI-Compliant" which ensure the highest standards of safety and security for your information.
            <ol>
              <li>Your previous orders and transactions including the date of purchase, transaction information, payment history etc.</li>
              <li>Information from optional online surveys on our or third party sites (posted by GOODDROP) which may include demographic information (like gender, age, income) as well as product and service preferences of users.</li>
              <li>Cookies: Cookies is a piece of data stored by a website within a browser which enable the browser to remember information specific to a given user such as clicking particular buttons, logging in, or having read certain pages on our site. All leading Internet companies such as Amazon, Yahoo, Google and Facebook use cookies. You can set your browser to notify you when you are sent a cookie, and you can decide whether or not to accept it.</li>
              <li>Your session log information on our site which includes your navigation within the site, source of traffic, IP address (from which we can approximately determine user location), browser type, browser language, operating system, date and time of request etc.</li>
              <li>Email communication by any user or customer directly with GOODDROP such as service enquiry, order and transaction related information, disputes or complaints etc.
              </li>
            </ol>
          </li>
        </ol>
        <br/><b>How do GOODDROP use customer information? </b><br/>
        <ol>
          <li>GOODDROP collects Personal information which is required to conduct our business and to enable us to provide our services to our customers.  </li>
          <li>Customer information may be shared with our affiliates and partners etc which are also involved in delivering our services to the customer. Customer information will be shared with Railways while sending a parcel request and courier/speed post services to send the NOC/acknowledgement receipt to the nominated recipient in the destination city. </li>
          <li>GOODDROP may use this information to understand customer behavior and provide our customer a more relevant experience and service. Cookies will be used to enable us to run this analysis</li>
          <li>GOODDROP may use this information to send you offers, new launches, information about our services, booking status, promotional and information content and surveys etc. </li>
          <li>GOODDROP may use collected system information (IP address, session log, OS information, traffic flow, user navigation across the site) to analyze how customers are interacting with our website, to analyze customer preferences and to run demographic level analysis. </li>
          <li>GOODDROP may also use user information to trouble shoot problems, in case of legal disputes, to defend against legal claims or as otherwise required by law or to comply with any statutory regulations etc.</li>
          <li>GOODDROP may disclose and/or transfer customer's personal information to an acquirer, merger or successor entity etc. </li>
          <li>In case of any enquiries/questions/concerns related to privacy policy and its terms of use, please write to support@GOODDROP.in </li>
          <li>Customer is responsible to maintain the accuracy of the personal information provided. If a customer's personal information changes or a customer does not wish to avail GOODDROP’s services any longer, he/she can wish to terminate/delete the account. </li>
          <li>GOODDROP will retain customer's personal and usage Information (transaction history etc.) as needed to comply with legal obligations and statutory regulations, resolve disputes, conclude activities related to the termination of an account, investigate or prevent fraud and other inappropriate activity, to enforce our agreements, and for other business reason.</li>
        </ol>
        <br/><b>Security</b><br/>
        <ol>
          <li>GOODDROP is committed to the security of personal information collected from the customers. GOODDROP uses industry-wide security practices to securely keep the data in its databases. However, no system can claim to be 100% impenetrable. GOODDROP does not guarantee the security of our storage, not can we guarantee that information you supply would not be intercepted while being transmitted to GOODDROP over the internet. Customer is responsible to protect the security of his/her login credentials. </li>
        </ol>
      </div>
      <Footer Consumer={this.props.Consumer}/>
    </div>);
  }

}

export default PrivacyPolicy;
