import { useReveal } from "../hooks/useReveal";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Speakers from "../components/Speakers";
import Agenda from "../components/Agenda";
import Opportunities from "../components/Opportunities";
import { Benefits, Team, CTA, Footer } from "../components/Sections";

const Divider = () => (
  <div style={{ height: "0.5px", background: "var(--border)", maxWidth: 1100, margin: "0 auto" }} />
);

export default function Home() {
  useReveal();

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      <Hero />

      {/* Announcement ticker */}
      <div style={{
        background: "var(--bg2)",
        borderTop: "0.5px solid var(--border)",
        borderBottom: "0.5px solid var(--border)",
        overflow: "hidden", padding: "10px 0",
      }}>
        <div style={{
          display: "flex", gap: 56,
          animation: "ticker 22s linear infinite",
          whiteSpace: "nowrap", width: "max-content",
        }}>
          {[...Array(2)].flatMap(() =>
            ["📚 Global Teacher Program", "✈️ 60+ Host Countries", "🏫 June 10–11, 2025",
              "🎓 Free to attend", "🤝 Real Placements", "💡 Expert Educators"].map((t, i) => (
              <span key={t + i} style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 600 }}>
                <span style={{ color: "var(--orange)", marginRight: 8 }}>◆</span>{t}
              </span>
            ))
          )}
        </div>
      </div>

      <Speakers />
      <Divider />
      <Agenda />
      <Divider />
      <Opportunities />
      <Divider />
      <Benefits />
      <Divider />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}
