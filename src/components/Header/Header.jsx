import React, { useContext } from "react";

import { AccountContext } from "../../context/AccountProvider";

import "./Header.css";

const Header = () => {
  const { account } = useContext(AccountContext);

  return (
    <div id="header">
      <img
        id="profile-photo"
        src={account ? account.picture : ""}
        alt="profile-pic"
      />
      <p>{account ? account.name : ""}</p>
    </div>
  );
};

export default Header;