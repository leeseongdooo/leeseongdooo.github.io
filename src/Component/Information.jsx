import React from "react";
import "../css/Information.scss";

function Information() {
  return (
    <div className="InformationBox">
      <div className="ContentArea">
        <h2 className="CategoryText">INFO</h2>

        <div className="Introduce">
          <div className="TopArea">
            <img src="../img/Face.png" alt="" />
            <h2>
              이이잉 아쌀라 말라이 꿈<br />
              이이잉 아쌀라 말라이 꿈 <br />
              프론트엔드 개발자 <br />
              이성훈 입니다.
            </h2>
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

            <div className="TechnicalStack">
              <span>기술소개</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>SCSS</span>
              <span>React</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
