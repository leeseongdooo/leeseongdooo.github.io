import React, { useEffect, useState } from "react";
import "../css/Header.scss";

function Header({ value }) {
  return (
    <div
      className="HeaderBox"
      style={value > 900 ? { backgroundColor: "white", color: "black" } : {}}
    >
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
