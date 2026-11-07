import React, { useEffect, useState } from 'react';
import portrait from '../assets/gideon-henry.png';
import sseraskinImage from '../assets/sseraskin-preview.png';
import helloBotImage from '../assets/hellobot-preview.png';
import biteBuddyImage from '../assets/bitebuddy-preview.png';
import veymontImage from '../assets/veymont-preview.png';

const whatsappUrl =
  'https://wa.me/2349046820198?text=Hi%20Gideon%2C%20I%20saw%20your%20portfolio%20and%20need%20a%20website.';
const emailAddress = 'gideonhenry453@gmail.com';

const projects = [
  {
    name: 'Sseraskin',
    category: 'e-commerce',
    label: 'E-COMMERCE',
    domain: 'sseraskin.webflow.io',
    url: 'https://sseraskin.webflow.io/',
    image: sseraskinImage,
    alt: 'Sseraskin skincare store homepage',
    description: 'Soft, clinical, trustworthy. Turns a skeptical shopper into a confident customer.',
    tags: ['Bestsellers + offers', 'Category tiles', 'FAQ'],
  },
  {
    name: 'Veloraskin',
    category: 'e-commerce',
    label: 'E-COMMERCE',
    domain: 'veloraskin.webflow.io',
    url: 'https://veloraskin.webflow.io/',
    description: 'An editorial skincare store with before-and-after proof and video reviews.',
    tags: ['Video testimonials', 'Before-after', 'Category shop'],
  },
  {
    name: 'HelloBot',
    category: 'saas',
    label: 'SAAS',
    domain: 'hellobot-ss.webflow.io',
    url: 'https://hellobot-ss.webflow.io/',
    image: helloBotImage,
    alt: 'HelloBot customer support website homepage',
    description: 'Explains the product in ten seconds, then points visitors to the free trial.',
    tags: ['Product mockup', 'Integrations', 'Social proof'],
  },
  {
    name: 'BiteBuddy',
    category: 'app',
    label: 'APP',
    domain: 'bite-buddy.webflow.io',
    url: 'https://bite-buddy.webflow.io/',
    image: biteBuddyImage,
    alt: 'BiteBuddy food delivery app homepage',
    description: 'Takes a hungry visitor straight to the App Store or Google Play button.',
    tags: ['App mockups', 'How it works', 'Download CTAs'],
  },
  {
    name: 'Veymont',
    category: 'real-estate',
    label: 'REAL ESTATE',
    domain: 'veymont.webflow.io',
    url: 'https://veymont.webflow.io/',
    image: veymontImage,
    alt: 'Veymont real estate website homepage',
    description: 'Listings, agents, and a clear buying process built to turn browsers into viewings.',
    tags: ['Property listings', 'Agent profiles', 'Process steps'],
  },
  {
    name: 'Algorix',
    category: 'saas',
    label: 'SAAS / AGENCY',
    domain: 'algorix-ttm.webflow.io',
    url: 'https://algorix-ttm.webflow.io/',
    description: 'A services-first layout with a clear process, case studies, and pricing tiers.',
    tags: ['Services', 'Case studies', 'Pricing'],
  },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'e-commerce', label: 'E-commerce' },
  { id: 'saas', label: 'SaaS' },
  { id: 'app', label: 'App' },
  { id: 'real-estate', label: 'Real estate' },
];

const packages = [
  {
    name: 'Starter',
    number: '01',
    price: '$100',
    summary: 'A focused one-page landing site built to get the message across.',
    features: ['1-page landing site', 'Brand colors, fonts, copy + images', 'Mobile-ready', '3-day delivery', '2 revisions'],
  },
  {
    name: 'Business',
    number: '02',
    price: '$350',
    summary: 'Everything you need for a polished, multi-page business site.',
    features: ['Up to 5 pages', 'Everything in Starter', 'Contact form + basic SEO setup', 'Speed check', '7-day delivery', '3 revisions'],
    featured: true,
  },
  {
    name: 'Store / Pro',
    number: '03',
    price: '$700',
    summary: 'A store or CMS site with the essentials connected and ready to grow.',
    features: ['E-commerce or CMS site', 'Up to 20 products or posts', 'Everything in Business', 'Payments connected + handover video', '12–14 day delivery', '4 revisions'],
  },
];

