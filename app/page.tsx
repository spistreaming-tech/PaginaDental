"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import Footer from "@/components/Footer";

// ─────────────────────────────────────────
// Treatment card data
// ─────────────────────────────────────────
interface Treatment {
  id: string;
  icon: React.ReactNode;
  name: string;
  description: string;
  price: string;
  detail: string;
}

const AlignerIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5"
      y="14"
      width="30"
      height="12"
      rx="6"
      stroke="#00B4D8"
      strokeWidth="1.8"
      fill="none"
    />
    <rect
      x="5"
      y="14"
      width="30"
      height="12"
      rx="6"
      fill="#00B4D8"
      fillOpacity="0.08"
    />
    <line x1="12" y1="14" x2="12" y2="26" stroke="#00B4D8" strokeWidth="1.4" />
    <line x1="20" y1="14" x2="20" y2="26" stroke="#00B4D8" strokeWidth="1.4" />
    <line x1="28" y1="14" x2="28" y2="26" stroke="#00B4D8" strokeWidth="1.4" />
  </svg>
);

const WhiteningIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 18C8 14 11 10 20 10C29 10 32 14 32 18V19C32 19 30 20 28 18C26 16 24 16 22 18C20 20 18 20 16 18C14 16 12 16 10 18C8 20 8 19 8 19V18Z"
      stroke="#00B4D8"
      strokeWidth="1.8"
      fill="#00B4D8"
      fillOpacity="0.08"
    />
    <path
      d="M8 19V24C8 28 11 31 14 31C16 31 17 29.5 17.5 27L18.5 22C19 20.5 21 20.5 21.5 22L22.5 27C23 29.5 24 31 26 31C29 31 32 28 32 24V19"
      stroke="#00B4D8"
      strokeWidth="1.8"
      fill="none"
    />
    <path
      d="M27 5L28 8M20 3L20 6M33 8L31 10"
      stroke="#00B4D8"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ImplantIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 8C17 8 14 10.5 14 13.5C14 15 14.5 16 14.5 17C14.5 20 13 25 14.5 28C15.2 29.5 16 30 17 28.5C17.8 27.2 18 24 20 24C22 24 22.2 27.2 23 28.5C24 30 24.8 29.5 25.5 28C27 25 25.5 20 25.5 17C25.5 16 26 15 26 13.5C26 10.5 23 8 20 8Z"
      stroke="#00B4D8"
      strokeWidth="1.8"
      fill="#00B4D8"
      fillOpacity="0.08"
    />
    <line x1="20" y1="24" x2="20" y2="37" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" />
    <line x1="17" y1="29" x2="23" y2="29" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" />
    <line x1="17" y1="33" x2="23" y2="33" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const treatments: Treatment[] = [
  {
    id: "ortodoncia",
    icon: <AlignerIcon />,
    name: "Ortodoncia Invisible",
    description:
      "Alineadores transparentes a medida. Sin brackets, sin dolor.",
    price: "Desde 2.400€",
    detail: "Financiación sin intereses",
  },
  {
    id: "blanqueamiento",
    icon: <WhiteningIcon />,
    name: "Blanqueamiento Profesional",
    description:
      "Hasta 8 tonos más blanco en una sola sesión de 60 minutos.",
    price: "Desde 290€",
    detail: "Resultado visible desde la primera sesión",
  },
  {
    id: "implantes",
    icon: <ImplantIcon />,
    name: "Implantes Dentales",
    description:
      "Titanio grado médico. Garantía de osteointegración de por vida.",
    price: "Desde 890€",
    detail: "Garantía de por vida incluida",
  },
];

// ─────────────────────────────────────────
// Stats
// ─────────────────────────────────────────
interface Stat {
  number: string;
  label: string;
}

const stats: Stat[] = [
  { number: "98%", label: "Pacientes satisfechos" },
  { number: "+2.400", label: "Sonrisas transformadas" },
  { number: "15 años", label: "De experiencia clínica" },
];

// ─────────────────────────────────────────
// Process steps
// ─────────────────────────────────────────
interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Consulta gratuita",
    description: "Escáner 3D sin compromiso.",
  },
  {
    number: "02",
    title: "Plan personalizado",
    description: "Diseñamos tu tratamiento exacto.",
  },
  {
    number: "03",
    title: "Tu tratamiento",
    description: "Comenzamos. Seguimiento total.",
  },
  {
    number: "04",
    title: "Sonrisa perfecta",
    description: "Resultado garantizado por escrito.",
  },
];

