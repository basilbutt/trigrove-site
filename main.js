/* =========================================================
   TriGrove Consulting — Consulting site theme
   GitHub Pages safe relative paths
   Requires: ./assets/logo-mark.svg
========================================================= */

:root{
  /* Light (enterprise) */
  --bg: #F5F6F7;
  --surface: #FFFFFF;
  --text: #0F172A;
  --muted: #475569;
  --border: #E2E8F0;

  /* Brand */
  --primary: #1E5E87;   /* deep blue */
  --accent:  #57B2DD;   /* cyan */
  --slate:   #4E5B5F;   /* slate */

  /* Dark (cyber) */
  --dark-bg: #0B1220;
  --dark-surface: #0F1B2D;
  --dark-text: #E6EEF6;
  --dark-muted: #A8B5C2;
  --dark-border: #1C2B3E;

  /* Layout tokens */
  --radius: 16px;
  --radius-sm: 14px;
  --shadow: 0 12px 30px rgba(2,6,23,0.08);
  --shadow-soft: 0 10px 22px rgba(2,6,23,0.06);
  --shadow-dark: 0 18px 46px rgba(0,0,0,0.22);

  --t-fast: 120ms;
  --t-med: 180ms;

  /* Watermark tuning */
  --wm-opacity: 0.055;
  --wm-size: min(640px, 76vw);
  --wm-x: 85%;
  --wm-y: 12%;

  /* Fiber sweep tuning */
  --fiber-opacity: 0.50;
  --fiber-duration: 9s;
}

/* ---------------------------
   Base / Reset
---------------------------- */
*{ box-sizing: border-box; }
html, body{ margin:0; padding:0; }

body{
  position: relative;
  overflow-x: hidden;

  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.55;
  text-rendering: optimizeLegibility;
}

img{ max-width:100%; height:auto; display:block; }
a{ color: inherit; }

.container{
  width: min(1100px, 92vw);
  margin: 0 auto;
}

/* ---------------------------
   Watermark + subtle fiber sweep
---------------------------- */
.site-header, main, footer{
  position: relative;
  z-index: 2;
}

body::before{
  content:"";
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background-image: url("./assets/logo-mark.svg");
  background-repeat: no-repeat;
  background-position: var(--wm-x) var(--wm-y);
  background-size: var(--wm-size);

  opacity: var(--wm-opacity);
  filter: saturate(1.05) contrast(1.05);
}

body::after{
  content:"";
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  background:
    repeating-linear-gradient(
      135deg,
      rgba(87,178,221,0.04) 0px,
      rgba(87,178,221,0.04) 1px,
      transparent 1px,
      transparent 12px
    ),
    radial-gradient(
      900px 520px at 0% 35%,
      rgba(87,178,221,0.16),
      transparent 60%
    ),
    linear-gradient(
      115deg,
      transparent 0%,
      rgba(87,178,221,0.06) 34%,
      rgba(87,178,221,0.18) 50%,
      rgba(30,94,135,0.10) 62%,
      transparent 78%
    );

  mix-blend-mode: screen;
  opacity: var(--fiber-opacity);

  transform: translateX(-55%) translateY(-6%);
  animation: fiberSweep var(--fiber-duration) linear infinite;
  filter: blur(0.2px);
}

@keyframes fiberSweep{
  0%   { transform: translateX(-60%) translateY(-7%); }
  100% { transform: translateX(60%)  translateY(7%); }
}

@media (prefers-reduced-motion: reduce){
  body::after{ animation: none; }
}

@media (max-width: 900px){
  :root{
    --wm-size: min(460px, 88vw);
    --wm-opacity: 0.045;
    --fiber-opacity: 0.34;
    --fiber-duration: 11s;
    --wm-x: 78%;
    --wm-y: 10%;
  }
}

