import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex items-center text-white relative overflow-hidden px-8">
      <div className="w-full max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          The AI Code Explainer
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Built to make you extraordinarily productive, CodeBase is the best way to learn code with AI.
        </motion.p>

        <div className="mt-10 flex items-center justify-center gap-4 flex-col sm:flex-row">
          <motion.a
            href="#download-windows"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-xl shadow-lg font-semibold hover:shadow-white/20 transition-all duration-300"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Try it now
          </motion.a>
          <motion.a
            href="#downloads"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur border border-white/20 text-white rounded-xl font-semibold hover:bg-white/15 transition-all duration-300"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Read Docs
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
