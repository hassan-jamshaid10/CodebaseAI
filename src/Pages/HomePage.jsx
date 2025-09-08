import Header from "../Components/Header";  // ✅ import your header
import Hero from "../Components/Hero";
import About from "../Components/About";
import HowItWorks from "../Components/HowItWorks";
import RepoLoader from "../Components/RepoLoader";
import AskBox from "../Components/AskBox";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div className="text-white bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen">
      <Header />   {/* ✅ render header at the top */}
      <Hero />
      <About />
      <HowItWorks />
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
        <RepoLoader />
        <AskBox />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
