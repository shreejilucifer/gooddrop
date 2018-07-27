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
                <q className="review-text">
                  After looking online for packers and movers, and then getting offline quotes for shipping my bike from Bangalore to Pune one of my colleagues suggested me about www.gooddrop.in, I was reluctant about any online website but GOODROP gave me surprise on their website. They actually have good websites which are easy to understand. And then reading about Gooddrop on team BHP & on YourStory, I got confidence and then I choose online price calculator which is very easy and accurate. I placed an order and paid online. They picked up the bike from my doorstep and shipped it through Railways. Guess what, I received my bike at Pune within 48 hours! It was good so I shipped my bike with Gooddrop. Their team was proficient in handling my very new bike, which was my main concern and on top of that, they packed it so nicely that, there was no damage. I have referred Gooddrop to more than 20 people and heard similar experiences from all of them. When you think of shipping of your bike, you must opt Gooddrop’s services.
                </q>
              </div>
              <br/>
              <div className="reviewer-name">
                - Sangeetha Bangar
              </div>
            </div>
            <div className="review-card">
              <div>
                <q className="review-text">I'm writing this review in recoginition, and as a token of appreciation for the service that GoodDrop provides. I just got my bike transferred from Bangalore to New Delhi through GoodDrop and I can't be more happier with the choice I made. If you want a hassle free and scratch free transfer from Bangalore, you have just landed on the right page. Train is the safest mode to transport your bike but it is hectic as well. GoodDrop will make it extremely easier for you at a reasonable rate. Mr. Naveen's seemless communication and updates at every point will give you an assurance that your bike is in safe hands. Also, the team is extremely professional than any other transport agency that I know of. Thanks a lot GoodDrop team. #Getagooddrop</q>
              </div>
              <br/>
              <div className="reviewer-name">
                - Atul Kumar Singh
              </div>
            </div>
            <div className="review-card">
              <div>
                <q className="review-text">
                  We all love our bikes, don’t we? I do. So a couple of months back I wanted to ship my bike to my hometown so that I could use it while I am there. I tried enquiring with my friends who tried something similar with the railway and the one thing I concluded was that it was a pain in the ass. It is at this point I learned about gooddrop.in . They shipped my bike to my destination in a hassle free way. Such a superb service :)
                </q>
              </div>
              <br/>
              <div className="reviewer-name">
                - Sharan Nair
              </div>
            </div>



          </div>

          <div className="customer-grid">
            <div className="review-card">
              <div>
                <q className="review-text">I had very nice experience with Gooddrop, where I had to transfer my bike to Delhi from Bangalore, I was in hurry because I was travelling abroad the very next day,I met Mr Naveen in Bangalore cantt station and he helped me and got my bike transferred without any hassle , really was very satisfied with the service provided by Gooddrop , great guys keep up the good work. Thanks Naveen #Thanks Gooddrop</q>
              </div>
              <br/>
              <div className="reviewer-name">
                - Tarun Barthwal
              </div>
            </div>
            <div className="review-card">
              <div>
                <q className="review-text">
                  Go for Gooddrop. Very reliable and reasonable. It's my personal experience. They pack your vehicle really well. I have sent my bike to Hyderabad from Bangalore through Gooddrop and really impressed by their on-time pickup and no damage done to the vehicle, not even a single scratch.
                </q>
              </div>
              <br/>
              <div className="reviewer-name">
                - Tanmayi Karna
              </div>
            </div>
            <div className="review-card">
              <div>
                <q className="review-text">
                  I used their services once, I wouldn't hesitate to use again!! Surely recommended. Seamless order process delivery. I will definitely recommend to friends and family. Hassle Free bike transport, a big thumbs up to GoodDrop’s team.
                </q>
              </div>
              <br/>
              <div className="reviewer-name">
                - Vishwanath Shastry
              </div>
            </div>



          </div>

          <div className="customer-grid">
            <div className="review-card">
              <div>
                <q className="review-text">
                  Gooddrop is a team to look forward to for the timely motorcycle shipment. I am impressed with their services and will recommend to others also.
                </q>
              </div>
              <br/>
              <div className="reviewer-name">
                - Apoorva
              </div>
            </div>
            <div className="review-card">
              <div>
                <q className="review-text">Very nice team. Reliable service. We can easily ship our bikes with no tension.</q>
              </div>
              <br/>
              <div className="reviewer-name">
                - ATCHUTANAND RAO
              </div>
            </div>
            <div className="review-card">
              <div>
                <q className="review-text">
                  GOODDROP is the best vehicle transportation service provider company in India. Their charges are reasonable and provide on-time shipping.
                </q>
              </div>
              <br/>
              <div className="reviewer-name">
                - Santosh Shetkar
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
