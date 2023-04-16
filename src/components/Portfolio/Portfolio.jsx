import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
        <h2 className="portfolioHead">My Portfolio</h2>
        <div className="cardsContainer">
                <a href="https://shashi-blog-app-ui-api-3109f4.netlify.app/" target="_blank" rel="noreferrer">
                    <div className="portfolio_card">
                    <img src={process.env.PUBLIC_URL+"/assets/ss-blog.png"} alt="" className='imgCard' />
                    </div>
                </a>
                <a href="https://shashi-movie-app.netlify.app/" target="_blank" rel='noreferrer'>
                    <div className="portfolio_card">
                    <img src={process.env.PUBLIC_URL+"/assets/ss-imdb.png"} alt="" className='imgCard' />
                    </div>
                </a>
                <a href="https://shashi-e-com-app-ca9c08.netlify.app/" target="_blank" rel='noreferrer'>
                    <div className="portfolio_card">
                        <img src={process.env.PUBLIC_URL+"/assets/ss-ecom.png"} alt="" className='imgCard' />
                    </div>
                </a>
                <a href="https://shashi-bus-seat-booking-app-76cfad.netlify.app/" target="_blank" rel='noreferrer'>
                    <div className="portfolio_card">
                    <img src={process.env.PUBLIC_URL+"/assets/ss-busbooking.png"} alt="" className='imgCard' />
                    </div>
                </a>
                <a href="https://bhushan727.github.io/Clock-Project/index.html" target="_blank" rel='noreferrer'>
                    <div className="portfolio_card">
                    <img src={process.env.PUBLIC_URL+"/assets/ss-clock.png"} alt="" className='imgCard' />
                    </div>
                </a>
                <a href="https://bhushan727.github.io/TODO_App-js/index.html" target="_blank" rel='noreferrer'>
                    <div className="portfolio_card">
                    <img src={process.env.PUBLIC_URL+"/assets/ss-todo.png"} alt="" className='imgCard' />
                    </div>
                </a>
        </div>

    </div>
  )
}

export default Portfolio