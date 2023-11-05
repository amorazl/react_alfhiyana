import React from "react";
import { Link } from "react-router-dom";
import { Card, Space, Row, Col } from "antd";

const Home = () => {
  return (
    <>
      <Row justify="center" gutter={[8, 48]}>
        <Col span={12} align="center">
          <h1>Welcome to the OpenAI platform</h1>
        </Col>
      </Row>
      <Row justify="center" gutter={[8, 48]}>
        <Col span={12} align="center">
          <Space direction="horizontal" size={32}>
            <Link to="/qna-ai">
              <Card
                title="Q&A Chat GPT"
                style={{
                  width: 300,
                  backgroundColor: "azure",
                }}
              >
                <p>Open AI about Q&A for spesific topic</p>
              </Card>
            </Link>
            <Link to="/quote-generator">
              <Card
                title="Quote Generator"
                style={{
                  width: 300,
                  backgroundColor: "seashell",
                }}
              >
                <p>Open AI to create a random quotes</p>
              </Card>
            </Link>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Home;
