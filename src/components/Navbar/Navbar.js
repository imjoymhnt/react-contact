import React from "react";
import { Space, Layout } from "antd";
import "./style.css";
import AddContactButton from "../LinkButton";

const Navbar = () => {
  const { Header } = Layout;
  return (
    <Header>
      <Space>
        <h2>React Contact</h2>
        <AddContactButton title="Home" />
        <AddContactButton title="Add Contact" url="/add-contact" />
      </Space>
    </Header>
  );
};

export default Navbar;
