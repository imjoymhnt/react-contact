import React, { useState } from "react";
import { Form, Input, Button, Select, Checkbox, message } from "antd";

const AddContact = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [form] = Form.useForm();
  const handleUpload = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "react-contact");
    data.append("cloud_name", "imjoymhnt");
    fetch("https://api.cloudinary.com/v1_1/imjoymhnt/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setImageUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const onFinish = async (values) => {
    const contacts = await localStorage.getItem("contacts");
    if (contacts) {
      const jsonData = JSON.parse(contacts);
      let isWhatsapp = values.isWhatsapp;
      const newData = { ...values, profile: imageUrl, isWhatsapp };
      const data = [...jsonData, newData];
      localStorage.setItem("contacts", JSON.stringify(data));
      message.success("Contact Added Successfully!");
      form.resetFields();
    } else {
      let isWhatsapp = values.isWhatsapp;
      const arrData = [{ ...values, profile: imageUrl, isWhatsapp }];
      localStorage.setItem("contacts", JSON.stringify(arrData));
      message.success("Contact Added Successfully!");
      form.resetFields();
    }
  };

  return (
    <>
      <br />
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone Number">
          <Input
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item label="Type" name="type">
          <Select>
            <Select.Option value="personal">Personal</Select.Option>
            <Select.Option value="office">Office</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Is Whatsapp"
          name="isWhatsapp"
          valuePropName="checked"
        >
          <Checkbox>isWhatsapp</Checkbox>
        </Form.Item>
        <Form.Item label="Profile Picture" name="profile">
          <input type="file" onChange={handleUpload} />
        </Form.Item>
        <br />
        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 14,
          }}
        >
          <Button type="primary" htmlType="submit" disabled={!imageUrl}>
            Add Contact
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddContact;
