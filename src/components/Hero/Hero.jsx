import "./Hero.scss";
import football from "../../images/football.png";
import gym from "../../images/gym.png";
import hero from "../../images/hero.jpg";
import music from "../../images/music.png";
import poker from "../../images/poker.png";
import react from "../../images/react.png";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Junior Frontend Developer</h2>
        <p>
          Junior Front-end Dev, DJ, music producer, football and poker player.
          Graduate of the department of economics. Love to eat, cook, train hard
          and learn strategies.
        </p>
      </div>

      <div className="hero-img">
        <div className="about-icons">
          <div className="about-icon .main">
            <img
              src={react}
              alt="React Native"
            />
          </div>
          <img src={hero} alt="Hero" />
        </div>

        <div className="about-icons bottom">
          <div className="about-icon">
            <img
              src={music}
              alt="Musical Note"
            />
          </div>
          <div className="about-icon">
            <img src={gym} alt="Gym" />
          </div>
          <div className="about-icon">
            <img src={poker} alt="Poker" />
          </div>
          <div className="about-icon">
            <img src={football }alt="Football" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
