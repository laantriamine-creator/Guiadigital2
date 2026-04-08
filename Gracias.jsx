import { useEffect, useState } from "react";

/*
 * ──────────────────────────────────────────────
 *  PuraClaridad — Página de Confirmación (/gracias)
 * ──────────────────────────────────────────────
 *
 *  INSTRUCCIONES DE INTEGRACIÓN:
 *
 *  1. STRIPE PAYMENT LINK
 *     En tu Stripe Dashboard → Payment Links → edita el link:
 *     https://buy.stripe.com/dRm6oH8syeNJ0y1aWK8ww00
 *     → "After payment" → Don't show confirmation page
 *     → Redirect URL: https://puraclaridad.com/gracias
 *
 *  2. PÍXELES — Reemplaza los IDs placeholder:
 *     - META_PIXEL_ID  → tu ID del píxel de Meta (ej: 123456789)
 *     - TIKTOK_PIXEL_ID → tu ID del píxel de TikTok (ej: ABCDE12345)
 *     - GA_MEASUREMENT_ID → tu ID de GA4 (ej: G-XXXXXXXXXX)
 *
 *  3. PDF
 *     Sube tu PDF a /public/guia-puraclaridad.pdf
 *     o reemplaza PDF_URL con un enlace externo (Google Drive, S3, etc.)
 *
 *  4. ROUTER
 *     Añade esta ruta en tu App.jsx / main.jsx:
 *     <Route path="/gracias" element={<Gracias />} />
 */

// ── Config ───────────────────────────────────
const PDF_URL = "/guia-puraclaridad.pdf";
const STRIPE_LINK = "https://buy.stripe.com/dRm6oH8syeNJ0y1aWK8ww00";
const PRODUCT_VALUE = 9.9;
const CURRENCY = "EUR";

// Reemplaza estos con tus IDs reales
const META_PIXEL_ID = "824523316724029";
const TIKTOK_PIXEL_ID = "TU_TIKTOK_PIXEL_ID";
const GA_MEASUREMENT_ID = "TU_GA4_ID";

// ── Pixel helpers ────────────────────────────
function fireMetaPurchase() {
  if (typeof window.fbq === "function") {
    window.fbq("track", "Purchase", {
      value: PRODUCT_VALUE,
      currency: CURRENCY,
      content_name: "Guía Microplásticos PuraClaridad",
      content_type: "product",
    });
  }
}

function fireTikTokPurchase() {
  if (typeof window.ttq?.track === "function") {
    window.ttq.track("CompletePayment", {
      value: PRODUCT_VALUE,
      currency: CURRENCY,
      content_name: "Guía Microplásticos PuraClaridad",
    });
  }
}

function fireGA4Purchase() {
  if (typeof window.gtag === "function") {
    window.gtag("event", "purchase", {
      value: PRODUCT_VALUE,
      currency: CURRENCY,
      transaction_id: `pc_${Date.now()}`,
      items: [
        {
          item_name: "Guía Microplásticos PuraClaridad",
          price: PRODUCT_VALUE,
          quantity: 1,
        },
      ],
    });
  }
}

