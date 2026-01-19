import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="mb-8 text-4xl font-bold text-foreground">About Us</h1>

            <div className="prose prose-gray max-w-none space-y-6">
              <p className="text-lg text-muted-foreground">
                Welcome to Little Bloom, your trusted destination for high-quality products at 
                competitive prices. We are committed to delivering an excellent online shopping 
                experience through reliable service, fast shipping, and outstanding customer support.
              </p>

              <p className="text-muted-foreground">
                Our mission is to provide customers with carefully selected products that meet 
                high standards of quality and value. We work closely with trusted suppliers and 
                logistics partners to ensure timely delivery and consistent product availability.
              </p>

              <p className="text-muted-foreground">
                At Little Bloom, customer satisfaction is our top priority. Our dedicated support 
                team is always available to assist with orders, product inquiries, and after-sales 
                service. We believe in building long-term relationships with our customers based 
                on trust, transparency, and reliability.
              </p>

              <p className="text-lg font-medium text-foreground">
                Thank you for choosing Little Bloom — we look forward to serving you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
