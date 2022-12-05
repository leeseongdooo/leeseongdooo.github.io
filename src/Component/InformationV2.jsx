import React from "react";
import "../css/InfoCSS.scss";
import ExImage from "../images/TestFace.png";
import ProfileImage from "../images/ProfileImage.png";
import Resume from "../Resume.pdf";
function InformationV2() {


  return (
    <div className="InformationBox">
      
      <div className="InsideBox">
          <div className="MyInfoBox">
            <h1>INFO</h1>

            <div className="TextBox">
              <div className="Info">
                    <img src={ExImage} alt="" />
                    {/* 연락처 */}
                    <div>
                       <a href="mailto:dltjdgns3z@naver.com">dltjdgns3z@naver.com</a>
                       <a href="https://github.com/leeseongdooo" target="_blank">GitHub</a>
                       <a href={Resume} download="테스트">Resume</a>
                    </div>
              </div>
              <p>안녕하세요 프론트엔드 개발자를 목표하는 이성훈입니다.</p>
             
            </div>
            
            
            <div className="BottomBox">
              
               <div className="SkillBox">
                <div className="Introduce">
                    <h2>HTML</h2>
                    <p>웹 표준 기반 태그</p>
                    <p></p>
                </div>

                <div className="Introduce">
                    <h2>CSS</h2>
                    <p>반응형 웹 사이트 제작 경험이 있습니다.</p>
                    <p>SCSS 사용 경험이 있습니다.</p>
                </div>

                <div className="Introduce">
                    <h2>JS</h2>
                    <p>ES6+ 문법을 사용 </p>
                    
                </div>

                <div className="Introduce">
                    <h2>React</h2>
                    <p>React Hooks 사용</p>
                    <p>Context API 사용</p>
                </div>

               </div>
            </div>
          </div>

        
      </div>
    </div>
  );
}

export default InformationV2;
