import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Spin, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { signIn } from "next-auth/client";
import authStorage from "src/utils/auth-storage";
import AuthStorage from "src/utils/auth-storage";

// Style
import classes from "./style.module.less";
import { actionLogin } from "src/redux/actions/auth";

const propTypes = {};

const { Title } = Typography;

const defaultProps = {};

const Login = ({ token }) => {
  const dispatch = useDispatch();
  const [loading1, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorAuth, setErrorAuth] = useState(false);
  const loading = false;

  const reloadPage = async () => {
    if (!error) {
      window.location.reload(false);
    }
  };

  const today = new Date();
  const year = today.getFullYear();

  const onFinish = async (values) => {
    // if(values.username = "test" && values.password != null){
    const payload = {
      username: values.username,
      password: values.password,
      app: "SKTN",
    };
    try {
      setLoading(true);
      await dispatch(await actionLogin(payload));
    } finally {
      reloadPage();
    }
    // }else{
    // try {
    //   setLoading(true);
    //   await dispatch(
    //     await actionLoginTest({username: "",
    //     password: ""})
    //   );
    // } finally {
    //   reloadPage();
    // }
    // redirect("http://localhost:3000/sideBar");
    console.log("sdds");
  };

  return (
    <>
      {/* {AuthStorage.loggedIn ? (
        <>
          <Layout token={null} />
        </>
      ) : ( */}
      <>
        <div className={classes.right}>
          <Image
            src="/images/bg.jpg"
            alt="bg"
            layout="fill"
            placeholder="empty"
          />
          <h3 className={classes.imageText}>Automate Your Finance</h3>
        </div>

        <div className={classes.split}>
          <div className={classes.left}>
            <div className={classes.logo}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={50}
              />
            </div>
            <div className={classes.loginForm}>
              <Form
                xs={8}
                sm={16}
                md={24}
                lg={32}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                size="large"
              >
                <div>
                  {errorAuth ? (
                    <p style={{ color: "red" }}>LOGIN GAGAL !!</p>
                  ) : (
                    ""
                  )}
                  <h3 className={classes.welcome}>
                    Welcome Back, Mandiri User
                  </h3>
                  <Title level={1}>
                    Sign in to manage, track and check your financial
                  </Title>
                  <div className={classes.spacer} />
                </div>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  className="login-form-button"
                  loading={loading}
                >
                  Login
                </Button>
              </Form>
            </div>

            <div className={classes.footerLeft}>
              <p>@{year} Mandiri Utama Finance - All rights reserved</p>
            </div>
          </div>
        </div>
      </>
      {/* )} */}
    </>
  );
};

Login.propTypes = propTypes;

Login.defaultProps = defaultProps;

export default Login;
