import React from "react";
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <p className="pt-3 text-center">
                        Copyright&copy;
              {new Date().getFullYear()}&nbsp;Peter W Gacek
            </p>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home"
                                    offset={-60} className="footer-nav">Home</Link>
                                <br />
                                <Link smooth={true} to="aboutme" offset={-60} className="footer-nav">About</Link>

                            </div>
                            <div className="col">
                                <Link smooth={true} to="skills" offset={-60} className="footer-nav">Skills</Link>
                                <br />
                                <Link smooth={true} to="projects" offset={-60} className="footer-nav">Projects</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="design" offset={-60} className="footer-nav">Design</Link>
                                <br />
                                <Link smooth={true} to="contact" offset={-60} className="footer-nav">Contact</Link>
                            </div>

                        </div>
                    </div>

                    <a className="links" href="https://www.linkedin.com/in/peterwgacek/" target='_blank'><i class="fab fa-linkedin" ></i></a>
                    <a className="links" href="https://github.com/peterwgacek" target='_blank'><i class="fab fa-github"></i></a>


                </div>
            </div>
        </div>

    )
}

export default Footer;
