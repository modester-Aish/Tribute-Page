
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const achievements = [
  {
    year: "1906",
    title: "Joined Indian National Congress",
    description: "Began his political career as a member of the Indian National Congress."
  },
  {
    year: "1913",
    title: "Joined Muslim League",
    description: "Became a member of the All India Muslim League and later its president."
  },
  {
    year: "1916",
    title: "Lucknow Pact",
    description: "Instrumental in formulating the Lucknow Pact between the Congress and the Muslim League."
  },
  {
    year: "1929",
    title: "14 Points",
    description: "Presented the famous Fourteen Points, outlining Muslim demands and concerns."
  },
  {
    year: "1940",
    title: "Pakistan Resolution",
    description: "Led the historic Lahore Resolution, formally demanding a separate Muslim homeland."
  },
  {
    year: "1947",
    title: "Creation of Pakistan",
    description: "Successfully negotiated the creation of Pakistan as a separate nation-state."
  },
  {
    year: "1947",
    title: "First Governor-General",
    description: "Became the first Governor-General of Pakistan after its independence."
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Achievements</h2>
          <Separator className="mx-auto w-24 bg-pakistan h-1 rounded-full" />
        </motion.div>
        
        <div className="relative pl-8 md:pl-12 mt-12">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-pakistan/30"></div>
          
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-10 relative timeline-item"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-7 w-5 h-5 rounded-full bg-pakistan -ml-[10px] border-4 border-white"></div>
              
              {/* Timeline Line to Next Dot */}
              <div className={`absolute left-0 top-7 w-px bg-pakistan h-full ${index === achievements.length - 1 ? 'hidden' : ''}`}></div>
              
              <div className="pl-8 pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-pakistan text-white text-sm font-medium mb-2">
                  {achievement.year}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
