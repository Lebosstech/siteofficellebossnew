"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "@/lib/motion/tokens";
export function MotionController() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("[data-chapter]").forEach((el) => {
        gsap.fromTo(
          el.querySelectorAll("[data-reveal]"),
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: motion.reveal,
            stagger: motion.stagger,
            ease: motion.ease,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
        gsap.fromTo(
          el.querySelectorAll(".chapter-line"),
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 50%",
              scrub: true,
            },
          },
        );
      });
    });
    return () => mm.revert();
  }, []);
  return null;
}
