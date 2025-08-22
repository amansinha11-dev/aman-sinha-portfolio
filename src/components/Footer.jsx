// src/components/Footer.jsx

import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  // Use the same social links as Header for consistency
  const socialLinks = {
    github: "https://github.com/amansinha11-dev",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://www.linkedin.com/in/aman-sinha-2412res/",
    email: "mailto:sinhaaman478@gmail.com",
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo/Name */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
              Aman Sinha
            </h3>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-600 transition-colors duration-300"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-600 transition-colors duration-300"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-600 transition-colors duration-300"
            >
              <FiTwitter className="w-6 h-6" />
            </a>
            <a
              href={socialLinks.email}
              className="text-gray-400 hover:text-violet-600 transition-colors duration-300"
            >
              <FiMail className="w-6 h-6" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-violet-600 transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="hover:text-violet-600 transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-violet-600 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Aman Sinha. All rights reserved. Built with React & GSAP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
