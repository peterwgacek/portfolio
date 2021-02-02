import React from 'react'
import Mewg from '../assets/Mewg.png'

const AboutMe = () => {
    return (
        <div id="aboutme" className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5' >
                        <img className="profile-img" src={Mewg} alt='Me' />
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className="about-header">About Me</h1>
                    <p className="about-text">
                        Through my education as a software engineer and experience as a project manager in a high pressure industry, I understand how to execute multiple projects and manage people while meeting expectations in a time-sensitive environment. I am most energized working alongside passionate and driven individuals who work synergistic-ally to deliver an aggregate that is stronger than its components.</p>
                    <p className="about-text">
                        If you couldn't tell from my page, I'm a nerd of many colors and one of my many passions outside of programming and design is sequential art. In my personal time I write about and review comics on my bookstagram. You can follow along at:
                            <a className="iglink" href='https://www.instagram.com/semisequential/' target='_blank'> <i class="fab fa-instagram"></i> semisequential</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
