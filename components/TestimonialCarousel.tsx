"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./Shard/TestimonialCard";
import CommonHeading from "./Shard/comonHeading";

type TestimonialItem = {
  rating: number;
  quote: string;
  name: string;
  imageSrc: string;
  role?: string;
};

type Props = {
  testimonials: TestimonialItem[];
};

export default function TestimonialCarousel({ testimonials }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalMs = 2600;
  const count = testimonials.length;

  const positions = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < count; i++) arr.push(relative(i, index, count));
    return arr;
  }, [index, count]);

  function relative(i: number, active: number, len: number) {
    let diff = i - active;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    return diff;
  }

  const next = () => setIndex((p) => (p + 1) % count);
  const prev = () => setIndex((p) => (p - 1 + count) % count);

  // Autoplay
  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => {
      if (!paused) next();
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, intervalMs, count]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  const mapStyle = (pos: number) => {
    const clamped = Math.max(-2, Math.min(2, pos));

    // Responsive x-distance for smaller screens
    const getX = () => {
      if (typeof window === "undefined") return 0;
      const width = window.innerWidth;

      if (width < 640) {
        // Mobile
        if (clamped === -2) return -260;
        if (clamped === -1) return -180;
        if (clamped === 0) return 0;
        if (clamped === 1) return 180;
        if (clamped === 2) return 260;
      } else if (width < 1024) {
        // Tablet
        if (clamped === -2) return -400;
        if (clamped === -1) return -250;
        if (clamped === 0) return 0;
        if (clamped === 1) return 250;
        if (clamped === 2) return 400;
      } else {
        // Large screens (original distances)
        if (clamped === -2) return -580;
        if (clamped === -1) return -340;
        if (clamped === 0) return 0;
        if (clamped === 1) return 340;
        if (clamped === 2) return 580;
      }
      return 0;
    };

    const x = getX();
    const scale =
      clamped === 0 ? 1 : clamped === -1 || clamped === 1 ? 0.95 : 0.88;
    const opacity =
      clamped === 0 ? 1 : clamped === -1 || clamped === 1 ? 0.8 : 0.45;
    const z = clamped === 0 ? 50 : clamped === -1 || clamped === 1 ? 30 : 10;
    const blur = clamped === 0 ? 0 : clamped === -1 || clamped === 1 ? 1 : 2;

    return { x, scale, opacity, z, blur, hidden: Math.abs(pos) > 2 };
  };

  return (
    <section className="text-center pt-25">
      <div className="mb-10"><CommonHeading>Real Franchisees, Real Results</CommonHeading></div>
      <div
        className="relative max-w-[1800px]  mx-auto px-2 sm:px-4 lg:px-8 cursor-pointer"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative h-[240px] sm:h-[400px] md:h-[440px] lg:h-[460px] xl:h-[500px] overflow-visible">
          {testimonials.map((t, i) => {
            const pos = positions[i];
            const { x, scale, opacity, z, blur, hidden } = mapStyle(pos);

            // Responsive width
            const cardWidthClass =
              "w-[280px] sm:w-[360px] md:w-[440px] lg:w-[600px] xl:w-[680px]";

            return (
              <motion.div
                key={i}
                className="absolute left-1/2 top-0 -translate-x-1/2"
                style={{
                  zIndex: z,
                  filter: blur ? `blur(${blur}px)` : undefined,
                }}
                initial={false}
                animate={{ x, scale, opacity }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
                drag={pos === 0 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragStart={() => pos === 0 && setPaused(true)}
                onDragEnd={(_, info) => {
                  if (pos !== 0) return;
                  setPaused(false);
                  const threshold = 60;
                  const vThreshold = 350;
                  const dx = info.offset.x;
                  const vx = info.velocity.x;
                  if (dx < -threshold || vx < -vThreshold) next();
                  else if (dx > threshold || vx > vThreshold) prev();
                }}
              >
                {!hidden && (
                  <div className={cardWidthClass}>
                    <TestimonialCard
                      rating={t.rating}
                      quote={t.quote}
                      name={t.name}
                      imageSrc={t.imageSrc}
                      role={t.role ?? "Doctor"}
                      interactive={false}
                      className={
                        pos === 0
                          ? "shadow-2xl ring-4 ring-white/20"
                          : "shadow-xl"
                      }
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
