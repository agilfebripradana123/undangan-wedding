import { useMemo } from "react";

// Generates SVG flower clusters for botanical background ornaments
export function CornerOrnament({ position = "top-left", rotation = 0 }) {
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  // Lightweight SVG ornament (inline, no network request)
  const svg = useMemo(
    () => (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 h-32 md:w-48 md:h-48 opacity-40"
      >
        <path
          d="M60 20 C70 25, 80 45, 75 60 C70 75, 50 80, 40 70"
          stroke="#183B63"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
          fill="none"
        />
        <path
          d="M40 55 C45 50, 55 45, 65 50"
          stroke="#3a6b9a"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
          fill="none"
        />
        <circle cx="55" cy="35" r="3" fill="#183B63" opacity="0.4" />
        <circle cx="70" cy="45" r="2" fill="#3a6b9a" opacity="0.3" />
      </svg>
    ),
    [],
  );

  return (
    <div
      className={`absolute ${positions[position]} pointer-events-none`}
      style={{ transform: rotation ? `rotate(${rotation}deg)` : undefined }}
      aria-hidden="true"
    >
      {svg}
    </div>
  );
}
