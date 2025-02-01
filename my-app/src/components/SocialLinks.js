import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './SocialLinks.css';

function SocialLinks() {
    const links = [
        {
            icon: <FaFileAlt />,
            url: 'https://docs.google.com/document/d/1DKTgZdi3c_AlEFaiEU35NIMKl7FDeUsZW4CZvmTjwsc/edit?usp=sharing',
            label: 'CV',
        },
        {
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/in/nikita-litwinow/',
            label: 'LinkedIn',
        },
        {
            icon: <FaGithub />,
            url: 'https://github.com/NickLitwinow',
            label: 'GitHub',
        },
        {
            icon: <FaInstagram />,
            url: 'https://www.instagram.com/litwein_official/',
            label: 'Instagram',
        },
    ];

    return (
        <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            {links.map((link) => (
                <a
                    href={link.url}
                    key={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    {link.icon}
                    <span className="tooltip">{link.label}</span>
                </a>
            ))}
        </motion.div>
    );
}

export default SocialLinks;