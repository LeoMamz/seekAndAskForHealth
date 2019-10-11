import React from 'react';
import { Layout} from 'antd';
import HeaderComponent from '../global/header';
import SearchComponent from '../component/search';
import MenuComponent from '../component/menu';
import index1 from '../images/index1.png'
import image1 from '../images/zy1.jpg'


const {Content, Footer } = Layout;

class ZixunCard1 extends React.Component {
    render(){
        return (
            <div style={{width:'450px', height:'150px', display:'inline-block'}}>
                <div style={{float:'left'}}>
                    <img style={{height:'150px',width:'150px'}} src={image1} alt='zixun' />
                </div>
                <div style={{marginLeft:'155px',whiteSpace:'pre-wrap',width:'290px'}}>
                    <h2>养胃怎么办？</h2>
                    <p style={{color:'#3D9BD9'}}>
                        该怎么办就怎么办，哪来那么多fdsfsdf大幅度发的地方地方大幅度辅导费地方地方地方地方废话。
                        kdsfjklsd独守空房记得深刻理解福克地方大幅度放到放到地方地方大幅度放到的放到放到放到分地方。
                    </p>
                </div>
            </div>
        );
    }
}

class UserIndexComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'index',
        };
    };
    render() {
        const {current} = this.state;
        return (
            <Layout className="layout" style={{background:'#fff'}}>
                <HeaderComponent current={this.state.current} />
                <Content  style={{maxWidth: '1200px', margin: '64px auto'}}>
                    {/* <h1>这里是旧书市场！！！</h1> */}
                    <SearchComponent />
                    <div style={{height:'66px', position:'relative',display:'flex',justifyContent:'space-between'}}>
                        <div style={{width:'280px',height:'600px',background:'#444c57', marginRight:'20px'}}>
                            <div>

                            </div>
                        </div>
                        <MenuComponent current={current} />
                        <div style={{width:'300px'}}></div>
                    </div>
                    
                    <div style={{width: '100%', background: '#fff', minHeight: 380 }}>
                        <div style={{display: 'flex', flexWrap:'wrap', justifyContent: 'space-around'}}>
                            <img style={{width:'900px', height:'300px',marginLeft:'300px'}} src={index1} alt="index1" />
                        </div>
                        <div>
                            <div style={{marginLeft: '300px', marginTop:'10px'}}>
                                <h2>健康资讯</h2>
                            </div>
                            <div style={{marginLeft:'300px'}}>
                                <a href="http://www.mamz.xyz/djs" >
                                    <ZixunCard1 />
                                </a>
                                <a href="http://www.mamz.xyz/djs" >
                                    <ZixunCard1 />
                                </a>
                            </div>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>BookTrade ©2018 Created by 229 Studio</Footer>
            </Layout>
        );
    }
}

export default UserIndexComponent;