const changeItems = [
  ['Aa', 'Brand colors', 'and fonts'],
  ['✎', 'Your copy', 'and images'],
  ['↔', 'Mobile', 'and speed'],
  ['⌕', 'Basic SEO', 'setup'],
  ['⌘', 'Forms and CMS', 'connected'],
  ['↗', 'Handover', 'walkthrough'],
];

const steps = [
  ['Pick a layout', 'Choose the starting point that fits your business.'],
  ['Send your brand and content', 'Your colors, words, images, and must-haves.'],
  ['Get a draft in 72 hours', 'See your brand take shape on the page.'],
  ['Revisions, then launch', 'We tighten the details and put your site live.'],
];

function ArrowIcon({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 8.5c.3-.5.6-.5.9-.5.2 0 .4 0 .5.4l.7 1.5c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .7.6 1 1.4 1.8 2.4 2.3.3.2.5.2.7-.1l.7-.8c.2-.2.4-.3.7-.2l1.4.7c.3.2.4.3.4.5 0 .3-.2 1.1-.6 1.4-.4.4-1.1.7-1.8.6-1-.1-2.2-.6-3.4-1.5-1.8-1.3-3-3-3.3-4-.4-1.1-.1-1.8.2-2.3.3-.4.7-.7 1.1-.7Z" fill="currentColor" />
    </svg>
  );
}

function SectionLabel({ number, children }) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

function WindowBar({ domain }) {
  return (
    <div className="window-bar" aria-hidden="true">
      <span />
      <span />
      <span />
      <small>{domain}</small>
    </div>
  );
}

function ProjectPreview({ project, index }) {
  if (project.image) {
    return (
      <img
        className="project-image"
        src={project.image}
        alt={project.alt}
        loading="lazy"
      />
    );
  }

  if (project.name === 'Veloraskin') {
    return (
      <div className="velora-preview" aria-hidden="true">
        <div className="velora-copy">
          <span>VELORA / SKINCARE</span>
          <strong>Results you<br />can feel.</strong>
          <small>YOUR ROUTINE, REIMAGINED</small>
        </div>
        <span className="velora-stamp">BEFORE&nbsp; / &nbsp;AFTER</span>
      </div>
    );
  }

  return (
    <div className="algorix-preview" aria-hidden="true">
      <div className="algorix-top"><span /> algorix / preview <span>_ □ ×</span></div>
      <div className="algorix-copy">
        <small>&gt; DIGITAL PARTNER FOR WHAT&apos;S NEXT</small>
        <strong>Ideas into<br /><em>impact.</em></strong>
        <i />
        <span>EXPLORE SERVICES&nbsp; ↗</span>
      </div>
      <div className="algorix-bottom"><span>01 / STRATEGY</span><span>02 / DESIGN</span><span>03 / BUILD</span></div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card reveal">
      <WindowBar domain={project.domain} />
      <a
        className={`project-visual project-visual-${project.category}`}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name} live preview`}
      >
        <ProjectPreview project={project} index={index} />
        <span className="visual-caption">{project.image ? 'SITE PREVIEW' : 'LAYOUT PREVIEW'} / 0{index + 1}</span>
        <span className="preview-overlay"><span>View project</span><ArrowIcon /></span>
      </a>
      <div className="project-info">
        <div className="project-title">
          <div>
            <span className="project-category">{project.label}</span>
            <h3>{project.name}</h3>
          </div>
          <a className="project-arrow" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} live preview`}>
            <ArrowIcon />
          </a>
        </div>
        <p>{project.description}</p>
        <ul className="tag-list">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">
          Live preview <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

