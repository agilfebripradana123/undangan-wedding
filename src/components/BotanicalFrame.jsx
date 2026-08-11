export function BotanicalFrame() {
  const base =
    "absolute pointer-events-none select-none w-36 sm:w-40 md:w-48 lg:w-52 opacity-75";

  const floralImage = `${import.meta.env.BASE_URL}assets/ornaments/floral-blue.png`;

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-x-0
        bottom-0
        top-0
        z-0
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* TOP LEFT */}
      <img
        src={floralImage}
        alt=""
        className={`${base} left-0 top-0 rotate-180`}
      />

      {/* TOP RIGHT */}
      <img
        src={floralImage}
        alt=""
        className={`${base} right-0 top-0 scale-y-[-1]`}
      />

      {/* BOTTOM LEFT */}
      <img
        src={floralImage}
        alt=""
        className={`${base} bottom-0 left-0 scale-x-[-1]`}
      />

      {/* BOTTOM RIGHT */}
      <img
        src={floralImage}
        alt=""
        className={`${base} bottom-0 right-0`}
      />
    </div>
  );
}

export default BotanicalFrame;