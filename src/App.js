import React, { useContext } from "react";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

import { AccountContext } from "./context/AccountProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
const App = () => {
  const { account } = useContext(AccountContext);
  return (
    <GoogleOAuthProvider clientId="712553503886-u8r4ap39l0r2j7kp2n3m7j4vp9c9nad1.apps.googleusercontent.com">
      {account ? <Main /> : <Login />}
    </GoogleOAuthProvider>
  );
};

export default App;