// ── Component ────────────────────────────────
export default function Gracias() {
  const [downloaded, setDownloaded] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Fire all conversion pixels once on mount
    fireMetaPurchase();
    fireTikTokPurchase();
    fireGA4Purchase();

    // Stop confetti after 4s
    const t = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const handleDownload = () => {
    setDownloaded(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=DM+Serif+Display&display=swap');

        :root {
          --pc-black: #0D0D0D;
          --pc-white: #FAFAFA;
          --pc-cream: #F5F0EB;
          --pc-green: #2D6A4F;
          --pc-green-light: #40916C;
          --pc-green-dark: #1B4332;
          --pc-green-bg: #D8F3DC;
          --pc-accent: #52B788;
          --pc-text: #1A1A1A;
          --pc-text-soft: #4A4A4A;
          --pc-border: #E0D8CF;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .gracias-page {
          min-height: 100vh;
          background: var(--pc-cream);
          font-family: 'DM Sans', sans-serif;
          color: var(--pc-text);
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        /* ── Confetti ── */
        .confetti-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: 1;
          transition: opacity 1s ease-out;
        }
        .confetti-container.fade-out {
          opacity: 0;
        }
        .confetti-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: confettiFall linear forwards;
        }
        @keyframes confettiFall {
          0% { transform: translateY(-20px) rotate(0deg) scale(1); opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg) scale(0.3); opacity: 0; }
        }

        /* ── Background texture ── */
        .gracias-page::before {
          content: '';
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: 
            radial-gradient(ellipse at 20% 0%, rgba(45,106,79,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 100%, rgba(82,183,136,0.05) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Nav ── */
        .gracias-nav {
          width: 100%;
          padding: 20px 32px;
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        /* ── Main Card ── */
        .gracias-main {
          position: relative;
          z-index: 2;
          max-width: 580px;
          width: 100%;
          padding: 0 20px;
          margin-top: 32px;
          animation: fadeUpIn 0.8s ease-out both;
        }
        @keyframes fadeUpIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .gracias-card {
          background: var(--pc-white);
          border-radius: 20px;
          padding: 48px 40px;
          box-shadow: 
            0 1px 3px rgba(0,0,0,0.04),
            0 8px 32px rgba(0,0,0,0.06);
          border: 1px solid var(--pc-border);
          text-align: center;
        }

        .gracias-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--pc-green-bg);
          color: var(--pc-green);
          font-size: 14px;
          font-weight: 600;
          padding: 8px 20px;
          border-radius: 100px;
          margin-bottom: 28px;
          letter-spacing: 0.3px;
        }
        .gracias-badge svg {
          flex-shrink: 0;
        }

        .gracias-title {
          font-family: 'DM Serif Display', serif;
          font-size: 32px;
          color: var(--pc-green-dark);
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .gracias-subtitle {
          font-size: 16px;
          color: var(--pc-text-soft);
          line-height: 1.6;
          margin-bottom: 36px;
          max-width: 440px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ── Download Button ── */
        .gracias-download {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--pc-green);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 17px;
          font-weight: 600;
          padding: 18px 40px;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(45,106,79,0.25);
          letter-spacing: 0.2px;
        }
        .gracias-download:hover {
          background: var(--pc-green-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(45,106,79,0.35);
        }
        .gracias-download:active {
          transform: translateY(0);
        }
        .gracias-download.downloaded {
          background: var(--pc-accent);
        }

        .gracias-download-note {
          font-size: 13px;
          color: var(--pc-text-soft);
          margin-top: 14px;
          opacity: 0.7;
        }

        /* ── Divider ── */
        .gracias-divider {
          width: 48px;
          height: 2px;
          background: var(--pc-border);
          margin: 36px auto;
          border-radius: 2px;
        }

        /* ── Steps ── */
        .gracias-steps-title {
          font-weight: 600;
          font-size: 15px;
          color: var(--pc-text);
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .gracias-steps {
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
        }

        .gracias-step {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .gracias-step-num {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: var(--pc-green-bg);
          color: var(--pc-green);
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gracias-step-text {
          font-size: 15px;
          color: var(--pc-text-soft);
          line-height: 1.5;
          padding-top: 4px;
        }
        .gracias-step-text strong {
          color: var(--pc-text);
          font-weight: 600;
        }

        /* ── Email note ── */
        .gracias-email-note {
          margin-top: 32px;
          padding: 16px 20px;
          background: rgba(45,106,79,0.04);
          border-radius: 12px;
          border: 1px solid rgba(45,106,79,0.1);
          font-size: 14px;
          color: var(--pc-text-soft);
          line-height: 1.5;
        }
        .gracias-email-note svg {
          vertical-align: -2px;
          margin-right: 6px;
        }

        /* ── Footer ── */
        .gracias-footer {
          position: relative;
          z-index: 2;
          margin-top: 48px;
          padding: 24px 20px 40px;
          text-align: center;
        }
        .gracias-footer-text {
          font-size: 13px;
          color: var(--pc-text-soft);
          opacity: 0.6;
          line-height: 1.6;
        }
        .gracias-footer-text a {
          color: var(--pc-green);
          text-decoration: none;
        }
        .gracias-footer-text a:hover {
          text-decoration: underline;
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .gracias-card {
            padding: 36px 24px;
            border-radius: 16px;
          }
          .gracias-title {
            font-size: 26px;
          }
          .gracias-download {
            width: 100%;
            justify-content: center;
            padding: 16px 32px;
          }
          .gracias-main {
            margin-top: 16px;
          }
        }
      `}</style>

      <div className="gracias-page">

        {/* Confetti */}
        {showConfetti && (
          <div className={`confetti-container ${!showConfetti ? 'fade-out' : ''}`}>
            {Array.from({ length: 40 }).map((_, i) => {
              const colors = ['#2D6A4F', '#52B788', '#40916C', '#D8F3DC', '#95D5B2', '#1B4332'];
              return (
                <div
                  key={i}
                  className="confetti-dot"
                  style={{
                    left: `${Math.random() * 100}%`,
                    background: colors[Math.floor(Math.random() * colors.length)],
                    animationDuration: `${2 + Math.random() * 2}s`,
                    animationDelay: `${Math.random() * 0.8}s`,
                    width: `${6 + Math.random() * 6}px`,
                    height: `${6 + Math.random() * 6}px`,
                    borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                  }}
                />
              );
            })}
          </div>
        )}

        {/* Nav */}
        <nav className="gracias-nav">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#1A6B4B" strokeWidth="2" fill="#1A6B4B" fillOpacity="0.06"/>
              <path d="M20 8C20 8 13 14 13 21a7 7 0 0014 0c0-7-7-13-7-13z" stroke="#1A6B4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="#1A6B4B" fillOpacity="0.1"/>
              <path d="M17 22c0 0 1 2.5 3 2.5s3-2.5 3-2.5" stroke="#1A6B4B" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
              <circle cx="15" cy="16" r="0.8" fill="#1A6B4B" opacity="0.25"/>
              <circle cx="25" cy="18" r="0.6" fill="#1A6B4B" opacity="0.2"/>
              <circle cx="18" cy="12" r="0.5" fill="#1A6B4B" opacity="0.15"/>
              <path d="M20 28v4" stroke="#1A6B4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
            </svg>
            <div>
              <div style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: 17, fontWeight: 700, color: "#191919",
                lineHeight: 1.1, letterSpacing: "-0.02em",
              }}>
                PuraClaridad
              </div>
              <div style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: 9.5, fontWeight: 500, color: "#6B6B6B",
                letterSpacing: "0.12em", textTransform: "uppercase",
                marginTop: 1,
              }}>
                Vida sin microplásticos
              </div>
            </div>
          </div>
        </nav>

        {/* Main */}
        <main className="gracias-main">
          <div className="gracias-card">

            {/* Badge */}
            <div className="gracias-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#2D6A4F"/>
                <path d="M5 8.5L7 10.5L11 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Compra confirmada
            </div>

            {/* Title */}
            <h1 className="gracias-title">
              Tu guía está lista
            </h1>
            <p className="gracias-subtitle">
              Has dado un paso importante para proteger tu salud y la de tu familia. 
              Descarga tu guía ahora y empieza a aplicar los cambios hoy mismo.
            </p>

            {/* Download */}
            <a
              href={PDF_URL}
              download="Guia-Microplasticos-PuraClaridad.pdf"
              className={`gracias-download ${downloaded ? 'downloaded' : ''}`}
              onClick={handleDownload}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {downloaded ? '¡Descargada!' : 'Descargar mi guía'}
            </a>
            <p className="gracias-download-note">PDF · Descarga inmediata</p>

            {/* Divider */}
            <div className="gracias-divider" />

            {/* Steps */}
            <p className="gracias-steps-title">Próximos pasos</p>
            <div className="gracias-steps">
              <div className="gracias-step">
                <div className="gracias-step-num">1</div>
                <div className="gracias-step-text">
                  <strong>Descarga y lee</strong> la guía completa — está diseñada para leerla en 30 minutos.
                </div>
              </div>
              <div className="gracias-step">
                <div className="gracias-step-num">2</div>
                <div className="gracias-step-text">
                  <strong>Empieza por la cocina</strong> — es donde los cambios más pequeños tienen el mayor impacto.
                </div>
              </div>
              <div className="gracias-step">
                <div className="gracias-step-num">3</div>
                <div className="gracias-step-text">
                  <strong>Revisa tu checklist</strong> incluida al final para ir marcando cada cambio que hagas.
                </div>
              </div>
            </div>

            {/* Email note */}
            <div className="gracias-email-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 4L12 13L2 4"/>
              </svg>
              También recibirás la guía por email en los próximos minutos. 
              Revisa tu bandeja de spam si no la encuentras.
            </div>

          </div>
        </main>

        {/* Footer */}
        <footer className="gracias-footer">
          <p className="gracias-footer-text">
            ¿Alguna duda? Escríbenos a{' '}
            <a href="mailto:hola@puraclaridad.com">hola@puraclaridad.com</a>
            <br />
            © {new Date().getFullYear()} PuraClaridad. Todos los derechos reservados.
          </p>
        </footer>

      </div>
    </>
  );
}
