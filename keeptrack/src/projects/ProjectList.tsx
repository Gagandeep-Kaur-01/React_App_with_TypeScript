import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';

function ProjectList({ projects } : any) {
    return ( 
        <>
            <ul className="row">
                {projects.map((project : any) => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
            <div className="row">
                {projects.map((project : any) => (
                <div key={project.id} className="cols-sm">
                    <div className="card">
                    <img src={project.imageUrl} alt={project.name} />
                    <section className="section dark">
                        <h5 className="strong">
                        <strong>{project.name}</strong>
                        </h5>
                        <p>{project.description}</p>
                        <p>Budget : {project.budget.toLocaleString()}</p>
                    </section>
                    </div>
                    </div>
                ))}
            </div>
            <pre>{JSON.stringify(projects, null, ' ')}</pre>
        </>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
}

export default ProjectList;

