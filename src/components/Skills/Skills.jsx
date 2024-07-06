import React, { useState } from 'react';
import './Skills.scss';
import SkillsCard from './SkillsCard/SkillsCard';
import { SKILLS } from '../../utils/skillsData';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])
  const handleSelcetedSkill = data => {
    setSelectedSkill(data);
  }

  return (
    <section className='skills-container'>
      <h5>Technical Proficiency</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillsCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => handleSelcetedSkill(item)}
            />
          ))}
        </div>
        <div className='skills-info'>
          <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills}/>
        </div>
      </div>
    </section>
  );
}

export default Skills;
