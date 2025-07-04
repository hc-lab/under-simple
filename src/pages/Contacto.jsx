import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/contact.css';

const Contacto = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-page">
      <div className="contact-container simplified">
        <div className="contact-info-container">
          <h2>{t('contact.infoTitle')}</h2>
          <ul className="contact-info-list">
            <li className="contact-info-item">
              <div className="contact-info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div className="contact-info-text">
                <h3>{t('contact.addressTitle')}</h3>
                <p>{t('contact.addressText')}</p>
              </div>
            </li>
            <li className="contact-info-item">
              <div className="contact-info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="contact-info-text">
                <h3>{t('contact.emailTitle')}</h3>
                <p>{t('contact.emailText')}</p>
              </div>
            </li>
            <li className="contact-info-item">
              <div className="contact-info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div className="contact-info-text">
                <h3>{t('contact.phoneTitle')}</h3>
                <p>{t('contact.phoneText')}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
