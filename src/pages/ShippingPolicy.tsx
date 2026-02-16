import { motion } from "framer-motion";
import { Truck, Package, Clock, Globe } from "lucide-react";
import { Layout } from "@/components/Layout";

const shippingOptions = [
  {
    icon: Package,
    title: "Standard Shipping",
    time: "5-7 Business Days",
    price: "Free on orders over $50, otherwise $5.99",
  },
  {
    icon: Truck,
    title: "Express Shipping",
    time: "2-3 Business Days",
    price: "$9.99 flat rate",
  },
  {
    icon: Clock,
    title: "Overnight Shipping",
    time: "Next Business Day",
    price: "$19.99 flat rate",
  },
];

const ShippingPolicy = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="mb-8 text-4xl font-bold text-foreground">Shipping Policy</h1>
            <p className="mb-8 text-muted-foreground">
              Last updated: January 2024
            </p>

            {/* Shipping Options */}
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {shippingOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl bg-card p-6 shadow-card text-center"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <option.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{option.title}</h3>
                  <p className="mb-1 text-sm text-primary font-medium">{option.time}</p>
                  <p className="text-sm text-muted-foreground">{option.price}</p>
                </motion.div>
              ))}
            </div>

            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Domestic Shipping (United States)</h2>
                <p className="text-muted-foreground">
                  We ship to all 50 states and U.S. territories. Orders are processed within 1-2 business 
                  days. Once shipped, you will receive a confirmation email with tracking information.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Free Shipping</h2>
                <p className="text-muted-foreground">
                  Enjoy free standard shipping on all orders over $50 within the continental United States. 
                  Orders under $50 will be charged a flat rate of $5.99 for standard shipping.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Order Processing</h2>
                <p className="mb-4 text-muted-foreground">
                  Orders placed before 2:00 PM PST on business days will be processed the same day. 
                  Orders placed after 2:00 PM PST or on weekends/holidays will be processed the next business day.
                </p>
                <p className="text-muted-foreground">
                  Processing time does not include shipping time. Please allow for the full estimated 
                  delivery window based on your selected shipping method.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Shipping Carriers</h2>
                <p className="text-muted-foreground">
                  We partner with trusted carriers including USPS, UPS, and FedEx to ensure your order 
                  arrives safely. The carrier used will depend on the shipping method selected and your location.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">International Shipping</h2>
                <p className="text-muted-foreground">
                  At this time, we only ship within the United States. We are working to expand our 
                  shipping options to international destinations. Please check back for updates.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Delivery Issues</h2>
                <p className="text-muted-foreground">
                  If your package is lost, damaged, or significantly delayed, please contact our customer 
                  service team at support@sheharyarllc.com within 14 days of the expected delivery date. 
                  We will work with the carrier to resolve the issue promptly.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">P.O. Boxes & APO/FPO Addresses</h2>
                <p className="text-muted-foreground">
                  We are happy to ship to P.O. Boxes and military APO/FPO addresses using USPS. Please note 
                  that delivery times may be longer for these addresses.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Questions?</h2>
                <p className="text-muted-foreground">
                  If you have any questions about our shipping policy, please contact us at:<br />
                  Email: support@sheharyarllc.com<br />
                  Phone: +13025573345
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ShippingPolicy;
