import React, { useState } from "react";
import { Breadcrumb, Layout, Button, theme, Row, Col, Card, Spin } from "antd";
import { openai } from "../configs/openai";

const { Content, Footer } = Layout;

const QuoteGenerator = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [loading, setLoading] = useState(false);
  const [quoteAI, setQuoteAI] = useState();

  const handleQuoteButton = async (e) => {
    setLoading(true);
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Give one random creative quote to embark my wisdom.",
        },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 150,
    });
    setQuoteAI(response.choices[0].message.content);
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
            <Breadcrumb.Item>Quote Generator</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
              minHeight: "80vh",
            }}
          >
            <h2>Random Quote Generator</h2>
            <Row justify="center" gutter={[8, 32]}>
              <Col span={24}>
                <Button onClick={handleQuoteButton}>Generate</Button>
              </Col>
              <Col span={10} align="center">
                {loading && <Spin />}
                {quoteAI && <Card title="Your Wisdom Quote">{quoteAI}</Card>}
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

export default QuoteGenerator;
