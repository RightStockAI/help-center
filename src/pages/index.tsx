import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      {/* Animated background blobs */}
      <div className={styles.backgroundBlobs}>
        <div className={styles.blobBlue}></div>
        <div className={styles.blobPurple}></div>
      </div>

      <div className="container">
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeIcon}>✨</span>
          India's #1 AI Stock Analysis Platform
        </div>

        {/* Main Heading */}
        <h1 className={styles.heroTitle}>
          📊 AI-Powered Stock Analysis for{' '}
          <span className={styles.gradient}>Indian Markets</span>
        </h1>

        {/* Subtitle */}
        <p className={styles.heroSubtitle}>
          Comprehensive documentation for <strong>NSE, BSE, NIFTY 50</strong> & <strong>Sensex</strong> analysis.
          <br />
          Learn traditional & AI-powered analysis methods with portfolio management.
        </p>

        {/* Buttons */}
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/getting-started/account-setup">
            🚀 Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://www.rightstockai.com">
            📱 Launch App
          </Link>
        </div>

        {/* Trust badges */}
        <div className={styles.trustBadges}>
          <div className={styles.trustItem}>
            <span>🇮🇳</span> Made for Indian Investors
          </div>
          <div className={styles.trustItem}>
            <span>🤖</span> AI-Powered Insights
          </div>
          <div className={styles.trustItem}>
            <span>🆓</span> Always Free Plan
          </div>
          <div className={styles.trustItem}>
            <span>⭐</span> 90%+ Accuracy
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span>Explore Documentation</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    emoji: '🚀',
    title: 'Getting Started',
    description: 'Create your account and explore the RightStockAI dashboard in 5 minutes.',
    link: '/getting-started/account-setup',
  },
  {
    emoji: '📊',
    title: 'Stock Analysis',
    description: 'Learn traditional and AI-powered stock analysis methods for NSE & BSE stocks.',
    link: '/features/stock-analysis',
  },
  {
    emoji: '🤖',
    title: 'AI Analysis',
    description: 'Discover advanced LSTM algorithms and 56+ financial metrics with confidence scoring.',
    link: '/features/ai-analysis',
  },
  {
    emoji: '💼',
    title: 'Portfolio Management',
    description: 'Track investments, analyze performance, and optimize portfolios with AI recommendations.',
    link: '/features/portfolio-management',
  },
  {
    emoji: '📈',
    title: 'Market Overview',
    description: 'Stay updated with NIFTY 50, Sensex, sectoral indices, and market trends.',
    link: '/features/market-overview',
  },
  {
    emoji: '🔌',
    title: 'API Access',
    description: 'Enterprise-grade API for programmatic access (Premium plan).',
    link: '/api/overview',
  },
];

function Feature({emoji, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureEmoji}>{emoji}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className={styles.featureLink} to={link}>
          Learn more →
        </Link>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>✨ Platform Features</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStart() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <h2 className={styles.sectionTitle}>🎯 Popular Documentation</h2>
        <div className={styles.quickStartGrid}>
          <div className={styles.quickStartCard}>
            <h3>📘 Getting Started</h3>
            <ul>
              <li><Link to="/getting-started/account-setup">Creating Your Account</Link></li>
              <li><Link to="/getting-started/dashboard">Dashboard Overview</Link></li>
              <li><Link to="/getting-started/first-analysis">Your First Analysis</Link></li>
              <li><Link to="/subscription/plans">Pricing Plans</Link></li>
            </ul>
          </div>
          
          <div className={styles.quickStartCard}>
            <h3>✨ Core Features</h3>
            <ul>
              <li><Link to="/features/stock-analysis">Stock Analysis Guide</Link></li>
              <li><Link to="/features/ai-analysis">AI Analysis Explained</Link></li>
              <li><Link to="/features/portfolio-management">Portfolio Management</Link></li>
              <li><Link to="/features/market-overview">Market Overview</Link></li>
            </ul>
          </div>
          
          <div className={styles.quickStartCard}>
            <h3>❓ Help & Resources</h3>
            <ul>
              <li><Link to="/help/faq">Frequently Asked Questions</Link></li>
              <li><Link to="/help/troubleshooting">Troubleshooting Guide</Link></li>
              <li><Link to="/learning/understanding-ai/how-ai-works">How AI Works</Link></li>
              <li><a href="mailto:support@rightstockai.com">Contact Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className={styles.ctaBanner}>
      <div className="container">
        <h2>Ready to analyze stocks with AI? 🚀</h2>
        <p>Join thousands of Indian investors making smarter decisions with AI-powered analysis.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="https://www.rightstockai.com/signup">
            Start 14-Day Free Trial
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/subscription/plans">
            View Pricing
          </Link>
        </div>
        <p className={styles.ctaSubtext}>
          ✓ No credit card required · ✓ Full Pro features · ✓ Cancel anytime
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Comprehensive documentation for RightStockAI - AI-powered stock analysis platform for Indian markets (NSE, BSE, NIFTY 50, Sensex)">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickStart />
        <CTABanner />
      </main>
    </Layout>
  );
}
