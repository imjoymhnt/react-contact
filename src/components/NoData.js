import { Col, Empty, Row } from "antd";
import React from "react";
import LinkButton from "./LinkButton";

const NoData = () => {
  return (
    <div
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "40%",
      }}
    >
      <Empty description={<p>No contacts saved!</p>}>
        <LinkButton title="Add Contact" url="/add-contact" />
      </Empty>
    </div>
  );
};

export default NoData;
