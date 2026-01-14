import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="mb-8 text-4xl font-bold text-foreground">Terms & Conditions</h1>
            <p className="mb-8 text-muted-foreground">
              Last updated: January 2024
            </p>

            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">1. Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using the Little Bloom website and services, you agree to be bound by 
                  these Terms and Conditions. If you do not agree to these terms, please do not use our website.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">2. Use of Website</h2>
                <p className="text-muted-foreground">
                  You may use our website for lawful purposes only. You agree not to use our website in any 
                  way that could damage, disable, or impair the site, or interfere with any other party's 
                  use of the site.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">3. Products and Pricing</h2>
                <p className="mb-4 text-muted-foreground">
                  We strive to provide accurate product descriptions and pricing. However, we reserve the 
                  right to correct any errors and to change prices without notice. All prices are in US Dollars.
                </p>
                <p className="text-muted-foreground">
                  Product availability is subject to change. We reserve the right to limit quantities and to 
                  discontinue products at any time.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">4. Orders and Payment</h2>
                <p className="mb-4 text-muted-foreground">
                  By placing an order, you represent that you are at least 18 years old or have parental 
                  consent. We reserve the right to refuse or cancel any order for any reason.
                </p>
                <p className="text-muted-foreground">
                  Payment must be received before orders are processed. We accept major credit cards and 
                  other payment methods as indicated on our website.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">5. Shipping</h2>
                <p className="text-muted-foreground">
                  Shipping times and costs vary based on location and shipping method selected. We are not 
                  responsible for delays caused by shipping carriers or customs processing. Risk of loss 
                  passes to you upon delivery to the carrier.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">6. Returns and Refunds</h2>
                <p className="text-muted-foreground">
                  Please refer to our Return Policy for detailed information about returns and refunds. 
                  By making a purchase, you agree to our Return Policy terms.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">7. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content on this website, including text, graphics, logos, images, and software, is 
                  the property of Little Bloom LLC and is protected by copyright and trademark laws. You 
                  may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">8. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the fullest extent permitted by law, Little Bloom LLC shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages arising from your use 
                  of our website or products.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">9. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of the State 
                  of California, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">10. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms and Conditions, please contact us at:<br />
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

export default Terms;
