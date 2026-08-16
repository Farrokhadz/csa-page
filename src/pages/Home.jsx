// src/pages/Home.jsx
import Header from "../components/Header";
import FeaturedCard from "../components/FeaturedCard";
import LinkCard from "../components/LinkCard";
import MazePattern from "../components/MazePattern";
import {
  TelegramIcon,
  LinkedinIcon,
  InstagramIcon,
  EmailIcon,
  GiftIcon,
} from "../components/icons/BrandIcons";

const LINKS = [
  {
    title: "کانال تلگرام",
    subtitle: "اطلاع‌رسانی سریع رویدادها و اخبار انجمن",
    href: "https://t.me/",
    icon: <TelegramIcon />,
    accentFrom: "#8ad7fe",
    accentTo: "#00aaff",
  },
  {
    title: "صفحهٔ لینکدین",
    subtitle: "شبکه‌سازی و فرصت‌های شغلی",
    href: "https://linkedin.com/",
    icon: <LinkedinIcon />,
    accentFrom: "#0059ff",
    accentTo: "#003699",
  },
  {
    title: "صفحهٔ اینستاگرام",
    subtitle: "پشت صحنهٔ رویدادها و محتوای تصویری",
    href: "https://instagram.com/",
    icon: <InstagramIcon />,
    accentFrom: "#fa317b",
    accentTo: "#c131fa",
  },
  {
    title: "ایمیل انجمن",
    subtitle: "درخواست‌های همکاری و رسمی",
    href: "mailto:info@example.com",
    icon: <EmailIcon />,
    accentFrom: "#fb413d",
    accentTo: "#fe5d90",
  },
];

const DONATE_LINK = {
  title: "حمایت از فعالیت‌های انجمن",
  subtitle: "مشارکت مالی در برگزاری رویدادهای رایگان",
  href: "#",
  icon: <GiftIcon />,
  accentFrom: "#78ff95",
  accentTo: "#00ff37",
};

export default function Home() {
  return (
    <main className="app-background relative mx-auto flex min-h-dvh w-full max-w-[402px] flex-col items-center overflow-hidden px-9 pb-8 pt-[100px]">
      {/* بافت ماز فقط توی نیمه‌ی بالایی صفحه، با محو شدن تدریجی رو به پایین
          (دقیقاً طبق عکس مرجع: پایین صفحه یک‌دست تیره‌ست، بدون الگو) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[620px] overflow-hidden">
        <MazePattern />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, var(--color-bg-default) 92%)",
          }}
        />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center">
        <Header />
        <FeaturedCard />

        {/* طبق فیگما، فاصله‌ی کارت ویژه تا اولین کارت لینک ۳۲px هست، نه ۳۶px */}
        <section className="mt-8 flex w-full flex-col gap-3">
          {LINKS.map((link) => (
            <LinkCard key={link.title} {...link} />
          ))}
        </section>

        {/* کارت حمایت مالی: طبق طرح، ۲۴px فاصله از کارت قبلی داره، نه ۱۲px مثل بقیه */}
        <div className="mt-6 w-full">
          <LinkCard {...DONATE_LINK} />
        </div>

        {/* فاصله‌ی کارت حمایت مالی تا فوتر هم ۳۲px هست، نه ۴۰px */}
        <footer className="mt-8 text-center text-[10px] font-medium leading-[25px] text-[#aab1c0]">
          طراحی شده توسط انجمن علمی علوم کامپیوتر دانشگاه رازی
        </footer>
      </div>
    </main>
  );
}
