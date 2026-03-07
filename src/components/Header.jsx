// src/components/Header.jsx

import React, { useState, useEffect } from "react";
import * as FramerMotion from "framer-motion";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMenu,
  FiX,
  FiMail,
} from "react-icons/fi";
import { scrollTo } from "../utils/scroll.js";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  const navItems = ["Home", "Projects", "Experience", "Certificates", "Contact", "About"];

  const socialLinks = {
    github: "https://github.com/amansinha11-dev",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://www.linkedin.com/in/aman-sinha-2412res/",
    email: "mailto:sinhaaman479@gmail.com",
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gray-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-violet-950/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo/Name */}
          <FramerMotion.motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center cursor-pointer group"
            onClick={() => scrollTo("home")}
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center text-white font-bold text-lg mr-3 shadow-lg shadow-violet-600/25 group-hover:shadow-violet-600/50 transition-shadow duration-300">
              A
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Aman <span className="text-violet-400">Sinha</span>
            </span>
          </FramerMotion.motion.div>

          {/* Desktop Navigation */}
          <nav className="lg:flex hidden items-center gap-1">
            {navItems.map((item, idx) => (
              <FramerMotion.motion.button
                key={item}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.06, duration: 0.5 }}
                className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
                onClick={() => scrollTo(item.toLowerCase())}
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </FramerMotion.motion.button>
            ))}
          </nav>

          {/* Right side: socials + CTA */}
          <div className="flex items-center gap-3">
            {/* Social Icons (desktop) */}
            <div className="hidden md:flex items-center gap-2">
              {[
                { icon: FiGithub, href: socialLinks.github, delay: 0.9 },
                { icon: FiTwitter, href: socialLinks.twitter, delay: 0.95 },
                { icon: FiLinkedin, href: socialLinks.linkedin, delay: 1.0 },
                { icon: FiMail, href: socialLinks.email, delay: 1.05 },
              ].map((social) => (
                <FramerMotion.motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: social.delay, duration: 0.5 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-300"
                >
                  <social.icon className="w-[18px] h-[18px]" />
                </FramerMotion.motion.a>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-gray-700/50" />

            {/* Hire Me Button */}
            <FramerMotion.motion.button
              onClick={openContactForm}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:scale-[1.03] transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Hire Me
            </FramerMotion.motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden ml-2 w-10 h-10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <FramerMotion.AnimatePresence>
          {isOpen && (
            <FramerMotion.motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-gray-950/95 backdrop-blur-xl border-t border-white/5"
            >
              <nav className="flex flex-col px-6 py-4 gap-1">
                {navItems.map((item, i) => (
                  <FramerMotion.motion.button
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => {
                      scrollTo(item.toLowerCase());
                      toggleMenu();
                    }}
                    className="text-left text-gray-300 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-200"
                  >
                    {item}
                  </FramerMotion.motion.button>
                ))}
              </nav>

              <div className="px-6 pb-6 pt-2 border-t border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  {[
                    { icon: FiGithub, href: socialLinks.github },
                    { icon: FiTwitter, href: socialLinks.twitter },
                    { icon: FiLinkedin, href: socialLinks.linkedin },
                    { icon: FiMail, href: socialLinks.email },
                  ].map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-300"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                <button
                  onClick={() => {
                    toggleMenu();
                    openContactForm();
                  }}
                  className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 font-semibold text-white text-center shadow-lg shadow-violet-600/25 transition-all duration-300"
                >
                  Hire Me
                </button>
              </div>
            </FramerMotion.motion.div>
          )}
        </FramerMotion.AnimatePresence>
      </header>

      {/* Contact Form Modal */}
      <FramerMotion.AnimatePresence>
        {contactFormOpen && (
          <FramerMotion.motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeContactForm}
          >
            <FramerMotion.motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-md p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
                  <p className="text-sm text-gray-400 mt-1">I'll get back to you soon</p>
                </div>
                <button
                  onClick={closeContactForm}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="access_key" value="e3a6f558-08b4-4af4-bfe6-4c37d0f2a0a0" />
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />

                <div>
                  <label htmlFor="modal-name" className="block text-sm font-medium text-gray-400 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-sm font-medium text-gray-400 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="modal-message" className="block text-sm font-medium text-gray-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    id="modal-message"
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 outline-none resize-none"
                  />
                </div>

                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                <FramerMotion.motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 transition-all duration-300"
                >
                  Send Message
                </FramerMotion.motion.button>
              </form>
            </FramerMotion.motion.div>
          </FramerMotion.motion.div>
        )}
      </FramerMotion.AnimatePresence>
    </>
  );
};

export default Header;
