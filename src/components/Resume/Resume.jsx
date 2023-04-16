import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <div className='resume' id='resume'>
        <h2 className="resumeHeads">Resume</h2>

        <div className="resumeMain">

            <div className="resumeLeft">

                <h2 className="certfHead">Certification</h2>
                <hr className="underLine" />
                <div className="certificateCont">
                    <div className="firstCertif">
                        <h3 className="certifName">Web Developer</h3>
                        <p className="certifCompany">EDUONIX</p>
                        <span className="certifDate">Mar 2022</span>
                        <div className="point"></div>
                    </div>
                    <div className="firstCertif">
                        <h3 className="certifName">Data Structure usiing C</h3>
                        <p className="certifCompany">College of Engineering, Nashik</p>
                        <span className="certifDate">Mar 2022</span>
                        <div className="point"></div>
                    </div>
                </div>

                <h2 className="certfHead">Education</h2>
                <hr className="underLine" />
                <div className="certificateCont">
                    <div className="firstCertif">
                        <h3 className="certifName">Bachelor's of Computer Application</h3>
                        <p className="certifCompany">College of Commerce,Arts & Science, Patna</p>
                        <span className="certifDate">2017 - 20</span>
                        <div className="point"></div>
                    </div>
                    <div className="firstCertif">
                        <h3 className="certifName">Intermediate</h3>
                        <p className="certifCompany">Inter Science College, Hazaribagh</p>
                        <span className="certifDate">2015 - 17</span>
                        <div className="point"></div>
                    </div>
                </div>
                <p className='resumeDownload'>To know more about me, download my resume here <a href="/resume/resume1.pdf" download="SHASHI's resume"><i class="fa-solid fa-cloud-arrow-down"></i></a></p>

            </div>
            <div className="resumeRight">
                <div className="imgGuy">
                    <img className='resume-guy' src={process.env.PUBLIC_URL+'/media/resume-guy-img.png'} alt="" />
                </div>
                <div className="iconCont">
                    <div className="resumeIconDiv">
                        <a href="https://www.linkedin.com/in/shashi-bhushan-kumar-35b6401a8/" target="_blank" rel='noreferrer'><img src={process.env.PUBLIC_URL+'/media/icon-linkedin.png'} alt="" className="resumeIcon" /></a>
                    </div>
                    <div className="resumeIconDiv">
                    <a href="https://github.com/Bhushan727" target="_blank" rel='noreferrer'><img src={process.env.PUBLIC_URL+'/media/icon-github.png'} alt="" className="resumeIcon" /></a>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Resume