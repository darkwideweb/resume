import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiTool, FiBook, FiMail } from 'react-icons/fi';
import Flag from 'react-world-flags';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.scss';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // Функция для переключения языка
  const handleChangeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" className="navbar__logo-img" />
      </div>
      <ul className="navbar__links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/"><FiHome /> {t('home')}</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about"><FiUser /> {t('about')}</Link>
        </li>
        <li className={location.pathname === '/skills' ? 'active' : ''}>
          <Link to="/skills"><FiTool /> {t('skills')}</Link>
        </li>
        <li className={location.pathname === '/projects' ? 'active' : ''}>
          <Link to="/projects"><FiBriefcase /> {t('projects')}</Link>
        </li>
        <li className={location.pathname === '/education' ? 'active' : ''}>
          <Link to="/education"><FiBook /> {t('education')}</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact"><FiMail /> {t('contact')}</Link>
        </li>
      </ul>
      <div className="navbar__language">
        <button
          onClick={handleChangeLanguage}
          aria-label={`Switch to ${i18n.language === 'en' ? 'Русский' : 'English'}`}
          className="language-toggle"
        >
          <Flag code={i18n.language === 'en' ? 'GB' : 'RU'} alt="Language Flag" style={{ width: 24, height: 16 }} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
