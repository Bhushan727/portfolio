import React from 'react'
import './Banner.css'
import image from './banner-guy.png'

const Banner = () => {
  return (
    <div className='banner' id='banner'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='waves'><path fill="#009999" fillOpacity="1" d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,101.3C672,107,768,181,864,197.3C960,213,1056,171,1152,181.3C1248,192,1344,256,1392,288L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div className="leftBanr">
            <p className="nameTitle">Hi, I am Shashi Bhushan Kumar</p>
            <p className="domain">A Full-Stack Developer</p>
            <p className='slogan'>Get ready to turn ideas into reality</p>

            <div className="btns">
                <button className="leftBtn">Hire Me</button>
                <button className="ritBtn">Resume</button>
            </div>
            
        </div>

        <img src={image} alt="not working" className='imgBanner'/>

    </div>
  )
}

export default Banner