"use client";

import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Props {
  value: string;
  label: string;
}

export default function Counter({ value, label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const numericPart = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;
    let frame: number;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericPart));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setCount(numericPart);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, numericPart]);

  return (
    <div
      ref={ref}
      className="text-center py-6 px-4 rounded-xl border border-navy-700 hover:-translate-y-1 transition-all duration-300 hover:border-gold-400 hover:shadow-lg hover:shadow-gold-400/10 cursor-default"
    >
      <p className="font-heading text-4xl font-bold text-gold-400 mb-1">
        {isInView ? count : numericPart}{suffix}
      </p>
      <p className="text-white text-sm">{label}</p>
    </div>
  );
}
