import React from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
const Register = () => {
  const handleSubmit = (values) => {
    const result = axios
      .post("http://localhost:5000/auth/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      .then((res) => console.log(res));
  };
  return (
    <div>
      Register
      <div>
        <div>
          <Form
            name="useraddedit"
            labelCol={{
              span: 8,
            }}
            onFinish={handleSubmit}
            className="add_edit_antd"
          >
            <Form.Item
              name={"name"}
              label="User Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
                {
                  pattern: new RegExp(/^[a-zA-Z ]{2,}$/),
                  message: "User name contain only characters and numbers",
                },
              ]}
            >
              <Input type={"text"} placeholder="username" />
            </Form.Item>
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
              <Input placeholder="email" type={"email"} />
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
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
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
              Signup
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
);
};
export default Register;
