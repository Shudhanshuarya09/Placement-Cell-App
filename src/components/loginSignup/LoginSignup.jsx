import React from "react";
import "./LoginSignup.css";

import user_icon from "../assets/";
import email_icon from "../assets/email.png";
import password_icon from "../assets/pass";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text"></div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="" alt="" />
          <input type="text" />
        </div>

        <div className="input">
          <img src="" alt="" />
          <input type="email" />
        </div>

        <div className="input">
          <img src="" alt="" />
          <input type="password" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
