export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0D1117",
        paddingTop: "64px",
        paddingBottom: "40px",
        position: "relative",
      }}
    >
      {/* Top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, #00B4D8 50%, transparent 100%)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Main footer content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Left — Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* Tooth SVG */}
              <svg
                width="26"
                height="28"
                viewBox="0 0 28 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2C10.5 2 7.5 4.5 7 7.5C6.5 10 7 11.5 7 13C7 17 5 24 7 27.5C8 29 9 29 10 27.5C11 26 11.5 22 14 22C16.5 22 17 26 18 27.5C19 29 20 29 21 27.5C23 24 21 17 21 13C21 11.5 21.5 10 21 7.5C20.5 4.5 17.5 2 14 2Z"
                  stroke="#00B4D8"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M9 9.5C9 9.5 11 8 14 8C17 8 19 9.5 19 9.5"
                  stroke="#00B4D8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                }}
              >
                ClinicaPura
              </span>
            </div>
            <p
              style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                color: "#6B7280",
                fontSize: "0.875rem",
                marginTop: "6px",
                fontWeight: 300,
              }}
            >
              Tu sonrisa, nuestra misión.
            </p>
          </div>

          {/* Right — Contact */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "flex-end",
            }}
          >
            <a
              href="mailto:hola@clinicapura.es"
              style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                color: "#6B7280",
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#00B4D8")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#6B7280")
              }
            >
              hola@clinicapura.es
            </a>
            <p
              style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                color: "#6B7280",
                fontSize: "0.875rem",
                margin: 0,
              }}
            >
              Madrid, España
            </p>
          </div>
        </div>

        {/* Bottom — Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: "0.75rem",
              color: "#444444",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} ClinicaPura. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
