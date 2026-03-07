// src/components/Footer.jsx

import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/amansinha11-dev', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/aman-sinha-2412res/', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:sinhaaman479@gmail.com', label: 'Email' },
  ];

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Aman Sinha</h3>
            <p className="text-sm text-gray-500 mt-1.5">Full-Stack Developer & AI Enthusiast</p>
            <p className="text-xs text-gray-600 mt-2">Building reliable web experiences with modern frontend and backend stacks.</p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-center">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-gray-500 hover:text-violet-400 transition-colors duration-300">{link.label}</a>
            ))}
          </div>

          {/* Socials + Back to top */}
          <div className="flex items-center gap-4 sm:justify-end">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-violet-400 transition-colors duration-300" aria-label={social.label}>
                  <Icon className="w-4.5 h-4.5" />
                </a>
              );
            })}
            <button onClick={scrollToTop} className="ml-2 w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-violet-400 hover:border-violet-500/20 transition-all duration-300" aria-label="Back to top">
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-gray-600">&copy; 2025 Aman Sinha. Built with React, GSAP & Spline.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;