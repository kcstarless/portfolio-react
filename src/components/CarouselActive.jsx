import projects from '../helper/projects.js';

const CarouselActive = ({ sliderRef }) => {
    const projectList = projects().reverse();

    return (
        <div className="list" ref={sliderRef}>
        {projectList.map((project) => (
            <div className="item" key={project.id}>
                <img src={project.image} className="project-image" />
                <div className="content">
                    <div className="project-id">0{project.id} - {project.short}</div>
                    <div className="project-name">{project.name}</div>
                    <div className="project-description">{project.description}</div>
                    <ProjectTech tech_stack={project.tech_stack} />
                    <div className="links">
                        <a href={project.site_link} target='_blank' className="project-link">Demo</a>
                        <a href={project.github_link} target='_blank' className="project-link">Github</a>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
}

export default CarouselActive;

const ProjectTech = ({ tech_stack }) => {
    return (
        <div className="project-tech">
            {tech_stack.map((tech) => (
                <div className="tech-icon-container" key={tech.name}>
                    <img
                        src={tech.icon}
                        className="tech-icon"
                        alt={tech.name}
                    />
                    <div className="tooltip">{tech.name}</div>
                </div>
            ))}
        </div>
    )
}