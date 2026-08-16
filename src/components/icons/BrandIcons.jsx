// src/components/icons/BrandIcons.jsx
import telegramIcon from "../../assets/icons/telegram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import emailIcon from "../../assets/icons/email.svg";
import giftIcon from "../../assets/icons/gift.svg";

const common = { width: 20, height: 20, "aria-hidden": true };

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
