import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import SocialLinks from './components/SocialLinks';
import GitHubCalendarWidget from './components/GitHubCalendarWidget';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
      <div className="app">
          <Header />
          <Contact />
          <SocialLinks />
          <GitHubCalendarWidget />
          <Projects />
      </div>
  );
}

export default App;