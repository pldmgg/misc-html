// Main app — assembles all surfaces into a design canvas.

const App = () => (
  <DesignCanvas>
    {/* OVERVIEW + RATIONALE */}
    <DCSection id="overview" title="00 · The Brief" subtitle="Mocks of the post-project state — what Jeremy's digital presence looks like after we ship.">
      <DCArtboard id="rationale" label="Design rationale" width={920} height={680}>
        <div style={{ width: '100%', height: '100%', background: '#1A0B12', color: '#FFFBF3', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="pcs-eyebrow">PCS · DIGITAL MARKETING PROJECT · DELIVERABLE PREVIEW</div>
            <h1 className="pcs-h1" style={{ color: '#FFFBF3', marginTop: 18, fontSize: 64 }}>
              What it looks like<br/>when we're done.
            </h1>
            <p style={{ marginTop: 22, fontSize: 16, lineHeight: 1.55, color: '#C9B9BE', maxWidth: 620 }}>
              A unified system across web, search, and social — built around three CTAs (Join a Training Program · Get Resources · Book a Consultation) and a single conversion-optimized Action Page that every channel funnels into.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginTop: 36 }}>
            {[
              { n: '01', h: 'Brand system', d: 'Tokens, type, voice. Verbiage standardized.' },
              { n: '02', h: 'Website refresh', d: 'Homepage + Programs + Knowledge Base.' },
              { n: '03', h: 'Action Page', d: 'The conversion hub every channel funnels to.' },
              { n: '04', h: 'External channels', d: 'Google, Instagram, Facebook — all aligned.' },
            ].map(s => (
              <div key={s.n} style={{ padding: 18, background: '#2C1F25', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 28, color: '#F80038' }}>{s.n}</div>
                <div style={{ marginTop: 10, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 14 }}>{s.h}</div>
                <div style={{ marginTop: 6, fontSize: 12, color: '#C9B9BE', lineHeight: 1.45 }}>{s.d}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6B5A60', letterSpacing: '0.06em' }}>
            <span>SCROLL ↓ TO EXPLORE EACH SURFACE · DOUBLE-CLICK ANY ARTBOARD TO FOCUS</span>
            <span>PROTOTYPE LIVE AT BOTTOM</span>
          </div>
        </div>
      </DCArtboard>
      <DCPostIt x={950} y={20} color="yellow">
        These are MOCKS of the final state — real copy and real structure, placeholder photos. Built on the project doc's 10-item build list.
      </DCPostIt>
    </DCSection>

    {/* BRAND SYSTEM */}
    <DCSection id="brand" title="01 · Brand Operating System" subtitle="The tokens every surface pulls from. Standardize this and 'brand consistency' isn't a separate project anymore.">
      <DCArtboard id="brand-system" label="Brand system — palette, type, voice, CTAs" width={1280} height={920}>
        <BrandSystem />
      </DCArtboard>
    </DCSection>

    {/* WEBSITE */}
    <DCSection id="website" title="02 · Website (Light Refresh)" subtitle="Same warm/personal voice, sharper hierarchy, the new 3-CTA spine, and a real Programs structure.">
      <DCArtboard id="home" label="Homepage · practicalcoachingsolutions.com" width={1440} height={3200}>
        <WebsiteHomepage />
      </DCArtboard>
      <DCArtboard id="programs" label="Program detail · /programs/open-heart-recovery" width={1440} height={2400}>
        <WebsiteProgramDetail />
      </DCArtboard>
      <DCArtboard id="kb" label="Knowledge Base · /resources" width={1440} height={2400}>
        <WebsiteKnowledgeBase />
      </DCArtboard>
    </DCSection>

    {/* ACTION PAGE — Option A only */}
    <DCSection id="action" title="03 · Action Page (Conversion Hub)" subtitle="The single destination every UTM links to — Google Business, Instagram bio, Facebook posts all point here.">
      <DCArtboard id="action-a" label="Action Page · practicalcoachingsolutions.com/start" width={1280} height={1280}>
        <ActionPageA />
      </DCArtboard>
      <DCPostIt x={1310} y={20} color="orange">
        One URL: <strong>/start</strong><br/>
        Same 3 CTAs, UTM-trackable.<br/>
        Linked from every channel.
      </DCPostIt>
    </DCSection>

    {/* EXTERNAL CHANNELS */}
    <DCSection id="external" title="04 · External Channels" subtitle="Google, Instagram, Facebook — all pointing at the same Action Page with the same verbiage. This is the unified messaging in practice.">
      <DCArtboard id="google" label="Google Business Profile · post-optimization" width={1280} height={920}>
        <GoogleBusiness />
      </DCArtboard>
      <DCArtboard id="ig" label="Instagram · profile + highlights + pinned CTAs" width={1100} height={1240}>
        <InstagramProfile />
      </DCArtboard>
      <DCArtboard id="fb" label="Facebook Page · cover + pinned post" width={1280} height={1200}>
        <FacebookPage />
      </DCArtboard>
    </DCSection>

    {/* PROTOTYPE */}
    <DCSection id="proto" title="05 · Clickable Prototype" subtitle="Walk the full conversion flow — Google search → Action Page → pick a door → land on the right surface. Try clicking any CTA.">
      <DCArtboard id="proto-frame" label="The full conversion flow · click anywhere" width={1280} height={820}>
        <Prototype />
      </DCArtboard>
      <DCPostIt x={1310} y={20} color="pink">
        Start on Google. Click the top result. Pick a door. Try all three — each one leads somewhere real.
      </DCPostIt>
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
