import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { XCircle, ShoppingBag, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const CheckoutCanceled = () => {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-lg text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">
            <XCircle className="h-12 w-12 text-amber-600" />
          </div>

          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Checkout Canceled
          </h1>

          <p className="mb-8 text-lg text-muted-foreground">
            Your checkout was canceled and no payment was made. Your cart items are still saved if
            you'd like to try again.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link to="/shop" className="gap-2">
                <ShoppingBag className="h-4 w-4" />
                Return to Shop
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/" className="gap-2">
                Back to Home
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default CheckoutCanceled;
