import React, { useState } from "react";
import { Breadcrumb, Layout, Input, Button, Space, theme, Row, Col, Card, Spin } from "antd";
import { openai } from "../configs/openai";

const { Content, Footer } = Layout;

const QnA = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [inputMessage, setInputMessage] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [responseAI, setResponseAI] = useState();

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEnteredMessage(inputMessage);
    setInputMessage("");
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "This is a QnA about Pride and Prejudice book, therefore you can only answer a question about that. If any question out of the context appear, say sorry you cant answer because it's out of your scope.",
        },
        {
          role: "user",
          content: inputMessage,
        },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 150,
    });
    setResponseAI(response.choices[0].message.content);
    setLoading(false);
  };

  return (
    <>
      <Layout>
        <Content
          className="site-layout"
          align="center"
          style={{
            padding: "0 50px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>QnA</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
            }}
          >
            <h3>QnA about Pride & Prejudice Book</h3>

            <Row justify="center" align="middle" style={{ minHeight: "65vh" }}>
              <Col span={12}>
                <div
                  style={{
                    width: 600,
                    border: "1px solid #d9d9d9",
                    borderRadius: 5,
                  }}
                >
                  <div style={{ padding: 16 }}>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{
                        display: "flex",
                        marginBottom: "25px",
                      }}
                    >
                      <Row>
                        <Col span={16} offset={8}>
                          <Card>
                            <p style={{ textAlign: "end" }}>{enteredMessage}</p>
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={16}>
                          {loading && <Spin />}
                          {responseAI && (
                            <Card style={{ backgroundColor: "azure" }}>
                              <p style={{ textAlign: "start" }}>{responseAI}</p>
                            </Card>
                          )}
                        </Col>
                      </Row>
                    </Space>

                    <Space.Compact block>
                      <Input
                        value={inputMessage}
                        onChange={handleInputChange}
                        placeholder="Type your message..."
                        onPressEnter={handleSendMessage}
                      />
                      <Button type="primary" onClick={handleSendMessage}>
                        Send
                      </Button>
                    </Space.Compact>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ©2023 Alterra Academy
        </Footer>
      </Layout>
    </>
  );
};

export default QnA;
