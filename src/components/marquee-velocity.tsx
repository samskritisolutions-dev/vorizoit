"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import React, { useRef } from "react";

const ITEMS = [
  "SOFTWARE DEVELOPMENT",
  "CLOUD SOLUTIONS",
  "DATA & ANALYTICS",
  "IT CONSULTING",
];

interface MarqueeVelocityProps {
  baseVelocity?: number;
}

export function MarqueeVelocity({ baseVelocity = 2.2 }: MarqueeVelocityProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });

  // Map scroll velocity to a multiplier factor
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // 4 identical segments = wrap every -25%
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef<number>(-1);

  useAnimationFrame((_, delta) => {
    const v = velocityFactor.get();

    // Reverses or accelerates direction depending on scroll direction
    if (v < -0.8) {
      directionFactor.current = 1; // Scrolling up -> moves right
    } else if (v > 0.8) {
      directionFactor.current = -1; // Scrolling down -> moves left
    }

    // Base glide speed + velocity acceleration proportional to scroll speed
    const boost = Math.min(Math.abs(v), 8);
    const speed = baseVelocity * (1 + boost * 1.8);
    const moveBy = directionFactor.current * speed * (delta / 1000);

    baseX.set(baseX.get() + moveBy);
  });

  // Single segment containing all capabilities
  const renderSegment = (keyPrefix: string) => (
    <div className="ticker-segment" key={keyPrefix}>
      {ITEMS.map((item, i) => (
        <React.Fragment key={`${keyPrefix}-${i}`}>
          <span>{item}</span>
          <i>✳</i>
        </React.Fragment>
      ))}
      {ITEMS.map((item, i) => (
        <React.Fragment key={`${keyPrefix}-b-${i}`}>
          <span>{item}</span>
          <i>✳</i>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="ticker" aria-label="Our capabilities">
      <motion.div className="ticker-track" style={{ x }}>
        {renderSegment("seg-1")}
        {renderSegment("seg-2")}
        {renderSegment("seg-3")}
        {renderSegment("seg-4")}
      </motion.div>
    </div>
  );
}
