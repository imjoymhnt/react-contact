import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ title = "Button", url = "/" }) => {
  return (
    <Link to={url} style={{ margin: "1rem" }}>
      <Button type="primary">{title}</Button>
    </Link>
  );
};

export default LinkButton;
