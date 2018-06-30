import React, { PureComponent } from 'react';
import '../CSS/HomePageCSS/footer.css';
import facebookicon from '../Assets/fbicon.png';
import twittericon from '../Assets/twittericon.png';
import instagramicon from '../Assets/linkedinicon.png';
import { Link } from 'react-router-dom';

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
                    <Link to="/aboutus"><li className="listitems">About Us</li></Link>
                    <Link to="/customerreviews"><li className="listitems">Customer Reviews</li></Link>
                    <Link to="/paymentpolicy"><li className="listitems">Payment Policy</li></Link>
                    <Link to="/terms"><li className="listitems">Terms of Use</li></Link>
                    <Link to="/privacypolicy"><li className="listitems">Privacy Policy</li></Link>
                  </ul>
                </div>

                <div className="left">
                  <ul>
                  
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
