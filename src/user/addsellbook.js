import React from 'react';
import { Layout, Menu, Icon, Typography,Switch, } from 'antd';
import HeaderComponent from '../global/header';
import {SellBookForm} from '../component/form';
import {OneBookV} from '../component/bookcard';
import logoimage from '../images/logoimage.png'

//数据
const bookset = require('../data/bookset.json');

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

class UserAddSellBookComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'sellBook',
            loading: true,
        };
    };
    onChange = checked => {
        this.setState({ loading: !checked });
    };
    render() {
        const { loading } = this.state;

        return (
            <Layout className="layout">
                <HeaderComponent current={this.state.current} />
                <Content  style={{maxWidth: '1200px', margin: '64px auto'}}>
                    <div style={{display:'flex', height:'130', width: '100%'}}>
                        <img alt = 'logoImage' className='logoImage' src={logoimage} />
                        <div style={{
                            height: '130px', 
                            float: 'right', 
                            display: 'flex', 
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            <Title style={{ 
                                    width: 500, 
                                    float: 'right', 
                                    textAlign: 'center',
                                    // color: 'blue'
                                }}
                                
                            >
                                添加出售书籍
                            </Title>
                        </div>
                        <div style={{width:'350px'}}></div>
                    </div>
                    <div style={{width: '100%', background: '#fff', padding: 24, minHeight: 380 }}>
                        <div style={{display: 'flex', flexWrap:'wrap', justifyContent: 'space-around'}}>
                            <div style={{maxHeight:'550px'}}>
                                <OneBookV data={bookset[0]} loading={loading}/>
                                <Switch checked={!loading} onChange={this.onChange} />
                            </div>
                            
                            <SellBookForm style={{margin:'10px auto', }}/>
                            <div style={{width:'240px'}}></div>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>BookTrade ©2018 Created by 229 Studio</Footer>
            </Layout>
        );
    }
}

export default UserAddSellBookComponent;