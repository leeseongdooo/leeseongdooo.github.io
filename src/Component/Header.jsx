import React, { useEffect } from "react";
import "../css/Header.scss";

function Header() {
  const ScrollValue = window.scrollY;

  return (
    <div className="HeaderBox">
      <h2>LeeS Page</h2>

      <div className="MenuBox">
        <span>Home</span>
        <span>Info</span>
        <span>Project</span>
      </div>
    </div>
  );
}

export default Header;
