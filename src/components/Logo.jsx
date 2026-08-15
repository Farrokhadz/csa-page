import logoSvg from "../assets/logo.svg";

export default function Logo({ size = 173 }) {
  return (
    <div
      className="grid place-items-center"
      style={{
        width: size,
        height: size * (157 / 173),
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
