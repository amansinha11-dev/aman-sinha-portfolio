// src/components/ProjectsSection.jsx

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ambientRef = useRef(null);
  const trackRef = useRef(null);
  const pinWrapRef = useRef(null);
  const cardsRef = useRef([]);
  const [isTouchLayout, setIsTouchLayout] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Advanced Attendance System',
      image: `${import.meta.env.BASE_URL}images/attendance-icon-converted.jpg`,
      description: 'Attendance system with facial & fingerprint recognition and real-time analytics.',
      techStack: ['Python', 'OpenCV', 'Deep Learning'],
    },
    {
      id: 2,
      title: 'Food Delivery Website & App',
      image: `${import.meta.env.BASE_URL}images/food-delivery.gif`,
      description: 'React-based food delivery platform with real-time order tracking and smooth animations.',
      link: 'https://quickbite-motion-delight.vercel.app/',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      id: 3,
      title: 'Disaster Management System',
      image: `${import.meta.env.BASE_URL}images/project3.jpg`,
      description: 'Multilingual disaster management platform with geospatial maps, real-time alerts, and incident reporting.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Maps API'],
    },
    {
      id: 4,
      title: 'Portfolio Website',
      image: `${import.meta.env.BASE_URL}images/project4-fixed.jpg`,
      description: 'Modern portfolio with 3D Spline animations, GSAP scroll effects, and Tailwind CSS.',
      techStack: ['React', 'Spline', 'GSAP', 'Tailwind CSS'],
    },
    {
      id: 5,
      title: 'Chat Application',
      image: `${import.meta.env.BASE_URL}images/project5.jpg`,
      description: 'Real-time chat application with Socket.io for instant messaging.',
      techStack: ['React', 'Node.js', 'Socket.io', 'Express'],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const media = window.matchMedia('(max-width: 1023px), (pointer: coarse)');
    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    const lowPowerDevice =
      (typeof window.navigator.hardwareConcurrency === 'number' && window.navigator.hardwareConcurrency <= 4) ||
      (typeof window.navigator.deviceMemory === 'number' && window.navigator.deviceMemory <= 4);
    const allowHeavyMotion = !reducedMotionMedia.matches && !lowPowerDevice;

    const updateLayoutMode = () => setIsTouchLayout(media.matches);
    updateLayoutMode();
    media.addEventListener('change', updateLayoutMode);

    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' } });
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.12, scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' } });

      if (allowHeavyMotion) {
        const ambientLights = ambientRef.current ? Array.from(ambientRef.current.querySelectorAll('[data-ambient]')) : [];
        ambientLights.forEach((light, index) => {
          gsap.to(light, {
            x: index % 2 === 0 ? 56 : -56,
            y: index % 2 === 0 ? -26 : 30,
            scale: index % 2 === 0 ? 1.06 : 0.94,
            opacity: index % 2 === 0 ? 0.34 : 0.26,
            duration: 10 + index * 1.4,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          });
        });
      }

      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
        const track = trackRef.current;
        const pinWrap = pinWrapRef.current;
        const cards = cardsRef.current.filter(Boolean);
        if (!track || !pinWrap || cards.length === 0 || !allowHeavyMotion) return;

        const getDistance = () => Math.max(0, track.scrollWidth - pinWrap.clientWidth);

        const horizontalTween = gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          force3D: true,
          lazy: true,
          scrollTrigger: {
            trigger: pinWrap,
            start: 'top 14%',
            end: () => `+=${getDistance() * 0.85 + window.innerHeight * 0.35}`,
            pin: pinWrap,
            scrub: 0.35,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            snap: false,
          },
        });

        cards.forEach((card) => {
          gsap.fromTo(card, { opacity: 0.75, scale: 0.985 }, {
            opacity: 1,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: 'left 88%',
              end: 'left 56%',
              scrub: 0.4,
            },
          });
        });
      });

      return () => mm.revert();
    }, sectionRef);

    return () => {
      media.removeEventListener('change', updateLayoutMode);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#040512] py-24 sm:py-28 overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-[#070B1F]/70 to-black pointer-events-none" />
      <div ref={ambientRef} className="absolute inset-0 pointer-events-none">
        <div data-ambient className="absolute top-20 left-[8%] w-72 h-72 bg-violet-500/30 rounded-full blur-[120px] opacity-30" />
        <div data-ambient className="absolute top-28 right-[14%] w-80 h-80 bg-blue-500/25 rounded-full blur-[140px] opacity-25" />
        <div data-ambient className="absolute bottom-12 left-[40%] w-96 h-96 bg-cyan-400/20 rounded-full blur-[160px] opacity-25" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-bold text-white opacity-0 tracking-[0.12em] uppercase flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-violet-400/70" />
            Projects
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-violet-400/70" />
          </h2>
          <p ref={subtitleRef} className="text-gray-400 mt-4 text-lg opacity-0">A showcase of products and full-stack builds</p>
        </div>

        <div ref={pinWrapRef} className="max-w-7xl mx-auto lg:min-h-[72vh] lg:flex lg:items-center">
          <div
            ref={trackRef}
            className={`flex gap-6 lg:gap-8 ${isTouchLayout ? 'overflow-x-auto snap-x snap-mandatory pb-6' : 'overflow-visible will-change-transform'}`}
          >
          {projects.map((project, index) => {
            return (
              <article
                key={project.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative snap-center shrink-0 w-[88vw] sm:w-[82vw] lg:w-[78vw] max-w-6xl rounded-3xl border border-violet-400/25 bg-[#0A0B1A]/85 backdrop-blur-xl p-5 sm:p-7 lg:p-8 transition-all duration-300 ring-1 ring-violet-400/15"
              >
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-violet-500/40 via-blue-500/25 to-cyan-500/20 blur-xl opacity-70 group-hover:opacity-100 pointer-events-none" />
                <div data-cardglow className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[72%] h-10 bg-gradient-to-r from-violet-500/45 via-blue-500/25 to-cyan-500/25 blur-2xl opacity-55 pointer-events-none" />
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  <div className="lg:w-1/2 w-full relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-violet-500/30 transition-all duration-500">
                      <img src={project.image} alt={project.title} loading="lazy" className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling && (e.target.nextSibling.style.display = 'flex'); }} />
                      <div style={{display:'none'}} className="w-full h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-violet-900/60 to-purple-900/60 items-center justify-center text-violet-300 text-lg font-medium">{project.title}</div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-violet-500 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-purple-500 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="relative lg:w-1/2 w-full text-center lg:text-left">
                    <span className="inline-block px-3.5 py-1.5 text-xs font-semibold text-violet-200 bg-violet-500/15 border border-white/10 rounded-xl uppercase tracking-wider mb-4">Project 0{project.id}</span>
                    <h3 className="text-3xl sm:text-4xl font-semibold text-white/95 mb-3 leading-tight">{project.title}</h3>
                    <p className="text-gray-300/80 text-base sm:text-lg leading-relaxed mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 text-sm font-medium text-violet-200 bg-violet-500/12 border border-white/10 rounded-full">{tech}</span>
                      ))}
                    </div>

                    <div className="flex gap-3 justify-center lg:justify-start">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-700/70 to-blue-700/70 text-white font-semibold text-sm border border-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300">
                          <FiExternalLink className="w-4 h-4" />Live Demo
                        </a>
                      )}
                      <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-gray-300 font-semibold text-sm hover:border-violet-500/30 hover:text-violet-200 transition-all duration-300">
                        <FiGithub className="w-4 h-4" />Source Code
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-600/50 to-transparent" />
    </section>
  );
};

export default ProjectsSection;