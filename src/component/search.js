import React from 'react';
import {Input, } from 'antd';
import logo from '../images/logo.png'
import '../css/newantd.css'

const { Search } = Input;

class SearchComponent extends React.Component {
    render(){
        return (
            <div style={{display:'flex', height:'130', width: '100%'}}>
                <div style={{height: '130px',width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <img style={{marginLeft:'150px',height: '38px',width: '130px', }} src={logo} alt='logo' />
                </div>
                
                <div style={{
                    
                    height: '130px', 
                    float: 'right', 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center',
                    }}>
                    <Search
                        size="large"
                        placeholder="搜索 疾病/药品/养生资讯"
                        onSearch={value => console.log(value)}
                        style={{float: 'right',width:'600px',}}
                        enterButton="搜索"
                    />
                </div>
                <div style={{width:'300px'}}></div>
                
            </div>
        );
    }
}
export default SearchComponent;