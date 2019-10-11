import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Input, Card, Avatar} from 'antd';
import logoimage from '../images/logoimage.png'
import '../css/menu.css';
import HeaderComponent from '../global/header';
import BookSet from '../component/bookcard';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const { Meta } = Card;

class SearchComponent extends React.Component {
    render(){
        return (
            <div style={{display:'flex', height:'130', width: '100%'}}>
                <img className='logoImage' src={logoimage} />
                <div style={{
                    height: '130px', 
                    float: 'right', 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center',
                    }}>
                    <Search
                        size="large"
                        placeholder="搜索 旧书 书名/ISBN/作者/出版社"
                        onSearch={value => console.log(value)}
                        style={{ width: 500, float: 'right'}}
                        enterButton="搜索"
                    />
                </div>
                <div style={{width:'350px'}}></div>
                
            </div>
        );
    }
}

class BookCarComponent extends React.Component {
    render(){
        return (
            <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="百年孤独"
                description="狂欢是一群人的孤独"
                />
            </Card>
        );
    }
}

class UserBookMarketComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'shopping',
        };
    };
    render() {
        return (
            <Layout className="layout" >
                <HeaderComponent current={this.state.current} />
                <Content  style={{maxWidth: '1200px', margin: '64px auto'}}>
                    {/* <h1>这里是旧书市场！！！</h1> */}
                    <SearchComponent />
                    <div style={{width: '100%', background: '#fff', padding: 24, minHeight: 380 }}>
                        <div style={{display: 'flex', flexWrap:'wrap', justifyContent: 'space-around'}}>
                            <BookSet />
                            </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>BookTrade ©2018 Created by 229 Studio</Footer>
            </Layout>
        );
    }
}

export default UserBookMarketComponent;