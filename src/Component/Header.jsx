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
  const HeaderInfo = useRef();
  const [HeaderWidth, setHeaderWidth] = useState();

  useEffect(() => {
    setHeaderWidth(HeaderInfo.current.clientWidth);
    console.log(HeaderWidth);
  }, []);

  return (
    <div
      className="HeaderBox"
      style={value > 900 ? { backgroundColor: "white", color: "black" } : {}}
      ref={HeaderInfo}
    >
      <h2>LeeS Page</h2>

      {HeaderWidth <= 768 ? <BiMenu className="MenuIcon" /> : null}
      {HeaderWidth <= 768 ? (
        <SlideMenu />
      ) : (
        <div className="MenuBox">
          <span>Home</span>
          <span>Info</span>
          <span>Project</span>
        </div>
      )}
    </div>
  );
}

export default Header;
