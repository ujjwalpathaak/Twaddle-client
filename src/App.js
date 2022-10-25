import React, { useContext } from "react";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

import { AccountContext } from "./context/AccountProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
const App = () => {
  const { account } = useContext(AccountContext);
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_CLIENTID}>
      {account ? <Main /> : <Login />}
    </GoogleOAuthProvider>
  );
};

export default App;
