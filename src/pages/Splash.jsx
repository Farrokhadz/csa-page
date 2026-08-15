// src/pages/Splash.jsx
import Logo from "../components/Logo";

export default function Splash() {
  return (
    <main className="app-background mx-auto flex min-h-dvh w-full max-w-[402px] flex-col items-center justify-center gap-6 px-9">
      <Logo size={192} />
      <div className="flex flex-col gap-1 text-center">
        <h1 className="text-[16px] font-light leading-[25px] text-white">
          انجمن علمی علوم کامپیوتر دانشگاه رازی کرمانشاه
        </h1>
      </div>
    </main>
  );
}