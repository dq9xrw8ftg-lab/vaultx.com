:root {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #eef5f0;
  background: #07110e;
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(217, 194, 138, 0.15), transparent 22%),
    linear-gradient(180deg, #07110e 0%, #0c1915 100%);
}

body {
  min-height: 100vh;
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
}

h1, h2, h3, h4, p {
  margin-top: 0;
}

button, input, select {
  border-radius: 12px;
}

.vault-shell {
  min-height: 100vh;
  color: #eef5f0;
}

.topbar {
  width: min(1180px, calc(100% - 28px));
  margin: 18px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border: 1px solid #20352d;
  background: rgba(12, 25, 21, 0.9);
  border-radius: 18px;
  position: sticky;
  top: 18px;
  z-index: 20;
  backdrop-filter: blur(12px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
}

.brand-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #d9c28a;
  box-shadow: 0 0 18px rgba(217, 194, 138, 0.8);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-button,
.light-button,
.ghost-button,
.secondary-button,
.sidebar-button,
.plan-card,
.asset-card,
.link-button {
  background: transparent;
  color: #eef5f0;
  border: 1px solid #20352d;
  border-radius: 999px;
  padding: 0.7rem 1rem;
  transition: 0.2s ease;
}

.nav-button:hover,
.light-button:hover,
.ghost-button:hover,
.secondary-button:hover,
.sidebar-button:hover,
.asset-card:hover,
.plan-card:hover {
  border-color: #d9c28a;
  transform: translateY(-1px);
}

.header-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.primary-button,
.full {
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #d9c28a 0%, #d7d4a0 100%);
  color: #07110e;
  font-weight: 700;
  padding: 0.9rem 1.4rem;
  box-shadow: 0 14px 32px rgba(217, 194, 138, 0.3);
}

.primary-button:hover {
  transform: translateY(-1px);
}

.ghost-button,
.light-button {
  background: rgba(255,255,255,0.02);
}

main {
  padding-bottom: 42px;
}

.hero-block {
  display: grid;
  grid-template-columns: 1.35fr 0.8fr;
  gap: 22px;
  padding-top: 54px;
  align-items: center;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
  margin: 0 0 18px;
}

.lead {
  font-size: 1.08rem;
  max-width: 630px;
  color: #9eafa6;
}

.eyebrow {
  margin: 0 0 12px;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #83d6a8;
  font-weight: 800;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.market-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.market-badges span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  background: rgba(217, 194, 138, 0.08);
  border: 1px solid rgba(217, 194, 138, 0.18);
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  color: #d9c28a;
  font-size: 0.76rem;
}

.hero-panel {
  display: grid;
  gap: 16px;
}

.mini-stat {
  border-radius: 20px;
  background: rgba(12, 25, 21, 0.85);
  border: 1px solid #20352d;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.dark {
  background: linear-gradient(180deg, rgba(11, 28, 23, 1), rgba(12, 25, 21, 0.9));
}

.mini-stat span,
.stat-card span,
.proof-card span,
.metric-box span,
.yield-row span {
  color: #9eafa6;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.mini-stat strong,
.stat-card strong,
.proof-card strong,
.metric-box strong {
  font-size: clamp(1.3rem, 2vw, 2rem);
}

.progress-ring {
  width: 185px;
  height: 185px;
  margin: 4px auto 0;
  border-radius: 50%;
  background: conic-gradient(#d9c28a 0 91%, rgba(255,255,255,0.08) 91% 100%);
  display: grid;
  place-items: center;
}

.ring-center {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  text-align: center;
  background: #07110e;
  border-radius: 50%;
  border: 18px solid rgba(12, 25, 21, 0.9);
}

.ring-center strong {
  font-size: 2rem;
}

.ring-center span {
  color: #9eafa6;
  font-size: 0.72rem;
  display: block;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 28px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  border: 1px solid #20352d;
  background: rgba(12, 25, 21, 0.8);
  border-radius: 18px;
  padding: 20px 18px;
}

.wide {
  width: 100%;
}

.content-block {
  margin-top: 40px;
  padding-top: 14px;
}

.section-header {
  margin-bottom: 18px;
}

.section-header h2 {
  margin: 0 0 8px;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.04em;
}

.section-copy {
  max-width: 720px;
}

.asset-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.asset-grid.compact {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.asset-grid.full {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 22px;
}

.asset-card {
  text-align: left;
  width: 100%;
  background: rgba(12, 25, 21, 0.7);
  border-radius: 18px;
  padding: 18px;
  color: #eef5f0;
  border: 1px solid #20352d;
}

.asset-card.small {
  min-height: 200px;
}

.asset-head {
  display: flex;
  align-items: center;
  gap: 12px;
}

.asset-head img {
  width: 42px;
  height: 42px;
  border-radius: 12px;
}

.asset-card h3 {
  margin: 0;
  font-size: 1.1rem;
}

.asset-card p {
  margin: 0;
  color: #9eafa6;
}

.asset-meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 18px 0 10px;
}

.asset-meta-row span,
.plan-meta span,
.mini-facts span {
  color: #9eafa6;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.asset-meta-row strong,
.price-line,
.plan-meta strong,
.mini-facts strong {
  font-size: 1rem;
}

.price-line {
  margin-bottom: 10px;
}

.mini-facts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-top: 1px solid #20352d;
  padding-top: 10px;
}

.up { color: #83d6a8; }
.down { color: #f59e9e; }

.three-col,
.proof-grid,
.testimonial-grid,
.plan-grid,
.footer-grid {
  display: grid;
  gap: 18px;
}

.three-col {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.info-panel,
.proof-card,
.quote-card,
.panel-box,
.plan-card,
.auth-card,
.metric-box,
.site-footer {
  background: rgba(12, 25, 21, 0.9);
  border: 1px solid #20352d;
  border-radius: 20px;
}

.info-panel,
.proof-card,
.quote-card,
.metric-box {
  padding: 20px 18px;
}

.info-panel span {
  font-weight: 800;
  color: #d9c28a;
}

.info-panel p {
  margin: 12px 0 0;
  color: #9eafa6;
}

.proof-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.proof-card small {
  display: block;
  color: #9eafa6;
  margin-top: 10px;
}

.testimonial-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.quote-card p {
  color: #eef5f0;
  margin-bottom: 18px;
}

.quote-card strong,
.quote-card span {
  display: block;
}

.quote-card span {
  color: #9eafa6;
}

.toolbar-panel {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr;
  gap: 14px;
  padding: 16px 18px;
  background: rgba(12, 25, 21, 0.8);
  border: 1px solid #20352d;
  border-radius: 18px;
}

.toolbar-panel input,
.toolbar-panel select,
.auth-form input,
.auth-form select {
  width: 100%;
  min-height: 46px;
  border: 1px solid #20352d;
  background: rgba(7, 17, 14, 0.88);
  color: #eef5f0;
  border-radius: 12px;
  padding: 0.8rem 1rem;
}

.page-hero {
  padding-top: 40px;
}

.page-hero.narrow {
  padding-top: 20px;
}

.plan-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 20px;
}

.plan-card {
  text-align: left;
  padding: 22px 20px;
  background: rgba(12, 25, 21, 0.85);
  color: #eef5f0;
  border-radius: 18px;
}

.plan-tag {
  display: inline-flex;
  align-self: flex-start;
  background: rgba(131, 214, 168, 0.1);
  color: #83d6a8;
  border: 1px solid rgba(131, 214, 168, 0.22);
  border-radius: 999px;
  padding: 0.4rem 0.7rem;
  font-size: 0.68rem;
  text-transform: uppercase;
}

.plan-card h3 {
  margin: 18px 0 8px;
}

.plan-card strong {
  font-size: 2.1rem;
}

.plan-card small,
.plan-card p {
  color: #9eafa6;
}

.plan-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #20352d;
  margin-top: 14px;
}

.auth-wrap {
  min-height: 70vh;
  display: grid;
  place-items: center;
  padding-top: 40px;
}

.auth-card {
  width: min(520px, calc(100% - 24px));
  padding: 26px 22px;
}

.auth-form {
  display: grid;
  gap: 16px;
  margin-top: 20px;
}

.auth-form label {
  display: grid;
  gap: 8px;
  color: #eef5f0;
}

.auth-top h2 {
  margin: 0;
  font-size: clamp(1.8rem, 2vw, 2.6rem);
}

.full {
  width: 100%;
  justify-content: center;
}

.dashboard-shell {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 20px;
  margin-top: 28px;
}

.sidebar {
  background: rgba(12, 25, 21, 0.85);
  border: 1px solid #20352d;
  border-radius: 18px;
  padding: 16px 12px;
  display: grid;
  gap: 8px;
  align-self: start;
}

.sidebar-brand {
  padding: 8px 10px 14px;
  border-bottom: 1px solid #20352d;
  margin-bottom: 8px;
}

.sidebar-button {
  text-align: left;
  background: transparent;
  color: #eef5f0;
  border: 1px solid transparent;
  padding: 0.8rem 0.85rem;
  border-radius: 12px;
}

.sidebar-button:hover {
  border-color: #20352d;
  background: rgba(255,255,255,0.02);
}

.wide {
  width: 100%;
}

.dashboard-body {
  min-width: 0;
}

.dash-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.hero-panel-box {
  grid-column: 1 / -1;
  padding: 22px 20px;
}

.full-span {
  grid-column: 1 / -1;
}

.panel-box {
  padding: 22px 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  text-align: left;
  padding: 12px 10px;
  border-bottom: 1px solid #20352d;
  color: #eef5f0;
}

.status {
  display: inline-flex;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
}

.status.completed { background: rgba(131, 214, 168, 0.12); color: #83d6a8; }
.status.pending { background: rgba(217, 194, 138, 0.12); color: #d9c28a; }
.status.processing { background: rgba(147, 197, 253, 0.12); color: #93c5fd; }

.asset-detail-shell,
.plan-detail-panel {
  margin-top: 30px;
}

.asset-detail-header,
.plan-detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 20px;
}

.asset-head.large {
  gap: 18px;
}

.asset-head.large img {
  width: 70px;
  height: 70px;
}

.asset-summary-box {
  background: rgba(12, 25, 21, 0.8);
  border: 1px solid #20352d;
  border-radius: 18px;
  padding: 18px 20px;
  min-width: 240px;
}

.asset-summary-box span,
.asset-summary-box small {
  display: block;
  color: #9eafa6;
}

.asset-summary-box strong {
  display: block;
  font-size: 2rem;
  margin: 8px 0;
}

.detail-grid,
.plan-detail-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
}

.data-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.data-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #20352d;
}

.data-list li span {
  color: #9eafa6;
}

.muted {
  color: #9eafa6;
}

.site-footer {
  width: min(1180px, calc(100% - 28px));
  margin: 24px auto 0;
  padding: 20px 18px 28px;
}

.footer-grid {
  grid-template-columns: 1.2fr 0.7fr 0.7fr 0.8fr;
}

.footer-brand {
  margin-bottom: 10px;
}

.site-footer h4 {
  margin-bottom: 12px;
}

.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}

.site-footer button {
  color: #eef5f0;
  background: none;
  border: 0;
  padding: 0;
  text-align: left;
}

.copyright {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid #20352d;
  color: #9eafa6;
}

@media (max-width: 980px) {
  .hero-block,
  .detail-grid,
  .plan-detail-grid,
  .dashboard-shell,
  .stats-grid,
  .asset-grid,
  .three-col,
  .proof-grid,
  .testimonial-grid,
  .plan-grid,
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .dashboard-shell {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .topbar {
    flex-direction: column;
    gap: 14px;
    position: static;
  }

  .main-nav,
  .header-actions {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero-block,
  .stats-grid,
  .asset-grid,
  .three-col,
  .proof-grid,
  .testimonial-grid,
  .plan-grid,
  .detail-grid,
  .plan-detail-grid,
  .footer-grid,
  .toolbar-panel {
    grid-template-columns: 1fr;
  }

  .asset-card,
  .plan-card,
  .proof-card,
  .quote-card {
    width: 100%;
  }

  .dashboard-shell {
    grid-template-columns: 1fr;
  }
}
