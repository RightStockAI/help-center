import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroPattern} aria-hidden="true" />

      <div className="container">
        <div className={styles.heroLayout}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              RightStockAI Help Center
            </div>

            <h1 className={styles.heroTitle}>
              Use RightStockAI with confidence.
            </h1>

            <p className={styles.heroSubtitle}>
              Step-by-step help for stock reports, chart patterns, portfolios, AI news,
              plan limits, saved reports, and account support.
            </p>

            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/getting-started/account-setup">
                Set up your account
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/product/tools-and-terms">
                Learn the tools
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="https://www.rightstockai.com/pricing">
                See current pricing
              </Link>
            </div>

            <div className={styles.trustBadges}>
              <span>For Indian market users</span>
              <span>Understand AI results</span>
              <span>Know your plan limits</span>
              <span>Find saved reports</span>
            </div>
          </div>

          <aside className={styles.heroPanel} aria-label="Recommended help topics">
            <div className={styles.panelHeader}>
              <span>Start here</span>
              <strong>Popular guides</strong>
            </div>
            <Link className={styles.panelLink} to="/product/tools-and-terms">
              <span>01</span>
              <div>
                <strong>Tools and terms</strong>
                <p>Understand RightStockAI features in plain English.</p>
              </div>
            </Link>
            <Link className={styles.panelLink} to="/features/smart-ai-analysis">
              <span>02</span>
              <div>
                <strong>Smart AI Analysis</strong>
                <p>Learn how to read technical, AI, and sentiment signals together.</p>
              </div>
            </Link>
            <Link className={styles.panelLink} to="/features/chart-pattern-analysis">
              <span>03</span>
              <div>
                <strong>Chart patterns</strong>
                <p>Use confidence, support, resistance, and invalidation levels correctly.</p>
              </div>
            </Link>
            <div className={styles.panelNote}>
              Plan details can change. Check the current pricing page before you upgrade.
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    label: 'Start',
    title: 'Getting Started',
    description: 'Create an account, understand login options, and learn the dashboard flow.',
    link: '/getting-started/account-setup',
  },
  {
    label: 'Terms',
    title: 'Tools and Terms',
    description: 'Plain-language definitions for tools, reports, plan limits, and market terms.',
    link: '/product/tools-and-terms',
  },
  {
    label: 'AI',
    title: 'Smart AI Analysis',
    description: 'Understand the combined Traditional, AI Predictive, and Sentiment workflow.',
    link: '/features/smart-ai-analysis',
  },
  {
    label: 'Chart',
    title: 'Chart Patterns',
    description: 'Read pattern confidence, key levels, invalidation, previews, and report limits.',
    link: '/features/chart-pattern-analysis',
  },
  {
    label: 'Ideas',
    title: 'Reports and Picks',
    description: 'Separate shared reports, saved reports, history, and Smart AI Picks.',
    link: '/features/research-reports-and-picks',
  },
  {
    label: 'Plans',
    title: 'Plans and Access',
    description: 'Understand previews, locked pages, usage limits, saved reports, and upgrades.',
    link: '/subscription/plans',
  },
];

type FeatureItem = {
  label: string;
  title: string;
  description: string;
  link: string;
};

function Feature({label, title, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureLabel}>{label}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className={styles.featureLink} to={link}>
          Open guide
        </Link>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Help topics</span>
          <h2 className={styles.sectionTitle}>Find the right guide quickly</h2>
          <p className={styles.sectionText}>
            Start with the basics when a term is unclear, then open feature guides for the tool you want to use.
          </p>
        </div>
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
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Common paths</span>
          <h2 className={styles.sectionTitle}>Popular help articles</h2>
        </div>
        <div className={styles.quickStartGrid}>
          <div className={styles.quickStartCard}>
            <h3>New users</h3>
            <ul>
              <li><Link to="/getting-started/account-setup">Creating Your Account</Link></li>
              <li><Link to="/getting-started/dashboard">Dashboard Overview</Link></li>
              <li><Link to="/getting-started/first-analysis">Your First Analysis</Link></li>
              <li><Link to="/subscription/plans">Plans and Access</Link></li>
            </ul>
          </div>
          
          <div className={styles.quickStartCard}>
            <h3>Research tools</h3>
            <ul>
              <li><Link to="/features/basic-ai-analysis">Basic AI Analysis</Link></li>
              <li><Link to="/features/smart-ai-analysis">Smart AI Analysis</Link></li>
              <li><Link to="/features/chart-pattern-analysis">Chart Pattern Analysis</Link></li>
              <li><Link to="/features/portfolio-management">Portfolio Management</Link></li>
            </ul>
          </div>
          
          <div className={styles.quickStartCard}>
            <h3>Support and policies</h3>
            <ul>
              <li><Link to="/help/faq">Frequently Asked Questions</Link></li>
              <li><Link to="/help/troubleshooting">Troubleshooting Guide</Link></li>
              <li><Link to="/product/public-pages-and-policies">Public Pages and Policies</Link></li>
              <li><Link to="https://www.rightstockai.com/contact-us">Contact Support</Link></li>
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
        <span className={styles.ctaEyebrow}>Ready to continue?</span>
        <h2>Open RightStockAI when you are ready to research.</h2>
        <p>Use your account to run analysis, view current pricing, manage your plan, or contact support.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="https://www.rightstockai.com">
            Open RightStockAI
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://www.rightstockai.com/contact-us">
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="RightStockAI Help Center"
      description="User documentation for RightStockAI tools, reports, portfolios, chart patterns, AI news, plans, limits, and public policy pages.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickStart />
        <CTABanner />
      </main>
    </Layout>
  );
}
