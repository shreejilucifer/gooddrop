import React, { PureComponent } from 'react';

class AboutUs extends PureComponent {
  state = {
    user: "Hello From About Us State"
  }
  render() {
    const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div>
            {state.user}
            <button onClick={()=>{actions.setUser("Hey")}}>Click</button>
          </div>
        )}
      </Consumer>
    );
  }

}

export default AboutUs;
