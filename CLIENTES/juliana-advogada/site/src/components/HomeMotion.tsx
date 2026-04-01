"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HomeMotion({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      const sections = document.querySelectorAll("[data-animate='section']");
      sections.forEach((section) => {
        const heading = section.querySelector("h2");
        const rule = section.querySelector(".rule");
        const eyebrow = section.querySelector(".eyebrow");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
          },
        });

        if (rule) tl.fromTo(rule, { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 0.5 });
        if (eyebrow) tl.fromTo(eyebrow, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.2");
        if (heading) tl.fromTo(heading, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.2");
      });

      // Stagger children
      const staggers = document.querySelectorAll("[data-animate='stagger']");
      staggers.forEach((container) => {
        gsap.fromTo(
          container.children,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: container, start: "top 85%" },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
