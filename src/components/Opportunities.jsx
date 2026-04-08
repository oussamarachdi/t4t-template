import { useState, useEffect } from "react";
import { opportunities as mockData } from "../data/content";
import { SectionLabel } from "./Speakers";

// ── GOOGLE SHEETS INTEGRATION ────────────────────────────────────────────────
// 1. Publish sheet: File → Share → Publish to web → CSV format
// 2. Paste URL below and uncomment the fetchOpportunities call
// ────────────────────────────────────────────────────────────────────────────
const SHEET_CSV_URL = "YOUR_GOOGLE_SHEETS_CSV_URL_HERE";

async function fetchOpportunities() {
  const res = await fetch(SHEET_CSV_URL);
  const text = await res.text();
  const [header, ...rows] = text.trim().split("\n");
  const keys = header.split(",").map(k => k.trim().toLowerCase().replace(/\s+/g, "_"));
  return rows.map((row, i) => {
    const vals = row.split(",");
    const obj = {};
    keys.forEach((k, j) => (obj[k] = vals[j]?.trim() ?? ""));
    obj.id = i + 1;
    obj.tags = obj.tags ? obj.tags.split("|").map(t => t.trim()) : [];
    return obj;
  });
}

const TAG_COLORS = {
  English: "#E8761A", Teaching: "#F58C30", Stipend: "#EF9F27",
  STEM: "#1D9E75", Volunteer: "#888780", "Hands-on": "#D4A06A",
  Primary: "#E8761A", Paid: "#EF9F27",
  Youth: "#AFA9EC", NGO: "#D4537E",
  Language: "#E8761A", Culture: "#F58C30",
  Community: "#1D9E75", Education: "#5DCAA5",
};

const TYPE_ICONS = {
  "Teaching Exchange": "🏫",
  "Volunteer": "🤝",
};

export default function Opportunities() {
  const [opps, setOpps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Uncomment to use live Google Sheets:
    // fetchOpportunities()
    //   .then(data => { setOpps(data); setLoading(false); })
    //   .catch(() => { setOpps(mockData); setLoading(false); });
    setTimeout(() => { setOpps(mockData); setLoading(false); }, 500);
  }, []);

  const types = ["All", "Teaching Exchange", "Volunteer"];
  const filtered = filter === "All" ? opps : opps.filter(o => o.type === filter);

  return (
    <section id="opportunities" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel
          tag="Global Opportunities"
          title="Your classroom is waiting"
          sub="Real teaching placements available to T4Teaching participants — updated from our live database."
        />

        {/* Filters */}
        <div className="reveal" style={{
          display: "flex", gap: 8,
          justifyContent: "center", marginBottom: 40, flexWrap: "wrap",
        }}>
          {types.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{
              background: filter === t ? "var(--orange)" : "var(--bg-card)",
              color: filter === t ? "#fff" : "var(--text-muted)",
              border: "0.5px solid " + (filter === t ? "var(--orange)" : "var(--border)"),
              padding: "8px 22px", borderRadius: 100,
              fontSize: 13, fontWeight: 600, cursor: "pointer",
              transition: "all 0.2s", fontFamily: "var(--font-body)",
            }}>{t}</button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: "center", color: "var(--text-muted)", padding: "60px 0" }}>
            <div style={{
              width: 36, height: 36, border: "2px solid var(--orange-border)",
              borderTopColor: "var(--orange)", borderRadius: "50%",
              animation: "spin 0.8s linear infinite", margin: "0 auto 16px",
            }} />
            <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            Loading opportunities...
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
            {filtered.map((o, i) => (
              <div key={o.id} className={`reveal reveal-delay-${(i % 3) + 1}`}
                style={{
                  background: "var(--bg-card)", border: "0.5px solid var(--border)",
                  borderRadius: 14, padding: "22px 20px",
                  transition: "border-color 0.25s, transform 0.25s",
                  display: "flex", flexDirection: "column", gap: 12,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,118,26,0.48)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 24 }}>{o.flag}</span>
                  <span style={{
                    background: "var(--orange-dim)", color: "var(--orange)",
                    fontSize: 11, fontWeight: 700,
                    padding: "3px 10px", borderRadius: 20, letterSpacing: "0.04em",
                  }}>{TYPE_ICONS[o.type]} {o.type}</span>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: 16,
                    fontWeight: 800, lineHeight: 1.3, marginBottom: 4, letterSpacing: "-0.3px",
                  }}>{o.title}</h3>
                  <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{o.org} · {o.country}</p>
                </div>
                <div style={{ display: "flex", gap: 20 }}>
                  {[["Duration", o.duration], ["Deadline", o.deadline]].map(([lbl, val]) => (
                    <div key={lbl}>
                      <div style={{ fontSize: 10, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{lbl}</div>
                      <div style={{ fontSize: 13, color: "#fff", marginTop: 2 }}>{val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {(o.tags || []).map(tag => (
                    <span key={tag} style={{
                      background: `${TAG_COLORS[tag] || "#888"}18`,
                      color: TAG_COLORS[tag] || "var(--text-muted)",
                      border: `0.5px solid ${TAG_COLORS[tag] || "#888"}44`,
                      fontSize: 11, padding: "3px 9px", borderRadius: 20, fontWeight: 600,
                    }}>{tag}</span>
                  ))}
                </div>
                <a href={o.link} style={{
                  display: "block", textAlign: "center",
                  background: "transparent", color: "var(--orange)",
                  border: "0.5px solid var(--orange-border)",
                  padding: "9px", borderRadius: 8,
                  fontSize: 13, fontWeight: 700, textDecoration: "none",
                  transition: "background 0.2s, color 0.2s", marginTop: "auto",
                }}
                  onMouseEnter={e => { e.target.style.background = "var(--orange)"; e.target.style.color = "#fff"; }}
                  onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "var(--orange)"; }}
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        )}

        <div className="reveal" style={{
          marginTop: 32, background: "rgba(232,118,26,0.06)",
          border: "0.5px solid rgba(232,118,26,0.22)",
          borderRadius: 10, padding: "12px 20px",
          display: "flex", alignItems: "center", gap: 10,
          maxWidth: 600, margin: "32px auto 0",
        }}>
          <span style={{ fontSize: 16 }}>📊</span>
          <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>
            Opportunities sync from Google Sheets.{" "}
            <span style={{ color: "var(--orange)", fontWeight: 700 }}>
              Set SHEET_CSV_URL in Opportunities.jsx
            </span>{" "}
            to connect your live sheet.
          </p>
        </div>
      </div>
    </section>
  );
}
