import React, { useMemo, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Advanced Attendance System',
    image: `${import.meta.env.BASE_URL}images/attendance-icon-converted.jpg`,
    status: 'Live',
    category: 'AI + SECURITY',
    description: 'Attendance system with facial and fingerprint recognition, smart alerts, and live analytics dashboards.',
    duration: '8 months',
    team: '6 members',
    impact: '92% tracking accuracy',
    techStack: ['Python', 'OpenCV', 'Deep Learning', 'Flask'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Food Delivery Website & App',
    image: `${import.meta.env.BASE_URL}images/food-delivery.gif`,
    status: 'Live',
    category: 'ECOMMERCE',
    description: 'Modern food delivery experience with animated interactions, clean checkout flow, and realtime order updates.',
    duration: '6 months',
    team: '4 members',
    impact: '35% faster ordering flow',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://quickbite-motion-delight.vercel.app/',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Disaster Management System',
    image: `${import.meta.env.BASE_URL}images/project3.jpg`,
    status: 'Beta',
    category: 'CIVIC TECH',
    description: 'Multilingual emergency platform with geospatial maps, incident reporting, and regional broadcast alerts.',
    duration: '10 months',
    team: '9 members',
    impact: '60% faster response routing',
    techStack: ['React', 'Node.js', 'MongoDB', 'Maps API'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 4,
    title: '3D Interactive Portfolio',
    image: `${import.meta.env.BASE_URL}images/project4-fixed.jpg`,
    status: 'Live',
    category: 'CREATIVE WEB',
    description: 'Immersive portfolio with Spline scenes, GSAP transitions, and responsive interaction-first storytelling.',
    duration: '5 months',
    team: 'Solo',
    impact: '2.4x session duration',
    techStack: ['React', 'Spline', 'GSAP', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 5,
    title: 'Money Mentor',
    image: `${import.meta.env.BASE_URL}images/image5.png`,
    status: 'Live',
    category: 'COMMUNICATION',
    description: 'Low-latency chat experience with websocket rooms, typing indicators, and session persistence.',
    duration: '4 months',
    team: '3 members',
    impact: 'Sub-250ms message sync',
    techStack: ['React', 'Node.js', 'Socket.io', 'Express'],
    liveLink: 'https://money-mentor-zeta.vercel.app/',
    githubLink: '#',
  },
];

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState('carousel');
  const [flippedCards, setFlippedCards] = useState({});

  const orderedProjects = useMemo(() => projects, []);

  const showPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + orderedProjects.length) % orderedProjects.length);
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % orderedProjects.length);
  };

  const toggleView = () => {
    setViewMode((prev) => (prev === 'carousel' ? 'grid' : 'carousel'));
  };

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="relative overflow-hidden bg-[#040512] py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(120,119,198,0.25),transparent_40%),radial-gradient(circle_at_85%_12%,rgba(59,130,246,0.22),transparent_38%),radial-gradient(circle_at_52%_80%,rgba(16,185,129,0.15),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#090B21]/40 via-[#040512]/65 to-black" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
            Interactive Portfolio
          </span>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Project Showcase</h2>
          <p className="mt-4 text-base text-gray-300 sm:text-lg">
            Explore projects in immersive 3D carousel cards, then switch to a detailed interactive grid view.
          </p>
        </div>

        {viewMode === 'carousel' ? (
          <div className="mx-auto w-full max-w-6xl">
            <div className="relative h-[540px] w-full [perspective:2200px] sm:h-[580px]">
              {orderedProjects.map((project, index) => {
                const relativeOffset = index - activeIndex;
                const wrappedOffset =
                  relativeOffset > orderedProjects.length / 2
                    ? relativeOffset - orderedProjects.length
                    : relativeOffset < -orderedProjects.length / 2
                      ? relativeOffset + orderedProjects.length
                      : relativeOffset;

                const absOffset = Math.abs(wrappedOffset);
                const isVisible = absOffset <= 2;
                const stackScale = Math.max(0.78, 1 - absOffset * 0.12);

                return (
                  <article
                    key={project.id}
                    className="group absolute left-1/2 top-1/2 h-[470px] w-[min(92vw,820px)] -translate-y-1/2 transition-all duration-700"
                    style={{
                      transform: `translate3d(calc(-50% + ${wrappedOffset * 24}%), -50%, ${-absOffset * 180}px) rotateY(${wrappedOffset * -18}deg) scale(${stackScale})`,
                      opacity: isVisible ? 1 : 0,
                      zIndex: 50 - absOffset,
                      pointerEvents: wrappedOffset === 0 ? 'auto' : 'none',
                    }}
                  >
                    <div
                      className={`relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] ${flippedCards[project.id] ? '[transform:rotateY(180deg)]' : ''} md:group-hover:[transform:rotateY(180deg)]`}
                      onClick={() => toggleFlip(project.id)}
                      role="button"
                      aria-label={`Flip ${project.title} card`}
                    >
                      <div className="absolute inset-0 overflow-hidden rounded-3xl border border-violet-300/20 bg-[#090E24]/85 shadow-[0_30px_80px_-35px_rgba(76,29,149,0.9)] [backface-visibility:hidden]">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="h-full w-full object-cover"
                          onError={(event) => {
                            event.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#040512]/95 via-[#040512]/30 to-transparent" />
                        <div className="absolute left-6 top-5 flex items-center gap-2">
                          <span className="rounded-full border border-emerald-300/35 bg-emerald-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-200">
                            {project.status}
                          </span>
                          <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
                            {project.category}
                          </span>
                        </div>
                        <div className="absolute bottom-7 left-6 right-6">
                          <h3 className="text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
                          <p className="mt-3 line-clamp-2 text-sm text-gray-200 sm:text-base">{project.description}</p>
                          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-violet-200/90">
                            Hover or tap to flip for details
                          </p>
                        </div>
                      </div>

                      <div className="absolute inset-0 rounded-3xl border border-violet-300/25 bg-[#0D122B]/95 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">{project.category}</p>
                        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>

                        <div className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                            <p className="text-[11px] uppercase tracking-[0.12em] text-gray-400">Duration</p>
                            <p className="mt-1 font-semibold text-gray-100">{project.duration}</p>
                          </div>
                          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                            <p className="text-[11px] uppercase tracking-[0.12em] text-gray-400">Team</p>
                            <p className="mt-1 font-semibold text-gray-100">{project.team}</p>
                          </div>
                          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                            <p className="text-[11px] uppercase tracking-[0.12em] text-gray-400">Impact</p>
                            <p className="mt-1 font-semibold text-gray-100">{project.impact}</p>
                          </div>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={`${project.id}-${tech}`}
                              className="rounded-full border border-white/15 bg-violet-500/12 px-3 py-1 text-xs font-medium text-violet-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-violet-200/20 bg-violet-600/70 px-4 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-violet-500"
                          >
                            <FiExternalLink className="h-4 w-4" /> View Project
                          </a>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-200 transition hover:border-violet-300/30 hover:text-white"
                          >
                            <FiGithub className="h-4 w-4" /> GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-7 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-violet-300/45 hover:bg-violet-500/20"
                  aria-label="Previous project"
                >
                  <FiArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-violet-300/45 hover:bg-violet-500/20"
                  aria-label="Next project"
                >
                  <FiArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                {orderedProjects.map((project, index) => (
                  <button
                    key={`dot-${project.id}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-7 bg-violet-300' : 'w-2.5 bg-white/35 hover:bg-white/55'}`}
                    aria-label={`View ${project.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {orderedProjects.map((project) => (
              <article
                key={`grid-${project.id}`}
                className="group h-[420px] [perspective:1800px]"
                onClick={() => toggleFlip(project.id)}
              >
                <div
                  className={`relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] ${flippedCards[project.id] ? '[transform:rotateY(180deg)]' : ''} md:group-hover:[transform:rotateY(180deg)]`}
                  style={{ animation: `projectFloat 7s ease-in-out ${project.id * 0.2}s infinite` }}
                >
                  <div className="absolute inset-0 overflow-hidden rounded-2xl border border-violet-300/25 bg-[#0B1027] [backface-visibility:hidden]">
                    <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050610]/95 via-[#050610]/45 to-transparent" />
                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                      <span className="rounded-full border border-white/20 bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85">
                        {project.status}
                      </span>
                      <span className="rounded-full border border-violet-300/30 bg-violet-400/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-100">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-5 right-5">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-gray-200">{project.description}</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-2xl border border-violet-300/25 bg-[#101637] p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="mt-4 space-y-2 text-sm text-gray-200">
                      <p><span className="text-violet-200">Duration:</span> {project.duration}</p>
                      <p><span className="text-violet-200">Team:</span> {project.team}</p>
                      <p><span className="text-violet-200">Impact:</span> {project.impact}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={`grid-${project.id}-${tech}`} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex gap-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-violet-600/80 px-3.5 py-2 text-xs font-semibold text-white"
                      >
                        <FiExternalLink className="h-3.5 w-3.5" /> View
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3.5 py-2 text-xs font-semibold text-gray-100"
                      >
                        <FiGithub className="h-3.5 w-3.5" /> Code
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={toggleView}
            className="inline-flex items-center gap-2 rounded-2xl border border-violet-300/35 bg-violet-600/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-violet-100 transition hover:border-violet-200/60 hover:bg-violet-500/30"
          >
            {viewMode === 'carousel' ? 'Switch to Grid View' : 'Switch to 3D Carousel View'}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-600/50 to-transparent" />
    </section>
  );
};

export default ProjectsSection;