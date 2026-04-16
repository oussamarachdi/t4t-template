import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import logo from "../assets/logo.png";

export default function Register() {
  useReveal();

  useEffect(() => {
    // Load Tally embed script for automatic iframe height resizing
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Top bar */}
      <div style={{
        padding: "0 32px",
        borderBottom: "0.5px solid var(--border)", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(12,8,4,0.95)", backdropFilter: "blur(16px)",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="T4Teaching logo"
            style={{
              width: 120,
              height: 40,
              borderRadius: 8,
              objectFit: "contain",
              flexShrink: 0,
            }}
          />
        </Link>
        <Link to="/" style={{ textDecoration: "none", fontSize: 14, color: "var(--text-muted)" }}>
          ← Back to event
        </Link>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px 96px" }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(232,118,26,0.1)",
            border: "0.5px solid rgba(232,118,26,0.38)",
            borderRadius: 100, padding: "6px 18px", marginBottom: 20,
            fontSize: 12, fontWeight: 700,
            color: "var(--orange-bright)", letterSpacing: "0.07em",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--orange)", display: "inline-block" }} />
            FREE REGISTRATION · JUNE 10–11, 2025
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(30px, 5vw, 48px)",
            fontWeight: 900, letterSpacing: "-2px",
            marginBottom: 12, lineHeight: 1.1,
          }}>
            Join <span style={{ color: "var(--orange)" }}>T4Teaching</span>
          </h1>
          <p style={{
            fontSize: "clamp(12px, 1.2vw, 14px)",
            fontFamily: "var(--font-display)",
            color: "var(--text-muted)",
            fontWeight: 700,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
          }}>
            Complete the form below to register
          </p>
        </div>

        {/* Embedded Tally Form */}
        <div className="reveal" style={{
          marginBottom: 16,
          display: "flex", flexDirection: "column"
        }}>
          <iframe 
            data-tally-src="https://tally.so/r/2EJ0Ke" 
            width="100%" 
            height="500" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0" 
            title="T4Teaching Registration"
            style={{ border: "none", width: "100%", height: "500px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
