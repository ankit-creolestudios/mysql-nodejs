import { Button, Form, Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ email: "" });
  }, []);
  const handleSubmit = (values) => {
    const result = axios
      .post("http://localhost:5000/auth/signin", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        form.setFieldsValue({ email: "", password: "" });
      });
  };
  return (
    <div>
      Login
      <div>
        {" "}
        <div>
          <Form
            name="useraddedit"
            labelCol={{
              span: 8,
            }}
            form={form}
            onFinish={handleSubmit}
            className="add_edit_antd"
          >
            <Form.Item
              name={"email"}
              label={"Email"}
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
              ]}
            >
              <Input placeholder="email" type={"email"} autoComplete={false} />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please type your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password autoComplete="new-password" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="add_edit_button"
              >
                Signin
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
