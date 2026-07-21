"use client";

import { useEffect } from "react";

export default function FadeUpAnimator() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".fade-up"));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
