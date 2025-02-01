import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <motion.div
            className="contact-minimal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <a href="mailto:nicklitvinow@gmail.com&body=привет?subject=вопрос"" className="contact-link">
                <FaPaperPlane className="paper-plane-icon" />
                <span>Email Me</span>
            </a>
        </motion.div>
    );
};

export default Contact;