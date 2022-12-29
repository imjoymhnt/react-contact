import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

import { Card, Modal } from "antd";

const Contact = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOk = async () => {
    const contacts = await JSON.parse(localStorage.getItem("contacts"));
    const filteredContacts = contacts.filter(
      (contact) => contact.id !== data.id
    );
    localStorage.setItem("contacts", JSON.stringify(filteredContacts));
    setOpenModal(false);
    window.location.reload();
  };
  const handleCancel = () => {
    setOpenModal(false);
  };
  return (
    <Card
      hoverable
      style={{
        width: 250,
      }}
      cover={<img alt="Profile picture" src={data.profile} height={200} />}
      actions={[
        <DeleteOutlined key="setting" onClick={() => setOpenModal(true)} />,
      ]}
    >
      <Modal
        title="Delete Contact?"
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Are you sure you want to delete the contact?
      </Modal>

      <h4>Name: {data.name}</h4>
      <h4>Phone: {data.phone}</h4>
      <p>type: {data.type}</p>
      {data.isWhatsapp && <p>Whatsapp</p>}
    </Card>
  );
};

export default Contact;
