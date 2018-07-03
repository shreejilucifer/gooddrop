import React, { PureComponent } from 'react';

import Navbar from './Components/HomePageComps/Navbar';
import AboutHeader from './Components/AboutUsPageComps/AboutHeader';
import TempFooter from './Components/HomePageComps/TempFooter';

class ContactUs extends PureComponent {
  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="aboutus">
            <Navbar Consumer={Consumer}/>
            <AboutHeader title="CONTACT US"/>
            <div style={{display: "flex", flex: "1", flexDirection: "column", justifyContent: "center", alignItems: "center"}} className="contactus">
              <br/> <br/>
              <b>Goodrop Innovative Technologies LLP</b> <br/>
              No 32, Chiguru, Anjanaadri Nilaya <br/>
              Bhoomika Layout, Rajarajeshwari Nagar <br/>
              Bangalore, Karnataka - 560 098 <br/> <br/>

              support@gooddrop.in | +91 97 4283 4253

            </div>
            <div className="aboutusfooter">
              <TempFooter Consumer={Consumer}/>
            </div>

          </div>
        )}
      </Consumer>
    );
  }

}

export default ContactUs;
