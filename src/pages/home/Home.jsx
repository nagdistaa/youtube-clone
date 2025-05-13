import React, { Fragment, useState } from "react";
//! ---------- IMPORT CSS ----------
import "./Home.css";
//! ---------- IMPORT COMPONENTS ----------
import Sidebar from "../../components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import Feed from "../../components/feed/Feed";
//! -------- START HOME COMPONENT --------

const Home = () => {
  // ! <----- SIDEBAR STORE ----->

  const sidebar = useSelector((state) => state.sidebar);
  return (
    <Fragment>
      <Sidebar />
      <div className={`container ${sidebar ? " " : "large-container"}`}>
        <Feed />
      </div>
    </Fragment>
  );
};

export default Home;
