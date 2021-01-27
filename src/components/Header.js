import React from 'react'
import logo from '../logo.png';


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <img className='logo' src={logo} alt='logo' />
                <h1>Peter W Gacek</h1>
                <h2>Project Manager turned Software Engineer</h2>
            </div>
        </div >
    )
}

export default Header
