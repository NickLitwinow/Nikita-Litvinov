import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { fetchReadmeImages } from '../utils/fetchReadmeImages';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // Получаем репозитории с темами
    useEffect(() => {
        fetch('https://api.github.com/users/NickLitwinow/repos', {
            headers: {
                Accept: 'application/vnd.github.mercy-preview+json',
            },
        })
            .then((res) => res.json())
            .then(async (data) => {
                // Оставляем только репозитории с описанием
                const filtered = data.filter(
                    (repo) => repo.description && repo.description.trim() !== ''
                );
                // Для каждого репозитория получаем изображения из README
                const augmented = await Promise.all(
                    filtered.map(async (repo) => {
                        const images = await fetchReadmeImages(repo.owner.login, repo.name);
                        return { ...repo, readmeImages: images };
                    })
                );

                // Сортировка проектов (пример сортировки по звёздам, затем по наличию изображений)
                const sortedProjects = augmented.sort((a, b) => {
                    if (a.stargazers_count !== b.stargazers_count) {
                        return b.stargazers_count - a.stargazers_count;
                    } else {
                        return new Date(b.updated_at) - new Date(a.updated_at);
                    }
                });
                setProjects(sortedProjects);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    if (loading) {
        return (
            <div className="skeleton projects-skeleton">Загрузка проектов...</div>
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