import { motion } from "framer-motion";
import { Heart, Shield, Leaf, Users, Award, CheckCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import teamImage from "@/assets/about-team.jpg";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every piece in our collection is chosen with the same care we'd give to our own children's wardrobe.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "All products meet strict CPSIA safety standards and are tested for harmful substances.",
  },
  {
    icon: Leaf,
    title: "Quality Materials",
    description: "We prioritize organic cotton and eco-friendly fabrics that are gentle on sensitive skin.",
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "As parents ourselves, we understand what matters most when dressing your little ones.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              About Little Bloom
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              We're a family-owned business dedicated to providing comfortable, 
              safe, and stylish clothing for your little ones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={teamImage}
                alt="Little Bloom team"
                className="rounded-3xl shadow-hover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Our Story
              </h2>
              <p className="text-muted-foreground">
                Little Bloom was born from a simple idea: children deserve clothing that's as 
                comfortable as it is adorable, and parents deserve peace of mind knowing their 
                kids are wearing safe, quality materials.
              </p>
              <p className="text-muted-foreground">
                As parents ourselves, we experienced firsthand the challenge of finding children's 
                clothing that met our standards for quality, safety, and style. We wanted fabrics 
                that were soft against sensitive skin, designs that could withstand endless adventures, 
                and fits that allowed for unrestricted play.
              </p>
              <p className="text-muted-foreground">
                That's why we created Little Bloom – a carefully curated collection of children's 
                clothing and shoes that we're proud to dress our own kids in. Every item is selected 
                with attention to material quality, safety certifications, and timeless design.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Registered LLC</p>
                  <p className="text-sm text-muted-foreground">Officially registered business entity</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The principles that guide everything we do at Little Bloom
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-card p-6 shadow-card text-center"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Safety */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Quality & Safety Standards
              </h2>
              <p className="text-muted-foreground">
                We take the safety of your children seriously. Here's how we ensure every product meets our high standards.
              </p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "CPSIA compliant – meets all U.S. safety requirements for children's products",
                "OEKO-TEX certified fabrics – tested for harmful substances",
                "Lead-free and phthalate-free materials throughout",
                "Reinforced stitching and secure button attachments",
                "Pre-washed fabrics for immediate softness and comfort",
                "Regular quality control inspections on all inventory",
                "Ethically sourced materials from trusted suppliers",
                "Child-safe design with no small detachable parts for young children",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-muted-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Ready to Shop?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Explore our collection of safe, comfortable, and adorable children's clothing.
            </p>
            <Button asChild size="lg">
              <Link to="/shop">Shop Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
