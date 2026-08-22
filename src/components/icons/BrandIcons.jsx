import telegramIcon from "../../assets/icons/telegram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import emailIcon from "../../assets/icons/email.svg";
import giftIcon from "../../assets/icons/gift.svg";

// سایز 32x32 دقیقاً طبق فریم داخلی آیکون‌ها توی دامپ فیگما
// (مثلاً "Telegram size=32x32 pos=(4,4)" داخل اسلات 40x40)
const common = { width: 32, height: 32, "aria-hidden": true };

export function TelegramIcon() {
  return <img src={telegramIcon} alt="" {...common} />;
}

export function LinkedinIcon() {
  return <img src={linkedinIcon} alt="" {...common} />;
}

export function InstagramIcon() {
  return <img src={instagramIcon} alt="" {...common} />;
}

export function EmailIcon() {
  return <img src={emailIcon} alt="" {...common} />;
}

export function GiftIcon() {
  return <img src={giftIcon} alt="" {...common} />;
}
