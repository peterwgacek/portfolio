import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import morementum from '../assets/projects/morementum.png';
import curse from '../assets/projects/curse.png';
import marvelassemble from '../assets/projects/marvelassemble.png';
import vogo from '../assets/projects/vogo.png';
import genresmash from '../assets/projects/genresmash.png';
import './Projects.css';

const ProjectsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6000}
            withoutControls={true}>
            <>
                <img className="projectImg" src={morementum} alt="Morementum" />
                <div className="myCarousel">
                    <h3>Morementum</h3>
                    <p> Morementum is a full-stack clone of a popular Google Chrome extension (Momentum) that operates as a todo app utilizing Ruby and React. This was a group project in my General Assembly immersive.  </p>
                    <a href="https://github.com/curiositysquad/frontend" target='_blank' rel="noreferrer"><i class="fab fa-github-square"></i></a>
                    <a href="https://morementum.herokuapp.com/" target='_blank' rel="noreferrer"><i class="fas fa-link"></i></a>
                </div>
            </>
            <>
                <img className="projectImg" src={curse} alt="The Redux Clone of Monkey Island" />
                <div className="myCarousel">
                    <h3>The Redux Clone of Monkey Island  ™</h3>
                    <p>TRDCMI™ is a front-end conversation clone from a 1997 Lucasarts computer game called The Curse of Monkey Island. This app utilizes Redux to generate a multiple choice conversation with an NPC.</p>
                    <a href="https://github.com/peterwgacek/curse-client"><i class="fab fa-github-square"></i></a>
                    <a href="https://thereduxcloneofmonkeyislandtm.herokuapp.com/" target='_blank' rel="noreferrer"><i class="fas fa-link"></i></a>
                </div>
            </>
            <>
                <img className="projectImg" src={marvelassemble} alt="Marvel Assemble" />
                <div className="myCarousel">
                    <h3>Marvel Assemble</h3>
                    <p>Marvel Assemble is a full-stack MERN application that allows a user to search for a Marvel hero utilizing Marvel’s API then take that hero and add them to a "Dream" super hero team.</p>
                    <a href="https://github.com/peterwgacek/marvel-assemble-frontend"><i class="fab fa-github-square"></i></a>
                    <a href="https://marvel-assemble.herokuapp.com/" target='_blank' rel="noreferrer"><i class="fas fa-link"></i></a>
                </div>
            </>
            <>
                <img className="projectImg" src={vogo} alt="V.O. GO" />
                <div className="myCarousel">
                    <h3>V.O. GO</h3>
                    <p>V.O. GO is a single page web application that allows a user to enter and upload an embedded Soundcloud link into a database along with corresponding information so voice artists can record and save their recordings.</p>
                    <a href="https://github.com/peterwgacek/vogo"><i class="fab fa-github-square"></i></a>
                    <a href="https://vo-go.herokuapp.com/" target='_blank' rel="noreferrer"><i class="fas fa-link"></i></a>
                </div>
            </>
            <>
                <img className="projectImg" src={genresmash} alt="GENRE SMASH!" />
                <div className="myCarousel">
                    <h3>GENRE SMASH!</h3>
                    <p>GENRE SMASH! is a single page web app that returns a randomized movie from The Movie Database API based on the genre the user selects from the drop down. </p>
                    <a href="https://github.com/peterwgacek/genre-smash"><i class="fab fa-github-square"></i></a>
                    <a href="https://genre-smash.vercel.app/" target='_blank' rel="noreferrer"><i class="fas fa-link"></i></a>
                </div>
            </>

        </Carousel>
    )
}

export default ProjectsCarousel
