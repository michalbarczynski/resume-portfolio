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
                <div className='tech-icon'>
                    <img src="" alt=""/>
                </div>
                <img src="" alt=""/>
            </div>
        </div>
        <div>
            <div className='tech-icon'>
                <img src="" alt=""/>
            </div>
            <div className='tech-icon'>
                <img src="" alt=""/>
            </div>
            <div className='tech-icon'>
                <img src="" alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Hero