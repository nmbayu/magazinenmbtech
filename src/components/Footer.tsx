import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    explore: [
      'Latest Articles',
      'Featured Stories',
      'Categories',
      'Popular Posts',
      'Editorial Calendar'
    ],
    categories: [
      'Photography',
      'Art & Design',
      'Technology',
      'Travel',
      'Food & Culture',
      'Lifestyle'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Press Kit',
      'Contact'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Editorial Guidelines',
      'Accessibility'
    ]
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 pt-16 pb-8 relative">
        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">MagArt</h3>
                <p className="text-white/60 text-sm">Modern Magazine</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Inspiring creativity and sparking conversations through thoughtful storytelling, artistic exploration, and cultural insights that matter.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <Mail size={16} />
                <span className="text-sm">hello@magart.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone size={16} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin size={16} />
                <span className="text-sm">New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Explore */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
                <ul className="space-y-3">
                  {footerSections.explore.map((item, index) => (
                    <li key={index}>
                      <a href="#" className="text-white/70 hover:text-orange-400 text-sm transition-colors duration-300 hover:translate-x-1 transform inline-block">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
                <ul className="space-y-3">
                  {footerSections.categories.map((item, index) => (
                    <li key={index}>
                      <a href="#" className="text-white/70 hover:text-orange-400 text-sm transition-colors duration-300 hover:translate-x-1 transform inline-block">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-3">
                  {footerSections.company.map((item, index) => (
                    <li key={index}>
                      <a href="#" className="text-white/70 hover:text-orange-400 text-sm transition-colors duration-300 hover:translate-x-1 transform inline-block">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-3">
                  {footerSections.legal.map((item, index) => (
                    <li key={index}>
                      <a href="#" className="text-white/70 hover:text-orange-400 text-sm transition-colors duration-300 hover:translate-x-1 transform inline-block">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-white/60 text-sm">
              © {currentYear} MagArt. All rights reserved. Made with passion for creativity.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <IconComponent className="text-white group-hover:text-white" size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;