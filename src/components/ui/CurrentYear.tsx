"use client";

import { useEffect, useState } from "react";

export function CurrentYear() {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setYear(String(new Date().getFullYear()));
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  return <>{year}</>;
}
