import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Validation from "./LoginValidation";

import "./Login.css";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="login-wrapper">
      <div className="overlay"></div>
      <div className="card">
        <div className="card-header text-center">
          <h5>Welcome to Our Library</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email or Username or Phone No.
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email, username, or phone number"
                required
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                required
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Log In
            </button>
          </form>

          <div className="text-center mt-3">
            <Link to="/forgot-password" className="text-muted">
              Forgot Password?
            </Link>
          </div>

          <p className="text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
