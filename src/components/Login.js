import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  Row,
} from "reactstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    console.log("Login successful with:", { email, password });
  };

  return (
    <Row
      md={4}
      className="flex justify-center align-items-center"
      style={{ marginTop: "5%" }}
    >
      <Card>
        <CardBody>
          <CardTitle tag="h4" className="text-center">
            Login
          </CardTitle>
          {error && <Alert color="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>

            <Button color="primary" block type="submit">
              Login
            </Button>
          </Form>

          {/* Links for Forgot Password and Sign Up */}
          <div className="text-center mt-3">
            <a href="/forgot-password" className="text-primary">
              Forgot Password?
            </a>
            <br />
            <span>
              Don't have an account?{" "}
              <a href="/signup" className="text-primary">
                Sign Up
              </a>
            </span>
          </div>
        </CardBody>
      </Card>
    </Row>
  );
}

export default Login;
