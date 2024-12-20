import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Validation from "./RegisterValidation";
import axios from "axios"; // Import axios
import "./Register.css";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    contact: "",
    batch: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate(); // For redirecting after successful registration

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    // Proceed only if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:5173/register",
          values
        );
        if (response.data.success) {
          alert("Registration successful!");
          navigate("/login"); // Redirect to login page
        } else {
          alert("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="register-wrapper">
      <div className="overlay"></div>
      <div className="card">
        <div className="card-header text-center">
          <h5>Registration Form</h5>
          <p className="mb-0">Join our library to claim this offer!</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter your full name"
                required
                onChange={handleInput}
              />
              {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                required
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="contact" className="form-label">
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                className="form-control"
                placeholder="Enter your contact number"
                required
                onChange={handleInput}
              />
              {errors.contact && (
                <span className="text-danger">{errors.contact}</span>
              )}
              <small>Format: 10 digits only</small>
            </div>

            <div className="mb-3">
              <label htmlFor="batch" className="form-label">
                Batch Details (Optional)
              </label>
              <select
                id="batch"
                name="batch"
                className="form-control"
                onChange={handleInput}
              >
                <option value="" disabled>
                  Select your batch
                </option>
                <option value="morning-06-09">Morning 06-09 AM</option>
                <option value="morning-09-12">Morning 09-12 AM</option>
                <option value="afternoon-12-03">Afternoon 12-03 PM</option>
                <option value="evening-05-08">Evening 05-08 PM</option>
                <option value="weekend-10-01">Weekend 10-01 PM</option>
              </select>
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
                placeholder="Create a password"
                required
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm your password"
                required
                onChange={handleInput}
              />
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                id="terms"
                name="termsAccepted"
                className="form-check-input"
                required
              />
              <label htmlFor="terms" className="form-check-label">
                I agree to the{" "}
                <Link
                  to="/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms and Conditions
                </Link>
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit Form
            </button>

            <p className="text-center mt-3">
              Already registered?{" "}
              <Link to="/login" className="text-primary">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
