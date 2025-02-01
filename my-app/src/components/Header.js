import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Header() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Получаем данные пользователя с GitHub API
    useEffect(() => {
        fetch('https://api.github.com/users/NickLitwinow')
            .then((res) => res.json())
            .then((data) => {
                setUserData(data);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    if (loading) {
        return <div className="skeleton header-skeleton"></div>;
    }

    return (
        <motion.div
            className="header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <img src={userData.avatar_url} alt="Avatar" className="avatar" />
            <p className="bio">{userData.bio}</p>
        </motion.div>
    );
}

export default Header;