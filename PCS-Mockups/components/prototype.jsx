// Clickable mini-prototype — simulates the post-project conversion flow
// inside a browser-window frame. User starts on Google search, lands on
// the action page, picks a door, and either joins a program, reads the
// knowledge base, or books a consult. URL bar updates and back-history works.

const { useState, useEffect, useMemo } = React;

const FLOW = {
  google:  { url: 'google.com/search?q=personal+trainer+bala+cynwyd', title: 'Google · personal trainer bala cynwyd' },
  action:  { url: 'practicalcoachingsolutions.com/start',              title: 'PCS · Start here' },
  home:    { url: 'practicalcoachingsolutions.com',                    title: 'PCS · Home' },
  programs:{ url: 'practicalcoachingsolutions.com/programs',           title: 'PCS · Programs' },
  cardiac: { url: 'practicalcoachingsolutions.com/programs/open-heart-recovery', title: 'PCS · Open Heart Recovery' },
  kb:      { url: 'practicalcoachingsolutions.com/resources',          title: 'PCS · Knowledge Base' },
  article: { url: 'practicalcoachingsolutions.com/resources/first-30-days', title: 'PCS · First 30 days' },
  book:    { url: 'practicalcoachingsolutions.com/book',               title: 'PCS · Book a Consult' },
  done:    { url: 'practicalcoachingsolutions.com/book/confirmed',     title: 'PCS · You\'re booked' },
};

const ProtoBrowser = ({ children, route, onBack, canBack, onNav }) => {
  const r = FLOW[route];
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#E9E5DC',
      display: 'flex', flexDirection: 'column',
      border: '1px solid rgba(26,11,18,0.12)',
      fontFamily: "'Manrope', sans-serif",
    }}>
      {/* Window chrome */}
      <div style={{ background: '#D9D4C7', borderBottom: '1px solid rgba(26,11,18,0.12)', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
            <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 4, marginLeft: 12 }}>
          <button onClick={onBack} disabled={!canBack} style={{
            width: 28, height: 28, border: 'none', borderRadius: 6,
            background: canBack ? 'rgba(26,11,18,0.08)' : 'transparent',
            color: canBack ? '#1A0B12' : 'rgba(26,11,18,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: canBack ? 'pointer' : 'default',
          }}>
            <Icon name="chev" size={14} color="currentColor" />
          </button>
        </div>
        <div style={{
          flex: 1, marginLeft: 8, padding: '6px 14px',
          background: '#FFFBF3', borderRadius: 6,
          display: 'flex', alignItems: 'center', gap: 10,
          fontSize: 12, color: '#1A0B12',
        }}>
          <Icon name="globe" size={12} color="#6B5A60" />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>{r.url}</span>
          {route !== 'google' && <span style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#F80038', background: 'rgba(248,0,56,0.1)', padding: '2px 6px' }}>UTM tracked</span>}
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, overflow: 'auto', background: '#FFFBF3' }}>
        {children}
      </div>
    </div>
  );
};

// ----- Mini screens (compact versions designed for the prototype frame) -----

