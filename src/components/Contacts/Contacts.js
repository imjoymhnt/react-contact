import React, { useEffect, useState } from "react";
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
      {contacts.length > 0
        ? contacts.map((contact) => (
            <>
              <Contact data={contact} /> <br />
            </>
          ))
        : "No data"}
    </div>
  );
};

export default Contacts;
