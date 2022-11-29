import React from "react";
import "../css/SkillDesign.scss";

export default function SkillDesign({ name }) {
  const CSSName = name + " Box";

  return (
    <div className={CSSName}>
      <span>{name}</span>
    </div>
  );
}
