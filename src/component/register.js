import {DatePicker,Upload, message,Tooltip, Form, Button, Modal, Input, Select, Icon} from 'antd';
import React from 'react';

const { Option } = Select;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

function beforeUpload(file) {
  const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png');
  if (!isJPG) {
    message.error('只允许上传JPG格式的图片!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('头像必须小于2MB!');
  }
  return isJPG && isLt2M;
}


class RegisterForm extends React.Component {
    state = {
        loading: false,
        previewVisible: false,
        previewImage: '',
        fileList: [],
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                console.log(JSON.stringify(
                    {
                        username: values.username, 
                        password: values.password, 
                        phone: values.phone, 
                        gender: values.gender, 
                        datePicker: values.datePicker, 
                        avatar: values.avatar, 
                    }));
                fetch('http://localhost:3001/login', {
                  headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                  },
                  method:'post',
                  mode: 'cors',
                  body: JSON.stringify(
                        {
                            username: values.username, 
                            password: values.password, 
                            phone: values.phone, 
                            gender: values.gender, 
                            datePicker: values.datePicker,
                            avatar: values.avatar,
                        })
                })
                .then(res=>res.json())
                .then(json=>{
                  console.log("updated");
                  // console.log(json[0].USER_NAME);
                  console.log(json);
                });
            }
        });
    };
    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入的密码不一致!');
        } else {
            callback();
        }
    };
    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    //头像
    handleCancel = () => this.setState({ previewVisible: false });
        handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };
    handleChange = ({ fileList }) => this.setState({ fileList });

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );
        const config = {
            rules: [{ type: 'object', required: true, message: '请选择出生日期!' }],
        };
        //头像上传
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
        );
        return(
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item
                    label={
                        <span>
                        用户名&nbsp;
                        <Tooltip title="用来登录，同时也是您的昵称">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="密码" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                        {
                            validator: this.validateToNextPassword,
                        },
                        ],
                  })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="确认密码" hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [
                        {
                            required: true,
                            message: '请确认您的密码!',
                        },
                        {
                            validator: this.compareToFirstPassword,
                        },
                        ],
                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item label="联系方式">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '请输入电话号码!' }],
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item label="性别">
                    {getFieldDecorator('gender', {
                        rules: [{ required: true, message: '请选择您的性别!' }],
                    })(
                        <Select
                        placeholder="请选择您的性别"
                        onChange={this.handleSelectChange}
                        >
                        <Option value="male">男性</Option>
                        <Option value="female">女性</Option>
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item label="出生日期">
                    {getFieldDecorator('date-picker', config)(<DatePicker />)}
                </Form.Item>
                <Form.Item label="头像">
                    {getFieldDecorator('avatar', {
                        rules: [{ required: true, message: '请上传头像!' }],
                    })(
                        <div>
                        <Upload
                            action="../images/avatar"
                            listType="picture-card"
                            fileList={fileList}
                            beforeUpload={beforeUpload}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                            name="avatar"
                        >
                            {fileList.length >= 1 ? null : uploadButton}
                        </Upload>
                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                        </div>
                    )}
                </Form.Item>
                <Form.Item  style={{textAlign:'center',width:'416px'}}>
                    <div style={{width:'416px'}}>
                        <Button type="primary" htmlType="submit">
                        注册
                        </Button>
                    </div>
                </Form.Item>
              </Form>
        );
    }
}

const RegisterDrawer = Form.create()(RegisterForm);
export default RegisterDrawer;