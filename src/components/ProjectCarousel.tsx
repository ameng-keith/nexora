"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/constants/projects";

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const total = projects.length;

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  const activeProject = projects[activeIndex];

  // Helper to compute circular distance: -2, -1, 0, 1, 2
  const getOffset = (index: number) => {
    let diff = (index - activeIndex) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  if (!mounted) {
    return (
      <section id="showcase" className="w-full py-20 min-h-[500px] flex items-center justify-center">
        <div className="text-foreground/40 font-mono text-sm">Loading Showcase...</div>
      </section>
    );
  }

  const spacing = isMobile ? 140 : 280;

  return (
    <section 
      id="showcase" 
      className="w-full py-12 md:py-20 flex flex-col justify-between rounded-[24px] bg-card/70 border border-white/5 backdrop-blur-md px-4 md:px-12 my-12 overflow-hidden relative shadow-2xl"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* === Top Bar: Name & Project Info matching user's sketch === */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 z-10 mb-8 md:mb-12">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-mono px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
              {activeProject.category || "Showcase"}
            </span>
            <span className="text-xs text-foreground/50 font-mono">
              0{activeIndex + 1} / 0{total}
            </span>
          </div>

          {/* Active Project Title (名称) */}
          <motion.h2 
            key={activeProject.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground flex items-center gap-3"
          >
            {activeProject.name}
          </motion.h2>

          {activeProject.tagline && (
            <motion.p
              key={activeProject.tagline}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="text-sm md:text-base text-foreground/70 max-w-xl"
            >
              {activeProject.tagline}
            </motion.p>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          {activeProject.link && (
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm px-4 py-2.5 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
            >
              <span>Explore</span>
              <ExternalLink size={14} />
            </a>
          )}
          <button
            onClick={handlePrev}
            aria-label="Previous project"
            className="p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors border border-white/10"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next project"
            className="p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors border border-white/10"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* === 3D Coverflow Cards Container === */}
      <div className="relative w-full h-[360px] md:h-[480px] lg:h-[520px] flex items-center justify-center">
        {projects.map((project, index) => {
          const offset = getOffset(index);
          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);

          // We only show -2, -1, 0, 1, 2 cards (5 cards total as in sketch)
          if (absOffset > 2) return null;

          const xOffset = offset * spacing;
          const scale = isCenter ? 1.05 : absOffset === 1 ? 0.88 : 0.72;
          const zIndex = isCenter ? 30 : absOffset === 1 ? 20 : 10;
          const opacity = isCenter ? 1 : absOffset === 1 ? 0.85 : 0.5;
          const rotateY = offset * -8;

          return (
            <motion.div
              key={project.name}
              className="absolute w-[220px] md:w-[320px] lg:w-[360px] h-[300px] md:h-[420px] lg:h-[460px] rounded-[24px] cursor-pointer select-none"
              style={{
                zIndex,
              }}
              animate={{
                x: xOffset,
                scale,
                opacity,
                rotateY,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
              }}
              onClick={() => setActiveIndex(index)}
              whileHover={isCenter ? { scale: 1.08 } : { opacity: 0.95 }}
            >
              {/* Card Container with Sci-Fi border */}
              <div 
                className={`w-full h-full relative rounded-[24px] overflow-hidden transition-all duration-300 ${
                  isCenter
                    ? "ring-2 ring-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.3)]"
                    : "ring-1 ring-white/10 hover:ring-white/20"
                }`}
              >
                <Image
                  src={project.imgSrc}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 220px, 360px"
                  className="object-cover"
                  priority={isCenter}
                />

                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Card Title & Meta at bottom of each card */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-amber-400/90 mb-1">
                    {project.category || "Project"}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                    {project.name}
                  </h3>
                </div>

                {/* Center Badge Indicator */}
                {isCenter && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/50 text-[10px] uppercase font-mono tracking-wider text-amber-300">
                    Active
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-6 md:mt-8 z-10">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Jump to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === activeIndex
                ? "w-8 h-2 bg-amber-400"
                : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
