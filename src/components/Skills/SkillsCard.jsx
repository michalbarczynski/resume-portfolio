import React from 'react';
import "./SkillsCard.scss";

const SkillsCard = (title, iconUrl, isActive, onClick) => {
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`}  onClick = {() => onClick()}>
      <div>
        <img src={iconUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  )
}

export default SkillsCard