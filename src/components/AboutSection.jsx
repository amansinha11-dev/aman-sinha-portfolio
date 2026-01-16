import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Intro text + image animation
    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Floating stars animation
    starsRef.current.forEach((star) => {
      if (!star) return;
      const dir = Math.random() > 0.5 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;
      gsap.to(star, {
        x: dir * (100 + Math.random() * 200),
        y: dir * (50 + Math.random() * 100),
        rotation: dir * (180 + Math.random() * 180),
        duration: speed,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: speed
        }
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-black"
      id="about"
    >
      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              ref={(el) => (starsRef.current[i] = el)}
              className="absolute bg-gradient-to-r from-violet-400 to-purple-500 rounded-full opacity-70 animate-pulse"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.4 + Math.random() * 0.6,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array(48)
            .fill(null)
            .map((_, idx) => (
              <div key={idx} className="border border-gray-400/20" />
            ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent opacity-0 tracking-wider"
          >
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-700 mx-auto rounded-full" />
        </div>

        {/* Bio & Image */}
        <div
          ref={introRef}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          {/* Bio Text */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-200 mb-4">
              Passionate Developer & Creative Professional
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Hi, I'm Aman Sinha, a passionate tech enthusiast currently in my third year of B.Tech in Information Technology at KIIT University. Alongside this, I'm also pursuing a Bachelor of Science in Data Science and Artificial Intelligence (CSDA) from IIT Patna.
              I've built a strong foundation in Data Structures and Algorithms using C++, Java, and Python. Currently, I'm deepening my expertise in the MERN stack for full-stack development, while also actively exploring the fields of Data Science, Machine Learning, Artificial Intelligence, and Data Analytics.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-700 rounded-full" />
            </div>
            {/* Download Resume Button */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="Public/images/profilee.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-700 rounded-xl text-white font-semibold shadow-lg hover:from-violet-700 hover:to-purple-800 transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image with Glow/Accent */}
          <div className="lg:w-2/5 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative group">
              {/* Purple glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl blur opacity-20 transition-opacity duration-500 group-hover:opacity-60" />
              {/* Frame & Img */}
              <div className="relative bg-gradient-to-br from-gray-500 to-gray-100 rounded-2xl p-1 overflow-hidden">
                <img
src="Public/images/profile.jpg"                alt="Aman Sinha"
                  className="h-64 sm:h-80 lg:h-96 w-auto object-cover rounded-xl shadow-2xl transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Accent Dots */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-violet-600 rounded-full opacity-80 transition-opacity duration-500 group-hover:opacity-100 animate-pulse" />
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full opacity-60 transition-opacity duration-500 group-hover:opacity-100 animate-pulse"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>
        </div>

        {/* Tech Pill List */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Tailwind CSS', 'GSAP', 'JavaScript', 'Mern'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold rounded-xl hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-600 to-transparent opacity-50" />
    </section>
  );
};

export default AboutSection;
