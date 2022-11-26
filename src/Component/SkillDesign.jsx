import React from "react";
import "../css/SkillDesign.scss";

export default function SkillDesign({ name }) {
  return (
    <div className={name}>
      <span>{name}</span>
    </div>
  );
}
