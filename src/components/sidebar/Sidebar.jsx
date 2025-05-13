import React from "react";
//! ---------- IMOPRT CSS ----------
import "./Sidebar.css";
//! ---------- IMOPRT IMAGES ----------
import homeIcon from "../../assets/home.png";
import newsIcon from "../../assets/news.png";
import autoMobileIcon from "../../assets/automobiles.png";
import gameIcon from "../../assets/game_icon.png";
import sportsIcon from "../../assets/sports.png";
import entertainmentIcon from "../../assets/entertainment.png";
import techIcon from "../../assets/tech.png";
import musicIcon from "../../assets/music.png";
import blogsIcon from "../../assets/blogs.png";
import profileImage from "../../assets/profile.png";
import simonImage from "../../assets/simon.png";
import tomImgae from "../../assets/tom.png";
import meganImage from "../../assets/megan.png";
import cameronImage from "../../assets/cameron.png";
import SideLink from "../sidelink/SideLink";
import { useSelector } from "react-redux";
import { setCategory } from "../../features/categorySlicer";
//! ------- START SIDEBAR COMPONENT -------
const Sidebar = () => {
  const sidebar = useSelector((state) => state.sidebar);
  // ! <----- Category Slicer -----> 
  const setCategory = useSelector(setCategory)
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      {/* ----- SHORTCUT LINKS ----- */}
      <div className="shortcut-links">
        <SideLink image={homeIcon} text="Home" />
        <SideLink image={gameIcon} text="Game" />
        <SideLink image={autoMobileIcon} text="Automobiles" />
        <SideLink image={sportsIcon} text="Sports" />
        <SideLink image={entertainmentIcon} text="Entertainment" />
        <SideLink image={techIcon} text="Technology" />
        <SideLink image={musicIcon} text="Music" />
        <SideLink image={blogsIcon} text="Blogs" />
        <SideLink image={newsIcon} text="News" />
        <hr />
      </div>
      {/* ----- SUBSCRIBE LIST -----  */}
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <SideLink image={profileImage} text="plgen" />
        <SideLink image={simonImage} text="Beast" />
        <SideLink image={techIcon} text="Beaber" />
        <SideLink image={meganImage} text="Crafts" />
        <SideLink image={cameronImage} text="Daily" />
      </div>
    </div>
  );
};

export default Sidebar;
