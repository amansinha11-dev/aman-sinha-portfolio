// src/components/ContactSection.jsx

import React from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter
} from 'react-icons/fi';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6 text-white" />,
      label: 'Email',
      value: 'sinhaaman479@gmail.com',
      href: 'mailto:sinhaaman479@gmail.com'
    },
    {
      icon: <FiPhone className="w-6 h-6 text-white" />,
      label: 'Phone',
      value: '+91 12345 67890',
      href: 'tel:+911234567890'
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-white" />,
      label: 'Location',
      value: 'Bhubaneswar, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="w-6 h-6 text-white" />,
      href: 'https://github.com/amansinha11-dev',
      label: 'GitHub'
    },
    {
      icon: <FiLinkedin className="w-6 h-6 text-white" />,
      href: 'https://www.linkedin.com/in/aman-sinha-2412res/',
      label: 'LinkedIn'
    },
    {
      icon: <FiTwitter className="w-6 h-6 text-white" />,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-purple-900/20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '700ms' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="p-8 backdrop-blur-md bg-gray-900/50 border border-violet-500/20 rounded-2xl shadow-2xl">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              {/* Web3Forms access key */}
              <input
                type="hidden"
                name="access_key"
                value="e3a6f558-08b4-4af4-bfe6-4c37d0f2a0a0"
              />
              {/* Optional: customize the From Name in the email */}
              <input
                type="hidden"
                name="from_name"
                value="Portfolio Contact Form"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Honeypot Field */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-semibold rounded-lg shadow-glow transition-all duration-300 group"
              >
                <div className="flex items-center justify-center gap-2">
                  <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </div>
              </button>
            </form>
          </div>

          {/* Contact Information & Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-200 mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new opportunities, creative projects, or partnerships.
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-gray-900/60 backdrop-blur-md rounded-xl shadow-lg hover:shadow-violet-500/25 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>{info.icon}</div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-200 mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 flex items-center justify-center text-white hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 backdrop-blur-md bg-gradient-to-r from-violet-600/10 to-purple-700/10 border border-violet-500/20 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="font-medium text-green-400">Available for new projects</p>
                  <p className="text-sm text-gray-400">Currently accepting freelance work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
