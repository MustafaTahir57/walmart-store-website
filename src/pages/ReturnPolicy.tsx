import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

const ReturnPolicy = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="mb-8 text-4xl font-bold text-foreground">Return & Refund Policy</h1>
            <p className="mb-8 text-muted-foreground">
              Effective Date: January 2024
            </p>

            <div className="prose prose-gray max-w-none space-y-8">
              <p className="text-muted-foreground">
                At Little Bloom, we strive to ensure complete customer satisfaction. If you are 
                not satisfied with your purchase, we offer a straightforward return and refund process.
              </p>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">1. Return Eligibility</h2>
                <p className="mb-4 text-muted-foreground">
                  You may return most new, unused items within 30 days of delivery for a full 
                  refund or replacement.
                </p>
                <p className="mb-4 text-muted-foreground">To be eligible for a return:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>The item must be unused, undamaged, and in its original packaging.</li>
                  <li>Proof of purchase is required.</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">2. Non-Returnable Items</h2>
                <p className="mb-4 text-muted-foreground">Certain items cannot be returned, including:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Perishable goods</li>
                  <li>Personal care items</li>
                  <li>Customized or personalized products</li>
                  <li>Final sale items</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">3. Return Process</h2>
                <p className="text-muted-foreground">
                  To initiate a return, please contact our customer support team at 
                  support@sheharyarllc.com with your order number and reason for return. We will 
                  provide return instructions within 24 hours.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">4. Return Shipping</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    If the return is due to our error (wrong item, defective product, damaged 
                    in transit), we will cover return shipping costs.
                  </li>
                  <li>
                    If the return is due to customer preference, the customer is responsible 
                    for return shipping.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">5. Refunds</h2>
                <p className="mb-4 text-muted-foreground">
                  Once we receive and inspect your returned item, we will notify you of the 
                  approval or rejection of your refund.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    Approved refunds will be processed within 3–5 business days to the original 
                    payment method.
                  </li>
                  <li>
                    Shipping charges are non-refundable unless the return is due to our error.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">6. Exchanges</h2>
                <p className="text-muted-foreground">
                  We offer exchanges for defective or damaged items. Please contact us to 
                  arrange a replacement.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">7. Order Cancellations</h2>
                <p className="text-muted-foreground">
                  Orders can be canceled within 12 hours of purchase if they have not yet been 
                  shipped. Once shipped, the order must follow the standard return process.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ReturnPolicy;
