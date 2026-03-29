export default function Divider() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '400px',
      margin: '2em auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      userSelect: 'none',
    }}>
      <div style={{
        flex: 1,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--green-mid))',
      }} />
      <svg width="60" height="24" viewBox="0 0 60 24" fill="none" style={{ margin: '0 8px' }}>
        {/* Left branches */}
        <path d="M2 12 C8 12, 12 8, 18 6" stroke="var(--green-mid)" strokeWidth="0.8" fill="none" opacity="0.7" />
        <path d="M2 12 C8 12, 12 16, 18 18" stroke="var(--green-mid)" strokeWidth="0.8" fill="none" opacity="0.7" />
        <path d="M6 12 C10 11, 13 9, 17 8" stroke="var(--green-deep)" strokeWidth="0.5" fill="none" opacity="0.4" />
        <path d="M6 12 C10 13, 13 15, 17 16" stroke="var(--green-deep)" strokeWidth="0.5" fill="none" opacity="0.4" />

        {/* Center diamond with glow */}
        <path d="M26 12 L30 7 L34 12 L30 17 Z" stroke="var(--gold-mid)" strokeWidth="0.8" fill="none" opacity="0.8" />
        <path d="M27.5 12 L30 8.5 L32.5 12 L30 15.5 Z" stroke="var(--gold-deep)" strokeWidth="0.5" fill="none" opacity="0.4" />
        <circle cx="30" cy="12" r="1.5" fill="var(--gold-mid)" opacity="0.7">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="12" r="3" fill="var(--gold-mid)" opacity="0.08">
          <animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.08;0.15;0.08" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Right branches */}
        <path d="M58 12 C52 12, 48 8, 42 6" stroke="var(--green-mid)" strokeWidth="0.8" fill="none" opacity="0.7" />
        <path d="M58 12 C52 12, 48 16, 42 18" stroke="var(--green-mid)" strokeWidth="0.8" fill="none" opacity="0.7" />
        <path d="M54 12 C50 11, 47 9, 43 8" stroke="var(--green-deep)" strokeWidth="0.5" fill="none" opacity="0.4" />
        <path d="M54 12 C50 13, 47 15, 43 16" stroke="var(--green-deep)" strokeWidth="0.5" fill="none" opacity="0.4" />
      </svg>
      <div style={{
        flex: 1,
        height: '1px',
        background: 'linear-gradient(90deg, var(--green-mid), transparent)',
      }} />
    </div>
  );
}
