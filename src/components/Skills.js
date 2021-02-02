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
        <div id="skills" className='skills'>
            <h1 className='py-5'>Skills</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-8'>
                        <div className='box'>
                            <img className='skillslogo' src={html5logo} alt="html5 logo" />
                            <p>HTML5</p>
                            <img className='skillslogo' src={css3logo} alt="css3 logo" />
                            <p>CSS3</p>
                            <img className='skillslogo' src={jslogo} alt="js logo" />
                            <p>JS</p>
                            <img className='skillslogo' src={rubylogo} alt="ruby logo" />
                            <p>Ruby</p>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-8'>
                        <div className='box'>
                            <img className='skillslogo' src={reactlogo} alt="react logo" />
                            <p>React</p>
                            <img className='skillslogo' src={reduxlogo} alt="redux logo" />
                            <p>Redux</p>
                            <img className='skillslogo' src={npmlogo} alt="npm logo" />
                            <p>Npm</p>
                            <img className='skillslogo' src={nodelogo} alt="node logo" />
                            <p>Node.js</p>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-8'>
                        <div className='box'>
                            <img className='skillslogo' src={sqllogo} alt="sql logo" />
                            <p>SQL</p>
                            <img className='skillslogo' src={railslogo} alt="rails logo" />
                            <p>Ruby on Rails</p>
                            <img className='skillslogo' src={postgreslogo} alt="postgreslogo" />
                            <p>PostgreSQL</p>
                            <img className='skillslogo' src={mongologo} alt="mongo logo" />
                            <p>MongoDB</p>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-8'>
                        <div className='box'>
                            <img className='skillslogo' src={gimplogo} alt="gimp logo" />
                            <p>Gimp</p>
                            <img className='skillslogo' src={pslogo} alt="ps logo" />
                            <p>Photoshop</p>
                            <img className='skillslogo' src={procreatelogo} alt="procreate logo" />
                            <p>Procreate</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Skills
