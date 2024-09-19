import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.scss';

const Contact = () => {
  const { t } = useTranslation();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [emailSuggestions, setEmailSuggestions] = useState([]);

  const emailDomains = [
    'gmail.com', 'yahoo.com', 'outlook.com', 'mail.ru', 'icloud.com', 'hotmail.com', 'yandex.ru'
  ];

  const initialValues = { name: '', email: '', message: '' };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('contactForm.nameRequired')),
    email: Yup.string().email(t('contactForm.invalidEmail')).required(t('contactForm.emailRequired')),
    message: Yup.string().required(t('contactForm.messageRequired')),
  });

  const handleSubmit = (values, { resetForm }) => {
    setSending(true);

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };

    emailjs.send('service_58sv4cx', 'template_fv8f6fa', templateParams, 'cVSagmjJROzg55lI8')
      .then(() => {
        setSending(false);
        setSent(true);
        setError(null);
        resetForm();
        setEmailSuggestions([]);
        setTimeout(() => setSent(false), 5000);
      })
      .catch((error) => {
        setSending(false);
        setError(error.text || error);
      });
  };

  const handleEmailChange = (e, setFieldValue) => {
    const value = e.target.value;
    setFieldValue('email', value);

    if (value.includes('@')) {
      const [localPart, domainPart] = value.split('@');
      setEmailSuggestions(
        domainPart === ''
          ? emailDomains.map((domain) => `${localPart}@${domain}`)
          : emailDomains
              .filter((domain) => domain.startsWith(domainPart))
              .map((domain) => `${localPart}@${domain}`)
      );
    } else {
      setEmailSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion, setFieldValue) => {
    setFieldValue('email', suggestion);
    setEmailSuggestions([]);
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t('contactForm.title')}
      </motion.h2>
      <div className="contact-form-container">
        {sent && (
          <motion.div
            className="alert success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FaCheckCircle className="alert-icon" /> {t('contactForm.success')}
          </motion.div>
        )}
        {error && (
          <motion.div
            className="alert error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FaExclamationCircle className="alert-icon" /> {t('contactForm.error', { error })}
          </motion.div>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, errors, touched, setFieldValue, values }) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="form-wrapper"
            >
              <form onSubmit={handleSubmit} className="form-custom">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">{t('contactForm.nameLabel')}</label>
                  <div className="input-group">
                    <Field
                      type="text"
                      name="name"
                      placeholder={t('contactForm.placeholderName')}
                      className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                    />
                  </div>
                  {touched.name && errors.name && (
                    <motion.div
                      className="invalid-feedback"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.name}
                    </motion.div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">{t('contactForm.emailLabel')}</label>
                  <div className="input-group">
                    <Field
                      type="email"
                      name="email"
                      placeholder={t('contactForm.placeholderEmail')}
                      value={values.email}
                      onChange={(e) => handleEmailChange(e, setFieldValue)}
                      className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                    />
                  </div>
                  {emailSuggestions.length > 0 && (
                    <ul className="email-suggestions-list">
                      {emailSuggestions.map((suggestion, index) => (
                        <motion.li
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion, setFieldValue)}
                          className="email-suggestion-item"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.1 }}
                        >
                          {suggestion}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                  {touched.email && errors.email && (
                    <motion.div
                      className="invalid-feedback"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.email}
                    </motion.div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">{t('contactForm.messageLabel')}</label>
                  <div className="input-group">
                    <Field
                      as="textarea"
                      name="message"
                      rows={3}
                      placeholder={t('contactForm.placeholderMessage')}
                      className={`form-control ${touched.message && errors.message ? 'is-invalid' : ''}`}
                    />
                  </div>
                  {touched.message && errors.message && (
                    <motion.div
                      className="invalid-feedback"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.message}
                    </motion.div>
                  )}
                </div>
                <button type="submit" className="btn-custom" disabled={sending}>
                  {sending ? <FaPaperPlane className="spinner" /> : <FaPaperPlane />} {sending ? t('contactForm.sending') : t('contactForm.submitButton')}
                </button>
              </form>
            </motion.div>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
