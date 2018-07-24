import React, { PureComponent } from 'react';
import Navbar from './Components/HomePageComps/Navbar';
import '../Pages/Components/CSS/AboutUsPageCSS/aboutdata.css';
import TempFooter from './Components/HomePageComps/TempFooter';

class Order extends PureComponent {

  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div>
            <Navbar Consumer={this.props.Consumer}/>
            <div className="orderpage" style={{ paddingTop: "20px", paddingBottom: "50px", display: "flex", justifyContent: "center"}}>
              <h2> Your Order Id: {state.orderid} </h2>
            </div>
            <TempFooter Consumer={this.props.Consumer}/>
          </div>

        )}
      </Consumer>
    );
  }

}

export default Order;
