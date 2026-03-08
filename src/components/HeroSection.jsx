import { useEffect, useState } from "react";
import * as FramerMotion from "framer-motion";
import Spline from "@splinetool/react-spline";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";
import { scrollTo } from "../utils/scroll.js";

const HeroSection = () => {
  const [showSpline, setShowSpline] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Render Spline on all devices/browsers that can create a WebGL context.
    const canvas = document.createElement("canvas");
    const supportsWebGL =
      !!window.WebGLRenderingContext &&
      !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl") || canvas.getContext("webgl2"));

    if (!supportsWebGL) {
      setShowSpline(false);
    }
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-black"
      id="home"
    >
      {/* Gradient overlays — only on the left for text readability, right side stays clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-transparent to-black/60 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-[1] pointer-events-none" />

      {/* Spline 3D Scene — render by default, fallback only if WebGL is unavailable */}
      {showSpline ? (
        <div className="absolute top-[-10%] right-[-15%] w-[80%] lg:w-[70%] h-[120%] z-0">
          <Spline
            className="w-full h-full"
            scene="https://prod.spline.design/Hsrz2Nep6somq5ZA/scene.splinecode"
          />
          <div className="absolute inset-0 bg-violet-500/20 mix-blend-color pointer-events-none" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_75%_35%,rgba(139,92,246,0.25),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.2),transparent_38%)]" />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 lg:px-24 max-w-4xl">
        {/* Status chip */}
        <FramerMotion.motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium tracking-wide backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </span>
        </FramerMotion.motion.div>

        {/* Heading */}
        <FramerMotion.motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.0,
            duration: 1.5,
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Aman Sinha
          </span>
          <br />
          <span className="text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 block">
            Full-Stack Developer
          </span>
        </FramerMotion.motion.h1>

        {/* Subtitle */}
        <FramerMotion.motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.5,
            duration: 1.5,
          }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed"
        >
          Crafting robust, production-ready web applications with the MERN
          stack, backed by strong DSA foundations in C++ &amp; Python, and a
          growing expertise in AI/ML &amp; Data Analytics.
        </FramerMotion.motion.p>

        {/* CTA Buttons */}
        <FramerMotion.motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group relative px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 transition-all duration-300 hover:scale-[1.03]"
          >
            View My Work
            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-7 py-3.5 rounded-xl border border-gray-600 text-gray-300 font-semibold text-sm tracking-wide hover:border-violet-500 hover:text-violet-400 transition-all duration-300"
          >
            Get in Touch
          </button>
        </FramerMotion.motion.div>

        {/* Social row */}
        <FramerMotion.motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-12 flex items-center gap-5"
        >
          <a href="https://github.com/amansinha11-dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-violet-400 transition-colors duration-300">
            <FiGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/aman-sinha-2412res/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-violet-400 transition-colors duration-300">
            <FiLinkedin className="w-5 h-5" />
          </a>
          <div className="h-5 w-px bg-gray-700" />
          <span className="text-gray-600 text-xs tracking-widest uppercase">B.Tech IT &middot; KIIT University</span>
        </FramerMotion.motion.div>
      </div>

      {/* Scroll indicator */}
      <FramerMotion.motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("about")}
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <FramerMotion.motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <FiArrowDown className="w-5 h-5 text-violet-400" />
        </FramerMotion.motion.div>
      </FramerMotion.motion.div>
    </section>
  );
};

export default HeroSection;