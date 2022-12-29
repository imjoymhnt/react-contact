import { Button, Empty } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";

const NoData = () => {
  return (
    <Empty description={<p>No contacts saved!</p>}>
      <LinkButton title="Add Contact" url="/add-contact" />
    </Empty>
  );
};

export default NoData;
