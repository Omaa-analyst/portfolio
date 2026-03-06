import { useState, useEffect, useRef } from "react";

const NAV = ["About", "Skills", "Projects", "Blog", "Contact"];

const SKILLS = [
  { icon: "📊", title: "Data Analytics & Visualization", desc: "From raw numbers to clear stories — I use Power BI, Python, Excel, and R to surface the insights that actually move the needle." },
  { icon: "🧠", title: "Predictive Modeling & Machine Learning", desc: "Building models that don't just describe the past — they anticipate what's next. Regression, classification, and LLM-powered preference modeling." },
  { icon: "💰", title: "Revenue Optimization", desc: "Pinpointing leakage, forecasting collections, and designing AI-powered growth projections for businesses and subnational governments." },
  { icon: "🏛️", title: "Subnational Financial Analytics", desc: "Specialized analytics for government bodies — KPI dashboards, operational efficiency modeling, and tax compliance systems built for public accountability." },
  { icon: "🔄", title: "Business Strategy & Consulting", desc: "Digital transformation, process improvement, and integrated billing systems — I help organizations work smarter, not just harder." },
  { icon: "✍️", title: "Tech Writing & Content Creation", desc: "Tutorials, guides, and blog posts that make data and technology approachable. Writing that informs, not just impresses." },
];

const PROJECTS = [
  {
    num: "01",
    title: "LLM Preference Project",
    category: "Machine Learning",
    desc: "Designed a full end-to-end ML pipeline to model user preferences using large language models. Covered data preprocessing, model training, evaluation, and production-ready exports via joblib.",
    tags: ["Python", "LLMs", "Jupyter", "joblib"],
  },
  {
    num: "02",
    title: "Smart Revenue Optimization Platform",
    category: "Gov · Analytics",
    desc: "Built a predictive system for subnational governments to detect revenue leakages, forecast tax collections, and drive AI-powered compliance improvements.",
    tags: ["Predictive Analytics", "Power BI", "AI", "Revenue"],
  },
  {
    num: "03",
    title: "Age vs Premium — Insurance Pricing Model",
    category: "Statistical Modeling",
    desc: "Used simple linear regression to quantify the relationship between client age and insurance premium rates, producing a transparent pricing equation for actuarial use.",
    tags: ["Python", "Regression", "Statistics"],
  },
  {
    num: "04",
    title: "Subnational Interactive Dashboard",
    category: "Data Visualization",
    desc: "An interactive tool for visualizing regional datasets — charts, tables, and geospatial views enabling comparative policy and business analysis across geographic areas.",
    tags: ["Dashboard", "Geospatial", "Analytics"],
  },
  {
    num: "05",
    title: "Beading & Crochet E-Commerce Venture",
    category: "Entrepreneurship",
    desc: "Launched a handcraft business selling custom resin and crochet pieces online — combining creative production with digital marketing and logistics coordination.",
    tags: ["E-Commerce", "Digital Marketing"],
  },
  {
    num: "06",
    title: "Blog & Tech Writing on Medium",
    category: "Content",
    desc: "A growing library of articles on data analytics, AI, productivity, and business strategy — making complex ideas readable for curious, non-technical audiences too.",
    tags: ["Medium", "Writing", "AI", "Analytics"],
  },
];

const BLOGS = [
  {
    title: "How I See AI: A Realistic Look at the Future, Risks, and Survival",
    date: "Feb 16, 2025",
    tag: "AI",
    excerpt: "Beyond the hype and the fear — a grounded, first-person take on what AI actually means for how we work, create, and stay relevant.",
    link: "https://medium.com/@victorymmesoma003/how-i-see-ai-a-realistic-look-at-the-future-risks-and-survival-1a2329beaf4a",
  },
  {
    title: "When Systems Learn to See: The Unseen Logic of Markets and Machines",
    date: "Feb 3, 2025",
    tag: "Analytics",
    excerpt: "The polished dashboards look clean. But underneath them, something less obvious is steering the decisions that shape your industry.",
    link: "https://medium.com/@victorymmesoma003/when-systems-learn-to-see-the-unseen-logic-of-markets-and-machines-a80d7e1ccedc",
  },
  {
    title: "Productivity Tools Are Making Us Feel Busy, Not Effective",
    date: "Jan 20, 2025",
    tag: "Productivity",
    excerpt: "The calendar is full. The task list is colour-coded. So why does nothing feel done? A case for clarity over output.",
    link: "https://medium.com/@victorymmesoma003/productivity-tools-are-making-us-feel-busy-not-effective-2aad2a27e9ef",
  },
  {
    title: "What Clients Don't Understand About AI-Assisted Writing",
    date: "Jan 9, 2025",
    tag: "Writing",
    excerpt: "When good writing gets flagged as artificial, it says more about us than the tools. What the AI writing debate really reveals.",
    link: "https://medium.com/@victorymmesoma003/what-clients-dont-understand-about-ai-assisted-writing-d3552d889602",
  },
  {
    title: "5 Financial Habits I'm Building in My 20s (And Why They Matter)",
    date: "Jan 6, 2025",
    tag: "Finance",
    excerpt: "Money is never abstract when you grow up in Nigeria. Here are the five habits I'm building — before time makes them harder.",
    link: "https://medium.com/@victorymmesoma003/5-financial-habits-im-building-in-my-20s-and-why-they-matter-76062d0dcd80",
  },
];

