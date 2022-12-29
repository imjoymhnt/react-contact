import { Col, Row, Skeleton } from "antd";
import React, { Suspense, useEffect, useState } from "react";
import NoData from "../NoData";
import "./style.css";
const Contact = React.lazy(() => import("./Contact"));

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await localStorage.getItem("contacts");
      if (data?.length) {
        const newData = JSON.parse(data).sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setContacts(newData);
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
              <Suspense fallback={<Skeleton />}>
                <Contact data={contact} /> <br />
              </Suspense>
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
