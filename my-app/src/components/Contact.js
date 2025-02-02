import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const handleEmailClick = (e) => {
        e.preventDefault();
        window.open("mailto:nicklitvinow@gmail.com", "_self");
    };

    return (
        <motion.div
            className="contact-minimal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <a
                href="mailto:nicklitvinow@gmail.com"
                className="contact-link"
                onClick={handleEmailClick}
            >
                <FaPaperPlane className="paper-plane-icon" />
                <span>Email Me</span>
            </a>
        </motion.div>
    );
};

export default Contact;