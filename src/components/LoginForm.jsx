import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../stylesheets/loginform.css";

const LoginForm = () => {

  const handleEmailSubmit = () => {

  }

  const handleChange = () => {

  }

  return (
    <>
      <form onSubmit={handleEmailSubmit} className="">
        <h3>Login Here</h3>
        <label for="username">Username</label>
        <input
          type="email"
          // value={email}
          onChange={handleChange}
          required
          placeholder="Email"
          id="username"
        />
        <button type="submit">Send OTP</button>
      </form>
    </>
  );
};

export default LoginForm;
