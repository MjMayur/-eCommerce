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
  Col,
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
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { email, firstName, lastName, password, confirmPassword } = formData;

    // Basic form validation
    if (!email || !firstName || !lastName || !password || !confirmPassword) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setError("");
      console.log("Registration successful with:", formData);
      setIsLoading(false);
    }, 1500);
  };

  // SVG Icons as React components
  const EmailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6c757d"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const UserIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6c757d"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const PasswordIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6c757d"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );

  const EyeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6c757d"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );

  const EyeOffIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6c757d"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  );

  const RegisterIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </svg>
  );

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 p-3"
      style={{
        background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
      }}
    >
      <Row className="w-100 justify-content-center">
        <Col xl={5} lg={6} md={8} sm={10} xs={12}>
          <Card
            className="shadow-lg rounded-lg overflow-hidden border-0"
            style={{ borderRadius: "20px" }}
          >
            <div
              className="py-4 text-center"
              style={{
                background:
                  "linear-gradient(to right, #0cebeb 0%, #20e3b2 100%)",
              }}
            >
              <CardTitle tag="h2" className="text-white mb-0 fw-bold">
                Create Account
              </CardTitle>
              <p className="text-white-50 mb-0">Join our community today</p>
            </div>

            <CardBody className="p-4">
              {error && (
                <Alert color="danger" className="rounded-pill">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleRegister}>
                <Row>
                  <Col md={6}>
                    <FormGroup className="mb-3">
                      <Label
                        for="firstName"
                        className="fw-medium text-secondary"
                      >
                        First Name
                      </Label>
                      <div className="position-relative">
                        <div className="position-absolute top-50 start-0 translate-middle-y ms-3">
                          <UserIcon />
                        </div>
                        <Input
                          type="text"
                          id="firstName"
                          placeholder="Enter first name"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="ps-5 py-2 rounded-pill border-0 shadow-sm"
                          style={{ backgroundColor: "#f8f9fa" }}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="mb-3">
                      <Label
                        for="lastName"
                        className="fw-medium text-secondary"
                      >
                        Last Name
                      </Label>
                      <div className="position-relative">
                        <div className="position-absolute top-50 start-0 translate-middle-y ms-3">
                          <UserIcon />
                        </div>
                        <Input
                          type="text"
                          id="lastName"
                          placeholder="Enter last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="ps-5 py-2 rounded-pill border-0 shadow-sm"
                          style={{ backgroundColor: "#f8f9fa" }}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>

                <FormGroup className="mb-3">
                  <Label for="email" className="fw-medium text-secondary">
                    Email
                  </Label>
                  <div className="position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle-y ms-3">
                      <EmailIcon />
                    </div>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="ps-5 py-2 rounded-pill border-0 shadow-sm"
                      style={{ backgroundColor: "#f8f9fa" }}
                    />
                  </div>
                </FormGroup>

                <FormGroup className="mb-3">
                  <Label for="password" className="fw-medium text-secondary">
                    Password
                  </Label>
                  <div className="position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle-y ms-3">
                      <PasswordIcon />
                    </div>
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                      className="ps-5 py-2 rounded-pill border-0 shadow-sm"
                      style={{ backgroundColor: "#f8f9fa" }}
                    />
                    <div
                      className="position-absolute top-50 end-0 translate-middle-y me-3"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </div>
                  </div>
                </FormGroup>

                <FormGroup className="mb-4">
                  <Label
                    for="confirmPassword"
                    className="fw-medium text-secondary"
                  >
                    Confirm Password
                  </Label>
                  <div className="position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle-y ms-3">
                      <PasswordIcon />
                    </div>
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="ps-5 py-2 rounded-pill border-0 shadow-sm"
                      style={{ backgroundColor: "#f8f9fa" }}
                    />
                    <div
                      className="position-absolute top-50 end-0 translate-middle-y me-3"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </div>
                  </div>
                </FormGroup>

                <Button
                  color="success"
                  className="w-100 rounded-pill py-2 fw-bold shadow"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div
                      className="spinner-border spinner-border-sm"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <span className="d-flex align-items-center justify-content-center">
                      <RegisterIcon />
                      <span className="ms-2">Create Account</span>
                    </span>
                  )}
                </Button>
              </Form>

              <div className="text-center mt-4">
                <p className="text-secondary mb-0">
                  Already have an account?{" "}
                  <a href="/login" className="text-success fw-medium">
                    Sign In
                  </a>
                </p>
              </div>

              <div className="text-center mt-4">
                <p className="text-muted small mb-0">
                  By registering, you agree to our{" "}
                  <a href="#" className="text-success">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-success">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Registration;
