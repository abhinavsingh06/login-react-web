import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../stylesheets/loginform.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [counter, setCounter] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [prevEmail, setPrevEmail] = useState("");
  const [prevCounter, setPrevCounter] = useState(30);

  const handleEmailSubmit = () => {};

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = () => {};

  const handleOtpSubmit = () => {};

  const handleBack = () => {};

  const handleSendOtp = () => {};

  return (
    <>
      <form onSubmit={handleEmailSubmit} className="">
        <h3>Login Here</h3>
        <label for="username">Username</label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          required
          placeholder="Email"
          id="username"
        />
        <button type="submit">Send OTP</button>
      </form>

      <form onSubmit={handleOtpSubmit} className="">
        <h3>Login Here</h3>
        <label for="otp">OTP:</label>
        <input
          type="password"
          value={otp}
          onChange={handleOtpChange}
          placeholder="Enter OTP"
          id="otp"
        />
        <div>
          <div className="btn-wrapper">
            <button type="submit" className="btn">
              Submit
            </button>
            <button type="button" onClick={handleBack} className="btn">
              Back
            </button>
          </div>
          <button
            type="button"
            onClick={handleSendOtp}
            disabled={isResendDisabled}
          >
            {isResendDisabled ? `Resend OTP in ${counter}s` : "Resend OTP"}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
