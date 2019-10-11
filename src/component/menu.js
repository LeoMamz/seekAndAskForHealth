import '../css/menu.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import { Menu, Icon } from 'antd';
import imgURL from '../images/favicon.png'
import React from 'react';


const { SubMenu } = Menu;

function MenuComponent(props){
    console.log(props.current);
    return (
        <Menu 
            theme="light" 
            style={{width:'600px', lineHeight: '64px',  overflow:'hidden', display: 'flex', justifyContent:'space-between'}}
            // onClick={this.handleClick} 
            // defaultSelectedKeys={['index']}
            selectedKeys={[props.current]} 
            mode="horizontal" 
        >
            <Menu.Item key="index">
                <Link to="/index">
                    <Icon type="home" theme="filled" />
                    首页
                </Link>
            </Menu.Item>
            <Menu.Item key="jibing">
                <Link to="/jibing">
                    <Icon type="book"  theme="filled" />
                    疾病大全
                </Link>
            </Menu.Item>
            <Menu.Item key="yaopin">
                <Link to="/yaopin">
                    <Icon type="book"  theme="filled" />
                    药品大全
                </Link>
            </Menu.Item>
            <Menu.Item key="health">
                <Link to="/health">
                    <Icon type="medicine-box"  theme="filled" />
                    健康资讯
                </Link>
            </Menu.Item>
            
            
            {/* <Switch>
                <Route path='/index' exact component = {UserIndexComponent} />
                <Route path='/bookmarket' component = {UserBookMarketComponent} />
                <Route path='/addsellbook' component = {UserAddSellBookComponent} />
                <Route path='/addbuybook' component = {UserAddBuyBookComponent} />
                <Redirect from='/' to='.index' />
                <Route component={NoMatch404Component}/> 
            </Switch> */}
            {/* <Menu.Item key="alipay">
            <a href="#" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
            </Menu.Item> */}
        </Menu>
        
    );
  
}

export default MenuComponent;