// ─────────────────────────────────────────
// Framer Motion variants
// ─────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as unknown as any, delay },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

// ─────────────────────────────────────────
// Page
// ─────────────────────────────────────────
export default function HomePage() {
  return (
    <main style={{ margin: 0, padding: 0 }}>
      <Navbar />

      {/* ── HERO CANVAS ── */}
      <HeroCanvas />

      {/* ── TREATMENTS ── */}
      <section
        id="tratamientos"
        style={{
          backgroundColor: "#F8F7F4",
          padding: "96px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Label */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#6B7280",
              marginBottom: "8px",
              fontWeight: 500,
            }}
          >
            01 — Tratamientos
          </motion.p>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.08}
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#1A1A2E",
              marginBottom: "64px",
              marginTop: "8px",
              lineHeight: 1.15,
            }}
          >
            ¿Qué necesitas?
          </motion.h2>

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {treatments.map((t, i) => (
              <motion.div
                key={t.id}
                id={`treatment-card-${t.id}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.12}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "32px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(229,231,235,0.7)",
                  borderTop: "3px solid #00B4D8",
                  position: "relative",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  cursor: "default",
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 40px rgba(0,180,216,0.12)",
                }}
              >
                {/* Icon */}
                <div style={{ marginBottom: "20px" }}>{t.icon}</div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#1A1A2E",
                    marginBottom: "12px",
                    lineHeight: 1.25,
                  }}
                >
                  {t.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    color: "#6B7280",
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}
                >
                  {t.description}
                </p>

                {/* Price */}
                <p
                  style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    color: "#00B4D8",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginTop: "20px",
                    marginBottom: "4px",
                  }}
                >
                  {t.price}
                </p>

                {/* Detail */}
                <p
                  style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    color: "#6B7280",
                    fontSize: "0.75rem",
                    fontWeight: 400,
                  }}
                >
                  {t.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        id="estadisticas"
        style={{
          backgroundColor: "#0D1117",
          padding: "96px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              id={`stat-${i}`}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.12}
              style={{
                textAlign: "center",
                padding: "0 32px",
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
              }}
            >
              <p
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                  fontWeight: 700,
                  color: "#00B4D8",
                  marginBottom: "8px",
                  lineHeight: 1,
                }}
              >
                {s.number}
              </p>
              <p
                style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.45)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 400,
                }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        id="proceso"
        style={{
          backgroundColor: "#F8F7F4",
          padding: "96px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Label */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#6B7280",
              marginBottom: "8px",
              fontWeight: 500,
            }}
          >
            02 — Proceso
          </motion.p>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.08}
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#1A1A2E",
              marginBottom: "64px",
              marginTop: "8px",
            }}
          >
            Así funciona.
          </motion.h2>

          {/* Steps grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "48px 32px",
            }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                id={`step-${step.number}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
              >
                {/* Step number */}
                <p
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "3rem",
                    fontWeight: 700,
                    color: "#00B4D8",
                    opacity: 0.3,
                    lineHeight: 1,
                    marginBottom: "16px",
                  }}
                >
                  {step.number}
                </p>

                {/* Step title */}
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#1A1A2E",
                    marginBottom: "8px",
                  }}
                >
                  {step.title}
                </h3>

                {/* Step description */}
                <p
                  style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: "0.9rem",
                    color: "#6B7280",
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <section
        id="reservar"
        style={{
          backgroundColor: "#00B4D8",
          padding: "128px 24px",
          textAlign: "center",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2.2rem, 6vw, 3.75rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Primera consulta gratuita.
          </h2>

          <p
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "560px",
              margin: "0 auto 36px",
              lineHeight: 1.65,
              fontWeight: 300,
            }}
          >
            Sin compromiso. Sin letra pequeña. Te mostramos el resultado
            antes de empezar.
          </p>

          <motion.button
            id="cta-reservar-btn"
            whileHover={{
              backgroundColor: "#0D1117",
              color: "#ffffff",
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              backgroundColor: "#ffffff",
              color: "#00B4D8",
              borderRadius: "9999px",
              padding: "16px 40px",
              fontSize: "1.1rem",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.01em",
            }}
          >
            Reservar mi consulta
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
