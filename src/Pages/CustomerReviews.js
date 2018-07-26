import React, {PureComponent} from 'react';
import Navbar from './Components/HomePageComps/Navbar';
import AboutHeader from './Components/AboutUsPageComps/AboutHeader';
import TempFooter from './Components/HomePageComps/TempFooter';
import './Components/CSS/CustomerReviewCSS/customerreviewpage.css';

class CustomerReviews extends PureComponent {
  render() {
    const Consumer = this.props.Consumer;
    return (<Consumer>
      {
        ({state, actions}) => (<div>
          <Navbar Consumer={Consumer}/>
          <AboutHeader title="CUSTOMER REVIEWS"/>

          <div className="customer-grid">
            <div className="review-card">
              <div>
               <q className="review-text">I had very nice experience with Gooddrop, where I had to transfer my bike to Delhi from Bangalore, I was in hurry because I was travelling abroad the very next day,I met Mr Naveen in Bangalore cantt station and he helped me and got my bike transferred without any hassle , really was very satisfied with the service provided by Gooddrop , great guys keep up the good work. Thanks Naveen #Thanks Gooddrop</q>
              </div> <br/>
              <div className="reviewer-name">
                - Tarun Barthwal
              </div>
            </div>
            <div className="review-card">
              <div>
                <q className="review-text">I'm writing this review in recoginition, and as a token of appreciation for the service that GoodDrop provides. I just got my bike transferred from Bangalore to New Delhi through GoodDrop and I can't be more happier with the choice I made. If you want a hassle free and scratch free transfer from Bangalore, you have just landed on the right page. Train is the safest mode to transport your bike but it is hectic as well. GoodDrop will make it extremely easier for you at a reasonable rate. Mr. Naveen's seemless communication and updates at every point will give you an assurance that your bike is in safe hands. Also, the team is extremely professional than any other transport agency that I know of. Thanks a lot GoodDrop team. #Getagooddrop</q>
              </div> <br/>
              <div className="reviewer-name">
                - Atul Kumar Singh
              </div>
            </div>
            <div className="review-card">
              <div>
                <q className="review-text">Very nice team. Reliable service. We can easily ship our bikes with no tension.</q>
              </div> <br/>
              <div className="reviewer-name">
                - ATCHUTANAND RAO
              </div>
            </div>
          </div>

          <TempFooter Consumer={Consumer}/>

        </div>)
      }
    </Consumer>);
  }

}

export default CustomerReviews;