function PackageCard({ item }) {
  const message = encodeURIComponent(`Hi Gideon, I want the ${item.name} package.`);

  return (
    <article className={`package-card reveal${item.featured ? ' package-featured' : ''}`}>
      {item.featured && <span className="most-picked">MOST PICKED</span>}
      <WindowBar domain={`package / ${item.name.toLowerCase().replaceAll(' ', '-')}`} />
      <div className="package-content">
        <p className="package-name"><span>{item.name.toUpperCase()}</span><span>{item.number}</span></p>
        <p className="package-price">{item.price}<span> / project</span></p>
        <p className="package-summary">{item.summary}</p>
        <ul className="package-features">
          {item.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
        <a
          className={`button ${item.featured ? 'button-primary' : 'button-outline'} package-cta`}
          href={`https://wa.me/2349046820198?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Choose {item.name} <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const visibleProjects = projects.filter((project) => activeFilter === 'all' || project.category === activeFilter);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!('IntersectionObserver' in window) || motionPreference.matches) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
    const showAllForReducedMotion = (event) => {
      if (event.matches) {
        revealItems.forEach((item) => item.classList.add('is-visible'));
        observer.disconnect();
      }
    };

    motionPreference.addEventListener?.('change', showAllForReducedMotion);
    return () => {
      observer.disconnect();
      motionPreference.removeEventListener?.('change', showAllForReducedMotion);
    };
  }, [activeFilter]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyStatus('Email copied.');
    } catch (error) {
      setCopyStatus('Copy unavailable. Select the email address to copy it.');
      console.error('Could not copy the email address.', error);
    }
    window.setTimeout(() => setCopyStatus(''), 3000);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <nav className="nav container mx-auto flex items-center justify-between" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="Gideon Henry home">
            <span className="wordmark-mark">GH</span>
            <span>GIDEON HENRY</span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <div className={`nav-links${menuOpen ? ' is-open' : ''}`} id="nav-links">
            {[
              ['Work', '#work'],
              ['Packages', '#packages'],
              ['Process', '#process'],
              ['About', '#about'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="button button-small button-primary nav-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Let&apos;s talk <ArrowIcon />
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero container mx-auto grid grid-cols-1 items-center md:grid-cols-[1.1fr_0.9fr]" id="top" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="availability-dot" /> INDEPENDENT WEB DESIGNER <span className="eyebrow-divider">/</span> NIGERIA</p>
            <h1 id="hero-title">A better website.<br />A <span className="gradient-text">faster launch.</span></h1>
            <p className="hero-description">
              I build conversion-focused websites for brands tired of slow freelancers
              and pages that don&apos;t sell. Your first draft in 72 hours.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="button button-glass" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Chat on WhatsApp <ArrowIcon />
              </a>
            </div>
            <div className="hero-proof">
              <span className="proof-line" />
              <p>Clear scope. Direct communication.<br /><strong>No disappearing act.</strong></p>
            </div>
            <a className="hero-scroll" href="#work"><span /> SCROLL TO EXPLORE</a>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-glow" />
            <div className="portrait-frame">
              <img src={portrait} alt="Portrait of Gideon Henry" width="768" height="1024" fetchPriority="high" />
              <div className="portrait-shade" />
              <span className="portrait-index">GH—01</span>
              <div className="portrait-caption"><span className="availability-dot" /><span>GIDEON HENRY</span><small>AVAILABLE FOR PROJECTS</small></div>
            </div>
            <div className="float-card float-card-top"><span className="float-card-icon">✳</span><span><small>BUILT WITH INTENTION</small><strong>Thoughtful by design</strong></span></div>
            <div className="float-card float-card-bottom"><span className="float-card-icon float-card-icon-check">↗</span><span><small>YOUR FIRST DRAFT</small><strong>In 72 hours</strong></span></div>
            <span className="visual-coordinate">06°27&apos;N&nbsp; 03°24&apos;E</span>
          </div>
        </section>

        <div className="ticker" aria-label="Services">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div className="ticker-group" key={copy} aria-hidden={copy === 1}>
                {['WEB DESIGN', 'E-COMMERCE', 'LANDING PAGES', 'SAAS', 'REAL ESTATE', 'APP SITES'].map((service) => (
                  <span className="ticker-item" key={service}>{service}<i>✳</i></span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="section container" id="work" aria-labelledby="work-title">
          <div className="section-heading reveal flex items-end justify-between gap-10">
            <div>
              <SectionLabel number="01">SELECTED WORK</SectionLabel>
              <h2 id="work-title">Starting points.<br /><span className="gradient-text">Made your own.</span></h2>
            </div>
            <p className="section-intro">
              Browse proven layouts. Pick one and I&apos;ll rebrand it, rewrite it, and launch it for you.
              Every project opens as a live preview.
            </p>
          </div>

          <div className="filter-row flex flex-wrap" role="group" aria-label="Filter projects">
            {filters.map((filter) => {
              const count = filter.id === 'all'
                ? projects.length
                : projects.filter((project) => project.category === filter.id).length;
              return (
                <button
                  className={`filter-chip${activeFilter === filter.id ? ' is-active' : ''}`}
                  type="button"
                  key={filter.id}
                  aria-pressed={activeFilter === filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}<span>{String(count).padStart(2, '0')}</span>
                </button>
              );
            })}
          </div>
          <p className="sr-only" aria-live="polite">{visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'} shown.</p>

          <div className="project-grid grid grid-cols-1 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <ProjectCard project={project} index={projects.indexOf(project)} key={project.name} />
            ))}
          </div>
          <p className="work-footnote reveal"><span>NOTE /</span> Layouts shown are starting points. Your site gets your brand, your copy, and your images.</p>
        </section>

        <section className="change-section" aria-labelledby="change-title">
          <div className="container">
            <div className="section-heading section-heading-compact reveal flex items-end justify-between gap-10">
              <div>
                <SectionLabel number="02">YOUR VERSION</SectionLabel>
                <h2 id="change-title">A starting point,<br /><span className="gradient-text">not a template.</span></h2>
              </div>
              <p className="section-intro">Every detail is shaped around your business, your audience, and what you need the site to do.</p>
            </div>
            <ul className="change-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {changeItems.map(([icon, first, second]) => (
                <li className="change-item reveal" key={first}>
                  <span className="change-icon" aria-hidden="true">{icon}</span>
                  <span>{first}<br /><strong>{second}</strong></span>
                  <span className="change-index">0{changeItems.findIndex((item) => item[1] === first) + 1}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section container packages-section" id="packages" aria-labelledby="packages-title">
          <div className="section-heading reveal flex items-end justify-between gap-10">
            <div>
              <SectionLabel number="03">THE INVESTMENT</SectionLabel>
              <h2 id="packages-title">Clear scope.<br /><span className="gradient-text">No surprises.</span></h2>
            </div>
            <p className="section-intro">Straightforward pricing, a clear finish line, and no surprise add-ons. Pick the scope that fits.</p>
          </div>
          <div className="package-grid grid grid-cols-1 lg:grid-cols-3">
            {packages.map((item) => <PackageCard item={item} key={item.number} />)}
          </div>
          <p className="addons reveal"><span>OPTIONAL EXTRAS /</span> Extra page $40 <i>·</i> Rush 24–48h $50–80 <i>·</i> Copywriting $60–100 <i>·</i> Logo or brand kit $50–80 <i>·</i> 30-day support $50</p>
        </section>

        <section className="process-section" id="process" aria-labelledby="process-title">
          <div className="container process-layout mx-auto grid items-start">
            <div className="process-intro reveal">
              <SectionLabel number="04">NO MYSTERY</SectionLabel>
              <h2 id="process-title">From first message<br />to <span className="gradient-text">live website.</span></h2>
              <p>Four simple steps from “I need a site” to “it&apos;s live.” No guesswork, no disappearing acts.</p>
              <a className="text-link" href="#contact">Start a conversation <ArrowIcon /></a>
            </div>
            <ol className="process-list">
              {steps.map(([title, detail], index) => (
                <li className="reveal" key={title}>
                  <span className="process-number">0{index + 1}</span>
                  <span><strong>{title}</strong><small>{detail}</small></span>
                  <ArrowIcon className="process-arrow" />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section container about-section mx-auto grid items-center" id="about" aria-labelledby="about-title">
          <div className="about-image reveal">
            <div className="about-image-glow" />
            <img src={portrait} alt="Gideon Henry, freelance web designer" width="768" height="1024" loading="lazy" />
            <span>THE PERSON BEHIND THE PIXELS</span>
            <small>GH / LAGOS, NG</small>
          </div>
          <div className="about-copy reveal">
            <SectionLabel number="05">A QUICK INTRO</SectionLabel>
            <h2 id="about-title">A real person.<br /><span className="gradient-text">A direct line.</span></h2>
            <p>I&apos;m Gideon Henry, a freelance web designer with 3 years of experience. I build websites alongside AI creative work and Telegram bots.</p>
            <p>You work directly with me, from the first message to launch. No layers of handoffs, no jargon—just a clear plan and a site made for your brand.</p>
            <div className="about-signoff"><span className="signoff-rule" /><span>GIDEON HENRY <small>DESIGNER &amp; BUILDER</small></span></div>
            <a className="text-link" href="#contact">Let&apos;s talk about your site <ArrowIcon /></a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-backdrop" />
          <div className="container contact-inner">
            <div className="contact-heading reveal">
              <SectionLabel number="06">YOUR NEXT MOVE</SectionLabel>
              <h2 id="contact-title">Let&apos;s make<br /><span className="gradient-text">something work.</span></h2>
              <p>Tell me what you sell and which layout you like. I&apos;ll help you find the right package and give you a start date.</p>
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Start a conversation <ArrowIcon />
              </a>
            </div>
            <div className="contact-grid mx-auto grid grid-cols-1 md:grid-cols-2">
              <article className="contact-card reveal">
                <div className="contact-card-top"><WhatsAppIcon /><span>FASTEST REPLY</span></div>
                <h3>WhatsApp</h3>
                <p>Usually the quickest way to reach me.</p>
                <a className="contact-value" href="https://wa.me/2349046820198" target="_blank" rel="noopener noreferrer">
                  +234 904 682 0198 <ArrowIcon />
                </a>
              </article>
              <article className="contact-card reveal">
                <div className="contact-card-top"><span className="email-icon">✉</span><span>ALSO WORKS</span></div>
                <h3>Email</h3>
                <p id="email-address">{emailAddress}</p>
                <div className="email-actions">
                  <a className="text-link" href={`mailto:${emailAddress}`}>Send an email <ArrowIcon /></a>
                  <button className="copy-button" type="button" onClick={copyEmail}>Copy <span aria-hidden="true">⧉</span></button>
                </div>
                <span className="copy-status" aria-live="polite">{copyStatus}</span>
              </article>
            </div>
            <p className="payment-note">PAYMENT / 50% TO START, 50% ON APPROVAL OF THE DRAFT.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="wordmark" href="#top" aria-label="Back to top"><span className="wordmark-mark">GH</span><span>GIDEON HENRY</span></a>
          <p>GOOD WORK. GOOD PEOPLE. <span>© {new Date().getFullYear()}</span></p>
          <a href="#top" className="back-to-top">BACK TO TOP <span>↑</span></a>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Message Gideon on WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  );
}

export default App;
