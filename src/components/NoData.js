import { Col, Empty, Row } from "antd";
import React from "react";
import LinkButton from "./LinkButton";

const NoData = () => {
  return (
    <Row>
      <Col
        xs={{
          span: 8,
          offset: 8,
        }}
        lg={{
          span: 8,
          offset: 8,
        }}
      >
        <Empty description={<p>No contacts saved!</p>}>
          <LinkButton title="Add Contact" url="/add-contact" />
        </Empty>
      </Col>
    </Row>
  );
};

export default NoData;
