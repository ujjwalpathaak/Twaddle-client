import { createContext, useState, useRef, useEffect } from "react";
import {io} from "socket.io-client"

export const AccountContext = createContext(null);
const Socket_Url = process.env.REACT_APP_SOCKET_URL
// "ws://localhost:9000"
// "https://twaddle-socket.herokuapp.com/"
const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);
  const [flagMsg, setFlagMsg] = useState(false);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9000")
  }, [])
  
  
  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        person,
        setPerson,
        socket,
        activeUsers,
        setActiveUsers,
        flagMsg,
        setFlagMsg
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
