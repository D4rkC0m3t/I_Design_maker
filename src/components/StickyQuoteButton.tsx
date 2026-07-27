"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { useSmoothScroll } from "@/components/SmoothScroll";

export default function StickyQuoteButton() {
  const { scrollY, scrollTo } = useSmoothScroll();
  const visibleRef = useRef(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const shouldShow = scrollY > 600;
    if (shouldShow !== visibleRef.current) {
      visibleRef.current = shouldShow;
      setShow(shouldShow);
    }
  }, [scrollY]);

  const handleClick = useCallback(() => {
    scrollTo("#contact");
  }, [scrollTo]);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden pointer-events-none">
      <div className="px-4 pb-4 pointer-events-auto">
        <button
          onClick={handleClick}
          className="w-full py-4 rounded-2xl text-sm font-bold shadow-[0_-4px_30px_rgba(255,180,0,0.4)] flex items-center justify-center gap-2 text-[#111] relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #FFB400, #E6A200)" }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Get Free Quote
        </button>
      </div>
    </div>
  );
}
