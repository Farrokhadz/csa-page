// src/pages/Splash.jsx
import Logo from "../components/Logo";
import MazePattern from "../components/MazePattern";

// Lahzeh-Family variable font axes, tuned for this screen.
const headingTextStyle = {
  fontVariationSettings: `"wght" 500, "STRE" 180`,
};

export default function Splash() {
  return (
    <main className="app-background relative mx-auto flex min-h-dvh w-full max-w-[402px] flex-col items-center justify-center overflow-hidden px-9">
      <MazePattern />

      <div className="relative flex flex-col items-center gap-[16px]">
        <Logo size={300} />
        <div className="flex flex-col items-center gap-0 text-center">
          <p
            className="text-[16px] leading-[25px] text-[#f7f9fc]"
            style={headingTextStyle}
          >
            انجمن علمی علوم کامپیوتر
          </p>
          <p
            className="text-[14px] leading-[25px] text-[#aab1c0]"
            style={headingTextStyle}
          >
            دانشگاه رازی کرمانشاه
          </p>
        </div>
      </div>
    </main>
  );
}
