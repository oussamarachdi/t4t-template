import { useState } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";

const FIELDS = [
  { id: "firstName",   label: "First Name",          type: "text",   placeholder: "Sana",             half: true  },
  { id: "lastName",    label: "Last Name",            type: "text",   placeholder: "Mejri",            half: true  },
  { id: "email",       label: "Email Address",        type: "email",  placeholder: "you@example.com",  half: false },
  { id: "phone",       label: "Phone Number",         type: "tel",    placeholder: "+216 XX XXX XXX",  half: true  },
  { id: "country",     label: "Country",              type: "text",   placeholder: "Tunisia",          half: true  },
  { id: "university",  label: "University / College", type: "text",   placeholder: "Your institution", half: false },
];

const SUBJECTS = ["English", "Mathematics", "Sciences", "Arts", "Physical Education", "Social Studies", "Languages", "Technology"];
const AGE_GROUPS = ["Primary (6–11)", "Middle School (11–15)", "High School (15–18)", "University", "Adult Learners"];
const EXPERIENCE = ["No teaching experience", "1–2 years", "3–5 years", "5+ years"];

export default function Register() {
  useReveal();
  const [form, setForm]         = useState({});
  const [subjects, setSubjects] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [focused, setFocused]   = useState(null);

  const handleChange = (id, val) => setForm(f => ({ ...f, [id]: val }));
  const toggleSubject = (s) =>
    setSubjects(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const inputStyle = (id) => ({
    width: "100%",
    background: "var(--bg2)",
    border: `0.5px solid ${focused === id ? "var(--orange)" : "var(--border)"}`,
    borderRadius: 10, padding: "12px 16px",
    color: "#fff", fontSize: 15,
    fontFamily: "var(--font-body)", outline: "none",
    transition: "border-color 0.2s", boxSizing: "border-box",
  });

  if (submitted) {
    return (
      <div style={{
        minHeight: "100vh", background: "var(--bg)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24, flexDirection: "column", textAlign: "center", gap: 16,
      }}>
        <div style={{
          width: 88, height: 88, borderRadius: "50%",
          background: "rgba(232,118,26,0.12)",
          border: "1.5px solid var(--orange)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 40, marginBottom: 8,
          animation: "fadeUp 0.5s ease",
        }}>📚</div>
        <h1 style={{
          fontFamily: "var(--font-display)", fontSize: 38,
          fontWeight: 900, letterSpacing: "-1px",
          animation: "fadeUp 0.6s ease 0.1s both",
        }}>You're registered! 🎉</h1>
        <p style={{
          color: "var(--text-muted)", fontSize: 17,
          maxWidth: 440, lineHeight: 1.7,
          fontFamily: "var(--font-serif)", fontStyle: "italic",
          animation: "fadeUp 0.6s ease 0.2s both",
        }}>
          Your registration is confirmed. We'll send details to your email — see you in the classroom on June 10!
        </p>
        <Link to="/" style={{ marginTop: 16, animation: "fadeUp 0.6s ease 0.3s both", display: "block" }}>
          <button style={{
            background: "var(--orange)", color: "#fff", border: "none",
            padding: "12px 28px", borderRadius: 10,
            fontSize: 15, fontWeight: 700,
            fontFamily: "var(--font-display)", cursor: "pointer",
          }}>← Back to home</button>
        </Link>
        <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>
      </div>
    );
  }

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
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 18 }}>📖</span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 900 }}>
            T4<span style={{ color: "var(--orange)" }}>Teaching</span>
          </span>
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
            color: "var(--text-muted)", fontSize: 16, lineHeight: 1.65,
            fontFamily: "var(--font-serif)", fontStyle: "italic",
          }}>
            Take 3 minutes to register — your global teaching journey starts here.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Personal info */}
          <div className="reveal" style={{
            background: "var(--bg-card)", border: "0.5px solid var(--border)",
            borderRadius: 20, padding: "36px 32px", marginBottom: 16,
          }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, marginBottom: 24, letterSpacing: "-0.3px" }}>
              Personal Information
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {FIELDS.map(f => (
                <div key={f.id} style={{ width: f.half ? "calc(50% - 8px)" : "100%", minWidth: 200 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 6, color: "#ccc" }}>
                    {f.label} <span style={{ color: "var(--orange)" }}>*</span>
                  </label>
                  <input
                    type={f.type} placeholder={f.placeholder} required
                    style={inputStyle(f.id)}
                    onFocus={() => setFocused(f.id)}
                    onBlur={() => setFocused(null)}
                    onChange={e => handleChange(f.id, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Teaching profile */}
          <div className="reveal" style={{
            background: "var(--bg-card)", border: "0.5px solid var(--border)",
            borderRadius: 20, padding: "36px 32px", marginBottom: 16,
          }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.3px" }}>
              Teaching Profile
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 20 }}>Subjects you'd love to teach (select all that apply)</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
              {SUBJECTS.map(s => {
                const active = subjects.includes(s);
                return (
                  <button key={s} type="button" onClick={() => toggleSubject(s)} style={{
                    background: active ? "rgba(232,118,26,0.15)" : "var(--bg2)",
                    color: active ? "var(--orange-bright)" : "var(--text-muted)",
                    border: `0.5px solid ${active ? "rgba(232,118,26,0.5)" : "var(--border)"}`,
                    padding: "8px 18px", borderRadius: 100,
                    fontSize: 13, fontFamily: "var(--font-body)",
                    cursor: "pointer", transition: "all 0.2s", fontWeight: active ? 700 : 400,
                  }}>{s}</button>
                );
              })}
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 12 }}>Preferred age group</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
              {AGE_GROUPS.map(ag => {
                const active = form.ageGroup === ag;
                return (
                  <button key={ag} type="button" onClick={() => handleChange("ageGroup", ag)} style={{
                    background: active ? "var(--orange)" : "var(--bg2)",
                    color: active ? "#fff" : "var(--text-muted)",
                    border: `0.5px solid ${active ? "var(--orange)" : "var(--border)"}`,
                    padding: "8px 18px", borderRadius: 100,
                    fontSize: 13, fontFamily: "var(--font-body)",
                    cursor: "pointer", transition: "all 0.2s", fontWeight: active ? 700 : 400,
                  }}>{ag}</button>
                );
              })}
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 12 }}>Teaching experience</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {EXPERIENCE.map(exp => {
                const active = form.experience === exp;
                return (
                  <button key={exp} type="button" onClick={() => handleChange("experience", exp)} style={{
                    background: active ? "var(--orange)" : "var(--bg2)",
                    color: active ? "#fff" : "var(--text-muted)",
                    border: `0.5px solid ${active ? "var(--orange)" : "var(--border)"}`,
                    padding: "10px 20px", borderRadius: 10,
                    fontSize: 13, fontFamily: "var(--font-body)",
                    cursor: "pointer", transition: "all 0.2s", fontWeight: active ? 700 : 400,
                  }}>{exp}</button>
                );
              })}
            </div>
          </div>

          {/* Motivation */}
          <div className="reveal" style={{
            background: "var(--bg-card)", border: "0.5px solid var(--border)",
            borderRadius: 20, padding: "36px 32px", marginBottom: 24,
          }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, marginBottom: 16, letterSpacing: "-0.3px" }}>
              Your Story
            </h2>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 6, color: "#ccc" }}>
              Why do you want to teach globally? <span style={{ color: "var(--orange)" }}>*</span>
            </label>
            <textarea
              placeholder="Tell us about your passion for education and what you hope to experience through a global teaching journey..."
              required rows={4}
              style={{ ...inputStyle("motivation"), resize: "vertical", lineHeight: 1.6 }}
              onFocus={() => setFocused("motivation")}
              onBlur={() => setFocused(null)}
              onChange={e => handleChange("motivation", e.target.value)}
            />
          </div>

          {/* Submit */}
          <div className="reveal" style={{ textAlign: "center" }}>
            <button type="submit" disabled={loading} style={{
              background: loading ? "var(--orange-dark)" : "var(--orange)",
              color: "#fff", border: "none",
              padding: "16px 52px", borderRadius: 12,
              fontSize: 16, fontWeight: 800,
              fontFamily: "var(--font-display)", cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.2s", letterSpacing: "-0.3px",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}
              onMouseEnter={e => !loading && (e.target.style.transform = "translateY(-2px)")}
              onMouseLeave={e => (e.target.style.transform = "translateY(0)")}
            >
              {loading ? (
                <>
                  <span style={{
                    width: 16, height: 16,
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderTopColor: "#fff", borderRadius: "50%",
                    display: "inline-block",
                    animation: "spin 0.7s linear infinite",
                  }} />
                  Registering...
                </>
              ) : "Complete Registration →"}
            </button>
            <p style={{ fontSize: 13, color: "var(--text-faint)", marginTop: 12 }}>
              Free event · Instant confirmation · Certificate included
            </p>
          </div>
        </form>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
