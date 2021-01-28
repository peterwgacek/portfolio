import React from 'react'
//FRONT END
import html5logo from '../assets/logos/html5logo.png'
import css3logo from '../assets/logos/css3logo.png'
import jslogo from '../assets/logos/jslogo.png'
import reactlogo from '../assets/logos/reactlogo.png'
//MISC
import rubylogo from '../assets/logos/rubylogo.png'
import reduxlogo from '../assets/logos/reduxlogo.png'
import npmlogo from '../assets/logos/npmlogo.png'
import nodelogo from '../assets/logos/nodelogo.png'
//BACKEND
import sqllogo from '../assets/logos/rubylogo.png'
import railslogo from '../assets/logos/railslogo.png'
import postgreslogo from '../assets/logos/postgreslogo.png'
import mongologo from '../assets/logos/mongologo.png'
//DESIGN
import gimplogo from '../assets/logos/gimplogo.png'
import pslogo from '../assets/logos/pslogo.png'
import procreatelogo from '../assets/logos/procreatelogo.png'




const Skills = () => {
    return (
        <div className='skills'>
            <h1 className='py-5'>Skills</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-8'>
                        <div className='box'>
                            <img className='skillslogo' src={html5logo} />
                            <p>HTML5</p>
                            <img className='skillslogo' src={css3logo} />
                            <p>CSS3</p>
                            <img className='skillslogo' src={jslogo} />
                            <p>JS</p>
                            <img className='skillslogo' src={rubylogo} />
                            <p>Ruby</p>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-8'>
                        <div className='box'>
                            <img className='skillslogo' src={reactlogo} />
                            <p>React</p>
                            <img className='skillslogo' src={reduxlogo} />
                            <p>Redux</p>
                            <img className='skillslogo' src={npmlogo} />
                            <p>Npm</p>
                            <img className='skillslogo' src={nodelogo} />
                            <p>Node.js</p>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-8'>
                        <div className='box'>
                            <img className='skillslogo' src={sqllogo} />
                            <p>SQL</p>
                            <img className='skillslogo' src={railslogo} />
                            <p>Ruby on Rails</p>
                            <img className='skillslogo' src={postgreslogo} />
                            <p>PostgreSQL</p>
                            <img className='skillslogo' src={mongologo} />
                            <p>MongoDB</p>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-8'>
                        <div className='box'>
                            <img className='skillslogo' src={gimplogo} />
                            <p>Gimp</p>
                            <img className='skillslogo' src={pslogo} />
                            <p>Photoshop</p>
                            <img className='skillslogo' src={procreatelogo} />
                            <p>Procreate</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Skills
