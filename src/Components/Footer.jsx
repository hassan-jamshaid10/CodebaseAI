import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiTrendingUp, 
  FiTarget, 
  FiBarChart,
  FiZap,
  FiShield
} from 'react-icons/fi';
import { SiRocket } from 'react-icons/si';

const Footer = () => {
  const features = [
    { icon: FiBarChart, title: "Code Analysis", desc: "AI-powered code understanding" },
    { icon: FiTarget, title: "Smart Explanations", desc: "Clear code breakdowns" },
    { icon: FiTrendingUp, title: "Learning Paths", desc: "Personalized tutorials" },
    { icon: FiShield, title: "Secure Platform", desc: "Enterprise-grade security" }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Effects */}
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%239C92AC\\' fill-opacity=\\'0.05\\'%3E%3Ccircle cx=\\'30\\' cy=\\'30\\' r=\\'2\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="pt-16 pb-8"
        >
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                  className="relative"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FiZap className="w-7 h-7 text-white" />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 rounded-xl opacity-30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                    Codebase AI
                  </h2>
                  <p className="text-gray-300 text-sm">Ask, Learn, Code Better</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Master programming with AI-powered code explanations, interactive tutorials, and personalized learning paths. 
                Understand complex codebases, learn best practices, and accelerate your coding journey.
              </p>

            </motion.div>

            {/* Features Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-6 text-white">Learning Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200"
                    whileHover={{ y: -2, scale: 1.02 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 pb-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Codebase AI. All rights reserved. Built with ❤️ for developers.
            
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <SiRocket className="w-4 h-4 text-purple-400" />
              </motion.div>
              <span>for the future</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </footer>
  );
};

export default Footer;
