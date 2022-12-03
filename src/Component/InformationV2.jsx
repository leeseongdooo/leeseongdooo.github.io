import React from "react";
import "../css/InfoCSS.scss";
import ExImage from "../images/ExImage.jpeg";
import ProfileImage from "../images/ProfileImage.png";
function InformationV2() {


  return (
    <div className="InformationBox">
      
      <div className="InsideBox">
          <div className="MyInfoBox">

            <h1 >INFO</h1>

            <div className="TextBox">
              
              <div className="Info">
                    <img src={ProfileImage} alt="" />
                    
                    {/* 연락처 */}
                    <div>
                       <a href="">dltjdgns3z@naver.com</a>
                       <a href="">GitHub</a>
                       <a href="">BLOG</a>
                    </div>

              </div>
            
            </div>
            {/* <p>
                Frontend 개발자가 되고싶은 이성훈입니다. <br/>
                우리는 바르셀로나에 기반을 두고 전 세계를 여행하며, 순수 예술을 통해 영감을 받는 자연 사진작가입니다. <br/>
  
                이를 바탕으로 감정적 연결을 촉진하는 사진의 역할을 탐구합니다.
               </p> */}
            
            <h1>SKILL</h1>
            
            <div className="SkillBox">
               <div className="Introduce">
                  <h2>React</h2>
                  <span>
                    리액트 사용경험
                  </span>
               </div>

               
            </div>
           

          </div>

        
      </div>
    </div>
  );
}

export default InformationV2;
