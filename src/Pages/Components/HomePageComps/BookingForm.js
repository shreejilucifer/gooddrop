import React, { Component } from 'react';
import '../CSS/HomePageCSS/bookingform.css';

import FirstContent from './BookFormContent/FirstContent';
import SecondContent from './BookFormContent/SecondContent';
import ThirdContent from './BookFormContent/ThirdContent';
import LastContent from './BookFormContent/LastContent';

import { Steps, Button, message } from 'antd';
const Step = Steps.Step;


const contentSelector = (contentp) => {
  if( contentp === 'firstContent' ) return <FirstContent /> ;
  else
  if( contentp === 'secondContent' ) return <SecondContent /> ;
  else
  if( contentp === 'thirdContent' ) return <ThirdContent /> ;
  else
   return <LastContent /> ;
};

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



class BookingForm extends Component {

  state = {
    current: 0,
  };

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div className="bookingform">
        <br/>
        <Steps size="small" current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">
          {contentSelector(steps[this.state.current].content)}
        </div>
        <div className="steps-action">
          {
            this.state.current < steps.length - 1
            &&
            <button type="primary" className="bookingformnextbtn" onClick={() => this.next()}>Next</button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" className="bookingformnextbtn" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            this.state.current > 0
            &&
            <Button className="bookingformprevbtn" style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          }
        </div>
      </div>
    );
  }

}

export default BookingForm;
