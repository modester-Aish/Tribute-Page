
import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import AchievementsSection from "@/components/AchievementsSection";
import QuotesSection from "@/components/QuotesSection";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.header 
        className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container px-4 md:px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-serif font-bold text-pakistan">Quaid-e-Azam</h1>
          <nav className="hidden md:flex space-x-6">
            <Button variant="link" onClick={() => scrollToSection("biography")} className="transition-all hover:text-pakistan hover:scale-105">Biography</Button>
            <Button variant="link" onClick={() => scrollToSection("gallery")} className="transition-all hover:text-pakistan hover:scale-105">Gallery</Button>
            <Button variant="link" onClick={() => scrollToSection("achievements")} className="transition-all hover:text-pakistan hover:scale-105">Achievements</Button>
            <Button variant="link" onClick={() => scrollToSection("quotes")} className="transition-all hover:text-pakistan hover:scale-105">Quotes</Button>
          </nav>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="sm" variant="outline" className="border-pakistan text-pakistan hover:bg-pakistan hover:text-white">
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.header>
      
      {/* Spacer for fixed header */}
      <div className="h-16"></div>
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Biography Section */}
      <div id="biography">
        <BiographySection />
      </div>
      
      {/* Gallery Section */}
      <div id="gallery">
        <ImageGallery />
      </div>
      
      {/* Achievements Section */}
      <div id="achievements">
        <AchievementsSection />
      </div>
      
      {/* Quotes Section */}
      <div id="quotes">
        <QuotesSection />
      </div>
      
      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full w-12 h-12 bg-pakistan hover:bg-pakistan-light p-0 flex items-center justify-center shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-up"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
