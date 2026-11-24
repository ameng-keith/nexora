"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PersonImageSection from "@/components/PersonImageSection";
import AboutContactSection from "@/components/AboutContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import Footer from "@/components/Footer";
import { containerVariants } from "@/lib/animation/variants";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans pt-2 md:pt-0 lg:py-4 xl:py-2 px-3 md:px-6 lg:px-10">
      <Navbar />
      
      {/* === Screen 1: Bento Grid === */}
      <motion.div 
        className="flex flex-col lg:flex-row w-full gap-4 pb-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col w-full lg:w-[70%] gap-4 lg:mb-4">
          <div className="flex flex-col-reverse lg:flex-row gap-4 md:h-[60%]">
            <HeroSection />
            <PersonImageSection />
          </div>
          <AboutContactSection />
        </div>
        <ProjectsSection />
      </motion.div>

      {/* Downward indicator anchor */}
      <a 
        href="#showcase" 
        className="flex items-center justify-center gap-2 py-6 text-xs font-mono uppercase tracking-widest text-foreground/40 hover:text-amber-400 transition-colors group cursor-pointer"
      >
        <span>Explore Featured Projects</span>
        <ChevronDown size={16} className="animate-bounce group-hover:translate-y-1 transition-transform" />
      </a>

      {/* === Screen 2: 3D Coverflow Projects Carousel (As sketched) === */}
      <ProjectCarousel />

      {/* Footer */}
      <Footer />
    </div>
  );
}
