import React, { useState } from "react";
import "../css/Information.scss";
import ProfileImage from "../images/ProfileImage.png";
// 아이콘 이미지
import CssIcon from "../images/CssIcon.png";
import HtmlIcon from "../images/HtmlIcon.png";
import JsIcon from "../images/JsIcon.png";
import ReactIcon from "../images/ReactIcon.png";
import SassIcon from "../images/SassIcon.png";
import { useEffect } from "react";

function SkillListForm({
  id,
  name,
  img,
  ChangeBackground
}) {
  
  const [BgColor, setBgColor] = useState("white");

  return (
    <div
      className="TechnicalListBox"
      onClick={() => {
        ChangeBackground(id, setBgColor);
        console.log(BgColor);
      }} 
      style={{backgroundColor: BgColor}}
    >
      <img src={img} alt="HTML 아이콘" className="SkillImage"></img>
      <span>{name}</span>
    </div>
  );
}

function Information() {
  const [MySkillInformation, setMySkillInformation] = useState([
    {
      id: 1,
      name: "HTML",
      img: HtmlIcon,
      BackColor: "white",
      click: false,
    },
    {
      id: 2,
      name: "CSS",
      img: CssIcon,
      BackColor: "white",
      click: false,
    },
    {
      id: 3,
      name: "JS",
      img: JsIcon,
      BackColor: "white",
      click: false,
    },
    {
      id: 4,
      name: "React",
      img: ReactIcon,
      BackColor: "white",
      click: false,
    },
    {
      id: 5,
      name: "SCSS",
      img: SassIcon,
      BackColor: "white",
      click: false,
    },
  ]);

  const ChangeBackground = (id, setBg) => {
    MySkillInformation.map((Info) => {
      if(Info.id === id)
      {
        if(Info.click === false)
        {
          Info.click = true;
          Info.BackColor = "royalblue";
          setBg("royalblue");
          console.log(MySkillInformation);
        }
      } else {
        setBg("white")
      }
    })
  }

  return (
    <div className="InformationBox">
      <div className="ContentArea">
        <h2 className="CategoryText">INFO</h2>

        <div className="MiddleBox">
          <div className="Introduce">
            <div className="TopArea">
              <img src={ProfileImage} alt="" />

              <div className="MyInformation">
                <div>
                  <span className="Info">이름: </span>
                  <span>이성훈</span>
                </div>

                <div>
                  <span className="Info">연락처: </span>
                  <span>010-6436-4239</span>
                </div>

                <div>
                  <span className="Info">이메일: </span>
                  <span>dltjdgns3z@naver.com</span>
                </div>

                <div>
                  <span className="Info">Blog: </span>
                  <a href="https://velog.io/@dltjdgns3z" target="_blank">
                    https://velog.io/@dltjdgns3z
                  </a>
                </div>

                <div>
                  <span className="Info">GitHub: </span>
                  <a href="https://github.com/leeseongdooo" target="_blank">
                    https://github.com/leeseongdooo
                  </a>
                </div>
              </div>
            </div>

            <div className="BottomArea">
              <div style={{ width: "100%", display: "flex" }}>
                <div className="EduLevel">
                  <span>학력사항</span>
                  <ul>
                    <li>
                      <span className="SchoolName">순천전자고등학교</span>
                      <span className="Years"> 2015-2017</span>
                    </li>
                    <li>
                      <span className="SchoolName">영진전문대학</span>
                      <span className="Years">2018-2023</span>
                    </li>
                  </ul>
                </div>

                <div className="AwardList">
                  <span>수상경력</span>

                  <li>스마트게임콘텐츠 경진대회 대상</li>
                </div>
              </div>

              <h4>사용해 본 기술</h4>
              <div className="TechnicalStack">
                {MySkillInformation.map((Info) => (
                  <SkillListForm
                    key={Info.id}
                    id={Info.id}
                    name={Info.name}
                    img={Info.img}
                    ChangeBackground={ChangeBackground}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="competencies">
            <h2 className="PointText">핵심 역량</h2>
            <h4>Skill 아이콘을 눌러서 확인할 수 있습니다.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
