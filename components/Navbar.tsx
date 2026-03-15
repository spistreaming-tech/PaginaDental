"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(229,231,235,0.8)" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Tooth SVG icon */}
          <svg
            width="28"
            height="30"
            viewBox="0 0 28 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
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

          {/* Brand name */}
          <span
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "1.25rem",
              fontWeight: 700,
              color: scrolled ? "#1A1A2E" : "#ffffff",
              letterSpacing: "-0.01em",
              transition: "color 0.3s ease",
            }}
          >
            ClinicaPura
          </span>
        </div>

        {/* CTA Button */}
        <button
          id="navbar-cta-btn"
          style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            backgroundColor: "#00B4D8",
            color: "#ffffff",
            borderRadius: "9999px",
            padding: "10px 24px",
            fontSize: "0.9rem",
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.2s ease, transform 0.2s ease",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0077B6";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#00B4D8";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
          }}
        >
          Reservar cita
        </button>
      </div>
    </nav>
  );
}
