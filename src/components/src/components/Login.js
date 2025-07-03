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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic form validation
    if (!email || !password) {
      setError("Both fields are required.");
      setIsLoading(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setError("");
      console.log("Login successful with:", { email, password });
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

  const LoginIcon = () => (
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
      <polyline points="10 17 15 12 10 7"></polyline>
      <line x1="15" y1="12" x2="3" y2="12"></line>
    </svg>
  );

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 p-3"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Row className="w-100 justify-content-center">
        <Col xl={4} lg={5} md={6} sm={8} xs={12}>
          <Card
            className="shadow-lg rounded-lg overflow-hidden border-0"
            style={{ borderRadius: "20px" }}
          >
            <div
              className="py-4 text-center"
              style={{
                background:
                  "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
              }}
            >
              <CardTitle tag="h2" className="text-white mb-0 fw-bold">
                Welcome Back
              </CardTitle>
              <p className="text-white-50 mb-0">Sign in to continue</p>
            </div>

            <CardBody className="p-4">
              {error && (
                <Alert color="danger" className="rounded-pill">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleLogin}>
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="ps-5 py-2 rounded-pill border-0 shadow-sm"
                      style={{ backgroundColor: "#f8f9fa" }}
                    />
                  </div>
                </FormGroup>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <Input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="form-check-input"
                    />
                    <Label
                      for="remember"
                      className="form-check-label text-secondary small"
                    >
                      Remember me
                    </Label>
                  </div>
                  <a href="/forgot-password" className="text-primary small">
                    Forgot Password?
                  </a>
                </div>

                <Button
                  color="primary"
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
                      <LoginIcon />
                      <span className="ms-2">Login</span>
                    </span>
                  )}
                </Button>
              </Form>

              <div className="text-center my-4 position-relative">
                <hr className="bg-secondary" />
                <span
                  className="position-absolute bg-white px-3"
                  style={{
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <small className="text-muted">Or continue with</small>
                </span>
              </div>

              <div className="d-flex justify-content-center gap-3 mb-4">
                <Button
                  outline
                  color="danger"
                  className="rounded-circle p-2 d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                </Button>
                <Button
                  outline
                  color="primary"
                  className="rounded-circle p-2 d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </Button>
                <Button
                  outline
                  color="dark"
                  className="rounded-circle p-2 d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                  </svg>
                </Button>
              </div>

              <div className="text-center mt-4">
                <p className="text-secondary mb-0">
                  Don't have an account?{" "}
                  <a href="/signup" className="text-primary fw-medium">
                    Sign Up
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

export default Login;
