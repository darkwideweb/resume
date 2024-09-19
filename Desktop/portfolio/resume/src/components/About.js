import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import profilePic from '../assets/profile.WebP';
import '../styles/About.scss';

const About = () => {
  const { t } = useTranslation();

  const paragraphs = [
    t('aboutParagraph_1'),
    t('aboutParagraph_2'),
    t('aboutParagraph_3'),
    t('aboutParagraph_4')
  ];

  return (
    <motion.section
      id="aboutTitle"
      className="about-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <motion.h2
            className="about-title"
            whileHover={{ scale: 1.05, color: '#21a1f1' }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t('aboutTitle')}
          </motion.h2>
          
          <Col md={6} className="text-center profile-pic-container">
            <motion.div
              className="interactive-element left"
              whileHover={{ scale: 1.2, rotate: 30 }}
              transition={{ type: 'spring', stiffness: 100 }}
            />

            <Image
              src={profilePic}
              alt={t('profilePhotoAlt')}
              fluid
              className="profile-pic"
            />

            <motion.div
              className="interactive-element right"
              whileHover={{ scale: 1.2, rotate: -30 }}
              transition={{ type: 'spring', stiffness: 100 }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="text-container">
              {paragraphs.map((paragraph, index) => (
                <motion.div
                  className="text-block"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <p className="about-text">
                    {paragraph}
                  </p>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}; 

export default About;
