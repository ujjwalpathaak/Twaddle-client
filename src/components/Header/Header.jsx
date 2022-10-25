import React from "react";
import "./Header.css";

import { useContext, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
const Header = () => {
  const [show, setShow] = useState(false);
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
