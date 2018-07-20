import React, { PureComponent } from 'react';
import Navbar from './Components/HomePageComps/Navbar';
import TempFooter from './Components/HomePageComps/TempFooter';
import AboutHeader from './Components/AboutUsPageComps/AboutHeader';
import '../Pages/Components/CSS/AboutUsPageCSS/aboutdata.css';

class Terms extends PureComponent {

  render() {
    return (
      <div>
        <Navbar Consumer={this.props.Consumer}/>
        <AboutHeader title="TERMS & CONDITIONS"/>
        <div className="termsandcondition">
        <b>Terms & Conditions</b><br/>
        <ol>
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
