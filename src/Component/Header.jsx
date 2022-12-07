import React, { useEffect, useState, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import "../css/Header.scss";

function SlideMenu() {
  return (
    <div className="SlideMenuBox">
      <div className="InsideArea">
        <p>Home</p>
        <p>Info</p>
        <p>Project</p>
      </div>
    </div>
  );
}

function Header({ value }) {
  const [MenuBarState, setMenuBarState] = useState(false);

  const CheckedMenu = {
    left: "50%",
  };

  useEffect(() => {
    console.log(MenuBarState);
  }, [MenuBarState]);

  return (
    <div
      className="HeaderBox"
      style={value > 900 ? { backgroundColor: "white", color: "black" } : {}}
    >
      <h2>Portfolio</h2>

      <BiMenu
        className="MenuIcon"
        onClick={() => {
          setMenuBarState(!MenuBarState);
          console.log(MenuBarState)
        }}
      />

      <div
        className="SlideMenuBox"
        style={MenuBarState === true ? CheckedMenu : null}
      >
        <div className="InsideArea">
          <div className="PaddingBox">
            <BiMenu className="MenuIcon" 
              onClick={() => {
                setMenuBarState(!MenuBarState);
              }} />
            <div className="MenuTextBox">
              <p onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>Home</p>
              <p onClick={() => {window.scrollTo({top: 850, behavior: "smooth" })}}>Info</p>
              <p onClick={() => {window.scrollTo({top: 2100, behavior: "smooth" })}}>Project</p>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* PC버전 */}
      <div className="MenuBox">
        <span onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>Home</span>
        <span onClick={() => {window.scrollTo({top: 970, behavior: "smooth" })}}>Info</span>
        <span onClick={() => {window.scrollTo({top: 1950, behavior: "smooth"})}}>Project</span>
      </div>
    </div>
  );
}

export default Header;
