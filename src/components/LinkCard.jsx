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
    <div className="relative w-full">
      {/* باکس رنگی، کاملاً مستقل، پشت کارت شیشه‌ای — طبق فیگما فقط توسط
          کل لیست کلیپ می‌شه، نه توسط خود این کارت، برای همین overflow-hidden
          روش نمی‌ذاریم و می‌ذاریم کمی از لبه بزنه بیرون / از پشت شیشه دیده بشه */}
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
          <div className="flex flex-col items-end gap-0 text-right">
            <span className="font-medium text-[14px] leading-[25px] text-[#f7f9fc]">
              {title}
            </span>
            <span className="text-[11px] leading-[25px] text-[#8f97a8]">
              {subtitle}
            </span>
          </div>
          <GlassIcon size={40}>{icon}</GlassIcon>
        </div>
      </a>
    </div>
  );
}
