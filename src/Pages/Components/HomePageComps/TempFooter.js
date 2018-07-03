import React, { PureComponent } from 'react';
import '../CSS/HomePageCSS/footer.css';
import facebookicon from '../Assets/facebook.png';
import twittericon from '../Assets/twitter.png';
import instagramicon from '../Assets/linkedin.png';
import { Link } from 'react-router-dom';

class Footer extends PureComponent {

  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="tempfooter">
            <div className="footergrid">
              <div className="leftsection">
                <div className="left">
                  <ul>
                    <h4 className="templisttitle"><b>Gooddrop</b></h4>
                    <Link to="/aboutus"><li className="templistitems">About Us</li></Link>
                    <Link to="/customerreviews"><li className="templistitems">Customer Reviews</li></Link>
                    <Link to="/contactus"><li className="templistitems">Contact Us</li></Link>

                  </ul>
                </div>
                <div className="left">
                  <ul>
                    <h4 className="templisttitle"><b>Information</b></h4>
                    <Link to="/howitworks"><li className="templistitems">How It Works</li></Link>
                    <Link to="/docsrequired"><li className="templistitems">Documents Required</li></Link>
                    <li className="templistitems">Blog</li>
                    <li className="templistitems">FAQs</li>
                  </ul>
                </div>
                <div className="left">
                  <ul>
                    <h4 className="templisttitle"><b>Policies</b></h4>
                    <li className="templistitems">Shipping Policy</li>
                    <Link to="/paymentpolicy"><li className="templistitems">Payment Policy</li></Link>
                    <Link to="/terms"><li className="templistitems">Terms of Use</li></Link>
                    <li className="templistitems">Cancellations & Modifications</li>
                    <Link to="/privacypolicy"><li className="templistitems">Privacy Policy</li></Link>
                  </ul>
                </div>
              </div>
              <div className="socialsection">
                <a className="socialicons" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebookicon} alt="Facebook" width="30px"/>
                </a>
                <a className="socialicons" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twittericon} alt="Twitter" width="30px"/>
                </a>
                <a className="socialicons" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagramicon} alt="Instagram" width="30px"/>
                </a>
              </div>
            </div>
            <div className="sidegraphics"></div>
          </div>
        )}
      </Consumer>
    );
  }

}

export default Footer;
