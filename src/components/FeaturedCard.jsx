// src/components/FeaturedCard.jsx
import PenIcon from "./icons/PenIcon";
import featuredCardBg from "../assets/featured-card-bg.svg";

export default function FeaturedCard() {
  return (
    <div className="relative mt-8">
      <span
        className="absolute -top-2 left-5 z-10 rounded-xl px-3 py-1 text-[8px] font-medium text-white shadow-[0_17.7px_17.7px_rgba(111,119,135,0.14)]"
        style={{
          background:
            "linear-gradient(135deg, var(--color-badge-start), var(--color-badge-end))",
        }}
      >
        جدیدترین فعالیت
      </span>

      <div
        className="relative overflow-hidden rounded-xl px-4 py-4 pr-5"
        style={{
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
          boxShadow: "0 4px 50px rgba(0,0,0,0.25)",
        }}
      >
        <img
          src={featuredCardBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        />
        <div className="relative flex flex-col items-center gap-2 pt-2 text-center">
          <h3 className="font-stretch-semi text-[15px] font-medium leading-[25px] text-[--color-text-primary]">
            پروژهٔ دستخط
          </h3>
          <p className="text-[11px] font-normal leading-[25px] text-[--color-text-tertiary]">
            سهم تو از توسعهٔ هوش مصنوعی فارسی
          </p>
        </div>
        <div className="relative mt-2 flex justify-end">
          <a
            href="#"
            className="flex items-center gap-1 rounded-xl px-4 py-1.5 text-[11px] font-medium text-white shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brand-700), var(--color-interactive-primary))",
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
