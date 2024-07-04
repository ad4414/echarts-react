import React, { useEffect } from 'react';
import {  Checkbox, Form, Input } from 'antd';
import './index.scss'
import {useSelector,useDispatch} from "react-redux"
import { fData, fetchToken } from '../store/light';
import { useNavigate } from 'react-router-dom';
const Login = () => {
 
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const dispatch=useDispatch()
//const loginData=useSelector(state=>state.login.LoginData)
useEffect(()=>{
dispatch(fData())
},[dispatch])
 const navigate=useNavigate()
const onFinish =async (values) => {
  const {username,password}=values
  let arr=[{"username":username,"password":password}]
await dispatch(fetchToken(values))
 /* if( JSON.stringify(arr)===JSON.stringify(loginData)){
  navigate('/polyline')
 } */
 navigate('/polyline')
};
return <div className='background-style-7'>
        <div className="login" >
        <Form 
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>授权即同意服务协议和隐私保护指引</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <button   className='btn-animate btn-animate__rotate2-out' type="submit">
        登录
      </button>
    </Form.Item>
  </Form>
    </div>
    </div>
}
    
    
  
 
export default  Login;