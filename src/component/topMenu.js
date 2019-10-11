import { Layout, Menu, Breadcrumb, Icon} from 'antd';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import React from 'react';
import imgURL from '../images/favicon.png'
import MenuComponent from './menu';
import HeaderComponent from '../global/header';
import NormalLoginForm from '../global/login';
import UserIndexComponent from '../user/index';
import UserBookMarketComponent from '../user/bookmarket';
import UserAddSellBookComponent from '../user/addsellbook';
import UserAddBuyBookComponent from '../user/addbuybook';
import NoMatch404Component from '../global/nomatch';
import Jibing from '../user/jibing'
import '../css/menu.css';
import Yaopin from '../user/yaopin';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const Wrapper = (evere)=>{
    return class extends React.Component{
        render(){
            return <UserBookMarketComponent onDataC={evere}/>
        }
    }
}

class TopMenu extends React.Component{
    state = {
        current: 'index',
    };
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    onRouterChange = (status) => {
        if(status){
            this.setState(status);
        }
        
    }
    

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component = {UserIndexComponent} />
                    <Route path='/index' component = {UserIndexComponent} />
                    <Route path='/bookmarket' component = {Wrapper(this.onRouterChange.bind(this))} />
                    <Route path='/addsellbook' component = {UserAddSellBookComponent} />
                    <Route path='/addbuybook' component = {UserAddBuyBookComponent} />
                    <Route path='/jibing' component = {Jibing} />
                    <Route path='/yaopin' component = {Yaopin} />
                    {/* <Redirect from='/' to='/index' /> */}
                    <Route component={NoMatch404Component}/> 
                </Switch>
                
            </Router>
        );
    }
}

export default TopMenu;