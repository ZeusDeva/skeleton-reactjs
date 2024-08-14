import React, { useState, useEffect, useRef } from "react";
import {
  AppstoreOutlined,
  ContainerFilled,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
// import { Button, Menu } from "antd";
import classes from "./style.module.less";
import {
  UploadOutlined,
  VideoCameraOutlined,
  MenuOutlined,
  SettingOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { FixedSizeList as ListFix } from "react-window";
import AutoSizer, { Size } from "react-virtualized-auto-sizer";
import { setLink } from "src/redux/actions/data";

import { useRouter } from "next/router";
import Iframe from "../Iframe";
import { useDispatch, useSelector } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;
const items = [
  {
    key: "1",
    icon: <PieChartOutlined className={classes.iconSize} />,
    label: "Option 1",
  },
  {
    key: "2",
    icon: <DesktopOutlined className={classes.icon} />,
    label: "Option 2",
  },
  {
    key: "3",
    icon: <ContainerOutlined className={classes.icon} />,
    label: "Option 3",
  },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined className={classes.icon} />,
    children: [
      {
        key: "5",
        label: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
      },
      {
        key: "7",
        label: "Option 7",
      },
      {
        key: "8",
        label: "Option 8",
      },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined className={classes.icon} />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          {
            key: "11",
            label: "Option 11",
          },
          {
            key: "12",
            label: "Option 12",
          },
        ],
      },
    ],
  },
];

const listMenu = [
  {
    key: "/",
    icon: <SettingOutlined />,
    label: "Settings",
  },
  {
    key: "youtube",
    icon: <UserOutlined />,
    label: "Youtube",
  },
  {
    key: "google",
    icon: <PoweroffOutlined />,
    label: "Google",
  },
  {
    key: "logout",
    icon: <PoweroffOutlined />,
    label: "Logout",
  },
  {
    key: "logout",
    icon: <PoweroffOutlined />,
    label: "Logout",
  },
  {
    key: "logout",
    icon: <PoweroffOutlined />,
    label: "Logout",
  },
  {
    key: "logout",
    icon: <PoweroffOutlined />,
    label: "Logout",
  },
  {
    key: "logout",
    icon: <PoweroffOutlined />,
    label: "Logout",
  },
  {
    key: "logout",
    icon: <PoweroffOutlined />,
    label: "Logout",
  },
];

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [containerHeight, setContainerHeight] = useState(600);
  const [containerWidth, setContainerWidth] = useState(800);
  const containerRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.getBoundingClientRect().height);
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial height

    return () => window.removeEventListener("resize", handleResize);
  }, [containerHeight]);

  const handleMenuClick = (e) => {
    //   router.push(e.key);
  };

  const handleLogout = () => {
    // Implement your logout functionality here
    console.log("Logging out...");
  };

  const pay2 = useSelector((state) => state.data.link);

  const handelClick = (e) => {
    console.log("sdfsdfsfsfrgeghetg", e.key);
    switch (e.key) {
      case "google":
        console.log("google");
        console.log("hsjd", pay2);
        return dispatch(setLink("https://google.com/search?igu=1"));
      case "youtube":
        return dispatch(
          setLink(
            "https://www.youtube.com/embed/dQw4w9WgXcQ?si=YJyCaFyndEplWJsc"
          )
        );

      default:
        return;
    }
  };

  const Row = () => (
    <div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["/"]}
        onClick={handelClick}
      >
        {listMenu.map((item) => (
          <Menu.Item
            className={classes.menuItems}
            key={item.key}
            icon={item.icon}
          >
            {item.label}
          </Menu.Item>
        ))}
        {/* <Menu.Item
          className={classes.menuItems}
          key="logout1"
          icon={
            <PoweroffOutlined style={{ height: "5vh", lineHeight: "60px" }} />
          }
          onClick={handleLogout}
        >
          Logout
        </Menu.Item>
        <Menu.Item
          className={classes.menuItems}
          key="logout12"
          icon={
            <PoweroffOutlined style={{ height: "5vh", lineHeight: "60px" }} />
          }
          onClick={handleLogout}
        >
          Logout
        </Menu.Item> */}
      </Menu>
    </div>
  );

  const router = useRouter();

  const listData = () => {
    <div>
      <ListFix
        height={containerHeight}
        itemCount={1}
        itemSize={30}
        width="265px"
      >
        {Row}
      </ListFix>
    </div>;
  };

  useEffect(() => {}, []);

  console.log("reff", containerHeight);
  return (
    <>
      <Layout
        className={
          collapsed ? classes.sidebarCloseLayout : classes.sidebarOpenLayout
        }
      >
        <Sider
          className={classes.appSidebar}
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          width="265px"
        >
          <div className={classes.contentSidebar}>
            <div
              className={collapsed ? classes.sidebarClose : classes.sidebarOpen}
            >
              <div className={classes.contentLogo}>
                {/* Add your logo here */}
                <img
                  className={classes.logoImg}
                  src="/images/logo_mandiri.png"
                  alt="Logo"
                  // style={{ width: "100%" }}
                />
              </div>
              <div className={classes.userPanel}>
                <div className={classes.image}>
                  <img
                    className={classes.imgCircle}
                    src="/images/avatar.png"
                    alt="User image"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className={classes.info}>
                  <p>Hi, zeus</p>
                  <p>15997383</p>
                </div>
                <div>
                  <img
                    className={classes.bgUser}
                    src="/images/avatar-bg.png"
                    alt="User Image"
                  />
                </div>
                <div className={classes.actionButtonInfo}>
                  <Button
                    icon={<SettingOutlined className={classes.iconSize} />}
                    className={classes.itemIcon}
                  >
                    Settings
                  </Button>
                  <Button
                    icon={<UserOutlined className={classes.iconSize} />}
                    className={classes.itemIcon}
                  >
                    Profiles
                  </Button>
                  <Button
                    icon={<PoweroffOutlined className={classes.iconSize} />}
                    className={classes.itemIcon}
                    onClick={() => router.push("/")}
                  >
                    log out
                  </Button>
                </div>
              </div>
            </div>

            {/* <div>
            <Button icon={<SettingOutlined />}>Setting</Button>
            </div> */}
            {/* 
            <div height="100">
              <AutoSizer>
                {({ height = "100", width }) => (
                  <ListFix
                    height={height}
                    itemCount={1}
                    itemSize={30}
                    width="265px"
                  >
                    {Row}
                  </ListFix>
                )}
              </AutoSizer>
            </div> */}

            <div
              className={classes.menu}
              ref={containerRef}
              style={{ height: "80%" }}
            >
              <ListFix
                height={containerHeight}
                itemCount={1}
                itemSize={30}
                width="265px"
              >
                {Row}
              </ListFix>
            </div>
            <div className={classes.actionButton}>
              <button
                // icon={collapsed ? <MenuOutlined /> : <MenuOutlined />}
                icon={<PieChartOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              ></button>
            </div>
          </div>
        </Sider>
      </Layout>
    </>
  );
};

export default SideBar;
