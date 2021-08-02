import React from 'react'

function ProjectCard(props) {
    return (
        <>

        {props.props.projects.map(project => (
            <div className="card" style={{width: '18rem'}}>
                <img src={project.img} alt='Budget-Tracker' className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <a target='_blank' href={project.github}>Click to view GitHub!</a>
                        <br></br>
                        <a target='_blank' href={project.deployed}>Click to view the Deployed App!</a>
                    </div>
            
            </div>
        ))}

        <img src={props.props.projects[0].img} alt='Project 1' style={{width: '18rem'}}></img>

        </>
    )
}

export default ProjectCard
