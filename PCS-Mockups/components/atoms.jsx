// Shared atoms used across all mocks. Exported to window.

// New logo — matches the actual PCS wordmark: lowercase Quicksand-Bold in PCS red.
const PCSLogo = ({ light = false, size = 18, stacked = false }) => {
  const red = '#F80038';
  const fg = light ? '#FFFBF3' : red;
  if (stacked) {
    return (
      <div style={{
        display: 'inline-flex', flexDirection: 'column', gap: 1,
        fontFamily: "'Quicksand', sans-serif", fontWeight: 700,
        fontSize: size, lineHeight: 0.95, letterSpacing: '-0.02em',
        color: fg, textTransform: 'lowercase',
      }}>
        <span>practical</span>
        <span>coaching</span>
        <span>solutions</span>
      </div>
    );
  }
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'baseline', gap: 6,
      fontFamily: "'Quicksand', sans-serif", fontWeight: 700,
      fontSize: size, letterSpacing: '-0.015em',
      color: fg, textTransform: 'lowercase',
    }}>
      <span>practical</span>
      <span>coaching</span>
      <span style={{ color: light ? '#FFC93C' : '#1A0B12' }}>solutions</span>
    </div>
  );
};

const Icon = ({ name, size = 16, color = 'currentColor' }) => {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
    check: <path d="M4 12l5 5 11-11" />,
    star: <path d="M12 3l2.6 6.3 6.8.6-5.2 4.6 1.6 6.7L12 17.7 6.2 21.2l1.6-6.7L2.6 10l6.8-.6L12 3z" />,
    play: <polygon points="6 4 20 12 6 20" fill={color} stroke="none" />,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />,
    mail: <><rect x="2" y="4" width="20" height="16" rx="1" /><path d="M2 6l10 7L22 6" /></>,
    map: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
    direction: <path d="M12 2l10 10-10 10L2 12 12 2zm0 4l-6 6 6 6 6-6-6-6z" />,
    save: <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />,
    share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z" />,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>,
    bookmark: <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill={color} stroke="none" /></>,
    book: <path d="M4 4h7a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H4zM20 4h-7a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h8z" />,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M7 10l5 5 5-5M12 15V3" /></>,
    chev: <path d="M9 18l6-6-6-6" />,
    chevDown: <path d="M6 9l6 6 6-6" />,
    search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>,
    menu: <path d="M3 12h18M3 6h18M3 18h18" />,
    plus: <path d="M12 5v14M5 12h14" />,
    flame: <path d="M12 2s4 5 4 9a4 4 0 0 1-8 0c0-1.5.5-2.5 1.5-3.5C8 9 7 8 7 6c0 3 5 4 5-4z" />,
    dumb: <path d="M3 12h18M6 8v8M18 8v8M2 10v4M22 10v4" />,
    cardiac: <path d="M2 12h4l2-5 4 10 2-5h8" />,
    senior: <><circle cx="12" cy="6" r="2.5" /><path d="M9 22v-7l-2-4 5-2 5 2-2 4v7" /></>,
    chart: <path d="M3 3v18h18M7 14l4-4 4 4 5-7" />,
    badge: <><circle cx="12" cy="9" r="6" /><path d="M8.5 14l-2 7 5.5-3 5.5 3-2-7" /></>,
    quote: <path d="M7 11h-4v-4a4 4 0 0 1 4-4M17 11h-4v-4a4 4 0 0 1 4-4M3 11v4a4 4 0 0 0 4 4M13 11v4a4 4 0 0 0 4 4" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0 }}>
      {paths[name] || <circle cx="12" cy="12" r="9" />}
    </svg>
  );
};

const Pill = ({ children, tone = 'ink', size = 'md' }) => {
  const tones = {
    ink:    { bg: '#1A0B12', fg: '#FFFBF3' },
    bone:   { bg: '#FFEED1', fg: '#1A0B12' },
    signal: { bg: '#F80038', fg: '#FFFFFF' },
    sun:    { bg: '#FFC93C', fg: '#1A0B12' },
    sky:    { bg: '#0EA5E9', fg: '#FFFFFF' },
    teal:   { bg: '#14B8A6', fg: '#FFFFFF' },
    plum:   { bg: '#6B1748', fg: '#FFFBF3' },
    softred:{ bg: '#FFD8E1', fg: '#C5002C' },
    softsun:{ bg: '#FFF1B8', fg: '#7A5800' },
    ghost:  { bg: 'transparent', fg: '#1A0B12', border: '1.5px solid #1A0B12' },
    soft:   { bg: '#FFFBF3', fg: '#6B5A60', border: '1px solid rgba(26,11,18,0.12)' },
  };
  const t = tones[tone] || tones.ink;
  const pad = size === 'sm' ? '5px 10px' : '7px 14px';
  const fs = size === 'sm' ? 10 : 11;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: pad, fontFamily: "'Quicksand', sans-serif",
      fontSize: fs, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
      background: t.bg, color: t.fg, border: t.border || 'none', borderRadius: 999,
    }}>{children}</span>
  );
};

