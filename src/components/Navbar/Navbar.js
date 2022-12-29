import React from "react";
import { Space, Layout } from "antd";
import "./style.css";

const Navbar = () => {
  const { Header } = Layout;
  return (
    <Header>
      <Space>
        <h2>React Contact</h2>
      </Space>
    </Header>
  );
};

export default Navbar;
