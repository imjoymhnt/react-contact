import React, { useEffect, useState } from "react";
import Contact from "./Contact";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await localStorage.getItem("contacts");
      if (data?.length) {
        setContacts(data);
      }
    };
    getData();
  }, []);
  return <div>{contacts.length ? <Contact /> : <p>No Contact Saved</p>}</div>;
};

export default Contacts;
