import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Header() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://api.github.com/users/NickLitwinow')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setUserData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching user data:', err);
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading) {
        // Показываем скелетон, пока идет загрузка
        return <div className="skeleton header-skeleton"></div>;
    }

    if (error) {
        // Если произошла ошибка, можно показать сообщение или повторно скелетон
        return <div className="skeleton header-skeleton"></div>;
    }

    return (
        <motion.div
            className="header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {userData.avatar_url ? (
                <img src={userData.avatar_url} alt="Avatar" className="avatar" />
            ) : (
                // Если по каким-то причинам avatar_url отсутствует, показываем fallback
                <div className="skeleton header-skeleton">Avatar</div>
            )}
            <p className="bio">{userData.bio || "No bio available"}</p>
        </motion.div>
    );
}

export default Header;