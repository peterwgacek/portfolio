import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <p className="pt-3 text-center">
                        Copyright&copy;
              {new Date().getFullYear()}&nbsp;Peter W Gacek
            </p>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About</a>

                            </div>
                            <div className="col">
                                <a className="footer-nav">Skills</a>
                                <br />
                                <a className="footer-nav">Projects</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Design</a>
                                <br />
                                <a className="footer-nav">Contact</a>
                            </div>

                        </div>
                    </div>

                    <a className="links" href="https://www.linkedin.com/in/peterwgacek/"><i class="fab fa-linkedin"></i></a>
                    <a className="links" href="https://github.com/peterwgacek"><i class="fab fa-github"></i></a>


                </div>
            </div>
        </div>

    )
}

export default Footer;
