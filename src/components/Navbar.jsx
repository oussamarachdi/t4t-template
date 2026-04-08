import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Speakers",      href: "#speakers"      },
  { label: "Agenda",        href: "#agenda"        },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Benefits",      href: "#benefits"      },
  { label: "Team",          href: "#team"          },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    if (!isHome) return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
      background: scrolled ? "rgba(12,8,4,0.93)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "0.5px solid var(--border)" : "0.5px solid transparent",
      padding: "0 40px",
    }}>
      <nav style={{
        maxWidth: 1200, margin: "0 auto",
        height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          {/* Book icon replica */}
          <div style={{
            width: 36, height: 36,
            borderRadius: "50%",
            background: "var(--orange)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18,
            flexShrink: 0,
          }}>📖</div>
          <div>
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: 18, fontWeight: 900,
              color: "#fff", letterSpacing: "-0.3px",
              lineHeight: 1,
            }}>
              T4<span style={{ color: "var(--orange)" }}>Teaching</span>
            </span>
            <div style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 400, lineHeight: 1, marginTop: 2 }}>
              by AIESEC · Global Teacher
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        {isHome && (
          <ul style={{ display: "flex", gap: 28, listStyle: "none", alignItems: "center" }} className="desktop-nav">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                  style={{
                    color: "var(--text-muted)", textDecoration: "none",
                    fontSize: 14, fontWeight: 600, transition: "color 0.2s", cursor: "pointer",
                  }}
                  onMouseEnter={e => e.target.style.color = "var(--orange-bright)"}
                  onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <Link to="/register">
          <button style={{
            background: "var(--orange)",
            color: "#fff", border: "none",
            padding: "9px 22px", borderRadius: 8,
            fontSize: 13, fontWeight: 700,
            fontFamily: "var(--font-display)",
            cursor: "pointer",
            transition: "background 0.2s, transform 0.15s",
          }}
            onMouseEnter={e => { e.target.style.background = "var(--orange-bright)"; e.target.style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { e.target.style.background = "var(--orange)"; e.target.style.transform = "scale(1)"; }}
          >
            Register Free →
          </button>
        </Link>
      </nav>
      <style>{`@media(max-width:768px){.desktop-nav{display:none!important}}`}</style>
    </header>
  );
}
