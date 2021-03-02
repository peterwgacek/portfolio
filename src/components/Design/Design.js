import React from 'react';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import './Design.css';

import genresmashlogo from '../../assets/designs/genresmashlogo.png'
import vogologo from '../../assets/designs/vogologo.png'
import marvelassemblelogo from '../../assets/designs/marvelassemblelogo.png'
import jurassicpong from '../../assets/designs/jurassicpong.png'
import masterofnumbers from '../../assets/designs/masterofnumbers.png'
import nutmilklabel from '../../assets/designs/nutmilklabel.png'
import IOUXmascard from '../../assets/designs/IOUXmascard.png'
import cocodoop from '../../assets/designs/cocodoop.png'
import bartrider from '../../assets/designs/bartrider.png'


const Design = () => {

    const openPopupboxIOU = () => {
        const content = (
            <>
                <img className='design-img-popup' src={IOUXmascard} alt="IOU Xmas Card" />
                <p>Turns out becoming a homeowner and going back to school while unemployed can leave one a bit short on funds. I made this Monopoly Chance card mash-up as a silly IOU sort of card for some of my close friends and family. Really I just made it to have some fun with procreate.</p>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "IOU Xmas Card",
                },
            },
        });
    }

    const popupboxConfigIOU = {
        titleBar: {
            enable: true,
            text: 'IOU Xmas Card'
        },
        fadeIn: true,
        fadeInSpee: 500
    }

    const openPopupboxdoop = () => {
        const content = (
            <>
                <img className='design-img-popup' src={cocodoop} alt="Caco Doop Sketch" />
                <p>This was a sketch I did for fun in 2019 mashing up a Cacodemon from the video game Doom and the Marvel Comics X-force character, Doop. </p>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Caco Doop Sketch",
                },
            },
        });
    }

    const popupboxConfigdoop = {
        titleBar: {
            enable: true,
            text: 'Cacodemon/Doop Mash-Up Sketch'
        },
        fadeIn: true,
        fadeInSpee: 500
    }


    const openPopupboxbartrider = () => {
        const content = (
            <>
                <img className='design-img-popup' src={bartrider} alt="Bart Rider Sketch" />
                <p>This was a sketch I did for fun in 2019 mashing up Bart Simpson and the Marvel comics character Ghost Rider. </p>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Bart Rider Sketch",
                },
            },
        });
    }

    const popupboxConfigbartrider = {
        titleBar: {
            enable: true,
            text: 'Bart Simpson/Ghost Rider Mash-Up Sketch'
        },
        fadeIn: true,
        fadeInSpee: 500
    }


    const openPopupboxgenresmash = () => {
        const content = (
            <>
                <img className='design-img-popup' src={genresmashlogo} alt="Genre Smash Logo" />
                <p>
                    This is a logo I created for first project (GENRE SMASH!) in my Software Engineering Immersive.
                </p>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Genre Smash Logo",
                },
            },
        });
    }

    const popupboxConfiggenresmash = {
        titleBar: {
            enable: true,
            text: 'Genre Smash Logo'
        },
        fadeIn: true,
        fadeInSpee: 500
    }

    const openPopupboxvogo = () => {
        const content = (
            <>
                <img className='design-img-popup' src={vogologo} alt="V.O. GO Logo" />
                <p>
                    This is a logo I created for my second project (V.O. GO) in my Software Engineering Immersive.
                </p>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "V.O. GO Logo",
                },
            },
        });
    }

    const popupboxConfigvogo = {
        titleBar: {
            enable: true,
            text: 'V.O. Logo'
        },
        fadeIn: true,
        fadeInSpee: 500
    }

    const openPopupboxmarvelassemble = () => {
        const content = (
            <>
                <img className='design-img-popup' src={marvelassemblelogo} alt="Marvel Assemble Logo" />
                <p>
                    This is a logo I created for my third project (Marvel Assemble) in my Software Engineering Immersive.
                </p>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Marvel Assemble Logo",
                },
            },
        });
    }

    const popupboxConfigmarvelassemble = {
        titleBar: {
            enable: true,
            text: 'Marvel Assemble Logo'
        },
        fadeIn: true,
        fadeInSpee: 500
    }

    const openPopupboxjurassicpong = () => {
        const content = (
            <>
                <img className='design-img-popup' src={jurassicpong} alt="Jurassic Pong Game" />
                <p>
                    This is a screenshot for an unfinished Jurassic Park themed 'Brickout' Unity game called 'Jurassic Pong'.
                </p>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Jurassic Pong Screengrab",
                },
            },
        });
    }

    const popupboxConfigjurassicpong = {
        titleBar: {
            enable: true,
            text: 'Jurassic Pong Screenshot'
        },
        fadeIn: true,
        fadeInSpee: 500
    }

    const openPopupboxmasterofnumbers = () => {
        const content = (
            <>
                <img className='design-img-popup' src={masterofnumbers} alt="Master of Numbers Game" />
                <p>
                    This is a screenshot for a finished Dr. Strange themed 'Number Wizard' Unity game called 'Master of Numbers'
                </p>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Master of Numbers Screengrab",
                },
            },
        });
    }

    const popupboxConfigmasterofnumbers = {
        titleBar: {
            enable: true,
            text: 'Master of Numbers Screenshot'
        },
        fadeIn: true,
        fadeInSpee: 500
    }

    const openPopupboxnutmilklabel = () => {
        const content = (
            <>
                <img className='design-img-popup' src={nutmilklabel} alt="Nut Milk Label" />
                <p>
                    This is a label I made for a Christmas gift in 2019. My fiance and I made bottles of Almond Milk Baileys for our friends and family and slapped this on as a label.
                </p>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Drunken Nut Milk Label",
                },
            },
        });
    }

    const popupboxConfignutmilklabel = {
        titleBar: {
            enable: true,
            text: ''
        },
        fadeIn: true,
        fadeInSpee: 500
    }







    return (
        <div id="design" className='design-wrapper'>
            <div className='container'>
                <h1 className='text-center py-5'>Design</h1>

                <div className='image-box-wrapper row justify-content-center'>

                    <div className='design-image-box' onClick={openPopupboxIOU}>
                        <img className='design-image' src={IOUXmascard} alt='IOU Xmas card' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>

                    <div className='design-image-box' onClick={openPopupboxdoop}>
                        <img className='design-image' src={cocodoop} alt='coco doop' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>

                    <div className='design-image-box' onClick={openPopupboxbartrider}>
                        <img className='design-image' src={bartrider} alt='bart rider' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>


                    <div className='design-image-box' onClick={openPopupboxgenresmash}>
                        <img className='design-image' src={genresmashlogo} alt='genre smash logo' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>


                    <div className='design-image-box' onClick={openPopupboxvogo}>
                        <img className='design-image' src={vogologo} alt='vogo logo' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>

                    <div className='design-image-box' onClick={openPopupboxmarvelassemble}>
                        <img className='design-image' src={marvelassemblelogo} alt='marvel assemble logo' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>

                    <div className='design-image-box' onClick={openPopupboxjurassicpong}>
                        <img className='design-image' src={jurassicpong} alt='jurassic pong' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>

                    <div className='design-image-box' onClick={openPopupboxmasterofnumbers}>
                        <img className='design-image' src={masterofnumbers} alt='master of numbers' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>

                    <div className='design-image-box' onClick={openPopupboxnutmilklabel}>
                        <img className='design-image' src={nutmilklabel} alt='nut milk label' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigIOU} />
            <PopupboxContainer {...popupboxConfigdoop} />
            <PopupboxContainer {...popupboxConfigbartrider} />
            <PopupboxContainer {...popupboxConfiggenresmash} />
            <PopupboxContainer {...popupboxConfigvogo} />
            <PopupboxContainer {...popupboxConfigmarvelassemble} />
            <PopupboxContainer {...popupboxConfigjurassicpong} />
            <PopupboxContainer {...popupboxConfigmasterofnumbers} />
            <PopupboxContainer {...popupboxConfignutmilklabel} />
        </div>

    )
}

export default Design
