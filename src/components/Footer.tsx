import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Instagram, Linkedin, Youtube, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { label: 'Home', href: '#home' },
      { label: 'About Us', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Team', href: '#team' },
      { label: 'Events', href: '#events' },
      { label: 'Contact', href: '#contact' }
    ],
    resources: [
      { label: 'IEDC Official website', href: 'https://iedc.startupmission.in/' },
      { label: 'Startup Guide', href: 'https://emeritus.org/in/learn/how-to-start-a-startup-in-india/' },
      { label: 'Funding Resources', href: 'https://www.startupindia.gov.in/content/sih/en/funding.html' },
      { label: 'IEDC Kerala WhatsApp Channel', href: 'https://www.whatsapp.com/channel/0029VaAY5kI2Jl8FQrAt4K1K' },
      { label: 'Success Stories', href: 'https://www.startup.ind.in/2021/01/80-indian-startup-success-stories-for.html' },
      { label: 'Blog', href: 'https://www.startupindia.gov.in/content/sih/en/bloglist.html' }
    ],
    programs: [
      { label: 'Incubation Program', href: '#' },
      { label: 'Acceleration Track', href: '#' },
      { label: 'Workshops', href: '#' },
      { label: 'Hackathons', href: '#' },
      { label: 'Pitch Competitions', href: '#' },
      { label: 'Networking Events', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  IEDC
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Innovation and Entrepreneurship Development Cell at Kuttukaran Polytechnic College. 
                  Empowering students to transform ideas into impactful ventures through 
                  comprehensive support, mentorship, and a thriving ecosystem of innovation.
                </p>
                
                {/* Newsletter Signup */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-r-lg hover:shadow-lg transition-all duration-300"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.instagram.com/kptc_iedc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                  
                  <motion.a
                    href="https://www.linkedin.com/in/kptc-e-iedc-a53262334/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.youtube.com/@kptcofficial/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-all duration-300"
                  >
                    <Youtube className="h-5 w-5" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                {footerLinks.programs.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-green-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8 mb-8"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600 rounded-full">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Address</div>
                  <div className="text-white">Manakkappaddi- Manjali Road, Karumallor P O, N.Paravur, Ernakulam-683511</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-600 rounded-full">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <a href="mailto:iedc@college.edu" className="text-white hover:text-blue-400 transition-colors">
                    info@kuttukaranpoly.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-600 rounded-full">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <a href="tel:+15551234567" className="text-white hover:text-blue-400 transition-colors">
                    +91 8129077788
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} IEDC Kuttukaran Polytechnic College. All Rights Reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <div className="flex items-center text-gray-400 text-sm">
                  {/* <span>Made with</span> */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {/* <Heart className="h-4 w-4 mx-1 text-red-500" /> */}
                  </motion.div>
                  <span>Made with by KPTC IEDC Team</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;