// Brand system artboard — palette, type, voice, components

const BrandSystem = () => (
  <div className="pcs-frame" style={{ padding: 56, background: '#FFFBF3' }}>
    {/* Header */}
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40 }}>
      <div>
        <div className="pcs-eyebrow muted" style={{ marginBottom: 16 }}>pcs · brand operating system · v1</div>
        <h1 className="pcs-h1" style={{ fontSize: 80 }}>the system,<br/>before the<br/><span style={{ color: '#F80038' }}>surfaces.</span></h1>
      </div>
      <div style={{ maxWidth: 320, color: '#2C1F25', fontSize: 15, lineHeight: 1.55 }}>
        Everything downstream — site, action page, Google profile, social — pulls from the same tokens. That's how a verbiage standardization actually sticks.
      </div>
    </div>

    <Divider thick style={{ marginBottom: 32, background: '#F80038' }} />

    {/* 3-column system */}
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 32 }}>
      {/* PALETTE */}
      <div>
        <div className="pcs-eyebrow" style={{ marginBottom: 14 }}>01 · Palette</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
          {[
            { name: 'Signal Red', hex: '#F80038', role: 'The brand. Buttons, energy, action.' },
            { name: 'Sun',        hex: '#FFC93C', role: 'Backgrounds, highlights, warmth.' },
            { name: 'Sky',        hex: '#0EA5E9', role: 'Performance, athletic, info.' },
            { name: 'Plum',       hex: '#6B1748', role: 'Deep companion to red.' },
            { name: 'Teal',       hex: '#14B8A6', role: 'Wellness, coaching, recovery.' },
            { name: 'Ink',        hex: '#1A0B12', role: 'Type, frames, contrast.' },
            { name: 'Cream',      hex: '#FFFBF3', role: 'Default background.' },
            { name: 'Bone',       hex: '#FFEED1', role: 'Soft backgrounds, cards.' },
            { name: 'Iron',       hex: '#6B5A60', role: 'Secondary type, captions.' },
          ].map(c => (
            <div key={c.name} style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(26,11,18,0.08)' }}>
              <div style={{ height: 72, background: c.hex }} />
              <div style={{ padding: '10px 12px', background: '#FFFBF3' }}>
                <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13 }}>{c.name}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B5A60', marginTop: 2 }}>{c.hex}</div>
                <div style={{ fontSize: 11, color: '#6B5A60', marginTop: 4 }}>{c.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TYPE */}
      <div>
        <div className="pcs-eyebrow" style={{ marginBottom: 14 }}>02 · type</div>
        <div style={{ borderTop: '1px solid #1A0B12', paddingTop: 14, marginBottom: 18 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B5A60', letterSpacing: '0.08em' }}>QUICKSAND · DISPLAY 700</div>
          <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 60, lineHeight: 0.95, letterSpacing: '-0.025em', marginTop: 6, color: '#F80038' }}>train smarter.</div>
        </div>
        <div style={{ borderTop: '1px solid #1A0B12', paddingTop: 14, marginBottom: 18 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B5A60', letterSpacing: '0.08em' }}>QUICKSAND · HEADING 700</div>
          <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 28, marginTop: 6, letterSpacing: '-0.015em' }}>programs built around you.</div>
        </div>
        <div style={{ borderTop: '1px solid #1A0B12', paddingTop: 14, marginBottom: 18 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B5A60', letterSpacing: '0.08em' }}>MANROPE · BODY 400</div>
          <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 15, lineHeight: 1.55, marginTop: 6, color: '#2C1F25' }}>
            Twenty-plus years training individuals and athletes — from collegiate soccer programs to cardiac recovery. The approach is the same: practical, structured, measurable.
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1A0B12', paddingTop: 14 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B5A60', letterSpacing: '0.08em' }}>JETBRAINS MONO · META</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, marginTop: 6, color: '#1A0B12' }}>EST. 2003 / BALA CYNWYD, PA</div>
        </div>
      </div>

      {/* VOICE + CTA system */}
      <div>
        <div className="pcs-eyebrow" style={{ marginBottom: 14 }}>03 · voice & ctas</div>
        <div style={{ background: '#F80038', color: '#FFFBF3', padding: 22, marginBottom: 16, borderRadius: 16 }}>
          <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFC93C', marginBottom: 10 }}>one promise. three doors.</div>
          <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1.2, letterSpacing: '-0.015em' }}>
            Every surface — site, search, social — funnels to the same three actions.
          </div>
        </div>
        <div style={{ display: 'grid', gap: 10 }}>
          {[
            { label: 'Join a Training Program', tone: 'signal', sub: 'Primary · structured offer' },
            { label: 'Get Resources', tone: 'ink', sub: 'Secondary · top of funnel' },
            { label: 'Book a Consultation', tone: 'ghost', sub: 'Tertiary · high-intent' },
          ].map(b => (
            <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <a className={`pcs-btn ${b.tone === 'signal' ? 'signal' : b.tone === 'ghost' ? 'ghost' : ''}`} style={{ flex: '0 0 auto' }}>
                {b.label} <span className="arr"><Icon name="arrow" size={14} color="currentColor" /></span>
              </a>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B5A60' }}>{b.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 22, padding: 16, background: '#FFEED1', border: '1px solid rgba(26,11,18,0.12)' }}>
          <div className="pcs-eyebrow muted" style={{ marginBottom: 8 }}>Voice rules</div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 6 }}>
            {[
              'Verbs first. Sentences end before they get tired.',
              'Numbers over adjectives. "20 years" beats "experienced."',
              'No hype. No miracle. No "transform your life."',
              'Recovery and performance use the same vocabulary.',
            ].map(r => (
              <li key={r} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#2C1F25', lineHeight: 1.45 }}>
                <Icon name="check" size={14} color="#F80038" /> {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <Divider style={{ margin: '36px 0', background: 'rgba(26,11,18,0.12)' }} />

    {/* Logo lockups */}
    <div>
      <div className="pcs-eyebrow" style={{ marginBottom: 18 }}>04 · logo lockups</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        <div style={{ padding: 28, background: '#FFFBF3', border: '1px solid rgba(26,11,18,0.08)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 110 }}>
          <PCSLogo size={22} />
        </div>
        <div style={{ padding: 28, background: '#FFC93C', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 110 }}>
          <PCSLogo size={22} />
        </div>
        <div style={{ padding: 28, background: '#1A0B12', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 110 }}>
          <PCSLogo size={22} light />
        </div>
        <div style={{ padding: 28, background: '#F80038', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 110 }}>
          <PCSLogo size={22} light />
        </div>
      </div>
    </div>
  </div>
);

window.BrandSystem = BrandSystem;
