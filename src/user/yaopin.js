import React from 'react';
import { Layout, Radio } from 'antd';
import HeaderComponent from '../global/header';
import SearchComponent from '../component/search';
import MenuComponent from '../component/menu';
import '../css/newantd.css';

const {Content, Footer } = Layout;
const typeData = ['抗病原微生物药','解热镇痛及非甾体抗炎镇痛药','抗寄生虫药','抗肿瘤药','麻醉药及其辅助用药',
    '神经系统用药','治疗精神障碍药','诊断用药','其他用药','内脏系统用药','激素及调节内分泌功能药','免疫系统药',
    '维生素类及矿物质缺乏症用药','酶类及其他生化药','营养治疗药','调节水盐、电解质及酸碱平衡药','专科用药','戒毒药'
];
const testData = 'abcdefghijklmnopqrstuvwxyz';
const YaopinData = [
    {title:'wqesdfghhe2qwa',content:'a会计法开始懂了荆防颗粒圣诞快乐发快递费aaaaaaa1qqqqqqqqqqqqqqqqqqqqqqaaaaaaaaa'},
    {title:'awqewe',content:'aaaaaaaaaaaaaa会计法开始懂了荆防颗粒圣诞快乐发快递aaaqqqqqqqqqqqqqqqqqqqqqqqqqqaaaaaaa'},
    {title:'aqweqwe',content:'aaaaaaaaaaaa会计法开始懂了荆防颗粒圣诞快乐发快递aaaaaaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqaaaaaa'},
    {title:'aqweqwe',content:'aaaaaaaaaaaa会计法开始懂了荆防颗粒圣诞快乐发快递aaaaaqqqqqqqqqqqqqqqqqqqqqqqqaaaaaaa'},
    {title:'aqweqweqw',content:'aaaa会计法开始懂了荆防颗粒圣诞快乐发快递aaaaaaaaaaaaaaaqqqqaaaaa'},
    {title:'aeqwe',content:'aaaaaaaaa会计法开始懂了荆防颗粒圣诞快乐发快递aaaaaaaaaqqqqqqqqqqqqqaaaaaa'},
    {title:'aqwewqesdfsdfg',content:'aaaa会计法开始懂了荆防颗粒圣诞快乐发快递aaaaaaaaaaaaaqqqqqqqqqqqqqqqqqqqqqqqaaaaaaa'},
];

class YaopinType extends React.Component {
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
                    {typeData.map(
                        item => <Radio.Button value={item} style={{marginLeft:'10px', marginTop:'10px'}}>{item}</Radio.Button>)}
                </Radio.Group>
            </div>
        );
    }
}
const YaopinCard = props=> (
    <div style={{width: '100%', background: '#fff', minHeight: 150, margin:'15px 0',padding:'30px'}}>
        <h1><a href="http://mamz.xyz/djs" style={{color:'#3d9bd9'}}>{props.data.title}</a></h1>
        <div style={{fontSize:'16px',margin:'20px 0 0'}}>{props.data.content}</div>
    </div>
);

class Yaopin extends React.Component {
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
                        <YaopinType />
                        {YaopinData.map(item=><YaopinCard data={item}/>)}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>BookTrade ©2018 Created by 229 Studio</Footer>
            </Layout>
        );
    }
}

export default Yaopin;