import React from "react";
import "../css/Project.scss";
import Test from "../images/TestFace.png";

// Skill Icon
import CssIcon from "../images/CssIcon.png";
import HtmlIcon from "../images/HtmlIcon.png";
import JsIcon from "../images/JsIcon.png";
import ReactIcon from "../images/ReactIcon.png";
import SassIcon from "../images/SassIcon.png";

// ProjectImg
import TodoImg from "../images/TodoList.png";
import TravelImg from "../images/travel.png";
import MovieImg from "../images/popcorn.png";

// SKillDesign
import SkillDesign from "./SkillDesign";

function TestListDesign({
  ProjectImg,
  ProjectName,
  Description,
  GitLink,
  PageLink,
  SkillName,
}) {
  const SkillBox = SkillName;

  return (
    <div className="ListForm">
      <img
        src={ProjectImg}
        alt="프로젝트 이미지 입니다."
        className="ProjectImg"
      />
      <div className="BottomArea">
        <div className="TextArea">
          <h3>{ProjectName}</h3>
          <span>{Description}</span>
        </div>

        <div className="SkillBox">
          {SkillBox.map((Info, index) => (
            <SkillDesign key={index} name={Info} />
          ))}
        </div>

        <div className="LinkButtonBox">
          <a href={GitLink} target="_blank">
            <button>GitHub로 이동</button>
          </a>

          <a href="">
            <button>Page로 이동</button>
          </a>
        </div>
      </div>
    </div>
  );
}

function Project() {
  const ProjectList = [
    {
      id: 1,
      ProjectImg: TodoImg,
      SkillName: ["React", "Sass", "Git"],
      ProjectName: "TODOLIST",
      Description: "개인프로젝트로 만든 TODOLIST입니다.",
      Team: false,
      GitLink: "https://github.com/leeseongdooo/TodoPractice",
      PageLink: "준비중",
    },
    {
      id: 2,
      ProjectImg: TravelImg,
      SkillName: ["HTML", "CSS", "JS", "Git"],
      ProjectName: "MODIVA",
      Description: "팀프로젝트로 만든 OTT매칭 서비스 MODIVA 입니다.",
      Team: true,
      GitLink: "https://github.com/leeseongdooo/2-2-miniproject",
      PageLink: "준비중",
    },
    {
      id: 3,
      ProjectImg: MovieImg,
      SkillName: ["React", "Sass", "Git"],
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
              ProjectImg={Info.ProjectImg}
              ProjectName={Info.ProjectName}
              Description={Info.Description}
              GitLink={Info.GitLink}
              SkillName={Info.SkillName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
