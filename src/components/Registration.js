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

function Registration() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const { email, firstName, lastName, password, confirmPassword } = formData;

    // Basic form validation
    if (!email || !firstName || !lastName || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    console.log("Registration successful with:", formData);
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
            Register
          </CardTitle>
          {error && <Alert color="danger">{error}</Alert>}
          <Form onSubmit={handleRegister}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </FormGroup>

            <Button color="primary" block type="submit">
              Register
            </Button>
          </Form>

          <div className="text-center mt-3">
            Already have an account?{" "}
            <a href="/login" className="text-primary">
              Login
            </a>
          </div>
        </CardBody>
      </Card>
    </Row>
  );
}

export default Registration;
