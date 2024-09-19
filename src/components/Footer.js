import React from 'react';
import '../styles/Footer.scss';
import { FaGithub, FaTelegram, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <motion.div
        className="social-links"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <a href="https://github.com/darkwideweb" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://t.me/darkwidewebs" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FaTelegram />
        </a>
        <a href="https://instagram.com/darkwideweb" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
        dangerouslySetInnerHTML={{ __html: t('footerText') }}
      />
    </footer>
  );
};

export default Footer;
