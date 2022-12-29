import React from "react";

import { Card } from "antd";

const Contact = ({ data }) => {
  return (
    <Card
      hoverable
      style={{
        width: 300,
      }}
      cover={<img alt="example" src={data.profile} />}
    >
      <h4>Name: {data.name}</h4>
      <h4>Phone: {data.phone}</h4>
      <p>type: {data.type}</p>
      {data.isWhatsapp && <p>Whatsapp</p>}
    </Card>
  );
};

export default Contact;
