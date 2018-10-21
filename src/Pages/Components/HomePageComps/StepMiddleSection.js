import React, { PureComponent } from 'react';
import Modal from 'react-responsive-modal';
import '../CSS/HomePageCSS/stepmiddlesection.css';
import icon1 from '../Assets/icon2.png';
import icon2 from '../Assets/icon4.png';
import icon3 from '../Assets/icon6.png';
import BookingForm from '../HomePageComps/BookingForm';
import StationRequestForm from '../HomePageComps/StationRequestForm';

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

class StepMiddleSection extends PureComponent {


  state = {
        intervalId: 0
    };

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render() {
    const Consumer = this.props.Consumer ;

    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="stepmiddlesection">
            <div className="stepmiddlesectiontext">Bike Shipping Is Easy With Us In 3 Simple Steps</div>
            <br/>
            <div className="stepmiddlesectiongrid">
              <Gridelement number="01" icon={icon1} description="Enter Bike Shipping Details" />
              <Gridelement number="02" icon={icon2} description="Handover The Keys To Gooddrop Executives" />
              <Gridelement number="03" icon={icon3} description="Get Your Bike At Your Destination" />
            </div>
            <br/>
            <br/>
            <div className="buttons">
              <div className="tempcont">
                <button onClick={()=>{this.scrollToTop(); actions.openBookModal(state.verified);}} className="bookbtn">BOOK NOW</button>

                <Modal
                  closeIconSize={15}
                  className="bookmodal"
                  open={state.bookNowState}
                  onClose={actions.resetState}
                  closeOnOverlayClick={false}
                  closeOnEsc={false}
                  >
                  <div>
                    <BookingForm Consumer={Consumer}/>
                  </div>
                </Modal>
              </div>

              <br/>
              <button
                onClick={()=>actions.openStationRequestModal(true)}
                className="contactbtn">
                ADD STATION REQUEST
              </button>
              <Modal
                open={state.StationRequestModal}
                onClose={()=>actions.openStationRequestModal(false)}
                closeIconSize={15}
                className="stationRequestModal"
                >
                <StationRequestForm style={{width: "100%"}} Consumer={Consumer}/>
              </Modal>
            </div>
          </div>
        )}
      </Consumer>
    );
  }

}

export default StepMiddleSection;
