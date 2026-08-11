export function CornerOrnament({
  position = 'top-left',
  rotation = 0,
}) {
  const positions = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  }

  return (
    <div
      className={`
        absolute
        ${positions[position]}
        pointer-events-none
        select-none
        z-0
        overflow-hidden
      `}
      style={{
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 180 180"
        xmlns="http://www.w3.org/2000/svg"
        className="
          w-40
          h-40
          sm:w-48
          sm:h-48
          md:w-56
          md:h-56
          lg:w-64
          lg:h-64
          opacity-40
        "
        fill="none"
      >
        {/* Main curved stem */}
        <path
          d="
            M 8 168
            C 25 145, 35 125, 42 102
            C 50 76, 55 48, 45 15
          "
          stroke="#183B63"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* Secondary stem */}
        <path
          d="
            M 38 115
            C 62 108, 82 91, 91 65
            C 97 48, 95 30, 88 14
          "
          stroke="#183B63"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* Small branch */}
        <path
          d="
            M 28 137
            C 48 137, 67 128, 78 114
          "
          stroke="#3A6B9A"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Leaf 1 */}
        <path
          d="
            M 43 103
            C 30 95, 25 84, 29 73
            C 40 76, 47 87, 43 103
            Z
          "
          fill="#3A6B9A"
          opacity="0.22"
        />

        {/* Leaf 2 */}
        <path
          d="
            M 48 84
            C 59 73, 70 71, 79 77
            C 70 88, 59 91, 48 84
            Z
          "
          fill="#183B63"
          opacity="0.18"
        />

        {/* Leaf 3 */}
        <path
          d="
            M 39 62
            C 27 57, 21 47, 24 37
            C 35 40, 42 49, 39 62
            Z
          "
          fill="#3A6B9A"
          opacity="0.2"
        />

        {/* Leaf 4 */}
        <path
          d="
            M 57 111
            C 66 99, 78 95, 88 100
            C 81 111, 69 116, 57 111
            Z
          "
          fill="#183B63"
          opacity="0.16"
        />

        {/* Small flower */}
        <g transform="translate(42 28)">
          <circle
            cx="0"
            cy="0"
            r="3"
            fill="#183B63"
            opacity="0.55"
          />

          <ellipse
            cx="0"
            cy="-7"
            rx="3.5"
            ry="6"
            fill="#3A6B9A"
            opacity="0.2"
          />

          <ellipse
            cx="7"
            cy="0"
            rx="6"
            ry="3.5"
            fill="#3A6B9A"
            opacity="0.2"
          />

          <ellipse
            cx="0"
            cy="7"
            rx="3.5"
            ry="6"
            fill="#3A6B9A"
            opacity="0.2"
          />

          <ellipse
            cx="-7"
            cy="0"
            rx="6"
            ry="3.5"
            fill="#3A6B9A"
            opacity="0.2"
          />
        </g>

        {/* Tiny decorative dots */}
        <circle
          cx="91"
          cy="65"
          r="2"
          fill="#183B63"
          opacity="0.3"
        />

        <circle
          cx="78"
          cy="114"
          r="1.8"
          fill="#3A6B9A"
          opacity="0.35"
        />

        <circle
          cx="29"
          cy="73"
          r="1.5"
          fill="#183B63"
          opacity="0.3"
        />
      </svg>
    </div>
  )
}

export default CornerOrnament