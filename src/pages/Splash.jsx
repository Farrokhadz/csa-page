// src/pages/Splash.jsx
import Logo from "../components/Logo";
import MazePattern from "../components/MazePattern";

export default function Splash() {
  return (
    <main className="app-background relative mx-auto flex min-h-dvh w-full max-w-[402px] flex-col items-center justify-center overflow-hidden px-9">
      <MazePattern />

      <div className="relative flex flex-col items-center gap-8">
        <Logo size={192} />
        <div className="flex flex-col items-center gap-0 text-center">
          <p className="text-[16px] font-light leading-[25px] text-white">
            انجمن علمی علوم کامپیوتر
          </p>
          <p className="text-[16px] font-light leading-[25px] text-white">
            دانشگاه رازی کرمانشاه
          </p>
        </div>
      </div>
    </main>
  );
}
