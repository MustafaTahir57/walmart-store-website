import { motion } from "framer-motion";
import { RefreshCw, CheckCircle, XCircle, AlertCircle } from "lucide-react";
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
              Last updated: January 2024
            </p>

            {/* Return Promise */}
            <div className="mb-12 rounded-2xl bg-primary/5 p-8 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <RefreshCw className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-foreground">30-Day Hassle-Free Returns</h2>
              <p className="text-muted-foreground">
                We want you to be completely happy with your purchase. If something isn't right, 
                we'll make it right.
              </p>
            </div>

            {/* Eligible / Not Eligible */}
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-card p-6 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-foreground">Eligible for Return</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Items in original, unworn condition</li>
                  <li>• Items with original tags attached</li>
                  <li>• Items in original packaging</li>
                  <li>• Items returned within 30 days of delivery</li>
                  <li>• Defective or damaged items</li>
                  <li>• Incorrect items received</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-destructive" />
                  <h3 className="text-lg font-semibold text-foreground">Not Eligible for Return</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Items that have been worn or washed</li>
                  <li>• Items without original tags</li>
                  <li>• Items marked as "Final Sale"</li>
                  <li>• Items returned after 30 days</li>
                  <li>• Items with visible signs of wear</li>
                  <li>• Personalized or customized items</li>
                </ul>
              </div>
            </div>

            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">How to Initiate a Return</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                  <li>Contact our customer service team at support@littlebloom.com with your order number</li>
                  <li>We will send you a return authorization and prepaid shipping label</li>
                  <li>Pack items securely in their original packaging if possible</li>
                  <li>Attach the prepaid shipping label and drop off at any authorized location</li>
                  <li>Once received and inspected, we will process your refund within 5-7 business days</li>
                </ol>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Free Return Shipping</h2>
                <p className="text-muted-foreground">
                  We offer free return shipping on all orders within the United States. A prepaid return 
                  label will be provided when you initiate your return. International returns may be 
                  subject to shipping charges.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Refund Process</h2>
                <p className="mb-4 text-muted-foreground">
                  Once we receive your return and verify that items meet our return conditions, we will 
                  process your refund to the original payment method. Please allow:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Credit/Debit Cards:</strong> 5-10 business days for the refund to appear on your statement</li>
                  <li><strong>PayPal:</strong> 3-5 business days</li>
                  <li><strong>Other Payment Methods:</strong> Processing times may vary</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Exchanges</h2>
                <p className="text-muted-foreground">
                  We do not offer direct exchanges at this time. If you need a different size or color, 
                  please return the original item for a refund and place a new order for the desired item.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Defective or Damaged Items</h2>
                <p className="text-muted-foreground">
                  If you receive a defective or damaged item, please contact us immediately at 
                  support@littlebloom.com. Include photos of the damage and your order number. 
                  We will arrange for a replacement or full refund at no additional cost to you.
                </p>
              </section>

              <section className="rounded-xl border border-border bg-muted/30 p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Need Help?</h3>
                    <p className="text-muted-foreground">
                      Our customer service team is here to help with any questions about returns or refunds.<br />
                      Email: support@littlebloom.com<br />
                      Phone: (555) 123-4567<br />
                      Hours: Monday-Friday, 9am-5pm PST
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ReturnPolicy;
