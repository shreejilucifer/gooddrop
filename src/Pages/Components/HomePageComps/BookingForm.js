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
            <Steps size="small" current={state.current}>
              {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>
            <div className="steps-content">
              {contentSelector(steps[state.current].content)}
              {state.error}
            </div>
            <div className="steps-action">
              {
                state.current === 0
                &&
                <button type="primary" className="bookingformnextbtn onefiftybtn" onClick={() => {
                  actions.next(
                    state.current,
                    state.senderName, state.contactNumber, state.emailID,
                    state.pickupDate, state.pickupSlot, state.addressLine, "Bangalore", "Karnataka"
                  );
                }}>
                Next
              </button>
              }
              {
                state.current === steps.length - 1
                &&
                <Link to="/order">
                <Button type="primary" className="bookingformdonebtn onefiftybtn" onClick={() => {
                  message.success('Processing complete!');
                  actions.resetState();
                }}>Place your order</Button>
                </Link>
              }
              {
                state.current === 2
                &&
                <div>
                  <Button className="bookingformprevbtn onefiftybtn" onClick={() => actions.prev(state.current)}>
                    Previous
                  </Button>
                  <button style={{marginLeft: "8px"}} type="primary" className="bookingformnextbtn" onClick={() => {

                    actions.shippingDetailsToApi(
                      state.current,
                      state.senderName, state.pickupDate, state.pickupSlot, state.addressLine,
                      state.townCity.concat( ", " , state.addressState ),
                      state.emailID,
                      state.receiverName, state.receiveraddressLine.concat( ", " , state.receivertownCity, ", " , state.receiveraddressState ), state.receivercontactNumber, state.orderid,
                      state.auth
                    );

                  }}>
                  Next
                </button>
                </div>

              }
              {
                state.current === 1
                &&
                <div>
                  <Button className="bookingformprevbtn onefiftybtn"  onClick={() => actions.prev(state.current)}>
                    Previous
                  </Button>
                  <button style={{ marginLeft: "8px" }} type="primary" className="bookingformnextbtn" onClick={() => {
                    actions.next(
                      state.current,
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
