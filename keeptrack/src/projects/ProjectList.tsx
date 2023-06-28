import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';
import ProjectForm from './ProjectForm';
import ProjectCard from './ProjectCard';

// function ProjectList({ projects } : any) {
    // return ( 
    //     <>
    //         <ul className="row">
    //             {projects.map((project : any) => (
    //                 <li key={project.id}>{project.name}</li>
    //             ))}
    //         </ul>
    //         <div className="row">
    //             {projects.map((project : any) => (
    //             <div key={project.id} className="cols-sm">
    //                 <div className="card">
    //                 <img src={project.imageUrl} alt={project.name} />
    //                 <section className="section dark">
    //                     <h5 className="strong">
    //                     <strong>{project.name}</strong>
    //                     </h5>
    //                     <p>{project.description}</p>
    //                     <p>Budget : {project.budget.toLocaleString()}</p>
    //                 </section>
    //                 </div>
    //                 </div>
    //             ))}
    //         </div>
    //         <pre>{JSON.stringify(projects, null, ' ')}</pre>
    //     </>
    // )
// }

function ProjectList ({ projects } : any) {
    
    const items = projects.map( (project : any ) => (
      <div key={project.id} className="cols-sm"> 
        <ProjectCard project={project}></ProjectCard>
        <ProjectForm />
      </div>
    ));

    return <div className="row">{items}</div>;

}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
}

export default ProjectList;

