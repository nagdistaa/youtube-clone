import React from "react";
//! ---------- IMPORT CSS ---------
import "./Navbar.css";
//! ---------- IMPORT ICONS ---------
import menuIcon from "../../assets/menu.png";
import searchIcon from "../../assets/search.png";
import logo from "../../assets/logo.png";
import uploadIcon from "../../assets/upload.png";
import moreIcon from "../../assets/more.png";
import notificationIcon from "../../assets/notification.png";
import profileIcon from "../../assets/profile.png";
import { useDispatch } from "react-redux";
import { setSidebar } from "../../features/sidebarSlice";
import { useNavigate } from "react-router-dom";
//! ------- START NAVBAR COMPONENT -------
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <nav className="flex-div">
      {/*------ NAV LEFT ------*/}
      <div className="nav-left flex-div">
        <img
          src={menuIcon}
          className="menu-icon"
          onClick={() => {
            dispatch(setSidebar());
          }}
          alt="menu icon"
        />
        <img src={logo} className="logo" alt="logo icon" onClick={()=>navigate('/')}/>
      </div>
      {/* ------ NAV MIDDLE ------ */}

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search ..."
          />
          <img src={searchIcon} className="search-icon" alt="search icon" />
        </div>
      </div>
      {/* ------ NAV RIGHT ------ */}
      <div className="nav-right flex-div">
        <img src={uploadIcon} alt="uploa icon" />
        <img src={moreIcon} alt="more icon" />
        <img src={notificationIcon} alt="notification icon" />
        <img src={profileIcon} className="user-icon" alt="profile icon" />
      </div>
    </nav>
  );
};

export default Navbar;
