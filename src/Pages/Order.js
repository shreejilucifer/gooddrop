import React, { PureComponent } from 'react';
import Navbar from './Components/HomePageComps/Navbar';
import Footer from './Components/HomePageComps/Footer';
import AboutHeader from './Components/AboutUsPageComps/AboutHeader';

class Order extends PureComponent {

  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div>
            <Navbar Consumer={this.props.Consumer}/>
            <AboutHeader title="Thanks for Dropping Your Bike !"/>
            <div className="orderpage" style={{ paddingTop: "100px", paddingBottom: "100px", display: "flex", justifyContent: "center"}}>
              <h3> Your Order Id is: {state.orderid} </h3>
            </div>
            <Footer Consumer={this.props.Consumer}/>
          </div>

        )}
      </Consumer>
    );
  }

}

export default Order;
