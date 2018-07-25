import React, {PureComponent} from 'react';
import Navbar from './Components/HomePageComps/Navbar';
import AboutHeader from './Components/AboutUsPageComps/AboutHeader';
import TempFooter from './Components/HomePageComps/TempFooter';
import Modal from 'react-responsive-modal';
import {Rate, Input} from 'antd';
import './Components/CSS/CustomerReviewCSS/customerreviewpage.css';

const {TextArea} = Input;
const CustomerReviewShow = (props) => (<div className="reviewbox">
  <div className="leftreviewbox">
    <div className="textbox">
      <i>{props.rateData}</i>
    </div>
    <br/>
    <div className="reviewnamebox">
      <b>{props.reviewFromCustomerName}</b>
    </div>
  </div>

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
          <AboutHeader title="CUSTOMER REVIEWS"/>
          <div className="containerfluid">
            <div className="container">
              <div className="cards">
                <a className="card">
                  <span className="card-header" style={{
                      "backgroundImage" : "url(http://placeimg.com/400/200/animals)"
                    }}>
                    <span className="card-title">
                      <h3>Shreeji Pedhadiya</h3>
                    </span>
                  </span>
                  <span className="card-summary">
                    A summary will also be present. Usually two to three brief sentences about the content on the detail page.
                  </span>
                  <span className="card-meta">
                    Published: June 18th, 2015
                  </span>
                </a>
                <a className="card">
                  <span className="card-header" style={{
                      "backgroundImage" : "url(http://placeimg.com/400/200/animals)"
                    }}>
                    <span className="card-title">
                      <h3>Naveen C T</h3>
                    </span>
                  </span>
                  <span className="card-summary">
                    A summary will also be present. Usually two to three brief sentences about the content on the detail page.
                  </span>
                  <span className="card-meta">
                    Published: June 18th, 2015
                  </span>
                </a>


                <a className="card">
                  <span className="card-header" style={{
                      "backgroundImage" : "url(http://placeimg.com/640/480/nature)"
                    }}>
                    <span className="card-title">
                      <h3>Akshata Akkanna</h3>
                    </span>
                  </span>
                  <span className="card-summary">
                    A summary will also be present. Usually two to three brief sentences about the content on the detail page.
                  </span>
                  <span className="card-meta">
                    Published: June 18th, 2015
                  </span>
                </a>

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

/*
<div className="customerreviews">
  <div className="customerreviewgrid">
      <CustomerReviewShow  rateValue={4} rateData="Amazing Service Loved It." reviewFromCustomerName="Shreeji Pedhadiya"/>
      <br/>
      <CustomerReviewShow  rateValue={4} rateData="Very Fast & Easy To Use App." reviewFromCustomerName="Naveen C T"/>
      <br/>

      <CustomerReviewShow  rateValue={4} rateData="Very Helpful Will Surely Recommend to Friends" reviewFromCustomerName="Akshata Akkanna"/>
      <br/>

      <CustomerReviewShow  rateValue={4} rateData="Very Helpful Will Surely Recommend to Friends" reviewFromCustomerName="Akshata Akkanna"/>
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
*/
