:root {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #edf5ff;
  background: #07111f;
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
}

body {
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(93, 111, 255, 0.26), transparent 28%),
    linear-gradient(180deg, #07111f 0%, #0b1728 100%);
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.page-shell {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding: 32px 0 80px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 16px 20px;
  border: 1px solid rgba(150, 176, 255, 0.22);
  border-radius: 18px;
  background: rgba(9, 17, 31, 0.72);
  backdrop-filter: blur(18px);
  position: sticky;
  top: 18px;
  z-index: 10;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.brand-mark {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #6fb7ff, #6074ff);
  color: white;
  font-weight: 900;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.nav button,
.ghost-button,
.secondary-button,
.link-button {
  background: transparent;
  border: 1px solid rgba(154, 176, 255, 0.28);
  color: #dfe9ff;
  border-radius: 999px;
  padding: 0.7rem 1rem;
  transition: all 0.2s ease;
}

.nav button:hover,
.ghost-button:hover,
.secondary-button:hover,
.link-button:hover {
  border-color: rgba(154, 176, 255, 0.55);
  transform: translateY(-1px);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.primary-button {
  border: 0;
  border-radius: 999px;
  padding: 0.9rem 1.4rem;
  background: linear-gradient(135deg, #5aa9ff 0%, #6079ff 100%);
  color: white;
  font-weight: 700;
  box-shadow: 0 10px 28px rgba(72, 106, 255, 0.35);
  transition: all 0.2s ease;
}

.primary-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 32px rgba(72, 106, 255, 0.42);
}

main {
  margin-top: 32px;
}

.hero-card,
.section-block,
.stat-item,
.market-card,
.plan-card,
.calculator-panel,
.security-panel,
.metric-panel {
  border: 1px solid rgba(153, 180, 255, 0.2);
  background: rgba(10, 18, 31, 0.7);
  box-shadow: 0 20px 70px rgba(5, 12, 20, 0.42);
}

.hero-card {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 28px;
  padding: 36px;
  border-radius: 28px;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.eyebrow {
  margin: 0 0 12px;
  color: #8ecaff;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 800;
}

h1 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.04;
  letter-spacing: -0.06em;
}

.subtitle {
  margin: 18px 0 0;
  max-width: 620px;
  color: rgba(224, 234, 255, 0.8);
  font-size: 1.05rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.wallet-box {
  margin-top: 22px;
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(14, 24, 37, 0.85);
  border: 1px solid rgba(129, 175, 255, 0.27);
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  width: fit-content;
}

.wallet-box span {
  color: #9ec5ef;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.wallet-box strong {
  font-size: 0.95rem;
  word-break: break-all;
}

.hero-panel {
  display: grid;
  gap: 18px;
  align-content: center;
}

.mini-card {
  padding: 22px 20px;
  border-radius: 20px;
  background: rgba(12, 22, 38, 0.9);
  border: 1px solid rgba(148, 173, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mini-card.success-card {
  background: linear-gradient(180deg, rgba(14, 33, 46, 0.96), rgba(11, 22, 36, 0.94));
}

.mini-card span,
.performance-ring span,
.metric-panel span,
.stat-item span,
.calculator-header span,
.yield-row span {
  color: #a5bae0;
  font-size: 0.74rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.mini-card strong,
.performance-ring strong,
.stat-item strong,
.metric-panel strong,
.yield-row strong {
  font-size: clamp(1.2rem, 2vw, 2rem);
  line-height: 1.1;
}

.mini-card small {
  color: #a9d0ff;
}

.performance-ring {
  width: 180px;
  height: 180px;
  margin: 0 auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(#66b7ff 0 91%, rgba(255,255,255,0.08) 91% 100%);
  padding: 18px;
}

.ring-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(10, 18, 31, 0.96);
  text-align: center;
}

.ring-inner strong {
  display: block;
  font-size: 1.8rem;
}

.ring-inner span {
  display: block;
  margin-top: 4px;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 28px;
}

.stat-item {
  padding: 22px 20px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.section-block {
  margin-top: 32px;
  padding: 28px 24px;
  border-radius: 24px;
}

.section-header {
  margin-bottom: 22px;
}

.section-header h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  letter-spacing: -0.04em;
}

.market-grid,
.plan-grid,
.security-grid {
  display: grid;
  gap: 20px;
}

.market-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.market-card {
  border-radius: 20px;
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.badge {
  display: inline-flex;
  color: #9be7ae;
  background: rgba(41, 128, 95, 0.18);
  border: 1px solid rgba(126, 237, 169, 0.22);
  border-radius: 999px;
  padding: 0.35rem 0.6rem;
  font-size: 0.72rem;
  font-weight: 700;
}

.market-card h3,
.calculator-header h3 {
  margin: 0;
  font-size: 1.5rem;
}

.market-card p {
  margin: 0;
  color: rgba(224, 232, 255, 0.7);
}

.link-button {
  width: fit-content;
  margin-top: auto;
}

.plan-layout {
  display: grid;
  gap: 20px;
}

.plan-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.plan-card {
  padding: 22px 18px;
  border-radius: 18px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #edf5ff;
  transition: all 0.2s ease;
}

.plan-card.active {
  border-color: rgba(120, 157, 255, 0.75);
  background: linear-gradient(180deg, rgba(18, 31, 52, 0.96), rgba(12, 23, 38, 0.96));
}

.plan-card .plan-name,
.plan-card small,
.plan-card em {
  color: rgba(224, 232, 255, 0.8);
}

.plan-card strong {
  font-size: 2.2rem;
  line-height: 1;
}

.calculator-panel {
  border-radius: 20px;
  padding: 26px 22px;
}

.calculator-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
}

.calculator-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 20px;
}

.calculator-form label {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #dfe9ff;
  font-weight: 600;
}

.calculator-form input,
.calculator-form select {
  width: 100%;
  min-height: 48px;
  border-radius: 12px;
  border: 1px solid rgba(148, 173, 255, 0.24);
  padding: 0.85rem 1rem;
  background: rgba(12, 23, 37, 0.92);
  color: #edf5ff;
}

.yield-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin-top: 24px;
  border-top: 1px solid rgba(148, 173, 255, 0.18);
  padding-top: 24px;
}

.yield-row strong {
  display: block;
  margin-top: 6px;
}

.status-line {
  margin: 18px 0 0;
  color: #acddff;
}

.security-grid {
  grid-template-columns: 1.2fr 0.8fr;
}

.security-panel,
.metric-panel {
  border-radius: 20px;
  padding: 22px 20px;
}

.security-panel ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.security-panel li {
  position: relative;
  padding-left: 24px;
  color: rgba(230, 239, 255, 0.85);
}

.security-panel li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: #7ce0b0;
  font-weight: 800;
}

.metric-panel {
  display: grid;
  gap: 18px;
  align-content: center;
}

.metric-panel > div {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px 16px;
  border-radius: 14px;
  background: rgba(12, 23, 37, 0.94);
}

@media (max-width: 900px) {
  .topbar,
  .header-actions,
  .hero-card,
  .security-grid,
  .yield-row,
  .calculator-form {
    grid-template-columns: 1fr;
    display: grid;
  }

  .topbar {
    position: static;
  }

  .nav,
  .header-actions {
    justify-content: start;
  }

  .hero-card {
    padding: 22px 18px;
  }

  .stats-row,
  .market-grid,
  .plan-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .page-shell {
    width: min(100% - 20px, 1200px);
  }

  .topbar {
    padding: 14px 12px;
  }

  .nav,
  .header-actions,
  .stats-row,
  .market-grid,
  .plan-grid,
  .calculator-form,
  .security-grid {
    grid-template-columns: 1fr;
  }

  .nav,
  .header-actions {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .hero-card,
  .section-block {
    padding: 20px 16px;
  }

  .cta-row {
    flex-direction: column;
  }

  .primary-button,
  .secondary-button,
  .ghost-button,
  .nav button,
  .link-button {
    width: 100%;
    justify-content: center;
  }

  .yield-row {
    display: grid;
    gap: 16px;
  }
}
