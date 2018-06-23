import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import '../CSS/HomePageCSS/stepmiddlesection.css';
import icon1 from '../Assets/icon2.png';
import icon2 from '../Assets/icon4.png';
import icon3 from '../Assets/icon6.png';
import BookingForm from '../HomePageComps/BookingForm';

const Gridelement = (props) => {
    return (
      <div className="gridelement">
        <div className="gridelementtext">Step {props.number}</div>
        <div className="gridelementunderline"></div>
        <br/>
        <div className="gridelementicon">
          <img src={props.icon} alt="icon" height="130px"/>
        </div>
        <br/>
        <div className="gridelementdesc">{props.description}</div>
      </div>
    );
}

class StepMiddleSection extends Component {

  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="stepmiddlesection">
        <div className="stepmiddlesectiontext">Bike Shipping is easy with us in 3 Simple Steps</div>
        <br/>
        <div className="stepmiddlesectiongrid">
          <Gridelement number="01" icon={icon1} description="Enter Bike Shipping Details" />
          <Gridelement number="02" icon={icon2} description="Handover the keys to Gooddrop executives" />
          <Gridelement number="03" icon={icon3} description="Get your bike at your destination" />
        </div>
        <br/>
        <br/>
        <div className="buttons">
          <div className="tempcont">
            <button onClick={this.onOpenModal} className="bookbtn">BOOK NOW</button>

            <Modal open={open} onClose={this.onCloseModal} closeIconSize={15}>
              <div className="bookmodal">
                <BookingForm />
              </div>
            </Modal>
          </div>

          <br/>
          <button className="contactbtn">CONTACT</button>
        </div>
      </div>
    );
  }

}

export default StepMiddleSection;
