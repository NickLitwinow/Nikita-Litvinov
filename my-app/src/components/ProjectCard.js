import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { fetchReadmeImages } from '../utils/fetchReadmeImages';

function ProjectCard({ project }) {
    const [images, setImages] = useState(project.readmeImages || []);
    const [loadingImages, setLoadingImages] = useState(
        project.readmeImages ? false : true
    );

    useEffect(() => {
        if (!project.readmeImages) {
            fetchReadmeImages(project.owner.login, project.name).then((imgs) => {
                setImages(imgs);
                setLoadingImages(false);
            });
        }
    }, [project]);

    return (
        <motion.div
            className="project-card"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
        >
            <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="badges">
          <span className="badge stars">
            <FaStar /> {project.stargazers_count}
          </span>
                    {project.language && (
                        <span className="badge language">{project.language}</span>
                    )}
                </div>

                {loadingImages ? (
                    <div className="skeleton image-skeleton"></div>
                ) : images.length > 0 ? (
                    <div className="image-single">
                        <img
                            src={images[0]}
                            alt="Скриншот"
                            className="project-image"
                        />
                    </div>
                ) : null}

                {/* Выводим темы (hashtags), если они есть */}
                {project.topics && project.topics.length > 0 && (
                    <div className="topics">
                        {project.topics.map((topic, idx) => (
                            <span key={idx} className="topic">#{topic}</span>
                        ))}
                    </div>
                )}
            </div>
            <div className="project-card-footer">
                <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                >
                    View at GitHub
                </a>
            </div>
        </motion.div>
    );
}

export default ProjectCard;