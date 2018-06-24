import React, { PureComponent } from 'react';
import '../CSS/HomePageCSS/footer.css';
import facebookicon from '../Assets/fbicon.png';
import twittericon from '../Assets/twittericon.png';
import instagramicon from '../Assets/linkedinicon.png';

class Footer extends PureComponent {

  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="footer">
            <div className="footergrid">
              <div className="leftsection">
                <div className="left">
                  <ul>
                    <h4 className="listtitle"> Company </h4>
                    <li className="listitems">About Us</li>
                    <li className="listitems">Customer Reviews</li>
                    <li className="listitems">Booking Terms</li>
                    <li className="listitems">Terms of Use</li>
                    <li className="listitems">Privacy Policy</li>
                  </ul>
                </div>
                <div className="left">
                  <ul>
                    <h4 className="listtitle"> Support </h4>
                    <li className="listitems">How to</li>
                    <li className="listitems">FAQs</li>
                  </ul>
                </div>
                <div className="left">
                  <ul>
                    <h4 className="listtitle"> Need Help </h4>
                    <li className="listitems">support@gooddrop.com</li>
                    <li className="listitems">Call at 9756432675</li>
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
          </div>
        )}
      </Consumer>
    );
  }

}

export default Footer;
