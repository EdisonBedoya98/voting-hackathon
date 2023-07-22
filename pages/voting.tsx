import React from "react";
import { Form, Input, Button, DatePicker, Select, Row, Col } from "antd";
import styles from "../styles/Home.module.css";

const { Option } = Select;

const VotingCampaignForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className={styles.main}>
      <Form onFinish={onFinish} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Campaign Name"
              name="campaignName"
              rules={[
                { required: true, message: "Please enter the campaign name" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Start Date"
              name="startDate"
              rules={[
                { required: true, message: "Please select the start date" },
              ]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="End Date"
              name="endDate"
              rules={[
                { required: true, message: "Please select the end date" },
              ]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Election Type"
              name="electionType"
              rules={[
                { required: true, message: "Please select the election type" },
              ]}
            >
              <Select>
                <Option value="presidential">Presidential</Option>
                <Option value="parliamentary">Parliamentary</Option>
                <Option value="local">Local</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Campaign
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default VotingCampaignForm;
