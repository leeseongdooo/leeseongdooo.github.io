import React, {useState} from "react";
import "../css/Project.scss";
import Test from "../images/TestFace.png";
import {DiReact} from "react-icons/di"

function TestListDesign({name, Description, BackColor}) {
  return (
    <div className="ListForm" style={{backgroundColor: BackColor}}>
      <img src={Test} alt="" />
      <div className="BottomArea">
          <div className="TextArea">
            <h2>{name}</h2>
            <br/>
            <span>{Description}</span>
          </div>
      </div>
    </div>
  );
}


function Project() {

  const [ProjectList, setProjectList] = useState([
    {
      id: 1,
      FrontImg: "",
      BackColor: "royalblue",
      name: "투두리스트",
      Description: "개인프로젝트로 참여한 투두리스트 입니다."
    },
    {
      id: 2,
      FrontImg: "",
      BackColor: "#FFBD51",
      name: "Threego",
      Description: "3학년 팀프로젝트로 개발한 여행 사이트 입니다."
    }, 
    {
      id: 3,
      FrontImg: "",
      BackColor: "#000C1ECC",
      name: "MODIVA",
      Description: "2학년 팀프로젝트로 개발한 OTT매칭 사이트 입니다."
    },
    {
      id: 4,
      FrontImg: "",
      BackColor: "#191F28",
      name: "NoName",
      Description: "아직 개발중인 프로젝트 입니다."
    }
  ])


  return (
    <div className="ProjectBox">
      <div className="ProjectArea">
        <h2 className="CategoryText">Project</h2>
        <div className="ProjectListBox">
          {ProjectList.map((Info) => (
            <TestListDesign key={Info.id} name={Info.name} Description={Info.Description} BackColor={Info.BackColor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
