
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const quotes = [
  {
    text: "With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.",
    context: "Address to the Muslim University Union, Aligarh, 1944"
  },
  {
    text: "No nation can rise to the height of glory unless your women are side by side with you.",
    context: "Speech at Muslim University Union, Aligarh, March 10, 1944"
  },
  {
    text: "Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man.",
    context: "Address to Civil, Naval, Military and Air Force Officers, October 11, 1947"
  },
  {
    text: "Failure is a word unknown to me.",
    context: "Personal motto frequently mentioned in his speeches"
  }
];

const QuotesSection = () => {
  return (
    <section className="py-16 bg-pakistan/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Famous Quotes</h2>
          <Separator className="mx-auto w-24 bg-pakistan h-1 rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pakistan"
            >
              <blockquote>
                <p className="text-lg italic mb-4">&ldquo;{quote.text}&rdquo;</p>
                <footer className="text-sm text-gray-500">{quote.context}</footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
