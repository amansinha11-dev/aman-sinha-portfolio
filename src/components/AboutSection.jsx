import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiDownload, FiCode, FiDatabase, FiCpu, FiLayers } from 'react-icons/fi';

const profileImg = `${import.meta.env.BASE_URL}images/profile.jpg`;

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const introRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const skillsRef = useRef(null);



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } });
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } });
      gsap.fromTo(introRef.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.9, delay: 0.2, scrollTrigger: { trigger: introRef.current, start: 'top 85%' } });
      gsap.fromTo(imageRef.current, { opacity: 0, x: 40, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 0.9, delay: 0.3, scrollTrigger: { trigger: imageRef.current, start: 'top 85%' } });
      if (statsRef.current) gsap.fromTo(statsRef.current.children, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: statsRef.current, start: 'top 90%' } });
      if (skillsRef.current) gsap.fromTo(skillsRef.current.children, { opacity: 0, y: 30, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: skillsRef.current, start: 'top 90%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden bg-black py-24 sm:py-28" id="about">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/[0.08] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p ref={subtitleRef} className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-3 opacity-0">Get to know me</p>
          <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent opacity-0 tracking-tight">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full mt-4" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
          <div ref={introRef} className="lg:w-3/5 opacity-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-tight">
              Passionate Developer &amp;<br /><span className="text-violet-400">Creative Problem Solver</span>
            </h3>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4">
              Hi, I'm <span className="text-white font-medium">Aman Sinha</span>, a passionate tech enthusiast currently in my third year of B.Tech in Information Technology at KIIT University. Alongside this, I'm also pursuing a Bachelor of Science in Data Science and Artificial Intelligence (CSDA) from IIT Patna.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              I've built a strong foundation in Data Structures and Algorithms using C++, Java, and Python. Currently, I'm deepening my expertise in the MERN stack for full-stack development, while also actively exploring Data Science, Machine Learning, AI, and Data Analytics.
            </p>

            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 max-w-xl">
              <div className="text-center px-4 py-4 rounded-xl bg-white/[0.03] border border-white/5"><div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">5+</div><div className="text-gray-500 text-sm mt-1">Projects Built</div></div>
              <div className="text-center px-4 py-4 rounded-xl bg-white/[0.03] border border-white/5"><div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">8+</div><div className="text-gray-500 text-sm mt-1">Certificates</div></div>
              <div className="text-center px-4 py-4 rounded-xl bg-white/[0.03] border border-white/5 col-span-2 sm:col-span-1"><div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">3rd</div><div className="text-gray-500 text-sm mt-1">Year B.Tech</div></div>
            </div>

            <a href={`${import.meta.env.BASE_URL}images/Resume.pdf`} download="Aman_Sinha_Resume.pdf" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl text-white font-semibold text-sm shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:scale-[1.03] transition-all duration-300">
              <FiDownload className="w-4 h-4" />Download Resume
            </a>
          </div>

          <div ref={imageRef} className="lg:w-2/5 flex justify-center opacity-0">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-violet-600/50 to-purple-600/50 rounded-2xl p-[2px]">
                <img src={profileImg} alt="Aman Sinha" loading="eager" className="h-72 sm:h-80 lg:h-[420px] w-64 sm:w-72 lg:w-80 object-cover rounded-2xl shadow-2xl" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-violet-500 rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-purple-500 rounded-bl-lg" />
            </div>
          </div>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mt-20">
          {[
            { Icon: FiCode, label: 'Full-Stack Dev', techs: ['React', 'Node.js', 'Express', 'MongoDB'] },
            { Icon: FiCpu, label: 'AI / ML', techs: ['Python', 'TensorFlow', 'Scikit-learn'] },
            { Icon: FiDatabase, label: 'DSA', techs: ['C++', 'Java', 'Python'] },
            { Icon: FiLayers, label: 'Cloud & Tools', techs: ['AWS', 'Git', 'Docker'] },
          ].map((skill) => (
            <div key={skill.label} className="group p-5 bg-gray-900/60 backdrop-blur-sm border border-white/5 rounded-xl hover:border-violet-500/30 hover:bg-gray-900/80 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 transition-colors duration-300"><skill.Icon className="w-5 h-5" /></div>
                <h4 className="text-white font-semibold text-sm">{skill.label}</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skill.techs.map((tech) => (<span key={tech} className="px-2.5 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-md">{tech}</span>))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-600/50 to-transparent" />
    </section>
  );
};

export default AboutSection;
