import React from 'react';
import '../styles/Education.scss';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const educationData = [
  {
    degree: 'degree_1',
    institution: 'institution_1',
    period: 'period_1',
    icon: <FaGraduationCap />,
    type: 'formal',
  },
  {
    degree: 'degree_2',
    institution: 'institution_2',
    period: 'period_2',
    icon: <FaLaptopCode />,
    type: 'self-education',
  },
];

const Education = () => {
  const { t } = useTranslation();

  return (
    <div className="education">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t('educationTitle')}
      </motion.h2>
      <div className="education-list">
        {educationData.map((education, index) => (
          <motion.div 
            className={`education-card ${education.type}`} 
            key={index}
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className="education-icon"
              whileHover={{ scale: 1.3, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              {education.icon}
            </motion.div>
            <div className="education-details">
              <h3>{t(education.degree)}</h3>
              <p>{t(education.institution)}</p>
              <span>{t(education.period)}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
