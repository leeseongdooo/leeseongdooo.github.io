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
          <span>Seong Hoon</span>
          <span>PORTFOLIO</span>
        </div>

        {/* GIt / Velog 사이트로 이동할 수 있는 버튼 div */}
        <div className="InfoButtonBox">
          <a href="https://github.com/leeseongdooo/Portfolio" className="Button" target="_blank">
            <AiFillGithub className="Icons" />
            <h4>Git</h4>
          </a>

          <a href="https://velog.io/@dltjdgns3z" className="Button" target="_blank">
            <h4>Velog</h4>
          </a>
        </div>

        <div className="IconBox">
          <TfiArrowCircleDown className="Icon" onClick={()=>{window.scrollTo({top: 970, behavior: "smooth" });}} />
        </div>
      </div>
    </>
  );
}

export default MainPage;