const PROCESS = [
  { num: "01", title: "Understand", desc: "Dig into your business context, goals, and the shape of your data" },
  { num: "02", title: "Analyze", desc: "Apply rigorous analytics to surface what the numbers are actually saying" },
  { num: "03", title: "Strategize", desc: "Translate findings into clear, actionable recommendations" },
  { num: "04", title: "Deliver", desc: "Hand off results that are ready to use — not just impressive to look at" },
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, delay = 0, style = {}, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function BarChart({ accent }) {
  const bars = [45, 62, 38, 78, 55, 88, 60, 95, 68, 82, 50, 91, 70, 96];
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 140, padding: "0 2px" }}>
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: `${h}%`,
            background: `linear-gradient(to top, ${accent}, ${accent}88)`,
            borderRadius: "3px 3px 0 0",
            animation: `barGrow 0.5s ease ${i * 0.04}s both`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovSkill, setHovSkill] = useState(null);
  const [hovProj, setHovProj] = useState(null);
  const [hovBlog, setHovBlog] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["about", "skills", "projects", "blog", "contact"];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.25 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const T = dark
    ? {
        bg: "#0b0f1a", surface: "#111827", card: "#162032", cardHov: "#1c2a40",
        border: "#1e3050", accent: "#4f8ef7", accentDim: "#4f8ef718",
        accentBorder: "#4f8ef733", text: "#e8f0ff", muted: "#7a9acc",
        dim: "#3a5070", navBg: "#0b0f1aee", footerBg: "#070c14",
      }
    : {
        bg: "#ffffff", surface: "#f5f7fc", card: "#ffffff", cardHov: "#f0f4ff",
        border: "#e2e8f5", accent: "#2563eb", accentDim: "#2563eb12",
        accentBorder: "#2563eb30", text: "#0f172a", muted: "#4a5a7a",
        dim: "#9aaac0", navBg: "#ffffffee", footerBg: "#0f172a",
      };

  const A = T.accent;

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: T.bg, color: T.text, minHeight: "100vh", overflowX: "hidden", transition: "background .4s, color .4s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${T.bg}; }
        ::-webkit-scrollbar-thumb { background: ${A}66; border-radius: 2px; }
        ::selection { background: ${A}33; }
        a { color: inherit; text-decoration: none; }

        @keyframes barGrow { from{transform:scaleY(0);transform-origin:bottom} to{transform:scaleY(1)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .nav-link { font-size:14px; font-weight:500; color:${T.muted}; cursor:pointer; background:none; border:none; transition:color .25s; padding:4px 0; position:relative; font-family:inherit; }
        .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:2px; background:${A}; transition:width .3s; }
        .nav-link:hover { color:${T.text}; }
        .nav-link.active { color:${A}; }
        .nav-link.active::after { width:100%; }

        .accent-badge { display:inline-flex; align-items:center; gap:8px; background:${T.accentDim}; border:1px solid ${T.accentBorder}; padding:8px 18px; border-radius:999px; font-size:13px; font-weight:600; color:${A}; }
        .live-dot { width:7px; height:7px; border-radius:50%; background:#22c55e; animation:blink 2s infinite; }

        .btn-primary { display:inline-flex; align-items:center; gap:8px; background:${A}; color:#fff; border:none; padding:13px 26px; border-radius:8px; font-size:14px; font-weight:600; cursor:pointer; font-family:inherit; transition:opacity .2s, transform .2s, box-shadow .25s; }
        .btn-primary:hover { opacity:.88; transform:translateY(-2px); box-shadow:0 8px 28px ${A}44; }

        .btn-ghost { display:inline-flex; align-items:center; gap:8px; background:transparent; color:${T.text}; border:1.5px solid ${T.border}; padding:13px 26px; border-radius:8px; font-size:14px; font-weight:600; cursor:pointer; font-family:inherit; transition:border-color .25s, color .25s, transform .2s; }
        .btn-ghost:hover { border-color:${A}; color:${A}; transform:translateY(-2px); }

        .section-label { font-size:12px; font-weight:700; color:${A}; letter-spacing:0.14em; text-transform:uppercase; }
        .section-title { font-size:clamp(28px,4vw,46px); font-weight:800; line-height:1.1; }
        .highlight { color:${A}; }

        .skill-card { background:${T.card}; border:1.5px solid ${T.border}; border-radius:14px; padding:28px 24px; transition:all .3s; cursor:default; box-shadow:${dark ? "none" : "0 1px 6px rgba(0,0,0,.04)"}; }
        .skill-card:hover { background:${T.cardHov}; border-color:${A}44; transform:translateY(-4px); box-shadow:0 16px 48px ${A}18; }
        .skill-icon-box { width:50px; height:50px; border-radius:12px; background:${T.accentDim}; border:1px solid ${T.accentBorder}; display:flex; align-items:center; justify-content:center; font-size:22px; margin-bottom:16px; }

        .project-card { background:${T.card}; border:1.5px solid ${T.border}; border-radius:14px; padding:28px 24px; cursor:pointer; position:relative; overflow:hidden; transition:all .3s; box-shadow:${dark ? "none" : "0 1px 6px rgba(0,0,0,.04)"}; }
        .project-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,${A},${A}88); transform:scaleX(0); transform-origin:left; transition:transform .4s ease; }
        .project-card:hover { background:${T.cardHov}; border-color:${A}44; transform:translateY(-4px); box-shadow:0 16px 48px ${A}15; }
        .project-card:hover::before { transform:scaleX(1); }
        .proj-num { font-size:44px; font-weight:800; color:${T.border}; line-height:1; transition:color .3s; }
        .project-card:hover .proj-num { color:${A}22; }

        .tag-chip { font-size:11px; font-weight:600; color:${T.muted}; border:1px solid ${T.border}; padding:3px 10px; border-radius:999px; }

        .blog-card { background:${T.card}; border:1.5px solid ${T.border}; border-radius:14px; padding:24px; transition:all .3s; box-shadow:${dark ? "none" : "0 1px 6px rgba(0,0,0,.04)"}; }
        .blog-card:hover { background:${T.cardHov}; border-color:${A}44; transform:translateY(-3px); box-shadow:0 12px 36px ${A}12; }

        .process-row { background:${T.card}; border:1.5px solid ${T.border}; border-radius:12px; padding:20px 26px; display:flex; align-items:center; gap:22px; transition:all .3s; box-shadow:${dark ? "none" : "0 1px 4px rgba(0,0,0,.03)"}; }
        .process-row:hover { border-color:${A}55; background:${T.cardHov}; }
        .process-num { font-size:20px; font-weight:800; color:${A}; opacity:0.55; min-width:34px; }

        .stat-num { font-size:clamp(32px,4vw,50px); font-weight:800; color:${A}; line-height:1; }
        .stat-label { font-size:14px; color:${T.muted}; margin-top:6px; }

        .form-input { width:100%; background:${T.surface}; border:1.5px solid ${T.border}; border-radius:8px; padding:13px 16px; color:${T.text}; font-family:inherit; font-size:14px; outline:none; transition:border-color .3s, box-shadow .3s; }
        .form-input:focus { border-color:${A}77; box-shadow:0 0 0 3px ${A}15; }
        .form-input::placeholder { color:${T.dim}; }

        .contact-row { display:flex; align-items:center; gap:12px; padding:14px 0; border-bottom:1px solid ${T.border}; }
        .contact-icon { width:36px; height:36px; border-radius:8px; background:${T.accentDim}; border:1px solid ${T.accentBorder}; display:flex; align-items:center; justify-content:center; font-size:15px; flex-shrink:0; }

        .dark-toggle { width:44px; height:24px; border-radius:999px; background:${dark ? A : T.border}; border:none; cursor:pointer; position:relative; transition:background .3s; flex-shrink:0; }
        .dark-toggle::after { content:''; position:absolute; top:3px; left:${dark ? "22px" : "3px"}; width:18px; height:18px; border-radius:50%; background:#fff; transition:left .3s; box-shadow:0 1px 4px rgba(0,0,0,.2); }

        .cta-band { background:${dark ? T.surface : T.accentDim}; border:1.5px solid ${T.accentBorder}; border-radius:20px; padding:72px 40px; text-align:center; position:relative; overflow:hidden; }
        .cta-band::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse at 50% 0%, ${A}20 0%, transparent 65%); pointer-events:none; }

        .footer-link { font-size:13px; color:#8899bb; display:block; margin-bottom:10px; cursor:pointer; transition:color .2s; }
        .footer-link:hover { color:${A}; }
        .social-btn { width:36px; height:36px; border-radius:8px; background:#162032; border:1px solid #1e3050; display:flex; align-items:center; justify-content:center; font-size:14px; cursor:pointer; transition:all .25s; }
        .social-btn:hover { background:${A}; border-color:${A}; }

        @media(max-width:768px){
          .desktop-nav{display:none!important}
          .hero-grid{grid-template-columns:1fr!important}
          .skills-grid{grid-template-columns:1fr!important}
          .projects-grid{grid-template-columns:1fr!important}
          .blog-top-grid{grid-template-columns:1fr!important}
          .blog-bot-grid{grid-template-columns:1fr!important}
          .about-grid{grid-template-columns:1fr!important}
          .contact-grid{grid-template-columns:1fr!important}
          .footer-grid{grid-template-columns:1fr 1fr!important}
          .stats-row{grid-template-columns:1fr 1fr!important}
          .hero-right{display:none!important}
        }
        @media(min-width:769px){.mob-btn{display:none!important}}
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, padding:"0 52px", height:68, display:"flex", alignItems:"center", justifyContent:"space-between", background:scrolled ? T.navBg : "transparent", backdropFilter:scrolled ? "blur(20px)" : "none", borderBottom:scrolled ? `1px solid ${T.border}` : "1px solid transparent", transition:"all .4s" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:34, height:34, borderRadius:8, background:`linear-gradient(135deg,${A},${A}99)`, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:15, color:"#fff" }}>M</div>
          <span style={{ fontWeight:800, fontSize:15, color:T.text }}>Mmesoma<span style={{ color:A }}>.</span></span>
        </div>
        <div className="desktop-nav" style={{ display:"flex", gap:36 }}>
          {NAV.map(l => <button key={l} className={`nav-link ${activeSection === l.toLowerCase() ? "active" : ""}`} onClick={() => scrollTo(l)}>{l}</button>)}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:14 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ fontSize:14 }}>{dark ? "🌙" : "☀️"}</span>
            <button className="dark-toggle" onClick={() => setDark(!dark)} title="Toggle dark mode" />
          </div>
          <button className="btn-primary desktop-nav" style={{ padding:"10px 20px", fontSize:13 }} onClick={() => scrollTo("contact")}>Let's Talk →</button>
          <button className="mob-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background:"none", border:`1px solid ${T.border}`, color:T.text, padding:"8px 13px", borderRadius:6, cursor:"pointer", fontSize:12, fontFamily:"inherit" }}>{menuOpen ? "✕" : "☰"}</button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ position:"fixed", inset:0, zIndex:199, background:T.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:40 }}>
          {NAV.map(l => <button key={l} className="nav-link" onClick={() => scrollTo(l)} style={{ fontSize:20 }}>{l}</button>)}
          <button className="btn-primary" onClick={() => { scrollTo("contact"); setMenuOpen(false); }}>Let's Talk →</button>
        </div>
      )}

      {/* ── HERO ── */}
      <section style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"100px 52px 60px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", width:700, height:700, left:-250, top:-200, background:`radial-gradient(circle, ${A}10 0%, transparent 60%)`, pointerEvents:"none" }} />
        <div style={{ position:"absolute", width:500, height:500, right:-100, bottom:-100, background:`radial-gradient(circle, ${A}08 0%, transparent 60%)`, pointerEvents:"none" }} />
        <div className="hero-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center", maxWidth:1260, margin:"0 auto", width:"100%" }}>
          <div>
            <div style={{ animation:"fadeUp .6s .1s both" }}>
              <span className="accent-badge"><span className="live-dot" />Open to New Projects</span>
            </div>
            <h1 style={{ fontWeight:800, fontSize:"clamp(34px,5.5vw,64px)", lineHeight:1.1, margin:"26px 0 0", animation:"fadeUp .7s .25s both" }}>
              Turning Raw Data Into<br /><span className="highlight">Decisions That Stick</span>
            </h1>
            <p style={{ color:T.muted, fontSize:16, lineHeight:1.85, maxWidth:480, margin:"22px 0 38px", animation:"fadeUp .6s .4s both" }}>
              I'm Mmesoma Victory Nwachukwu — data analyst, business strategist, and tech writer. I help businesses and government entities make sense of their numbers and act on them.
            </p>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap", animation:"fadeUp .6s .55s both" }}>
              <button className="btn-primary" onClick={() => scrollTo("projects")}>See My Work →</button>
              <button className="btn-ghost" onClick={() => scrollTo("contact")}>Start a Conversation</button>
            </div>
            <div style={{ display:"flex", gap:24, marginTop:40, animation:"fadeUp .6s .7s both" }}>
              {[["LinkedIn","https://www.linkedin.com/in/mmesoma-nwachukwu-95a254277"],["GitHub","https://github.com/Omaa-analyst"],["Medium","https://medium.com/@victorymmesoma003"]].map(([l,href]) => (
                <a key={l} href={href} target="_blank" rel="noreferrer" style={{ fontSize:13, fontWeight:600, color:T.muted, transition:"color .2s" }} onMouseEnter={e=>e.target.style.color=A} onMouseLeave={e=>e.target.style.color=T.muted}>{l}</a>
              ))}
            </div>
          </div>
          <div className="hero-right" style={{ animation:"fadeUp .8s .45s both" }}>
            <div style={{ background:dark ? T.card : "#fff", border:`1.5px solid ${T.border}`, borderRadius:18, padding:24, boxShadow:dark ? `0 24px 64px ${A}15` : "0 24px 64px rgba(37,99,235,.10)" }}>
              <div style={{ display:"flex", justifyContent:"flex-end", marginBottom:12 }}>
                <div style={{ background:T.surface, border:`1px solid ${T.border}`, borderRadius:10, padding:"10px 16px", display:"flex", alignItems:"center", gap:10 }}>
                  <span style={{ fontSize:20 }}>📈</span>
                  <div>
                    <div style={{ fontSize:10, color:T.muted }}>Revenue Lift</div>
                    <div style={{ fontSize:18, fontWeight:800, color:A }}>+42%</div>
                  </div>
                </div>
              </div>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18 }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{ width:34, height:34, borderRadius:8, background:T.accentDim, border:`1px solid ${T.accentBorder}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:17 }}>📊</div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:14, color:T.text }}>Live Analytics View</div>
                    <div style={{ fontSize:11, color:T.muted }}>Real-time data insights</div>
                  </div>
                </div>
                <span style={{ fontSize:11, color:"#22c55e", background:"#22c55e15", border:"1px solid #22c55e33", padding:"3px 10px", borderRadius:999, fontWeight:600 }}>● Active</span>
              </div>
              <div style={{ background:T.surface, borderRadius:10, padding:"14px 14px 0", marginBottom:16 }}>
                <BarChart accent={A} />
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                {[["🗃️","Data Points","2.4M"],["✅","Accuracy Rate","97.8%"]].map(([ic,label,val]) => (
                  <div key={label} style={{ background:T.surface, borderRadius:10, padding:14 }}>
                    <div style={{ display:"flex", gap:6, alignItems:"center", marginBottom:5 }}>
                      <span style={{ fontSize:13 }}>{ic}</span>
                      <span style={{ fontSize:11, color:T.muted }}>{label}</span>
                    </div>
                    <div style={{ fontSize:22, fontWeight:800, color:T.text }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background:T.surface, borderTop:`1px solid ${T.border}`, borderBottom:`1px solid ${T.border}`, padding:"48px 52px", transition:"background .4s" }}>
        <Reveal>
          <div className="stats-row" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:32, maxWidth:720, margin:"0 auto", textAlign:"center" }}>
            {[["3+","Years Delivering Insights"],["10+","Projects Completed"],["100%","Commitment to Impact"]].map(([n,l]) => (
              <div key={l}>
                <div className="stat-num">{n}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding:"96px 52px", transition:"background .4s" }}>
        <Reveal>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-label" style={{ marginBottom:12 }}>WHAT I DO</div>
            <h2 className="section-title">Skills Built for <span className="highlight">Real Results</span></h2>
            <p style={{ color:T.muted, fontSize:16, maxWidth:540, margin:"14px auto 0", lineHeight:1.8 }}>
              Not just tools and techniques — capabilities I've applied to actual business problems, across analytics, strategy, and communication.
            </p>
          </div>
        </Reveal>
        <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18, maxWidth:1260, margin:"0 auto" }}>
          {SKILLS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="skill-card" onMouseEnter={() => setHovSkill(i)} onMouseLeave={() => setHovSkill(null)}>
                <div className="skill-icon-box">{s.icon}</div>
                <h3 style={{ fontWeight:700, fontSize:16, marginBottom:10, color:T.text }}>{s.title}</h3>
                <p style={{ color:T.muted, fontSize:14, lineHeight:1.78 }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding:"96px 52px", background:T.surface, borderTop:`1px solid ${T.border}`, borderBottom:`1px solid ${T.border}`, transition:"background .4s" }}>
        <div className="about-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, maxWidth:1260, margin:"0 auto", alignItems:"start" }}>
          <Reveal delay={0.1}>
            <div>
              <div className="section-label" style={{ marginBottom:12 }}>ABOUT ME</div>
              <h2 className="section-title" style={{ marginBottom:22 }}>
                Clarity From Complexity —<br />That's My <span className="highlight">Standard</span>
              </h2>
              <p style={{ color:T.muted, fontSize:15, lineHeight:1.85, marginBottom:16 }}>
                I'm Mmesoma Victory Nwachukwu — a data analyst, business strategist, and tech writer who believes that the best analysis is the one that actually gets used.
              </p>
              <p style={{ color:T.muted, fontSize:15, lineHeight:1.85, marginBottom:16 }}>
                My work spans predictive modeling, operational analytics, and government revenue systems. I've also built an e-commerce business from scratch and write regularly on data, AI, and the habits that matter.
              </p>
              <p style={{ color:T.muted, fontSize:15, lineHeight:1.85, marginBottom:28 }}>
                Whether I'm designing a dashboard, writing a strategy brief, or explaining ML concepts to a non-technical audience — I care most about whether it works in the real world.
              </p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:32 }}>
                {[["Precision","I don't cut corners on rigor"],["Clarity","If it can't be explained simply, it isn't done"],["Ownership","I treat every project like it's mine"],["Depth","Surface-level answers don't interest me"]].map(([title,desc]) => (
                  <div key={title} style={{ display:"flex", gap:10 }}>
                    <div style={{ width:20, height:20, borderRadius:"50%", border:`2px solid ${A}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                      <div style={{ width:6, height:6, borderRadius:"50%", background:A }} />
                    </div>
                    <div>
                      <div style={{ fontWeight:700, fontSize:14, color:T.text, marginBottom:2 }}>{title}</div>
                      <div style={{ fontSize:13, color:T.muted, lineHeight:1.5 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-primary" onClick={() => scrollTo("contact")}>Work With Me →</button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <div style={{ fontSize:13, fontWeight:700, color:T.muted, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:20 }}>How I Work</div>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {PROCESS.map(p => (
                  <div key={p.num} className="process-row">
                    <div className="process-num">{p.num}</div>
                    <div>
                      <div style={{ fontWeight:700, fontSize:15, color:T.text, marginBottom:3 }}>{p.title}</div>
                      <div style={{ fontSize:13, color:T.muted }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:20, background:T.card, border:`1.5px solid ${T.accentBorder}`, borderRadius:12, padding:"18px 22px", display:"flex", alignItems:"center", gap:14 }}>
                <div style={{ width:10, height:10, borderRadius:"50%", background:"#22c55e", flexShrink:0, boxShadow:"0 0 8px #22c55e" }} />
                <div>
                  <div style={{ fontWeight:700, fontSize:14, color:T.text }}>Currently Available</div>
                  <div style={{ fontSize:13, color:T.muted }}>Open to freelance, consulting & full-time roles</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding:"96px 52px", transition:"background .4s" }}>
        <Reveal>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-label" style={{ marginBottom:12 }}>MY WORK</div>
            <h2 className="section-title">Projects That <span className="highlight">Delivered</span></h2>
            <p style={{ color:T.muted, fontSize:16, maxWidth:500, margin:"14px auto 0", lineHeight:1.8 }}>
              Analytical, strategic, and entrepreneurial work — built to solve real problems, not just demonstrate skills.
            </p>
          </div>
        </Reveal>
        <div className="projects-grid" style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18, maxWidth:1260, margin:"0 auto" }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="project-card" onMouseEnter={() => setHovProj(i)} onMouseLeave={() => setHovProj(null)}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:6 }}>
                  <div className="proj-num">{p.num}</div>
                  <span style={{ fontSize:11, color:A, background:T.accentDim, border:`1px solid ${T.accentBorder}`, padding:"3px 10px", borderRadius:999, fontWeight:600, marginTop:8 }}>{p.category}</span>
                </div>
                <h3 style={{ fontWeight:700, fontSize:18, color:T.text, lineHeight:1.3, marginBottom:10 }}>{p.title}</h3>
                <p style={{ fontSize:14, color:T.muted, lineHeight:1.78, marginBottom:16 }}>{p.desc}</p>
                <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:16 }}>
                  {p.tags.map(t => <span key={t} className="tag-chip">{t}</span>)}
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:8, opacity:hovProj===i?1:0, transform:hovProj===i?"translateX(0)":"translateX(-8px)", transition:"all .3s", color:A, fontSize:13, fontWeight:600 }}>
                  View Project <span>→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" style={{ padding:"96px 52px", background:T.surface, borderTop:`1px solid ${T.border}`, borderBottom:`1px solid ${T.border}`, transition:"background .4s" }}>
        <Reveal>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, maxWidth:1260, margin:"0 auto 48px", flexWrap:"wrap", gap:14 }}>
            <div>
              <div className="section-label" style={{ marginBottom:12 }}>WRITING</div>
              <h2 className="section-title">From the <span className="highlight">Blog</span></h2>
            </div>
            <a href="https://medium.com/@victorymmesoma003" target="_blank" rel="noreferrer">
              <button className="btn-ghost">All Articles on Medium →</button>
            </a>
          </div>
        </Reveal>
        <div style={{ maxWidth:1260, margin:"0 auto" }}>
          <div className="blog-top-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18, marginBottom:18 }}>
            {BLOGS.slice(0,3).map((b,i) => (
              <Reveal key={b.title} delay={i*0.09}>
                <a href={b.link} target="_blank" rel="noreferrer" style={{ display:"block", height:"100%", textDecoration:"none" }} onMouseEnter={()=>setHovBlog(i)} onMouseLeave={()=>setHovBlog(null)}>
                  <div className="blog-card" style={{ height:"100%", display:"flex", flexDirection:"column" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                      <span style={{ fontSize:11, fontWeight:700, color:A, background:T.accentDim, border:`1px solid ${T.accentBorder}`, padding:"4px 12px", borderRadius:999 }}>{b.tag}</span>
                      <span style={{ fontSize:12, color:T.dim }}>{b.date}</span>
                    </div>
                    <h3 style={{ fontWeight:700, fontSize:15, lineHeight:1.5, color:hovBlog===i?A:T.text, transition:"color .25s", marginBottom:10, flex:1 }}>{b.title}</h3>
                    <p style={{ fontSize:13, color:T.muted, lineHeight:1.75, marginBottom:16 }}>{b.excerpt}</p>
                    <div style={{ display:"flex", alignItems:"center", gap:6, color:A, fontSize:13, fontWeight:600, marginTop:"auto" }}>Read on Medium →</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="blog-bot-grid" style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:18 }}>
            {BLOGS.slice(3).map((b,i) => (
              <Reveal key={b.title} delay={i*0.09}>
                <a href={b.link} target="_blank" rel="noreferrer" style={{ display:"block", textDecoration:"none" }}>
                  <div className="blog-card" style={{ display:"flex", gap:18, alignItems:"flex-start" }}>
                    <div style={{ flex:1 }}>
                      <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:10 }}>
                        <span style={{ fontSize:11, fontWeight:700, color:A, background:T.accentDim, border:`1px solid ${T.accentBorder}`, padding:"3px 10px", borderRadius:999 }}>{b.tag}</span>
                        <span style={{ fontSize:12, color:T.dim }}>{b.date}</span>
                      </div>
                      <h3 style={{ fontWeight:700, fontSize:15, lineHeight:1.45, color:T.text, marginBottom:8 }}>{b.title}</h3>
                      <p style={{ fontSize:13, color:T.muted, lineHeight:1.7 }}>{b.excerpt}</p>
                    </div>
                    <span style={{ color:A, fontSize:18, flexShrink:0, marginTop:2 }}>→</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding:"96px 52px", transition:"background .4s" }}>
        <Reveal>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-label" style={{ marginBottom:12 }}>LET'S CONNECT</div>
            <h2 className="section-title">Got a Project? <span className="highlight">Let's Talk.</span></h2>
            <p style={{ color:T.muted, fontSize:16, maxWidth:460, margin:"14px auto 0", lineHeight:1.8 }}>
              Whether you need a data analyst, a strategic consultant, or just someone who gets it — I'd love to hear from you.
            </p>
          </div>
        </Reveal>
        <div className="contact-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1.2fr", gap:52, maxWidth:1060, margin:"0 auto" }}>
          <Reveal delay={0.1}>
            <div>
              <h3 style={{ fontWeight:700, fontSize:20, marginBottom:8, color:T.text }}>Reach Out Directly</h3>
              <p style={{ color:T.muted, fontSize:14, lineHeight:1.8, marginBottom:24 }}>Nigeria-based. Remote-friendly. Fast to respond.</p>
              {[
                ["✉️","Email","victorymmesoma003@gmail.com","mailto:victorymmesoma003@gmail.com"],
                ["📞","Phone","+234 704 899 9686","tel:+2347048999686"],
                ["💼","LinkedIn","mmesoma-nwachukwu","https://www.linkedin.com/in/mmesoma-nwachukwu-95a254277"],
                ["🐙","GitHub","Omaa-analyst","https://github.com/Omaa-analyst"],
                ["📝","Medium","@victorymmesoma003","https://medium.com/@victorymmesoma003"],
                ["📍","Location","Nigeria · Available Worldwide",null],
              ].map(([icon,label,val,href]) => (
                <div key={label} className="contact-row">
                  <div className="contact-icon">{icon}</div>
                  <div>
                    <div style={{ fontSize:10, color:T.dim, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:2 }}>{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith("http")?"_blank":undefined} rel="noreferrer" style={{ fontSize:13, color:T.muted, transition:"color .2s" }} onMouseEnter={e=>e.target.style.color=A} onMouseLeave={e=>e.target.style.color=T.muted}>{val}</a>
                    ) : <span style={{ fontSize:13, color:T.muted }}>{val}</span>}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            {sent ? (
              <div style={{ background:T.card, border:`1.5px solid ${T.accentBorder}`, borderRadius:16, padding:"52px 40px", textAlign:"center" }}>
                <div style={{ fontSize:48, marginBottom:16 }}>✅</div>
                <h3 style={{ fontWeight:800, fontSize:24, color:A, marginBottom:10 }}>Got it — thanks!</h3>
                <p style={{ color:T.muted, fontSize:15 }}>I'll get back to you within 24–48 hours.</p>
              </div>
            ) : (
              <div style={{ background:T.card, border:`1.5px solid ${T.border}`, borderRadius:16, padding:36, boxShadow:dark?"none":"0 4px 24px rgba(0,0,0,.06)" }}>
                <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                    <input className="form-input" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
                    <input className="form-input" placeholder="Email address" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
                  </div>
                  <input className="form-input" placeholder="Subject" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} />
                  <textarea className="form-input" placeholder="What are you working on? Tell me more..." rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{ resize:"none" }} />
                  <button className="btn-primary" style={{ width:"100%", justifyContent:"center", marginTop:4 }} onClick={()=>{ if(form.name&&form.email&&form.message) setSent(true); }}>
                    Send Message →
                  </button>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding:"60px 52px" }}>
        <Reveal>
          <div className="cta-band" style={{ maxWidth:960, margin:"0 auto" }}>
            <div style={{ width:56, height:56, borderRadius:14, background:T.accentDim, border:`1px solid ${T.accentBorder}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, margin:"0 auto 24px" }}>✦</div>
            <h2 style={{ fontWeight:800, fontSize:"clamp(24px,4vw,42px)", lineHeight:1.2, marginBottom:14, color:T.text }}>
              Ready to Make Your Data <span className="highlight">Work Harder?</span>
            </h2>
            <p style={{ color:T.muted, fontSize:16, maxWidth:480, margin:"0 auto 32px", lineHeight:1.8 }}>
              Let's talk about your data, your goals, and how I can help you get from questions to answers — fast.
            </p>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <button className="btn-primary" onClick={()=>scrollTo("contact")}>Book a Free Call →</button>
              <button className="btn-ghost" onClick={()=>scrollTo("projects")}>Browse Projects</button>
            </div>
            <p style={{ color:T.dim, fontSize:13, marginTop:20 }}>Remote-first · Nigeria-based · Available worldwide</p>
          </div>
        </Reveal>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background:dark?"#070c14":"#0f172a", padding:"64px 52px 32px", transition:"background .4s" }}>
        <div className="footer-grid" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48, maxWidth:1260, margin:"0 auto", paddingBottom:48, borderBottom:"1px solid #1e3050" }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
              <div style={{ width:32, height:32, borderRadius:7, background:`linear-gradient(135deg,${A},${A}99)`, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:14, color:"#fff" }}>M</div>
              <span style={{ fontWeight:800, fontSize:15, color:"#e8f0ff" }}>Mmesoma<span style={{ color:A }}>.</span></span>
            </div>
            <p style={{ color:"#8899bb", fontSize:13, lineHeight:1.85, maxWidth:270, marginBottom:20 }}>Data analyst, business strategist & tech writer. I help you make sense of your data — and act on it.</p>
            <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
              {[["✉️","victorymmesoma003@gmail.com","mailto:victorymmesoma003@gmail.com"],["📞","+234 704 899 9686","tel:+2347048999686"],["📍","Nigeria · Remote Worldwide",null]].map(([ic,val,href])=>(
                <div key={val} style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ fontSize:12 }}>{ic}</span>
                  {href ? <a href={href} target={href.startsWith("http")?"_blank":undefined} rel="noreferrer" className="footer-link" style={{ marginBottom:0 }}>{val}</a> : <span style={{ fontSize:13, color:"#8899bb" }}>{val}</span>}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize:14, fontWeight:700, color:"#e8f0ff", marginBottom:16 }}>Capabilities</div>
            {["Data Analytics","Predictive Modeling","Revenue Optimization","Business Strategy","Tech Writing"].map(l=><span key={l} className="footer-link">{l}</span>)}
          </div>
          <div>
            <div style={{ fontSize:14, fontWeight:700, color:"#e8f0ff", marginBottom:16 }}>Projects</div>
            {["LLM Preference Model","SROP Platform","Insurance Pricing","Subnational Dashboard","E-Commerce Venture"].map(l=><span key={l} className="footer-link">{l}</span>)}
          </div>
          <div>
            <div style={{ fontSize:14, fontWeight:700, color:"#e8f0ff", marginBottom:16 }}>Connect</div>
            {[["LinkedIn","https://www.linkedin.com/in/mmesoma-nwachukwu-95a254277"],["GitHub","https://github.com/Omaa-analyst"],["Medium","https://medium.com/@victorymmesoma003"],["Email Me","mailto:victorymmesoma003@gmail.com"]].map(([l,href])=>(
              <a key={l} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noreferrer" className="footer-link">{l}</a>
            ))}
            <div style={{ marginTop:18 }}>
              <div style={{ fontSize:12, color:"#8899bb", marginBottom:10, fontWeight:600 }}>Follow Me</div>
              <div style={{ display:"flex", gap:8 }}>
                {[["💼","https://www.linkedin.com/in/mmesoma-nwachukwu-95a254277"],["🐙","https://github.com/Omaa-analyst"],["📝","https://medium.com/@victorymmesoma003"]].map(([ic,href])=>(
                  <a key={href} href={href} target="_blank" rel="noreferrer"><div className="social-btn">{ic}</div></a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth:1260, margin:"0 auto", paddingTop:28, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
          <span style={{ fontSize:13, color:"#445577" }}>© 2025 Mmesoma Victory Nwachukwu. All rights reserved.</span>
          <div style={{ display:"flex", gap:24 }}>
            {["Privacy Policy","Terms of Service"].map(l=><span key={l} style={{ fontSize:13, color:"#445577", cursor:"pointer", transition:"color .2s" }} onMouseEnter={e=>e.target.style.color=A} onMouseLeave={e=>e.target.style.color="#445577"}>{l}</span>)}
          </div>
        </div>
      </footer>
    </div>
  );
}
