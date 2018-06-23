import React, {Component} from 'react';

import showcaselogo from '../Assets/showcaselogo.png';
import telephone from '../Assets/telephone.png';
import accounticon from '../Assets/account.png';
import LoginForm from '../HomePageComps/LoginForm';
import SignUpForm from '../HomePageComps/SignUpForm';
import ForgetPassForm from '../HomePageComps/ForgetPassForm';

import Modal from 'react-responsive-modal';
import '../CSS/HomePageCSS/navbar.css';

class Navbar extends Component {

  state = {
    open: false,
    selected: 'login'
  };

  onOpenModal = () => {
    this.setState({open: true});
  };

  onCloseModal = () => {
    this.setState({open: false});
  };


  render() {
    let variablecontent;

    if( this.state.selected === 'login' )
      variablecontent = <LoginForm
                          forgethandler={()=>{this.setState({selected: 'forget'})}}
                          registerhandler = {()=>{this.setState({selected: 'signup'})}}
                        />;
    else if( this.state.selected === 'signup' )
      variablecontent = <SignUpForm
                          loginhandler={()=>{}}
                        />;
    else
      variablecontent = <ForgetPassForm />;

    return (<div className="navbar">
      <div className="logo">
        <img src={showcaselogo} alt="GoodDrop" height="100%"/>
      </div>
      <div className="rightsection">
        <div className="phonenumber">
          <img className="navbaricon" src={telephone} alt="call" height="15px"/>
          9566123640
        </div>
        <div className="account">
          <img className="navbaricon" src={accounticon} alt="Account" height="15px"/>

          <a className="links" onClick={this.onOpenModal}>Account</a>
          <Modal open={this.state.open} onClose={this.onCloseModal} closeIconSize={15}>
            <div className="loginsignupmodal">
              <div className="modalselecters">
                <h3 onClick={()=>{this.setState({selected: 'login'})}}>Login</h3>
                <h3 onClick={()=>{this.setState({selected: 'signup'})}}>Sign Up</h3>
              </div>
                {variablecontent}
            </div>
          </Modal>
        </div>
      </div>
    </div>);
  }

}

export default Navbar;
