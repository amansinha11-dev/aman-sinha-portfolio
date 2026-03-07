// src/components/InternshipSection.jsx

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

const InternshipSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  const internships = [
    {
      id: 1,
      role: 'Machine Learning Intern',
      company: 'CodeAlpha',
      location: 'Remote',
      duration: 'Internship Period',
      description: 'Engineered an end-to-end Machine Learning solution focused on financial risk prediction \u2014 designing and optimizing a Credit Scoring Model that bridges business understanding with technical implementation across the complete ML lifecycle.',
      highlights: [
        'Conducted comprehensive Exploratory Data Analysis (EDA) to uncover patterns and risk indicators',
        'Performed advanced feature engineering to enhance model interpretability and predictive strength',
        'Implemented multiple supervised learning models: Logistic Regression, Decision Tree, and Random Forest',
        'Optimized model performance using hyperparameter tuning (GridSearchCV)',
        'Evaluated models using Accuracy, Precision, Recall, F1-Score, ROC-AUC, and Confusion Matrix',
      ],
      outcome: 'The optimized Random Forest model demonstrated strong predictive capability with balanced precision-recall performance, making it suitable for practical financial risk assessment.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      link: '#',
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.7, delay: index * 0.15, scrollTrigger: { trigger: card, start: 'top 85%' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-black py-24 sm:py-28" id="experience">
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-violet-600/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-purple-600/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p ref={subtitleRef} className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-3 opacity-0">Career</p>
          <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent opacity-0 tracking-tight">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600/50 via-purple-600/30 to-transparent" />

          {internships.map((internship, index) => (
            <div key={internship.id} ref={(el) => (cardsRef.current[index] = el)} className="relative mb-12 pl-8 md:pl-20 opacity-0">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-1.5 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50">
                <div className="absolute inset-0 rounded-full bg-violet-500 animate-ping opacity-20" />
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 sm:p-8 bg-gray-900/60 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-violet-500/20 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-violet-950/10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                        <FiBriefcase className="w-5 h-5 text-violet-400 flex-shrink-0" />
                        {internship.role}
                      </h3>
                      <p className="text-violet-400 font-semibold mt-1">{internship.company}</p>
                    </div>
                    <a href={internship.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-violet-400 transition-colors p-2 rounded-lg hover:bg-violet-500/10">
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-5">
                    <span className="flex items-center gap-1.5"><FiCalendar className="w-3.5 h-3.5" />{internship.duration}</span>
                    <span className="flex items-center gap-1.5"><FiMapPin className="w-3.5 h-3.5" />{internship.location}</span>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-5">{internship.description}</p>

                  {/* Highlights */}
                  {internship.highlights && (
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold text-violet-400 mb-3 uppercase tracking-widest">Key Deliverables</h4>
                      <ul className="space-y-2">
                        {internship.highlights.map((item, i) => (
                          <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Outcome */}
                  {internship.outcome && (
                    <div className="mb-5 p-4 bg-violet-500/5 border border-violet-500/10 rounded-xl">
                      <h4 className="text-xs font-semibold text-violet-400 mb-1.5 uppercase tracking-widest">Outcome</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{internship.outcome}</p>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {internship.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg">{tech}</span>
                    ))}
                  </div>
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

export default InternshipSection;