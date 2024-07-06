import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Junior Frontend Developer</h2>
            <p>
                Lorem Ipsum dolor sit amet
            </p>
        </div>
        <div className='hero-img'>
            <div>
                <div className='about-icon'>
                    <img src="./assets/images/icons8-react-native-96.png" alt=""/>
                </div>
                <div className='about-icon'>
                    <img src="./assets/images/icons8-musical-note-96.png" alt=""/>
                </div>
                <img src="./assets/images/japa.png" alt=""/>
            </div>
        </div>
        <div>
            <div className='about-icon'>
                <img src="./assets/images/icons8-gym-96.png" alt=""/>
            </div>
            <div className='about-icon'>
                <img src="./assets/images/icons8-poker-96.png" alt=""/>
            </div>
            <div className='about-icon'>
                <img src="./assets/images/icons8-football-96.png" alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Hero