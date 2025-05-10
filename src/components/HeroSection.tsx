
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pakistan/10 to-pakistan/30 -z-10"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633248421625-381d55b28369?q=80&w=2070')] 
        bg-cover bg-center bg-no-repeat opacity-10 -z-20"
      ></div>
      
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Quaid-e-Azam
            <span className="block text-xl md:text-2xl text-pakistan mt-2">
              Muhammad Ali Jinnah
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Founder of Pakistan & First Governor-General
            <span className="block text-sm text-gray-500">(December 25, 1876 - September 11, 1948)</span>
          </p>
          <motion.p 
            className="text-base md:text-lg border-l-4 border-pakistan pl-4 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            "With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve."
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative w-64 h-80 md:w-80 md:h-96">
            <motion.div 
              className="absolute inset-0 border-2 border-pakistan rounded-md"
              animate={{ rotate: [0, 3, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
            <motion.img 
              src="/lovable-uploads/a548f162-d00e-4814-9cce-816035a99180.png" 
              alt="Quaid-e-Azam Muhammad Ali Jinnah with Pakistan Flag" 
              className="absolute inset-0 object-cover w-full h-full rounded-md shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
