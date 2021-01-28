import React from 'react'
import me from '../assets/me.png'

const AboutMe = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5' >
                        <img className="profile-img" src={me} alt='Me' />
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className="about-header">About Me</h1>
                    <p className="about-text">
                        Through my education as a software engineer and experience as a project manager in a high pressure industry, I understand how to execute multiple projects and manage people while meeting expectations in a time-sensitive environment. I am most energized working alongside passionate and driven individuals who work synergistic-ally to deliver an aggregate that is stronger than its components.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
