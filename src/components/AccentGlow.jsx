// src/components/AccentGlow.jsx
export default function AccentGlow({ from, to }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-[28px] z-0 h-[24px] w-[34px] rounded-md opacity-90 blur-[2px]"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    />
  );
}
