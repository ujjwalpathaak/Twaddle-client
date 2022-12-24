import React from "react";
import "./Login.css";
import { AccountContext } from "../../context/AccountProvider";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { addUser } from "../../service/api";
import { useContext } from "react";
const Login = () => {
  const { setAccount } = useContext(AccountContext);

  
  return (
    <div id="login-page">
      <div id="login-page-main">
        <div id="logo-login-section">
          <img
            id="image-login-logo"
            src={require("../../assests/_images/twaddle_logo.png")}
            alt=""
          />
        </div>
        <div id="image-login-section">
          <img
            id="image-login-main"
            src={require("../../assests/_images/login-photo.png")}
            alt=""
          />
        </div>
        <div id="sign-login-section">
          <GoogleLogin
            clientId="712553503886-u8r4ap39l0r2j7kp2n3m7j4vp9c9nad1.apps.googleusercontent.com"
            onSuccess={async (res) => {
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
