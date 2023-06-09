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

  useEffect(() => {
    let intervalId;
    if (counter > 0 && isResendDisabled) {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => clearInterval(intervalId);
  }, [counter, isResendDisabled]);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (email !== prevEmail) {
      setIsOtpSent(false);
      setCounter(30);
      setIsResendDisabled(false);
    }
    setPrevEmail(email);
    handleSendOtp();
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();
    if (otp === "1234") {
      console.log("OTP verified");
      setIsOtpSent(false);
      setEmail("");
      setOtp("");
      setCounter(30);
      setIsResendDisabled(false);
      toast.success("OTP verified");
    } else {
      console.log("Invalid OTP");
      toast.error("Invalid OTP");
    }
  };

  const handleSendOtp = () => {
    const mockOtp = Math.floor(1000 + Math.random() * 9000);
    console.log(`OTP sent to ${email}: ${mockOtp}`);

    setIsOtpSent(true);
    setIsResendDisabled(true);

    if (counter === 30 && prevEmail === email) {
      setCounter(prevCounter);
    } else {
      setPrevCounter(counter);
      setCounter(30);
    }

    const intervalId = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 1) {
          clearInterval(intervalId);
          setIsResendDisabled(false);
          return prevCounter - 1;
        } else {
          return prevCounter - 1;
        }
      });
    }, 1000);
  };

  const handleBack = () => {
    setEmail(prevEmail);
    setIsOtpSent(false);
    setIsResendDisabled(true);
    if (prevEmail === email) {
      setCounter(prevCounter);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        bodyClassName="toastBody"
      />
      <div className="background">
        <div className="shape"></div>
        <div class="shape"></div>
      </div>
      <div className="">
        {!isOtpSent ? (
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
        ) : (
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
        )}
      </div>
    </>
  );
};

export default LoginForm;
