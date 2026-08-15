// src/components/AccentGlow.jsx
export default function AccentGlow({ from, to }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -top-2 right-6 h-6 w-9 rounded-full blur-xl opacity-70"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    />
  );
}
