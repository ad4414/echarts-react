import React, { useState } from "react";
import {
  DesktopOutlined,
  LogoutOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  AppleFilled,
} from "@ant-design/icons";
import "./index.scss";
import { Layout, Menu, Popconfirm } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Polyline", "/", <PieChartOutlined />),
  getItem("gradient", "/gradient", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Dotted", "/dotted"),
    getItem("aqi", "/aqi"),
    getItem("flights", "/flight"),
    getItem("pieNet", "/pienet"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Orthographic", "/orthographic"),
    getItem("gauge", "/Gauge"),
    getItem("flightGL", "/flightGL"),
  ]),
  getItem("3D", "/3d", <AppleFilled />),
];
const EchartsLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();
  const handClick = (e) => {
    console.log(e.key);

    navigate(e.key);
  };
  const handLogin = (e) => {
    console.log(e.target.textContent);

    navigate("/login");
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header className="header">
        <div className="user-info">
          <span className="user-name">吴老师</span>
          <span className="user-logout">
            <Popconfirm
              title="是否确认退出？"
              okText="退出"
              onConfirm={handLogin}
              cancelText="取消"
            >
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          onClick={handClick}
          items={items}
        />
      </Sider>
      <Layout>
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default EchartsLayout;
