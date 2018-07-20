import React, { PureComponent } from 'react';
import '../CSS/HomePageCSS/bookingform.css';
import { Link } from 'react-router-dom';

import FirstContent from './BookFormContent/FirstContent';
import SecondContent from './BookFormContent/SecondContent';
import ThirdContent from './BookFormContent/ThirdContent';
import LastContent from './BookFormContent/LastContent';

import { Steps, Button, message } from 'antd';
const Step = Steps.Step;

const steps = [{
  title: 'PICKUP DETAILS',
  content: 'firstContent',
}, {
  title: 'DESTINATION DETAILS',
  content: 'secondContent',
}, {
  title: 'SUMMARY',
  content: 'thirdContent',
}, {
  title: 'PAY',
  content: 'lastContent',
}];



class BookingForm extends PureComponent {

  state = {
    current: 0,
    error: ""
  };

  validateEmail(email)
  {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(email);
  }

  next(value1, value2, value3, value4, value5, value6, value7, value8, value9) {

    var sender = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var mob = /^[6-9]\d{9}$/;

    if( value1 === "" )
      this.setState({error: "Please Enter The Name !"});
    else if( value2 === "" )
      this.setState({error: "Please Enter The Contact Number !"});
    else if( value3 === "" )
      this.setState({error: "Please Enter The Email ID !"});
    else if( value4 === "" )
      this.setState({error: "Please Choose The Pickup Date !"});
    else if( value5 === "" )
      this.setState({error: "Please Choose The Pickup Slot !"});
    else if( value6 === "" )
      this.setState({error: "Please Enter The Complete Address !"});
    else if( value7 === "" )
      this.setState({error: "Please Enter The Town / City !"});
    else if( value8 === "" )
      this.setState({error: "Please Enter The State !"});
    else if( value9 === false )
      this.setState({error: "Please Accept The Terms & Conditions !"});

    else if( mob.test(value2) === false )
      this.setState({error: "The Contact Number Is Invalid !" });

    else if( !this.validateEmail(value3) )
      this.setState({error: "The Email Is Not Valid !"}) ;

    else if( sender.test(value1) === false )
      this.setState({error: "The Name is Invalid !"});
    else {
      const current = this.state.current + 1;
      this.setState({ current: current, error: "" });
    }
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const Consumer = this.props.Consumer ;
    const contentSelector = (contentp) => {
      if( contentp === 'firstContent' ) return <FirstContent Consumer={Consumer}/> ;
      else
      if( contentp === 'secondContent' ) return <SecondContent Consumer={Consumer}/> ;
      else
      if( contentp === 'thirdContent' ) return <ThirdContent Consumer={Consumer}/> ;
      else
       return <LastContent Consumer={Consumer}/> ;
    };

    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="bookingform">
            <br/>
            <Steps size="small" current={this.state.current}>
              {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>
            <div className="steps-content">
              {contentSelector(steps[this.state.current].content)}
              {this.state.error}
            </div>
            <div className="steps-action">
              {
                this.state.current === 0
                &&
                <button type="primary" className="bookingformnextbtn onefiftybtn" onClick={() => {
                  this.next(
                    state.senderName, state.contactNumber, state.emailID,
                    state.pickupDate, state.pickupSlot, state.addressLine, state.townCity, state.addressState
                  );
                }}>
                Next
              </button>
              }
              {
                this.state.current === steps.length - 1
                &&
                <Link to="/order">
                <Button type="primary" className="bookingformnextbtn onefiftybtn" onClick={() => message.success('Processing complete!')}>Place your order</Button>
                </Link>
              }
              {
                this.state.current === 2
                &&
                <div>
                  <Button className="bookingformprevbtn onefiftybtn" onClick={() => this.prev()}>
                    Previous
                  </Button>
                  <button style={{marginLeft: "8px"}} type="primary" className="bookingformnextbtn" onClick={() => {

                    actions.shippingDetailsToApi(
                      state.senderName, state.pickupDate, state.addressLine,
                      state.townCity.concat( ", " , state.addressState ),
                      state.emailID,
                      state.receiverName, state.receiveraddressLine, state.receivercontactNumber, state.orderid,
                      state.auth
                    );

                      this.next(
                      state.senderName, state.contactNumber, state.emailID,
                      state.pickupDate, state.pickupSlot, state.addressLine,
                      state.townCity, state.addressState, state.checkBox
                    );

                  }}>
                  Next
                </button>
                </div>

              }
              {
                this.state.current === 1
                &&
                <div>
                  <Button className="bookingformprevbtn onefiftybtn"  onClick={() => this.prev()}>
                    Previous
                  </Button>
                  <button style={{ marginLeft: "8px" }} type="primary" className="bookingformnextbtn" onClick={() => {
                    this.next(
                      state.receiverName, state.receivercontactNumber, state.receiveremailID,
                      state.receiverpickupDate, state.receiverpickupSlot, state.receiveraddressLine, state.receivertownCity, state.receiveraddressState
                    );
                  }}>
                  Next
                </button>
                </div>

              }
            </div>
          </div>
        )}
      </Consumer>
    );
  }

}

export default BookingForm;
