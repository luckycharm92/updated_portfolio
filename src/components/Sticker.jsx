// Handwritten label. variant: 'blue' (text only) or 'yellow' (filled).
export default function Sticker({ children, variant = 'blue', tilt = -3, className = '' }) {
  return (
    <span
      className={`sticker sticker--${variant} ${className}`}
      style={{ '--tilt': `${tilt}deg` }}
    >
      {children}
    </span>
  );
}
