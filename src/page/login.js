import React from "react";
import { Checkbox, Form, Input } from "antd";
import "./index.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fData } from "../store/light";
const Login = () => {
  const dispatch = useDispatch();
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values);
    dispatch(fData(values));
    navigate("/");
  };
  return (
    <div className="background-style-7">
      <div className="login">
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          validateTrigger={["onBlur"]}
        >
          <Form.Item
            label="Username"
            name="mobile"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="code"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          {/*  <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>授权即同意服务协议和隐私保护指引</Checkbox>
    </Form.Item> */}
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <button
              className="btn-animate btn-animate__rotate2-out"
              type="submit"
            >
              登录
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
