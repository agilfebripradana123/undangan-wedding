export function SectionDivider() {
  return (
    <div className="relative z-20 h-0">
      <img
        src={`${import.meta.env.BASE_URL}assets/decorations/flower-divider.png`}
        alt=""
        aria-hidden="true"
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[420px]
          sm:w-[600px]
          md:w-[650px]
          lg:w-[750px]
          max-w-none
          pointer-events-none
          select-none
        "
      />
    </div>
  );
}

export default SectionDivider;
