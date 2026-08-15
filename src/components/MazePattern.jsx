// src/components/MazePattern.jsx
import mazePatternImg from "../assets/Mazepattern.png";

/**
 * بافت تزئینیِ پس‌زمینه‌ی صفحه‌ی اسپلش — اکسپورت واقعی از فیگما (Group 131).
 * به‌صورت یه لایه‌ی تمام‌صفحه پشت لوگو/متن قرار می‌گیره؛ pointer-events خاموشه
 * که کلیک‌ها رو نگیره، و aria-hidden چون کاملاً تزئینیه (برای screen reader معنی نداره).
 */
export default function MazePattern() {
  return (
    <img
      src={mazePatternImg}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
    />
  );
}
