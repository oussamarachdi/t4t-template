// ─── BENEFITS ────────────────────────────────────────────────────────────────
import { benefits, team } from "../data/content";
import { Link } from "react-router-dom";

export function SectionLabel({ tag, title, sub }) {
  return (
    <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
      <div style={{
      }}>{tag}</div>
      <h2 style={{
        fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)",
        fontWeight: 900, marginBottom: 16, letterSpacing: "-1.5px", lineHeight: 1.1,
        color: "var(--orange)",
      }}>{title}</h2>
      {sub && (
        <p className="soft-text" style={{
          fontSize: "clamp(12px, 1.2vw, 14px)",
          maxWidth: 500, margin: "0 auto",
          fontFamily: "var(--font-display)",
        }}>{sub}</p>
      )}
    </div>
  );
}

export function Benefits() {
  return (
    <section id="benefits" style={{
      padding: "96px 24px",
      background: "linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel
          tag="Why Attend"
          title="Everything you gain at T4Teaching"
          sub="T4Teaching gives you the skills, network, and placements to make your mark in classrooms worldwide."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
          {benefits.map((b, i) => (
            <div key={b.title} className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                background: "var(--bg-card)", border: "0.5px solid var(--border)",
                borderRadius: 14, padding: "28px 24px",
                transition: "all 0.3s", position: "relative", overflow: "hidden",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,118,26,0.48)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >

              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 18,
                fontWeight: 800, marginBottom: 8, letterSpacing: "-0.3px",
              }}>{b.title}</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TEAM ────────────────────────────────────────────────────────────────────
const AVATAR_COLORS = ["#E8761A", "#C4610E", "#F58C30", "#A05010", "#D4A06A", "#7A4010"];

export function Team() {
  return (
    <section id="team" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <SectionLabel
          tag="Organizing Team"
          title="Project Heads"
          sub="Meet the dedicated individuals behind the event."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
          {team.map((member, i) => {
            return (
              <div
                key={member.id}
                className={`reveal reveal-delay-${(i % 3) + 1}`}
                style={{
                  background: "var(--bg-card)",
                  border: "0.5px solid var(--border)",
                  borderRadius: 12,
                  padding: "14px",
                  textAlign: "center",
                  transition: "all 0.2s",
                }}
              >
                {/* Smaller contained photo */}
                <div style={{ padding: "10px", textAlign: "center" }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "90px",
                      objectFit: "contain",
                      marginBottom: 8,
                    }}
                  />
                </div>

                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>
                  {member.name}
                </h3>

                <p style={{ fontSize: 12, color: "var(--orange)", fontWeight: 700, marginBottom: 6 }}>
                  {member.role}
                </p>

                <p style={{ fontSize: 12, marginBottom: 2 }}>
                  {member.phone}
                </p>

                <p style={{ fontSize: 11, color: "var(--text-muted)" }}>
                  {member.email}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




// ─── CTA ─────────────────────────────────────────────────────────────────────
export function CTA() {
  return (
    <section style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{
          background: "var(--bg-card)",
          border: "0.5px solid rgba(232,118,26,0.38)",
          borderRadius: 24, padding: "72px 48px",
          textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: 500, height: 300,
            background: "radial-gradient(ellipse, rgba(232,118,26,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Big decorative book */}
          <div style={{
            position: "absolute", right: 40, top: 20,
            fontSize: 100, opacity: 0.05, userSelect: "none",
          }}>📚</div>

          <div className="reveal" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(232,118,26,0.1)",
            border: "0.5px solid rgba(232,118,26,0.38)",
            borderRadius: 100, padding: "6px 18px",
            marginBottom: 28, fontSize: 12, fontWeight: 700,
            color: "var(--orange-bright)", letterSpacing: "0.07em",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--orange)", display: "inline-block" }} />
            REGISTRATIONS OPEN · LIMITED SPOTS
          </div>

          <h2 className="reveal" style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(30px, 5vw, 52px)",
            fontWeight: 900, letterSpacing: "-2px",
            marginBottom: 16, lineHeight: 1.1,
          }}>
            Ready to{" "}
            <span style={{ color: "var(--orange)" }}>teach the world?</span>
          </h2>

          <p style={{
            fontSize: "clamp(12px, 1.2vw, 14px)",
            maxWidth: 460, margin: "0 auto 40px",
            fontFamily: "var(--font-display)", color: "var(--text-muted)",
            fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
          }}>
            Join passionate educators at T4Teaching. Spots fill fast — register now and take the first step toward your global classroom.
          </p>

          <div className="reveal" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/register">
              <button style={{
                background: "var(--orange)", color: "#fff", border: "none",
                padding: "16px 44px", borderRadius: 12,
                fontSize: 16, fontWeight: 800,
                fontFamily: "var(--font-display)", cursor: "pointer",
                transition: "all 0.2s", letterSpacing: "-0.3px",
              }}
                onMouseEnter={e => { e.target.style.background = "var(--orange-bright)"; e.target.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.target.style.background = "var(--orange)"; e.target.style.transform = "translateY(0)"; }}
              >
                Register Now — It's Free →
              </button>
            </Link>
            <button style={{
              background: "transparent", color: "var(--text-muted)",
              border: "0.5px solid var(--border)",
              padding: "16px 32px", borderRadius: 12,
              fontSize: 15, fontWeight: 600,
              fontFamily: "var(--font-body)", cursor: "pointer",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.target.style.color = "#fff"; e.target.style.borderColor = "rgba(255,255,255,0.3)"; }}
              onMouseLeave={e => { e.target.style.color = "var(--text-muted)"; e.target.style.borderColor = "var(--border)"; }}
              onClick={() => window.open("https://aiesec.org/global-teacher", "_blank")}
            >
              About Global Teacher
            </button>
          </div>

          <div className="reveal" style={{
            display: "flex", gap: 28, justifyContent: "center",
            marginTop: 40, flexWrap: "wrap",
          }}>
            {["100% Free", "Certificate included", "Global placements", "All backgrounds welcome"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--text-muted)" }}>
                <span style={{ color: "var(--orange)" }}>✓</span> {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
const FOOTER_LINKS = [
  { section: "Event", items: ["About", "Theme", "Benefits", "Team"] },
  { section: "AIESEC", items: ["Global Teacher", "About AIESEC", "Alumni", "Contact"] },
  { section: "Legal", items: ["Privacy Policy", "Terms of Use"] },
];

const SOCIALS = [
  { name: "LinkedIn", href: "#", icon: <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg> },
  { name: "Instagram", href: "#", icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" /></svg> },
  { name: "Facebook", href: "#", icon: <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
];

export function Footer() {
  return (
    <footer style={{ borderTop: "0.5px solid var(--border)", padding: "60px 24px 32px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{
              fontFamily: "var(--font-display)", fontSize: 22,
              fontWeight: 900, marginBottom: 12, letterSpacing: "-0.3px",
            }}>
              T4<span style={{ color: "var(--orange)" }}>Teaching</span>
            </div>
            <p style={{
              fontSize: 14, color: "var(--text-muted)",
              lineHeight: 1.65, maxWidth: 270, marginBottom: 20,
              fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
            }}>
              An AIESEC Global Teacher micro-event empowering young educators to teach, grow, and impact the world.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {SOCIALS.map(s => (
                <a key={s.name} href={s.href} aria-label={s.name} style={{
                  width: 34, height: 34, background: "var(--bg-card)",
                  border: "0.5px solid var(--border)", borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text-muted)", textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--orange)"; e.currentTarget.style.borderColor = "var(--orange-border)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>
          {FOOTER_LINKS.map(col => (
            <div key={col.section}>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 800, marginBottom: 16, letterSpacing: "0.04em" }}>
                {col.section}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.items.map(item => (
                  <li key={item}>
                    <a href="#" style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = "var(--orange-bright)"}
                      onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          borderTop: "0.5px solid var(--border)", paddingTop: 24,
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "var(--text-faint)" }}>
            © 2026 AIESEC · T4Teaching. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: "var(--text-faint)" }}>Tunis, Tunisia 🇹🇳</p>
        </div>
      </div>
    </footer>
  );
}












