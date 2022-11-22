import React from "react";
import "../css/Project.scss";
import Test from "../images/TestFace.png";

import CssIcon from "../images/CssIcon.png";
import HtmlIcon from "../images/HtmlIcon.png";
import JsIcon from "../images/JsIcon.png";
import ReactIcon from "../images/ReactIcon.png";
import SassIcon from "../images/SassIcon.png";

function TestListDesign({ ProjectName, Description, GitLink, PageLink }) {
  return (
    <div className="ListForm">
      <img src={Test} alt="프로젝트 이미지 입니다." className="ProjectImg" />
      <div className="BottomArea">
        <div className="TextArea">
          <h3>{ProjectName}</h3>
          <span>{Description}</span>
        </div>

        {/* <div className="ButtonBox">
          <a href={GitLink} target="_blank">
            <button>GitHub</button>
          </a>

          <a href={PageLink} target="_blank">
            <button>사이트로 GO</button>
          </a>
        </div> */}

        <div className="SkillBox">
          <div className="Box">
            <img src={ReactIcon} alt="리액트아이콘" />
            <span>React</span>
          </div>

          <div className="Box">
            <img src={ReactIcon} alt="리액트아이콘" />
            <span>React</span>
          </div>

          <div className="Box">
            <img src={ReactIcon} alt="리액트아이콘" />
            <span>React</span>
          </div>

          <div className="Box">
            <img src={ReactIcon} alt="리액트아이콘" />
            <span>React</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Project() {
  const ProjectList = [
    {
      id: 1,
      ProjectImg: "",
      ProjectName: "TODOLIST",
      Description: "개인프로젝트로 만든 TODOLIST입니다.",
      Team: false,
      GitLink: "https://github.com/leeseongdooo/TodoPractice",
      PageLink: "준비중",
    },
    {
      id: 2,
      ProjectImg: "",
      ProjectName: "MODIVA",
      Description: "팀프로젝트로 만든 OTT매칭 서비스 MODIVA 입니다.",
      Team: true,
      GitLink: "https://github.com/leeseongdooo/2-2-miniproject",
      PageLink: "준비중",
    },
    {
      id: 3,
      ProjectImg: "",
      ProjectName: "ThreeGo",
      Description: "팀프로젝트로 만든 여행 사이트 ThreeGo 입니다.",
      Team: true,
      GitLink: "https://github.com/leeseongdooo/threego-FE",
      PageLink: "준비중",
    },
  ];

  return (
    <div className="ProjectBox">
      <div className="ProjectArea">
        <h2 className="CategoryText">Project</h2>
        <div className="ProjectListBox">
          {ProjectList.map((Info) => (
            <TestListDesign
              key={Info.id}
              ProjectName={Info.ProjectName}
              Description={Info.Description}
              GitLink={Info.GitLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