/* ---------------------------
   Header / Nav
---------------------------- */
.site-header{
  position: sticky;
  top: 0;
  z-index: 50;

  background: rgba(245,246,247,0.86);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.header-inner{
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 0;
}

.brand{
  display:flex;
  align-items:center;
  gap: 10px;
  text-decoration:none;
}

.logo{
  height: 34px;
  width: auto;
}

.brand-name{
  font-weight: 900;
  letter-spacing: -0.2px;
  color: var(--text);
  white-space: nowrap;
}

.nav{
  display:flex;
  align-items:center;
  gap: 10px;
}

.nav a{
  text-decoration:none;
  color: var(--text);
  padding: 8px 10px;
  border-radius: 10px;
  font-weight: 650;
  transition: background var(--t-fast) ease, color var(--t-fast) ease;
}

.nav a:hover{
  background: rgba(2,6,23,0.04);
}

.nav a[aria-current="page"]{
  color: var(--primary);
  background: rgba(30,94,135,0.08);
}

.nav .nav-cta{
  margin-left: 6px;
}

/* ---------------------------
   Typography
---------------------------- */
h1{
  font-size: clamp(30px, 4vw, 46px);
  margin: 0 0 12px;
  letter-spacing: -0.6px;
}

h2{
  font-size: 26px;
  margin: 0 0 10px;
  letter-spacing: -0.2px;
}

h3{
  margin: 0 0 8px;
  letter-spacing: -0.1px;
}

p{ margin: 0 0 12px; }

.lead{
  font-size: 18px;
  color: var(--muted);
  margin: 0 0 18px;
}

.muted{ color: var(--muted); }
.small{ font-size: 13px; }

/* ---------------------------
   Buttons / Focus
---------------------------- */
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap: 8px;

  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid var(--border);

  text-decoration:none;
  font-weight: 750;
  cursor:pointer;

  transition:
    transform var(--t-fast) ease,
    filter var(--t-fast) ease,
    background var(--t-fast) ease,
    border-color var(--t-fast) ease,
    box-shadow var(--t-fast) ease;
}

.btn:active{ transform: translateY(1px); }

.btn-primary{
  background: var(--primary);
  color: #fff !important;
  border-color: rgba(0,0,0,0.06);
}

.btn-primary:hover{ filter: brightness(1.05); }

.btn-ghost{
  background: transparent;
  color: var(--primary);
  border-color: rgba(30,94,135,0.25);
}

.btn-ghost:hover{
  background: rgba(30,94,135,0.06);
}

.btn:focus,
input:focus, textarea:focus, select:focus, button:focus{
  outline: 3px solid rgba(87,178,221,0.25);
  outline-offset: 2px;
  border-color: rgba(87,178,221,0.65);
}

/* ---------------------------
   Sections / Layout
---------------------------- */
.section{ padding: 44px 0; }

.section.alt{
  background: rgba(15,23,42,0.03);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.page-hero{ padding: 44px 0 12px; }

.split{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: start;
}

.grid-2{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
}

.grid-3{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
}

.cta-row{
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 8px;
}

/* ---------------------------
   Cards
---------------------------- */
.card{
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 18px;

  transition: transform var(--t-med) ease, box-shadow var(--t-med) ease, border-color var(--t-med) ease;
}

.card:hover{
  transform: translateY(-1px);
  box-shadow: var(--shadow-soft);
  border-color: rgba(30,94,135,0.18);
}

.card-title{ margin: 0 0 12px; }

.sep{
  border: none;
  border-top: 1px solid var(--border);
  margin: 16px 0;
}

/* Badge */
.badge{
  display:inline-flex;
  align-items:center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 800;
  font-size: 12px;
  border: 1px solid rgba(30,94,135,0.22);
  background: rgba(30,94,135,0.08);
  color: var(--primary);
}

/* Tag */
.tag-row{ display:flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
.tag{
  display:inline-flex;
  align-items:center;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.65);
  font-weight: 750;
  font-size: 12px;
  color: var(--muted);
}

/* ---------------------------
   Lists / Links
---------------------------- */
.checklist{
  margin: 12px 0 0;
  padding-left: 0;
  list-style: none;
  color: var(--muted);
}

.checklist li{
  padding-left: 26px;
  position: relative;
  margin: 10px 0;
}

.checklist li::before{
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--accent);
  font-weight: 900;
}

.text-link{
  display:inline-block;
  margin-top: 10px;
  color: var(--primary);
  font-weight: 800;
  text-decoration: none;
}

.text-link:hover{ text-decoration: underline; }

