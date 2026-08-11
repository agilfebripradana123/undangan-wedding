import { useMemo } from "react";

export function useGuestName() {
  return useMemo(() => {
    const pathname = window.location.pathname;

    const basePath = "/undangan-wedding/";
    const guestSlug = pathname.startsWith(basePath)
      ? pathname.slice(basePath.length)
      : "";

    if (!guestSlug) {
      return "Tamu Undangan";
    }

    const guestName = guestSlug
      .split("-")
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    return guestName;
  }, []);
}

export default useGuestName;
