import React from "react";
import "../css/Bottom.scss";

function Bottom() {
  return (
    <div className="BottomArea">
      <div className="ListArea">
        <div className="ListForm">
          <h2>나의 깃헙으로</h2>

          <div className="SpanArea">
            <span>
              합리적 수수료 <br /> 간편한 결제 경험으로 비용은 <br /> 절감하고
              매출은 늘리세요.
            </span>
          </div>

          <div>
            <button>깃헙으로 이동하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
