import React, { createContext, useRef, useEffect } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

// const DEV_URL_SOCKET = process.env.REACT_APP_DEV_URL_SOCKET;
const PROD_URL_SOCKET = process.env.REACT_APP_PROD_URL_SOCKET;

const SocketProvider = ({ children }) => {
  const socket = useRef();

  useEffect(() => {
    socket.current = io(`${PROD_URL_SOCKET}`);
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;