import Logo from "./Logo";

export default function Header({ showTagline = true }) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <Logo size={173} />
      <div className="mt-4 flex flex-col gap-1">
        <h1 className="font-stretch-semi text-[16px] font-medium leading-[25px] text-[#f7f9fc]">
          انجمن علمی علوم کامپیوتر
        </h1>
        <p className="font-stretch-semi text-[14px] font-medium leading-[25px] text-[#aab1c0]">
          دانشگاه رازی کرمانشاه
        </p>
      </div>
      {showTagline && (
        <p className="text-[13px] leading-[25px] text-[#aab1c0]">
          یادگیری، تجربه و خلق مسیرهای تازه
        </p>
      )}
    </header>
  );
}
