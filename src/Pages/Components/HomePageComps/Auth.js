import React, { PureComponent } from 'react';

class Auth extends PureComponent {

  componentDidMount(){
    this.props.fun();
  }

  render() {
    return (
      <div></div>
    );
  }

}

export default Auth;
