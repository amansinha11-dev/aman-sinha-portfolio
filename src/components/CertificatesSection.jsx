// src/components/CertificatesSection.jsx

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';

const CertificatesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const cardsRef = useRef([]);

  const certificates = [
    {
      id: 1,
      title: 'Alogouniversity Tech Fellowship (ATF) 2024',
      issuer: 'AlgoUniversity',
      date: 'Aug 2024',
      description:
        ' I will Successfully qualified stage 1 of the ATF 2024 Standing out among 20,000+ applicants and earning a spot in 4,000 student advancing to stage 2.',
      credentialLink: 'https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/atf_stage_1/aman-sinha.png',
      badge: 'DSA',
    },
    {
      id: 2,
      title: 'Deep learning for vision and language Modellging',
      issuer: 'IIT Guwahati',
      location: 'Guwahati, India On-Site',
      date: 'Jan 2025',
      description:
       'Thrilled to complete this intensive certification from IIT Guwahati Multimedia Lab, where I delved into cutting-edge multimodal AI. Mastered CNNs (ResNet, EfficientNet) for computer vision, Transformers (ViT, CLIP) for image-text alignment, BERT/RoBERTa for language modeling, and fusion techniques like cross-attention for vision-language tasks. The offline experience on the stunning IITG campus, with hands-on sessions alongside top professors, was truly enriching. Excited to apply these advanced skills in real-world projects and contribute to the future of AI!',
      credentialLink: '#',
      badge: ' CNNs, Transformers, NLP/DL basics, Generative AI, and hands-on labs over 8 days',
    },
    {
      id: 3,
      title: 'AWS Cloud Foundations',
      issuer: 'AWS Academy/Credly',
      date: 'April 2025',
      description:'Earned AWS Certified Cloud Practitioner (CLF-C02) certification, demonstrating comprehensive foundational expertise across AWS core services including EC2 for scalable compute, S3 for durable object storage, Lambda for serverless architectures, VPC for secure networking, IAM for identity management, and the global AWS infrastructure—while mastering cloud architecture design principles, serverless application development, high-availability storage solutions, elastic compute provisioning, robust security & compliance frameworks, cost-optimization strategies, and operational best practices for production-grade cloud workloads.',
      credentialLink: '#',
      badge: 'Cloud Computing',
    },
    {
      id: 4,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Nov 2024',
      description:
        'Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.',
      credentialLink: '#',
      badge: 'Cloud',
    },
    {
      id: 5,
      title: 'Python for Data Science',
      issuer: 'IBM / Coursera',
      date: 'Sep 2024',
      description:
        'Hands-on Python programming for data analysis, visualization with Matplotlib & Seaborn, and basics of Pandas and NumPy.',
      credentialLink: '#',
      badge: 'Python',
    },
    {
      id: 6,
      title: 'React – The Complete Guide',
      issuer: 'Udemy',
      date: 'Jun 2024',
      description:
        'Mastering React including hooks, context API, Redux, React Router, Next.js fundamentals, and testing with Jest.',
      credentialLink: '#',
      badge: 'React',
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Title line animation
    gsap.fromTo(
      titleLineRef.current,
      { width: 0, opacity: 0 },
      {
        width: '6rem',
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Card stagger animation
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: (index % 3) * 0.15,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-black py-20"
      id="certificates"
    >
      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-violet-400 to-purple-500 rounded-full opacity-40 animate-pulse"
            style={{
              width: `${1 + Math.random() * 5}px`,
              height: `${1 + Math.random() * 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent opacity-0 tracking-wider"
          >
            Certificates
          </h2>
          <div
            ref={titleLineRef}
            className="h-1 bg-gradient-to-r from-violet-600 to-purple-700 mx-auto rounded-full"
            style={{ width: 0 }}
          />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl blur opacity-10 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="relative h-full p-6 bg-gray-900/80 backdrop-blur-md border border-violet-500/20 rounded-2xl shadow-xl hover:shadow-violet-500/10 transition-all duration-300 flex flex-col">
                {/* Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-600/25">
                      <FiAward className="w-5 h-5 text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 rounded-full">
                      {cert.badge}
                    </span>
                  </div>
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
                    aria-label="View credential"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-2 group-hover:text-violet-300 transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-3">
                  <span className="font-semibold text-violet-400">
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                  {cert.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors duration-300 flex items-center gap-2"
                  >
                    View Credential
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-600 to-transparent opacity-50" />
    </section>
  );
};

export default CertificatesSection;
