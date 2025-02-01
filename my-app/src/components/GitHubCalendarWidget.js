import React from 'react';
import { motion } from 'framer-motion';

function GitHubCalendarWidget() {
    return (
        <motion.div
            className="github-calendar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
        >
            <h2>GitHub Activity</h2>
            <img
                src="https://ghchart.rshah.org/NickLitwinow"
                alt="GitHub Calendar"
                className="calendar-img"
            />
        </motion.div>
    );
}

export default GitHubCalendarWidget;