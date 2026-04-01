<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio — Visual Designer</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@300;400&family=Syne:wght@400;700;800&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0a0a0a;
    --bg2: #111111;
    --surface: #181818;
    --gold: #c9a96e;
    --gold-pale: #e8d5b0;
    --cream: #f5f0e8;
    --mid: #888880;
    --border: rgba(201,169,110,0.18);
    --font-display: 'Cormorant Garant', serif;
    --font-ui: 'Syne', sans-serif;
    --font-mono: 'DM Mono', monospace;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--cream);
    font-family: var(--font-ui);
    overflow-x: hidden;
    cursor: none;
  }

  /* ─── CUSTOM CURSOR ─── */
  #cursor {
    width: 10px; height: 10px;
    background: var(--gold);
    border-radius: 50%;
    position: fixed; top: 0; left: 0;
    pointer-events: none; z-index: 9999;
    transition: transform 0.15s ease, opacity 0.3s;
    transform: translate(-50%, -50%);
  }
  #cursor-ring {
    width: 36px; height: 36px;
    border: 1px solid rgba(201,169,110,0.5);
    border-radius: 50%;
    position: fixed; top: 0; left: 0;
    pointer-events: none; z-index: 9998;
    transform: translate(-50%, -50%);
    transition: all 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
  }
  body:has(a:hover) #cursor-ring,
  body:has(.work-item:hover) #cursor-ring {
    transform: translate(-50%, -50%) scale(2.5);
    background: rgba(201,169,110,0.06);
    border-color: var(--gold);
  }

  /* ─── NOISE OVERLAY ─── */
  body::before {
    content: '';
    position: fixed; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
    opacity: 0.035;
    pointer-events: none; z-index: 9990;
  }

  /* ─── LOADING SCREEN ─── */
  #loader {
    position: fixed; inset: 0;
    background: var(--bg);
    z-index: 9000;
    display: flex; align-items: center; justify-content: center;
    animation: loaderFade 0.6s 1.8s forwards ease;
  }
  #loader-text {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 300;
    letter-spacing: 0.5em;
    color: var(--gold);
    animation: loaderPulse 1.8s ease forwards;
  }
  @keyframes loaderPulse {
    0% { opacity: 0; letter-spacing: 0.8em; }
    40% { opacity: 1; }
    80% { opacity: 1; letter-spacing: 0.5em; }
    100% { opacity: 0; letter-spacing: 0.3em; }
  }
  @keyframes loaderFade {
    to { opacity: 0; pointer-events: none; }
  }

  /* ─── NAV ─── */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 2rem 4rem;
    mix-blend-mode: normal;
    opacity: 0;
    animation: fadeDown 0.8s 2.2s forwards ease;
  }
  nav::after {
    content: '';
    position: absolute; bottom: 0; left: 4rem; right: 4rem;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }
  .nav-logo {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-style: italic;
    color: var(--gold-pale);
    text-decoration: none;
    letter-spacing: 0.05em;
  }
  .nav-links { display: flex; gap: 2.5rem; list-style: none; }
  .nav-links a {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--mid);
    text-decoration: none;
    transition: color 0.3s;
  }
  .nav-links a:hover { color: var(--gold); }

  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ─── HERO ─── */
  #hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 8rem 4rem 4rem;
    gap: 4rem;
    position: relative;
    overflow: hidden;
  }
  .hero-bg-line {
    position: absolute;
    top: 0; bottom: 0;
    left: 50%;
    width: 1px;
    background: linear-gradient(to bottom, transparent, var(--border), transparent);
    pointer-events: none;
  }
  .hero-left { position: relative; }
  .hero-eyebrow {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 2rem;
    opacity: 0;
    animation: fadeUp 0.8s 2.3s forwards ease;
  }
  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(3.5rem, 7vw, 7rem);
    font-weight: 300;
    line-height: 0.95;
    color: var(--cream);
    opacity: 0;
    animation: fadeUp 0.9s 2.4s forwards ease;
  }
  .hero-title em {
    font-style: italic;
    color: var(--gold);
    display: block;
  }
  .hero-sub {
    margin-top: 2.5rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    line-height: 1.8;
    color: var(--mid);
    max-width: 340px;
    opacity: 0;
    animation: fadeUp 0.9s 2.6s forwards ease;
  }
  .hero-cta {
    margin-top: 3rem;
    display: inline-flex; align-items: center; gap: 1rem;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    text-decoration: none;
    opacity: 0;
    animation: fadeUp 0.9s 2.8s forwards ease;
    transition: gap 0.3s;
  }
  .hero-cta:hover { gap: 1.8rem; }
  .hero-cta::after { content: '→'; font-size: 1rem; }

  .hero-right {
    position: relative;
    opacity: 0;
    animation: fadeIn 1.2s 2.5s forwards ease;
  }
  .hero-img-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 4/5;
    overflow: hidden;
  }
  .hero-img-wrap img {
    width: 100%; height: 100%;
    object-fit: cover;
    filter: grayscale(20%) contrast(1.05);
    transition: transform 8s ease, filter 0.5s;
  }
  .hero-img-wrap:hover img { transform: scale(1.04); filter: grayscale(0%) contrast(1.05); }
  .hero-img-frame {
    position: absolute; inset: -12px;
    border: 1px solid var(--border);
    pointer-events: none;
  }
  .hero-img-frame::before, .hero-img-frame::after {
    content: '';
    position: absolute;
    width: 20px; height: 20px;
    border-color: var(--gold);
    border-style: solid;
  }
  .hero-img-frame::before { top: 8px; left: 8px; border-width: 1px 0 0 1px; }
  .hero-img-frame::after { bottom: 8px; right: 8px; border-width: 0 1px 1px 0; }
  .hero-img-caption {
    position: absolute; bottom: -2rem; right: 0;
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--mid);
  }
  .hero-scroll-hint {
    position: absolute; bottom: 3rem; left: 50%;
    transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 0.8rem;
    opacity: 0;
    animation: fadeIn 1s 3.2s forwards ease;
  }
  .hero-scroll-hint span {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--mid);
  }
  .scroll-line {
    width: 1px; height: 40px;
    background: linear-gradient(to bottom, var(--gold), transparent);
    animation: scrollPulse 2s 3s infinite ease;
  }
  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.2); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* ─── SECTION COMMON ─── */
  section { padding: 8rem 4rem; }
  .section-tag {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
    display: flex; align-items: center; gap: 1rem;
  }
  .section-tag::before {
    content: '';
    width: 30px; height: 1px;
    background: var(--gold);
  }
  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 300;
    line-height: 1.05;
    color: var(--cream);
  }
  .section-title em {
    font-style: italic;
    color: var(--gold);
  }

  /* ─── ABOUT ─── */
  #about {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 6rem;
    align-items: start;
    border-top: 1px solid var(--border);
  }
  .about-right { padding-top: 1rem; }
  .about-body {
    font-family: var(--font-display);
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    font-weight: 300;
    line-height: 1.75;
    color: rgba(245,240,232,0.8);
    margin-top: 2rem;
  }
  .about-body strong { color: var(--gold-pale); font-weight: 400; }
  .about-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
    padding-top: 3rem;
    border-top: 1px solid var(--border);
  }
  .stat-num {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 300;
    color: var(--gold);
    line-height: 1;
  }
  .stat-label {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--mid);
    margin-top: 0.5rem;
  }

  /* ─── WORK GRID ─── */
  #work { border-top: 1px solid var(--border); }
  .work-header {
    display: flex; justify-content: space-between; align-items: flex-end;
    margin-bottom: 5rem;
  }
  .work-filter {
    display: flex; gap: 1.5rem; list-style: none;
    align-items: center;
  }
  .work-filter li {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--mid);
    cursor: none;
    transition: color 0.2s;
    padding-bottom: 2px;
    border-bottom: 1px solid transparent;
  }
  .work-filter li.active, .work-filter li:hover {
    color: var(--gold);
    border-color: var(--gold);
  }

  .work-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: 80px;
    gap: 20px;
  }
  .work-item {
    position: relative;
    overflow: hidden;
    cursor: none;
    background: var(--surface);
  }
  .work-item:nth-child(1)  { grid-column: 1 / 8;  grid-row: 1 / 7; }
  .work-item:nth-child(2)  { grid-column: 8 / 13; grid-row: 1 / 5; }
  .work-item:nth-child(3)  { grid-column: 8 / 13; grid-row: 5 / 9; }
  .work-item:nth-child(4)  { grid-column: 1 / 5;  grid-row: 7 / 12; }
  .work-item:nth-child(5)  { grid-column: 5 / 9;  grid-row: 7 / 12; }
  .work-item:nth-child(6)  { grid-column: 9 / 13; grid-row: 9 / 14; }
  .work-item:nth-child(7)  { grid-column: 1 / 6;  grid-row: 12 / 16; }
  .work-item:nth-child(8)  { grid-column: 6 / 9;  grid-row: 12 / 16; }

  .work-item img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.5s;
    filter: grayscale(30%) brightness(0.85);
  }
  .work-item:hover img {
    transform: scale(1.07);
    filter: grayscale(0%) brightness(1);
  }
  .work-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
    display: flex; align-items: flex-end; padding: 1.8rem;
  }
  .work-item:hover .work-overlay { opacity: 1; }
  .work-meta { transform: translateY(8px); transition: transform 0.4s ease; }
  .work-item:hover .work-meta { transform: translateY(0); }
  .work-cat {
    font-family: var(--font-mono);
    font-size: 0.58rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.3rem;
  }
  .work-name {
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: 300;
    color: var(--cream);
  }
  .work-item-num {
    position: absolute; top: 1rem; right: 1rem;
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: rgba(245,240,232,0.3);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .work-item:hover .work-item-num { opacity: 1; }

  /* placeholder gradient images */
  .work-item:nth-child(1) .placeholder { background: linear-gradient(135deg, #1a1208 0%, #3d2c0e 40%, #1e1404 100%); }
  .work-item:nth-child(2) .placeholder { background: linear-gradient(135deg, #0d1a1a 0%, #0e3030 50%, #061212 100%); }
  .work-item:nth-child(3) .placeholder { background: linear-gradient(135deg, #1a0d0d 0%, #3d1010 50%, #1a0808 100%); }
  .work-item:nth-child(4) .placeholder { background: linear-gradient(135deg, #0d0d1a 0%, #1a1a3d 50%, #080812 100%); }
  .work-item:nth-child(5) .placeholder { background: linear-gradient(135deg, #0f1a0d 0%, #1e3d15 50%, #0a1208 100%); }
  .work-item:nth-child(6) .placeholder { background: linear-gradient(135deg, #1a0d1a 0%, #3d1040 50%, #120812 100%); }
  .work-item:nth-child(7) .placeholder { background: linear-gradient(135deg, #1a1a0d 0%, #3d3a10 50%, #121208 100%); }
  .work-item:nth-child(8) .placeholder { background: linear-gradient(135deg, #0d1a1a 0%, #103d3a 50%, #081210 100%); }

  .placeholder {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .placeholder::after {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at center, rgba(201,169,110,0.08) 0%, transparent 70%);
  }
  .placeholder-icon {
    font-family: var(--font-display);
    font-size: 4rem;
    color: rgba(201,169,110,0.12);
    font-style: italic;
    font-weight: 300;
    user-select: none;
  }

  /* ─── SERVICES ─── */
  #services {
    border-top: 1px solid var(--border);
    background: var(--bg2);
  }
  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    margin-top: 5rem;
    border: 1px solid var(--border);
  }
  .service-card {
    padding: 3rem 2.5rem;
    background: var(--bg2);
    position: relative;
    transition: background 0.4s;
    overflow: hidden;
  }
  .service-card::before {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  .service-card:hover { background: #141414; }
  .service-card:hover::before { transform: scaleX(1); }
  .service-num {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    color: var(--gold);
    margin-bottom: 2rem;
  }
  .service-name {
    font-family: var(--font-display);
    font-size: 1.6rem;
    font-weight: 300;
    color: var(--cream);
    line-height: 1.2;
    margin-bottom: 1.2rem;
  }
  .service-desc {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    line-height: 1.9;
    letter-spacing: 0.05em;
    color: var(--mid);
  }

  /* ─── CLIENTS / MARQUEE ─── */
  #clients {
    border-top: 1px solid var(--border);
    padding: 5rem 0;
    overflow: hidden;
  }
  .clients-label {
    text-align: center;
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: var(--mid);
    margin-bottom: 3rem;
  }
  .marquee-wrap { position: relative; overflow: hidden; }
  .marquee-track {
    display: flex; gap: 5rem;
    animation: marquee 20s linear infinite;
    width: max-content;
  }
  .marquee-wrap:hover .marquee-track { animation-play-state: paused; }
  .client-name {
    font-family: var(--font-display);
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    font-weight: 300;
    color: rgba(245,240,232,0.2);
    white-space: nowrap;
    font-style: italic;
    letter-spacing: 0.05em;
    transition: color 0.3s;
    cursor: default;
  }
  .marquee-track:hover .client-name:hover { color: var(--gold-pale); }
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  /* ─── CONTACT ─── */
  #contact {
    border-top: 1px solid var(--border);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 10rem 4rem;
    background: radial-gradient(ellipse at 50% 80%, rgba(201,169,110,0.05) 0%, transparent 60%);
  }
  #contact .section-tag { justify-content: center; }
  #contact .section-tag::before { display: none; }
  .contact-headline {
    font-family: var(--font-display);
    font-size: clamp(3rem, 7vw, 7rem);
    font-weight: 300;
    line-height: 1;
    color: var(--cream);
  }
  .contact-headline em {
    display: block;
    font-style: italic;
    color: var(--gold);
  }
  .contact-email {
    font-family: var(--font-display);
    font-size: clamp(1rem, 2vw, 1.4rem);
    font-weight: 300;
    font-style: italic;
    color: var(--mid);
    text-decoration: none;
    letter-spacing: 0.05em;
    border-bottom: 1px solid var(--border);
    padding-bottom: 3px;
    transition: color 0.3s, border-color 0.3s;
  }
  .contact-email:hover { color: var(--gold); border-color: var(--gold); }
  .contact-socials {
    display: flex; gap: 2rem; list-style: none;
  }
  .contact-socials a {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--mid);
    text-decoration: none;
    transition: color 0.3s;
  }
  .contact-socials a:hover { color: var(--gold); }

  /* ─── FOOTER ─── */
  footer {
    border-top: 1px solid var(--border);
    padding: 2rem 4rem;
    display: flex; justify-content: space-between; align-items: center;
  }
  footer span {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    color: rgba(136,136,128,0.4);
  }

  /* ─── SCROLL REVEAL ─── */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.9s ease, transform 0.9s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: none;
  }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.25s; }
  .reveal-delay-3 { transition-delay: 0.4s; }

  /* ─── RESPONSIVE ─── */
  @media (max-width: 900px) {
    nav { padding: 1.5rem 2rem; }
    nav::after { left: 2rem; right: 2rem; }
    #hero { grid-template-columns: 1fr; padding: 7rem 2rem 4rem; gap: 3rem; }
    .hero-bg-line { display: none; }
    section { padding: 5rem 2rem; }
    #about { grid-template-columns: 1fr; gap: 3rem; }
    .work-grid { grid-template-columns: 1fr 1fr; grid-auto-rows: 200px; }
    .work-item { grid-column: auto !important; grid-row: auto !important; }
    .services-grid { grid-template-columns: 1fr; }
    footer { flex-direction: column; gap: 1rem; text-align: center; }
    .about-stats { grid-template-columns: repeat(3, 1fr); }
  }
</style>
</head>
<body>

<div id="cursor"></div>
<div id="cursor-ring"></div>
<div id="loader"><span id="loader-text">PORTFOLIO</span></div>

<!-- NAV -->
<nav>
  <a class="nav-logo" href="#">Your Name</a>
  <ul class="nav-links">
    <li><a href="#work">Work</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- HERO -->
<section id="hero">
  <div class="hero-bg-line"></div>
  <div class="hero-left">
    <p class="hero-eyebrow">Visual Designer &amp; Art Director</p>
    <h1 class="hero-title">
      Crafting<br>
      <em>Visual</em>
      Stories
    </h1>
    <p class="hero-sub">
      A collection of work spanning brand identity, editorial design, and visual experiences — built to leave a lasting impression.
    </p>
    <a class="hero-cta" href="#work">View Selected Work</a>
  </div>
  <div class="hero-right">
    <div class="hero-img-wrap">
      <div class="placeholder" style="background: linear-gradient(135deg, #181206 0%, #2e1e08 45%, #0d0b04 100%); aspect-ratio: 4/5; position: relative;">
        <div class="placeholder-icon">✦</div>
        <div style="position:absolute; inset: 0; background: repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,169,110,0.025) 40px, rgba(201,169,110,0.025) 41px);"></div>
      </div>
      <div class="hero-img-frame"></div>
    </div>
    <span class="hero-img-caption">Featured — 2024</span>
  </div>
  <div class="hero-scroll-hint">
    <span>Scroll</span>
    <div class="scroll-line"></div>
  </div>
</section>

<!-- ABOUT -->
<section id="about">
  <div class="about-left reveal">
    <p class="section-tag">About</p>
    <h2 class="section-title">Design<br>with <em>Intent</em></h2>
  </div>
  <div class="about-right reveal reveal-delay-1">
    <p class="about-body">
      I'm a designer who believes that <strong>aesthetics and strategy are inseparable</strong>. Every curve, color, and composition serves a purpose — to communicate, to evoke, and to endure.
    </p>
    <p class="about-body" style="margin-top: 1.5rem;">
      With roots in fine art and a sharpness for digital craft, I bring a rare balance of <strong>creative intuition and systematic thinking</strong> to every project I take on.
    </p>
    <div class="about-stats">
      <div class="reveal reveal-delay-1">
        <div class="stat-num">08+</div>
        <div class="stat-label">Years of<br>Experience</div>
      </div>
      <div class="reveal reveal-delay-2">
        <div class="stat-num">120</div>
        <div class="stat-label">Projects<br>Delivered</div>
      </div>
      <div class="reveal reveal-delay-3">
        <div class="stat-num">40+</div>
        <div class="stat-label">Clients<br>Worldwide</div>
      </div>
    </div>
  </div>
</section>

<!-- WORK -->
<section id="work">
  <div class="work-header reveal">
    <div>
      <p class="section-tag">Selected Work</p>
      <h2 class="section-title">Recent <em>Projects</em></h2>
    </div>
    <ul class="work-filter">
      <li class="active">All</li>
      <li>Branding</li>
      <li>Editorial</li>
      <li>Digital</li>
    </ul>
  </div>

  <div class="work-grid">
    <div class="work-item reveal">
      <div class="placeholder" style="background: linear-gradient(135deg, #1a1208 0%, #3d2c0e 40%, #1e1404 100%); width:100%; height:100%;">
        <div class="placeholder-icon">I</div>
      </div>
      <div class="work-overlay">
        <div class="work-meta">
          <div class="work-cat">Brand Identity</div>
          <div class="work-name">Project Title Here</div>
        </div>
      </div>
      <div class="work-item-num">01</div>
    </div>
    <div class="work-item reveal reveal-delay-1">
      <div class="placeholder" style="background: linear-gradient(135deg, #0d1a1a 0%, #0e3030 50%, #061212 100%); width:100%; height:100%;">
        <div class="placeholder-icon">II</div>
      </div>
      <div class="work-overlay">
        <div class="work-meta">
          <div class="work-cat">Editorial</div>
          <div class="work-name">Project Title Here</div>
        </div>
      </div>
      <div class="work-item-num">02</div>
    </div>
    <div class="work-item reveal reveal-delay-2">
      <div class="placeholder" style="background: linear-gradient(135deg, #1a0d0d 0%, #3d1010 50%, #1a0808 100%); width:100%; height:100%;">
        <div class="placeholder-icon">III</div>
      </div>
      <div class="work-overlay">
        <div class="work-meta">
          <div class="work-cat">Art Direction</div>
          <div class="work-name">Project Title Here</div>
        </div>
      </div>
      <div class="work-item-num">03</div>
    </div>
    <div class="work-item reveal">
      <div class="placeholder" style="background: linear-gradient(135deg, #0d0d1a 0%, #1a1a3d 50%, #080812 100%); width:100%; height:100%;">
        <div class="placeholder-icon">IV</div>
      </div>
      <div class="work-overlay">
        <div class="work-meta">
          <div class="work-cat">Digital</div>
          <div class="work-name">Project Title Here</div>
        </div>
      </div>
      <div class="work-item-num">04</div>
    </div>
    <div class="work-item reveal reveal-delay-1">
      <div class="placeholder" style="background: linear-gradient(135deg, #0f1a0d 0%, #1e3d15 50%, #0a1208 100%); width:100%; height:100%;">
        <div class="placeholder-icon">V</div>
      </div>
      <div class="work-overlay">
        <div class="work-meta">
          <div class="work-cat">Packaging</div>
          <div class="work-name">Project Title Here</div>
        </div>
      </div>
      <div class="work-item-num">05</div>
    </div>
    <div class="work-item reveal reveal-delay-2">
      <div class="placeholder" style="background: linear-gradient(135deg, #1a0d1a 0%, #3d1040 50%, #120812 100%); width:100%; height:100%;">
        <div class="placeholder-icon">VI</div>
      </div>
      <div class="work-overlay">
        <div class="work-meta">
          <div class="work-cat">Campaign</div>
          <div class="work-name">Project Title Here</div>
        </div>
      </div>
      <div class="work-item-num">06</div>
    </div>
    <div class="work-item reveal">
      <div class="placeholder" style="background: linear-gradient(135deg, #1a1a0d 0%, #3d3a10 50%, #121208 100%); width:100%; height:100%;">
        <div class="placeholder-icon">VII</div>
      </div>
      <div class="work-overlay">
        <div class="work-meta">
          <div class="work-cat">Typography</div>
          <div class="work-name">Project Title Here</div>
        </div>
      </div>
      <div class="work-item-num">07</div>
    </div>
    <div class="work-item reveal reveal-delay-1">
      <div class="placeholder" style="background: linear-gradient(135deg, #0d1a1a 0%, #103d3a 50%, #081210 100%); width:100%; height:100%;">
        <div class="placeholder-icon">VIII</div>
      </div>
      <div class="work-overlay">
        <div class="work-meta">
          <div class="work-cat">Motion</div>
          <div class="work-name">Project Title Here</div>
        </div>
      </div>
      <div class="work-item-num">08</div>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section id="services">
  <div class="reveal">
    <p class="section-tag">What I Do</p>
    <h2 class="section-title">Areas of <em>Expertise</em></h2>
  </div>
  <div class="services-grid" style="margin-top: 4rem;">
    <div class="service-card reveal">
      <div class="service-num">01 —</div>
      <h3 class="service-name">Brand<br>Identity</h3>
      <p class="service-desc">From logo marks to full visual systems — cohesive brand languages that speak clearly and endure over time.</p>
    </div>
    <div class="service-card reveal reveal-delay-1">
      <div class="service-num">02 —</div>
      <h3 class="service-name">Art<br>Direction</h3>
      <p class="service-desc">Guiding campaigns, photography, and content with a unified visual vision that resonates with the audience.</p>
    </div>
    <div class="service-card reveal reveal-delay-2">
      <div class="service-num">03 —</div>
      <h3 class="service-name">Editorial<br>Design</h3>
      <p class="service-desc">Magazines, books, and publications designed to balance beauty and readability across every spread.</p>
    </div>
    <div class="service-card reveal reveal-delay-1">
      <div class="service-num">04 —</div>
      <h3 class="service-name">Digital<br>Experiences</h3>
      <p class="service-desc">Web interfaces and interactive media crafted to feel as considered and deliberate as print.</p>
    </div>
    <div class="service-card reveal reveal-delay-2">
      <div class="service-num">05 —</div>
      <h3 class="service-name">Packaging<br>Design</h3>
      <p class="service-desc">Three-dimensional design thinking — where shelf presence and brand storytelling converge.</p>
    </div>
    <div class="service-card reveal reveal-delay-3">
      <div class="service-num">06 —</div>
      <h3 class="service-name">Motion<br>&amp; Visual</h3>
      <p class="service-desc">Animation, title sequences, and moving image work that gives static ideas a heartbeat.</p>
    </div>
  </div>
</section>

<!-- CLIENTS MARQUEE -->
<section id="clients">
  <p class="clients-label">Clients &amp; Collaborators</p>
  <div class="marquee-wrap">
    <div class="marquee-track">
      <span class="client-name">Studio Volta</span>
      <span class="client-name">✦</span>
      <span class="client-name">Maison Noir</span>
      <span class="client-name">✦</span>
      <span class="client-name">Forma Agency</span>
      <span class="client-name">✦</span>
      <span class="client-name">The Edit Group</span>
      <span class="client-name">✦</span>
      <span class="client-name">Aurelian Co.</span>
      <span class="client-name">✦</span>
      <span class="client-name">Luma Studio</span>
      <span class="client-name">✦</span>
      <span class="client-name">Verd Creative</span>
      <span class="client-name">✦</span>
      <span class="client-name">Studio Volta</span>
      <span class="client-name">✦</span>
      <span class="client-name">Maison Noir</span>
      <span class="client-name">✦</span>
      <span class="client-name">Forma Agency</span>
      <span class="client-name">✦</span>
      <span class="client-name">The Edit Group</span>
      <span class="client-name">✦</span>
      <span class="client-name">Aurelian Co.</span>
      <span class="client-name">✦</span>
      <span class="client-name">Luma Studio</span>
      <span class="client-name">✦</span>
      <span class="client-name">Verd Creative</span>
      <span class="client-name">✦</span>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <p class="section-tag">Get in Touch</p>
  <h2 class="contact-headline reveal">
    Let's make<br>
    <em>something</em><br>
    remarkable.
  </h2>
  <a class="contact-email reveal" href="mailto:hello@yourname.com">hello@yourname.com</a>
  <ul class="contact-socials reveal">
    <li><a href="#">Instagram</a></li>
    <li><a href="#">Behance</a></li>
    <li><a href="#">LinkedIn</a></li>
    <li><a href="#">Dribbble</a></li>
  </ul>
</section>

<!-- FOOTER -->
<footer>
  <span>© 2024 Your Name. All rights reserved.</span>
  <span>Designed &amp; Built with intention.</span>
</footer>

<script>
  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });
  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  reveals.forEach(el => observer.observe(el));

  // Work filter (visual only)
  document.querySelectorAll('.work-filter li').forEach(li => {
    li.addEventListener('click', () => {
      document.querySelectorAll('.work-filter li').forEach(x => x.classList.remove('active'));
      li.classList.add('active');
    });
  });

  // Parallax hero on mouse
  const heroRight = document.querySelector('.hero-right');
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    if (heroRight) heroRight.style.transform = `translate(${x}px, ${y}px)`;
  });
</script>
</body>
</html>