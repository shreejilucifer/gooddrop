import React, { PureComponent } from 'react';
import '../CSS/HomePageCSS/bookingform.css';

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

  next(value1, value2, value3, value4, value5, value6, value7, value8) {

    if( value1 === "" || value2 === "" || value3 === "" || value4 === "" || value5 === "" || value6 === "" || value7 === "" || value8 === "")
      this.setState({error: "Fill All Data"})  ;

    else if( !this.validateEmail(value3) )
      this.setState({error: "Email Not Valid"}) ;

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
                <button type="primary" className="bookingformnextbtn" onClick={() => {
                  this.next(
                    state.senderName, state.contactNumber, state.emailID,
                    state.pickupDate, state.pickupSlot, state.addressLine, state.addressState
                  );
                }}>
                Next
              </button>
              }
              {
                this.state.current === steps.length - 1
                &&
                <Button type="primary" className="bookingformnextbtn" onClick={() => message.success('Processing complete!')}>Done</Button>
              }
              {
                this.state.current === 2
                &&
                <div>
                  <button type="primary" className="bookingformnextbtn" onClick={() => {
                    this.next(
                      state.senderName, state.contactNumber, state.emailID,
                      state.pickupDate, state.pickupSlot, state.addressLine, state.addressState
                    );
                  }}>
                  Next
                </button>
                  <Button className="bookingformprevbtn" style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Previous
                  </Button>
                </div>

              }
              {
                this.state.current === 1
                &&
                <div>
                  <button type="primary" className="bookingformnextbtn" onClick={() => {
                    this.next(
                      state.receiversenderName, state.receivercontactNumber, state.receiveremailID,
                      state.receiverpickupDate, state.receiverpickupSlot, state.receiveraddressLine, state.receiveraddressState
                    );
                  }}>
                  Next
                </button>
                  <Button className="bookingformprevbtn" style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Previous
                  </Button>
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
