import { Form, Input, Button, Upload, Image } from "antd";
import { useForm } from "react-hook-form";
import { CameraOutlined } from "@ant-design/icons";
import { Camera } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const YourForm = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const photo = watch("photo");
  const idPhoto = watch("idPhoto");
  const [photoSrc, setPhotoSrc] = useState("");

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onTakePhoto = (field: any) => (dataUri: any) => {
    setValue(field, dataUri);
  };
  const onTakePhotoID = (field: any) => (dataUri: any) => {
    setValue(field, dataUri);
    setPhotoSrc(dataUri);
  };

  return (
    <main className={styles.main}>
      <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Document ID"
          name="documentId"
          rules={[{ required: true, message: "Please enter your document ID" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Photo">
          <Upload>
            <Button icon={<CameraOutlined />} />
          </Upload>

          {photo ? (
            <Image src={photo} alt="Taken Photo" />
          ) : (
            <Camera onTakePhoto={onTakePhoto("photo")} />
          )}
        </Form.Item>
        <Form.Item label="User ID Photo">
          <Upload>
            <Button icon={<CameraOutlined />} />
          </Upload>

          {photoSrc ? (
            <Image src={idPhoto} alt="Taken ID Photo" />
          ) : (
            <Camera onTakePhoto={onTakePhotoID("idPhoto")} />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
};

export default YourForm;