// Generic image placeholder
const Img = ({ label = '', dark = false, style = {}, children }) => (
  <div className={`pcs-img${dark ? ' ink' : ''}`} data-label={label} style={style}>
    {children}
  </div>
);

// Real photo — renders an <img> with optional tinted overlay
const Photo = ({ src, alt = '', style = {}, overlay = null, position = 'center', children }) => (
  <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
    <img
      src={src}
      alt={alt}
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: position, display: 'block',
      }}
    />
    {overlay && (
      <div style={{ position: 'absolute', inset: 0, background: overlay, pointerEvents: 'none' }} />
    )}
    {children}
  </div>
);

// Photo placeholder — brighter, more variety
const PhotoBlock = ({ tone = 'warm', label = '', children, style = {} }) => {
  const tones = {
    warm:    { bg: 'linear-gradient(135deg, #FF6B6B 0%, #F80038 60%, #6B1748 100%)' },
    cool:    { bg: 'linear-gradient(135deg, #0EA5E9 0%, #0369A1 60%, #082F49 100%)' },
    moss:    { bg: 'linear-gradient(135deg, #14B8A6 0%, #0F766E 60%, #134E4A 100%)' },
    sand:    { bg: 'linear-gradient(135deg, #FFC93C 0%, #F59E0B 60%, #92400E 100%)' },
    signal:  { bg: 'linear-gradient(135deg, #FFC93C 0%, #F80038 50%, #6B1748 100%)' },
    sunset:  { bg: 'linear-gradient(135deg, #FFC93C 0%, #FB923C 50%, #F80038 100%)' },
    ink:     { bg: 'linear-gradient(135deg, #1A0B12 0%, #2C1F25 60%, #6B1748 100%)' },
    paper:   { bg: 'linear-gradient(135deg, #FFEED1 0%, #FFF7EC 60%, #FFFBF3 100%)' },
    sky:     { bg: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 60%, #0C4A6E 100%)' },
    plum:    { bg: 'linear-gradient(135deg, #F80038 0%, #6B1748 60%, #1A0B12 100%)' },
    candy:   { bg: 'linear-gradient(135deg, #FFC93C 0%, #F80038 40%, #0EA5E9 100%)' },
  };
  const t = tones[tone] || tones.warm;
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      background: t.bg, ...style,
    }}>
      {/* subtle grain */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 14px, rgba(255,255,255,0.05) 14px 15px)',
        pointerEvents: 'none',
      }} />
      {children}
      {label && (
        <div style={{
          position: 'absolute', left: 12, bottom: 10,
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
          color: 'rgba(255,255,255,0.65)', letterSpacing: '0.06em',
        }}>{label}</div>
      )}
    </div>
  );
};

// Inline stat block
const Stat = ({ value, label, accent = false, color = null }) => (
  <div>
    <div style={{
      fontFamily: "'Quicksand', sans-serif", fontWeight: 700,
      fontSize: 56, lineHeight: 0.9, letterSpacing: '-0.03em',
      color: color || (accent ? '#F80038' : '#1A0B12'),
    }}>{value}</div>
    <div style={{
      marginTop: 8, fontFamily: "'Quicksand', sans-serif",
      fontWeight: 600, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: '#6B5A60',
    }}>{label}</div>
  </div>
);

const Divider = ({ color = '#1A0B12', thick = false, style = {} }) => (
  <div style={{ height: thick ? 2 : 1, background: color, ...style }} />
);

// Star rating
const Stars = ({ n = 5, color = '#F80038', size = 12 }) => (
  <span style={{ display: 'inline-flex', gap: 1 }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Icon key={i} name="star" size={size} color={i < n ? color : '#C9B9BE'} />
    ))}
  </span>
);

Object.assign(window, { PCSLogo, Icon, Pill, Img, Photo, PhotoBlock, Stat, Divider, Stars });
