import React, { useRef } from 'react';
import { WORK_EXPERIENCE } from '../../utils/skillsAndWorkExperienceData';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from 'react-slick';

const WorkExperience = () => {
  const slideRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    reponsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="experience-container">
        <h5>Work Experience</h5>
        <div className="experience-content">
          <Slider ref={slideRef} {...settings}>
            {WORK_EXPERIENCE.map(item => (
              <ExperienceCard key={item.title} details={item} />
            ))}
          </Slider>
        </div>
    </section>
  );
}

export default WorkExperience;
