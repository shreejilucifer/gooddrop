import React, {Component} from 'react';
import '../CSS/HomePageCSS/navbar.css';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (<div>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {
            getFieldDecorator('userName', {
              rules: [
                {
                  required: true,
                  message: 'Please input your username!'
                }
              ]
            })(<Input prefix={<Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="Username"/>)
          }
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Password!'
                }
              ]
            })(<Input prefix={<Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>} type="password" placeholder="Password"/>)
          }
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)
          }
          <br/>
          <a className="login-form-forgot" onClick={this.props.forgethandler}>Forgot password</a>
          <br/>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <span>&nbsp;</span>
          Or
          <span>&nbsp;</span>
          <a onClick={this.props.registerhandler}>Register now!</a>
        </FormItem>
      </Form>
      <br/>
      <button class="sociallogin google">Sign In With Google</button>
      <br/>
      <br/>
      <button class="sociallogin linkedin">Sign In With LinkedIn</button>
    </div>);
  }

}

const WrappedNormalLoginForm = Form.create()(LoginForm);

export default WrappedNormalLoginForm;
