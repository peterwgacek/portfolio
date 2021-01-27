import React from 'react'
import logo from '../logo.png';


const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <a className='navbar-brand' href='#'><img className='logo' src={logo} alt='logo' /></a>

                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <i class="fas fa-bars"></i>
                </button>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='#'>Home <span className='sr-only'>(current)</span></a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>About Me</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>My Skills</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Design</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Projects</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Contact</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
