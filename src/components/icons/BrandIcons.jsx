// src/components/icons/BrandIcons.jsx
const common = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true,
};

export function TelegramIcon() {
  return (
    <svg {...common}>
      <path
        d="M21 4.5 3 11.2c-.7.27-.7 1.28.01 1.53l4.24 1.48 1.7 5.3c.2.63 1 .8 1.44.3l2.4-2.7 4.36 3.2c.55.4 1.33.1 1.47-.57l3-14.1c.16-.75-.6-1.36-1.62-.11Z"
        fill="#ffffff"
      />
      <path
        d="M8.25 14.2 17 8"
        stroke="#131419"
        strokeOpacity="0.35"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LinkedinIcon() {
  return (
    <svg {...common}>
      <rect x="6.5" y="10" width="2.3" height="7.5" fill="#ffffff" />
      <circle cx="7.65" cy="6.9" r="1.35" fill="#ffffff" />
      <path
        d="M11 10h2.2v1.1c.5-.8 1.4-1.3 2.5-1.3 2 0 3 1.3 3 3.6v4.1h-2.3v-3.7c0-1.1-.4-1.8-1.4-1.8-.8 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v3.5H11V10Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg {...common}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="#ffffff"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="12" r="4" stroke="#ffffff" strokeWidth="1.4" />
      <circle cx="16.6" cy="7.4" r="1.1" fill="#ffffff" />
    </svg>
  );
}
