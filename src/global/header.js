import {Drawer, Form, Button,Tabs, Icon, Layout, Avatar,  BackTop} from 'antd';
// import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import React from 'react';
import avatarImage from '../images/avatar.png'
import '../css/menu.css';
import '../css/newantd.css'
import LoinDrawer from '../component/login';
import RegisterDrawer from '../component/register';

const { Header} = Layout;
const { TabPane } = Tabs;

class DrawerForm extends React.Component {
  state = { 
    visible: false,
  };

  showDrawer = () => {
    this.setState({
      visible: true,
      confirmDirty: false,
      autoCompleteResult: [],
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  callback(key) {
    console.log(key);
  }

  render() {
    return (
      <div>
        <Header 
          
          style={{position: 'fixed', zIndex: 1, width: '100%',backgroundColor: '#444c57'}}
        >
          <div style={{maxWidth:'1200px', margin:'0 auto'}}>
            <div style={{float: 'right'}}>
              <Avatar  onClick={this.showDrawer} size={50} style={{ backgroundColor: '#3D9BD9' }}  src={avatarImage} />
            </div>
            
          </div>
          <BackTop>
            <div className="ant-back-top-inner"><Icon type="to-top" /></div>
          </BackTop>
        </Header>
        <Drawer
          title="登录或者注册"
          width={464}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Tabs defaultActiveKey="login" onChange={this.callback} size='large'>
            <TabPane tab="登录" key="login">
              <LoinDrawer />
            </TabPane>
            <TabPane tab="注册" key="register">
              <RegisterDrawer/>
            </TabPane>
          </Tabs>
          
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              取消
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

const HeaderComponent = Form.create()(DrawerForm);
export default HeaderComponent;