import React, { useEffect, useRef, useState } from 'react';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85',
    alt: 'Glossy manicure in a warm studio light',
    title: 'Sunday best',
    detail: 'Gel set · Aura',
  },
  {
    src: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1000&q=85',
    alt: 'Close-up of polished nails with a clean finish',
    title: 'Soft launch',
    detail: 'Structured gel · Nude',
  },
  {
    src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=85',
    alt: 'Expressive nail design with colorful details',
    title: 'Little details',
    detail: 'Custom art · Chrome',
  },
  {
    src: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1000&q=85&sat=-35',
    alt: 'Neutral manicure idea for everyday wear',
    title: 'Barely there',
    detail: 'The clean set · Sheer',
  },
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85&sat=25',
    alt: 'Vibrant manicure detail with vivid polish',
    title: 'Main character',
    detail: 'Gel set · Pop',
  },
  {
    src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=85&sat=-20',
    alt: 'Artistic manicure with delicate nail details',
    title: 'After hours',
    detail: 'Custom art · Details',
  },
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85&fit=crop&crop=faces',
    alt: 'Manicure close-up with a glossy finish',
    title: 'Good energy',
    detail: 'Gel set · Gloss',
  },
  {
    src: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1000&q=85&sat=40',
    alt: 'Colorful nail polish look for a weekend set',
    title: 'No small plans',
    detail: 'Custom art · Color',
  },
  {
    src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=85&sat=15',
    alt: 'A detailed manicure from the Cuticle Club gallery',
    title: 'The good set',
    detail: 'Gel set · Studio pick',
  },
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85&sat=-15',
    alt: 'Nail art inspiration from the Cuticle Club gallery',
    title: 'One more look',
    detail: 'Custom art · Your call',
  },
];

const services = [
  ['The clean set', 'A tidy manicure, thoughtful cuticle care, your choice of finish.', '₦12,000', '45 MIN'],
  ['Gel, but better', 'A long-wear gel manicure with a high-gloss, feel-good finish.', '₦18,000', '75 MIN'],
  ['The art appointment', 'A custom set designed around your mood, saved refs, or big idea.', '₦28,000+', '100 MIN'],
];

const neonPalettes = [
  { tubes: ['#f967fb', '#53bc28', '#6958d5'], lights: ['#83f36e', '#fe8a2e', '#ff008a', '#60aed5'] },
  { tubes: ['#ff6fae', '#ffd36e', '#9877ff'], lights: ['#ffb0cb', '#ff9c5b', '#a88bff', '#e7dcff'] },
  { tubes: ['#ff755c', '#f7cb76', '#ec77bd'], lights: ['#ffb28e', '#ffdc88', '#f36f8c', '#ffd2ec'] },
  { tubes: ['#4ed9c1', '#a1e071', '#f9bd70'], lights: ['#75f5d2', '#c4f98b', '#ffb17a', '#70d4f6'] },
];

const columnsForWidth = (width) => (width < 640 ? 2 : width < 1024 ? 3 : 4);

function ArrowIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4.5 10h10.75M10 4.75 15.25 10 10 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlowerMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M22 4.5c2.3 8.3 4.8 10.8 17.5 17.5C26.8 28.7 24.3 31.2 22 39.5 19.7 31.2 17.2 28.7 4.5 22 17.2 15.3 19.7 12.8 22 4.5Z" fill="currentColor" />
      <circle cx="22" cy="22" r="3" fill="#17100d" />
    </svg>
  );
}

function buildRows(count, columns) {
  const rows = [];
  let photoIndex = 0;
  let rowIndex = 0;

  while (photoIndex < count) {
    const row = Array(columns).fill(null);
    const primaryColumn = (rowIndex * 2 + (rowIndex % 2)) % columns;
    row[primaryColumn] = photoIndex;
    photoIndex += 1;

    if (rowIndex % 3 === 0 && photoIndex < count) {
      const secondColumn = (primaryColumn + 2) % columns;
      row[secondColumn === primaryColumn ? (primaryColumn + 1) % columns : secondColumn] = photoIndex;
      photoIndex += 1;
    }

    rows.push(row);
    rowIndex += 1;
  }

  return rows;
}

