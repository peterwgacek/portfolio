import React from 'react'
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div id="home" className='header-wrapper'>
            <div className='main-info'>
                <h1>Peter W Gacek</h1>
                <h2>Project Manager turned Software Engineer</h2>
                <div className="links">
                    <Link smooth={true} to="contact" href='#' className='btn-main-offer'>Contact Me</Link>
                    <a className='resume' href='https://docs.google.com/document/d/19VLOE1uNlk19l53EkbLxcWVm6NW-Hul3UAtB-rhu00U/edit?usp=sharing' target='_blank' rel='noreferrer' >Resume</a>
                </div>
            </div>
        </div >
    )
}

export default Header
