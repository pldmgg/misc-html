// External channel mocks: Google Business Profile, Instagram profile, Facebook Page.
// Each one shows the POST-PROJECT state — unified verbiage, action-page CTAs,
// updated descriptions and bio links pointing back to the conversion hub.

// =============== GOOGLE BUSINESS PROFILE ===============
const GoogleBusiness = () => (
  <div className="pcs-frame" style={{ background: '#FFFFFF', fontFamily: 'Roboto, Arial, sans-serif' }}>
    {/* Fake Google header */}
    <div style={{ padding: '14px 24px', borderBottom: '1px solid #E0E0E0', display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ fontFamily: 'Arial', fontSize: 22, fontWeight: 500 }}>
        <span style={{ color: '#4285F4' }}>G</span><span style={{ color: '#EA4335' }}>o</span><span style={{ color: '#FBBC04' }}>o</span><span style={{ color: '#4285F4' }}>g</span><span style={{ color: '#34A853' }}>l</span><span style={{ color: '#EA4335' }}>e</span>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '10px 16px', border: '1px solid #DFE1E5', borderRadius: 24, gap: 12, maxWidth: 520 }}>
        <Icon name="search" size={16} color="#9AA0A6" />
        <span style={{ color: '#202124', fontSize: 14 }}>personal trainer bala cynwyd</span>
      </div>
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#1F3A2E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 13 }}>J</div>
    </div>

    {/* Tabs */}
    <div style={{ padding: '0 24px', borderBottom: '1px solid #E0E0E0', display: 'flex', gap: 24, fontSize: 13, color: '#5F6368' }}>
      {['All', 'Maps', 'Images', 'News', 'Videos'].map((t, i) => (
        <div key={t} style={{ padding: '14px 0', borderBottom: i === 1 ? '3px solid #1A73E8' : 'none', color: i === 1 ? '#1A73E8' : '#5F6368', fontWeight: i === 1 ? 500 : 400 }}>{t}</div>
      ))}
    </div>

    {/* Two-col: results + business panel */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 24, padding: '20px 24px 24px' }}>
      <div>
        <div style={{ fontSize: 12, color: '#70757A', marginBottom: 10 }}>About 47,200 results (0.41 seconds)</div>
        {/* Map snippet */}
        <PhotoBlock tone="paper" style={{ height: 120, marginBottom: 12, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #E8E0D2 0%, #D4C9B5 100%)' }}>
            <svg width="100%" height="100%" viewBox="0 0 400 120">
              <path d="M0 60 Q100 30 200 60 T400 60" stroke="#B8AC95" strokeWidth="3" fill="none" />
              <path d="M0 80 L400 80" stroke="#FFFBF3" strokeWidth="2" />
              <path d="M150 0 L150 120" stroke="#B8AC95" strokeWidth="2" />
              <circle cx="200" cy="60" r="10" fill="#EA4335" />
              <circle cx="200" cy="60" r="3" fill="white" />
            </svg>
          </div>
        </PhotoBlock>

        {/* Result entries */}
        {[
          { name: 'Practical Coaching Solutions', tag: 'Top-rated', rating: 4.9, n: 87, dist: '0.2 mi · Bala Cynwyd', closes: 'Open · Closes 8 PM', selected: true },
          { name: 'Main Line Fitness Studio', tag: '', rating: 4.6, n: 142, dist: '0.4 mi · Narberth', closes: 'Open · Closes 9 PM' },
          { name: 'Aquatic & Fitness Center', tag: '', rating: 4.4, n: 311, dist: '0.1 mi · Bala Cynwyd', closes: 'Open · Closes 10 PM' },
        ].map((r, i) => (
          <div key={i} style={{ padding: '14px 16px', border: r.selected ? '2px solid #1A73E8' : '1px solid #E0E0E0', borderRadius: 8, marginBottom: 8, background: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ fontSize: 16, color: '#202124', fontWeight: 500 }}>{r.name}</div>
                  {r.tag && <span style={{ fontSize: 10, color: '#137333', background: '#E6F4EA', padding: '2px 6px', borderRadius: 3, fontWeight: 500 }}>{r.tag}</span>}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                  <span style={{ fontSize: 13, color: '#5F6368' }}>{r.rating}</span>
                  <Stars n={Math.round(r.rating)} size={11} color="#FBBC04" />
                  <span style={{ fontSize: 13, color: '#5F6368' }}>({r.n})</span>
                  <span style={{ fontSize: 13, color: '#5F6368' }}>· Personal trainer</span>
                </div>
                <div style={{ fontSize: 13, color: '#5F6368', marginTop: 4 }}>{r.dist}</div>
                <div style={{ fontSize: 13, marginTop: 2 }}><span style={{ color: '#137333' }}>{r.closes.split('·')[0].trim()}</span> <span style={{ color: '#5F6368' }}>· {r.closes.split('·')[1].trim()}</span></div>
              </div>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: r.selected ? '#1A73E8' : '#F1F3F4', color: r.selected ? 'white' : '#5F6368', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>{i + 1}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Business profile panel */}
      <div style={{ border: '1px solid #E0E0E0', borderRadius: 8, overflow: 'hidden', background: 'white' }}>
        {/* Cover */}
        <Photo src="photos/fb-cover.jpg" style={{ height: 140 }} position="center">
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(248,0,56,0.55), rgba(107,23,72,0.55))' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
            <PCSLogo light size={18} />
          </div>
        </Photo>

        {/* Header */}
        <div style={{ padding: '16px 18px 12px' }}>
          <div style={{ fontSize: 22, color: '#202124', fontWeight: 400, fontFamily: 'Arial' }}>Practical Coaching Solutions</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
            <span style={{ fontSize: 14, color: '#202124', fontWeight: 500 }}>4.9</span>
            <Stars n={5} size={13} color="#FBBC04" />
            <span style={{ fontSize: 13, color: '#1A73E8', textDecoration: 'underline' }}>(87 Google reviews)</span>
          </div>
          <div style={{ fontSize: 13, color: '#5F6368', marginTop: 6 }}>Personal trainer · Health coach · Cardiac recovery specialist</div>
          <div style={{ marginTop: 8, fontSize: 13 }}>
            <span style={{ color: '#137333', fontWeight: 500 }}>Open</span>
            <span style={{ color: '#5F6368' }}> · Closes 8 PM · Sat 7 AM – 2 PM</span>
          </div>
        </div>

        {/* CTA buttons row */}
        <div style={{ padding: '0 18px 12px', display: 'flex', gap: 8 }}>
          {[
            { l: 'Directions', i: 'direction', primary: true },
            { l: 'Website', i: 'globe' },
            { l: 'Save', i: 'bookmark' },
            { l: 'Call', i: 'phone' },
            { l: 'Share', i: 'share' },
          ].map(b => (
            <div key={b.l} style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              padding: '8px 0', borderRadius: 20,
              background: b.primary ? '#1A73E8' : 'transparent',
              color: b.primary ? 'white' : '#1A73E8',
              border: b.primary ? 'none' : '1px solid #DADCE0',
              cursor: 'pointer',
            }}>
              <Icon name={b.i} size={16} color="currentColor" />
              <span style={{ fontSize: 11, fontWeight: 500 }}>{b.l}</span>
            </div>
          ))}
        </div>

        {/* "From the owner" — NEW post-project description w/ CTA verbiage */}
        <div style={{ padding: '12px 18px', borderTop: '1px solid #E0E0E0', borderBottom: '1px solid #E0E0E0', background: '#F8F9FA' }}>
          <div style={{ fontSize: 11, color: '#5F6368', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 6 }}>From the owner</div>
          <div style={{ fontSize: 13, color: '#202124', lineHeight: 1.5 }}>
            Personal training, health coaching, and cardiac recovery — Bala Cynwyd & Main Line, since 2003. <strong>Three ways to start: join a training program, get our free resources, or book a free 20-minute consult.</strong> Cardiologist-cleared cardiac recovery available.
          </div>
          <a style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 13, color: '#1A73E8', fontWeight: 500 }}>
            Visit website · practicalcoachingsolutions.com/start <Icon name="arrow" size={12} color="#1A73E8" />
          </a>
        </div>

        {/* Photos */}
        <div style={{ padding: '14px 18px' }}>
          <div style={{ fontSize: 14, color: '#202124', fontWeight: 500, marginBottom: 10 }}>Photos</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
            {['photos/cardiac-recovery.jpg', 'photos/strength-after-60.jpg', 'photos/athletic-performance.jpg', 'photos/group-training.jpg', 'photos/one-on-one.jpg', 'photos/fb-cover.jpg'].map((p, i) => (
              <Photo key={i} src={p} style={{ aspectRatio: '1', height: 80 }} position="center" />
            ))}
          </div>
        </div>

        {/* Services */}
        <div style={{ padding: '0 18px 14px', borderTop: '1px solid #E0E0E0' }}>
          <div style={{ fontSize: 14, color: '#202124', fontWeight: 500, margin: '14px 0 10px' }}>Services</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['1-on-1 Personal Training', 'Open Heart Recovery', 'Strength After 60', 'Athletic Performance', 'Health Coaching', 'Group Training'].map(s => (
              <span key={s} style={{ fontSize: 12, padding: '6px 10px', border: '1px solid #DADCE0', borderRadius: 16, color: '#3C4043' }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Reviews snippet */}
        <div style={{ padding: '14px 18px', borderTop: '1px solid #E0E0E0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ fontSize: 14, color: '#202124', fontWeight: 500 }}>Reviews</div>
            <a style={{ fontSize: 13, color: '#1A73E8' }}>See all 87</a>
          </div>
          <div style={{ background: '#F1F3F4', padding: 10, borderRadius: 6 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#1F3A2E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>DK</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: '#202124' }}>Dan K. · 2 reviews</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Stars n={5} size={10} color="#FBBC04" />
                  <span style={{ fontSize: 11, color: '#5F6368' }}>· 3 months ago</span>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 12, color: '#202124', lineHeight: 1.45 }}>
              "Jeremy met me where I was after my bypass — slow, safe, and gradually harder. Cleared at six months. Found him through Google, glad I did."
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// =============== INSTAGRAM PROFILE ===============
const InstagramProfile = () => {
  const tiles = [
    { tone: 'moss', label: 'Reel · 12.4k', icon: 'play' },
    { tone: 'sand', label: 'Carousel', icon: 'grid' },
    { tone: 'signal', label: 'Tip · 800', icon: '' },
    { tone: 'ink', label: 'Quote', icon: '' },
    { tone: 'cool', label: 'Demo · 3.2k', icon: 'play' },
    { tone: 'warm', label: 'Testimonial', icon: '' },
    { tone: 'moss', label: 'Recovery', icon: '' },
    { tone: 'sand', label: 'Program', icon: 'grid' },
    { tone: 'ink', label: 'Q&A', icon: '' },
  ];
  const highlights = [
    { name: 'Programs',    tone: 'ink' },
    { name: 'Recovery',    tone: 'moss' },
    { name: 'After 60',    tone: 'sand' },
    { name: 'Athletes',    tone: 'signal' },
    { name: 'Reviews',     tone: 'cool' },
    { name: 'Free Stuff',  tone: 'warm' },
  ];

  return (
    <div className="pcs-frame" style={{ background: '#FFFFFF', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      {/* IG top bar */}
      <div style={{ borderBottom: '1px solid #DBDBDB', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'cursive', fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em' }}>Instagram</div>
        <div style={{ flex: 1, maxWidth: 268, margin: '0 24px', padding: '8px 14px', background: '#EFEFEF', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="search" size={14} color="#8E8E8E" />
          <span style={{ fontSize: 14, color: '#8E8E8E' }}>Search</span>
        </div>
        <div style={{ display: 'flex', gap: 18, color: '#262626' }}>
          {['home', 'mail', 'plus', 'heart', 'user'].map(i => (
            <Icon key={i} name={i === 'home' ? 'grid' : i} size={22} color="#262626" />
          ))}
        </div>
      </div>

      {/* Profile header */}
      <div style={{ padding: '32px 56px', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 56 }}>
        <div style={{
          width: 150, height: 150, borderRadius: '50%',
          background: 'linear-gradient(135deg, #F80038, #FFC93C, #0EA5E9)',
          padding: 4,
          overflow: 'hidden',
        }}>
          <Photo src="photos/jeremy-portrait.jpg" style={{ width: '100%', height: '100%', borderRadius: '50%' }} position="center" />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ fontSize: 22, fontWeight: 400 }}>practicalcoachingsolutions</div>
            <button style={{ padding: '7px 16px', background: '#0095F6', color: 'white', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Follow</button>
            <button style={{ padding: '7px 16px', background: '#EFEFEF', color: '#262626', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Message</button>
            <button style={{ padding: '7px 16px', background: '#EFEFEF', color: '#262626', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Contact</button>
            <span style={{ padding: '6px', background: '#EFEFEF', borderRadius: 8 }}><Icon name="chevDown" size={14} color="#262626" /></span>
          </div>
          <div style={{ display: 'flex', gap: 28, marginTop: 22, fontSize: 16, color: '#262626' }}>
            <div><strong>1,247</strong> posts</div>
            <div><strong>2,894</strong> followers</div>
            <div><strong>312</strong> following</div>
          </div>
          {/* THE NEW BIO — post-project verbiage */}
          <div style={{ marginTop: 20, fontSize: 14, color: '#262626', lineHeight: 1.5 }}>
            <div style={{ fontWeight: 700 }}>Jeremy Brodovsky · Practical Coaching Solutions</div>
            <div style={{ marginTop: 2 }}>Personal Trainer · Health Coach · 20+ yrs</div>
            <div style={{ marginTop: 2 }}>📍 Bala Cynwyd & Main Line, PA</div>
            <div style={{ marginTop: 8, color: '#2C1F25' }}>
              Recovery, strength, performance — three doors, one method.<br/>
              <span style={{ color: '#6B5A60' }}>Cleared by cardiologists. Trusted by athletes. Built for everyone in between.</span>
            </div>
            <div style={{ marginTop: 8, fontWeight: 600 }}>
              👇 Join a program · Get resources · Book a call
            </div>
            <a style={{ color: '#00376B', fontWeight: 600, display: 'inline-block', marginTop: 6 }}>practicalcoachingsolutions.com/start ↗</a>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div style={{ padding: '16px 56px 24px', display: 'flex', gap: 24 }}>
        {highlights.map(h => (
          <div key={h.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: 80 }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', padding: 3, background: 'linear-gradient(135deg, #DBDBDB, #DBDBDB)' }}>
              <PhotoBlock tone={h.tone} style={{ width: '100%', height: '100%', borderRadius: '50%' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {h.name.split(' ')[0]}
                </div>
              </PhotoBlock>
            </div>
            <div style={{ fontSize: 12, color: '#262626' }}>{h.name}</div>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div style={{ borderTop: '1px solid #DBDBDB', padding: '0 56px', display: 'flex', justifyContent: 'center', gap: 60 }}>
        {[
          { l: 'Posts', i: 'grid', active: true },
          { l: 'Reels', i: 'play' },
          { l: 'Saved', i: 'bookmark' },
          { l: 'Tagged', i: 'user' },
        ].map(t => (
          <div key={t.l} style={{
            padding: '16px 0', borderTop: t.active ? '1px solid #262626' : 'none',
            marginTop: t.active ? -1 : 0,
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: 12, fontWeight: 600, letterSpacing: '0.08em',
            color: t.active ? '#262626' : '#8E8E8E', textTransform: 'uppercase',
          }}>
            <Icon name={t.i} size={11} color={t.active ? '#262626' : '#8E8E8E'} />
            {t.l}
          </div>
        ))}
      </div>

      {/* Grid — first tile is a PINNED ACTION-PAGE CTA */}
      <div style={{ padding: '4px 56px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
          {/* Pinned action CTA tile */}
          <div style={{ position: 'relative', aspectRatio: '1', background: '#F80038', color: 'white', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Pill tone="ink" size="sm">📌 Pinned</Pill>
              <Icon name="target" size={20} color="white" />
            </div>
            <div>
              <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 36, lineHeight: 0.95, letterSpacing: '-0.02em' }}>
                Three doors.<br/>One method.
              </div>
              <div style={{ marginTop: 14, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                LINK IN BIO → /START
              </div>
            </div>
          </div>
          {/* Pinned cardiac CTA */}
          <div style={{ position: 'relative', aspectRatio: '1', background: '#1F3A2E', color: 'white', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Pill tone="signal" size="sm">📌 Pinned</Pill>
              <Icon name="cardiac" size={20} color="#F80038" />
            </div>
            <div>
              <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 30, lineHeight: 0.95, letterSpacing: '-0.02em' }}>
                Open heart recovery —<br/>12 weeks.
              </div>
              <div style={{ marginTop: 14, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F80038' }}>
                LEARN MORE →
              </div>
            </div>
          </div>
          {/* Pinned testimonial */}
          <div style={{ position: 'relative', aspectRatio: '1', background: '#1A0B12', color: 'white', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Stars n={5} size={14} color="#F80038" />
            <div>
              <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 18, lineHeight: 1.25 }}>
                "Cleared at six months. Stronger than before."
              </div>
              <div style={{ marginTop: 14, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9B9BE' }}>
                — DAN K. · CARDIAC RECOVERY
              </div>
            </div>
          </div>

          {/* Regular grid — real photos */}
          {[
            { photo: 'photos/strength-after-60.jpg', label: 'Strength · 1.2k', icon: 'play' },
            { photo: 'photos/cardiac-recovery.jpg', label: 'Recovery · 3.8k', icon: '' },
            { photo: 'photos/athletic-performance.jpg', label: 'Performance', icon: 'play' },
            { photo: 'photos/one-on-one.jpg', label: 'Demo', icon: '' },
            { photo: 'photos/group-training.jpg', label: 'Group · 2.1k', icon: 'play' },
            { photo: 'photos/health-coaching.jpg', label: 'Coaching', icon: '' },
            { photo: 'photos/kb-cardio.jpg', label: 'Cardio tip', icon: '' },
            { photo: 'photos/kb-warmup.jpg', label: 'Warm-up', icon: '' },
            { photo: 'photos/kb-sleep.jpg', label: 'Habits', icon: 'play' },
          ].map((t, i) => (
            <Photo key={i} src={t.photo} style={{ aspectRatio: '1' }} position="center">
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)' }} />
              <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 2 }}>
                {t.icon && <Icon name={t.icon} size={16} color="white" />}
              </div>
              <div style={{ position: 'absolute', bottom: 10, left: 10, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 11, color: 'white', zIndex: 2 }}>
                {t.label}
              </div>
            </Photo>
          ))}
        </div>
      </div>
    </div>
  );
};

// =============== FACEBOOK PAGE ===============
const FacebookPage = () => (
  <div className="pcs-frame" style={{ background: '#F0F2F5', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
    {/* FB top bar */}
    <div style={{ background: 'white', borderBottom: '1px solid #DADDE1', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ fontFamily: 'Helvetica', fontSize: 32, fontWeight: 700, color: '#1877F2', letterSpacing: '-0.04em' }}>f</div>
      <div style={{ flex: 1, maxWidth: 240, padding: '8px 14px', background: '#F0F2F5', borderRadius: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
        <Icon name="search" size={14} color="#65676B" />
        <span style={{ fontSize: 14, color: '#65676B' }}>Search Facebook</span>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', gap: 12 }}>
        {['grid', 'user', 'mail', 'heart'].map(i => (
          <div key={i} style={{ width: 38, height: 38, borderRadius: '50%', background: '#E4E6EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={i} size={18} color="#050505" />
          </div>
        ))}
      </div>
    </div>

      {/* FB cover + page header */}
    <div style={{ background: 'white' }}>
      <Photo src="photos/fb-cover.jpg" style={{ height: 240, position: 'relative' }} position="center">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(248,0,56,0.7) 0%, rgba(107,23,72,0.6) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '0 40px 32px', zIndex: 2 }}>
          <div style={{ color: 'white' }}>
            <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 60, lineHeight: 0.95, letterSpacing: '-0.025em' }}>train the practical way.</div>
            <div style={{ marginTop: 8, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFC93C' }}>EST. 2003 · BALA CYNWYD · MAIN LINE</div>
          </div>
        </div>
      </Photo>

      <div style={{ padding: '0 40px', position: 'relative' }}>
        {/* Profile pic */}
        <div style={{
          position: 'absolute', top: -68, left: 40,
          width: 168, height: 168, borderRadius: '50%',
          background: '#F80038', border: '4px solid white',
          overflow: 'hidden',
        }}>
          <Photo src="photos/jeremy-portrait.jpg" style={{ width: '100%', height: '100%' }} position="center" />
        </div>

        <div style={{ paddingLeft: 192, paddingTop: 18, paddingBottom: 18, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 32, fontWeight: 700, color: '#050505', letterSpacing: '-0.01em' }}>Practical Coaching Solutions</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, fontSize: 15, color: '#65676B' }}>
              <span>2,894 followers</span>
              <span>·</span>
              <span>312 following</span>
              <span>·</span>
              <Stars n={5} size={12} color="#F7B928" />
              <span>4.9 · 87 reviews</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ padding: '8px 18px', background: '#1877F2', color: 'white', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              <Icon name="plus" size={14} color="white" /> Like
            </button>
            <button style={{ padding: '8px 18px', background: '#E4E6EB', color: '#050505', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Follow</button>
            <button style={{ padding: '8px 18px', background: '#E4E6EB', color: '#050505', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Message</button>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderTop: '1px solid #DADDE1', display: 'flex', gap: 8 }}>
          {['Posts', 'About', 'Programs', 'Reviews', 'Photos', 'Videos', 'More'].map((t, i) => (
            <div key={t} style={{
              padding: '14px 14px',
              borderBottom: i === 0 ? '3px solid #1877F2' : 'none',
              color: i === 0 ? '#1877F2' : '#65676B',
              fontWeight: i === 0 ? 600 : 500,
              fontSize: 15,
              cursor: 'pointer',
            }}>{t}</div>
          ))}
        </div>
      </div>
    </div>

    {/* Two-col body */}
    <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 16, padding: 16 }}>
      {/* Left: About card */}
      <div style={{ display: 'grid', gap: 16 }}>
        <div style={{ background: 'white', borderRadius: 8, padding: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: 17, fontWeight: 600, color: '#050505' }}>Intro</div>
          {/* POST-PROJECT description w/ unified verbiage */}
          <div style={{ marginTop: 12, fontSize: 15, color: '#050505', lineHeight: 1.4 }}>
            Personal training, health coaching, and cardiac recovery — Bala Cynwyd & Main Line, since 2003. <strong>Three ways to start: join a training program, get our free resources, or book a free 20-minute consult.</strong>
          </div>
          <div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
            {[
              { i: 'heart', t: 'Health & wellness website' },
              { i: 'globe', t: 'practicalcoachingsolutions.com/start' },
              { i: 'mail',  t: 'jabrodovsky@gmail.com' },
              { i: 'phone', t: '(610) 724-5167' },
              { i: 'map',   t: 'Bala Cynwyd, PA' },
              { i: 'clock', t: 'Open · Closes 8 PM' },
            ].map(r => (
              <div key={r.t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#050505' }}>
                <Icon name={r.i} size={16} color="#65676B" /> {r.t}
              </div>
            ))}
          </div>
        </div>

        {/* CTA card pinned */}
        <div style={{ background: '#1A0B12', color: 'white', borderRadius: 8, padding: 20 }}>
          <Pill tone="signal" size="sm">📌 Featured</Pill>
          <div style={{ marginTop: 14, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 24, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            Open heart recovery starts the day cardiac rehab ends.
          </div>
          <a style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14, padding: '12px 14px', background: '#F80038', color: 'white', fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Learn about the program <Icon name="arrow" size={14} color="white" />
          </a>
        </div>
      </div>

      {/* Right: Posts */}
      <div style={{ display: 'grid', gap: 16 }}>
        {/* Pinned post — the action page promotion */}
        <div style={{ background: 'white', borderRadius: 8, boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
          <div style={{ padding: '14px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#1A0B12', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}>JB</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 6 }}>
                  Practical Coaching Solutions
                  <span style={{ fontSize: 11, color: '#65676B', padding: '2px 6px', background: '#F0F2F5', borderRadius: 3 }}>📌 Pinned</span>
                </div>
                <div style={{ fontSize: 12, color: '#65676B' }}>Posted Mar 14 · 🌐 Public</div>
              </div>
            </div>
            <div style={{ marginTop: 12, fontSize: 15, color: '#050505', lineHeight: 1.45 }}>
              <strong>Three doors.</strong> Whether you're 60 and want to stay independent, recovering from a heart procedure, or chasing a college roster spot — there's a starting point. Pick yours 👇<br/><br/>
              <span style={{ color: '#1877F2' }}>practicalcoachingsolutions.com/start</span>
            </div>
          </div>
          <PhotoBlock tone="signal" style={{ height: 280, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'white' }}>
              <Pill tone="ink" size="sm">Start here</Pill>
              <div>
                <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 48, lineHeight: 0.95, letterSpacing: '-0.03em' }}>
                  What brought<br/>you here<br/>today?
                </div>
                <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
                  {['Join', 'Read', 'Book'].map(t => (
                    <span key={t} style={{ padding: '6px 12px', background: 'rgba(26,11,18,0.4)', backdropFilter: 'blur(4px)', fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </PhotoBlock>
          <div style={{ padding: '8px 16px', display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#65676B', borderBottom: '1px solid #F0F2F5' }}>
            <span>👍❤️🔥 142</span>
            <span>34 comments · 28 shares</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '4px 0' }}>
            {['Like', 'Comment', 'Share'].map(b => (
              <div key={b} style={{ padding: '8px 16px', fontSize: 14, fontWeight: 600, color: '#65676B' }}>{b}</div>
            ))}
          </div>
        </div>

        {/* Second post */}
        <div style={{ background: 'white', borderRadius: 8, boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
          <div style={{ padding: '14px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#1A0B12', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}>JB</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>Practical Coaching Solutions</div>
                <div style={{ fontSize: 12, color: '#65676B' }}>3 days ago · 🌐 Public</div>
              </div>
            </div>
            <div style={{ marginTop: 12, fontSize: 15, color: '#050505', lineHeight: 1.45 }}>
              The first 30 days after open-heart surgery aren't about getting strong — they're about staying out of the ER. New article on the knowledge base breaks down the week-by-week protocol. Free, no email needed.<br/><br/>
              <span style={{ color: '#1877F2' }}>practicalcoachingsolutions.com/resources/first-30-days</span>
            </div>
          </div>
          <Photo src="photos/cardiac-recovery.jpg" style={{ height: 200 }} position="center">
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(31,58,46,0.1) 0%, rgba(31,58,46,0.8) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, padding: 24, color: 'white', zIndex: 2 }}>
              <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 11, color: '#FFC93C', letterSpacing: '0.08em', textTransform: 'uppercase' }}>cardiac recovery · 12 min read</div>
              <div style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: 30, marginTop: 8, lineHeight: 1.1, letterSpacing: '-0.025em' }}>The first 30 days after open-heart surgery.</div>
            </div>
          </Photo>
        </div>
      </div>
    </div>
  </div>
);

Object.assign(window, { GoogleBusiness, InstagramProfile, FacebookPage });
