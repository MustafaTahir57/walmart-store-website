import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="mb-8 text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="mb-8 text-muted-foreground">
              Last updated: January 2024
            </p>

            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Little Bloom LLC ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website or make a purchase from us.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">2. Information We Collect</h2>
                <p className="mb-4 text-muted-foreground">We collect information you provide directly to us, including:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Name and contact information (email address, phone number, shipping address)</li>
                  <li>Payment information (processed securely through our payment provider)</li>
                  <li>Order history and preferences</li>
                  <li>Communications you send to us</li>
                  <li>Account information if you create an account</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
                <p className="mb-4 text-muted-foreground">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Send order confirmations and shipping updates</li>
                  <li>Respond to your comments and questions</li>
                  <li>Provide customer support</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">4. Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell your personal information. We may share your information with third 
                  parties only as necessary to provide our services, including shipping carriers, 
                  payment processors, and as required by law.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">5. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">6. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  While we sell children's clothing, our website is intended for use by adults. 
                  We do not knowingly collect personal information from children under 13. 
                  If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">7. Your Rights</h2>
                <p className="mb-4 text-muted-foreground">Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">8. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at:<br />
                  Email: support@littlebloom.com<br />
                  Address: 123 Little Street, Suite 100, Los Angeles, CA 90001
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
