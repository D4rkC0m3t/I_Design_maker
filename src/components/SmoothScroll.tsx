"use client";
import { createContext, useContext, useEffect, useRef, useCallback, useState } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollContextValue {
  scrollTo: (target: string | number, options?: { offset?: number; duration?: number }) => void;
  scrollY: number;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollTo: () => {},
  scrollY: 0,
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export default function SmoothScroll({ children }: { children?: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      setScrollY(lenis.scroll);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback(
    (target: string | number, options?: { offset?: number; duration?: number }) => {
      const lenis = lenisRef.current;
      if (lenis) {
        lenis.scrollTo(target, {
          offset: options?.offset ?? -80,
          duration: options?.duration ?? 1.2,
        });
      } else {
        if (typeof target === "string") {
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: target, behavior: "smooth" });
        }
      }
    },
    [],
  );

  return (
    <SmoothScrollContext.Provider value={{ scrollTo, scrollY }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
