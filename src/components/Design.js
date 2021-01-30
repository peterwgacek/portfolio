import React from 'react'
import genresmashlogo from '../assets/designs/genresmashlogo.png'
import vogologo from '../assets/designs/vogologo.png'
import marvelassemblelogo from '../assets/designs/marvelassemblelogo.png'
import jurassicpong from '../assets/designs/jurassicpong.png'
import masterofnumbers from '../assets/designs/masterofnumbers.png'
import nutmilklabel from '../assets/designs/nutmilklabel.png'
import IOUXmascard from '../assets/designs/IOUXmascard.png'
import cocodoop from '../assets/designs/cocodoop.png'
import bartrider from '../assets/designs/bartrider.png'


const Design = () => {
    return (
        <div className='design-wrapper'>
            <div className='container'>
                <h1 className='text-center py-5'>Design</h1>

                <div className='image-box-wrapper row justify-content-center'>

                    <div className='design-image-box'>
                        <img className='design-image' src={IOUXmascard} alt='IOUXmascard' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>

                    <div className='design-image-box'>
                        <img className='design-image' src={cocodoop} alt='cocodoop' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>

                    <div className='design-image-box'>
                        <img className='design-image' src={bartrider} alt='bartrider' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>


                    <div className='design-image-box'>
                        <img className='design-image' src={genresmashlogo} alt='genresmashlogo' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>


                    <div className='design-image-box'>
                        <img className='design-image' src={vogologo} alt='vogologo' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>

                    <div className='design-image-box'>
                        <img className='design-image' src={marvelassemblelogo} alt='marvelassemblelogo' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>

                    <div className='design-image-box'>
                        <img className='design-image' src={jurassicpong} alt='jurassicpong' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>

                    <div className='design-image-box'>
                        <img className='design-image' src={masterofnumbers} alt='masterofnumbers' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>

                    <div className='design-image-box'>
                        <img className='design-image' src={nutmilklabel} alt='nutmilklabel' />
                        <div className='overflow'></div>
                        <i class='fas fa-search-plus'></i>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Design
