import { motion } from "framer-motion";
import { FiCpu, FiTarget, FiCode, FiZap, FiShield, FiGlobe, FiDatabase } from "react-icons/fi";
import { SiReact, SiPython, SiHuggingface, SiSwagger, SiFastapi, SiLangchain } from "react-icons/si";

const techFeatures = [
  {
    icon: FiTarget,
    title: "Advanced AI Models",
    description: "Powered by state-of-the-art language models for deep code understanding and intelligent analysis."
  },
  {
    icon: FiCode,
    title: "Multi-Language Support",
    description: "Supports 50+ programming languages with syntax-aware parsing and context understanding."
  },
  {
    icon: FiZap,
    title: "Real-time Processing",
    description: "Lightning-fast analysis with streaming responses and instant code insights."
  },
  {
    icon: FiShield,
    title: "Secure & Private",
    description: "Enterprise-grade security with encrypted data transmission and privacy-first architecture."
  },
  {
    icon: FiGlobe,
    title: "Cloud Infrastructure",
    description: "Scalable cloud architecture ensuring 99.9% uptime and global accessibility."
  },
  {
    icon: FiCpu,
    title: "Smart Caching",
    description: "Intelligent caching system for faster responses and reduced computational overhead."
  }
];

const About = () => {
  return (
    <section className="py-24 text-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            About Codebase AI
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Built with cutting-edge technology to revolutionize how developers understand and interact with codebases. 
            Our platform combines advanced AI, modern web technologies, and intuitive design to deliver unparalleled code analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8">Powered by Modern Technology</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-6 max-w-6xl mx-auto justify-items-center">
            {/* RAG */}
            <motion.div
              className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group w-full max-w-[120px]"
              whileHover={{ scale: 1.05, y: -2 }}
            >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <FiTarget className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-center">RAG</span>
            </motion.div>

            {/* AI Models */}
            <motion.div
              className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group w-full max-w-[120px]"
              whileHover={{ scale: 1.05, y: -2 }}
            >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <FiCpu className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-center">AI Models</span>
            </motion.div>

            {/* React */}
            <motion.div
              className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group w-full max-w-[120px]"
              whileHover={{ scale: 1.05, y: -2 }}
            >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <SiReact className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-center">React</span>
            </motion.div>

            {/* FastAPI */}
            <motion.div
              className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group w-full max-w-[120px]"
              whileHover={{ scale: 1.05, y: -2 }}
            >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <SiFastapi className="w-5 h-5 sm:w-6 sm:h-6 text-green-300" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-center">FastAPI</span>
            </motion.div>

            {/* Swagger */}
            <motion.div
              className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group w-full max-w-[120px]"
              whileHover={{ scale: 1.05, y: -2 }}
            >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <SiSwagger className="w-5 h-5 sm:w-6 sm:h-6 text-green-300" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-center">Swagger</span>
            </motion.div>

            {/* Python */}
            <motion.div
              className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group w-full max-w-[120px]"
              whileHover={{ scale: 1.05, y: -2 }}
            >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <SiPython className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-center">Python</span>
            </motion.div>

            {/* LangChain */}
            <motion.div
              className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group w-full max-w-[120px]"
              whileHover={{ scale: 1.05, y: -2 }}
            >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <SiLangchain className="w-5 h-5 sm:w-6 sm:h-6 text-red-300" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-center">LangChain</span>
            </motion.div>

            {/* ChromaDB */}
            <motion.div
              className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group w-full max-w-[120px]"
              whileHover={{ scale: 1.05, y: -2 }}
            >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <FiDatabase className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-center">ChromaDB</span>
            </motion.div>

            {/* Hugging Face */}
            <motion.div
              className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group w-full max-w-[120px]"
              whileHover={{ scale: 1.05, y: -2 }}
            >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <SiHuggingface className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-center">HuggingFace</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
