import React, {PureComponent} from 'react';
import Navbar from './Components/HomePageComps/Navbar';
import AboutHeader from './Components/AboutUsPageComps/AboutHeader';
import TempFooter from './Components/HomePageComps/TempFooter';
import Modal from 'react-responsive-modal';
import {Rate, Input} from 'antd';
import './Components/CSS/CustomerReviewCSS/customerreviewpage.css';

const { TextArea } = Input;
const CustomerReviewShow = (props) => (
  <figure class="snip1327">
    <blockquote>{props.rateData}</blockquote>
    <div class="author">
      <h5>{props.reviewFromCustomerName}</h5><span></span>
    </div>
  </figure>
    );

class CustomerReviews extends PureComponent {
  state = {
    open: false
  };
  onOpenModal = () => {
    this.setState({open: true});
  };

  onCloseModal = () => {
    this.setState({open: false});
  };
  render() {
    const Consumer = this.props.Consumer;
    return (<Consumer>
      {
        ({state, actions}) => (<div>
          <Navbar Consumer={Consumer}/>
          <AboutHeader title="CUSTOMER REVIEWS"/>
          <div className="customerreviews">
            <div className="customerreviewgrid">
                <CustomerReviewShow rateValue={4} rateData="Amazing Service Loved It." reviewFromCustomerName="Shreeji Pedhadiya"/>
                <br/>

                <CustomerReviewShow rateValue={4} rateData="Very Fast & Easy To Use App." reviewFromCustomerName="Naveen C T"/>
                <br/>

                <CustomerReviewShow rateValue={4} rateData="Very Helpful Will Surely Recommend to Friends" reviewFromCustomerName="Akshata Akkanna"/>
                <br/>

                <CustomerReviewShow rateValue={4} rateData="Very Helpful Will Surely Recommend to Friends" reviewFromCustomerName="Akshata Akkanna"/>
                <br/>
            </div>
            <br/>
            <div className="btncontainer">
              <button className="yourreviewbtn" onClick={()=>{actions.onReviewModal(true)}}>Write Your Review</button>
              <Modal open={state.reviewModal} onClose={()=>{actions.onReviewModal(false)}} closeIconSize={15}>
                <div className="reviewmodal">
                  <h3> Give Your Rating </h3> <br/>
                  <Rate onChange={actions.handleRatingChange} value={state.ratingValue} /> <br/>
                  <Input onChange={(e)=>{actions.handleRatingName(e.target.value)}} placeholder="Your Name" /> <br/>
                  <TextArea onChange={(e)=>{actions.handleRatingData(e.target.value)}} placeholder="Review..." rows={4} /> <br/>
                  <div>{state.errorReview}</div> <br/>
                  <button className="newreviewbtn" onClick={()=>
                    {actions.handleNewReview(state.ratingValue, state.ratingName, state.ratingData)}}
                    > Submit Review </button>
                </div>
              </Modal>
            </div>
          </div>
          <TempFooter Consumer={Consumer}/>
        </div>)
      }
    </Consumer>);
  }

}

export default CustomerReviews;
/*
<div className="customerreviewshow">
<Rate disabled defaultValue={props.rateValue}/>
<p className="customerreviewdata">
  <i>{props.rateData}</i>
</p>
<h3 className="customerreviewfrom">
  --- {props.reviewFromCustomerName}
</h3>
</div> */
