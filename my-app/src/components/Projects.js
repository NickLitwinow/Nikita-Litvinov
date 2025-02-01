import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://api.github.com/users/NickLitwinow/repos', {
            headers: {
                Accept: 'application/vnd.github.mercy-preview+json',
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Error fetching repositories');
                }
                return res.json();
            })
            .then(async (data) => {
                const filtered = data.filter(
                    (repo) => repo.description && repo.description.trim() !== ''
                );
                // Можно добавить обработку изображений для каждого репозитория (как показано ранее)
                setProjects(filtered);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching projects:', err);
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="skeleton projects-skeleton">
            </div>
        );
    }

    if (error) {
        return (
            <div className="skeleton projects-skeleton">
            </div>
        );
    }

    return (
        <motion.div
            className="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
        >
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </motion.div>
    );
}

export default Projects;