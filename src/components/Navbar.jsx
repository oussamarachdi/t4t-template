import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "Theme",         href: "#theme"         },
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
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
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
          <div style={{
            fontSize: 12,
            color: "var(--text-muted)",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.9,
          }}>
            AIESEC · Global Teacher
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


      </nav>
      <style>{`@media(max-width:768px){.desktop-nav{display:none!important}}`}</style>
    </header>
  );
}