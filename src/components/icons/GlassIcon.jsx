// src/components/icons/GlassIcon.jsx
/**
 * دایره‌ی شیشه‌ای دور هر آیکن: پس‌زمینه‌ی روشن نیمه‌شفاف روی کارت تیره + گلیف سفید.
 * سایز 40 برای داخل کارت‌های لینک و 60 برای نوار سوشال بالای صفحه استفاده می‌شه.
 */
export default function GlassIcon({ children, size = 40 }) {
  const isLarge = size >= 60;
  return (
    <div
      className="grid shrink-0 place-items-center text-white"
      style={{
        width: size,
        height: size,
        borderRadius: isLarge ? 25 : 9999,
        background: "rgba(255,255,255,0.14)",
        boxShadow:
          "inset 0 0 0 1px rgba(255,255,255,0.08), 0 4px 20px rgba(0,0,0,0.25)",
      }}
    >
      {children}
    </div>
  );
}
