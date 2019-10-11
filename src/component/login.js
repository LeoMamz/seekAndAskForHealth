import {Form, Button,Input, Icon} from 'antd';
import React from 'react';

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(JSON.stringify({username: values.username, password: values.password}));
        fetch('http://localhost:3001/login', {
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          method:'post',
          mode: 'cors',
          credentials: 'include',
          body: JSON.stringify({username: values.username, password: values.password})
        })
        .then(res=>res.json())
        .then(json=>{
          console.log("updated");
          // console.log(json[0].USER_NAME);
          console.log(json);
        });
      }
    });
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <Form layout="vertical" hideRequiredMark onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item style={{display:'flex',justifyContent:'center'}}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const LoinDrawer = Form.create()(LoginForm);
export default LoinDrawer;