import React from "react";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";

import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";
import { useContext } from "react";

import "./Login.css";

const Login = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENTID;

  const { setAccount } = useContext(AccountContext);

  return (
    <div id="login-page">
      <div id="login-page-main">
        <div id="logo-login-section">
          <img
            id="image-login-logo"
            src={require("../../assests/_images/twaddle_logo.png")}
            alt="temp"
          />
        </div>
        <div id="image-login-section">
          <img
            id="image-login-main"
            src={require("../../assests/_images/login-photo.png")}
            alt="temp"
          />
        </div>
        <div id="sign-login-section">
          <GoogleLogin
            clientId={clientId}
            onSuccess={async (res) => {
              // decodes the data gotten in form of JWT Token
              const decoded = jwt_decode(res.credential);
              setAccount(decoded);
              addUser(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
