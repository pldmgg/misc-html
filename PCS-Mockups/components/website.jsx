// Website mocks: redesigned homepage, knowledge base, program detail page.
// Light refresh — keeps the existing site's warm/personal feel but with stronger
// type hierarchy, the new 3-CTA conversion structure, and the program library.

// ----- Shared site chrome -----
const SiteNav = ({ active = 'home' }) => {
  const items = ['Programs', 'Knowledge Base', 'About Jeremy', 'Reviews'];
  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '22px 56px', background: '#FFFBF3',
      borderBottom: '1px solid rgba(26,11,18,0.08)',
    }}>
      <PCSLogo size={18} />
      <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {items.map(i => (
          <a key={i} style={{
            fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 13,
            color: '#1A0B12', textDecoration: 'none', letterSpacing: '0.01em',
          }}>{i}</a>
        ))}
      </nav>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6B5A60' }}>(610) 724-5167</span>
        <a className="pcs-btn signal" style={{ padding: '10px 16px', fontSize: 11 }}>
          Book a Consult <Icon name="arrow" size={12} color="white" />
        </a>
      </div>
    </header>
  );
};

const SiteFooter = () => (
  <footer style={{ background: '#1A0B12', color: '#FFFBF3', padding: '48px 56px 28px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, marginBottom: 36 }}>
      <div>
        <PCSLogo size={20} light />
        <div style={{ marginTop: 18, fontSize: 13, color: '#C9B9BE', lineHeight: 1.6, maxWidth: 280 }}>
          Personal training, health coaching, and cardiac recovery serving Philadelphia and the Main Line. Est. 2003.
        </div>
      </div>
      {[
        { h: 'Programs', items: ['1-on-1 Personal Training', 'Open Heart Recovery', 'Strength After 60', 'Athletic Performance', 'Health Coaching'] },
        { h: 'Resources', items: ['Knowledge Base', 'Recovery Library', 'Newsletter', 'Free Assessment'] },
        { h: 'Contact', items: ['Bala Cynwyd, PA', '(610) 724-5167', 'jabrodovsky@gmail.com', 'Instagram · Facebook'] },
      ].map(col => (
        <div key={col.h}>
          <div className="pcs-eyebrow" style={{ color: '#F80038', marginBottom: 14 }}>{col.h}</div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
            {col.items.map(i => (
              <li key={i} style={{ fontSize: 13, color: '#C9B9BE' }}>{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.08)', fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B5A60', letterSpacing: '0.08em' }}>
      <span>© 2026 PRACTICAL COACHING SOLUTIONS, LLC</span>
      <span>BALA CYNWYD · PHILADELPHIA · MAIN LINE</span>
    </div>
  </footer>
);

// ============== HOMEPAGE ==============
const WebsiteHomepage = () => (
  <div className="pcs-frame" style={{ background: '#FFFBF3' }}>
    <SiteNav active="home" />

    {/* HERO — now with a sunshine wedge behind and big bright type */}
    <section style={{ position: 'relative', padding: '72px 56px 96px', display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 56, overflow: 'hidden' }}>
      {/* Decorative sun wedge */}
      <div style={{ position: 'absolute', top: -120, right: -80, width: 420, height: 420, borderRadius: '50%', background: '#FFC93C', opacity: 1, zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: -60, left: 360, width: 180, height: 180, borderRadius: '50%', background: '#0EA5E9', opacity: 0.18, zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Pill tone="signal">EST. 2003 · BALA CYNWYD, PA</Pill>
        <h1 className="pcs-h1" style={{ marginTop: 22, fontSize: 112, lineHeight: 0.9 }}>
          train the<br/>
          <span style={{ color: '#F80038' }}>practical</span><br/>
          way.
        </h1>
        <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.55, color: '#2C1F25', maxWidth: 520 }}>
          Twenty-plus years of personal training and health coaching for Philadelphia and the Main Line — from collegiate soccer to open-heart recovery. Structured programs, measurable results.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
          <a className="pcs-btn signal">Join a Training Program <Icon name="arrow" size={14} color="white" /></a>
          <a className="pcs-btn">Get Resources <Icon name="arrow" size={14} color="#FFFBF3" /></a>
          <a className="pcs-btn ghost">Book a Consultation <Icon name="arrow" size={14} color="#1A0B12" /></a>
        </div>
        <div style={{ marginTop: 40, display: 'flex', gap: 36 }}>
          <Stat value="20+" label="Years Coaching" />
          <Stat value="500+" label="Clients Trained" />
          <Stat value="14–90" label="Age Range" />
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Photo
          src="photos/hero-coaching.jpg"
          style={{ height: 540, width: '100%', borderRadius: 24 }}
          position="center"
        >
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(248,0,56,0.0) 30%, rgba(248,0,56,0.55) 100%)' }} />
          <div style={{ position: 'absolute', left: 20, top: 20, color: '#FFFBF3', zIndex: 2 }}>
            <Pill tone="signal" size="sm">working with</Pill>
            <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 28, marginTop: 10, letterSpacing: '-0.02em' }}>jeremy brodovsky</div>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, color: 'rgba(255,251,243,0.85)', marginTop: 4 }}>CPT · Certified Health Coach · USSF / USC Licensed</div>
          </div>
        </Photo>
        {/* Floating proof card */}
        <div style={{
          position: 'absolute', bottom: -24, left: -24,
          background: '#FFC93C', padding: '18px 20px',
          borderRadius: 16,
          boxShadow: '0 12px 24px rgba(26,11,18,0.15)',
          maxWidth: 260,
        }}>
          <Stars n={5} size={11} />
          <div style={{ marginTop: 6, fontSize: 12, color: '#2C1F25', lineHeight: 1.45 }}>
            "Jeremy gave me a plan I could actually follow after my surgery. Six months in I'm stronger than before."
          </div>
          <div style={{ marginTop: 6, fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: '#6B5A60', letterSpacing: '0.08em' }}>— D.K. · OPEN HEART RECOVERY · GOOGLE</div>
        </div>
      </div>
    </section>

    {/* Marquee strip — now in PCS red */}
    <div style={{
      background: '#F80038', color: '#FFFBF3', padding: '24px 56px',
      display: 'flex', alignItems: 'center', gap: 36, overflow: 'hidden',
      fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: '-0.005em', textTransform: 'lowercase',
    }}>
      {['personal training', '★', 'open heart recovery', '★', 'strength after 60', '★', 'athletic performance', '★', 'health coaching', '★', 'group training', '★'].map((t, i) => (
        <span key={i} style={{ color: t === '★' ? '#FFC93C' : '#FFFBF3' }}>{t}</span>
      ))}
    </div>

    {/* PROGRAM GRID — fully color-blocked */}
    <section style={{ padding: '88px 56px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
        <div>
          <div className="pcs-eyebrow muted">six programs · one method</div>
          <h2 className="pcs-h2" style={{ marginTop: 12 }}>pick the door. we'll build the plan.</h2>
        </div>
        <a style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14, color: '#F80038' }}>
          all programs <Icon name="arrow" size={14} color="#F80038" />
        </a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {[
          { icon: 'user',    name: '1-on-1 personal training', meta: '60 min · in-person or virtual', desc: 'Custom program built around your goals, schedule, and movement history.',           bg: '#FFC93C', fg: '#1A0B12', chip: '#1A0B12', chipFg: '#FFC93C' },
          { icon: 'cardiac', name: 'open heart recovery',      meta: '12-week structured program',     desc: 'From hospital discharge to resilient. Cleared by your cardiologist, built by Jeremy.', bg: '#F80038', fg: '#FFFBF3', chip: '#FFC93C', chipFg: '#1A0B12' },
          { icon: 'senior',  name: 'strength after 60',        meta: 'Small group · 2× weekly',          desc: 'Bone density, balance, and confidence. The work that keeps you independent.',         bg: '#0EA5E9', fg: '#FFFBF3', chip: '#FFFBF3', chipFg: '#0EA5E9' },
          { icon: 'flame',   name: 'athletic performance',     meta: 'Ages 14–24 · sport-specific',     desc: 'College-level conditioning for soccer, basketball, lacrosse, and field athletes.',     bg: '#1A0B12', fg: '#FFFBF3', chip: '#F80038', chipFg: '#FFFBF3' },
          { icon: 'heart',   name: 'health coaching',          meta: '90-day habits container',         desc: 'Sleep, nutrition, and stress — the half of fitness that happens outside the gym.',     bg: '#14B8A6', fg: '#FFFBF3', chip: '#FFFBF3', chipFg: '#14B8A6' },
          { icon: 'dumb',    name: 'group training',           meta: 'Up to 6 people',                  desc: 'A team workout for a team price. Same programming as 1-on-1, half the cost.',          bg: '#6B1748', fg: '#FFFBF3', chip: '#FFC93C', chipFg: '#1A0B12' },
        ].map((p, i) => (
          <div key={p.name} style={{ background: p.bg, color: p.fg, padding: 28, position: 'relative', borderRadius: 24, minHeight: 320, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{
                width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: p.chip, color: p.chipFg, borderRadius: '50%',
              }}>
                <Icon name={p.icon} size={22} color={p.chipFg} />
              </div>
              <span style={{
                fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13, opacity: 0.7,
              }}>0{i + 1} / 06</span>
            </div>
            <h3 className="pcs-h3" style={{ marginTop: 22, color: p.fg, fontSize: 24 }}>{p.name}</h3>
            <div style={{ marginTop: 6, fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 12, opacity: 0.8 }}>{p.meta}</div>
            <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.5, opacity: 0.95, flex: 1 }}>{p.desc}</p>
            <a style={{
              marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13,
              color: p.fg,
            }}>
              See program <Icon name="arrow" size={14} color={p.fg} />
            </a>
          </div>
        ))}
      </div>
    </section>

    {/* METHOD STRIP — now sun yellow */}
    <section style={{ background: '#FFC93C', padding: '88px 56px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'center' }}>
        <div>
          <div className="pcs-eyebrow" style={{ color: '#1A0B12' }}>the method</div>
          <h2 className="pcs-h2" style={{ marginTop: 12, fontSize: 64 }}>assess.<br/>program.<br/>progress.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {[
            { n: '01', h: 'assess', d: 'Movement screen, history, and goals. One 60-minute session — free if you commit to a program.' },
            { n: '02', h: 'program', d: 'A written plan. Phases, progressions, and the metrics we\'ll use to know it\'s working.' },
            { n: '03', h: 'progress', d: 'We retest every 6 weeks. The plan changes when your body does — not on a fixed schedule.' },
          ].map(s => (
            <div key={s.n} style={{ background: '#FFFBF3', borderRadius: 20, padding: 24 }}>
              <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 52, lineHeight: 1, color: '#F80038' }}>{s.n}</div>
              <h3 className="pcs-h3" style={{ marginTop: 12, fontSize: 26 }}>{s.h}</h3>
              <p style={{ marginTop: 8, fontSize: 14, lineHeight: 1.55, color: '#2C1F25' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROOF / TESTIMONIALS — color-blocked */}
    <section style={{ padding: '88px 56px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36 }}>
        <div>
          <div className="pcs-eyebrow muted">the receipts</div>
          <h2 className="pcs-h2" style={{ marginTop: 12, fontSize: 56 }}>500+ clients. <span style={{ color: '#F80038' }}>4.9 stars.</span></h2>
        </div>
        <div style={{ display: 'flex', gap: 32 }}>
          <Stat value="4.9" label="Google ★" />
          <Stat value="92%" label="6-mo retention" accent />
          <Stat value="20+" label="Yrs experience" color="#0EA5E9" />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {[
          { q: 'Worked with me through both knees and a torn rotator cuff. I\'m back on the court at 58. The man is methodical.', who: 'M. Rosen', tag: 'Personal Training · 3 yrs', bg: '#FFC93C', fg: '#1A0B12', star: '#F80038' },
          { q: 'I came in scared after my bypass. Jeremy met me where I was — slow, safe, and gradually harder. Cleared at six months.', who: 'D. Kowalski', tag: 'Open Heart Recovery', bg: '#F80038', fg: '#FFFBF3', star: '#FFC93C' },
          { q: 'My daughter went from JV bench to a D2 scholarship. Strength program plus the soccer specifics — that\'s the combo.', who: 'A. Patel', tag: 'Athletic Performance · Parent', bg: '#0EA5E9', fg: '#FFFBF3', star: '#FFC93C' },
        ].map((t, i) => (
          <div key={i} style={{ background: t.bg, color: t.fg, borderRadius: 24, padding: 30 }}>
            <Stars n={5} size={14} color={t.star} />
            <p style={{ marginTop: 18, fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 20, lineHeight: 1.35, letterSpacing: '-0.005em' }}>“{t.q}”</p>
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid ${i === 1 || i === 2 ? 'rgba(255,255,255,0.25)' : 'rgba(26,11,18,0.15)'}` }}>
              <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14 }}>{t.who}</div>
              <div style={{ marginTop: 2, fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 11, opacity: 0.85 }}>{t.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* RESOURCES CTA — red on red */}
    <section style={{ background: '#F80038', color: '#FFFBF3', padding: '88px 56px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <div className="pcs-eyebrow" style={{ color: '#FFC93C' }}>knowledge base · free</div>
          <h2 className="pcs-h2" style={{ marginTop: 12, color: '#FFFBF3', fontSize: 68 }}>
            not ready yet? <br/>
            <span style={{ color: '#FFC93C' }}>read instead.</span>
          </h2>
          <p style={{ marginTop: 18, fontSize: 16, color: '#FFFBF3', opacity: 0.9, lineHeight: 1.55, maxWidth: 460 }}>
            Forty-plus articles on recovery, training, and aging well — plus a small library of paid guides for the people who want the full method.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            <a className="pcs-btn sun">Browse Resources <Icon name="arrow" size={14} color="#1A0B12" /></a>
            <a className="pcs-btn ghost" style={{ borderColor: '#FFFBF3', color: '#FFFBF3' }}>Newsletter <Icon name="arrow" size={14} color="#FFFBF3" /></a>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { tag: 'Cardiac', t: 'The first 30 days after open-heart surgery', bg: '#FFC93C', fg: '#1A0B12' },
            { tag: 'Strength', t: 'Why your warm-up is the workout (after 60)', bg: '#FFFBF3', fg: '#1A0B12' },
            { tag: 'Performance', t: 'Lower-body strength = goals scored', bg: '#0EA5E9', fg: '#FFFBF3' },
            { tag: 'Habits', t: 'Sleep is a training variable', bg: '#1A0B12', fg: '#FFFBF3' },
          ].map((r, i) => (
            <div key={i} style={{ padding: 22, background: r.bg, color: r.fg, borderRadius: 18 }}>
              <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.8 }}>{r.tag}</div>
              <div style={{ marginTop: 14, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, lineHeight: 1.25 }}>{r.t}</div>
              <div style={{ marginTop: 16, fontSize: 12, opacity: 0.7, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Icon name="clock" size={12} color="currentColor" /> 5 min read
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
);

// ============== KNOWLEDGE BASE ==============
const WebsiteKnowledgeBase = () => {
  const cats = [
    { name: 'All', count: 47, active: true },
    { name: 'Cardiac Recovery', count: 11 },
    { name: 'Strength & Aging', count: 14 },
    { name: 'Athletic Performance', count: 9 },
    { name: 'Health Coaching', count: 8 },
    { name: 'Programming', count: 5 },
  ];
  const articles = [
    { tag: 'Cardiac',     photo: 'photos/cardiac-recovery.jpg',     t: 'The first 30 days after open-heart surgery', sub: 'A week-by-week protocol for the gentle re-entry.', meta: '12 min · Updated Mar 2026', featured: true },
    { tag: 'Strength',    photo: 'photos/strength-after-60.jpg',    t: 'Why your warm-up is the workout (after 60)', sub: 'Joint prep, balance, and the case for slower starts.', meta: '6 min' },
    { tag: 'Performance', photo: 'photos/athletic-performance.jpg', t: 'Lower-body strength is goals scored', sub: 'The four lifts every field athlete should be doing.', meta: '7 min' },
    { tag: 'Habits',      photo: 'photos/kb-sleep.jpg',             t: 'Sleep is a training variable', sub: 'How under-recovery wrecks programs that look perfect on paper.', meta: '5 min' },
    { tag: 'Cardiac',     photo: 'photos/kb-cardio.jpg',            t: 'Heart rate zones for recovery patients', sub: 'When "elevated" is good and when it\'s a warning.', meta: '9 min' },
    { tag: 'Strength',    photo: 'photos/kb-warmup.jpg',            t: 'Bone density: the case for loaded carries', sub: 'One simple drill that beats most balance work.', meta: '4 min' },
    { tag: 'Programming', photo: 'photos/one-on-one.jpg',           t: 'How I build a 12-week block', sub: 'Phases, autoregulation, and why retesting matters.', meta: '14 min', paid: true },
    { tag: 'Habits',      photo: 'photos/health-coaching.jpg',      t: 'A protein target that actually fits dinner', sub: 'Plate math for people who don\'t want to weigh food.', meta: '5 min' },
  ];

  return (
    <div className="pcs-frame" style={{ background: '#FFFBF3' }}>
      <SiteNav active="kb" />

      {/* KB header */}
      <section style={{ padding: '64px 56px 32px', borderBottom: '1px solid rgba(26,11,18,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div className="pcs-eyebrow muted">Knowledge Base</div>
            <h1 className="pcs-h1" style={{ marginTop: 16, fontSize: 84 }}>The method,<br/>open-source.</h1>
            <p style={{ marginTop: 18, maxWidth: 520, fontSize: 16, color: '#2C1F25', lineHeight: 1.55 }}>
              Forty-plus articles and a small paid library. Search by program, age, or goal. Everything Jeremy teaches in person — written down.
            </p>
          </div>
          {/* Search */}
          <div style={{ width: 360 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '14px 16px', background: '#FFFBF3',
              border: '1.5px solid #1A0B12',
            }}>
              <Icon name="search" size={16} color="#1A0B12" />
              <input placeholder="Search 47 articles…" style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: "'Manrope', sans-serif", fontSize: 14 }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B5A60', padding: '2px 6px', background: '#FFEED1' }}>⌘K</span>
            </div>
            <div style={{ marginTop: 12, padding: '14px 16px', background: '#1A0B12', color: '#FFFBF3', display: 'flex', alignItems: 'center', gap: 12 }}>
              <Icon name="mail" size={16} color="#F80038" />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13 }}>Weekly drop</div>
                <div style={{ fontSize: 11, color: '#C9B9BE' }}>One article, every Sunday.</div>
              </div>
              <a className="pcs-btn signal" style={{ padding: '8px 12px', fontSize: 10 }}>Subscribe</a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories — colorful pills */}
      <section style={{ padding: '24px 56px', borderBottom: '1px solid rgba(26,11,18,0.08)' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {cats.map((c, i) => {
            const colors = [
              { bg: '#1A0B12', fg: '#FFFBF3', accent: '#FFC93C' },
              { bg: '#F80038', fg: '#FFFBF3', accent: '#FFC93C' },
              { bg: '#FFC93C', fg: '#1A0B12', accent: '#F80038' },
              { bg: '#0EA5E9', fg: '#FFFBF3', accent: '#FFC93C' },
              { bg: '#14B8A6', fg: '#FFFBF3', accent: '#FFC93C' },
              { bg: '#6B1748', fg: '#FFFBF3', accent: '#FFC93C' },
            ];
            const co = colors[i] || colors[0];
            return (
              <button key={c.name} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 16px', borderRadius: 999,
                border: 'none',
                background: c.active ? co.bg : '#FFFBF3',
                color: c.active ? co.fg : '#1A0B12',
                boxShadow: c.active ? 'none' : 'inset 0 0 0 1.5px rgba(26,11,18,0.18)',
                fontFamily: "'Quicksand', sans-serif", fontSize: 13, fontWeight: 700,
                cursor: 'pointer',
              }}>
                {c.name}
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                  color: c.active ? co.accent : '#6B5A60',
                }}>{c.count}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured article */}
      <section style={{ padding: '40px 56px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'stretch' }}>
          <Photo src="photos/cardiac-recovery.jpg" style={{ minHeight: 360, borderRadius: 20 }} position="center">
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(31,58,46,0.85) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 32, zIndex: 2 }}>
              <Pill tone="signal">Featured · Most read this month</Pill>
              <div style={{ color: '#FFFBF3' }}>
                <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 11, color: '#FFC93C', letterSpacing: '0.08em', textTransform: 'uppercase' }}>cardiac recovery · 12 min read</div>
                <h2 className="pcs-h2" style={{ color: '#FFFBF3', marginTop: 12, fontSize: 48 }}>the first 30 days after open-heart surgery.</h2>
                <p style={{ marginTop: 14, color: 'rgba(255,251,243,0.85)', fontSize: 14, lineHeight: 1.55, maxWidth: 460 }}>
                  A week-by-week protocol for the gentle re-entry. Built around what your sternum can handle, not what you'd like it to.
                </p>
                <a style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 22, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13, color: '#FFC93C' }}>
                  Read the protocol <Icon name="arrow" size={14} color="#FFC93C" />
                </a>
              </div>
            </div>
          </Photo>
          <div style={{ display: 'grid', gap: 12 }}>
            <div className="pcs-eyebrow muted">editor's picks</div>
            {articles.slice(0, 3).map((a, i) => (
              <div key={i} style={{ padding: '14px 0', borderTop: i === 0 ? '2px solid #1A0B12' : '1px solid rgba(26,11,18,0.12)' }}>
                <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 11, color: '#F80038', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{a.tag}</div>
                <div style={{ marginTop: 6, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 17, lineHeight: 1.3 }}>{a.t}</div>
                <div style={{ marginTop: 6, fontSize: 12, color: '#6B5A60' }}>{a.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section style={{ padding: '24px 56px 88px' }}>
        <div className="pcs-eyebrow muted" style={{ marginBottom: 24 }}>all articles · sorted by recent</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {articles.map((a, i) => {
            const tagColors = {
              'Cardiac':     { bg: '#F80038', fg: '#FFFBF3' },
              'Strength':    { bg: '#FFC93C', fg: '#1A0B12' },
              'Performance': { bg: '#0EA5E9', fg: '#FFFBF3' },
              'Habits':      { bg: '#14B8A6', fg: '#FFFBF3' },
              'Programming': { bg: '#1A0B12', fg: '#FFFBF3' },
            };
            const tc = tagColors[a.tag] || tagColors.Cardiac;
            return (
              <div key={i} style={{ background: '#FFFBF3', borderRadius: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 0 rgba(26,11,18,0.06)' }}>
                <Photo src={a.photo} style={{ height: 160 }} position="center">
                  {a.paid && (
                    <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}>
                      <Pill tone="sun" size="sm">$ Premium</Pill>
                    </div>
                  )}
                  <div style={{ position: 'absolute', left: 14, bottom: 12, zIndex: 2 }}>
                    <span style={{ display: 'inline-block', padding: '5px 10px', borderRadius: 999, background: tc.bg, color: tc.fg, fontFamily: "'Quicksand', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{a.tag}</span>
                  </div>
                </Photo>
                <div style={{ padding: 18 }}>
                  <h3 style={{ margin: 0, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.3 }}>{a.t}</h3>
                  <p style={{ marginTop: 8, fontSize: 12.5, color: '#6B5A60', lineHeight: 1.5 }}>{a.sub}</p>
                  <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B5A60' }}>{a.meta}</div>
                    <Icon name="arrow" size={14} color="#F80038" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

// ============== PROGRAM DETAIL: Open Heart Recovery ==============
const WebsiteProgramDetail = () => (
  <div className="pcs-frame" style={{ background: '#FFFBF3' }}>
    <SiteNav active="programs" />

    {/* Breadcrumb */}
    <div style={{ padding: '20px 56px', borderBottom: '1px solid rgba(26,11,18,0.08)', display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6B5A60', letterSpacing: '0.06em' }}>
      <span>PROGRAMS</span>
      <Icon name="chev" size={10} color="#6B5A60" />
      <span style={{ color: '#1A0B12' }}>OPEN HEART RECOVERY</span>
    </div>

    {/* Hero — program detail */}
    <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', borderBottom: '1px solid rgba(26,11,18,0.08)' }}>
      <div style={{ padding: '56px 56px 56px', borderRight: '1px solid rgba(26,11,18,0.08)' }}>
        <Pill tone="moss">02 · Cardiac · 12-week structured</Pill>
        <h1 className="pcs-h1" style={{ marginTop: 22, fontSize: 88 }}>Open Heart Recovery.</h1>
        <p style={{ marginTop: 24, fontSize: 18, color: '#2C1F25', lineHeight: 1.5, maxWidth: 540 }}>
          A 12-week, cardiologist-cleared program for patients leaving cardiac rehab. Built to bridge the gap between "stable" and "strong." We work on what hospitals don't have time for.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 40, paddingTop: 28, borderTop: '2px solid #1A0B12' }}>
          <Stat value="12" label="Week program" />
          <Stat value="2×" label="Sessions / wk" accent />
          <Stat value="1:1" label="In-person" />
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
          <a className="pcs-btn signal">Join This Program <Icon name="arrow" size={14} color="white" /></a>
          <a className="pcs-btn ghost">Book a Consultation <Icon name="arrow" size={14} color="#1A0B12" /></a>
        </div>
        <div style={{ marginTop: 18, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6B5A60', letterSpacing: '0.06em' }}>
          REQUIRES CARDIOLOGIST CLEARANCE · INTAKE CALL FIRST · INSURANCE NOT ACCEPTED
        </div>
      </div>
      <Photo src="photos/cardiac-recovery.jpg" style={{ minHeight: 540 }} position="center">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(31,58,46,0.1) 0%, rgba(31,58,46,0.7) 100%)' }} />
      </Photo>
    </section>

    {/* The 12 weeks */}
    <section style={{ padding: '88px 56px' }}>
      <div className="pcs-eyebrow muted">The 12 weeks</div>
      <h2 className="pcs-h2" style={{ marginTop: 12, marginBottom: 36 }}>Three phases. Twelve weeks. One way out.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {[
          { phase: 'Phase 1', weeks: 'Weeks 1–4', name: 'Re-entry', d: 'Breathing, posture, walking volume, and the basics of sternal precautions. Heart rate stays in zone 1.', focus: ['Diaphragmatic breathing', 'Posture & shoulder mobility', 'Walking program (build to 30 min)', 'Daily resting HR tracking'] },
          { phase: 'Phase 2', weeks: 'Weeks 5–8', name: 'Rebuild', d: 'Bodyweight strength, low-load resistance, and steady-state cardio. We earn the right to load.', focus: ['Bodyweight strength (5 patterns)', 'Light resistance bands', 'Zone 2 cardio (30–40 min)', 'First retest at week 6'] },
          { phase: 'Phase 3', weeks: 'Weeks 9–12', name: 'Resilient', d: 'Loaded strength, interval work, and the rest of your life. By week 12 you have a plan that runs without me.', focus: ['Loaded compound lifts', 'Short interval conditioning', 'Independent programming', 'Discharge plan + retest'] },
        ].map((p, i) => (
          <div key={p.phase} style={{ background: i === 2 ? '#1F3A2E' : '#FFFBF3', color: i === 2 ? '#FFFBF3' : '#1A0B12', border: '1px solid rgba(26,11,18,0.12)', padding: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="pcs-eyebrow" style={{ color: i === 2 ? '#F80038' : '#F80038' }}>{p.phase}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: i === 2 ? '#C9B9BE' : '#6B5A60' }}>{p.weeks}</div>
            </div>
            <h3 style={{ marginTop: 14, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 36, letterSpacing: '-0.02em' }}>{p.name}</h3>
            <p style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.55, color: i === 2 ? '#C9B9BE' : '#2C1F25', minHeight: 80 }}>{p.d}</p>
            <ul style={{ marginTop: 18, padding: 0, listStyle: 'none', display: 'grid', gap: 8, borderTop: `1px solid ${i === 2 ? 'rgba(255,255,255,0.15)' : 'rgba(26,11,18,0.12)'}`, paddingTop: 18 }}>
              {p.focus.map(f => (
                <li key={f} style={{ display: 'flex', gap: 8, fontSize: 12.5, lineHeight: 1.4 }}>
                  <Icon name="check" size={12} color="#F80038" /> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* What's included + price */}
    <section style={{ padding: '0 56px 88px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'stretch' }}>
        <div style={{ background: '#FFEED1', padding: 36 }}>
          <div className="pcs-eyebrow muted">What's included</div>
          <h3 className="pcs-h3" style={{ marginTop: 10, fontSize: 28 }}>Everything you need, nothing you don't.</h3>
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              '24 in-person sessions',
              'Written program (PDF + app)',
              'Weekly check-ins by text',
              'Heart rate tracking review',
              'Two formal retests',
              'Discharge plan for life after',
              'Direct coordination w/ cardiologist',
              'Access to the cardiac knowledge base',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5, lineHeight: 1.4 }}>
                <Icon name="check" size={14} color="#F80038" /> {item}
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: '#1A0B12', color: '#FFFBF3', padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="pcs-eyebrow">Investment</div>
            <div style={{ marginTop: 16, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 72, lineHeight: 0.95, letterSpacing: '-0.03em' }}>
              $2,400<span style={{ fontSize: 22, color: '#C9B9BE', fontWeight: 600 }}>/12-wk</span>
            </div>
            <div style={{ marginTop: 8, fontSize: 13, color: '#C9B9BE' }}>$100/session · paid monthly or up-front (5% off)</div>
            <ul style={{ marginTop: 22, padding: 0, listStyle: 'none', display: 'grid', gap: 8, fontSize: 13 }}>
              {['HSA/FSA eligible', 'No insurance accepted', '30-day money-back if uncleared'].map(x => (
                <li key={x} style={{ display: 'flex', gap: 8 }}><Icon name="check" size={12} color="#F80038" /> {x}</li>
              ))}
            </ul>
          </div>
          <a className="pcs-btn signal" style={{ marginTop: 28, width: '100%', justifyContent: 'center' }}>
            Start Intake <Icon name="arrow" size={14} color="white" />
          </a>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
);

Object.assign(window, { WebsiteHomepage, WebsiteKnowledgeBase, WebsiteProgramDetail });
