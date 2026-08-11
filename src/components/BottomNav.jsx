import { navItems } from "../data/navData";

export function BottomNav() {
  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0 z-50
        border-t border-[#183B63]/10
        bg-[#F8F5ED]/95
        backdrop-blur-md
        shadow-[0_-4px_20px_rgba(24,59,99,0.08)]
      "
    >
      <div
        className="
          mx-auto flex w-full
          items-center justify-center
          gap-0.5
          px-1.5 py-2

          md:max-w-3xl
          md:gap-3
          md:px-2
        "
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="
              flex min-w-0 flex-1
              flex-col items-center justify-center
              gap-1
              rounded-xl
              px-0.5
              py-1.5
              text-[#183B63]/60
              transition-all duration-200
              hover:bg-[#183B63]/5
              hover:text-[#183B63]

              md:flex-none
              md:w-24
              md:px-2
              md:py-2
            "
          >
            <span className="material-symbols-outlined text-[19px] md:text-[21px]">
              {item.icon}
            </span>

            <span
              className="
                block
                text-center
                text-[8px]
                font-medium
                leading-tight
                whitespace-nowrap

                md:text-[10px]
              "
            >
              {/* Mobile label */}
              <span className="md:hidden">
                {item.mobileLabel || item.label}
              </span>

              {/* Desktop label */}
              <span className="hidden md:inline">{item.label}</span>
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