const ProtoGoogle = ({ onNav }) => (
  <div style={{ background: 'white', padding: '20px 40px', fontFamily: 'Roboto, Arial, sans-serif', minHeight: '100%' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, paddingBottom: 14, borderBottom: '1px solid #EBEBEB' }}>
      <div style={{ fontFamily: 'Arial', fontSize: 22, fontWeight: 500 }}>
        <span style={{ color: '#4285F4' }}>G</span><span style={{ color: '#EA4335' }}>o</span><span style={{ color: '#FBBC04' }}>o</span><span style={{ color: '#4285F4' }}>g</span><span style={{ color: '#34A853' }}>l</span><span style={{ color: '#EA4335' }}>e</span>
      </div>
      <div style={{ flex: 1, maxWidth: 580, display: 'flex', alignItems: 'center', padding: '10px 16px', border: '1px solid #DFE1E5', borderRadius: 24, gap: 12 }}>
        <Icon name="search" size={14} color="#9AA0A6" />
        <span style={{ fontSize: 14 }}>personal trainer bala cynwyd</span>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 28, padding: '14px 0', fontSize: 13, color: '#5F6368', borderBottom: '1px solid #EBEBEB' }}>
      <div style={{ borderBottom: '3px solid #1A73E8', color: '#1A73E8', paddingBottom: 14, marginBottom: -14 }}>All</div>
      <div>Maps</div><div>Images</div><div>News</div><div>Videos</div>
    </div>

    <div style={{ marginTop: 18, fontSize: 12, color: '#70757A' }}>About 47,200 results</div>

    <div onClick={() => onNav('action')} style={{ marginTop: 16, padding: 16, border: '1px solid #1A73E8', borderRadius: 8, background: '#F6FAFF', cursor: 'pointer', position: 'relative' }}>
      <div style={{ position: 'absolute', top: -10, left: 14, background: '#1A73E8', color: 'white', padding: '2px 8px', fontSize: 10, fontWeight: 500, borderRadius: 3 }}>SPONSORED + ORGANIC #1</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
        <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#1A0B12', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 11 }}>JB</div>
        <div>
          <div style={{ fontSize: 13, color: '#202124' }}>practicalcoachingsolutions.com</div>
          <div style={{ fontSize: 12, color: '#5F6368' }}>› start</div>
        </div>
      </div>
      <div style={{ marginTop: 6, fontSize: 20, color: '#1A0DAB', fontWeight: 400, letterSpacing: '-0.005em' }}>
        Practical Coaching Solutions · Personal Training, Cardiac Recovery, Health Coaching
      </div>
      <div style={{ marginTop: 4, fontSize: 14, color: '#4D5156', lineHeight: 1.45 }}>
        Bala Cynwyd & Main Line, PA · 20+ years experience. <strong>Three doors:</strong> join a training program, get free resources, or book a free 20-min consult. <strong>4.9 ★ · 87 reviews.</strong>
      </div>
      <div style={{ marginTop: 10, display: 'flex', gap: 18, fontSize: 13 }}>
        <span style={{ color: '#1A73E8' }}>Programs</span><span style={{ color: '#1A73E8' }}>Open Heart Recovery</span><span style={{ color: '#1A73E8' }}>Knowledge Base</span><span style={{ color: '#1A73E8' }}>Book a Consult</span>
      </div>
    </div>

    <div style={{ marginTop: 14, fontSize: 11, color: '#5F6368', display: 'flex', alignItems: 'center', gap: 6 }}>
      <Icon name="target" size={12} color="#F80038" /> Click the top result to land on the new Action Page →
    </div>

    {/* Map / business panel teaser */}
    <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 320px', gap: 18 }}>
      <div>
        <div style={{ padding: '12px 0', borderTop: '1px solid #EBEBEB' }}>
          <div style={{ fontSize: 13, color: '#202124' }}>practicalcoachingsolutions.com</div>
          <div style={{ fontSize: 20, color: '#1A0DAB', marginTop: 4 }}>Open Heart Recovery — 12-Week Program</div>
          <div style={{ fontSize: 14, color: '#4D5156', marginTop: 4 }}>Cardiologist-cleared cardiac recovery training in Bala Cynwyd, PA. From hospital discharge to resilient in 12 weeks.</div>
        </div>
      </div>

      <div onClick={() => onNav('action')} style={{ padding: 14, border: '1px solid #DADCE0', borderRadius: 8, cursor: 'pointer' }}>
        <div style={{ fontSize: 14, fontWeight: 500 }}>Practical Coaching Solutions</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, fontSize: 12, color: '#5F6368' }}>
          <span>4.9</span><Stars n={5} size={10} color="#FBBC04" /><span>(87)</span>
          <span>· Personal trainer</span>
        </div>
        <div style={{ marginTop: 6, fontSize: 12, color: '#5F6368' }}>0.2 mi · Open · Closes 8 PM</div>
        <div style={{ marginTop: 10, padding: '8px 10px', background: '#1A73E8', color: 'white', fontSize: 12, fontWeight: 500, textAlign: 'center', borderRadius: 4 }}>Visit website →</div>
      </div>
    </div>
  </div>
);

