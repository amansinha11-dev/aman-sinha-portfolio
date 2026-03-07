// src/components/CertificatesSection.jsx

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';

const CertificatesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ambientRef = useRef(null);
  const cardsRef = useRef([]);

  const certificates = [
    {
      id: 1,
      title: 'AlgoUniversity Tech Fellowship (ATF) 2024',
      issuer: 'AlgoUniversity',
      date: 'Aug 2024',
      description: 'Successfully qualified stage 1 of the ATF 2024, standing out among 20,000+ applicants and earning a spot in 4,000 students advancing to stage 2.',
      credentialLink: 'https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/atf_stage_1/aman-sinha.png',
      badge: 'DSA',
    },
    {
      id: 2,
      title: 'Deep Learning for Vision and Language Modelling',
      issuer: 'IIT Guwahati',
      date: 'Jan 2025',
      description: 'Intensive certification covering CNNs, Transformers (ViT, CLIP), BERT/RoBERTa for language modeling, and cross-attention fusion techniques for vision-language tasks.',
      credentialLink: 'https://drive.google.com/file/d/1AUOA_YBAiYHwdQmL7YiajVj5bWWdSYZw/view?usp=sharing',
      badge: 'Deep Learning',
    },
    {
      id: 3,
      title: 'AWS Cloud Foundations',
      issuer: 'AWS Academy/Credly',
      date: 'April 2025',
      description: 'AWS Certified Cloud Practitioner (CLF-C02) certification demonstrating foundational expertise across EC2, S3, Lambda, VPC, IAM, and cloud architecture principles.',
      credentialLink: 'https://www.credly.com/badges/db57f3d2-5ac5-474a-9f12-e84329a8b735/public_url',
      badge: 'Cloud Computing',
    },
    {
      id: 4,
      title: 'USC KIIT Workshop on Agentic AI',
      issuer: 'USC KIIT-DU',
      date: 'Aug 2025',
      description: 'Comprehensive workshop exploring Agentic AI, gaining practical experience in designing and implementing intelligent, autonomous AI systems.',
      credentialLink: 'https://drive.google.com/file/d/1xQenqVGO79PEuLXqIsRqlXCWsGWkfyHa/view?usp=sharing',
      badge: 'Agentic AI',
    },
    {
      id: 5,
      title: 'Smart India Hackathon (SIH) 2025',
      issuer: 'KIIT-DU',
      date: 'Sep 2025',
      description: 'Selected among Top 50 teams out of 500+ for developing a Real-Time Monitoring and Analytics System for Disaster Management Trainings.',
      credentialLink: 'https://drive.google.com/file/d/1I-YShZ9A1fzRGjOocP6JzFfCJfMpXchF/view?usp=drivesdk',
      badge: 'Full Stack + AI/ML',
    },
    {
      id: 6,
      title: 'IOTRONIX Hands-on Workshop',
      issuer: 'E Labs KIIT-DU',
      date: 'Nov 2025',
      description: 'Practical exposure to IoT\u2013ML integration covering sensors, actuators, cloud connectivity, and mini-project development.',
      credentialLink: 'https://drive.google.com/file/d/187J5JisjVtaJ5hd_v56iThjRmMIUYRmR/view?usp=sharing',
      badge: 'IoT + ML',
    },
    {
      id: 7,
      title: 'Building Bad by GDG KIIT',
      issuer: 'GDG KIIT-DU',
      date: 'Nov 2025',
      description: 'Co-developed QuickBite, a modern PWA during the Building Bad 2025 hackathon using React, TypeScript, Tailwind CSS, and Framer Motion.',
      credentialLink: 'https://drive.google.com/file/d/1HNPL9A9L9xRIQPdmlAL_7fwNeIyFH5bC/view?usp=sharing',
      badge: 'React + PWA',
    },
    {
      id: 8,
      title: 'Hack-a-Bot 2.0 \u2013 Certificate of Participation',
      issuer: 'UiPath Student Community KIIT',
      date: 'Dec 2025',
      description: 'Designed ShopVision, an AI-powered smart grocery recognition system for automated retail billing using ML-based image classification.',
      credentialLink: 'https://drive.google.com/file/d/17PimJQAaHfoF2Dmy3ZdhUsB8sw0UKEdw/view?usp=sharing',
      badge: 'ML + Computer Vision',
    },
    {
      id: 9,
      title: 'AI Evaluation Engine - Engineering Sprint',
      issuer: 'Unstop',
      date: 'February 2026',
      description: 'Built a production-grade, stateful AI interviewer system during a 6-hour engineering sprint. Engineered dynamic scoring logic, state management for interview flows, timing constraints, and complex termination rules to process structured logs and compute accurate "Interview Readiness Scores" with robust edge-case handling.',
      credentialLink: 'https://unstop.com/certificate-preview/407e3096-302e-4628-a386-6ac2a4972cd7',
      badge: 'System Design, Node.js, Python, State Machines, Algorithms, HR-Tech'
    },
    {
      id: 10,
      title: 'Code Intrusion CTF Participant - Enyugma\'26',
      issuer: 'IIIT Bhagalpur via Unstop',
      date: 'February 2026',
      description: 'Competed in the Code Intrusion Capture The Flag challenge at Enyugma\'26 Hackathon. Tackled real-world cybersecurity scenarios including web exploitation, cryptography, reverse engineering, and network security attacks during this high-pressure competitive event.',
      credentialLink: 'https://unstop.com/certificate-preview/4c6faa4c-4c7f-434f-9b69-43e8fd00cc8c',
      badge: 'Cybersecurity, CTF, Web Exploitation, Cryptography, Reverse Engineering, Network Security'
    },
    {
      id: 11,
      title: 'Corporate Governance and Compliance Specialization',
      issuer: 'Coursera',
      date: 'February 2026',
      description: 'Mastered foundations of corporate governance, regulatory compliance, stakeholder management, risk management, and business ethics. Gained expertise in business reporting, accountability, corporate strategy, sustainability, and governance frameworks essential for modern organizational leadership.',
      credentialLink: 'https://coursera.org/share/00ac167a84a64f7fec2c821f6a939629',
      badge: 'Corporate Governance, Compliance Management, Risk Management, Stakeholder Engagement, Business Ethics, Regulatory Compliance'
    },
    {
      id: 12,
      title: 'Business for Good: Fundamentals of Corporate Responsibility',
      issuer: 'London School of Business via Coursera',
      date: 'February 2026',
      description: 'Completed specialized training on corporate sustainability, ESG frameworks, and sustainable business leadership. Mastered sustainability challenges, stakeholder engagement, social impact strategies, and value creation pathways for responsible business innovation and decision-making.',
      credentialLink: 'https://coursera.org/share/0b3265bc6ae489934c10c799e910d795',
      badge: 'ESG, Sustainable Business, Corporate Sustainability, Business Ethics, Stakeholder Engagement, Social Impact, Business Leadership'
    },
    {
      id: 13,
      title: 'Ethical Decision Making for Success in the Tech Industry',
      issuer: 'Coursera',
      date: 'February 21, 2026',
      description: 'Mastered ethical awareness, decision-making frameworks, and leadership challenges specific to the tech industry. Developed expertise in personal integrity, engineering management, technical leadership, and the courage required for principled decision-making under pressure.',
      credentialLink: 'https://coursera.org/share/fd293d697da9ef7d4f5f4bc8d697e873',
      badge: 'Engineering Management, Business Ethics, Technical Management, Leadership, Decision Making, Personal Integrity, Professionalism'
    },
    // To add a new certificate, copy the template below:
    // {
    //   id: 9,
    //   title:{ 'Certificate Title',
    //   issuer: 'Issuing Organization',
    //   date: 'Month Year',
    //   description: 'Brief description.',
    //   credentialLink: 'https://link-to-credential',
    //   badge: 'Skill Tags',
    // },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } });
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } });

      const ambientLights = ambientRef.current ? Array.from(ambientRef.current.querySelectorAll('[data-ambient]')) : [];
      ambientLights.forEach((light, index) => {
        gsap.to(light, {
          x: index % 2 === 0 ? 70 : -70,
          y: index % 2 === 0 ? -30 : 35,
          scale: index % 2 === 0 ? 1.1 : 0.92,
          opacity: index % 2 === 0 ? 0.38 : 0.3,
          duration: 7 + index * 1.4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(card, { opacity: 0, y: 46, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.62, delay: (index % 3) * 0.08, scrollTrigger: { trigger: card, start: 'top 90%' } });

        const cardGlow = card.querySelector('[data-cardglow]');
        if (cardGlow) {
          gsap.to(cardGlow, {
            opacity: 0.95,
            scale: 1.06,
            duration: 2.8,
            delay: index * 0.12,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cardThemes = [
    {
      glow: 'from-violet-500/45 via-purple-500/25 to-fuchsia-500/20',
      stroke: 'border-violet-400/30',
      badgeBg: 'bg-violet-500/15',
      badgeText: 'text-violet-200',
      btn: 'from-violet-700/60 to-purple-700/60',
      ring: 'ring-violet-400/20',
    },
    {
      glow: 'from-blue-500/45 via-indigo-500/25 to-violet-500/20',
      stroke: 'border-blue-400/30',
      badgeBg: 'bg-blue-500/15',
      badgeText: 'text-blue-200',
      btn: 'from-blue-700/60 to-indigo-700/60',
      ring: 'ring-blue-400/20',
    },
    {
      glow: 'from-cyan-500/45 via-sky-500/25 to-blue-500/20',
      stroke: 'border-cyan-400/30',
      badgeBg: 'bg-cyan-500/15',
      badgeText: 'text-cyan-200',
      btn: 'from-cyan-700/60 to-blue-700/60',
      ring: 'ring-cyan-400/20',
    },
  ];

  const getTagList = (cert) => cert.badge.split('+').map((item) => item.trim().toUpperCase()).filter(Boolean).slice(0, 3);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#040512] py-24 sm:py-28" id="certificates">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-[#070B1F]/70 to-black pointer-events-none" />
      <div ref={ambientRef} className="absolute inset-0 pointer-events-none">
        <div data-ambient className="absolute top-24 left-[10%] w-72 h-72 bg-violet-500/30 rounded-full blur-[120px] opacity-30" />
        <div data-ambient className="absolute top-36 right-[14%] w-80 h-80 bg-blue-500/25 rounded-full blur-[140px] opacity-25" />
        <div data-ambient className="absolute bottom-16 left-[38%] w-96 h-96 bg-cyan-400/20 rounded-full blur-[160px] opacity-25" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 sm:mb-16">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-bold text-white opacity-0 tracking-[0.12em] uppercase flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-violet-400/70" />
            Certificates
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-violet-400/70" />
          </h2>
          <p ref={subtitleRef} className="text-gray-400 mt-4 text-lg opacity-0">Showcasing certifications and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <div key={cert.id} ref={(el) => (cardsRef.current[index] = el)} className="group relative opacity-0">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cardThemes[index % 3].glow} rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />
              <div data-cardglow className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-[72%] h-10 bg-gradient-to-r ${cardThemes[index % 3].glow} blur-2xl opacity-55 pointer-events-none`} />

              <div className={`relative h-full p-6 bg-[#0A0B1A]/85 backdrop-blur-xl border ${cardThemes[index % 3].stroke} rounded-3xl hover:-translate-y-1 transition-all duration-300 flex flex-col ring-1 ${cardThemes[index % 3].ring}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${cardThemes[index % 3].badgeBg} flex items-center justify-center border border-white/10`}>
                      <FiAward className={`w-5 h-5 ${cardThemes[index % 3].badgeText}`} />
                    </div>
                    <span className={`px-3 py-1.5 text-xs font-semibold ${cardThemes[index % 3].badgeText} ${cardThemes[index % 3].badgeBg} border border-white/10 rounded-xl uppercase tracking-wider`}>{cert.badge}</span>
                  </div>
                  <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" aria-label="View credential">
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-4xl font-semibold text-white/95 leading-tight mb-3 line-clamp-2">{cert.title}</h3>

                <div className="flex flex-wrap items-center gap-3 text-xl text-gray-300/90 mb-4">
                  <span className="font-semibold text-violet-300">{cert.issuer}</span>
                  <span className="flex items-center gap-1 text-gray-400"><FiCalendar className="w-3.5 h-3.5" />{cert.date}</span>
                </div>

                <p className="text-gray-300/80 text-base sm:text-lg leading-relaxed flex-grow line-clamp-4">{cert.description}</p>

                <div className="mt-4 flex flex-wrap gap-2 pb-4 border-b border-white/10">
                  {getTagList(cert).map((tag) => (
                    <span key={tag} className={`px-3 py-1 rounded-full text-sm ${cardThemes[index % 3].badgeText} ${cardThemes[index % 3].badgeBg} border border-white/10`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer" className={`w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r ${cardThemes[index % 3].btn} text-white text-2xl font-semibold border border-white/10 hover:border-white/20 transition-all`}>
                    <span className="text-lg">View Credential</span>
                    <span className="inline-flex items-center gap-2 text-white/90">
                      <FiExternalLink className="w-5 h-5" />
                      <FiExternalLink className="w-5 h-5" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-600/50 to-transparent" />
    </section>
  );
};

export default CertificatesSection;