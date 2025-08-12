import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! (Demo)");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Background Gradient Shapes */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Have an idea or project? Let’s connect and create something amazing together.
          </p>
        </motion.div>

        {/* Content Area */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/3 p-8 bg-gray-800/40 backdrop-blur-lg rounded-2xl border border-gray-700 hover:border-pink-500/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            <div className="space-y-6 text-gray-300">
              {[
                {
                  title: "Email",
                  value: "contact@example.com",
                  icon: (
                    <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2V18c0 1.1..."/>
                    </svg>
                  ),
                },
                {
                  title: "Phone",
                  value: "+123-456-7890",
                  icon: (
                    <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83..."/>
                    </svg>
                  ),
                },
                {
                  title: "Address",
                  value: "123 Main Street, Anytown, USA",
                  icon: (
                    <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13..."/>
                    </svg>
                  ),
                },
              ].map((info, i) => (
                <div key={i} className="flex items-start gap-3 hover:scale-105 transition-transform duration-300">
                  {info.icon}
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="w-full md:w-2/3 space-y-6 bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 hover:border-pink-500/40 transition-all duration-300"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-300 mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-1 block">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                required
                placeholder="Your Message"
                className="w-full p-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all resize-y"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(236,72,153,0.6)" }}
              type="submit"
              className="w-full px-8 py-4 rounded-lg font-bold text-lg text-white bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 shadow-lg transition-all duration-300"
            >
              Send Message 🚀
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
