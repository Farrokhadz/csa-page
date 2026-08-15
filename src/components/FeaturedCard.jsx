// src/components/FeaturedCard.jsx
import PenIcon from "./icons/PenIcon";

export default function FeaturedCard() {
  return (
    <div className="relative mt-8">
      {/* بج شناور بالای کارت */}
      <span
        className="absolute -top-2 right-5 z-10 rounded-xl px-3 py-1 text-[8px] font-medium text-white shadow-[0_17.7px_17.7px_rgba(111,119,135,0.14)]"
        style={{
          background:
            "linear-gradient(135deg, var(--color-badge-start), var(--color-badge-end))",
        }}
      >
        جدیدترین فعالیت
      </span>

      <div className="glass-card relative overflow-hidden rounded-xl px-4 py-4 pr-5">
        {/* تصویر پس‌زمینه‌ی کارت (جایگزین Rectangle 1 تصویر پروژه) */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "linear-gradient(180deg, rgba(46,91,255,0.35), rgba(19,20,25,0.1))",
          }}
        />
        <div className="relative flex flex-col items-center gap-2 pt-2 text-center">
          <h3 className="text-[15px] font-medium leading-[25px] text-[--color-text-primary]">
            پروژهٔ دستخط
          </h3>
          <p className="text-[11px] leading-[25px] text-[--color-text-muted]">
            سهم تو از توسعهٔ هوش مصنوعی فارسی
          </p>
        </div>
        <div className="relative mt-2 flex justify-start">
          <a
            href="#"
            className="flex items-center gap-1 rounded-xl px-4 py-1.5
            text-[11px] font-medium text-white
            shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-transform
            hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brand-start), var(--color-brand-end))",
            }}
          >
            مشارکت کن!
            <PenIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
