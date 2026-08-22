import ArrowIcon from "./icons/ArrowIcon";
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
      className="glass-card relative flex h-[79px] w-full items-center justify-between overflow-hidden rounded-xl px-4 py-4 pr-5 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-interactive-primary]"
    >
      <AccentGlow from={accentFrom} to={accentTo} />
      <ArrowIcon />
      <div className="flex flex-1 items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-0 text-center">
          <span className="font-stretch-semi font-medium text-[14px] leading-[25px] text-[#f7f9fc]">
            {title}
          </span>
          <span className="text-[11px] font-normal leading-[25px] text-[#8f97a8]">
            {subtitle}
          </span>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
          {icon}
        </div>
      </div>
    </a>
  );
}
