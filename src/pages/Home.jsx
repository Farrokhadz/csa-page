import { Mail, Gift } from "lucide-react";
import Header from "../components/Header";
import FeaturedCard from "../components/FeaturedCard";
import LinkCard from "../components/LinkCard";
import {
  TelegramIcon,
  LinkedinIcon,
  InstagramIcon,
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
    accentTo: "#5f95f8",
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
    icon: <Mail size={18} />,
    accentFrom: "#fb413d",
    accentTo: "#fe5d90",
  },
  {
    title: "حمایت از فعالیت‌های انجمن",
    subtitle: "مشارکت مالی در برگزاری رویدادهای رایگان",
    href: "#",
    icon: <Gift size={18} />,
    accentFrom: "#78ff95",
    accentTo: "#00ff37",
  },
];

export default function Home() {
  return (
    <main className="app-background relative mx-auto flex min-h-dvh w-full max-w-[402px] flex-col items-center overflow-hidden px-9 pb-10 pt-16">
      <Header />
      <FeaturedCard />

      <section className="mt-9 flex w-full flex-col gap-3">
        {LINKS.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </section>

      <footer className="mt-10 text-center text-[10px] leading-[25px] text-[--color-text-muted]">
        طراحی شده توسط انجمن علمی علوم کامپیوتر دانشگاه رازی
      </footer>
    </main>
  );
}
