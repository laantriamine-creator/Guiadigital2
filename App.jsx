import { useState, useEffect, useRef, useMemo } from "react";

/* ═══ FUNNEL MICROPLÁSTICOS v4 — Spanish Market Optimized ═══ */

// ─── SVG ICONS ───
function IconFood({ size = 32, color = "#D97B2B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M10 36c0 2 1.5 4 4 4h20c2.5 0 4-2 4-4" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M8 36h32" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <ellipse cx="24" cy="28" rx="14" ry="8" stroke={color} strokeWidth="2.2"/>
      <path d="M18 24c1-3 2.5-5 6-5s5 2 6 5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="1 3"/>
      <path d="M24 8v5m-4-3l4 3 4-3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="28" r="1.2" fill={color} opacity="0.5"/>
      <circle cx="28" cy="27" r="1" fill={color} opacity="0.5"/>
    </svg>
  );
}

function IconWater({ size = 32, color = "#2B7BD9" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 6C24 6 12 20 12 30a12 12 0 0024 0c0-10-12-24-12-24z" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 30c0 0 2 4 6 4s6-4 6-4" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
      <path d="M20 26c1-1 2.5-1 3.5 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

function IconHome({ size = 32, color = "#7B2BD9" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M8 22L24 8l16 14" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 20v18h24V20" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="20" y="28" width="8" height="10" rx="1" stroke={color} strokeWidth="1.8"/>
      <path d="M20 33h8" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      <path d="M16 26h4v4h-4z" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
    </svg>
  );
}

function IconCare({ size = 32, color = "#D92B7B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M20 8h8a4 4 0 014 4v24a4 4 0 01-4 4h-8a4 4 0 01-4-4V12a4 4 0 014-4z" stroke={color} strokeWidth="2.2"/>
      <path d="M20 8h8v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V8z" stroke={color} strokeWidth="1.8" fill={color} opacity="0.12"/>
      <ellipse cx="24" cy="26" rx="4" ry="5" stroke={color} strokeWidth="1.8" opacity="0.6"/>
      <path d="M24 23v6M22 26h4" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

function IconTextile({ size = 32, color = "#2BD9A3" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M14 12l4 4h12l4-4" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 12c-2 0-4 1-4 3v2l4 1" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M34 12c2 0 4 1 4 3v2l-4 1" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 18v20h20V18" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 24c1.5 1 3 1 4.5 0s3-1 4.5 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <path d="M20 30c1.5 1 3 1 4.5 0s3-1 4.5 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    </svg>
  );
}

function IconCheck({ size = 24, color = "#1A6B4B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="13" stroke={color} strokeWidth="2" opacity="0.15" fill={color}/>
      <path d="M10 16.5l4.5 4.5 8-9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconCheckSmall({ size = 18, color = "#1A6B4B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 13l4 4 10-11" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconShield({ size = 48, color = "#27AE60" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 4L8 12v12c0 10 7 17 16 20 9-3 16-10 16-20V12L24 4z" stroke={color} strokeWidth="2.2" strokeLinejoin="round" fill={color} fillOpacity="0.08"/>
      <path d="M17 24l5 5 9-10" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconSearch({ size = 48, color = "#D4A72C" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="22" cy="22" r="12" stroke={color} strokeWidth="2.5"/>
      <path d="M31 31l9 9" stroke={color} strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M18 18c0 0 2-3 5-3s4 2 5 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

function IconLeaf({ size = 48, color = "#4A9B7F" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M12 38C12 38 10 20 24 10c14-10 16 4 16 4s2 14-12 24" stroke={color} strokeWidth="2.2" strokeLinecap="round" fill={color} fillOpacity="0.06"/>
      <path d="M14 36c4-6 10-12 20-18" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
      <path d="M20 28c2-2 5-5 8-6" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
    </svg>
  );
}

function IconChart({ size = 28, color = "#1A6B4B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="4" y="18" width="5" height="10" rx="1.5" fill={color} opacity="0.3"/>
      <rect x="13" y="12" width="5" height="16" rx="1.5" fill={color} opacity="0.5"/>
      <rect x="22" y="6" width="5" height="22" rx="1.5" fill={color} opacity="0.7"/>
    </svg>
  );
}

function IconTarget({ size = 28, color = "#1A6B4B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke={color} strokeWidth="1.8" opacity="0.3"/>
      <circle cx="16" cy="16" r="7" stroke={color} strokeWidth="1.8" opacity="0.5"/>
      <circle cx="16" cy="16" r="2.5" fill={color} opacity="0.7"/>
    </svg>
  );
}

function IconBook({ size = 28, color = "#1A6B4B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M6 6h9c2 0 3 1 3 2v18c0-1-1-2-3-2H6V6z" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.06"/>
      <path d="M26 6h-9c-2 0-3 1-3 2v18c0-1 1-2 3-2h9V6z" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.06"/>
      <path d="M10 12h3m-3 3h4m5-3h3m-3 3h4" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
    </svg>
  );
}

function IconLock({ size = 16, color = "#6B6B6B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke={color} strokeWidth="1.8"/>
      <path d="M8 11V8a4 4 0 018 0v3" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1.5" fill={color}/>
    </svg>
  );
}

function IconMail({ size = 16, color = "#6B6B6B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth="1.8"/>
      <path d="M3 7l9 6 9-6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconX({ size = 16, color = "#6B6B6B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8"/>
      <path d="M8 8l8 8m0-8l-8 8" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function IconArrow({ size = 18, color = "#C0392B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m-4-4l4 4-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconCalendar({ size = 22, color = "#1A6B4B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="3" y="6" width="22" height="19" rx="3" stroke={color} strokeWidth="1.8"/>
      <path d="M3 12h22" stroke={color} strokeWidth="1.5"/>
      <path d="M9 3v5m10-5v5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="10" cy="17" r="1.2" fill={color} opacity="0.4"/>
      <circle cx="14" cy="17" r="1.2" fill={color} opacity="0.4"/>
      <circle cx="18" cy="17" r="1.2" fill={color} opacity="0.4"/>
    </svg>
  );
}

function IconFlag({ size = 22, color = "#C0392B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="3" y="5" width="22" height="18" rx="2" stroke={color} strokeWidth="1.5"/>
      <path d="M3 10h22M3 18h22" stroke={color} strokeWidth="1.5"/>
      <rect x="3" y="10" width="22" height="8" fill={color} fillOpacity="0.12"/>
    </svg>
  );
}

function IconPin({ size = 22, color = "#1A6B4B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <path d="M8 4h12l2 10H6L8 4z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill={color} fillOpacity="0.08"/>
      <path d="M14 14v10" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M10 24h8" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function IconStudy({ size = 22, color = "#1A6B4B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <path d="M14 4L2 10l12 6 12-6L14 4z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill={color} fillOpacity="0.06"/>
      <path d="M6 12v8c0 2 3.5 4 8 4s8-2 8-4v-8" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function IconSpainFlag({ size = 22 }) {
  const w = size;
  const h = size * 0.7;
  return (
    <svg width={w} height={h} viewBox="0 0 30 21" fill="none" style={{ borderRadius: 3, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.12)" }}>
      <rect width="30" height="21" rx="2" fill="#C60B1E"/>
      <rect y="5" width="30" height="11" fill="#FFC400"/>
    </svg>
  );
}

function IconMicroscope({ size = 22, color = "#1A6B4B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="16" cy="8" r="4" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.06"/>
      <path d="M14 12v8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 16h-4a4 4 0 00-4 4v0h16v0a4 4 0 00-4-4h-4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 24h12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="16" cy="8" r="1.5" fill={color} opacity="0.3"/>
    </svg>
  );
}

function IconClipboard({ size = 22, color = "#1A6B4B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="5" y="4" width="18" height="20" rx="3" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.04"/>
      <path d="M10 4v-0a4 4 0 018 0v0" stroke={color} strokeWidth="1.8"/>
      <rect x="10" y="2" width="8" height="4" rx="1.5" fill={color} opacity="0.15" stroke={color} strokeWidth="1"/>
      <path d="M9 12h10M9 16h7M9 20h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

const CAT_ICONS = { food: IconFood, water: IconWater, home: IconHome, care: IconCare, textile: IconTextile };

// ─── BRAND LOGO ───
function BrandLogo({ size = 28, color = "#1A6B4B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.06"/>
      <path d="M20 8C20 8 13 14 13 21a7 7 0 0014 0c0-7-7-13-7-13z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill={color} fillOpacity="0.1"/>
      <path d="M17 22c0 0 1 2.5 3 2.5s3-2.5 3-2.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
      <circle cx="15" cy="16" r="0.8" fill={color} opacity="0.25"/>
      <circle cx="25" cy="18" r="0.6" fill={color} opacity="0.2"/>
      <circle cx="18" cy="12" r="0.5" fill={color} opacity="0.15"/>
      <path d="M20 28v4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    </svg>
  );
}

// ─── HEADER ───
function Header({ onLogoClick, context, onCtaClick, quizProgress }) {
  return (
    <header style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "14px 20px", maxWidth: 620, margin: "0 auto",
      borderBottom: "1px solid #E8E6E1",
    }}>
      <div
        onClick={onLogoClick}
        style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
      >
        <BrandLogo size={32} color="#1A6B4B" />
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

      {/* Right side — contextual */}
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <IconSpainFlag size={18} />
        {context === "landing" && (
          <button
            onClick={onCtaClick}
            style={{
              background:"linear-gradient(135deg,#1A6B4B,#0F4D33)",
              color:"#fff", border:"none", borderRadius:10,
              padding:"8px 16px", fontSize:13, fontWeight:600,
              cursor:"pointer", fontFamily:"'Outfit', system-ui, sans-serif",
              boxShadow:"0 2px 8px rgba(26,107,75,0.2)",
              transition:"all 0.2s",
              whiteSpace:"nowrap",
            }}
          >
            Hacer el test
          </button>
        )}
        {context === "quiz" && quizProgress && (
          <span style={{
            fontSize:12, fontWeight:600, color:"#1A6B4B",
            background:"#E4F2EB", padding:"6px 12px", borderRadius:8,
            fontFamily:"'Outfit', system-ui, sans-serif",
          }}>
            {quizProgress.current}/{quizProgress.total}
          </span>
        )}
      </div>
    </header>
  );
}

// ─── FOOTER ───
function Footer({ onLegalClick }) {
  const linkStyle = {
    color: "#6B6B6B", textDecoration: "none", fontSize: 12,
    fontFamily: "'Outfit', system-ui, sans-serif",
    cursor: "pointer", transition: "color 0.2s",
  };
  const pages = ["aviso-legal","privacidad","cookies","terminos","contacto"];
  const labels = ["Aviso Legal","Política de Privacidad","Política de Cookies","Términos y Condiciones","Contacto"];
  return (
    <footer style={{
      borderTop: "1px solid #E8E6E1",
      padding: "32px 20px 40px",
      maxWidth: 620, margin: "0 auto",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <BrandLogo size={22} color="#6B6B6B" />
        <span style={{
          fontFamily: "'Source Serif 4', Georgia, serif",
          fontSize: 14, fontWeight: 600, color: "#6B6B6B",
        }}>PuraClaridad</span>
      </div>
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "8px 20px",
        marginBottom: 16,
      }}>
        {pages.map((p,i) => (
          <a key={p} href="#" onClick={e => { e.preventDefault(); onLegalClick(p); }} style={linkStyle}>
            {labels[i]}
          </a>
        ))}
      </div>
      <p style={{
        fontSize: 11, color: "#9A9A9A", lineHeight: 1.5, margin: "0 0 8px",
        fontFamily: "'Outfit', system-ui, sans-serif",
      }}>
        Este test ofrece una estimación orientativa basada en hábitos cotidianos. No constituye un diagnóstico médico ni sustituye el consejo de profesionales de la salud. El contenido tiene fines educativos e informativos.
      </p>
      <p style={{
        fontSize: 11, color: "#9A9A9A", margin: 0,
        fontFamily: "'Outfit', system-ui, sans-serif",
      }}>
        © {new Date().getFullYear()} PuraClaridad. Todos los derechos reservados.
      </p>
    </footer>
  );
}

// ─── LEGAL PAGES CONTENT (unchanged — truncated for brevity, same object) ───
const LEGAL_CONTENT = {
  "aviso-legal": {
    title: "Aviso Legal",
    sections: [
      { heading: "Datos identificativos", text: "En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), a continuación se reflejan los datos del titular de este sitio web:\n\nTitular: PuraClaridad\nDomicilio: [Dirección fiscal completa]\nNIF/CIF: [Número de identificación fiscal]\nEmail de contacto: hola@puraclaridad.com\nActividad: Venta de productos digitales educativos relacionados con salud ambiental y microplásticos." },
      { heading: "Objeto y ámbito de aplicación", text: "El presente Aviso Legal regula el uso del sitio web puraclaridad.com (en adelante, el «Sitio Web»), del que es titular PuraClaridad. La navegación por el Sitio Web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal." },
      { heading: "Propiedad intelectual e industrial", text: "Todos los contenidos del Sitio Web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseños, ilustraciones y código fuente, así como las marcas, nombres comerciales y signos distintivos, son propiedad de PuraClaridad o de terceros que han autorizado su uso, y están protegidos por las leyes de propiedad intelectual e industrial vigentes.\n\nQueda expresamente prohibida la reproducción, distribución, comunicación pública y transformación de cualquiera de estos contenidos sin autorización expresa y por escrito de PuraClaridad." },
      { heading: "Exclusión de responsabilidad", text: "PuraClaridad no se hace responsable de la información y contenidos almacenados en foros, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en el Sitio Web.\n\nEl contenido de este sitio web tiene fines exclusivamente educativos e informativos. No constituye asesoramiento médico, diagnóstico ni tratamiento. Ante cualquier duda sobre su salud, consulte siempre con un profesional sanitario cualificado." },
      { heading: "Legislación aplicable y jurisdicción", text: "Para la resolución de todas las controversias o cuestiones relacionadas con el presente Sitio Web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes." },
    ],
  },
  "privacidad": { title: "Política de Privacidad", sections: [{ heading: "Responsable del tratamiento", text: "Responsable: PuraClaridad\nEmail: hola@puraclaridad.com\n\nEn PuraClaridad tratamos la información que nos facilitan las personas interesadas con el fin de prestar los servicios solicitados. Los datos se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales." }, { heading: "Derechos del interesado", text: "Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad escribiendo a hola@puraclaridad.com indicando en el asunto «Ejercicio de derechos RGPD»." }] },
  "cookies": { title: "Política de Cookies", sections: [{ heading: "¿Qué son las cookies?", text: "Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario cuando los visitan. Su finalidad principal es reconocer al usuario y mejorar su experiencia de navegación." }, { heading: "Gestión de cookies", text: "El usuario puede configurar su navegador para aceptar o rechazar todas las cookies. Si bloquea el uso de cookies, es posible que algunos servicios no estén disponibles." }] },
  "terminos": { title: "Términos y Condiciones", sections: [{ heading: "Objeto", text: "Los presentes Términos y Condiciones regulan la adquisición de productos digitales a través de puraclaridad.com. Al realizar una compra, el usuario acepta íntegramente estos términos." }, { heading: "Derecho de desistimiento y garantía", text: "El usuario dispone de un plazo de 14 días naturales para ejercer su derecho de desistimiento. Además, PuraClaridad ofrece una garantía de satisfacción de 30 días. Si el usuario no queda satisfecho, puede solicitar la devolución íntegra escribiendo a hola@puraclaridad.com." }] },
  "contacto": { title: "Contacto", sections: [{ heading: "Email", text: "hola@puraclaridad.com\n\nResponderemos en un plazo máximo de 48 horas laborables." }, { heading: "Horario", text: "Lunes a viernes: 9:00 - 18:00 (hora peninsular española)" }] },
};

// ─── LEGAL PAGE COMPONENT ───
function LegalPage({ pageKey, onBack, onLogoClick, onLegalClick }) {
  const page = LEGAL_CONTENT[pageKey];
  if (!page) return null;
  const sans = "'Outfit', system-ui, sans-serif";
  const serif = "'Source Serif 4', Georgia, serif";
  return (
    <div style={{ fontFamily: sans, color: "#191919", background: "#FAFAF7", minHeight: "100vh" }}>
      <Header onLogoClick={onLogoClick} />
      <section style={{ padding: "32px 20px 48px", maxWidth: 620, margin: "0 auto" }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", color: "#6B6B6B", fontSize: 13,
          cursor: "pointer", fontFamily: sans, fontWeight: 500, marginBottom: 20,
          display: "flex", alignItems: "center", gap: 6, padding: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5m4 4l-4-4 4-4" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Volver
        </button>
        <h1 style={{ fontFamily: serif, fontSize: 28, fontWeight: 600, marginBottom: 8, lineHeight: 1.2 }}>
          {page.title}
        </h1>
        <p style={{ fontSize: 12, color: "#9A9A9A", marginBottom: 32 }}>
          Última actualización: {new Date().toLocaleDateString("es-ES", { year:"numeric", month:"long", day:"numeric" })}
        </p>
        {page.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 28 }}>
            <h2 style={{ fontFamily: serif, fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#191919" }}>
              {s.heading}
            </h2>
            {s.text.split("\n\n").map((para, j) => (
              <p key={j} style={{ fontSize: 14, color: "#5A5A5A", lineHeight: 1.65, margin: "0 0 12px", whiteSpace: "pre-line" }}>
                {para}
              </p>
            ))}
          </div>
        ))}
      </section>
      <Footer onLegalClick={onLegalClick} />
    </div>
  );
}

// ─── LANDING ANIMATIONS CSS ───
const landingCSS = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes heroBadgePop {
    0% { opacity: 0; transform: scale(0.8) translateY(10px); }
    60% { transform: scale(1.05) translateY(0); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes staggerCard {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes floatSlow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 4px 14px rgba(26,107,75,0.25); }
    50% { box-shadow: 0 6px 28px rgba(26,107,75,0.4); }
  }
  .hero-badge { animation: heroBadgePop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s both; }
  .hero-h1 { animation: heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
  .hero-sub { animation: heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
  .hero-cta { animation: heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
  .hero-proof { animation: heroFadeUp 0.5s ease 0.7s both; }
  .hero-cta-btn { animation: pulseGlow 2.5s ease-in-out 1.5s infinite; }
  .stagger-1 { animation: staggerCard 0.5s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
  .stagger-2 { animation: staggerCard 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
  .stagger-3 { animation: staggerCard 0.5s cubic-bezier(0.16,1,0.3,1) 0.45s both; }
  .float-icon { animation: floatSlow 3s ease-in-out infinite; }
  .float-icon-d { animation: floatSlow 3.5s ease-in-out 0.5s infinite; }
`;

// ─── DATA ───
const CATEGORIES = {
  food: { key: "food", label: "Alimentación", color: "#D97B2B" },
  water: { key: "water", label: "Agua", color: "#2B7BD9" },
  home: { key: "home", label: "Hogar y aire", color: "#7B2BD9" },
  care: { key: "care", label: "Cuidado personal", color: "#D92B7B" },
  textile: { key: "textile", label: "Textiles y ropa", color: "#2BD9A3" },
};
const CAT_KEYS = ["food", "water", "home", "care", "textile"];

const QUIZ = [
  { id:1, question:"¿En qué tipo de recipiente sueles calentar o conservar tu comida?", categories:["food"], options:[{text:"Tápers de plástico, en el microondas incluido",score:0},{text:"Plástico, pero nunca lo caliento",score:1},{text:"Mezclo: cristal, plástico y cerámica",score:2},{text:"Casi siempre cristal, acero o cerámica",score:3}], micro:null },
  { id:2, question:"¿Cuál es tu fuente principal de agua para beber?", categories:["water"], options:[{text:"Botellas de plástico compradas regularmente",score:0},{text:"Agua del grifo, sin filtrar",score:1},{text:"Agua del grifo con jarra filtrante",score:2},{text:"Agua filtrada con sistema fijo o en botella de cristal",score:3}], micro:"Bien, ya tenemos la base. Vamos a profundizar." },
  { id:3, question:"Cuando compras ropa, ¿te fijas en la composición del tejido?", categories:["textile"], options:[{text:"Nunca, compro lo que me gusta sin mirar",score:0},{text:"A veces, pero no influye mucho en mi decisión",score:1},{text:"Sí, intento elegir algodón o fibras naturales",score:2},{text:"Siempre. Evito poliéster y sintéticos a propósito",score:3}], micro:null },
  { id:4, question:"¿Cómo sueles lavar tu ropa sintética (poliéster, nylon, etc.)?", categories:["textile","water"], options:[{text:"Lavadora normal, programa largo y agua caliente",score:0},{text:"Lavadora normal, no me fijo en el programa",score:1},{text:"Lavadora con agua fría y ciclo corto cuando puedo",score:2},{text:"Uso bolsa de microfibras o filtro + agua fría",score:3}], micro:"Cada hábito cuenta. Tu perfil se está ajustando." },
  { id:5, question:"¿Alguna vez has comprobado si tus cosméticos contienen microplásticos?", categories:["care"], options:[{text:"No, ni sabía que podían contenerlos",score:0},{text:"He oído algo, pero nunca he revisado",score:1},{text:"Sí, he empezado a buscar alternativas",score:2},{text:"Sí, uso productos certificados libres de microplásticos",score:3}], micro:null },
  { id:6, question:"¿Con qué frecuencia usas film transparente, bandejas de porexpán o bolsas de plástico?", categories:["food"], options:[{text:"A diario, es lo más práctico",score:0},{text:"Varias veces por semana",score:1},{text:"Intento reducirlo, pero aún los uso",score:2},{text:"Casi nunca: uso cera de abeja, silicona o cristal",score:3}], micro:"Ya casi estamos. Tu perfil está tomando forma." },
  { id:7, question:"¿Cómo describirías la ventilación y limpieza de tu hogar?", categories:["home"], options:[{text:"Ventilo poco y uso productos de limpieza estándar",score:0},{text:"Ventilo a diario, pero no pienso en los productos",score:1},{text:"Ventilo y elijo productos naturales cuando puedo",score:2},{text:"Ventilación frecuente, productos ecológicos y aspirado regular",score:3}], micro:null },
  { id:8, question:"¿Usas tablas de cortar, espátulas o utensilios de cocina de plástico?", categories:["food","home"], options:[{text:"Sí, casi toda mi cocina es de plástico",score:0},{text:"Bastante, aunque tengo algo de madera",score:1},{text:"Mezcla de plástico, madera y acero",score:2},{text:"Casi todo de madera, acero o silicona de calidad",score:3}], micro:null },
  { id:9, question:"Pensando en tu día a día, ¿qué frase te representa mejor?", categories:["food","water","home","care","textile"], options:[{text:"No me he parado a pensar en el plástico de mi entorno",score:0},{text:"Soy algo consciente, pero no he cambiado mucho",score:1},{text:"He hecho algunos cambios concretos",score:2},{text:"Es un tema que gestiono activamente en mi vida",score:3}], micro:"Última pregunta — y tu resultado estará listo." },
];

const ADVICE = {
  food:{low:{level:"Exposición alta",detail:"Tus hábitos de conservación y preparación sugieren una exposición frecuente a microplásticos a través de envases y utensilios.",tips:["Evita calentar comida en plástico: usa cristal o cerámica.","Sustituye el film por tapas de silicona o cera de abeja.","Cambia tablas de plástico por madera o bambú."]},mid:{level:"Exposición moderada",detail:"Ya tomas precauciones, pero hay hábitos que podrían aumentar tu contacto con micropartículas.",tips:["Prioriza cristal para almacenar y recalentar.","Reduce film y bandejas de porexpán.","Revisa utensilios desgastados."]},high:{level:"Exposición baja",detail:"Tus hábitos alimentarios están alineados con las recomendaciones.",tips:["Mantén cristal y materiales inertes.","Revisa envases periódicamente.","Evita envases plásticos también en la compra."]}},
  water:{low:{level:"Exposición alta",detail:"El agua en botellas de plástico es una de las fuentes más estudiadas de exposición a microplásticos.",tips:["Prueba un filtro de grifo o jarra filtrante.","Usa botellas de acero o cristal.","Evita botellas de plástico al sol."]},mid:{level:"Exposición moderada",detail:"Reduces parte de la exposición, pero hay margen con cambios sencillos.",tips:["Cambia el filtro según instrucciones.","No rellenes botellas de plástico de un solo uso.","Considera filtrado fijo."]},high:{level:"Exposición baja",detail:"Tu hábito minimiza una de las vías más comunes.",tips:["Sigue con tu sistema actual.","Revisa el filtro regularmente.","Comparte lo que sabes."]}},
  home:{low:{level:"Exposición alta",detail:"Poca ventilación y productos estándar pueden incrementar la acumulación de microplásticos en el hogar.",tips:["Ventila al menos 10-15 minutos al día.","Aspira o friega regularmente.","Valora productos ecológicos."]},mid:{level:"Exposición moderada",detail:"Ventilar a diario es un gran paso. Optimizar productos ayudará más.",tips:["Añade aspirado con filtro HEPA.","Revisa productos de limpieza.","Ventilación cruzada al cocinar."]},high:{level:"Exposición baja",detail:"Tu combinación de ventilación y productos ecológicos es muy efectiva.",tips:["Mantén estos hábitos.","Revisa materiales de mobiliario.","Un purificador HEPA complementa bien."]}},
  care:{low:{level:"Exposición alta",detail:"Muchos cosméticos contienen microesferas o polímeros sintéticos difíciles de identificar.",tips:["Busca polyethylene o polypropylene en etiquetas.","Prueba Beat the Microbead para escanear.","Cambia un producto por alternativa natural."]},mid:{level:"Exposición moderada",detail:"Tienes conciencia, pero la transición lleva tiempo. Producto a producto.",tips:["Al acabar un producto, elige sustituto revisando etiqueta.","Prioriza certificaciones ecológicas.","Productos sólidos contienen menos plástico."]},high:{level:"Exposición baja",detail:"Tu atención a ingredientes reduce esta vía significativamente.",tips:["Verifica etiquetas con productos nuevos.","Las formulaciones cambian: revisa marcas conocidas.","Comparte: es de los cambios más fáciles."]}},
  textile:{low:{level:"Exposición alta",detail:"La ropa sintética libera microfibras con cada lavado.",tips:["Lava sintéticos con agua fría y ciclo corto.","Usa bolsa de microfibras tipo Guppyfriend.","El algodón libera mucho menos plástico."]},mid:{level:"Exposición moderada",detail:"Tomas precauciones, pero el lavado es el momento clave.",tips:["Prioriza lavados cortos y fríos.","Bolsa de microfibras para ropa deportiva.","Fíjate en la composición al comprar."]},high:{level:"Exposición baja",detail:"Tu elección de materiales y lavado te sitúa entre los que menos aportan al problema.",tips:["Sigue con fibras naturales.","Revisa acabados sintéticos en etiquetas.","Alarga vida útil: menos lavados = menos fibras."]}},
};

// ─── STYLES ───
const P = { bg:"#FAFAF7", card:"#FFFFFF", text:"#191919", muted:"#6B6B6B", accent:"#1A6B4B", accentLight:"#E4F2EB", accentDark:"#0F4D33", border:"#E8E6E1", warm:"#F3EFE7", red:"#C0392B", orange:"#E67E22", green:"#27AE60" };
const sans = "'Outfit', system-ui, sans-serif";
const serif = "'Source Serif 4', Georgia, serif";

// ─── SHARED UI ───
function Badge({ children, style }) {
  return <span style={{ display:"inline-block", fontSize:11, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", background:P.accentLight, color:P.accent, padding:"5px 14px", borderRadius:24, fontFamily:sans, ...style }}>{children}</span>;
}

function Btn({ children, onClick, disabled, variant = "primary", style }) {
  const v = {
    primary: { background:`linear-gradient(135deg,${P.accent},${P.accentDark})`, color:"#fff", border:"none", boxShadow:"0 4px 14px rgba(26,107,75,0.25)" },
    secondary: { background:"transparent", color:P.accent, border:`2px solid ${P.accent}`, boxShadow:"none" },
    ghost: { background:"transparent", color:P.muted, border:"none", textDecoration:"underline", padding:"8px 16px", boxShadow:"none" },
  };
  return <button onClick={onClick} disabled={disabled} style={{ padding:"16px 32px", borderRadius:14, fontSize:16, fontWeight:600, cursor:disabled?"default":"pointer", opacity:disabled?0.45:1, width:"100%", fontFamily:sans, transition:"all 0.2s", ...v[variant], ...style }}>{children}</button>;
}

function Section({ children, style, id }) {
  return <section id={id} style={{ padding:"44px 20px", maxWidth:620, margin:"0 auto", ...style }}>{children}</section>;
}

function Card({ children, style }) {
  return <div style={{ background:P.card, borderRadius:16, padding:"24px 22px", border:`1px solid ${P.border}`, ...style }}>{children}</div>;
}

function Divider() {
  return <div style={{ height:1, background:P.border, margin:"0 auto", maxWidth:620 }} />;
}

function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div style={{ padding:"0 20px", maxWidth:620, margin:"0 auto 8px" }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6, fontSize:12, color:P.muted, fontWeight:500, fontFamily:sans }}>
        <span>Pregunta {current} de {total}</span><span>{pct}%</span>
      </div>
      <div style={{ height:7, background:P.border, borderRadius:99, overflow:"hidden" }}>
        <div style={{ height:"100%", background:`linear-gradient(90deg,${P.accent},#2ECC71)`, borderRadius:99, width:`${pct}%`, transition:"width 0.5s cubic-bezier(0.4,0,0.2,1)" }} />
      </div>
    </div>
  );
}

// ─── NUTRI-SCORE SYSTEM ───
const GRADES = [
  { letter: "A", label: "Muy protegido", color: "#1B8A4E", bg: "#1B8A4E" },
  { letter: "B", label: "Buena protección", color: "#8BC34A", bg: "#8BC34A" },
  { letter: "C", label: "Protección moderada", color: "#FFC107", bg: "#FFC107" },
  { letter: "D", label: "Protección baja", color: "#FF9800", bg: "#FF9800" },
  { letter: "E", label: "Exposición alta", color: "#E53935", bg: "#E53935" },
];

function pctToGrade(pct) {
  if (pct >= 80) return 0; // A
  if (pct >= 60) return 1; // B
  if (pct >= 40) return 2; // C
  if (pct >= 20) return 3; // D
  return 4; // E
}

function NutriScoreBadge({ pct, size = "large" }) {
  const activeIdx = pctToGrade(pct);
  const active = GRADES[activeIdx];
  const isLarge = size === "large";
  const letterW = isLarge ? 44 : 32;
  const letterH = isLarge ? 48 : 36;
  const fontSize = isLarge ? 22 : 16;
  const smallFont = isLarge ? 13 : 10;
  const gap = isLarge ? 4 : 3;
  const radius = isLarge ? 10 : 7;

  return (
    <div style={{ display:"inline-flex", flexDirection:"column", alignItems:"center" }}>
      <div style={{
        display:"flex", gap, borderRadius:radius+4, overflow:"hidden",
        boxShadow:"0 2px 8px rgba(0,0,0,0.1)",
      }}>
        {GRADES.map((g, i) => {
          const isActive = i === activeIdx;
          return (
            <div key={g.letter} style={{
              width:letterW, height:letterH,
              background: isActive ? g.bg : `${g.bg}18`,
              display:"flex", alignItems:"center", justifyContent:"center",
              transition:"all 0.5s cubic-bezier(0.4,0,0.2,1)",
              position:"relative",
            }}>
              <span style={{
                fontSize: isActive ? fontSize + 4 : fontSize,
                fontWeight: isActive ? 800 : 600,
                color: isActive ? "#fff" : `${g.color}55`,
                fontFamily: sans,
                transition:"all 0.5s ease",
              }}>
                {g.letter}
              </span>
              {isActive && isLarge && (
                <div style={{
                  position:"absolute", bottom:-8, left:"50%", transform:"translateX(-50%)",
                  width:0, height:0,
                  borderLeft:"6px solid transparent", borderRight:"6px solid transparent",
                  borderTop:`6px solid ${g.bg}`,
                }} />
              )}
            </div>
          );
        })}
      </div>
      {isLarge && (
        <div style={{ marginTop:14, textAlign:"center" }}>
          <span style={{ fontSize:15, fontWeight:700, color:active.color, fontFamily:sans }}>{active.label}</span>
        </div>
      )}
    </div>
  );
}

function ExposureBarGrade({ catKey, score, maxScore }) {
  const cat = CATEGORIES[catKey];
  const CatIcon = CAT_ICONS[catKey];
  const pct = Math.round((score / maxScore) * 100);
  const gradeIdx = pctToGrade(pct);
  const grade = GRADES[gradeIdx];

  return (
    <div style={{ marginBottom:18 }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
        <span style={{ fontSize:14, fontWeight:600, fontFamily:sans, display:"flex", alignItems:"center", gap:8 }}>
          <CatIcon size={22} color={cat.color} />{cat.label}
        </span>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
          <NutriScoreBadge pct={pct} size="small" />
        </div>
      </div>
    </div>
  );
}

function GuideRow({ icon, title, desc }) {
  return (
    <div style={{ display:"flex", gap:12, marginBottom:10, alignItems:"center" }}>
      <div style={{ flexShrink:0 }}>{icon}</div>
      <div><span style={{ fontWeight:600, fontSize:14 }}>{title}</span><span style={{ fontSize:13, color:P.muted }}>{" — "}{desc}</span></div>
    </div>
  );
}

// ─── STICKY BUY BAR ───
function StickyBuyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const guideEl = document.getElementById("guide-section");
      if (!guideEl) return;
      const rect = guideEl.getBoundingClientRect();
      // Show when guide section is in view or above viewport
      const show = rect.top < window.innerHeight * 0.6 && rect.bottom > 0;
      setVisible(show);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      position:"fixed", bottom:0, left:0, right:0,
      background:"rgba(255,255,255,0.95)",
      backdropFilter:"blur(12px)",
      WebkitBackdropFilter:"blur(12px)",
      borderTop:"1px solid #E8E6E1",
      padding:"10px 20px",
      zIndex:999,
      transform: visible ? "translateY(0)" : "translateY(100%)",
      transition:"transform 0.35s cubic-bezier(0.4,0,0.2,1)",
    }}>
      <div style={{
        maxWidth:620, margin:"0 auto",
        display:"flex", alignItems:"center", justifyContent:"space-between", gap:12,
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <span style={{
            fontFamily:"'Source Serif 4', Georgia, serif",
            fontSize:18, fontWeight:700, color:"#1A6B4B",
          }}>9,90 €</span>
          <span style={{ fontSize:12, color:"#6B6B6B", lineHeight:1.3 }}>Guía 21 días</span>
        </div>
        <button
          onClick={() => window.location.href = "https://buy.stripe.com/dRm6oH8syeNJ0y1aWK8ww00"}
          style={{
            background:"linear-gradient(135deg,#1A6B4B,#0F4D33)",
            color:"#fff", border:"none", borderRadius:10,
            padding:"10px 24px", fontSize:14, fontWeight:600,
            cursor:"pointer", fontFamily:"'Outfit', system-ui, sans-serif",
            boxShadow:"0 2px 10px rgba(26,107,75,0.25)",
            whiteSpace:"nowrap",
          }}
        >
          Comprar guía
        </button>
      </div>
    </div>
  );
}

// ─── MAIN APP ───
export default function Funnel() {
  const [step, setStep] = useState("landing");
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(true);
  const [legalPage, setLegalPage] = useState(null);
  const [prevStep, setPrevStep] = useState(null);
  const topRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Outfit:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    if (topRef.current) topRef.current.scrollIntoView({ behavior:"smooth" });
    setTimeout(() => setVisible(true), 60);
  }, [step, qIdx]);

  const scores = useMemo(() => {
    const cs = {}; const cm = {};
    CAT_KEYS.forEach(c => { cs[c] = 0; cm[c] = 0; });
    Object.entries(answers).forEach(([qi, ai]) => {
      const q = QUIZ[parseInt(qi)];
      q.categories.forEach(c => { cs[c] += q.options[ai].score; cm[c] += 3; });
    });
    const r = {}; let ts = 0, tm = 0;
    CAT_KEYS.forEach(c => {
      const mx = cm[c] || 1;
      const p = Math.round((cs[c] / mx) * 100);
      r[c] = { score:cs[c], max:cm[c]||1, pct:p, level:p>=70?"high":p>=40?"mid":"low" };
      ts += cs[c]; tm += cm[c];
    });
    const op = Math.round((ts / (tm||1)) * 100);
    r.overall = { score:ts, max:tm||1, pct:op, level:op>=70?"high":op>=40?"mid":"low" };
    return r;
  }, [answers]);

  function go(ns, nq) {
    setVisible(false);
    setTimeout(() => { if (ns) setStep(ns); if (nq !== undefined) setQIdx(nq); setVisible(true); }, 220);
  }

  const weakCats = CAT_KEYS.filter(c => scores[c] && scores[c].level === "low");
  const midCats = CAT_KEYS.filter(c => scores[c] && scores[c].level === "mid");
  const strongCats = CAT_KEYS.filter(c => scores[c] && scores[c].level === "high");
  const oColor = scores.overall.pct >= 70 ? P.green : scores.overall.pct >= 40 ? P.orange : P.red;

  function openLegal(pageKey) {
    setPrevStep(step);
    setLegalPage(pageKey);
    if (topRef.current) topRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function closeLegal() {
    setLegalPage(null);
    if (topRef.current) topRef.current.scrollIntoView({ behavior: "smooth" });
  }

  // ═══ LEGAL PAGES ═══
  if (legalPage) {
    return (
      <div ref={topRef}>
        <LegalPage
          pageKey={legalPage}
          onBack={closeLegal}
          onLogoClick={() => { setLegalPage(null); go("landing"); }}
          onLegalClick={openLegal}
        />
      </div>
    );
  }

  // ═══ LANDING ═══
  if (step === "landing") {
    return (
      <div ref={topRef} style={{ fontFamily:sans, color:P.text, background:P.bg, minHeight:"100vh" }}>
        <style dangerouslySetInnerHTML={{ __html: landingCSS }} />
        <Header onLogoClick={() => {}} context="landing" onCtaClick={() => go("quiz", 0)} />

        {/* HERO */}
        <Section style={{ textAlign:"center", paddingTop:40, paddingBottom:36, position:"relative", overflow:"hidden" }}>
          {/* Decorative floating particles */}
          <div style={{ position:"absolute", top:20, left:"10%", opacity:0.07 }} className="float-icon">
            <IconWater size={40} color={P.accent} />
          </div>
          <div style={{ position:"absolute", top:60, right:"8%", opacity:0.06 }} className="float-icon-d">
            <IconTextile size={36} color={P.accent} />
          </div>
          <div style={{ position:"absolute", bottom:40, left:"15%", opacity:0.05 }} className="float-icon-d">
            <IconCare size={32} color={P.accent} />
          </div>
          <div style={{ position:"absolute", bottom:20, right:"12%", opacity:0.06 }} className="float-icon">
            <IconFood size={34} color={P.accent} />
          </div>

          <div className="hero-badge"><Badge>Test gratuito · 2 minutos</Badge></div>
          <h1 className="hero-h1" style={{ fontFamily:serif, fontWeight:600, fontSize:34, lineHeight:1.18, margin:"20px 0 16px", position:"relative" }}>
            ¿Cuánto protegen tus hábitos frente a los microplásticos?
          </h1>
          <p className="hero-sub" style={{ fontSize:16, color:P.muted, maxWidth:500, margin:"0 auto 28px", lineHeight:1.55 }}>
            Responde 9 preguntas y obtén una estimación personalizada en 5 áreas clave de tu vida cotidiana. Resultado inmediato y gratuito.
          </p>
          <div className="hero-cta">
            <Btn onClick={() => go("quiz", 0)} style={{ maxWidth:420, margin:"0 auto" }}>
              Descubrir mi perfil de exposición
            </Btn>
          </div>

          {/* Trust metrics */}
          <div className="hero-proof" style={{ display:"flex", justifyContent:"center", gap:28, marginTop:28, flexWrap:"wrap" }}>
            {[["14.200+","tests completados"],["4,8/5","valoración media"],["2 min","tiempo medio"]].map(([n,l],i) => (
              <div key={i} style={{ textAlign:"center" }}>
                <div style={{ fontWeight:700, fontSize:20, color:P.accent, fontFamily:sans }}>{n}</div>
                <div style={{ fontSize:11, color:P.muted, marginTop:2 }}>{l}</div>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* WHAT YOU GET */}
        <Section>
          <Badge style={{ marginBottom:14 }}>Qué vas a obtener</Badge>
          <h2 style={{ fontFamily:serif, fontSize:26, fontWeight:600, marginBottom:20, lineHeight:1.2 }}>Un análisis personalizado, no genérico</h2>
          <Card className="stagger-1" style={{ marginBottom:12, display:"flex", gap:16, alignItems:"flex-start" }}>
            <div style={{ flexShrink:0, marginTop:2 }} className="float-icon"><IconChart size={30} color={P.accent} /></div>
            <div><div style={{ fontWeight:600, fontSize:15, marginBottom:4 }}>Estimación por categoría</div><div style={{ fontSize:14, color:P.muted }}>Tu nivel en 5 áreas con barras visuales.</div></div>
          </Card>
          <Card className="stagger-2" style={{ marginBottom:12, display:"flex", gap:16, alignItems:"flex-start" }}>
            <div style={{ flexShrink:0, marginTop:2 }} className="float-icon-d"><IconTarget size={30} color={P.accent} /></div>
            <div><div style={{ fontWeight:600, fontSize:15, marginBottom:4 }}>Consejos específicos por área</div><div style={{ fontSize:14, color:P.muted }}>Recomendaciones adaptadas a tus respuestas.</div></div>
          </Card>
          <Card className="stagger-3" style={{ marginBottom:12, display:"flex", gap:16, alignItems:"flex-start" }}>
            <div style={{ flexShrink:0, marginTop:2 }} className="float-icon"><IconBook size={30} color={P.accent} /></div>
            <div><div style={{ fontWeight:600, fontSize:15, marginBottom:4 }}>Guía práctica de 21 días</div><div style={{ fontSize:14, color:P.muted }}>Plan de acción priorizado por impacto, disponible tras el test.</div></div>
          </Card>
        </Section>

        <Divider />

        {/* HOW IT WORKS */}
        <Section>
          <Badge style={{ marginBottom:14 }}>Cómo funciona</Badge>
          <h2 style={{ fontFamily:serif, fontSize:26, fontWeight:600, marginBottom:24, lineHeight:1.2 }}>Tres pasos. Resultado inmediato.</h2>
          {["Responde 9 preguntas","Recibe tu estimación","Obtén tu plan"].map((t, i) => (
            <div key={i} className={`stagger-${i+1}`} style={{ display:"flex", gap:16, marginBottom:22, alignItems:"flex-start" }}>
              <div style={{ width:38, height:38, borderRadius:"50%", background:P.accent, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, fontSize:16, flexShrink:0, boxShadow:`0 3px 10px ${P.accent}33` }}>{i+1}</div>
              <div><div style={{ fontWeight:600, fontSize:15, marginBottom:3 }}>{t}</div><div style={{ fontSize:14, color:P.muted }}>
                {i===0?"Sobre alimentación, agua, hogar, cuidado personal y ropa.":i===1?"Un desglose visual por categoría con tu puntuación.":"Accede a la guía completa con acciones priorizadas para 21 días."}
              </div></div>
            </div>
          ))}
        </Section>

        {/* MID CTA */}
        <Section style={{ paddingTop:0 }}>
          <Card style={{ background:`linear-gradient(135deg, ${P.accentLight}, #F0F9F4)`, border:"none", textAlign:"center", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:-10, right:-10, opacity:0.06 }}><IconShield size={100} color={P.accent} /></div>
            <p style={{ fontSize:15, fontWeight:600, marginBottom:14, marginTop:0, position:"relative" }}>Los cambios más fáciles suelen ser los que más impactan.</p>
            <div style={{ position:"relative" }}>
              <Btn onClick={() => go("quiz", 0)}>Empezar el test gratuito</Btn>
            </div>
          </Card>
        </Section>

        <Divider />

        {/* QUIÉNES SOMOS */}
        <Section>
          <Badge style={{ marginBottom:14 }}>Quiénes somos</Badge>
          <h2 style={{ fontFamily:serif, fontSize:26, fontWeight:600, marginBottom:20, lineHeight:1.2 }}>Un proyecto de divulgación sobre salud ambiental</h2>
          <p style={{ fontSize:14, color:P.muted, lineHeight:1.6, marginBottom:20 }}>
            PuraClaridad nace de una frustración: la información sobre microplásticos está dispersa, es técnica y rara vez te dice qué hacer en tu día a día — y menos aún en España. Así que decidimos recopilarla, contrastarla y convertirla en algo práctico.
          </p>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            <Card style={{ display:"flex", gap:14, alignItems:"flex-start", padding:"16px 18px" }}>
              <div style={{ flexShrink:0, marginTop:2 }}><IconStudy size={22} color={P.accent} /></div>
              <div>
                <div style={{ fontWeight:600, fontSize:14, marginBottom:3 }}>Basado en investigación publicada</div>
                <div style={{ fontSize:13, color:P.muted, lineHeight:1.5 }}>Todo lo que decimos se apoya en estudios de universidades europeas y organismos internacionales de salud. Citamos las fuentes en cada capítulo.</div>
              </div>
            </Card>
            <Card style={{ display:"flex", gap:14, alignItems:"flex-start", padding:"16px 18px" }}>
              <div style={{ flexShrink:0, marginTop:2 }}><IconSpainFlag size={22} /></div>
              <div>
                <div style={{ fontWeight:600, fontSize:14, marginBottom:3, display:"flex", alignItems:"center", gap:6 }}>Adaptado a España</div>
                <div style={{ fontSize:13, color:P.muted, lineHeight:1.5 }}>Productos de Mercadona, Carrefour, Decathlon. Marcas españolas. Normativa europea. Nada genérico ni traducido del inglés.</div>
              </div>
            </Card>
            <Card style={{ display:"flex", gap:14, alignItems:"flex-start", padding:"16px 18px" }}>
              <div style={{ flexShrink:0, marginTop:2 }}><IconShield size={22} color={P.accent} /></div>
              <div>
                <div style={{ fontWeight:600, fontSize:14, marginBottom:3 }}>Sin alarmismo</div>
                <div style={{ fontSize:13, color:P.muted, lineHeight:1.5 }}>No vendemos miedo. La ciencia aún no tiene conclusiones definitivas, y lo decimos. Nuestro enfoque es práctico: si puedes reducir tu exposición sin complicarte la vida, ¿por qué no hacerlo?</div>
              </div>
            </Card>
          </div>
        </Section>

        <Divider />

        {/* FAQ */}
        <Section>
          <Badge style={{ marginBottom:14 }}>Preguntas frecuentes</Badge>

          <Card style={{ marginBottom:12, borderLeft:`3px solid ${P.accent}` }}>
            <div style={{ fontWeight:600, fontSize:14, marginBottom:4 }}>¿Qué son los microplásticos?</div>
            <div style={{ fontSize:13, color:P.muted, lineHeight:1.55 }}>
              Fragmentos de plástico de menos de 5 mm presentes en el agua, los alimentos, el aire y muchos productos de uso diario. Se generan por degradación de plásticos o se fabrican para cosméticos y textiles.
            </div>
          </Card>
          <Card style={{ marginBottom:12, borderLeft:`3px solid ${P.accent}` }}>
            <div style={{ fontWeight:600, fontSize:14, marginBottom:4 }}>¿Pueden suponer un riesgo para la salud?</div>
            <div style={{ fontSize:13, color:P.muted, lineHeight:1.55 }}>
              Estudios de la Organización Mundial de la Salud y universidades europeas sugieren que la exposición continuada podría estar asociada a inflamación, estrés oxidativo y alteraciones hormonales. Se han encontrado en sangre, pulmones y placenta. La ciencia aún no tiene conclusiones definitivas, pero reducir la exposición innecesaria se considera prudente.
            </div>
          </Card>
          <Card style={{ marginBottom:12, borderLeft:`3px solid ${P.accent}` }}>
            <div style={{ fontWeight:600, fontSize:14, marginBottom:4 }}>¿En qué fuentes os basáis?</div>
            <div style={{ fontSize:13, color:P.muted, lineHeight:1.55 }}>
              Todo el contenido se apoya en investigaciones publicadas por la Organización Mundial de la Salud, la Agencia Europea de Medio Ambiente, universidades de referencia en Europa y centros de investigación españoles. Citamos las fuentes en cada capítulo de la guía.
            </div>
          </Card>
          <Card style={{ marginBottom:10, borderLeft:`3px solid ${P.accent}` }}><div style={{ fontWeight:600, fontSize:14, marginBottom:4 }}>¿El test es gratis?</div><div style={{ fontSize:13, color:P.muted, lineHeight:1.55 }}>Sí, el test y tu resultado son completamente gratuitos. La guía completa de 21 días es un producto de pago aparte.</div></Card>
          <Card style={{ marginBottom:10, borderLeft:`3px solid ${P.accent}` }}><div style={{ fontWeight:600, fontSize:14, marginBottom:4 }}>¿Qué datos pedís?</div><div style={{ fontSize:13, color:P.muted, lineHeight:1.55 }}>Solo nombre y email para enviarte el desglose detallado. Nada médico ni sensible. Puedes darte de baja con un clic.</div></Card>
          <Card style={{ marginBottom:10, borderLeft:`3px solid ${P.accent}` }}><div style={{ fontWeight:600, fontSize:14, marginBottom:4 }}>¿Es un diagnóstico?</div><div style={{ fontSize:13, color:P.muted, lineHeight:1.55 }}>No. Es una estimación orientativa basada en hábitos cotidianos. No sustituye ninguna valoración médica profesional.</div></Card>
        </Section>

        {/* FINAL CTA — CHANGED: Softer tone */}
        <Section style={{ textAlign:"center", paddingBottom:20 }}>
          <h2 style={{ fontFamily:serif, fontSize:26, fontWeight:600, marginBottom:16 }}>Conocer tu perfil es el primer paso para mejorarlo.</h2>
          <p style={{ color:P.muted, fontSize:15, marginBottom:24 }}>Dos minutos. Nueve preguntas. Resultado inmediato.</p>
          <Btn onClick={() => go("quiz", 0)}>Hacer el test ahora</Btn>
        </Section>

        <Footer onLegalClick={openLegal} />
      </div>
    );
  }

  // ═══ QUIZ (unchanged) ═══
  if (step === "quiz") {
    const q = QUIZ[qIdx];
    return (
      <div ref={topRef} style={{ fontFamily:sans, color:P.text, background:P.bg, minHeight:"100vh", paddingBottom:40 }}>
        <Header onLogoClick={() => go("landing")} context="quiz" quizProgress={{ current: qIdx+1, total: QUIZ.length }} />
        <style dangerouslySetInnerHTML={{ __html: `
          .quiz-opt { position: relative; }
          .quiz-opt:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.07); }
          .quiz-opt:active { transform: translateY(0); }
        `}} />
        <div style={{ padding:"20px 20px 12px", maxWidth:620, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <Badge>Test de exposición</Badge>
          {qIdx > 0 && <button onClick={() => go(null, qIdx-1)} style={{ background:"none", border:"none", color:P.muted, fontSize:13, cursor:"pointer", fontFamily:sans, fontWeight:500 }}>{"< Atrás"}</button>}
        </div>
        <ProgressBar current={qIdx+1} total={QUIZ.length} />
        <Section style={{ opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(14px)", transition:"all 0.28s ease" }}>
          {q.micro && <p style={{ fontSize:13, color:P.accent, fontWeight:500, marginBottom:14, textAlign:"center" }}>{q.micro}</p>}
          <h2 style={{ fontFamily:serif, fontSize:22, fontWeight:600, marginBottom:28, textAlign:"center", lineHeight:1.3 }}>{q.question}</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {q.options.map((opt, i) => {
              const selected = answers[qIdx] === i;
              return (
                <button
                  key={i}
                  className="quiz-opt"
                  onClick={() => { setAnswers(p => ({...p,[qIdx]:i})); if (qIdx < QUIZ.length-1) go(null,qIdx+1); else go("results"); }}
                  style={{
                    background: selected ? P.accentLight : P.card,
                    border: `2px solid ${selected ? P.accent : P.border}`,
                    borderRadius: 14, padding: "15px 18px", fontSize: 15,
                    textAlign: "left", cursor: "pointer", fontFamily: sans,
                    color: selected ? P.accentDark : P.text,
                    transition: "all 0.2s ease",
                    fontWeight: selected ? 600 : 400, lineHeight: 1.45,
                    display: "flex", alignItems: "center", gap: 14,
                    boxShadow: selected ? `0 2px 12px ${P.accent}18` : "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{
                    width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                    border: selected ? "none" : `2px solid ${P.border}`,
                    background: selected ? P.accent : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}>
                    {selected && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4 10-11" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <span>{opt.text}</span>
                </button>
              );
            })}
          </div>
        </Section>
      </div>
    );
  }

  // ═══ RESULTS — CHANGED: Split gate — show partial results FREE, gate details behind email ═══
  if (step === "results") {
    return (
      <div ref={topRef} style={{ fontFamily:sans, color:P.text, background:P.bg, minHeight:"100vh", paddingBottom:0 }}>
        <Header onLogoClick={() => go("landing")} context="results" />
        <style dangerouslySetInnerHTML={{ __html: "@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}" }} />

        {/* FREE: Overall score */}
        <Section style={{ textAlign:"center", paddingTop:48, animation:"fadeUp 0.6s ease" }}>
          <Badge style={{ background:`${oColor}18`, color:oColor }}>Tu estimación</Badge>
          <h1 style={{ fontFamily:serif, fontSize:28, fontWeight:600, margin:"20px 0 6px" }}>Tu nivel de protección:</h1>
        </Section>

        {/* FREE: Nutri-Score display */}
        <Section style={{ paddingTop:0, paddingBottom:16 }}>
          <Card style={{ textAlign:"center", padding:"32px 22px" }}>
            <NutriScoreBadge pct={scores.overall.pct} size="large" />
            <p style={{ fontSize:14, color:P.muted, margin:"16px 0 0", lineHeight:1.5 }}>
              {scores.overall.pct>=80?"Tus hábitos te sitúan en el mejor nivel. Aun así, hay detalles que podrías afinar.":scores.overall.pct>=60?"Buenos hábitos en general. Algunos ajustes te acercarían al nivel A.":scores.overall.pct>=40?"Tienes buenos hábitos en algunas áreas, pero hay margen de mejora en otras.":scores.overall.pct>=20?"Tu protección es baja en varias áreas. Cambios sencillos pueden marcar una diferencia notable.":"Tu nivel de exposición es alto. La buena noticia: los cambios más eficaces son también los más fáciles."}
            </p>
          </Card>
        </Section>

        {/* FREE: Category grades */}
        <Section style={{ paddingTop:8 }}>
          <h2 style={{ fontFamily:serif, fontSize:22, fontWeight:600, marginBottom:20 }}>Desglose por categoría</h2>
          <Card>{CAT_KEYS.map(cat => <ExposureBarGrade key={cat} catKey={cat} score={scores[cat].score} maxScore={scores[cat].max} />)}</Card>
        </Section>

        <Divider />

        {/* GATE: Email for detailed analysis */}
        <Section style={{ textAlign:"center" }}>
          <div style={{ margin:"0 auto 20px", display:"flex", justifyContent:"center" }}><IconLock size={36} color={P.accent} /></div>
          <h2 style={{ fontFamily:serif, fontSize:22, fontWeight:600, marginBottom:8 }}>¿Quieres ver el análisis detallado?</h2>
          <p style={{ color:P.muted, fontSize:14, marginBottom:24, lineHeight:1.55 }}>
            Introduce tu nombre y email para desbloquear los consejos personalizados por categoría, las acciones prioritarias según tus respuestas y tu resumen completo.
          </p>
          <Card style={{ textAlign:"left", marginBottom:16 }}>
            <div style={{ marginBottom:16 }}>
              <label style={{ fontSize:13, fontWeight:600, display:"block", marginBottom:6 }}>Tu nombre</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Ej: María" style={{ width:"100%", padding:"14px 16px", borderRadius:12, border:`1.5px solid ${P.border}`, fontSize:15, fontFamily:sans, background:P.bg, boxSizing:"border-box", outline:"none" }} />
            </div>
            <div style={{ marginBottom:20 }}>
              <label style={{ fontSize:13, fontWeight:600, display:"block", marginBottom:6 }}>Tu email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="tucorreo@ejemplo.com" type="email" style={{ width:"100%", padding:"14px 16px", borderRadius:12, border:`1.5px solid ${P.border}`, fontSize:15, fontFamily:sans, background:P.bg, boxSizing:"border-box", outline:"none" }} />
            </div>
<Btn onClick={() => {
              if (!email.trim() || !name.trim()) return;
              fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name, score: scores.overall.pct, level: scores.overall.pct >= 80 ? "A" : scores.overall.pct >= 60 ? "B" : scores.overall.pct >= 40 ? "C" : scores.overall.pct >= 20 ? "D" : "E" })
              }).catch(() => {});
              go("results-full");
            }} disabled={!name.trim() || !email.trim()}>Ver análisis completo</Btn>
          </Card>
          <p style={{ fontSize:12, color:P.muted, margin:"8px 0 4px", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}><IconLock size={14} color={P.muted} /> Datos protegidos conforme al RGPD.</p>
          <p style={{ fontSize:12, color:P.muted, margin:"4px 0", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}><IconMail size={14} color={P.muted} /> También recibirás el resultado por email.</p>
          <p style={{ fontSize:12, color:P.muted, margin:"4px 0", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}><IconX size={14} color={P.muted} /> Baja con un clic. Sin spam.</p>
        </Section>

        <Footer onLegalClick={openLegal} />
      </div>
    );
  }

  // ═══ RESULTS-FULL — After email: full detailed analysis ═══
  if (step === "results-full") {
    return (
      <div ref={topRef} style={{ fontFamily:sans, color:P.text, background:P.bg, minHeight:"100vh", paddingBottom:0 }}>
        <Header onLogoClick={() => go("landing")} context="results" />
        <style dangerouslySetInnerHTML={{ __html: "@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}" }} />
        <Section style={{ textAlign:"center", paddingTop:48, animation:"fadeUp 0.6s ease" }}>
          <Badge style={{ background:`${oColor}18`, color:oColor }}>Análisis completo</Badge>
          <h1 style={{ fontFamily:serif, fontSize:28, fontWeight:600, margin:"20px 0 6px" }}>{name}, tu perfil completo:</h1>
        </Section>
        <Section style={{ paddingTop:0, paddingBottom:16 }}>
          <Card style={{ textAlign:"center", padding:"32px 22px" }}>
            <NutriScoreBadge pct={scores.overall.pct} size="large" />
          </Card>
        </Section>
        <Section style={{ paddingTop:8 }}>
          <h2 style={{ fontFamily:serif, fontSize:22, fontWeight:600, marginBottom:20 }}>Desglose por categoría</h2>
          <Card>{CAT_KEYS.map(cat => <ExposureBarGrade key={cat} catKey={cat} score={scores[cat].score} maxScore={scores[cat].max} />)}</Card>
        </Section>
        <Divider />

        {/* DETAILED ANALYSIS — diagnosis free, tips teased */}
        <Section>
          <h2 style={{ fontFamily:serif, fontSize:22, fontWeight:600, marginBottom:24 }}>Análisis detallado</h2>
          {CAT_KEYS.map(cat => {
            const cd = CATEGORIES[cat]; const lv = scores[cat].level; const adv = ADVICE[cat][lv];
            const catPct = Math.round((scores[cat].score / scores[cat].max) * 100);
            const catGradeIdx = pctToGrade(catPct);
            const catGrade = GRADES[catGradeIdx];
            const lc = lv==="high"?P.green:lv==="mid"?P.orange:P.red;
            const CatIcon = CAT_ICONS[cat];
            return (
              <Card key={cat} style={{ marginBottom:14, borderLeft:`4px solid ${catGrade.color}`, background:lv==="low"?`${P.red}06`:P.card }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                  <span style={{ fontSize:16, fontWeight:700, display:"flex", alignItems:"center", gap:8 }}><CatIcon size={24} color={cd.color} />{cd.label}</span>
                  <div style={{
                    width:28, height:28, borderRadius:7, background:catGrade.bg,
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}>
                    <span style={{ fontSize:15, fontWeight:800, color:"#fff", fontFamily:sans }}>{catGrade.letter}</span>
                  </div>
                </div>
                <p style={{ fontSize:14, color:P.muted, lineHeight:1.55, marginBottom:14, marginTop:0 }}>{adv.detail}</p>
                {/* Show only first tip free */}
                <div style={{ background:P.bg, borderRadius:10, padding:"14px 16px" }}>
                  <p style={{ fontSize:12, fontWeight:700, marginTop:0, marginBottom:8, textTransform:"uppercase" }}>{lv==="low"?"Acciones prioritarias:":lv==="mid"?"Para mejorar:":"Para mantener:"}</p>
                  <div style={{ display:"flex", gap:8, marginBottom:6, alignItems:"flex-start" }}>
                    <div style={{ flexShrink:0, marginTop:2 }}><IconArrow size={14} color={lc} /></div>
                    <span style={{ fontSize:13, lineHeight:1.5 }}>{adv.tips[0]}</span>
                  </div>
                  {/* Blurred remaining tips */}
                  <div style={{ position:"relative", overflow:"hidden", borderRadius:8, marginTop:4 }}>
                    <div style={{
                      filter:"blur(5px)", userSelect:"none", pointerEvents:"none", opacity:0.5,
                    }}>
                      {adv.tips.slice(1).map((tip, i) => (
                        <div key={i} style={{ display:"flex", gap:8, marginBottom:6, alignItems:"flex-start" }}>
                          <div style={{ flexShrink:0, marginTop:2 }}><IconArrow size={14} color={lc} /></div>
                          <span style={{ fontSize:13, lineHeight:1.5 }}>{tip}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{
                      position:"absolute", bottom:0, left:0, right:0, top:0,
                      background:"linear-gradient(180deg, transparent 0%, rgba(250,250,247,0.9) 70%)",
                      display:"flex", alignItems:"flex-end", justifyContent:"center", paddingBottom:8,
                    }}>
                      <button
                        onClick={() => { const el = document.getElementById("guide-section"); if(el) el.scrollIntoView({ behavior:"smooth" }); }}
                        style={{
                          fontSize:11, fontWeight:600, color:P.accent,
                          background:P.accentLight, padding:"6px 16px", borderRadius:20,
                          display:"inline-flex", alignItems:"center", gap:5,
                          border:`1.5px solid ${P.accent}33`, cursor:"pointer",
                          transition:"all 0.2s",
                        }}
                        onMouseEnter={e => { e.target.style.background = P.accent; e.target.style.color = "#fff"; }}
                        onMouseLeave={e => { e.target.style.background = P.accentLight; e.target.style.color = P.accent; }}
                      >
                        <IconLock size={12} color="currentColor" />
                        +{adv.tips.length - 1} acciones en la guía →
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </Section>
        <Divider />
        <Section>
          <Card style={{ background:P.warm, border:"none" }}>
            <div style={{ display:"flex", gap:10, alignItems:"flex-start", marginBottom:10 }}>
              <div style={{ flexShrink:0, marginTop:2 }}><IconPin size={22} color={P.accent} /></div>
              <h3 style={{ fontFamily:serif, fontSize:18, fontWeight:600, margin:0 }}>Resumen para {name}</h3>
            </div>
            {weakCats.length > 0 && <p style={{ fontSize:14, lineHeight:1.55, marginBottom:8 }}><strong>Mayor exposición:</strong> {weakCats.map(c=>CATEGORIES[c].label).join(", ")}. La guía incluye acciones específicas para estas áreas.</p>}
            {midCats.length > 0 && <p style={{ fontSize:14, lineHeight:1.55, marginBottom:8 }}><strong>Margen de mejora:</strong> {midCats.map(c=>CATEGORIES[c].label).join(", ")}.</p>}
            {strongCats.length > 0 && <p style={{ fontSize:14, lineHeight:1.55, marginBottom:0 }}><strong>Mejor protegidas:</strong> {strongCats.map(c=>CATEGORIES[c].label).join(", ")}.</p>}
          </Card>
        </Section>
        <Divider />

        {/* GUIDE SECTION — detailed, connected to results */}
        <Section id="guide-section">
          <Badge style={{ marginBottom:14 }}>Tu siguiente paso</Badge>
          <h2 style={{ fontFamily:serif, fontSize:24, fontWeight:600, marginBottom:10 }}>Guía Práctica: Reduce Tu Exposición en 21 Días</h2>
          <p style={{ color:P.muted, fontSize:15, marginBottom:8, lineHeight:1.55 }}>
            El test te ha dado el diagnóstico. La guía te da el plan completo: todas las acciones, los productos concretos y un calendario de 21 días para ponerlo en práctica.
          </p>

          {/* Profile connection — grade based */}
          <Card style={{ background:P.warm, border:"none", marginBottom:16 }}>
            <div style={{ display:"flex", gap:12, alignItems:"center", marginBottom:10 }}>
              <div style={{ width:42, height:42, borderRadius:10, background:GRADES[pctToGrade(scores.overall.pct)].bg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <span style={{ fontSize:20, fontWeight:800, color:"#fff", fontFamily:sans }}>{GRADES[pctToGrade(scores.overall.pct)].letter}</span>
              </div>
              <div>
                <div style={{ fontWeight:700, fontSize:14, color:P.text }}>Tu nivel actual: {GRADES[pctToGrade(scores.overall.pct)].label}</div>
                <div style={{ fontSize:13, color:P.muted }}>
                  {weakCats.length > 0
                    ? `Exposición alta en ${weakCats.length} de 5 categorías`
                    : midCats.length > 0
                    ? `Margen de mejora en ${midCats.length} de 5 categorías`
                    : `Buen nivel general — la guía te ayuda a mantenerlo`
                  }
                </div>
              </div>
            </div>
            <p style={{ fontSize:13, color:P.muted, lineHeight:1.55, margin:0 }}>
              La guía cubre las 5 categorías con acciones priorizadas por impacto. Empieza por las de mayor exposición y avanza a tu ritmo.
            </p>
          </Card>

          {/* Chapter details — expanded */}
          <Card style={{ marginBottom:16 }}>
            <h3 style={{ fontSize:15, fontWeight:700, marginBottom:16, marginTop:0 }}>Qué incluye cada capítulo:</h3>

            {[
              { icon: <IconFood size={22} color={CATEGORIES.food.color} />, title: "Alimentación", items: ["Qué plásticos son peores al calentar (y cuáles son aceptables)", "Tabla de sustitución: producto habitual → alternativa → dónde comprarlo", "La verdad sobre las bolsitas de té, el film y el porexpán"] },
              { icon: <IconWater size={22} color={CATEGORIES.water.color} />, title: "Agua", items: ["Comparativa de filtros: jarra vs grifo vs ósmosis (precio, eficacia, mantenimiento)", "Marcas de filtro disponibles en España con precios reales", "Errores comunes con las botellas reutilizables"] },
              { icon: <IconHome size={22} color={CATEGORIES.home.color} />, title: "Hogar y aire", items: ["Técnica de ventilación cruzada paso a paso", "Productos de limpieza ecológicos en supermercados españoles", "Cuándo merece la pena un purificador HEPA (y cuándo no)"] },
              { icon: <IconCare size={22} color={CATEGORIES.care.color} />, title: "Cuidado personal", items: ["Lista completa de ingredientes INCI a evitar con nombres reales", "Apps gratuitas para escanear tus productos (Yuka, Beat the Microbead)", "Marcas españolas sin microplásticos: Freshly, Maminat, Homo Naturals"] },
              { icon: <IconTextile size={22} color={CATEGORIES.textile.color} />, title: "Textiles y ropa", items: ["Tabla de materiales: de mayor a menor liberación de microfibras", "Cómo usar la bolsa Guppyfriend correctamente", "Qué mirar en la etiqueta antes de comprar"] },
            ].map((ch, i) => (
              <div key={i} style={{ marginBottom:i<4?18:0 }}>
                <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:8 }}>
                  {ch.icon}
                  <span style={{ fontWeight:700, fontSize:14 }}>{ch.title}</span>
                </div>
                {ch.items.map((item, j) => (
                  <div key={j} style={{ display:"flex", gap:8, marginBottom:4, alignItems:"flex-start", paddingLeft:32 }}>
                    <div style={{ width:4, height:4, borderRadius:"50%", background:P.accent, flexShrink:0, marginTop:7, opacity:0.5 }} />
                    <span style={{ fontSize:13, color:P.muted, lineHeight:1.5 }}>{item}</span>
                  </div>
                ))}
                {i < 4 && <div style={{ height:1, background:P.border, margin:"14px 0 0", opacity:0.5 }} />}
              </div>
            ))}
          </Card>

          {/* Plan 21 días + Bonus */}
          <Card style={{ marginBottom:16, border:`1.5px solid ${P.accent}22` }}>
            <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:10 }}>
              <IconCalendar size={22} color={P.accent} />
              <span style={{ fontWeight:700, fontSize:14 }}>Plan de 21 días</span>
            </div>
            <p style={{ fontSize:13, color:P.muted, lineHeight:1.55, margin:"0 0 12px" }}>
              Una acción concreta por día, ordenada por impacto. La primera semana cubre los cambios que más diferencia hacen. Al final de los 21 días, habrás transformado tus hábitos en cocina, baño, colada y compra.
            </p>
            <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
              {["Sem. 1: Mayor impacto","Sem. 2: Consolidar","Sem. 3: Hábitos para siempre"].map((w,i) => (
                <span key={i} style={{ fontSize:11, fontWeight:600, background:P.accentLight, color:P.accent, padding:"4px 12px", borderRadius:16 }}>{w}</span>
              ))}
            </div>
          </Card>

          <Card style={{ marginBottom:16, border:`1.5px solid ${P.accent}22` }}>
            <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:10 }}>
              <IconSpainFlag size={22} />
              <span style={{ fontWeight:700, fontSize:14 }}>Bonus: Guía España</span>
            </div>
            <p style={{ fontSize:13, color:P.muted, lineHeight:1.55, margin:0 }}>
              Qué comprar en Mercadona, Carrefour, Lidl y Alcampo. Marcas españolas recomendadas (TAPP Water, Freshly Cosmetics, Laken). Tiendas a granel por ciudad. Certificaciones que buscar. Todo con nombres y precios reales.
            </p>
          </Card>

          {/* Extras */}
          <div style={{ display:"flex", gap:10, marginBottom:20, flexWrap:"wrap" }}>
            {["Checklists imprimibles por habitación","Glosario de ingredientes INCI","Formato PDF descargable","Actualizaciones gratuitas"].map((e,i) => (
              <div key={i} style={{ display:"flex", gap:6, alignItems:"center" }}>
                <IconCheckSmall size={16} color={P.accent} />
                <span style={{ fontSize:12, color:P.muted }}>{e}</span>
              </div>
            ))}
          </div>

          {/* Price + CTA */}
          <Card style={{ background:P.warm, border:"none", textAlign:"center", marginBottom:20 }}>
            <div style={{ fontFamily:serif, fontSize:32, fontWeight:700, color:P.accent }}>9,90 €</div>
            <p style={{ fontSize:13, color:P.muted, margin:"8px 0 0", lineHeight:1.5 }}>Menos que una jarra filtrante. Menos que dos cafés con tostada.</p>
          </Card>
          <Btn onClick={() => window.location.href = "https://buy.stripe.com/dRm6oH8syeNJ0y1aWK8ww00"}>Quiero mi guía por 9,90 €</Btn>
          <p style={{ fontSize:12, color:P.muted, textAlign:"center", marginTop:12 }}>Pago seguro · Acceso inmediato · Garantía 30 días</p>
          {/* Payment methods */}
          <div style={{ display:"flex", justifyContent:"center", gap:12, marginTop:10, alignItems:"center" }}>
            <span style={{ fontSize:11, color:P.muted }}>Métodos de pago:</span>
            <span style={{ fontSize:11, fontWeight:700, color:"#05C3DD", background:"#05C3DD14", padding:"3px 10px", borderRadius:6 }}>Bizum</span>
            <span style={{ fontSize:11, fontWeight:700, color:"#635BFF", background:"#635BFF14", padding:"3px 10px", borderRadius:6 }}>Tarjeta</span>
          </div>
        </Section>

        <Divider />

        {/* Objection handling — moved here from deleted sales page */}
        <Section>
          <h2 style={{ fontFamily:serif, fontSize:22, fontWeight:600, marginBottom:20 }}>Puede que te preguntes...</h2>
          {[
            ["¿No puedo buscar esta información yo?","Claro. Pero recopilarla, verificar fuentes, adaptarla al mercado español y organizarla en un plan de 21 días lleva tiempo. La guía te ahorra esas horas."],
            ["¿9,90 € merece la pena por un PDF?","Piensa en lo que gastas cada semana en botellas de plástico que podrías evitar. La guía se paga sola con el primer cambio de hábito."],
            ["¿Y si no es lo que esperaba?","Tienes 30 días para decidir. Si no te resulta útil, escribes a hola@puraclaridad.com y te devolvemos el importe completo. Sin preguntas, sin formularios."],
          ].map(([q,a],i) => (
            <Card key={i} style={{ marginBottom:10 }}><div style={{ fontWeight:600, fontSize:14, marginBottom:6, fontStyle:"italic", color:P.text }}>«{q}»</div><div style={{ fontSize:13, color:P.muted, lineHeight:1.55 }}>{a}</div></Card>
          ))}
        </Section>

        {/* Final CTA */}
        <Section style={{ textAlign:"center", paddingTop:0, paddingBottom:20 }}>
          <h2 style={{ fontFamily:serif, fontSize:24, fontWeight:600, marginBottom:16, lineHeight:1.3 }}>Saber es el primer paso. Tener un plan es el segundo.</h2>
          <Btn onClick={() => window.location.href = "https://buy.stripe.com/dRm6oH8syeNJ0y1aWK8ww00"}>Acceder a la guía — 9,90 €</Btn>
        </Section>

        {/* Sticky bottom bar */}
        <StickyBuyBar />

        <Footer onLegalClick={openLegal} />
      </div>
    );
  }

  // ═══ LOADING (removed — no longer needed since results show immediately) ═══
  return null;
}
