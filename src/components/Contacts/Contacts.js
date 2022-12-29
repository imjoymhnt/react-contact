import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import NoData from "../NoData";
import Contact from "./Contact";
import "./style.css";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await localStorage.getItem("contacts");
      if (data?.length) {
        setContacts(JSON.parse(data));
      }
    };
    getData();
  }, []);
  return (
    <div className="contacts">
      <Row>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <Col
              xs={{
                span: 5,
                offset: 1,
              }}
              lg={{
                span: 6,
                offset: 2,
              }}
            >
              <Contact data={contact} /> <br />
            </Col>
          ))
        ) : (
          <NoData />
        )}
      </Row>
    </div>
  );
};

export default Contacts;
