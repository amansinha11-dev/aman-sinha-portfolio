// src/components/ContactSection.jsx

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'sinhaaman479@gmail.com', href: 'mailto:sinhaaman479@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+91 9939558412', href: 'tel:+919939558412' },
    { icon: FiMapPin, label: 'Location', value: 'Bhubaneswar, India', href: '#' },
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/amansinha11-dev', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/aman-sinha-2412res/', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } });
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } });
      gsap.fromTo(formRef.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.3, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } });
      gsap.fromTo(infoRef.current, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.3, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-black py-24 sm:py-28" id="contact">
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-violet-600/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-600/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p ref={subtitleRef} className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-3 opacity-0">Get In Touch</p>
          <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent opacity-0 tracking-tight">Let's Work Together</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full mt-4" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">Have a project in mind? Send me a message and let's create something amazing.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-start">
          {/* Contact Form */}
          <div ref={formRef} className="lg:col-span-3 opacity-0">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 sm:p-8 bg-gray-900/60 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-violet-500/20 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-violet-950/10">
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
                  <input type="hidden" name="access_key" value="e3a6f558-08b4-4af4-bfe6-4c37d0f2a0a0" />
                  <input type="hidden" name="from_name" value="Portfolio Contact Form" />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1.5">Name</label>
                      <input id="name" name="name" type="text" required placeholder="Your name" className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-gray-200 placeholder-gray-600 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 outline-none transition-all duration-300 text-sm" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1.5">Email</label>
                      <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-gray-200 placeholder-gray-600 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 outline-none transition-all duration-300 text-sm" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1.5">Subject</label>
                    <input id="subject" name="subject" type="text" required placeholder="What's this about?" className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-gray-200 placeholder-gray-600 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 outline-none transition-all duration-300 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1.5">Message</label>
                    <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project..." className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-gray-200 placeholder-gray-600 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 outline-none transition-all duration-300 resize-none text-sm" />
                  </div>

                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                  <button type="submit" className="w-full py-3.5 px-6 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-violet-600/20">
                    <FiSend className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div ref={infoRef} className="lg:col-span-2 space-y-5 opacity-0">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a key={index} href={info.href} target={info.href !== '#' ? '_blank' : undefined} rel="noopener noreferrer" className="group flex items-center gap-4 p-4 bg-gray-900/60 backdrop-blur-sm border border-white/5 rounded-xl hover:border-violet-500/20 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</p>
                    <p className="text-sm text-white font-medium">{info.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Social Links */}
            <div className="p-4 bg-gray-900/60 backdrop-blur-sm border border-white/5 rounded-xl shadow-lg shadow-violet-950/10">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Connect</p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 hover:bg-violet-500/20 hover:text-violet-300 transition-all duration-300" aria-label={social.label}>
                      <Icon className="w-4.5 h-4.5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 bg-gray-900/60 backdrop-blur-sm border border-white/5 rounded-xl shadow-lg shadow-emerald-950/10">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full" />
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping opacity-75" />
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-400">Available for opportunities</p>
                  <p className="text-xs text-gray-500">Currently accepting new projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-600/50 to-transparent" />
    </section>
  );
};

export default ContactSection;