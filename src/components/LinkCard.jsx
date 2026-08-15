// src/components/LinkCard.jsx
import ArrowIcon from "./icons/ArrowIcon";
import GlassIcon from "./icons/GlassIcon";
import AccentGlow from "./AccentGlow";

export default function LinkCard({
  href,
  title,
  subtitle,
  icon,
  accentFrom,
  accentTo,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="glass-card relative flex h-[79px] w-full items-center justify-between rounded-xl px-4 py-4 pr-5 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-brand]"
    >
      <AccentGlow from={accentFrom} to={accentTo} />
      <ArrowIcon />
      <div className="flex flex-1 items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-0 text-center">
          <span className="font-medium text-[14px] leading-[25px] text-[--color-text-primary]">
            {title}
          </span>
          <span className="text-[11px] leading-[25px] text-[--color-text-muted]">
            {subtitle}
          </span>
        </div>
        <GlassIcon size={40}>{icon}</GlassIcon>
      </div>
    </a>
  );
}
