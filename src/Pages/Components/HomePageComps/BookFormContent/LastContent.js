import React, { PureComponent } from 'react';

class LastContent extends PureComponent {

  render() {
      const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div>
            Payment
          </div>
        )}
      </Consumer>
    );
  }

}

export default LastContent;
