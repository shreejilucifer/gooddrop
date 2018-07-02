import React, { PureComponent } from 'react';

import Navbar from './Components/HomePageComps/Navbar';
import AboutHeader from './Components/AboutUsPageComps/AboutHeader';
import AboutData from './Components/AboutUsPageComps/AboutData';
import TempFooter from './Components/HomePageComps/TempFooter';

class AboutUs extends PureComponent {
  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="aboutus">
            <Navbar Consumer={Consumer}/>
            <AboutHeader title="ABOUT US"/>
            <AboutData />
            <div className="aboutusfooter">
              <TempFooter Consumer={Consumer}/>
            </div>

          </div>
        )}
      </Consumer>
    );
  }

}

export default AboutUs;
