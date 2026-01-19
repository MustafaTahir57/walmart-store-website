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
              Effective Date: January 2024
            </p>

            <div className="prose prose-gray max-w-none space-y-8">
              <p className="text-muted-foreground">
                At Little Bloom, we respect your privacy and are committed to protecting your 
                personal information. This Privacy Policy explains how we collect, use, and 
                safeguard your data when you visit or make a purchase from our website.
              </p>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">1. Information We Collect</h2>
                <p className="mb-4 text-muted-foreground">
                  We collect personal information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Shipping and billing address</li>
                  <li>Payment information (processed securely through third-party payment providers)</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  We may also collect non-personal information such as browser type, device 
                  information, and website usage data.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
                <p className="mb-4 text-muted-foreground">We use your information to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Process and fulfill orders</li>
                  <li>Communicate order updates</li>
                  <li>Provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Prevent fraud and unauthorized activity</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">3. Sharing of Information</h2>
                <p className="mb-4 text-muted-foreground">
                  We do not sell or rent your personal information. We may share your data only with:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Payment processors</li>
                  <li>Shipping carriers</li>
                  <li>Service providers necessary to operate our business</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  All third parties are required to maintain the confidentiality of your information.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal data against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">5. Cookies</h2>
                <p className="text-muted-foreground">
                  Our website uses cookies to improve user experience, analyze traffic, and 
                  personalize content. You may choose to disable cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">6. Your Rights</h2>
                <p className="mb-4 text-muted-foreground">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  To exercise these rights, contact us at support@littlebloom.com.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">7. Policy Updates</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy periodically. Changes will be posted on this 
                  page with a revised effective date.
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
