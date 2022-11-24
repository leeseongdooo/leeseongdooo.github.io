import React from "react";
import "../css/Bottom.scss";
import { AiFillMail, AiOutlineGithub } from "react-icons/ai";

function Bottom() {
  return (
    <div className="BottomComponentArea">
      <div className="ListArea">
        <h2>LINK</h2>

        <div className="IconBox">
          <a href="mailto:dltjdgns3z@naver.com">
            <AiFillMail className="Icons" />
          </a>

          <a href="https://github.com/leeseongdooo" target="_blank">
            <AiOutlineGithub className="Icons" />
          </a>

          <a href="https://velog.io/@dltjdgns3z" target="_blank">
            <span className="Velog">Velog</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
