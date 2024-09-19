import React from 'react';
import '../styles/Skills.scss';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGit, FaSass, FaBootstrap, FaNpm, FaNodeJs, FaYarn, FaUserFriends, FaLightbulb, FaRegClock } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiTailwindcss, SiWebpack, SiStyledcomponents } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const skills = [
  { icon: <FaHtml5 aria-label="HTML5" />, name: 'HTML5', color: '#e34f26', type: 'tech' },
  { icon: <FaCss3Alt aria-label="CSS3" />, name: 'CSS3', color: '#1572b6', type: 'tech' },
  { icon: <FaJs aria-label="JavaScript" />, name: 'JavaScript', color: '#f7df1e', type: 'tech' },
  { icon: <SiTypescript aria-label="TypeScript" />, name: 'TypeScript', color: '#007acc', type: 'tech' },
  { icon: <FaReact aria-label="React" />, name: 'React', color: '#61dafb', type: 'tech' },
  { icon: <SiRedux aria-label="Redux" />, name: 'Redux', color: '#764abc', type: 'tech' },
  { icon: <FaSass aria-label="Sass" />, name: 'Sass', color: '#cc6699', type: 'tech' },
  { icon: <SiWebpack aria-label="Webpack" />, name: 'Webpack', color: '#8ed6fb', type: 'tech' },
  { icon: <FaGit aria-label="Git" />, name: 'Git', color: '#f05032', type: 'tech' },
  { icon: <FaNpm aria-label="NPM" />, name: 'NPM', color: '#cb3837', type: 'tech' },
  { icon: <FaYarn aria-label="Yarn" />, name: 'Yarn', color: '#2c8ebb', type: 'tech' },
  { icon: <FaNodeJs aria-label="Node.js" />, name: 'Node.js', color: '#68a063', type: 'tech' },
  { icon: <SiStyledcomponents aria-label="Styled Components" />, name: 'Styled Components', color: '#db7093', type: 'tech' },
  { icon: <FaBootstrap aria-label="Bootstrap" />, name: 'Bootstrap', color: '#563d7c', type: 'tech' },
  { icon: <SiTailwindcss aria-label="Tailwind CSS" />, name: 'Tailwind CSS', color: '#38b2ac', type: 'tech' },
  { icon: <FaUserFriends aria-label="Communication" />, name: 'Communication', color: '#4a90e2', type: 'soft' },
  { icon: <FaUserFriends aria-label="Teamwork" />, name: 'Teamwork', color: '#50e3c2', type: 'soft' },
  { icon: <FaLightbulb aria-label="Creativity" />, name: 'Creativity', color: '#f5a623', type: 'soft' },
  { icon: <FaRegClock aria-label="Time Management" />, name: 'Time Management', color: '#e94e77', type: 'soft' },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t('Skills')}
      </motion.h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <motion.div
            className={`skill-card ${skill.type}`}
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 150, delay: index * 0.05 }}
            style={{ borderColor: skill.color }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
