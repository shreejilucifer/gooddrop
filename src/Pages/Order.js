import React, { PureComponent } from 'react';
import Navbar from './Components/HomePageComps/Navbar';
import Footer from './Components/HomePageComps/Footer';
import thankyou from './Components/Assets/thankyoudropping.png';

class Order extends PureComponent {

  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div>
            <Navbar Consumer={this.props.Consumer}/>
            <div className="orderpage" style={{ paddingTop: "100px", paddingBottom: "100px", display: "flex", justifyContent: "center"}}>
              <h1> Your Order Id is: {state.orderid} </h1>
            </div>
            <img src={thankyou} alt="Thank you" width="100%" />
            <Footer Consumer={this.props.Consumer}/>
          </div>

        )}
      </Consumer>
    );
  }

}

export default Order;