function BookingDialog({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    dialog.showModal();
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };
    dialog.addEventListener('cancel', closeOnEscape);
    return () => {
      dialog.removeEventListener('cancel', closeOnEscape);
      if (dialog.open) dialog.close();
    };
  }, [onClose]);

  return (
    <dialog
      className="nail-booking-dialog"
      ref={dialogRef}
      aria-labelledby="booking-title"
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="nail-dialog-panel">
        <button className="nail-dialog-close" type="button" aria-label="Close booking dialog" onClick={onClose}>×</button>
        {submitted ? (
          <div className="nail-booking-success">
            <FlowerMark />
            <p className="nail-eyebrow">DEMO REQUEST</p>
            <h2 id="booking-title">That&apos;s a<br /><em>good choice.</em></h2>
            <p>This is a website demo, so your request hasn&apos;t been sent to a real salon.</p>
            <button className="nail-button nail-button-dark" type="button" onClick={onClose}>Back to the studio <ArrowIcon /></button>
          </div>
        ) : (
          <>
            <p className="nail-eyebrow">YOUR NEXT GOOD SET</p>
            <h2 id="booking-title">Let&apos;s get<br /><em>you booked.</em></h2>
            <p className="nail-dialog-note">Pick your service and leave your details. This demo form won&apos;t send or store anything.</p>
            <form
              className="nail-booking-form"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <label>
                YOUR NAME
                <input name="name" autoComplete="name" placeholder="How should we call you?" required />
              </label>
              <label>
                PHONE NUMBER
                <input name="phone" type="tel" autoComplete="tel" placeholder="+234" required />
              </label>
              <label>
                THE VIBE
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Choose your appointment</option>
                  {services.map(([name, , price]) => <option value={name} key={name}>{name} · {price}</option>)}
                </select>
              </label>
              <button className="nail-button nail-button-dark" type="submit">Request a spot <ArrowIcon /></button>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}

function NailStudio() {
  const [rows, setRows] = useState(() => buildRows(photos.length, columnsForWidth(window.innerWidth)));
  const [bookingOpen, setBookingOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tubesReady, setTubesReady] = useState(false);
  const [paletteAnnouncement, setPaletteAnnouncement] = useState('Click to shift the studio colors');
  const cursorRef = useRef(null);
  const heroCanvasRef = useRef(null);
  const tubesCanvasRef = useRef(null);
  const tubesRef = useRef(null);
  const colorPromptRef = useRef(null);
  const panelRef = useRef(null);
  const panelWrapRef = useRef(null);
  const overlayRef = useRef(null);
  const outroInfoRef = useRef(null);
  const footerRef = useRef(null);
  const scrollSpacerRef = useRef(null);
  const cardRefs = useRef([]);
  const frameRef = useRef(0);
  const latestPointerRef = useRef(typeof window === 'undefined' ? 0 : window.innerWidth / 2);
  const activePaletteRef = useRef(0);
  const metricsRef = useRef({ vh: 0, maxScroll: 0, cardTops: [], cardHeights: [], columns: 0 });
  const bookingButtonRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('nail-body');
    return () => document.body.classList.remove('nail-body');
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reveals = document.querySelectorAll('.nail-reveal');

    if (!('IntersectionObserver' in window) || motionPreference.matches) {
      reveals.forEach((element) => element.classList.add('is-visible'));
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
    reveals.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let mounted = true;
    let app;
    const canvas = tubesCanvasRef.current;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!canvas || motionPreference.matches) return undefined;

    const initializeTubes = async () => {
      try {
        const { default: Tubes1Cursor } = await import('threejs-components/build/cursors/tubes1.min.js');
        if (!mounted) return;

        app = Tubes1Cursor(canvas, {
          bloom: { threshold: 0, strength: 1.15, radius: 0.35 },
          tubes: {
            count: window.innerWidth < 640 ? 7 : 12,
            colors: neonPalettes[0].tubes,
            minRadius: 0.008,
            maxRadius: 0.04,
            minTubularSegments: 24,
            maxTubularSegments: window.innerWidth < 640 ? 48 : 72,
            material: { metalness: 0.8, roughness: 0.3 },
            lights: { intensity: 140, colors: neonPalettes[0].lights },
            lerp: 0.38,
            noise: 0.035,
          },
        });
        tubesRef.current = app;
        setTubesReady(true);
      } catch (error) {
        console.error('Could not initialize the nail studio 3D background.', error);
      }
    };

    initializeTubes();
    return () => {
      mounted = false;
      app?.dispose();
      tubesRef.current = null;
    };
  }, []);

  useEffect(() => {
    const measure = () => {
      const vh = window.innerHeight;
      const columns = columnsForWidth(window.innerWidth);
      const cards = cardRefs.current.filter(Boolean);
      const cardTops = cards.map((card) => {
        let top = 0;
        let node = card;
        while (node && node !== panelWrapRef.current) {
          top += node.offsetTop;
          node = node.offsetParent;
        }
        return top;
      });
      const cardHeights = cards.map((card) => card.offsetHeight);
      const maxScroll = Math.max(0, (panelWrapRef.current?.scrollHeight ?? 0) - vh);

      metricsRef.current = { vh, columns, cardTops, cardHeights, maxScroll };
      if (scrollSpacerRef.current) {
        scrollSpacerRef.current.style.height = `${vh + maxScroll + 2 * vh}px`;
      }
      cards.forEach((card) => {
        const column = Number(card.dataset.column || 0);
        card.style.transformOrigin = column < columns / 2 ? 'right bottom' : 'left bottom';
      });
      scheduleFrame();
    };

    const scheduleFrame = () => {
      if (!frameRef.current) frameRef.current = window.requestAnimationFrame(updateFrame);
    };

    const updateFrame = () => {
      frameRef.current = 0;
      const { vh, maxScroll, cardTops, cardHeights } = metricsRef.current;
      if (!vh || !panelRef.current || !panelWrapRef.current) return;

      const scrollY = window.scrollY;
      const panelOffset = Math.max(0, vh - scrollY);
      const phaseTwo = Math.min(Math.max(0, scrollY - vh), maxScroll);
      panelRef.current.style.transform = `translate3d(0, ${panelOffset}px, 0)`;
      panelWrapRef.current.style.transform = `translate3d(0, ${-phaseTwo}px, 0)`;

      cardRefs.current.forEach((card, index) => {
        if (!card || cardTops[index] === undefined) return;
        const top = cardTops[index] - phaseTwo + panelOffset;
        const bottom = top + cardHeights[index];
        if (bottom <= 0 || top >= vh) {
          card.style.transform = 'scale(0)';
          return;
        }
        const enter = Math.min(1, Math.max(0, (vh - top) / (vh * 0.6)));
        const exit = Math.min(1, Math.max(0, bottom / (vh * 0.4)));
        card.style.transform = `scale(${Math.min(enter, exit)})`;
      });

      if (heroCanvasRef.current) heroCanvasRef.current.style.visibility = scrollY >= vh ? 'hidden' : 'visible';
      if (colorPromptRef.current) {
        colorPromptRef.current.style.opacity = String(Math.max(0, 1 - scrollY / vh));
        colorPromptRef.current.style.pointerEvents = scrollY < vh ? 'auto' : 'none';
        colorPromptRef.current.tabIndex = scrollY < vh ? 0 : -1;
      }
      const outroProgress = Math.min(1, Math.max(0, (scrollY - vh - maxScroll) / Math.max(1, vh - 100)));
      if (overlayRef.current) overlayRef.current.style.opacity = String(outroProgress);
      if (outroInfoRef.current) outroInfoRef.current.style.transform = `translateY(${-outroProgress * (window.innerWidth < 640 ? 110 : 150)}px)`;
      if (footerRef.current) footerRef.current.style.opacity = String(outroProgress);
      if (bookingButtonRef.current) {
        bookingButtonRef.current.style.transform = `scale(${outroProgress})`;
        bookingButtonRef.current.style.pointerEvents = outroProgress > 0.85 ? 'auto' : 'none';
        bookingButtonRef.current.tabIndex = outroProgress > 0.85 ? 0 : -1;
      }

      const width = window.innerWidth;
      const cursorX = Math.max(0, Math.min(width, latestPointerRef.current));
      if (cursorRef.current && window.innerWidth >= 640) {
        cursorRef.current.style.left = `${cursorX}px`;
      }
    };

    const onScroll = () => scheduleFrame();
    const onPointerMove = (event) => {
      latestPointerRef.current = event.clientX;
      if (cursorRef.current) cursorRef.current.style.top = `${event.clientY}px`;
      scheduleFrame();
    };
    const onResize = () => {
      setRows(buildRows(photos.length, columnsForWidth(window.innerWidth)));
      measure();
    };

    const resizeObserver = new ResizeObserver(measure);
    if (panelWrapRef.current) resizeObserver.observe(panelWrapRef.current);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('load', measure);
    measure();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', measure);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    };
  }, []);

  const openBooking = () => {
    setMenuOpen(false);
    setBookingOpen(true);
  };
  const closeBooking = () => setBookingOpen(false);
  const randomizePalette = () => {
    let paletteIndex = Math.floor(Math.random() * neonPalettes.length);
    while (paletteIndex === activePaletteRef.current) {
      paletteIndex = Math.floor(Math.random() * neonPalettes.length);
    }

    const palette = neonPalettes[paletteIndex];
    const tubes = tubesRef.current?.tubes;

    if (!tubes) return;

    tubes.setColors(palette.tubes);
    tubes.setLightsColors(palette.lights);
    activePaletteRef.current = paletteIndex;
    setPaletteAnnouncement(`Studio palette ${paletteIndex + 1} of ${neonPalettes.length}`);
  };
  const handlePageClick = (event) => {
    if (window.scrollY >= window.innerHeight || !tubesRef.current) return;
    if (event.target instanceof Element && event.target.closest('a, button, input, select, textarea, dialog')) return;
    randomizePalette();
  };

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="nail-skip-link" href="#nail-main">Skip to content</a>
      <main className={`nail-page${tubesReady ? ' nail-tubes-ready' : ''}`} id="nail-main" tabIndex="-1" onClick={handlePageClick}>
      <h1 className="nail-sr-only">Cuticle Club — nail art, with a point of view</h1>

      <div className="nail-hero-canvas" ref={heroCanvasRef} aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=2200&q=90"
          alt=""
          fetchPriority="high"
        />
        <canvas className="nail-tubes-canvas" ref={tubesCanvasRef} />
        <div className="nail-hero-wash" />
      </div>
      <div className="nail-cursor" ref={cursorRef} aria-hidden="true"><FlowerMark /></div>
      <button
        className="nail-color-prompt"
        ref={colorPromptRef}
        type="button"
        tabIndex="-1"
        onClick={randomizePalette}
        aria-label="Change the neon background colors"
      >
        <span aria-hidden="true">✳</span>
        <span aria-live="polite">{paletteAnnouncement}</span>
      </button>

      <header className="nail-fixed-header">
        <a className="nail-wordmark nail-reveal" href="#nail-main" aria-label="Cuticle Club home">
          CUTICLE<span>CLUB</span><sup>®</sup>
        </a>
        <div className="nail-caption nail-reveal">
          <span className="nail-caption-kicker">NAIL ART, WITH A POINT OF VIEW.</span>
          <p>Good hands.<br />Great plans.</p>
          <span className="nail-caption-foot">INDEPENDENT NAIL STUDIO · LAGOS, NG</span>
        </div>
        <nav className="nail-nav nail-reveal" aria-label="Studio navigation">
          <a className="nail-about-link" href="#studio">THE STUDIO</a>
          <button className="nail-menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close studio menu' : 'Open studio menu'} onClick={() => setMenuOpen((open) => !open)}>
            <span />
            <span />
          </button>
          <button className="nail-nav-book" type="button" onClick={openBooking}>[ BOOK ]</button>
          {menuOpen && (
            <div className="nail-menu-popover">
              <a href="#work" onClick={() => setMenuOpen(false)}>THE WORK</a>
              <a href="#services" onClick={() => setMenuOpen(false)}>SERVICES</a>
              <a href="#studio" onClick={() => setMenuOpen(false)}>THE STUDIO</a>
              <button type="button" onClick={openBooking}>BOOK A SET <ArrowIcon /></button>
            </div>
          )}
        </nav>
      </header>

      <div className="nail-outro-info" ref={outroInfoRef}>
        <div className="nail-info-top">
          <span className="nail-seal"><FlowerMark /></span>
          <span>NAIL ART, BUT<br /><em>MAKE IT PERSONAL.</em></span>
        </div>
        <span className="nail-info-price">FROM ₦12K</span>
      </div>
      <button className="nail-outro-book" type="button" tabIndex="-1" ref={bookingButtonRef} onClick={openBooking}>
        <span>book a set <ArrowIcon /></span>
      </button>
      <div className="nail-outro-overlay" ref={overlayRef} aria-hidden="true" />
      <footer className="nail-outro-footer" ref={footerRef} aria-hidden="true">
        <span>CUTICLE CLUB® · LAGOS</span>
        <span>GOOD NAILS. GOOD MOOD.</span>
      </footer>

      <div className="nail-scroll-spacer" ref={scrollSpacerRef} aria-hidden="true" />
      <section className="nail-gallery-panel" ref={panelRef} aria-label="Nail art gallery">
        <div className="nail-gallery-wrap" ref={panelWrapRef}>
          <div className="nail-gallery-heading nail-reveal">
            <span>CC—001 / CURRENT MOOD</span>
            <h2>Hands in<br /><em>their element.</em></h2>
            <span>MADE IN THE STUDIO · WORN EVERYWHERE</span>
          </div>
          <div className="nail-gallery-grid" id="work">
            {rows.map((row, rowIndex) => (
              <div className="nail-gallery-row" key={`row-${rowIndex}`}>
                {row.map((photoIndex, columnIndex) => (
                  <div className="nail-gallery-cell" key={`cell-${rowIndex}-${columnIndex}`}>
                    {photoIndex !== null && (
                      <article
                        className="nail-photo-card"
                        data-column={columnIndex}
                        key={photos[photoIndex].title}
                        ref={(element) => { cardRefs.current[photoIndex] = element; }}
                      >
                        <img src={photos[photoIndex].src} alt={photos[photoIndex].alt} loading="lazy" draggable="false" />
                        <div className="nail-photo-overlay">
                          <span>{photos[photoIndex].detail}</span>
                          <strong>{photos[photoIndex].title}</strong>
                          <button type="button" onClick={openBooking} aria-label={`Book a set inspired by ${photos[photoIndex].title}`}><ArrowIcon /></button>
                        </div>
                        <span className="nail-photo-index">{String(photoIndex + 1).padStart(2, '0')} / 10</span>
                      </article>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <section className="nail-services" id="services">
            <div className="nail-services-heading nail-reveal">
              <span>CC—002 / PICK YOUR ENERGY</span>
              <h2>A good set<br /><em>starts here.</em></h2>
            </div>
            <div className="nail-service-list">
              {services.map(([name, detail, price, duration], index) => (
                <article className="nail-service-card nail-reveal" key={name}>
                  <span className="nail-service-index">0{index + 1}</span>
                  <div><h3>{name}</h3><p>{detail}</p></div>
                  <span className="nail-service-time">{duration}</span>
                  <strong className="nail-service-price">{price}</strong>
                  <button type="button" onClick={openBooking} aria-label={`Book ${name}`}><ArrowIcon /></button>
                </article>
              ))}
            </div>
          </section>
          <section className="nail-studio-note nail-reveal" id="studio">
            <span>CC—003 / YOUR LITTLE RESET</span>
            <p>Come for the nails.<br /><em>Leave feeling like yourself again.</em></p>
            <div className="nail-location">
              <FlowerMark />
              <span>THE STUDIO<small>LAGOS, NIGERIA · BY APPOINTMENT</small></span>
            </div>
            <button className="nail-button nail-button-light" type="button" onClick={openBooking}>Find your next set <ArrowIcon /></button>
            <span className="nail-demo-note">
              A CONCEPT WEBSITE DEMO · FICTIONAL STUDIO · 3D CONCEPT BY{' '}
              <a href="https://www.framer.com/@kevin-levron/" target="_blank" rel="noreferrer">KEVIN LEVRON</a>
            </span>
          </section>
        </div>
      </section>

      {bookingOpen && <BookingDialog onClose={closeBooking} />}
      </main>
    </>
  );
}

export default NailStudio;
