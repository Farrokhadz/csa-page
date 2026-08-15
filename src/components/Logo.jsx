import logoSvg from "../assets/logo.svg";

// logo.svg viewBox is now tightly cropped to the visible maze shape (192.5 x 176.6,
// including a small 10px safety margin — no more baked-in shadow padding).
const ASPECT_RATIO = 176.6 / 192.5;

export default function Logo({ size = 173 }) {
  return (
    <div
      className="grid place-items-center"
      style={{
        width: size,
        height: size * ASPECT_RATIO,
        filter: "drop-shadow(0 31.5px 82.7px rgba(26,28,35,0.9))",
      }}
    >
      <img
        src={logoSvg}
        alt="لوگوی انجمن علمی علوم کامپیوتر"
        className="h-full w-full"
      />
    </div>
  );
}
