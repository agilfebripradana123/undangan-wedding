import { useEffect, useState } from "react";

export function useGuestName() {
  const [guestName, setGuestName] = useState("Tamu Undangan");

  useEffect(() => {
    const path = window.location.pathname;

    // Ambil nama dari URL
    const slug = path.replace(/^\/+|\/+$/g, "");

    if (slug) {
      const name = slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      setGuestName(name);
    }
  }, []);

  return guestName;
}

export const useguestName = useGuestName;
