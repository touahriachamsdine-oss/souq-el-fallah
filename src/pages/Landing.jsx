import React from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import './Landing.css';
import heroImg from '../assets/hero.png';

const Landing = () => {
  const { t } = useApp();

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <img src={heroImg} alt="Algerian Farm" className="hero-bg" />
        <div className="hero-content">
          <h1>{t('home.heroTitle')}</h1>
          <p>{t('home.heroSubtitle')}</p>
          <div className="cta-group">
            <Link to="/products" className="cta-primary">
              {t('home.shopNow')}
            </Link>
            <Link to="/about" className="cta-secondary">
              {t('home.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <span className="stat-number">500+</span>
          <span className="stat-label">{t('home.localFarmers')}</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">100%</span>
          <span className="stat-label">{t('home.freshGuarantee')}</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">24h</span>
          <span className="stat-label">{t('home.fastDelivery')}</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🌿</div>
            <h3>{t('home.organicTitle')}</h3>
            <p>{t('home.organicDesc')}</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🚜</div>
            <h3>{t('home.directFromFarmTitle')}</h3>
            <p>{t('home.directFromFarmDesc')}</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🛡️</div>
            <h3>{t('home.securePaymentTitle')}</h3>
            <p>{t('home.securePaymentDesc')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
