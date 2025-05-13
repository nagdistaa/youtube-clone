import React, { useState } from "react";
//! ---------- IMOPRT COMPONENTS ----------
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Video from "./pages/video/Vidoeo";
//! -------- IMOPRT REAC ROUTER DOM --------
import { Route, Routes } from "react-router-dom";
//! ---------- START APP COMPONENT ----------
const App = () => {
  //! ---------- INITAIL ROUTES ----------
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:categoryId/:videoId" element={<Video />} />
    </Routes>
  );

  return (
    <div>
      <Navbar/>
      {routes}
    </div>
  );
};

export default App;
