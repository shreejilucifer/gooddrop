import React, { PureComponent } from 'react';
import Navbar from './Components/HomePageComps/Navbar';
import Footer from './Components/HomePageComps/Footer';
import '../Pages/Components/CSS/AboutUsPageCSS/aboutdata.css';

class Order extends PureComponent {

  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div>
            <Navbar Consumer={this.props.Consumer}/>
            <div className="orderpage" style={{ paddingTop: "20px", paddingBottom: "50px", display: "flex", justifyContent: "center"}}>
              <h1> Your Order Id is: {state.orderid} </h1>
            </div>

            <Footer Consumer={this.props.Consumer}/>
          </div>

        )}
      </Consumer>
    );
  }

}

export default Order;
/*<img src={thankyou} alt="Thank you" width="100%" />*/
