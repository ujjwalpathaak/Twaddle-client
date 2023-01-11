import React, { createContext, useState } from "react";

export const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  // account of current user
  const [account, setAccount] = useState();
  // account of user talking to
  const [person, setPerson] = useState(null);
  // active users
  const [activeUsers, setActiveUsers] = useState([]);
  // flag for new message
  const [flagMsg, setFlagMsg] = useState(false);

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        person,
        setPerson,
        activeUsers,
        setActiveUsers,
        flagMsg,
        setFlagMsg,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;