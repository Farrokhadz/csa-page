// src/components/LinkCard.jsx
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
    <div className="relative w-full">
      <AccentGlow from={accentFrom} to={accentTo} />

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        dir="ltr"
        className="glass-card relative z-10 flex h-[79px] w-full items-center justify-between rounded-xl px-4 py-4 pl-5 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-brand]"
      >
        <ArrowIcon />

        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end text-right">
            <span className="font-medium text-[14px] leading-[25px] text-[#f7f9fc]">
              {title}
            </span>
            <span className="-mt-[3px] text-[11px] leading-[25px] text-[#8f97a8]">
              {subtitle}
            </span>
          </div>

          {/* بدون هیچ پس‌زمینه یا دایره‌ی اضافه — خودِ آیکون برند (که دایره‌ی
              رنگی خودشو داره) دقیقاً تو یه جعبه‌ی ۴۰×۴۰ وسط‌چین می‌شه */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center">
            {icon}
          </div>
        </div>
      </a>
    </div>
  );
}
