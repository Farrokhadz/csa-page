import Logo from "./Logo";

export default function Header({ showTagline = true }) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <Logo size={173} />
      <div className="mt-4 flex flex-col gap-1">
        <h1 className="text-[16px] font-light leading-[25px] text-[--color-text-primary]">
          انجمن علمی علوم کامپیوتر
        </h1>
        <p className="text-[14px] font-light leading-[25px] text-[--color-text-secondary]">
          دانشگاه رازی کرمانشاه
        </p>
      </div>
      {showTagline && (
        <p className="text-[13px] leading-[25px] text-[--color-text-muted]">
          یادگیری، تجربه و خلق مسیرهای تازه
        </p>
      )}
    </header>
  );
}
