import { motion } from "framer-motion";
import { FiGitBranch, FiHelpCircle, FiZap } from "react-icons/fi";

const steps = [
  { icon: FiGitBranch, title: "1. Load Repo", desc: "Enter your GitHub repo URL to analyze." },
  { icon: FiHelpCircle, title: "2. Ask Anything", desc: "Type your coding questions in the box." },
  { icon: FiZap, title: "3. Get Insights", desc: "AI explains code files and logic instantly." },
];

const HowItWorks = () => {
  return (
    <section className="py-24 text-white relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          How It Works
        </motion.h2>

        <motion.p
          className="mt-4 text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Load a repository, ask anything about the code, and get instant insights.
        </motion.p>

        <div className="mt-16 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
            <div className="flex justify-between items-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-purple-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
