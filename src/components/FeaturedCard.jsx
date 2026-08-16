import PenIcon from "./icons/PenIcon";
import featuredCardPhoto from "../assets/featured-card-photo.png";
import featuredCardMask from "../assets/featured-card-mask.png";

export default function FeaturedCard() {
  return (
    <div className="relative mt-8">
      {/* بج شناور بالای کارت - سمت چپ (طبق مختصات واقعی فیگما: x=20 نزدیک لبه‌ی چپ) */}
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
        className="relative overflow-hidden rounded-xl pt-4 pr-4 pb-4 pl-5"
        style={{
          background: "rgba(37, 39, 48, 1)",
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
          boxShadow: "0 4px 50px rgba(0,0,0,0.25)",
        }}
      >
        {/* عکس واقعی پروژه، با ماسک محوکننده‌ی همون فیگما ترکیب شده (mask-image روی خود
            عکس، نه یه لایه‌ی جدا) - این‌جوری فقط جایی که عکس دیده می‌شه محو/واضح می‌شه.
            inset-0 نسبت به کل باکس این کارت (330x130) حساب می‌شه، نه فقط ناحیه‌ی پدینگ‌شده،
            پس عکس دقیقاً هم‌سایز کل کارته، نه کوچیک‌تر. */}
        <img
          src={featuredCardPhoto}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          style={{
            WebkitMaskImage: `url(${featuredCardMask})`,
            maskImage: `url(${featuredCardMask})`,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
        {/* بلوک متن: طبق مختصات دقیق فیگما (Frame 25: عرض 199px، از x=115 که با پدینگ
            چپ کارت 95px فاصله می‌گیره) - چسبیده به لبه‌ی راست، نه وسط کل کارت */}
        <div className="relative ml-[95px] w-[199px] pt-2 text-right">
          <h3 className="font-stretch-semi text-[15px] font-medium leading-[25px] text-[#f7f9fc]">
            پروژهٔ دستخط
          </h3>
          <p className="text-[11px] font-normal leading-[25px] text-[#8f97a8]">
            سهم تو از توسعهٔ هوش مصنوعی فارسی
          </p>
        </div>
        {/* دکمه‌ی CTA - سمت چپ کارت (justify-end چون در RTL "end" یعنی چپ) */}
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
