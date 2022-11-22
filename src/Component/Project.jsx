import React from "react";
import "../css/Project.scss";
import Test from "../images/TestFace.png";

function TestListDesign() {
  return (
    <div className="ListForm">
      <img src={Test} alt="프로젝트 이미지 입니다." />
      <div className="BottomArea">
        <div className="TextArea">
          <h3>TODOLIST</h3>
          <span>개인프로젝트로 만든 TODOLIST입니다.</span>
        </div>

        <div className="ButtonBox">
          <button>Git</button>
          <button>사이트 이동</button>
        </div>
      </div>
    </div>
  );
}

function Project() {
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
