import React, { useEffect, useState } from "react";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { AiFillGithub } from "react-icons/ai"
import Header from "./Header";
import "../css/MainPage.scss";

function MainPage() {

  const [scrollY, setScrollY] = useState(0);

  const listener = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
      console.log(scrollY)
    }
  });

  

  return (
    <>
     <Header value={scrollY}/>
      <div className="MainPageBox">
        <div className="TextBox">
          <span>Seong Hoon PORTFOLIO</span>
        </div>

        {/* GIt / Velog 사이트로 이동할 수 있는 버튼 div */}
     
        <div className="IconBox">
          <TfiArrowCircleDown className="Icon" onClick={()=>{window.scrollTo({top: 970, behavior: "smooth" });}} />
        </div>
        
        <button className="Beha" style={scrollY > 100 ? {visibility: "visible", width: "50px", height: "50px"} : {visibility: "hidden", width: "0px", height: "0px"}}onClick={() => {window.scrollTo({top:0,  behavior: "smooth" })}}>UP</button>
      </div>
    </>
  );
}

export default MainPage;
