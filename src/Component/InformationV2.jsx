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
                    {/* <img src={ExImage} alt="" /> */}
                    <div className="ProfileBox">
                      <div className="MyInformation">
                          <p>이름 : 이성훈</p>
                          <p>나이 : 24</p>
                          <p>영진전문대학(졸업예정)</p>
                      </div>
                    </div>
                    {/* 연락처 */}
                    <div>
                       <a href="mailto:dltjdgns3z@naver.com">dltjdgns3z@naver.com</a>
                       <a href="https://github.com/leeseongdooo" target="_blank">GitHub</a>
                       <a href={Resume} download="테스트">Resume</a>
                    </div>
              </div>
              <p>안녕하세요 프론트엔드 개발자를 목표하는 이성훈입니다.</p>
             
            </div>
            
            {/* <div className="MiddleBox">
              <div className="Education">
                  <p>2022 영진전문대학 졸업예정</p>
              </div>
            </div> */}
            
            <div className="BottomBox">
              
               <div className="SkillBox">
                <div className="Introduce">
                    <h2>HTML / CSS</h2>
                    <p>웹 표준 기반 태그 사용</p>
                    <p>미디어 쿼리를 사용한 반응형 웹 사이트 제작 경험이 있습니다.</p>
                    <p>SCSS 사용 경험이 있습니다.</p>
                </div>

                <div className="Introduce">
                    <h2>JS</h2>
                    <p>JS를 사용한 프로젝트 경험이 있습니다.</p>
                    <p>ES6+ 문법을 사용합니다. </p>
                    <p>DOM 제어</p>
                   
                </div>

                <div className="Introduce">
                    <h2>React</h2>
                    <p>React를 활용한 프로젝트 경험이 있습니다.</p>
                    <p>React Hooks 사용 경험이 있습니다.</p>
                    <p>Context Api 사용 경험이 있습니다.</p>
                    
                </div>

                <div className="Introduce">
                    <h2>Git</h2>
                    <p>Git을 이용하여 협업이 가능합니다.</p>
                
                </div>

               </div>
            </div>
          </div>

        
      </div>
    </div>
  );
}

export default InformationV2;
