import React, { useState } from "react";
import { openai } from "./configs/openai";
import { Breadcrumb, Layout, Form, Input, Button, theme, Space, Spin, Row, Col } from "antd";

const { Content, Footer } = Layout;

const App = () => {
  const [form] = Form.useForm();
  const [responseAI, setResponseAI] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // GPT 3.5 Turbo Model
  async function onFinish(e) {
    console.log(e);
    setIsLoading(true);
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: e.query }],
        model: "gpt-3.5-turbo",
      });
      setResponseAI(response.choices[0].message.content);
    } catch (e) {
      setResponseAI("Something is going wrong. Please try again.");
    }
    setIsLoading(false);
  }

  // Text Davinci 003 Model
  // async function onFinish(e) {
  //   console.log(e);
  //   setIsLoading(true);
  //   try {
  //     const response = await openai.completions.create({
  //       model: "text-davinci-003",
  //       prompt: prompt,
  //     });
  //     setResponseAI(response.choices[0].text);
  //   } catch (e) {
  //     setResponseAI("Something is going wrong, Please try again.");
  //   }
  //   setIsLoading(false);
  // }

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      query: "Tell me briefly about the most popular book from Jane Austen?",
    });
  };

  return (
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
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <h3>Prompt</h3>
          <Row justify="center">
            <Col span={12}>
              <Form
                form={form}
                onFinish={onFinish}
                style={{
                  maxWidth: 800,
                }}
              >
                <Form.Item
                  name="query"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Type something..." />
                </Form.Item>
                <Form.Item>
                  <Space>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                      Reset
                    </Button>
                    <Button type="link" htmlType="button" onClick={onFill}>
                      Fill form
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <h3>Result</h3>
          {isLoading ? (
            <Spin />
          ) : (
            responseAI && (
              <div>
                <p>{responseAI}</p>
              </div>
            )
          )}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        ©2023 Amorazl
      </Footer>
    </Layout>
  );
};
export default App;
