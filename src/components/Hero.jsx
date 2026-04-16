import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STATS = [
  { num: "5", suffix: "+", label: "Host Countries" },
  { num: "18", suffix: "+", label: "Min Age" },
  { num: "300", suffix: "+", label: "Global Teachers" },
];

function Countdown() {
  const deadline = new Date("2026-04-18T09:00:00");
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = deadline - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 44 }}>
      {[["d", "Days"], ["h", "Hours"], ["m", "Min"], ["s", "Sec"]].map(([k, lbl]) => (
        <div key={k} style={{
          background: "var(--bg-card)",
          border: "0.5px solid var(--orange-border)",
          borderRadius: 10,
          padding: "12px 16px",
          textAlign: "center", minWidth: 64,
        }}>
          <div style={{
            fontSize: 28, fontWeight: 900,
            color: "var(--orange-bright)",
            fontFamily: "var(--font-display)",
            fontVariantNumeric: "tabular-nums",
            lineHeight: 1,
          }}>{pad(time[k])}</div>
          <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 4, letterSpacing: "0.08em" }}>{lbl}</div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "120px 24px 80px",
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
    }}>
      {/* Background glows */}
      <div className="glow-blob" style={{ width: 560, height: 560, top: -120, right: -140, animationDelay: "0s" }} />
      <div className="glow-blob" style={{ width: 320, height: 320, bottom: 60, left: -100, animationDelay: "2.5s" }} />

      {/* Dot grid pattern */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }}>
        <defs>
          <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#E8761A" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Floating book decoration */}
      <div className="animate-float" style={{
        position: "absolute", right: "8%", top: "22%",
        fontSize: 80, opacity: 0.07, pointerEvents: "none",
        userSelect: "none",
      }}>📚</div>
      <div className="animate-float" style={{
        position: "absolute", left: "6%", bottom: "28%",
        fontSize: 56, opacity: 0.06, pointerEvents: "none",
        userSelect: "none", animationDelay: "2s",
      }}>🌍</div>

      {/* Badge */}
      <div className="animate-fade-up" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: "rgba(232,118,26,0.12)",
        border: "0.5px solid rgba(232,118,26,0.38)",
        borderRadius: 100, padding: "6px 18px",
        marginBottom: 28,
        fontSize: 12, fontWeight: 700,
        color: "var(--orange-bright)", letterSpacing: "0.07em",
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: "50%",
          background: "var(--orange)",
          display: "inline-block",
          boxShadow: "0 0 0 3px rgba(232,118,26,0.25)",
        }} />
        AIESEC T4TEACHING EVENT · APRIL 18, 2026
      </div>

      {/* Headline */}
      <h1 className="animate-fade-up" style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(42px, 8vw, 78px)",
        fontWeight: 900,
        lineHeight: 1.05,
        letterSpacing: "-3px",
        marginBottom: 24,
        maxWidth: 860,
        animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards",
      }}>
        Teach the world.<br />
        Change a{" "}
        <span style={{ position: "relative", display: "inline-block" }}>
          <span style={{ color: "var(--orange)" }}>classroom.</span>
          {/* Underline squiggle */}
          <svg style={{ position: "absolute", bottom: -8, left: 0, width: "100%" }} viewBox="0 0 300 12" preserveAspectRatio="none">
            <path d="M0 8 Q37 2 75 8 Q112 14 150 8 Q187 2 225 8 Q262 14 300 8"
              stroke="var(--orange)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
          </svg>
        </span>
      </h1>

      {/* Subtext */}
      <p className="animate-fade-up soft-text" style={{
        fontSize: "clamp(12px, 1.2vw, 14px)",
        maxWidth: 620,
        marginBottom: 44,
        fontFamily: "var(--font-display)",
        animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards",
      }}>
        T4Teaching is AIESEC's micro-event for aspiring global educators — connecting passionate young people aged 18–30 with real international teaching opportunities in 5+ countries.
      </p>

      {/* CTAs */}
      <div className="animate-fade-up" style={{
        display: "flex", gap: 12,
        justifyContent: "center", flexWrap: "wrap",
        marginBottom: 56,
        animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards",
      }}>
        <Link to="/register">
          <button style={{
            background: "var(--orange)", color: "#fff", border: "none",
            padding: "15px 36px", borderRadius: 10,
            fontSize: 16, fontWeight: 800,
            fontFamily: "var(--font-display)",
            cursor: "pointer", transition: "all 0.2s", letterSpacing: "-0.3px",
          }}
            onMouseEnter={e => { e.target.style.background = "var(--orange-bright)"; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.target.style.background = "var(--orange)"; e.target.style.transform = "translateY(0)"; }}
          >
            Register Free →
          </button>
        </Link>

      </div>

      {/* Countdown */}
      <div className="animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
        <p style={{ fontSize: 11, color: "var(--text-faint)", marginBottom: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Event starts in
        </p>
        <Countdown />
      </div>

      {/* Stats bar */}
      <div className="animate-fade-up" style={{
        display: "flex", gap: 0,
        borderRadius: 14, overflow: "hidden",
        border: "0.5px solid var(--border)",
        background: "var(--bg-card)",
        animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards",
      }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{
            padding: "20px 36px", textAlign: "center",
            borderRight: i < STATS.length - 1 ? "0.5px solid var(--border)" : "none",
          }}>
            <div style={{
              fontSize: 30, fontWeight: 900,
              color: "var(--orange)",
              fontFamily: "var(--font-display)", lineHeight: 1,
            }}>{s.num}{s.suffix}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}