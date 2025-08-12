
// src/components/ServicesPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and beautiful interfaces that enhance user experience and engagement.",
    icon: (
      <svg className="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description: "Building fast, responsive, and accessible websites with modern technologies.",
    icon: (
      <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Mobile Apps",
    description: "Creating cross-platform mobile applications with beautiful interfaces and smooth performance.",
    icon: (
      <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "SEO Optimization",
    description: "Improving your website's visibility and ranking on search engines.",
    icon: (
      <svg className="w-12 h-12 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment for your applications.",
    icon: (
      <svg className="w-12 h-12 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Consulting",
    description: "Expert advice to help you make the right technology decisions.",
    icon: (
      <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const ServicesPage = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Offer</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your digital needs, delivered with excellence.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 mb-6 rounded-full bg-gray-700/50">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <button className="mt-6 px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-orange-600 rounded-full hover:opacity-90 transition-opacity">
                  Learn more
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;