
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const BiographySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Biography</h2>
          <Separator className="mx-auto w-24 bg-pakistan h-1 rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-pakistan">Early Life & Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Born on December 25, 1876, in Karachi, Quaid-e-Azam Muhammad Ali Jinnah came from a merchant family. His father, Jinnahbhai Poonja, was a prosperous merchant.
                </p>
                <p>
                  He received his early education in Karachi and later went to London in 1892 to study law. At the age of 20, he became the youngest Indian to be called to the bar in England. After completing his formal education, he returned to India in 1896 and started his legal practice in Bombay.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-pakistan">Political Career</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Jinnah began his political career by joining the Indian National Congress in 1906. Initially, he was a strong advocate of Hindu-Muslim unity and was known as the "Ambassador of Hindu-Muslim Unity."
                </p>
                <p>
                  By 1913, he joined the All India Muslim League. His political ideology evolved significantly over time, from believing in united India to becoming convinced that Muslims needed a separate nation to protect their rights and identity.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-pakistan">Pakistan Movement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  By the 1940s, Jinnah had become the undisputed leader of the Muslim League. Under his leadership, the historic Pakistan Resolution was passed in Lahore on March 23, 1940, formally demanding a separate homeland for Muslims.
                </p>
                <p>
                  His strategic leadership, political acumen, and unwavering determination led to the creation of Pakistan on August 14, 1947, despite overwhelming odds and opposition from both the British and the Indian National Congress.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-pakistan">Final Years</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  After the creation of Pakistan, Jinnah became its first Governor-General. Despite his failing health, he worked tirelessly to establish the new nation's government and institutions.
                </p>
                <p>
                  Tragically, just a year after achieving his life's greatest accomplishment, Quaid-e-Azam passed away on September 11, 1948, in Karachi, leaving behind a nascent nation that would forever regard him as the Father of the Nation.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
