import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../styles/Home.scss';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className="matrix">
        {Array.from({ length: 30 }).map((_, index) => (
          <span key={index} style={{ left: `${(index % 6) * 16.66}%`, animationDuration: `${Math.random() * 4 + 3}s` }}>
            {Math.random() > 0.5 ? '1' : '0'}
          </span>
        ))}
      </div>

      <motion.div
        className="home__content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <motion.div
          className="home__console"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 2, ease: 'easeInOut' }}
        >
          <code>
            <Typewriter
              words={[t('homeConsole')]}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </code>
        </motion.div>
        <motion.h1
          className="home__title"
          initial={{ opacity: 0, x: '-100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1.5, type: 'spring' }}
        >
          {t('welcome')}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1.5, type: 'spring' }}
        >
          {t('name')}
        </motion.h2>
        <motion.h3
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          transition={{ delay: 1.5, duration: 1.5, type: 'spring' }}
        >
          {t('portfolio')}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {t('intro')}
        </motion.p>
        <Link to="/about">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#21a1f1' }}
            whileTap={{ scale: 0.9 }}
            className="home__button"
          >
            {t('moreAboutMe')}
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
