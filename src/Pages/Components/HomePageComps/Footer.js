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
          <div>
            <div className="footer">
              <div className="footergrid">
                <div className="leftsection">
                  <div className="left">
                    <ul>
                      <h4 className="listtitle"><b>Gooddrop</b></h4>
                      <Link to="/aboutus"><li className="listitems">About Us</li></Link>
                      <Link to="/customerreviews"><li className="listitems">Customer Reviews</li></Link>
                      <Link to="/contactus"><li className="listitems">Contact Us</li></Link>

                    </ul>
                  </div>
                  <div className="left">
                    <ul>
                      <h4 className="listtitle"><b>Information</b></h4>
                      <Link to="/howitworks"><li className="listitems">How It Works</li></Link>
                      <Link to="/docsrequired"><li className="listitems">Documents Required</li></Link>
                      <a href="https://www.flickr.com/photos/159750061@N07/" rel="noopener noreferrer" target="_blank"><li className="listitems">Gallery</li></a>
                      <Link to="/faq"><li className="listitems">FAQs</li></Link>
                    </ul>
                  </div>
                  <div className="left">
                    <ul>
                      <h4 className="listtitle"><b>Policies</b></h4>
                      <Link to="/shippingpolicy"><li className="listitems">Shipping Policy</li></Link>
                      <Link to="/paymentpolicy"><li className="listitems">Payment Policy</li></Link>
                      <Link to="/terms"><li className="listitems">Terms of Use</li></Link>
                      <Link to="/cancellation"><li className="listitems">Cancellations & Modifications</li></Link>
                      <Link to="/privacypolicy"><li className="listitems">Privacy Policy</li></Link>
                    </ul>
                  </div>
                </div>
                <div className="containersocial">
                  <div className="socialsection">
                    <a className="socialicons" href="https://www.facebook.com/getaGoodDrop/" target="_blank" rel="noopener noreferrer">
                      <img src={facebookicon} alt="Facebook" width="30px"/>
                    </a>
                    <a className="socialicons" href="https://twitter.com/getaGoodDrop" target="_blank" rel="noopener noreferrer">
                      <img src={twittericon} alt="Twitter" width="30px"/>
                    </a>
                    <a className="socialicons" href="https://www.linkedin.com/company/gooddrop/" target="_blank" rel="noopener noreferrer">
                      <img src={instagramicon} alt="Instagram" width="30px"/>
                    </a>
                  </div>
                  <div className="copyright">
                    &copy; Gooddrop 2018
                  </div>
                </div>

              </div>
            </div>

          </div>

        )}
      </Consumer>
    );
  }

}

export default Footer;
