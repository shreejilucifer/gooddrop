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
        <AboutHeader title="DOCUMENTS REQUIRED"/>
        <div className="docrequired">

        <ol>
          <li>Bike RC (Registration Certificate) copy</li>
          <li>Bike Insurance copy. ( we don’t take the bike shipping order of bike which have 3rd party insurance)</li>
          <li>Bike Owner’s ID proof copy.</li>
          <li>Authorisation letter addressing to Railway.</li>
        </ol>
        </div>

        <TempFooter Consumer={this.props.Consumer}/>

      </div>
    );
  }

}

export default DocumentsRequired;
