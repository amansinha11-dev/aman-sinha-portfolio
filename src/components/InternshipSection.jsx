// src/components/InternshipSection.jsx

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

const InternshipSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const cardsRef = useRef([]);

  const internships = [
    {
      id: 1,
      role: 'Machine Learning Intern',
      company: 'CodeAlpha',
      location: 'Remote',
      duration: 'Internship Period',
      description:
        'Engineered an end-to-end Machine Learning solution focused on financial risk prediction — designing and optimizing a Credit Scoring Model that bridges business understanding with technical implementation across the complete ML lifecycle.',
      highlights: [
        'Conducted comprehensive Exploratory Data Analysis (EDA) to uncover patterns and risk indicators',
        'Performed advanced feature engineering to enhance model interpretability and predictive strength',
        'Implemented multiple supervised learning models: Logistic Regression, Decision Tree, and Random Forest',
        'Optimized model performance using hyperparameter tuning (GridSearchCV)',
        'Evaluated models using Accuracy, Precision, Recall, F1-Score, ROC-AUC, and Confusion Matrix',
      ],
      outcome:
        'The optimized Random Forest model demonstrated strong predictive capability with balanced precision-recall performance, making it suitable for practical financial risk assessment. Built a scalable and interpretable ML pipeline aligning technical performance with real-world business usability.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      link: '#',
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
          start: 'top 80%',
          toggleActions: 'play none none reverse',
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
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Card stagger animation
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
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
      id="experience"
    >
      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
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
            Internship Experience
          </h2>
          <div
            ref={titleLineRef}
            className="h-1 bg-gradient-to-r from-violet-600 to-purple-700 mx-auto rounded-full"
            style={{ width: 0 }}
          />
        </div>

        {/* Internship Cards */}
        <div className="relative max-w-3xl mx-auto">
          {internships.map((internship, index) => (
              <div
                key={internship.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="relative mb-12"
              >
                <div>
                  <div className="group relative">
                    {/* Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl blur opacity-10 group-hover:opacity-30 transition-opacity duration-500" />

                    <div className="relative p-6 bg-gray-900/80 backdrop-blur-md border border-violet-500/20 rounded-2xl shadow-xl hover:shadow-violet-500/10 transition-all duration-300">
                      {/* Role & Company */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-100 flex items-center gap-2">
                            <FiBriefcase className="w-5 h-5 text-violet-500" />
                            {internship.role}
                          </h3>
                          <p className="text-violet-400 font-semibold mt-1">
                            {internship.company}
                          </p>
                        </div>
                        <a
                          href={internship.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-violet-400 transition-colors"
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <FiCalendar className="w-4 h-4" />
                          {internship.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiMapPin className="w-4 h-4" />
                          {internship.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {internship.description}
                      </p>

                      {/* Key Highlights */}
                      {internship.highlights && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-violet-400 mb-2 uppercase tracking-wider">Key Deliverables</h4>
                          <ul className="space-y-1.5">
                            {internship.highlights.map((item, i) => (
                              <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                                <span className="text-violet-500 mt-1 flex-shrink-0">▹</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Outcome */}
                      {internship.outcome && (
                        <div className="mb-4 p-3 bg-violet-900/20 border border-violet-500/10 rounded-xl">
                          <h4 className="text-sm font-semibold text-violet-400 mb-1 uppercase tracking-wider">Key Outcome</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{internship.outcome}</p>
                        </div>
                      )}

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-2">
                        {internship.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 rounded-lg hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default InternshipSection;
