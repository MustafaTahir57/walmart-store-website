import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const CheckoutSuccess = () => {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-lg text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Thank You for Your Order!
          </h1>

          <p className="mb-8 text-lg text-muted-foreground">
            Your order has been placed successfully. We've sent a confirmation email with your order
            details.
          </p>

          <div className="mb-8 rounded-2xl border border-border bg-muted/30 p-6">
            <div className="flex items-center justify-center gap-3 text-foreground">
              <Package className="h-6 w-6 text-primary" />
              <span className="font-medium">Estimated Delivery: 5-7 Business Days</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link to="/shop" className="gap-2">
                Continue Shopping
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default CheckoutSuccess;
