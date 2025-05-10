
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ImageGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/a548f162-d00e-4814-9cce-816035a99180.png",
      alt: "Quaid-e-Azam with Pakistan Flag",
      caption: "Founder of Pakistan against the backdrop of the national flag"
    },
    {
      src: "/lovable-uploads/226e0006-970b-4ed9-ac9f-b7675318d503.png",
      alt: "Quaid-e-Azam with Pakistan Crescent and Star",
      caption: "Portrait with the national symbols of Pakistan"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Jinnah1945c.jpg/800px-Jinnah1945c.jpg",
      alt: "Quaid-e-Azam Muhammad Ali Jinnah",
      caption: "A classic portrait of the visionary leader"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          Visual Legacy
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="h-80 overflow-hidden">
                <AspectRatio ratio={4/5} className="h-full">
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <p className="text-center text-gray-600 italic">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
