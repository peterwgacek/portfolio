import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
            <div className='container'>
                <img className='logo' src={logo} alt='logo' />

                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <i class="fas fa-bars"></i>
                </button>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <Link smooth={true} to="home" offset={-60} className='nav-link' href='#'>Home <span className='sr-only'>(current)</span></Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth={true} to="aboutme" offset={-60} className='nav-link' href='#'>About Me</Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth={true} to="skills" offset={-60} className='nav-link' href='#'>Skills</Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth={true} to="projects" offset={-60} className='nav-link' href='#'>Projects</Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth={true} to="design" offset={-60} className='nav-link' href='#'>Design</Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth={true} to="contact" offset={-60} className='nav-link' href='#'>Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
