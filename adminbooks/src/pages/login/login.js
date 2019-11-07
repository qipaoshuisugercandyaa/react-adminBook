import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox, Card, message} from 'antd';
import Style from './login.module.less'
class Login extends Component{
    submit=()=>{
        this.props.form.validateFields((err,userinfo)=>{
            if(err){
                message.error('输入有误请重新输入')
            }else{
                let url='/api/adminbook/user/login';
                this.$axios.post(url,userinfo).then((data)=>{
                    if(data.err===0){
                        window.localStorage.setItem('rootList',JSON.stringify(data.rootList));
                        window.localStorage.setItem('token',JSON.stringify(data.token));
                        window.localStorage.setItem('uid',JSON.stringify(data.uid));
                        window.localStorage.setItem('bookList',JSON.stringify(data.bookList));
                        this.props.history.push('/admin')
                    }
                })
                message.success('登陆成功，1后跳转到首页')
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className={Style.box}>
                <Card title='登录系统' className={Style.boxCard}>
                    <div className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' },
                                    {max:9,message:'最多可输入9位'},
                                    {min:3,message:'最少输入3位'}]
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('passWord', {
                                rules: [{ required: true, message: 'Please input your username!' },
                                    {max:9,message:'最多可输入9位'},
                                    {min:3,message:'最少输入3位'}]
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.submit} className="login-form-button">
                                Log in
                            </Button>
                            <br/>
                        </Form.Item>
                    </div>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Login);