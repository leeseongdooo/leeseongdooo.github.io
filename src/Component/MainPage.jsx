import React from "react";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { AiFillGithub } from "react-icons/ai"
import "../css/MainPage.scss";

function MainPage() {
  return (
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
        <TfiArrowCircleDown className="Icon" />
      </div>
    </div>
  );
}

export default MainPage;
