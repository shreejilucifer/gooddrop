import React, {PureComponent} from 'react';
import Navbar from './Components/HomePageComps/Navbar';
import AboutHeader from './Components/AboutUsPageComps/AboutHeader';
import Footer from './Components/HomePageComps/Footer';
import Modal from 'react-responsive-modal';
import {Rate, Input} from 'antd';
import './Components/CSS/CustomerReviewCSS/customerreviewpage.css';

const { TextArea } = Input;
const CustomerReviewShow = (props) => (<div className="customerreviewshow">
  <Rate disabled defaultValue={props.rateValue}/>
  <p className="customerreviewdata">
    <i>{props.rateData}</i>
  </p>
  <h3 className="customerreviewfrom">
    --- {props.reviewFromCustomerName}
  </h3>
</div>);

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
          <AboutHeader title="ABOUT US"/>
          <div className="customerreviews">
            <div className="customerreviewgrid">
                <CustomerReviewShow rateValue={4} rateData="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." reviewFromCustomerName="Shreeji Pedhadiya"/>


                <CustomerReviewShow rateValue={4} rateData="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." reviewFromCustomerName="Naveen C T"/>


                <CustomerReviewShow rateValue={4} rateData="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." reviewFromCustomerName="Akshata Akkanna"/>

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
          <Footer Consumer={Consumer}/>
        </div>)
      }
    </Consumer>);
  }

}

export default CustomerReviews;
