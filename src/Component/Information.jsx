import React from "react";
import "../css/Information.scss";

function SkillListForm({ name, img, BackColor }) {
  return (
    <div className="TechnicalListBox" style={{ backgroundColor: BackColor }}>
      <img src={img} alt="HTML 아이콘" className="SkillImage"></img>
      <span className="SkillText">{name}</span>
    </div>
  );
}

function Information() {
  const MySkillInformation = [
    {
      id: 1,
      name: "HTML",
      img: "",
      BackColor: "",
    },
    {
      id: 2,
      name: "CSS",
      img: "",
      BackColor: "royalblue",
    },
    {
      id: 3,
      name: "JS",
      img: "",
      BackColor: "",
    },
    {
      id: 4,
      name: "React",
      img: "",
      BackColor: "",
    },
    {
      id: 5,
      name: "SCSS",
      img: "",
      BackColor: "",
    },
  ];

  console.log(MySkillInformation);

  return (
    <div className="InformationBox">
      <div className="ContentArea">
        <h2 className="CategoryText">INFO</h2>
        <h2>이성훈</h2>
        <div className="Introduce">
          <div className="TopArea">
            <img
              src="../images/Flower.jpeg"
              alt=""
              onerror="this.src='../img/Flower.jpeg'"
            />
            <div className="MyInformation">
              <h2>생년월일: 1999.08.19</h2>
              <h2>연락처: 010-6436-4239 </h2>
              <h2>이메일: dltjdgns3z@naver.com</h2>
              <h2>Blog: https://velog.io/@dltjdgns3z</h2>
              <h2>GitHub: https://github.com/leeseongdooo</h2>
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

            <h4>Skills</h4>
            <div className="TechnicalStack">
              {MySkillInformation.map((Info) => (
                <SkillListForm
                  name={Info.name}
                  img={Info.img}
                  BackColor={Info.BackColor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
