import React from "react";
import "../css/InfoCSS.scss";
import ExImage from "../images/ExImage.jpeg";
import ProfileImage from "../images/ProfileImage.png";
function InformationV2() {


  return (
    <div className="InformationBox">
      <div className="InsideBox">
          <div className="TextArea">
            <h2>Information</h2>
            <p>Elasdnfjkwenqjrnjqwerqwjkern</p>
          </div>

          <div className="MyInfoBox">
            <img src={ExImage} alt="임시이미지입니다." />
          </div>

          <div className="ShapeBox">
              <div className="ShapeForm">
                  <h2>HTML</h2>
              </div>

              <div className="ShapeForm">
                  <h2>HTML</h2>
              </div>

              <div className="ShapeForm">
                  <h2>HTML</h2>
              </div>

              <div className="ShapeForm">
                  <h2>HTML</h2>
              </div>
          </div>
      </div>
    </div>
  );
}

export default InformationV2;
