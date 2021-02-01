import React from 'react';
import ProjectsCarousel from './ProjectsCarousel';

const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="container">
                <div className="projects-content">
                    <ProjectsCarousel />
                </div>
            </div>
        </div>

    )
}

export default Projects
