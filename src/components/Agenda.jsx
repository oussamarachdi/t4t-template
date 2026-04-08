import { useState } from "react";
import { agenda } from "../data/content";
import { SectionLabel } from "./Speakers";

const TYPE_STYLES = {
  keynote:  { bg: "rgba(232,118,26,0.15)", color: "#F58C30",  label: "Keynote"  },
  talk:     { bg: "rgba(232,118,26,0.08)", color: "#E8761A",  label: "Talk"     },
  workshop: { bg: "rgba(160,80,16,0.18)",  color: "#D4A06A",  label: "Workshop" },
  panel:    { bg: "rgba(127,119,221,0.12)",color: "#AFA9EC",  label: "Panel"    },
  break:    { bg: "rgba(255,255,255,0.04)",color: "#A08060",  label: "Break"    },
};

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(0);
  const day = agenda[activeDay];

  return (
    <section id="agenda" style={{
      padding: "96px 24px",
      background: "linear-gradient(180deg, var(--bg) 0%, var(--bg2) 50%, var(--bg) 100%)",
    }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <SectionLabel
          tag="Agenda"
          title="Two days of transformation"
          sub="Packed with talks, workshops, and real human connection."
        />

        {/* Day tabs */}
        <div className="reveal" style={{
          display: "flex", gap: 8,
          justifyContent: "center",
          background: "var(--bg-card)",
          border: "0.5px solid var(--border)",
          borderRadius: 12, padding: 6,
          width: "fit-content", margin: "0 auto 44px",
        }}>
          {agenda.map((d, i) => (
            <button key={d.day} onClick={() => setActiveDay(i)} style={{
              background: activeDay === i ? "var(--orange)" : "transparent",
              color: activeDay === i ? "#fff" : "var(--text-muted)",
              border: "none", padding: "10px 32px",
              borderRadius: 8, fontSize: 14, fontWeight: 700,
              fontFamily: "var(--font-display)", cursor: "pointer",
              transition: "all 0.25s",
            }}>
              {d.day}
              <span style={{ display: "block", fontSize: 11, fontWeight: 400, opacity: 0.8 }}>{d.date}</span>
            </button>
          ))}
        </div>

        {/* Events */}
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", left: 68, top: 0, bottom: 0,
            width: 0.5, background: "var(--border)",
          }} />
          {day.events.map((ev, i) => {
            const t = TYPE_STYLES[ev.type] || TYPE_STYLES.break;
            return (
              <div key={i} className={`reveal reveal-delay-${(i % 4) + 1}`}
                style={{ display: "flex", gap: 24, alignItems: "flex-start", marginBottom: 14, position: "relative" }}>
                <div style={{
                  minWidth: 52, textAlign: "right",
                  fontSize: 12, color: "var(--text-muted)",
                  fontFamily: "var(--font-display)", fontWeight: 600,
                  paddingTop: 14, fontVariantNumeric: "tabular-nums",
                }}>{ev.time}</div>
                <div style={{
                  position: "relative", zIndex: 1,
                  width: 10, height: 10, borderRadius: "50%",
                  background: t.color, border: "2px solid var(--bg)",
                  marginTop: 16, flexShrink: 0,
                }} />
                <div style={{
                  flex: 1, background: "var(--bg-card)",
                  border: "0.5px solid var(--border)", borderRadius: 10,
                  padding: "12px 16px",
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between", gap: 12,
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(232,118,26,0.4)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
                >
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{ev.title}</span>
                  <span style={{
                    background: t.bg, color: t.color,
                    fontSize: 11, fontWeight: 700,
                    padding: "3px 10px", borderRadius: 20,
                    whiteSpace: "nowrap", letterSpacing: "0.04em",
                  }}>{t.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
