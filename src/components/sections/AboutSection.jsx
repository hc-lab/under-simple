import React from 'react';
import { useTranslation } from 'react-i18next';

const aboutImage = '/img/Operaciones mineras/(2).jpeg';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="nosotros" className="mining-about">
      <div className="mining-about-container">
        <div className="mining-about-content">
          <h2>{t('aboutSection.title')}</h2>
          <p>{t('aboutSection.paragraph1')}</p>
          <p>{t('aboutSection.paragraph2')}</p>
          <p>{t('aboutSection.paragraph3')}</p>
          <div className="mining-stats">
            <div className="mining-stat-item">
              <div className="mining-stat-number">17+</div>
              <div className="mining-stat-label">{t('aboutSection.stat1')}</div>
            </div>
            <div className="mining-stat-item">
              <div className="mining-stat-number">3 MIL+</div>
              <div className="mining-stat-label">{t('aboutSection.stat2')}</div>
            </div>
            <div className="mining-stat-item">
              <div className="mining-stat-number">230 MIL+</div>
              <div className="mining-stat-label">{t('aboutSection.stat3')}</div>
            </div>
          </div>
        </div>
        <div className="mining-about-image">
          <img src={aboutImage} alt="Operaciones mineras" />
          <div className="image-caption">
            <h3>{t('aboutSection.teamCaption')}</h3>
            <div className="caption-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
