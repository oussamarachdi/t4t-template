import { speakers } from "../data/content";

export function SectionLabel({ tag, title, sub }) {
  return (
    <div className="reveal" style={{ marginBottom: 48, textAlign: "center" }}>
      <div style={{
        fontSize: 11, fontWeight: 700,
        color: "var(--orange)", letterSpacing: "0.12em",
        textTransform: "uppercase", marginBottom: 12,
      }}>{tag}</div>
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(26px, 4vw, 42px)",
        fontWeight: 900, letterSpacing: "-1.5px",
        marginBottom: 12, lineHeight: 1.1,
      }}>{title}</h2>
      {sub && (
        <p style={{
          color: "var(--text-muted)", fontSize: 16,
          maxWidth: 500, margin: "0 auto", lineHeight: 1.6,
          fontFamily: "var(--font-serif)", fontStyle: "italic",
        }}>{sub}</p>
      )}
    </div>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" style={{ padding: "96px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionLabel
        tag="Our Speakers"
        title="Educators shaping the world"
        sub="Inspiring voices from global classrooms, ministries, and EdTech companies."
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 20,
      }}>
        {speakers.map((s, i) => (
          <div
            key={s.id}
            className={`reveal reveal-delay-${i + 1}`}
            style={{
              background: "var(--bg-card)",
              border: "0.5px solid var(--border)",
              borderRadius: 16, padding: "28px 24px",
              transition: "border-color 0.3s, transform 0.3s",
              position: "relative", overflow: "hidden",
              cursor: "default",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,118,26,0.5)"; e.currentTarget.style.transform = "translateY(-5px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            {/* Accent top */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: s.color }} />

            {/* Avatar */}
            <div style={{
              width: 58, height: 58, borderRadius: "50%",
              background: `${s.color}22`, border: `1.5px solid ${s.color}55`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: 18, color: s.color, marginBottom: 16,
            }}>{s.avatar}</div>

            <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }}>
              {s.flag} {s.country}
            </div>
            <h3 style={{
              fontFamily: "var(--font-display)", fontSize: 18,
              fontWeight: 800, marginBottom: 4, letterSpacing: "-0.3px",
            }}>{s.name}</h3>
            <p style={{ fontSize: 13, color: "var(--orange)", fontWeight: 700, marginBottom: 3 }}>{s.role}</p>
            <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }}>{s.company}</p>

            <div style={{
              background: "var(--bg2)", border: "0.5px solid var(--border-subtle)",
              borderRadius: 8, padding: "10px 14px",
            }}>
              <p style={{
                fontSize: 13, color: "var(--text-muted)",
                lineHeight: 1.55, fontStyle: "italic",
                fontFamily: "var(--font-serif)",
              }}>"{s.topic}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