const ProtoAction = ({ onNav }) => (
  <div style={{ minHeight: '100%' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 40px', borderBottom: '1px solid rgba(26,11,18,0.08)' }}>
      <PCSLogo size={14} />
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B5A60', letterSpacing: '0.06em' }}>(610) 724-5167</span>
    </header>
    <section style={{ padding: '48px 40px 24px', textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
      <Pill tone="signal">Start here</Pill>
      <h1 style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 72, lineHeight: 0.92, letterSpacing: '-0.03em', marginTop: 18 }}>
        What brought<br/>you here today?
      </h1>
      <p style={{ marginTop: 18, fontSize: 15, color: '#2C1F25', lineHeight: 1.5, maxWidth: 540, margin: '18px auto 0' }}>
        Three doors. Pick the one that fits. Each takes you somewhere useful in under two minutes.
      </p>
    </section>

    <section style={{ padding: '20px 40px 56px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {[
          { num: '01', tag: 'I know what I want', head: 'Join a Training Program', sub: 'Browse 6 programs. Pick yours. Schedule intake.', tone: 'signal', go: 'cardiac' },
          { num: '02', tag: "I'm researching", head: 'Get Resources', sub: '47 free articles + the weekly drop.', tone: 'ink', go: 'kb' },
          { num: '03', tag: 'I want to talk', head: 'Book a Consultation', sub: '20-min call. Free. Same week availability.', tone: 'ghost', go: 'book' },
        ].map(d => (
          <div
            key={d.num}
            onClick={() => onNav(d.go)}
            style={{
              background: d.tone === 'signal' ? '#F80038' : d.tone === 'ink' ? '#1A0B12' : '#FFFBF3',
              color: d.tone === 'ghost' ? '#1A0B12' : '#FFFBF3',
              border: d.tone === 'ghost' ? '1.5px solid #1A0B12' : 'none',
              padding: 28, cursor: 'pointer', minHeight: 320,
              display: 'flex', flexDirection: 'column',
              transition: 'transform 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 64, lineHeight: 0.85, letterSpacing: '-0.04em', opacity: 0.35 }}>{d.num}</div>
              <Pill tone={d.tone === 'ghost' ? 'ink' : 'bone'} size="sm">{d.tag}</Pill>
            </div>
            <h2 style={{ marginTop: 24, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 30, letterSpacing: '-0.02em' }}>{d.head}</h2>
            <p style={{ marginTop: 10, fontSize: 13, lineHeight: 1.5, opacity: 0.85, flex: 1 }}>{d.sub}</p>
            <div style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: d.tone === 'ghost' ? '#F80038' : '#FFFBF3' }}>
              Open this door <Icon name="arrow" size={12} color={d.tone === 'ghost' ? '#F80038' : '#FFFBF3'} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 18, textAlign: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B5A60', letterSpacing: '0.06em' }}>
        ↑ CLICK ANY DOOR TO SEE WHERE IT GOES
      </div>
    </section>
  </div>
);

const ProtoCardiac = ({ onNav }) => (
  <div style={{ minHeight: '100%' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 40px', borderBottom: '1px solid rgba(26,11,18,0.08)' }}>
      <PCSLogo size={14} />
      <div style={{ display: 'flex', gap: 18, fontSize: 12, fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}>
        <span style={{ cursor: 'pointer' }} onClick={() => onNav('home')}>Programs</span>
        <span style={{ cursor: 'pointer' }} onClick={() => onNav('kb')}>Knowledge Base</span>
        <span>About</span>
      </div>
    </header>
    <div style={{ padding: '14px 40px', fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B5A60', letterSpacing: '0.06em', borderBottom: '1px solid rgba(26,11,18,0.08)' }}>
      PROGRAMS › <span style={{ color: '#1A0B12' }}>OPEN HEART RECOVERY</span>
    </div>

    <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', borderBottom: '1px solid rgba(26,11,18,0.08)' }}>
      <div style={{ padding: '40px 40px', borderRight: '1px solid rgba(26,11,18,0.08)' }}>
        <Pill tone="moss" size="sm">02 · CARDIAC · 12-WEEK</Pill>
        <h1 style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 64, lineHeight: 0.92, letterSpacing: '-0.03em', marginTop: 16 }}>Open Heart Recovery.</h1>
        <p style={{ marginTop: 18, fontSize: 15, color: '#2C1F25', lineHeight: 1.5, maxWidth: 480 }}>
          A 12-week, cardiologist-cleared program for patients leaving cardiac rehab. From "stable" to "strong."
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 28, paddingTop: 20, borderTop: '2px solid #1A0B12' }}>
          <div><div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 0.9 }}>12</div><div style={{ fontSize: 10, color: '#6B5A60', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>Week program</div></div>
          <div><div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 0.9, color: '#F80038' }}>2×</div><div style={{ fontSize: 10, color: '#6B5A60', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>Sessions/wk</div></div>
          <div><div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 0.9 }}>1:1</div><div style={{ fontSize: 10, color: '#6B5A60', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>In-person</div></div>
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
          <a onClick={() => onNav('book')} className="pcs-btn signal" style={{ cursor: 'pointer', padding: '12px 18px', fontSize: 12 }}>Start Intake <Icon name="arrow" size={12} color="white" /></a>
          <a onClick={() => onNav('book')} className="pcs-btn ghost" style={{ cursor: 'pointer', padding: '12px 18px', fontSize: 12 }}>Book a Consult <Icon name="arrow" size={12} color="#1A0B12" /></a>
        </div>
      </div>
      <Photo src="photos/cardiac-recovery.jpg" style={{ minHeight: 400 }} position="center">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(31,58,46,0.1) 0%, rgba(31,58,46,0.7) 100%)' }} />
      </Photo>
    </section>

    <section style={{ padding: '40px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {[
          { phase: 'Phase 1', weeks: 'Wks 1–4', name: 'Re-entry' },
          { phase: 'Phase 2', weeks: 'Wks 5–8', name: 'Rebuild' },
          { phase: 'Phase 3', weeks: 'Wks 9–12', name: 'Resilient' },
        ].map((p, i) => (
          <div key={p.phase} style={{ background: i === 2 ? '#1F3A2E' : '#FFFBF3', color: i === 2 ? '#FFFBF3' : '#1A0B12', border: '1px solid rgba(26,11,18,0.12)', padding: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="pcs-eyebrow">{p.phase}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: i === 2 ? '#C9B9BE' : '#6B5A60' }}>{p.weeks}</div>
            </div>
            <h3 style={{ marginTop: 10, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 26, letterSpacing: '-0.02em' }}>{p.name}</h3>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const ProtoKB = ({ onNav }) => (
  <div style={{ minHeight: '100%' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 40px', borderBottom: '1px solid rgba(26,11,18,0.08)' }}>
      <PCSLogo size={14} />
      <a onClick={() => onNav('action')} style={{ cursor: 'pointer', fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 12, color: '#F80038' }}>← Back to start</a>
    </header>

    <section style={{ padding: '40px 40px 24px', borderBottom: '1px solid rgba(26,11,18,0.08)' }}>
      <div className="pcs-eyebrow muted">Knowledge Base</div>
      <h1 style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 60, lineHeight: 0.92, letterSpacing: '-0.03em', marginTop: 14 }}>The method,<br/>open-source.</h1>
      <p style={{ marginTop: 14, maxWidth: 480, fontSize: 14, color: '#2C1F25', lineHeight: 1.55 }}>
        47 articles. Search by program or just scroll.
      </p>
    </section>

    <section style={{ padding: '20px 40px', display: 'flex', gap: 6, flexWrap: 'wrap', borderBottom: '1px solid rgba(26,11,18,0.08)' }}>
      {['All', 'Cardiac', 'Strength & Aging', 'Performance', 'Habits'].map((c, i) => (
        <Pill key={c} tone={i === 0 ? 'ink' : 'soft'} size="sm">{c}</Pill>
      ))}
    </section>

    <section style={{ padding: '24px 40px 48px' }}>
      <div onClick={() => onNav('article')} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18, marginBottom: 20, cursor: 'pointer' }}>
        <Photo src="photos/cardiac-recovery.jpg" style={{ height: 200, borderRadius: 12 }} position="center">
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(31,58,46,0.8) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, padding: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: 2 }}>
            <Pill tone="signal" size="sm">Featured</Pill>
            <div style={{ color: '#FFFBF3' }}>
              <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 10, color: '#FFC93C', letterSpacing: '0.08em', textTransform: 'uppercase' }}>cardiac · 12 min</div>
              <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: 1.1, marginTop: 6, letterSpacing: '-0.02em' }}>The first 30 days after open-heart surgery.</div>
            </div>
          </div>
        </Photo>
        <div style={{ display: 'grid', gap: 8 }}>
          {[
            { tag: 'Strength', t: 'Why warm-ups are the workout (after 60)', meta: '6 min' },
            { tag: 'Performance', t: 'Lower-body strength is goals scored', meta: '7 min' },
            { tag: 'Habits', t: 'Sleep is a training variable', meta: '5 min' },
          ].map((a, i) => (
            <div key={i} style={{ padding: 12, borderTop: i === 0 ? '2px solid #1A0B12' : '1px solid rgba(26,11,18,0.12)' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: '#F80038', letterSpacing: '0.08em' }}>{a.tag.toUpperCase()}</div>
              <div style={{ marginTop: 4, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14 }}>{a.t}</div>
              <div style={{ marginTop: 4, fontSize: 11, color: '#6B5A60' }}>{a.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const ProtoArticle = ({ onNav }) => (
  <div style={{ minHeight: '100%', background: '#FFFBF3' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 40px', borderBottom: '1px solid rgba(26,11,18,0.08)' }}>
      <PCSLogo size={14} />
      <a onClick={() => onNav('kb')} style={{ cursor: 'pointer', fontSize: 12, color: '#6B5A60', display: 'flex', alignItems: 'center', gap: 6 }}>
        <Icon name="arrow" size={12} color="#6B5A60" /> Back to Knowledge Base
      </a>
    </header>

    <article style={{ maxWidth: 720, margin: '0 auto', padding: '48px 40px 56px' }}>
      <Pill tone="moss" size="sm">Cardiac · 12 min read</Pill>
      <h1 style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.03em', marginTop: 18 }}>The first 30 days after open-heart surgery.</h1>
      <div style={{ marginTop: 14, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6B5A60', letterSpacing: '0.06em', textTransform: 'uppercase' }}>BY JEREMY BRODOVSKY · UPDATED MAR 2026</div>

      <p style={{ marginTop: 28, fontFamily: "'Quicksand', sans-serif", fontWeight: 500, fontSize: 22, lineHeight: 1.45, color: '#2C1F25' }}>
        Cardiac rehab ends. You go home. The cardiologist says "exercise as tolerated." Then what?
      </p>

      <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.65, color: '#2C1F25' }}>
        This is the gap we hear about every week. Patients leave cardiac rehab in decent shape — but they don't have a plan for the next twelve weeks. Some over-do it and end up back in the ER. Most under-do it and lose what they built. There's a middle path. Here's the protocol I use with every cardiac client.
      </p>

      <h2 style={{ marginTop: 32, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 32, letterSpacing: '-0.02em' }}>Week 1 — Permission to do less.</h2>
      <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.65, color: '#2C1F25' }}>
        Your sternum is still healing. Anything above zone-1 heart rate is too much. The goal of week one is two walks a day and three sets of diaphragmatic breathing. That's it. If you feel great, you do exactly this much. If you feel awful, you do exactly this much. The plan does not flex around how you feel...
      </p>

      <div style={{ marginTop: 36, padding: 28, background: '#1A0B12', color: '#FFFBF3' }}>
        <Pill tone="signal" size="sm">Ready for the full program?</Pill>
        <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 28, marginTop: 14, letterSpacing: '-0.02em' }}>
          This article is the first hour of a 12-week relationship.
        </div>
        <div style={{ marginTop: 12, fontSize: 14, color: '#C9B9BE', lineHeight: 1.55 }}>
          The Open Heart Recovery program puts a coach next to you for those 12 weeks. Two sessions a week. Written progressions. Direct coordination with your cardiologist.
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
          <a onClick={() => onNav('cardiac')} className="pcs-btn signal" style={{ cursor: 'pointer', padding: '12px 18px', fontSize: 12 }}>See the program <Icon name="arrow" size={12} color="white" /></a>
          <a onClick={() => onNav('book')} className="pcs-btn ghost" style={{ cursor: 'pointer', padding: '12px 18px', fontSize: 12, borderColor: '#FFFBF3', color: '#FFFBF3' }}>Book a consult <Icon name="arrow" size={12} color="#FFFBF3" /></a>
        </div>
      </div>
    </article>
  </div>
);

const ProtoBook = ({ onNav }) => {
  const [picked, setPicked] = useState(null);
  const slots = ['Wed Mar 12 · 10:00 AM', 'Wed Mar 12 · 2:30 PM', 'Thu Mar 13 · 9:00 AM', 'Thu Mar 13 · 4:00 PM', 'Fri Mar 14 · 11:00 AM', 'Fri Mar 14 · 3:00 PM'];

  return (
    <div style={{ minHeight: '100%', background: '#1A0B12', color: '#FFFBF3' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 40px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <PCSLogo size={14} light />
        <a onClick={() => onNav('action')} style={{ cursor: 'pointer', fontSize: 12, color: '#C9B9BE' }}>← Different door</a>
      </header>

      <section style={{ padding: '48px 40px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 36, maxWidth: 1100, margin: '0 auto' }}>
        <div>
          <Pill tone="signal">Free · No pitch</Pill>
          <h1 style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.03em', marginTop: 18 }}>
            Twenty minutes with Jeremy.
          </h1>
          <p style={{ marginTop: 16, fontSize: 15, color: '#C9B9BE', lineHeight: 1.55, maxWidth: 380 }}>
            We'll talk about your starting point, your goals, and whether any of our programs fit. No sales pitch — if it's not a fit, I'll point you somewhere that is.
          </p>
          <ul style={{ marginTop: 24, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {['20 minutes · Zoom or phone', 'Free — no obligation', 'Same week availability', 'Recorded so you don\'t take notes'].map(x => (
              <li key={x} style={{ display: 'flex', gap: 10, fontSize: 13, color: '#FFFBF3' }}>
                <Icon name="check" size={14} color="#F80038" /> {x}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ background: '#FFFBF3', color: '#1A0B12', padding: 28 }}>
          <div className="pcs-eyebrow">Pick a time · This week</div>
          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {slots.map(s => (
              <button key={s} onClick={() => setPicked(s)} style={{
                padding: '14px 12px',
                background: picked === s ? '#F80038' : '#FFFBF3',
                color: picked === s ? 'white' : '#1A0B12',
                border: picked === s ? '2px solid #F80038' : '1.5px solid rgba(26,11,18,0.18)',
                fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 12, textAlign: 'left',
                cursor: 'pointer',
              }}>{s}</button>
            ))}
          </div>
          <div style={{ marginTop: 22, display: 'grid', gap: 10 }}>
            <input placeholder="Your name" style={{ padding: '12px 14px', border: '1.5px solid rgba(26,11,18,0.18)', fontFamily: "'Manrope', sans-serif", fontSize: 14, outline: 'none' }} />
            <input placeholder="Email" style={{ padding: '12px 14px', border: '1.5px solid rgba(26,11,18,0.18)', fontFamily: "'Manrope', sans-serif", fontSize: 14, outline: 'none' }} />
            <textarea placeholder="What brought you here? (optional)" rows={3} style={{ padding: '12px 14px', border: '1.5px solid rgba(26,11,18,0.18)', fontFamily: "'Manrope', sans-serif", fontSize: 14, outline: 'none', resize: 'vertical' }} />
          </div>
          <button
            onClick={() => picked && onNav('done')}
            disabled={!picked}
            className="pcs-btn signal"
            style={{
              marginTop: 16, width: '100%', justifyContent: 'center',
              opacity: picked ? 1 : 0.4, cursor: picked ? 'pointer' : 'not-allowed',
            }}>
            {picked ? `Confirm · ${picked.split(' · ')[1]}` : 'Pick a time first'} <Icon name="arrow" size={14} color="white" />
          </button>
        </div>
      </section>
    </div>
  );
};

const ProtoDone = ({ onNav }) => (
  <div style={{ minHeight: '100%', background: '#FFFBF3', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
    <div style={{ maxWidth: 560, textAlign: 'center' }}>
      <div style={{ width: 88, height: 88, borderRadius: '50%', background: '#F80038', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="check" size={44} color="white" />
      </div>
      <h1 style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 60, lineHeight: 0.95, letterSpacing: '-0.03em', marginTop: 28 }}>You're booked.</h1>
      <p style={{ marginTop: 16, fontSize: 16, color: '#2C1F25', lineHeight: 1.55 }}>
        Calendar invite + Zoom link on its way to your inbox. Jeremy will reach out the day before to confirm.
      </p>
      <div style={{ marginTop: 36, padding: 24, background: 'white', border: '1px solid rgba(26,11,18,0.12)', textAlign: 'left' }}>
        <div className="pcs-eyebrow muted">While you wait</div>
        <div style={{ display: 'grid', gap: 8, marginTop: 12 }}>
          <a onClick={() => onNav('kb')} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderTop: '1px solid rgba(26,11,18,0.08)' }}>
            <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14 }}>Browse the knowledge base</span>
            <Icon name="arrow" size={14} color="#1A0B12" />
          </a>
          <a onClick={() => onNav('cardiac')} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderTop: '1px solid rgba(26,11,18,0.08)' }}>
            <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 14 }}>Read about Open Heart Recovery</span>
            <Icon name="arrow" size={14} color="#1A0B12" />
          </a>
        </div>
      </div>
      <div style={{ marginTop: 18, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B5A60', letterSpacing: '0.06em' }}>
        UTM: GOOGLE / ORGANIC / CARDIAC-SEARCH
      </div>
    </div>
  </div>
);

// ----- The prototype shell with history -----
const Prototype = () => {
  const [history, setHistory] = useState(['google']);
  const route = history[history.length - 1];

  const nav = (to) => setHistory(h => [...h, to]);
  const back = () => setHistory(h => h.length > 1 ? h.slice(0, -1) : h);
  const reset = () => setHistory(['google']);

  const screen = useMemo(() => {
    switch (route) {
      case 'google':  return <ProtoGoogle onNav={nav} />;
      case 'action':  return <ProtoAction onNav={nav} />;
      case 'cardiac': return <ProtoCardiac onNav={nav} />;
      case 'kb':      return <ProtoKB onNav={nav} />;
      case 'article': return <ProtoArticle onNav={nav} />;
      case 'book':    return <ProtoBook onNav={nav} />;
      case 'done':    return <ProtoDone onNav={nav} />;
      default:        return <ProtoAction onNav={nav} />;
    }
  }, [route]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header strip on top */}
      <div style={{ padding: '16px 24px', background: '#F80038', color: '#FFFBF3', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFC93C' }}>clickable prototype · the full conversion flow</div>
          <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 20, marginTop: 4, letterSpacing: '-0.015em' }}>
            Google → Action Page → {route === 'google' ? '…' : route === 'action' ? 'Pick a door' : route}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#FFC93C', marginRight: 8 }}>STEP {history.length}</div>
          {history.map((r, i) => (
            <div key={i} style={{
              width: 10, height: 10, borderRadius: '50%',
              background: i === history.length - 1 ? '#FFC93C' : 'rgba(255,255,255,0.3)',
            }} />
          ))}
          <button onClick={reset} style={{
            marginLeft: 14, padding: '8px 14px', background: '#FFC93C',
            border: 'none', color: '#1A0B12', borderRadius: 999,
            fontFamily: "'Quicksand', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.04em',
            cursor: 'pointer',
          }}>Reset</button>
        </div>
      </div>

      <div style={{ flex: 1, padding: 18, background: '#E9E5DC' }}>
        <ProtoBrowser route={route} onBack={back} canBack={history.length > 1} onNav={nav}>
          {screen}
        </ProtoBrowser>
      </div>
    </div>
  );
};

window.Prototype = Prototype;
