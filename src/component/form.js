import React from 'react';
import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Icon,
    Rate,
    Checkbox,
    Row,
    Col,
    Input,
  } from 'antd';
  
  const { Option } = Select;
  const { TextArea } = Input;
  const desc = ['重度磨损', '中度磨损', '轻度磨损', '八九成新', '几乎全新'];
  const asyncTest = async (value)=>{
    var result = await setTimeout((value)=>{return value === 'mamz'}, 2000);
    return result;
  }
  
class SellBook extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isbnFlag: false,
      };
  };
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
    handleTest = async (rule, value, callback)=>{
      // var result = await setTimeout(()=>{
      //   console.log(value == 'mamz'); 
      //   if(value == 'mamz'){
      //     this.setState({isbnFlag: true});
      //     callback();
      //   }
      // }, 2000);
      // if(this.state.isbnFlag == true) callback();
      // console.log(this.state.isbnFlag);
      // callback('ISBN不正确');
      fetch('http://localhost:3000/checkISBN', {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method:'post',
        body: JSON.stringify({user: this.state.user, password: this.state.password})
      })
      .then(res=>res.json())
      .then(json=>{
        console.log("updated");
        console.log(json[0].USER_NAME);
        // if()
      });
    }

    handleCheck = async (e)=>{
      e.preventDefault();
      var isbn = document.getElementById('ISBN').value;
      console.log(isbn);
      var mamz = await setTimeout(
        () => {
          console.log(isbn);
          if (isbn == 'mamz') this.setState({isbnFlag: true}); 
          
          console.log(this.state.isbnFlag);
        }, 2000);
      console.log(isbn);
    }
  
    normFile = e => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };
      const {isbnFlag} = this.state;
      return (
        <Form 
            {...formItemLayout} 
            onSubmit={this.handleSubmit}
            style={{margin:'0'}}
        >
            <Form.Item label="ISBN" hasFeedback>
                {getFieldDecorator('BOOK_ISBN', {
                  rules: [{ 
                    required: true, 
                    message: '请输入旧书正确的ISBN！',
                  },
                  {
                    validator: this.handleTest
                  }
                  ],
                })(
                  <div style={{whiteSpace:"nowrap"}}>
                    <Input id='ISBN' placeholder="请输入旧书正确的ISBN" allowClear />
                    <Button type="danger" onClick={this.handleCheck} >
                      校验
                    </Button>
                  </div>
                  )}
            </Form.Item>

            <Form.Item label="书籍类型">
                {getFieldDecorator('BOOK_TYPE_ID', {
                rules: [
                    { required: true, message: '请选择旧书所属的类型！'},
                ],
                })(
                <Select placeholder="请选择旧书所属的类型">
                    <Option value="1">计算机类</Option>
                    <Option value="2">文学类</Option>
                    <Option value="3">悬疑类</Option>
                    <Option value="4">恐怖类</Option>
                </Select>,
                )}
            </Form.Item>
    
            <Form.Item label="交易方式">
                {getFieldDecorator('TRADE_WAY', {
                rules: [
                    { required: true, message: '请选择可接受的交易方式！', type: 'array' },
                ],
                })(
                <Select mode="multiple" placeholder="请选择可接受的交易方式">
                    <Option value="onlinemail">寄送</Option>
                    <Option value="offlinetrade">线下</Option>
                </Select>,
                )}
            </Form.Item>
    
            <Form.Item label="售价">
                {getFieldDecorator('SELLING_PRICE', {
                    rules: [{ required: true, message: '请输入旧书的售价！' }]
                })(<InputNumber min={0} max={9999} step={0.01} />)}
                <span className="ant-form-text"> 元</span>
            </Form.Item>
    
            <Form.Item label="新旧程度">
                {getFieldDecorator('WEAR_RATE', {
                    initialValue: 3,
                    rules: [
                      { required: true, message: '请选择最符合的新旧程度！' },
                    ],
                })(
                    <Rate tooltips={desc}/>
                )}
            </Form.Item>
  
            <Form.Item label="其他描述">
                {getFieldDecorator('BOOK_INTRODUCTION', {
                    initialValue: "",
                })(<TextArea rows={4} />)}
            </Form.Item>
  
            <Form.Item label="旧书照片" extra="请上传一张出售书籍的清晰的照片以供卖家查看！建议上传旧书标有ISBN和售价一面的照片，">
                {getFieldDecorator('upload', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
                })(
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>
                    <Icon type="upload" /> 点击上传照片
                    </Button>
                </Upload>,
                )}
            </Form.Item>
    
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button type="primary" htmlType="submit">
                    提交售书信息
                </Button>
            </Form.Item>
        </Form>
      );
    }
  }

class BuyBook extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    normFile = e => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };
      return (
        <Form 
            {...formItemLayout} 
            onSubmit={this.handleSubmit}
            style={{margin:'0'}}
        >
            <Form.Item label="ISBN" hasFeedback>
                {getFieldDecorator('BOOK_ISBN', {
                  rules: [{ required: true, message: '请输入旧书正确的ISBN！' }],
                })(<Input placeholder="请输入旧书正确的ISBN" style={{minWidth:'376px'}}/>)}
            </Form.Item>
    
            <Form.Item label="交易方式">
                {getFieldDecorator('TRADE_WAY', {
                rules: [
                    { required: true, message: '请选择可接受的交易方式！', type: 'array' },
                ],
                })(
                <Select mode="multiple" placeholder="请选择可接受的交易方式" style={{minWidth:'376px'}}>
                    <Option value="onlinemail">寄送</Option>
                    <Option value="offlinetrade">线下</Option>
                </Select>,
                )}
            </Form.Item>
    
            <Form.Item label="最高售价">
                {getFieldDecorator('SELLING_PRICE', {
                    rules: [{ required: true, message: '请输入可接受的最高售价！' }]
                })(<InputNumber min={0} max={9999} step={0.01}/>)}
                <span className="ant-form-text"> 元</span>
            </Form.Item>
    
            <Form.Item label="最低新旧程度">
                {getFieldDecorator('WEAR_RATE', {
                    initialValue: 3,
                    rules: [
                    { required: true, message: '请选择可接受的最低新旧程度！' },
                ],
                })(
                    <Rate tooltips={desc}/>
                )}
            </Form.Item>
  
            <Form.Item label="其他描述">
                {getFieldDecorator('BOOK_INTRODUCTION', {
                    initialValue: "",
                })(<TextArea rows={4} style={{minWidth:'376px'}}/>)}
            </Form.Item>
    
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button type="primary" htmlType="submit">
                    提交求购信息
                </Button>
            </Form.Item>
        </Form>
      );
    }
}
  
  const SellBookForm = Form.create({ name: 'validate_other' })(SellBook);
  const BuyBookForm = Form.create({ name: 'validate_other' })(BuyBook);
  
export {BuyBookForm, SellBookForm};