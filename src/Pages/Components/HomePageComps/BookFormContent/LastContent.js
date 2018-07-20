import React, { PureComponent } from 'react';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

class LastContent extends PureComponent {
  state = {
      value: 1,
    }

    onChange = (e) => {
      console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
    }

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
      const Consumer = this.props.Consumer ;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div>
            <h3>Payment: Rs. 5850</h3> <br/>
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio style={radioStyle} value={1}>Cash On Pickup (COP)</Radio>
              <Radio style={radioStyle} disabled={true} value={2}>Online (Coming Soon)</Radio>
            </RadioGroup>
          </div>
        )}
      </Consumer>
    );
  }

}

export default LastContent;
