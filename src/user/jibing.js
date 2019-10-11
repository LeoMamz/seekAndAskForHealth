import React from 'react';
import { Layout, Radio } from 'antd';
import HeaderComponent from '../global/header';
import SearchComponent from '../component/search';
import MenuComponent from '../component/menu';

const {Content, Footer } = Layout;
const testData = 'abcdefghijklmnopqrstuvwxyz';
const jibingData = [
    {title:'wqesdfghhe2qwa',content:'a会计法开始懂了荆防颗粒圣诞快乐发快递费aaaaaaa1qqqqqqqqqqqqqqqqqqqqqqaaaaaaaaa'},
    {title:'awqewe',content:'aaaaaaaaaaaaaa会计法开始懂了荆防颗粒圣诞快乐发快递aaaqqqqqqqqqqqqqqqqqqqqqqqqqqaaaaaaa'},
    {title:'aqweqwe',content:'aaaaaaaaaaaa会计法开始懂了荆防颗粒圣诞快乐发快递aaaaaaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqaaaaaa'},
    {title:'aqweqwe',content:'aaaaaaaaaaaa会计法开始懂了荆防颗粒圣诞快乐发快递aaaaaqqqqqqqqqqqqqqqqqqqqqqqqaaaaaaa'},
    {title:'aqweqweqw',content:'aaaa会计法开始懂了荆防颗粒圣诞快乐发快递aaaaaaaaaaaaaaaqqqqaaaaa'},
    {title:'aeqwe',content:'aaaaaaaaa会计法开始懂了荆防颗粒圣诞快乐发快递aaaaaaaaaqqqqqqqqqqqqqaaaaaa'},
    {title:'aqwewqesdfsdfg',content:'aaaa会计法开始懂了荆防颗粒圣诞快乐发快递aaaaaaaaaaaaaqqqqqqqqqqqqqqqqqqqqqqqaaaaaaa'},
];

class JibingType extends React.Component {
    state = {
        current: 'all',
    }
    handleChange = e => {
        console.log(e.target.value);
    }
    render(){
        return(
            <div style={{width: '100%', background: '#fff', minHeight: 200, margin:'15px 0',padding:'20px'}}>
                <h2 >首字母分类</h2>
                <Radio.Group 
                    onChange={this.handleChange} defaultValue={this.state.current} buttonStyle="solid"
                    style={{display:'flex', flexWrap:'wrap'}}
                >
                    <Radio.Button value="all" style={{marginLeft:'10px', marginTop:'10px'}}>不限</Radio.Button>
                    {testData.split('').map(
                        item => <Radio.Button value={item} style={{marginLeft:'10px', marginTop:'10px'}}>{item}</Radio.Button>)}
                </Radio.Group>
            </div>
        );
    }
}
const JibingCard = props=> (
    <div style={{width: '100%', background: '#fff', minHeight: 150, margin:'15px 0',padding:'30px'}}>
        <h1><a href="http://mamz.xyz/djs" style={{color:'#3d9bd9'}}>{props.data.title}</a></h1>
        <div style={{fontSize:'16px',margin:'20px 0 0'}}>{props.data.content}</div>
    </div>
);

class Jibing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'index',
        };
    };
    render() {
        const {current} = this.state;
        return (
            <Layout className="layout">
                <HeaderComponent current={this.state.current}  />
                <div style={{background:'#fff'}}>
                    <Content  style={{maxWidth: '1200px', margin: '64px auto 0 auto',}}>
                        <SearchComponent />
                        <div style={{background:'#fff', height:'66px', position:'relative',display:'flex',justifyContent:'space-between'}}>
                            <div style={{width:'280px', marginRight:'20px'}}>
                                <div>

                                </div>
                            </div>
                            <MenuComponent current={current} />
                            <div style={{width:'300px'}}></div>
                        </div>
                    </Content>
                </div>
                <Content  style={{maxWidth: '1200px', margin: '0 auto 64px auto'}}>
                    <div style={{width: '100%', background: '#', minHeight: 380 }}>
                        <JibingType />
                        {jibingData.map(item=><JibingCard data={item}/>)}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>BookTrade ©2018 Created by 229 Studio</Footer>
            </Layout>
        );
    }
}

export default Jibing;