import React from 'react';
import '../styles/Projects.scss';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import xoImage from '../assets/xo.png';
import reactArchiveImage from '../assets/react.png';
import finImage from '../assets/finass.png';

const projectData = [
  { 
    titleKey: 'crossesNoughts',
    imgSrc: xoImage,
    link: 'https://darling-phoenix-7e6250.netlify.app/',
    descriptionKey: 'crossesNoughtsDesc'
  },
  { 
    titleKey: 'reactArchive',
    imgSrc: reactArchiveImage,
    link: 'https://react-archive-nine.vercel.app/',
    descriptionKey: 'reactArchiveDesc'
  },
  { 
    titleKey: 'finAssistent',
    imgSrc: finImage,
    link: 'https://fin-assistant-inky.vercel.app',
    descriptionKey: 'finAssistentDesc'
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t('projects')}
      </motion.h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <motion.div 
            className="project-card" 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="project-image-wrapper">
              <img src={project.imgSrc} alt={t(project.titleKey)} className="project-image" />
            </div>
            <h3>{t(project.titleKey)}</h3>
            <p>{t(project.descriptionKey)}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
