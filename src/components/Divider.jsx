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
        background: 'linear-gradient(90deg, transparent, #4a7c59)',
      }} />
      <svg width="60" height="24" viewBox="0 0 60 24" fill="none" style={{ margin: '0 8px', opacity: 0.6 }}>
        <path d="M2 12 C8 12, 12 8, 18 6" stroke="#4a7c59" strokeWidth="0.8" fill="none" />
        <path d="M2 12 C8 12, 12 16, 18 18" stroke="#4a7c59" strokeWidth="0.8" fill="none" />
        <path d="M26 12 L30 8 L34 12 L30 16 Z" stroke="#c9a84c" strokeWidth="0.8" fill="none" />
        <circle cx="30" cy="12" r="1.5" fill="#c9a84c" opacity="0.6" />
        <path d="M58 12 C52 12, 48 8, 42 6" stroke="#4a7c59" strokeWidth="0.8" fill="none" />
        <path d="M58 12 C52 12, 48 16, 42 18" stroke="#4a7c59" strokeWidth="0.8" fill="none" />
      </svg>
      <div style={{
        flex: 1,
        height: '1px',
        background: 'linear-gradient(90deg, #4a7c59, transparent)',
      }} />
    </div>
  );
}
