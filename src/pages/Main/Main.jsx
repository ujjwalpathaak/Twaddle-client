import React from "react";

import Chats from "../../components/Chats/Chats";
import Header from "../../components/Header/Header";
import RightSide from "../../components/RightSide/RightSide";
import ActiveUsers from "../../components/Search/ActiveUsers";
import Search from "../../components/Search/Search";

import "./Main.css";

const Main = () => {
  return (
    <div id="background">
      <div id="app">
        <div id="twaddle-header1">
          <div id="twaddle-header-logo">
            <img src={require("../../assests/_images/twaddle_logo.png")} />
          </div>
          <div id="twaddle-header">
            <Header />
          </div>
        </div>
        <div id="twaddle-main">
          <div id="twaddle-righside">
            <Search />
            <ActiveUsers />
            <Chats />
          </div>
          <div id="twaddle-leftside">
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
