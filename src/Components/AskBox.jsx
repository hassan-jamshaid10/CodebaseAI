import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { askQuestion, clearAnswer } from "../Features/RepoSlice";
import { motion } from "framer-motion";

const AskBox = () => {
  const [question, setQuestion] = useState("");
  const dispatch = useDispatch();
  const { loading, answer, error, repo } = useSelector((state) => state.repo);

  // Format answer with syntax highlighting and better typography
  const formatAnswer = (text) => {
    if (!text) return '';
    
    // First escape the entire text
    let formatted = escapeHtml(text);
    
    // Handle code blocks with triple backticks (do this first before other replacements)
    formatted = formatted.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      const language = lang || 'text';
      const cleanCode = code.trim();
      return `<div class="my-4">
        <div class="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg border-b border-gray-700">
          <span class="text-xs text-gray-400 font-mono">${language}</span>
          <button onclick="navigator.clipboard.writeText(\`${cleanCode.replace(/`/g, '\\`')}\`)" class="text-xs text-gray-400 hover:text-white transition-colors">Copy</button>
        </div>
        <pre class="bg-gray-800 p-4 rounded-b-lg overflow-x-auto"><code class="text-sm text-gray-100 font-mono whitespace-pre">${cleanCode}</code></pre>
      </div>`;
    });
    
    // Handle inline code with single backticks
    formatted = formatted.replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-blue-300 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');
    
    // Handle bold text
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>');
    
    // Handle italic text
    formatted = formatted.replace(/\*(.*?)\*/g, '<em class="italic text-gray-200">$1</em>');
    
    // Handle line breaks
    formatted = formatted.replace(/\n/g, '<br>');
    
    // Handle bullet points
    formatted = formatted.replace(/^[-*]\s(.+)$/gm, '<li class="ml-4 text-gray-200">$1</li>');
    
    // Wrap consecutive list items in ul
    formatted = formatted.replace(/(<li class="ml-4 text-gray-200">.*<\/li>)/gs, '<ul class="my-2 space-y-1">$1</ul>');
    
    return formatted;
  };

  // Escape HTML to prevent XSS
  const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      dispatch(askQuestion(question)); // ✅ will reject if no repo loaded
    }
  };

  return (
    <motion.div
      className="mt-8 p-6 sm:p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-extrabold mb-4 text-white tracking-tight">Ask a Question</h3>
      {!repo && <p className="text-gray-400">⚠️ Load a repository first.</p>}
      {repo && (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <motion.input
              type="text"
              placeholder="What does main.py do?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              whileFocus={{ scale: 1.01 }}
            />
            <motion.button
              type="submit"
              disabled={loading}
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-black rounded-xl font-semibold shadow-lg hover:shadow-white/20 transition-all duration-300 disabled:opacity-50"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Asking..." : "Ask"}
            </motion.button>
          </form>
          {error && <p className="text-red-400 mt-3">{error}</p>}
          {answer && (
            <motion.div
              className="mt-6 bg-gray-900/30 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Answer Header */}
              <div className="px-6 py-4 bg-gray-800/50 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">AI Response</h4>
                      <p className="text-xs text-gray-400">Generated answer</p>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(clearAnswer())}
                    className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white rounded-lg transition-all duration-200"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Answer Content */}
              <div className="p-6">
                <div 
                  className="text-gray-100 leading-relaxed"
                  style={{
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                    fontSize: '15px',
                    lineHeight: '1.7'
                  }}
                  dangerouslySetInnerHTML={{
                    __html: formatAnswer(answer)
                  }}
                />
              </div>
            </motion.div>
          )}
        </>
      )}
    </motion.div>
  );
};

export default AskBox;
