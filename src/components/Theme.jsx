import { SectionLabel } from "./Sections";
import teachingAbroad from "../assets/a.png";
import futureOfTeaching from "../assets/b.png";
import inclusiveLearning from "../assets/c.png";

const THEME_PARAGRAPHS = [
  {
    id: 1,
    title: "AI in the Classroom",
    desc: "Exploring the integration of AI tools in Tunisian education while respecting academic integrity and ethical boundaries.",
    photo: teachingAbroad,
  },
  {
    id: 2,
    title: "The Teacher of Tomorrow",
    desc: "Rethinking pedagogy by evolving the role of the educator from a “knowledge transmitter” to a “facilitator” of discovery in the digital age.",
    photo: futureOfTeaching,
  },
  {
    id: 3,
    title: "Studying and Teaching Abroad",
    desc: "Analyzing educational contrasts on a global scale and how international exchanges foster student autonomy and independent thinking.",
    photo: inclusiveLearning,
  }
];

export default function Theme() {
  return (
    <section id="theme" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <SectionLabel
          tag="Our Theme"
          title="Empowering Education in the Digital Age"
          sub="Discover the core pillars of our teaching philosophy and what drives our movement forward."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 64, marginTop: 48 }}>
          {THEME_PARAGRAPHS.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="reveal"
                style={{
                  display: "flex",
                  flexDirection: isEven ? "row" : "row-reverse",
                  alignItems: "center",
                  gap: 48,
                  background: "var(--bg-card)",
                  border: "0.5px solid var(--border)",
                  borderRadius: 24,
                  padding: 32,
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,118,26,0.48)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {/* Image side */}
                <div style={{ flex: 1, borderRadius: 16, overflow: "hidden", position: "relative" }}>
                  <img
                    src={item.photo}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: 280,
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>

                {/* Text side */}
                <div style={{ flex: 1.2 }}>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    fontWeight: 800,
                    marginBottom: 16,
                    letterSpacing: "-0.5px",
                    color: "var(--text)",
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: 16,
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          #theme > div > div > div {
            flex-direction: column !important;
            gap: 24px !important;
            padding: 24px !important;
          }
          #theme img {
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
