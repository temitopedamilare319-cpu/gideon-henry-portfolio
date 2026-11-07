import React, { useEffect, useMemo, useRef, useState } from 'react';

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const easeInOut = (value) => {
  const progress = clamp(value);
  return progress * progress * (3 - 2 * progress);
};

function ArrowIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4.5 10h10.75M10 4.75 15.25 10 10 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Wheel({ className = '' }) {
  return (
    <g className={`aeron-wheel ${className}`}>
      <circle r="69" fill="#11130f" stroke="#c4ff7b" strokeOpacity=".78" strokeWidth="3" />
      <circle r="57" fill="#1c2119" stroke="#f4f4e9" strokeOpacity=".22" strokeWidth="1.5" />
      <circle r="41" fill="#11130f" stroke="#c4ff7b" strokeOpacity=".65" strokeWidth="2" />
      <circle r="14" fill="#c4ff7b" />
      <g stroke="#d7ddc9" strokeOpacity=".7" strokeWidth="3">
        <path d="M0-38v24m0 28v24M38 0H14m-28 0h-24M27-27 10-10m-20 20-17 17m54 0L10 10m-20-20-17-17" />
      </g>
      <circle r="6" fill="#11130f" />
    </g>
  );
}

function CarIllustration({ refs }) {
  return (
    <svg className="aeron-car-art" viewBox="0 0 1200 560" role="img" aria-labelledby="car-title car-description">
      <title id="car-title">Aeron S1 electric grand tourer concept</title>
      <desc id="car-description">A lime-accented electric coupe separates into its body panels, cabin, battery, suspension, and wheels as you scroll.</desc>
      <defs>
        <linearGradient id="aeron-body-paint" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f4f6e8" />
          <stop offset=".33" stopColor="#c4ff7b" />
          <stop offset=".67" stopColor="#81b84d" />
          <stop offset="1" stopColor="#d7f0b5" />
        </linearGradient>
        <linearGradient id="aeron-glass" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#b5d5c7" stopOpacity=".92" />
          <stop offset=".48" stopColor="#38453c" stopOpacity=".9" />
          <stop offset="1" stopColor="#101410" />
        </linearGradient>
        <linearGradient id="aeron-battery" x1="0" x2="1">
          <stop offset="0" stopColor="#adb5a5" />
          <stop offset=".5" stopColor="#e3e7d6" />
          <stop offset="1" stopColor="#879180" />
        </linearGradient>
        <filter id="aeron-shadow" x="-30%" y="-80%" width="160%" height="260%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>
      <ellipse cx="600" cy="433" rx="480" ry="30" fill="#000" opacity=".48" filter="url(#aeron-shadow)" />

      <g ref={refs.rearWheel} transform="translate(955 358)">
        <Wheel />
      </g>
      <g ref={refs.frontWheel} transform="translate(248 358)">
        <Wheel />
      </g>

      <g ref={refs.chassis} className="aeron-part">
        <path d="M214 345q20-22 52-24h652q47 2 65 34l-22 49H222z" fill="#20261f" stroke="#d7ddc9" strokeOpacity=".63" strokeWidth="2" />
        <path d="M276 373h614l-15 17H290z" fill="#090b09" />
        <path d="M320 391h503" stroke="#c4ff7b" strokeOpacity=".72" strokeWidth="3" />
        <path d="M340 333h465" stroke="#fff" strokeOpacity=".17" strokeWidth="2" />
      </g>

      <g ref={refs.battery} className="aeron-part">
        <path d="M407 350h384l-18 50H425z" fill="url(#aeron-battery)" stroke="#eff4e7" strokeOpacity=".8" strokeWidth="2" />
        <path d="M439 360h319m-331 11h343m-348 11h341m-338 11h324" stroke="#31382f" strokeOpacity=".7" strokeWidth="3" />
        <path d="M473 352v47m47-47v47m47-47v47m47-47v47m47-47v47m47-47v47" stroke="#596053" strokeOpacity=".56" strokeWidth="2" />
      </g>

      <g ref={refs.suspension} className="aeron-part" fill="none" stroke="#c4ff7b" strokeWidth="5">
        <path d="m246 358 38-42 38 42m-76 0 42 39 34-39m596 0-43-42-40 42m83 0-42 39-41-39" />
        <path d="M284 312v87m671-87v87" stroke="#eff4e7" strokeOpacity=".52" strokeWidth="8" />
      </g>

      <g ref={refs.rearBody} className="aeron-part">
        <path d="M791 269q63 7 110 46l64 12q38 8 65 34l31 26-9 24h-89q6-19 6-37a54 54 0 0 0-108 0q0 20 11 37H790z" fill="url(#aeron-body-paint)" stroke="#f7ffe8" strokeOpacity=".8" strokeWidth="2" />
        <path d="M964 322q28 4 52 22l-5 15h-45z" fill="#f3f4e6" />
        <path d="m1060 357 25 7 18 17-44-2z" fill="#f4eee0" />
        <path d="M851 288q53 9 89 35" fill="none" stroke="#fff" strokeOpacity=".64" strokeWidth="3" />
      </g>

      <g ref={refs.doorRear} className="aeron-part">
        <path d="m605 273 179-4 18 94H603z" fill="url(#aeron-body-paint)" stroke="#f7ffe8" strokeOpacity=".7" strokeWidth="2" />
        <path d="m625 282 139-3 9 52-148 4z" fill="url(#aeron-glass)" />
        <path d="m789 292 6 69m-17-67h16m-17 65h20" stroke="#384033" strokeWidth="2" />
        <path d="m748 322 17-1" stroke="#11130f" strokeWidth="4" strokeLinecap="round" />
        <path d="M612 347h165" stroke="#fff" strokeOpacity=".37" strokeWidth="2" />
      </g>

      <g ref={refs.doorFront} className="aeron-part">
        <path d="m389 271 218 2 1 91H384z" fill="url(#aeron-body-paint)" stroke="#f7ffe8" strokeOpacity=".72" strokeWidth="2" />
        <path d="m418 281 173 1 1 50-180-1z" fill="url(#aeron-glass)" />
        <path d="m407 280-13 82m197-80 8 80m-192-35h190" fill="none" stroke="#384033" strokeWidth="2" />
        <path d="m553 321 21 1" stroke="#11130f" strokeWidth="4" strokeLinecap="round" />
        <path d="M396 349h205" stroke="#fff" strokeOpacity=".38" strokeWidth="2" />
      </g>

      <g ref={refs.frontBody} className="aeron-part">
        <path d="M102 357q22-38 76-47l120-20q43-14 79-19l27 91h-84q7-19 7-39a54 54 0 0 0-108 0q0 22 12 39h-97z" fill="url(#aeron-body-paint)" stroke="#f7ffe8" strokeOpacity=".86" strokeWidth="2" />
        <path d="M109 354q8-30 41-42l76-15-6 28q-48 17-46 56h-68z" fill="#d8e6c6" stroke="#fff" strokeOpacity=".42" strokeWidth="2" />
        <path d="M117 331q45-19 85-24m100-11 35-13 20 67" fill="none" stroke="#fff" strokeOpacity=".62" strokeWidth="3" />
        <path d="m110 347 42-7-10 15h-34" fill="#faf8e9" />
        <path d="m99 365 25 8-7 12H91z" fill="#242b20" />
      </g>

      <g ref={refs.cabin} className="aeron-part">
        <path d="m340 290 58-92q16-24 47-27h225q32 1 57 29l66 91-27 17H366z" fill="url(#aeron-body-paint)" stroke="#f7ffe8" strokeOpacity=".8" strokeWidth="2" />
        <path d="m415 202q11-17 33-18h74v87H369z" fill="url(#aeron-glass)" stroke="#e9f2df" strokeOpacity=".4" strokeWidth="2" />
        <path d="m539 184h128q22 0 40 20l59 67H539z" fill="url(#aeron-glass)" stroke="#e9f2df" strokeOpacity=".42" strokeWidth="2" />
        <path d="m529 184-2 87m-133-80-32 78m273-77 49 76" fill="none" stroke="#f0f3e7" strokeOpacity=".56" strokeWidth="5" />
        <path d="M419 192q87-19 232-3" fill="none" stroke="#fff" strokeOpacity=".66" strokeWidth="3" />
        <path d="M383 283h386" stroke="#fff" strokeOpacity=".55" strokeWidth="2" />
      </g>

      <g ref={refs.hood} className="aeron-part">
        <path d="m109 354 14-35q16-18 57-22l158-20 39 18-30 80H173z" fill="url(#aeron-body-paint)" stroke="#f7ffe8" strokeOpacity=".78" strokeWidth="2" />
        <path d="m131 326 207-37m-173 50 176-36" fill="none" stroke="#fff" strokeOpacity=".58" strokeWidth="3" />
        <path d="M102 354h69" stroke="#f7ffe8" strokeWidth="6" strokeLinecap="round" />
      </g>

      <g ref={refs.wing} className="aeron-part">
        <path d="m796 269 45-12 93 9 42 17-4 10-177-4z" fill="#d2e8bf" stroke="#f7ffe8" strokeOpacity=".7" strokeWidth="2" />
        <path d="m813 263 116 5" stroke="#fff" strokeWidth="3" strokeOpacity=".7" />
      </g>

      <path d="M210 417h690" stroke="#c4ff7b" strokeOpacity=".24" strokeWidth="1" strokeDasharray="5 9" />
    </svg>
  );
}

