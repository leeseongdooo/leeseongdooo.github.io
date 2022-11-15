import React from "react";
import "../css/Project.scss";
import Test from "../images/TestFace.png";

function TestListDesign() {
  return (
    <div className="ListForm">
      <img src={Test} alt="" />

      <div className="TextArea">
        <h2>미니프로젝트</h2>
        <div className="SmallText">
          <span>
            미니프로젝트 입니다 미니프로젝트 입니다 미니프로젝트 입니다. <br />
            미니프로젝트 입니다 미니프로젝트 입니다 미니프로젝트 입니다. <br />
            미니프로젝트 입니다 미니프로젝트 입니다 미니프로젝트 입니다. <br />
            미니프로젝트 입니다 미니프로젝트 입니다 미니프로젝트 입니다. <br />
            미니프로젝트 입니다 미니프로젝트 입니다 미니프로젝트 입니다. <br />
            미니프로젝트 입니다 미니프로젝트 입니다 미니프로젝트 입니다. <br />
            미니프로젝트 입니다 미니프로젝트 입니다 미니프로젝트 입니다. <br />
          </span>

          <div>
            <button>깃헙으로 고고</button>
            <button>사이트로 고고</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Project() {
  const ProjectInfo = [
    {
      id: 1,
      name: "TODO LIST",
    },
  ];

  return (
    <div className="ProjectBox">
      <div className="ProjectArea">
        <h2 className="CategoryText">Project</h2>
        <div className="ProjectListBox">
          <TestListDesign />
        </div>
      </div>
    </div>
  );
}

export default Project;
