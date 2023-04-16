import React from 'react'
import './About.css';
import image from './about-me-guy.png';
import react_icn from './react.png';
import html_icn from './html.png';
import css_icn from './css.png';
import js_icn from './js.png';
import github_icn from './github.png';
import node_icn from './nodejs.png';
import mongodb_icn from './mongodb.png';
import bootstrap_icn from './bootstrap.png';


const About = () => {
  return (
    <div className='about' id='about'>

        <div className="about_guy_img">
            <img src={image} alt=""  className='aboutImg'/>
        </div>
        <div className="aboutRit">
            <h1 className="aboutHead">About Me</h1>
            <p className="aboutPara1">
                I'm a MERN developer seeking a beginner role to enhance and explore my technical knowledge gained at PrepBytes. My primary focus is developing responsive web applications for web, mobile & tablet and strengthening the security level for backend apps. Looking to start my career as an entry-level software developer with a reputed firm driven by technology and interfaces.
            </p>
            <p className="aboutPara2">
                Strong in design and integration with intuitive problem-solving skills. Proficient in HTML, CSS, JavaScript, Reactjs, Nodejs, and MongoDB. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.
            </p>
            <div className="aboutTechCont">
                <p className="tehcHead">
                    Languages/ Libraries/ Technologies : 
                </p>
            <div className="aboutTech">
                <img src={react_icn} alt="" className="aboutIcons" />
                <img src={html_icn} alt="" className="aboutIcons" />
                <img src={css_icn} alt="" className="aboutIcons" />
                <img src={js_icn} alt="" className="aboutIcons" />
                <img src={bootstrap_icn} alt="" className="aboutIcons" />
                <img src={github_icn} alt="" className="aboutIcons" />
                <img src={node_icn} alt="" className="aboutIcons" />
                <img src={mongodb_icn} alt="" className="aboutIcons" />
            </div>
            </div>
        </div>

    </div>
  )
}

export default About