function CarExperience() {
  const storyRef = useRef(null);
  const stageRef = useRef(null);
  const vehicleRef = useRef(null);
  const carSceneRef = useRef(null);
  const overlayRef = useRef(null);
  const labelsRef = useRef(null);
  const progressRef = useRef(null);
  const frameRef = useRef(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const lastTimeRef = useRef(0);
  const partRefs = useRef({});
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('aeron-body');
    return () => document.body.classList.remove('aeron-body');
  }, []);

  useEffect(() => {
    const story = storyRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let active = true;

    if (!story) return undefined;

    const parts = {
      frontBody: partRefs.current.frontBody,
      hood: partRefs.current.hood,
      cabin: partRefs.current.cabin,
      doorFront: partRefs.current.doorFront,
      doorRear: partRefs.current.doorRear,
      rearBody: partRefs.current.rearBody,
      wing: partRefs.current.wing,
      chassis: partRefs.current.chassis,
      battery: partRefs.current.battery,
      suspension: partRefs.current.suspension,
      frontWheel: partRefs.current.frontWheel,
      rearWheel: partRefs.current.rearWheel,
    };

    const readProgress = () => {
      const bounds = story.getBoundingClientRect();
      const travel = Math.max(1, story.offsetHeight - window.innerHeight);
      targetProgressRef.current = clamp(-bounds.top / travel);
    };

    const renderFrame = (time) => {
      frameRef.current = 0;
      if (!active) return;

      const delta = lastTimeRef.current ? Math.min(64, time - lastTimeRef.current) : 16;
      lastTimeRef.current = time;
      const current = currentProgressRef.current;
      const target = targetProgressRef.current;
      const next = reducedMotion.matches
        ? target
        : current + (target - current) * (1 - Math.exp(-delta / 74));
      currentProgressRef.current = Math.abs(target - next) < 0.0008 ? target : next;

      const scrollProgress = currentProgressRef.current;
      const travel = 1 - easeInOut(scrollProgress / 0.24);
      const separation = easeInOut((scrollProgress - 0.28) / 0.45);
      const wheelTurn = scrollProgress * 1200;

      if (carSceneRef.current) {
        const x = window.innerWidth < 640 ? 7 : 12;
        carSceneRef.current.style.transform = `translate3d(${travel * x}vw, ${separation * -3}vh, 0)`;
      }

      if (parts.frontBody) parts.frontBody.style.transform = `translate3d(${-separation * 9}%, ${-separation * 10}%, ${separation * 30}px) rotate(${-separation * 4}deg)`;
      if (parts.hood) parts.hood.style.transform = `translate3d(${-separation * 7}%, ${-separation * 18}%, ${separation * 46}px) rotate(${-separation * 7}deg)`;
      if (parts.cabin) parts.cabin.style.transform = `translate3d(${separation * 1.2}%, ${-separation * 29}%, ${separation * 80}px) rotate(${separation * 2}deg)`;
      if (parts.doorFront) parts.doorFront.style.transform = `translate3d(${-separation * 8}%, ${separation * 17}%, ${separation * 30}px) rotate(${-separation * 8}deg)`;
      if (parts.doorRear) parts.doorRear.style.transform = `translate3d(${separation * 8}%, ${separation * 13}%, ${separation * 30}px) rotate(${separation * 8}deg)`;
      if (parts.rearBody) parts.rearBody.style.transform = `translate3d(${separation * 9}%, ${-separation * 10}%, ${separation * 32}px) rotate(${separation * 4}deg)`;
      if (parts.wing) parts.wing.style.transform = `translate3d(${separation * 20}%, ${-separation * 34}%, ${separation * 55}px) rotate(${separation * 13}deg)`;
      if (parts.chassis) parts.chassis.style.transform = `translate3d(0, ${separation * 28}%, ${separation * -10}px)`;
      if (parts.battery) parts.battery.style.transform = `translate3d(0, ${separation * 76}%, ${separation * 100}px) rotateX(${separation * 10}deg)`;
      if (parts.suspension) parts.suspension.style.transform = `translate3d(0, ${separation * 42}%, ${separation * 70}px)`;
      if (parts.frontWheel) {
        parts.frontWheel.style.transform = `translate3d(${-separation * 35}%, ${separation * 42}%, ${separation * 70}px) rotate(${wheelTurn}deg)`;
      }
      if (parts.rearWheel) {
        parts.rearWheel.style.transform = `translate3d(${separation * 35}%, ${separation * 42}%, ${separation * 70}px) rotate(${wheelTurn}deg)`;
      }

      const assembled = 1 - clamp((scrollProgress - 0.24) / 0.2);
      const exploded = clamp((scrollProgress - 0.48) / 0.17);
      if (overlayRef.current) {
        overlayRef.current.style.setProperty('--intro-opacity', String(assembled));
        overlayRef.current.style.setProperty('--exploded-opacity', String(exploded));
      }
      if (labelsRef.current) labelsRef.current.style.opacity = String(clamp((scrollProgress - 0.4) / 0.16));
      if (progressRef.current) {
        progressRef.current.style.setProperty('--scroll-progress', String(scrollProgress));
        progressRef.current.setAttribute('aria-valuenow', String(Math.round(scrollProgress * 100)));
      }

      if (!reducedMotion.matches && Math.abs(target - scrollProgress) > 0.0008) {
        frameRef.current = window.requestAnimationFrame(renderFrame);
      }
    };

    const scheduleFrame = () => {
      if (!frameRef.current) frameRef.current = window.requestAnimationFrame(renderFrame);
    };
    const onScroll = () => {
      readProgress();
      scheduleFrame();
    };
    const onResize = () => {
      readProgress();
      scheduleFrame();
    };

    readProgress();
    scheduleFrame();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      active = false;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const refs = useMemo(() => ({
    frontBody: (element) => { partRefs.current.frontBody = element; },
    hood: (element) => { partRefs.current.hood = element; },
    cabin: (element) => { partRefs.current.cabin = element; },
    doorFront: (element) => { partRefs.current.doorFront = element; },
    doorRear: (element) => { partRefs.current.doorRear = element; },
    rearBody: (element) => { partRefs.current.rearBody = element; },
    wing: (element) => { partRefs.current.wing = element; },
    chassis: (element) => { partRefs.current.chassis = element; },
    battery: (element) => { partRefs.current.battery = element; },
    suspension: (element) => { partRefs.current.suspension = element; },
    frontWheel: (element) => { partRefs.current.frontWheel = element; },
    rearWheel: (element) => { partRefs.current.rearWheel = element; },
  }), []);

  return (
    <main className="aeron-page">
      <a className="aeron-skip-link" href="#aeron-specs">Skip to vehicle details</a>
      <section className="aeron-story" ref={storyRef} id="aeron-story" aria-label="Scroll-driven Aeron S1 design study">
        <div className="aeron-stage" ref={stageRef}>
          <div className="aeron-stage-grid" aria-hidden="true" />
          <header className="aeron-header">
            <a className="aeron-wordmark" href="#aeron-story" aria-label="Aeron concept home"><span className="aeron-mark">A</span> AERON</a>
            <span className="aeron-model-label">DESIGN STUDY / S1</span>
            <nav className="aeron-nav" aria-label="Aeron navigation">
              <a href="#aeron-specs">THE CONCEPT</a>
              <a href="#aeron-specs">ENGINEERING</a>
              <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen}>{menuOpen ? 'CLOSE' : 'MENU'} <span>{menuOpen ? '−' : '+'}</span></button>
              {menuOpen && (
                <div className="aeron-menu">
                  <a href="#aeron-story" onClick={() => setMenuOpen(false)}>THE REVEAL</a>
                  <a href="#aeron-specs" onClick={() => setMenuOpen(false)}>SPECIFICATIONS</a>
                  <a href="#aeron-contact" onClick={() => setMenuOpen(false)}>GET IN TOUCH</a>
                </div>
              )}
            </nav>
          </header>

          <div className="aeron-story-copy" ref={overlayRef}>
            <div className="aeron-intro-copy">
              <p className="aeron-eyebrow"><span /> ELECTRIC GRAND TOURER / 01</p>
              <h1>Form<br /><em>in motion.</em></h1>
              <p className="aeron-intro-note">Meet the next direction.<br />An electric study in moving with intent.</p>
              <a className="aeron-hero-link" href="#aeron-specs">DISCOVER THE STUDY <ArrowIcon /></a>
            </div>
            <div className="aeron-exploded-copy">
              <p className="aeron-eyebrow"><span /> ENGINEERED TO THE LAST LINE</p>
              <h2>Nothing<br />is <em>extra.</em></h2>
              <p>Every layer earns its place.<br />Every detail moves you forward.</p>
            </div>
          </div>

          <div className="aeron-car-scene" ref={carSceneRef}>
            <div className="aeron-car-glow" aria-hidden="true" />
            <div className="aeron-vehicle" ref={vehicleRef}>
              <CarIllustration refs={refs} />
            </div>
            <div className="aeron-callouts" ref={labelsRef} aria-hidden="true">
              <div className="aeron-callout aeron-callout-battery"><span>01</span><i /><strong>STRUCTURAL BATTERY</strong></div>
              <div className="aeron-callout aeron-callout-cabin"><span>02</span><i /><strong>LIGHTWEIGHT CABIN</strong></div>
              <div className="aeron-callout aeron-callout-drive"><span>03</span><i /><strong>DUAL MOTOR DRIVE</strong></div>
              <div className="aeron-callout aeron-callout-chassis"><span>04</span><i /><strong>ADAPTIVE CHASSIS</strong></div>
            </div>
          </div>

          <div className="aeron-stage-meta">
            <div className="aeron-scroll-prompt">
              <span className="aeron-scroll-indicator" />
              <span className="aeron-intro-prompt">SCROLL TO MEET THE S1</span>
              <span className="aeron-exploded-prompt">SCROLL TO SEPARATE · SCROLL UP TO REBUILD</span>
            </div>
            <span className="aeron-meta-center">ONE FORM. A THOUSAND CONSIDERED DETAILS.</span>
            <div className="aeron-stage-spec"><strong>640</strong><span>KM RANGE / CONCEPT</span></div>
          </div>
          <div className="aeron-progress-track" role="progressbar" aria-label="Vehicle reveal progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" ref={progressRef}>
            <span />
          </div>
          <span className="aeron-disclaimer">FICTIONAL VEHICLE CONCEPT · PERFORMANCE FIGURES ARE DESIGN STUDY ESTIMATES</span>
        </div>
      </section>

      <section className="aeron-specs" id="aeron-specs">
        <div className="aeron-section-topline"><span>01 — A DIFFERENT KIND OF DRIVE</span><span>DESIGNED TO FEEL SIMPLE.</span></div>
        <div className="aeron-specs-heading">
          <h2>Made for the<br /><em>long way around.</em></h2>
          <p>Quietly quick. Carefully considered. The S1 is a fictional electric grand tourer concept built around one idea: the best technology is the kind that disappears into the drive.</p>
        </div>
        <div className="aeron-spec-grid">
          <article><span>01 / RANGE</span><strong>640 <small>km</small></strong><p>A full day out, without planning around a plug.</p></article>
          <article><span>02 / 0—100 km/h</span><strong>3.2 <small>sec</small></strong><p>Immediate response, delivered with composure.</p></article>
          <article><span>03 / POWER</span><strong>480 <small>kW</small></strong><p>All-wheel drive, tuned for the road ahead.</p></article>
        </div>
      </section>

      <section className="aeron-design" id="aeron-contact">
        <div className="aeron-design-orbit" aria-hidden="true"><span /><span /><span /></div>
        <span className="aeron-eyebrow"><span /> 02 — THE PRINCIPLE</span>
        <h2>Precision<br />without <em>the noise.</em></h2>
        <p>One line from front to rear. A cabin shaped by light. An electric platform that gives every component room to work.</p>
        <a className="aeron-design-link" href="/#contact">DISCUSS A PROJECT <ArrowIcon /></a>
        <span className="aeron-design-foot">A FICTIONAL AUTOMOTIVE DESIGN STUDY · BUILT FOR THE PORTFOLIO</span>
      </section>

      <footer className="aeron-footer">
        <a className="aeron-wordmark" href="#aeron-story"><span className="aeron-mark">A</span> AERON</a>
        <span>INDEPENDENT DESIGN STUDY · 2026</span>
        <a href="#aeron-story">BACK TO THE TOP ↑</a>
      </footer>
    </main>
  );
}

export default CarExperience;
