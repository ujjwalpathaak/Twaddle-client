import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AccountProvider from "./context/AccountProvider";
import SocketProvider from "./context/SocketProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AccountProvider>
      <SocketProvider>
        <App />
      </SocketProvider>
    </AccountProvider>
  </React.StrictMode>
);
