import { Button, Col, Form, Input, Row, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
};

const API = process.env.REACT_APP_API_ENDPOINT;

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    const auth = window.localStorage.getItem("authToken");
    if (auth) {
      history.replace("/reportes");
    }
  }, []);

  const onFinish = async (values: any) => {
    setLoading(true);
    setError(false);
    try {
      const result = (
        await axios.post(`${API}auth/signIn`, {
          email: values.email,
          password: values.password,
        })
      ).data;
      window.localStorage.setItem("authToken", result.token);
      history.replace("/reportes");
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <Row
      justify="space-around"
      align="middle"
      style={{ height: "100vh", backgroundColor: "#f0f2f5" }}
    >
      <Col
        xs={24}
        md={8}
        style={{
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: "5px",
          border: "1px solid #e3e3e3",
        }}
      >
        <Title>Iniciar Sesión</Title>
        <Form
          {...layout}
          layout={"vertical"}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Correo"
            name="email"
            rules={[
              {
                required: true,
                message: "Ingresa tu correo!",
                type: "email",
              },
            ]}
          >
            <Input type={"email"} />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: "Ingresa tu contraseña!" }]}
          >
            <Input.Password />
          </Form.Item>
          {error && (
            <Title level={5} style={{ color: "#ff4d4f" }}>
              Credenciales inválidas
            </Title>
          )}
          <Form.Item style={{ marginTop: 20 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Iniciar Sesión
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
