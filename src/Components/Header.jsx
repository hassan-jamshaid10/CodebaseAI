import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiMenu,FiMail, FiInfo, FiX, FiTrendingUp, FiTarget, FiZap,FiGlobe,FiBarChart} from "react-icons/fi";
import { SiRocket } from 'react-icons/si';


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 20);}; window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);}, []);

  const navItems = 
  [
    { name: 'Home', icon: FiHome, href: '#dashboard' },
    { name: 'About', icon: FiInfo, href: '#analyze' },
    { name: 'Contact', icon: FiMail, href: '#trends' },
];


  const pulseVariants = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const slideInVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 lg:h-20">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              variants={pulseVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <FiZap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 rounded-xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 bg-clip-text text-transparent">
                Codebase AI
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Ask, Learn, Code Better.</p>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </motion.header>
  );
};

export default Header;
