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

    // Perform login logic here (e.g., API call)
    console.log("Login successful with:", { email, password });
  };

  return (
    <div className="d-flex justify-content-center align-items-center top-5">
      <Card style={{ width: "400px" }}>
        <CardBody>
          <CardTitle tag="h4" className="text-center mb-4">
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
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
