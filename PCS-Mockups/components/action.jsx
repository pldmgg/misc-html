// Action Page (Conversion Hub) — three variations exploring different hooks.
// All hit the same three CTAs: Join a Program · Get Resources · Book a Consult.
// All track via UTM. All link back from Google Business, IG, FB.

// ====== Variation A: "THE THREE DOORS" — explicit picker funnel ======
const ActionPageA = () => (
  <div className="pcs-frame" style={{ background: '#FFFBF3' }}>
    {/* Minimal nav — conversion pages strip distractions */}
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 56px', borderBottom: '1px solid rgba(26,11,18,0.08)' }}>
      <PCSLogo size={16} />
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6B5A60', letterSpacing: '0.06em' }}>
        (610) 724-5167 · BALA CYNWYD, PA
      </span>
    </header>

    {/* Hero — single question */}
    <section style={{ padding: '88px 56px 48px', textAlign: 'center', maxWidth: 1100, margin: '0 auto' }}>
      <Pill tone="signal">Start here</Pill>
      <h1 className="pcs-h1" style={{ marginTop: 24, fontSize: 96, lineHeight: 0.92 }}>
        What brought<br/>you here today?
      </h1>
      <p style={{ marginTop: 24, fontSize: 18, color: '#2C1F25', lineHeight: 1.5, maxWidth: 620, margin: '24px auto 0' }}>
        Three doors. Pick the one that fits. Each one takes you somewhere useful in under two minutes — no funnel, no pop-ups, no spam.
      </p>
    </section>

    {/* Three giant doors */}
    <section style={{ padding: '32px 56px 88px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {[
          {
            num: '01',
            tag: 'I know what I want',
            head: 'Join a Training Program',
            sub: 'Browse the six programs. Pick yours. Schedule the intake call.',
            cta: 'See Programs',
            tone: 'signal',
            facts: ['6 programs · 1-on-1 + group', '12-week structures', 'Starts within 2 weeks'],
          },
          {
            num: '02',
            tag: "I'm researching",
            head: 'Get Resources',
            sub: '40+ free articles + the weekly drop. Read first, decide later.',
            cta: 'Browse Library',
            tone: 'ink',
            facts: ['47 articles, free', 'Weekly newsletter', 'Paid guides available'],
          },
          {
            num: '03',
            tag: "I want to talk",
            head: 'Book a Consultation',
            sub: '20-minute call with Jeremy. Free. No pitch — just a plan.',
            cta: 'Pick a Time',
            tone: 'ghost',
            facts: ['20-min Zoom or phone', 'Free · no obligation', 'Same week availability'],
          },
        ].map((d, i) => (
          <div key={d.num} style={{
            background: d.tone === 'signal' ? '#F80038' : d.tone === 'ink' ? '#1A0B12' : '#FFFBF3',
            color: d.tone === 'ghost' ? '#1A0B12' : '#FFFBF3',
            border: d.tone === 'ghost' ? '1.5px solid #1A0B12' : 'none',
            padding: 36, display: 'flex', flexDirection: 'column', minHeight: 480,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 88, lineHeight: 0.85, letterSpacing: '-0.04em', opacity: 0.4 }}>{d.num}</div>
              <Pill tone={d.tone === 'ghost' ? 'ink' : 'bone'}>{d.tag}</Pill>
            </div>
            <h2 className="pcs-h2" style={{ marginTop: 28, fontSize: 40, color: 'inherit' }}>{d.head}</h2>
            <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.55, opacity: 0.85, flex: 1 }}>{d.sub}</p>
            <ul style={{ margin: '20px 0 24px', padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
              {d.facts.map(f => (
                <li key={f} style={{ display: 'flex', gap: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  <Icon name="check" size={12} color={d.tone === 'ghost' ? '#F80038' : '#FFFBF3'} /> {f}
                </li>
              ))}
            </ul>
            <a style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '16px 18px',
              background: d.tone === 'ghost' ? '#1A0B12' : (d.tone === 'signal' ? '#1A0B12' : '#F80038'),
              color: '#FFFBF3',
              fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>
              {d.cta} <Icon name="arrow" size={14} color="#FFFBF3" />
            </a>
          </div>
        ))}
      </div>
    </section>

    {/* Tiny trust strip */}
    <section style={{ padding: '36px 56px', background: '#1A0B12', color: '#FFFBF3', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Stars n={5} color="#F80038" size={16} />
        <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16 }}>4.9 on Google · 87 reviews</span>
      </div>
      <div style={{ display: 'flex', gap: 28, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.08em', color: '#C9B9BE' }}>
        <span>20+ YEARS</span><span>·</span>
        <span>500+ CLIENTS</span><span>·</span>
        <span>CPT · USSF · USC LICENSED</span>
      </div>
    </section>
  </div>
);

// ====== Variation B: "QUIZ / DIAGNOSTIC" — guided path ======
const ActionPageB = () => {
  const questions = [
    { q: 'What\'s your starting point?', opts: ['Cleared from cardiac rehab', 'Coming back from injury', 'Looking to get stronger', 'Training for a sport'] },
    { q: 'Where do you want to train?', opts: ['In-person (Bala Cynwyd)', 'Virtual (Zoom)', 'A mix', "Doesn't matter"] },
    { q: 'How committed are you?', opts: ['1×/week', '2–3×/week', '4+/week', 'Help me decide'] },
  ];

  return (
    <div className="pcs-frame" style={{ background: '#1A0B12', color: '#FFFBF3' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 56px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <PCSLogo size={16} light />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#C9B9BE', letterSpacing: '0.06em' }}>
          THE FIT CHECK · TAKES 90 SECONDS
        </span>
      </header>

      <section style={{ padding: '88px 56px 32px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Pill tone="signal">Step 1 of 3</Pill>
          <h1 className="pcs-h1" style={{ marginTop: 22, color: '#FFFBF3', fontSize: 88 }}>
            Find the<br/>
            <span style={{ color: '#F80038' }}>right room</span><br/>
            to start in.
          </h1>
          <p style={{ marginTop: 24, fontSize: 17, color: '#C9B9BE', lineHeight: 1.55, maxWidth: 460 }}>
            Three questions. We'll recommend a program, send you the right articles, or just book you a call. No email until you actually want one.
          </p>
          <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
            <Stat value="90s" label="To complete" accent />
            <Stat value="0" label="Spam emails" />
          </div>
        </div>

        {/* Quiz card */}
        <div style={{ background: '#FFFBF3', color: '#1A0B12', padding: 36 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
            <div className="pcs-eyebrow">Question 1 of 3</div>
            <div style={{ display: 'flex', gap: 4 }}>
              <div style={{ width: 36, height: 4, background: '#F80038' }} />
              <div style={{ width: 36, height: 4, background: 'rgba(26,11,18,0.15)' }} />
              <div style={{ width: 36, height: 4, background: 'rgba(26,11,18,0.15)' }} />
            </div>
          </div>
          <h2 className="pcs-h2" style={{ fontSize: 36 }}>{questions[0].q}</h2>
          <div style={{ display: 'grid', gap: 10, marginTop: 28 }}>
            {questions[0].opts.map((o, i) => (
              <button key={o} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '18px 20px', background: i === 0 ? '#1A0B12' : '#FFFBF3',
                color: i === 0 ? '#FFFBF3' : '#1A0B12',
                border: i === 0 ? 'none' : '1.5px solid rgba(26,11,18,0.18)',
                fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 15,
                cursor: 'pointer', textAlign: 'left',
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{
                    width: 24, height: 24,
                    border: i === 0 ? '2px solid #F80038' : '1.5px solid #6B5A60',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {i === 0 && <span style={{ width: 10, height: 10, background: '#F80038', borderRadius: '50%' }} />}
                  </span>
                  {o}
                </span>
                {i === 0 && <Icon name="arrow" size={16} color="#F80038" />}
              </button>
            ))}
          </div>
          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6B5A60', textDecoration: 'underline' }}>Skip — just show me everything</a>
            <a className="pcs-btn signal">Next <Icon name="arrow" size={14} color="white" /></a>
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section style={{ padding: '64px 56px 88px' }}>
        <div className="pcs-eyebrow">After the quiz</div>
        <h2 className="pcs-h2" style={{ marginTop: 12, color: '#FFFBF3', fontSize: 56 }}>You'll land on one of these three.</h2>

        <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {[
            { tag: 'Most cleared from cardiac rehab end up here', head: 'A program recommendation', d: 'We\'ll suggest one of the six programs, with the next available start date.', cta: 'Join a Training Program' },
            { tag: 'Researchers and the curious end up here', head: 'A reading list', d: 'Three articles, hand-picked. Plus the weekly newsletter if you want it.', cta: 'Get Resources' },
            { tag: 'High-intent folks end up here', head: "Jeremy's calendar", d: '20-minute consultation. Free, no pitch. Same week availability.', cta: 'Book a Consultation' },
          ].map((c, i) => (
            <div key={i} style={{ background: '#2C1F25', padding: 28, border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#F80038', letterSpacing: '0.06em', textTransform: 'uppercase', minHeight: 28 }}>{c.tag}</div>
              <h3 className="pcs-h3" style={{ marginTop: 18, color: '#FFFBF3', fontSize: 22 }}>{c.head}</h3>
              <p style={{ marginTop: 12, fontSize: 13.5, color: '#C9B9BE', lineHeight: 1.55 }}>{c.d}</p>
              <div style={{
                marginTop: 22, padding: '12px 14px', background: 'rgba(248,0,56,0.12)',
                fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 12,
                color: '#F80038', letterSpacing: '0.08em', textTransform: 'uppercase',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                CTA · {c.cta} <Icon name="arrow" size={12} color="#F80038" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// ====== Variation C: "PROOF-FIRST" — testimonial-led conversion ======
const ActionPageC = () => (
  <div className="pcs-frame" style={{ background: '#FFFBF3' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 56px', borderBottom: '1px solid rgba(26,11,18,0.08)' }}>
      <PCSLogo size={16} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Stars n={5} size={12} />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6B5A60', letterSpacing: '0.06em' }}>4.9 · 87 GOOGLE REVIEWS</span>
      </div>
    </header>

    {/* Hero — testimonial as the headline */}
    <section style={{ padding: '72px 56px 56px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
      <div>
        <Pill tone="signal">Real client · 6 months in</Pill>
        <h1 className="pcs-h1" style={{ marginTop: 24, fontSize: 80, lineHeight: 0.95 }}>
          <span style={{ color: '#F80038' }}>"</span>I came in scared<br/>after my bypass.<br/>
          <span style={{ color: '#6B5A60' }}>Now I'm stronger</span><br/>
          <span style={{ color: '#6B5A60' }}>than before.</span><span style={{ color: '#F80038' }}>"</span>
        </h1>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#1F3A2E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFBF3', fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}>DK</div>
          <div>
            <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14 }}>Dan K. · Wynnewood, PA</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B5A60', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 4 }}>OPEN HEART RECOVERY · COMPLETED FEB 2026</div>
          </div>
        </div>

        {/* Three CTA stack */}
        <div style={{ marginTop: 40 }}>
          <div className="pcs-eyebrow muted" style={{ marginBottom: 14 }}>Three ways to start</div>
          <div style={{ display: 'grid', gap: 10 }}>
            {[
              { t: 'Join a Training Program', sub: 'Pick from 6 structured programs', icon: 'target', tone: 'signal' },
              { t: 'Get Resources', sub: '47 free articles + the weekly drop', icon: 'book', tone: 'ink' },
              { t: 'Book a Consultation', sub: '20-min call with Jeremy · free', icon: 'phone', tone: 'ghost' },
            ].map(c => (
              <a key={c.t} style={{
                display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px',
                background: c.tone === 'signal' ? '#F80038' : c.tone === 'ink' ? '#1A0B12' : '#FFFBF3',
                color: c.tone === 'ghost' ? '#1A0B12' : '#FFFBF3',
                border: c.tone === 'ghost' ? '1.5px solid #1A0B12' : 'none',
                cursor: 'pointer',
              }}>
                <Icon name={c.icon} size={20} color={c.tone === 'ghost' ? '#F80038' : 'currentColor'} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 16 }}>{c.t}</div>
                  <div style={{ fontSize: 11.5, opacity: 0.7, marginTop: 2 }}>{c.sub}</div>
                </div>
                <Icon name="arrow" size={16} color="currentColor" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Big stat panel */}
      <div style={{ background: '#1A0B12', color: '#FFFBF3', padding: 40, position: 'relative' }}>
        <div className="pcs-eyebrow">The receipts</div>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <Stat value="500+" label="Clients trained" />
          <Stat value="4.9★" label="Google rating" accent />
          <Stat value="20+" label="Years coaching" />
          <Stat value="92%" label="6-mo retention" />
          <Stat value="14–90" label="Age range" />
          <Stat value="$2.4K" label="Starting program" accent />
        </div>
        <Divider style={{ background: 'rgba(255,255,255,0.1)', margin: '32px 0' }} />
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
          <Icon name="badge" size={20} color="#FFC93C" />
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13 }}>Certifications & licenses</span>
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 6, fontSize: 12.5, color: '#C9B9BE' }}>
          {['ACE Certified Personal Trainer', 'Health Coach Institute (Health & Life)', 'US Soccer Federation · National License', 'United Soccer Coaches · National License', 'AFAA Group Fitness', 'CPR / AED · Current'].map(c => (
            <li key={c} style={{ display: 'flex', gap: 8 }}><Icon name="check" size={12} color="#FFC93C" /> {c}</li>
          ))}
        </ul>
      </div>
    </section>

    {/* Wall of stars */}
    <section style={{ padding: '56px 56px 88px', background: '#FFEED1' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
        <div>
          <div className="pcs-eyebrow muted">Wall of receipts</div>
          <h2 className="pcs-h2" style={{ marginTop: 10 }}>Eighty-seven stars. <span style={{ color: '#F80038' }}>Every one earned.</span></h2>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6B5A60' }}>VERIFIED · GOOGLE · YELP · FB</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {[
          { who: 'M. Rosen', tag: 'Personal Training · 3 yrs', q: 'Worked through both knees and a torn cuff. Back on the court at 58.', src: 'Google' },
          { who: 'A. Patel', tag: 'Athletic Performance', q: 'JV bench → D2 scholarship. Strength program + the soccer specifics.', src: 'Google' },
          { who: 'L. Tran', tag: 'Strength After 60', q: 'I can carry my own groceries again. That used to feel embarrassing.', src: 'Yelp' },
          { who: 'D. Kowalski', tag: 'Open Heart Recovery', q: 'Slow, safe, and gradually harder. Cleared at six months.', src: 'Google' },
          { who: 'S. Greenfield', tag: 'Health Coaching', q: 'Lost 22 lbs and kept it off — first program where I never starved.', src: 'Google' },
          { who: 'R. Cohen', tag: 'Personal Training', q: 'Methodical, patient, no nonsense. Exactly what I needed at 71.', src: 'FB' },
          { who: 'B. Wallace', tag: 'Group Training', q: 'Same programming as 1-on-1, half the cost. Showed up the most I ever have.', src: 'Google' },
          { who: 'J. Ito', tag: 'Athletic Performance · Parent', q: 'My son\'s 40-time dropped 0.3s in a summer. He believes in himself now.', src: 'Yelp' },
        ].map((t, i) => (
          <div key={i} style={{ background: '#FFFBF3', padding: 20, border: '1px solid rgba(26,11,18,0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Stars n={5} size={11} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: '#6B5A60', letterSpacing: '0.06em' }}>{t.src.toUpperCase()}</span>
            </div>
            <p style={{ marginTop: 12, fontFamily: "'Quicksand', sans-serif", fontSize: 14, fontWeight: 600, lineHeight: 1.4 }}>"{t.q}"</p>
            <div style={{ marginTop: 14, paddingTop: 10, borderTop: '1px solid rgba(26,11,18,0.1)' }}>
              <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 12 }}>{t.who}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: '#6B5A60', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 2 }}>{t.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

Object.assign(window, { ActionPageA, ActionPageB, ActionPageC });
