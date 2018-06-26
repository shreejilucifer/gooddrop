import React, { PureComponent } from 'react';

class Order extends PureComponent {

  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="orderpage">
            Thanks for Dropping Your Bike ! <br/>
            Your Order Id is: {state.orderid}
          </div>
        )}
      </Consumer>
    );
  }

}

export default Order;
