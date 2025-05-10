
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="bg-gray-100 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container px-4 md:px-6">
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-serif text-2xl font-bold text-pakistan mb-2">Quaid-e-Azam</h3>
            <p className="text-sm text-gray-600">Remembering the Father of the Nation</p>
          </motion.div>
          <motion.div 
            className="text-sm text-gray-500"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>&copy; {currentYear} | A tribute to Muhammad Ali Jinnah</p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
