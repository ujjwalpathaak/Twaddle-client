import React, { useContext } from "react";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import { AccountContext } from "./context/AccountProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENTID;
  const { account } = useContext(AccountContext);
  return (
    <GoogleOAuthProvider clientId={clientId}>
      {account ? <Main /> : <Login />}
    </GoogleOAuthProvider>
  );
};

export default App;
