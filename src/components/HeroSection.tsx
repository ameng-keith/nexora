"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { heroVariants, textVariants, iconVariants } from "@/lib/animation/variants";
import { heroContent } from "@/lib/constants/siteContent";

export default function HeroSection() {
  return (
    <motion.div 
      className="w-full lg:w-[65%] bg-card/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-[24px] flex flex-col items-start justify-between p-8 min-h-[280px] lg:min-h-0 relative overflow-hidden group"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.div
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Image
          src="/svgs/Vector2.svg"
          alt="Lavanya Yasmeen"
          width={150}
          height={150}
          className="w-12 lg:w-auto self-end"
        />
      </motion.div>
      <motion.div 
        className="flex flex-col relative z-10"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[0.9] tracking-tighter">{heroContent.line1}</h1>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[0.9] tracking-tighter">
          {heroContent.line2Prefix} <span className="italic font-light text-amber-400/90">{heroContent.line2Emphasis}</span>{" "}
          {heroContent.line2Suffix}
        </h1>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[0.9] tracking-tighter bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">{heroContent.line3}</h1>
      </motion.div>

      {/* 装饰性背景微光 */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-400/10 blur-[80px] rounded-full group-hover:bg-amber-400/20 transition-colors duration-700" />
    </motion.div>
  );
}