/* ---------------------------
   HERO (Dark Cyber)
---------------------------- */
.hero{ padding: 54px 0 18px; }

.hero-grid{
  display:grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 26px;
  align-items: start;
}

.eyebrow{
  font-weight: 850;
  margin: 0 0 10px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  font-size: 12px;
}

.hero-dark{
  position: relative;

  background:
    radial-gradient(1200px 500px at 20% 20%, rgba(87,178,221,0.20), transparent 55%),
    radial-gradient(900px 400px at 80% 40%, rgba(30,94,135,0.22), transparent 60%),
    linear-gradient(180deg, rgba(11,18,32,1), rgba(9,16,29,1));

  color: var(--dark-text);
  border-bottom: 1px solid var(--dark-border);
}

.hero-dark .lead{ color: var(--dark-muted); }
.hero-dark .eyebrow{ color: rgba(230,238,246,0.78); }

.hero-logo{
  height: 64px;
  width: auto;
  margin: 6px 0 14px;
  opacity: 0.98;
  filter: drop-shadow(0 10px 22px rgba(0,0,0,0.18));
}

/* In dark hero, primary becomes accent */
.hero-dark .btn-primary{
  background: var(--accent);
  color: #06202B !important;
  border-color: rgba(0,0,0,0.08);
}

.hero-dark .btn-ghost{
  color: var(--dark-text);
  border-color: rgba(230,238,246,0.20);
}

.hero-dark .btn-ghost:hover{
  background: rgba(230,238,246,0.08);
}

/* Right-side hero card */
.hero-card{
  background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.86));
  border-color: rgba(226,232,240,0.95);
  box-shadow: var(--shadow-dark);
}

.stack{ display:flex; flex-direction: column; gap: 12px; }

.hero-card .mini-card{
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 14px;
  background: rgba(245,246,247,0.82);
  color: var(--text);
}

.hero-card .mini-card h3{
  color: var(--primary);
  margin: 0 0 6px;
}

.hero-card .mini-card p{
  color: var(--muted);
  margin: 0;
}

/* ---------------------------
   Advisors
---------------------------- */
.advisors-top{
  display:flex;
  align-items:flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.filters{
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items:center;
}

select{
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 10px 12px;
  background: white;
  font: inherit;
}

.advisor-card{
  display:flex;
  gap: 14px;
  align-items:flex-start;
}

.avatar{
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(30,94,135,0.08);
  border: 1px solid rgba(30,94,135,0.14);
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight: 900;
  color: var(--primary);
  flex: 0 0 auto;
}

.advisor-meta h3{ margin-bottom: 4px; }

/* ---------------------------
   CTA Banner
---------------------------- */
.cta-banner{
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: 16px;

  padding: 18px;
  border-radius: var(--radius);

  background: linear-gradient(135deg, rgba(30,94,135,0.10), rgba(87,178,221,0.10));
  border: 1px solid var(--border);
}

/* ---------------------------
   Forms
---------------------------- */
label{
  display:block;
  font-weight: 850;
  margin: 12px 0 6px;
}

input, textarea{
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  font: inherit;
  background: white;
}

textarea{ resize: vertical; }

/* ---------------------------
   Footer
---------------------------- */
.site-footer{
  padding: 28px 0 18px;
  border-top: 1px solid var(--border);
  background: rgba(255,255,255,0.65);
}

.footer-inner{
  display:flex;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}

.footer-brand{
  font-weight: 900;
  color: var(--primary);
}

.footer-links{
  display:flex;
  gap: 12px;
  align-items:center;
  flex-wrap: wrap;
}

.footer-links a{
  color: var(--muted);
  text-decoration:none;
}

.footer-links a:hover{ text-decoration: underline; }

/* ---------------------------
   Responsive
---------------------------- */
@media (max-width: 900px){
  .hero-grid, .split{ grid-template-columns: 1fr; }
  .grid-3{ grid-template-columns: 1fr; }
  .grid-2{ grid-template-columns: 1fr; }

  .logo{ height: 30px; }
  .hero-logo{ height: 56px; }

  .nav{ gap: 6px; }
  .nav .nav-cta{ display:none; }

  .cta-banner{ flex-direction: column; align-items: flex-start; }
}
