import './Hero.scss';

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>Junior Frontend Developer</h2>
        <p>Lorem Ipsum dolor sit amet</p>
      </div>

      <div className='hero-img'>
        <div className='about-icons'>
          <div className='about-icon .main'>
            <img src="./assets/images/icons8-react-native-96.png" alt="React Native"/>
          </div>
          <img src="./assets/images/japa.png" alt="Japa"/>
        </div>


        <div className='about-icons bottom'>
          <div className='about-icon'>
            <img src="./assets/images/icons8-musical-note-96.png" alt="Musical Note"/>
          </div>
          <div className='about-icon'>
            <img src="./assets/images/icons8-gym-96.png" alt="Gym"/>
          </div>
          <div className='about-icon'>
            <img src="./assets/images/icons8-poker-96.png" alt="Poker"/>
          </div>
          <div className='about-icon'>
            <img src="./assets/images/icons8-football-96.png" alt="Football"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
