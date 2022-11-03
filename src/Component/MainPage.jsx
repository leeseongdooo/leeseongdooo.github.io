import React from "react";
import { TfiArrowCircleDown } from "react-icons/tfi";
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
        <div className="Button">
          <h4>My Git</h4>
        </div>

        <div className="Button">
          <h4>My Velog</h4>
        </div>
      </div>

      <div className="IconBox">
        <TfiArrowCircleDown className="Icon" />
      </div>
    </div>
  );
}

export default MainPage;
