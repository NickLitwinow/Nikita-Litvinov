import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SocialLinks from './components/SocialLinks';
import GitHubCalendarWidget from './components/GitHubCalendarWidget';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        // Обновляем класс у корневого элемента <html>
        document.documentElement.className = theme;
    }, [theme]);

    return (
        // Применяем класс темы к корневому контейнеру
        <div className={`app ${theme}`}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <Header />
            <SocialLinks />
            <Contact />
            <GitHubCalendarWidget />
            <Projects />
            <ScrollToTop />
        </div>
    );
}

export default App;