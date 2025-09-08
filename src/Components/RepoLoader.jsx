import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRepo } from "../Features/RepoSlice";
import { motion } from "framer-motion";

const RepoLoader = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const dispatch = useDispatch();
  const { loading, error, repo } = useSelector((state) => state.repo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (repoUrl.trim()) {
      dispatch(loadRepo(repoUrl)); // ✅ uses query param inside slice
    }
  };

  return (
    <motion.div
      id="functionality"
      className="p-6 sm:p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-extrabold mb-5 text-white tracking-tight">Load a Repository</h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <motion.input
          type="url"
          placeholder="https://github.com/username/repo.git"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
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
          {loading ? "Loading..." : "Load Repo"}
        </motion.button>
      </form>
      {error && <p className="text-red-400 mt-3">{error}</p>}
      {repo && <p className="text-green-400 mt-3">✅ Repo Loaded Successfully!</p>}
    </motion.div>
  );
};

export default RepoLoader;
