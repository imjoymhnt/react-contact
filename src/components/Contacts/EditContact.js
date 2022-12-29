import { Button, Checkbox, Form, Input, Select, message } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const EditContact = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const handleUpload = (e) => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const { id } = useParams();

  const contacts = JSON.parse(localStorage.getItem("contacts"));
  const current = contacts.find((el) => el.id === id);

  const onFinish = async (values) => {
    const newContacts = contacts.reduce((acc, curr) => {
      if (curr.id === id) {
        const newData = {
          ...values,
          profile: imageUrl ? imageUrl : curr.profile,
          id: current.id,
          isWhatsapp: values.isWhatsapp ? values.isWhatsapp : false,
        };
        acc.push(newData);
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);

    localStorage.setItem("contacts", JSON.stringify(newContacts));
    message.success("Contact Updated!");
    window.location.assign("/");
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
        <Form.Item label="Name" name="name" initialValue={current.name}>
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          initialValue={current.phone}
        >
          <Input
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item label="Type" name="type" initialValue={current.type}>
          <Select>
            <Select.Option value="personal">Personal</Select.Option>
            <Select.Option value="office">Office</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Is Whatsapp"
          name="isWhatsapp"
          valuePropName="checked"
          initialValue={current.isWhatsapp}
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
          <Button type="primary" htmlType="submit" loading={loading}>
            Update Contact
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditContact;
