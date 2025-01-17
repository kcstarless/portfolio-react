import React, { useState, useEffect } from 'react';
import projects from '../helper/projects.js';

const CarouselActive = ({ sliderRef, setPortfolioLoading }) => {
    const projectList = projects().reverse();

    // Track how many images have been loaded
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);

    // Preload images and track if they are all loaded
    const preloadImages = () => {
        const imagePromises = projectList.map((project) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = project.image;

                img.onload = () => {
                    setLoadedImagesCount((prevCount) => prevCount + 1);
                    resolve();
                };

                img.onerror = () => {
                    setLoadedImagesCount((prevCount) => prevCount + 1);
                    reject(`Error loading image: ${project.image}`);
                };
            });
        });

        // Wait for all image promises to resolve or reject
        Promise.all(imagePromises)
            .then(() => {
                console.log("All images have been loaded successfully.");
                setPortfolioLoading(false);  // Notify Portfolio that images are fully loaded
            })
            .catch((error) => {
                console.error("Some images failed to load.", error);
                setPortfolioLoading(false);  // Consider the portfolio ready even if some images failed
            });
    };

    useEffect(() => {
        preloadImages();  // Trigger image preload on component mount
    }, []); // Runs only once on component mount

    return (
        <>
            {/* Show loading state until all images are fully loaded */}
            <div className="list" ref={sliderRef}>
                {projectList.map((project) => (
                    <div className="item" key={project.id}>
                        <img
                            src={project.image}
                            className="project-image"
                            alt={project.name}
                        />
                        <div className="content">
                            <div className="project-id">0{project.id} - {project.short}</div>
                            <div className="project-name">{project.name}</div>
                            <div className="project-description">{project.description}</div>
                            <ProjectTech tech_stack={project.tech_stack} />
                            <div className="links">
                                <a href={project.site_link} target="_blank" className="project-link">Demo</a>
                                <a href={project.github_link} target="_blank" className="project-link">Github</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

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
    );
};

export default CarouselActive;
