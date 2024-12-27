import projects from '../helper/projects.js';

const CarouselThumbnail = ({ thumbnailRef }) => {
    const projectList = projects().reverse();
    const modifiedThumbnailList = [...projectList.slice(1), projectList[0]]; // Move first project to the end for thumbnail

    return (
        <div className="thumbnail" ref={thumbnailRef}>
        {modifiedThumbnailList.map((project) => (   
            <div className="item" key={project.id}>
                <img src={project.thumb} />
                <div className="project-name">{"0" + project.id + " " + project.name}</div>
            </div>
        ))}
    </div>
    )
}

export default CarouselThumbnail;