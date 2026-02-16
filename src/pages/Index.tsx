import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Leaf, RefreshCw, Heart, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { CategoryCard } from "@/components/CategoryCard";
import { TrustBadge } from "@/components/TrustBadge";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { getFeaturedProducts } from "@/data/products";

import heroImage from "@/assets/hero-kids.jpg";
import categoryBoys from "@/assets/category-boys.jpg";
import categoryGirls from "@/assets/category-girls.jpg";
import categoryBaby from "@/assets/category-baby.jpg";
import categoryShoes from "@/assets/category-shoes.jpg";

const categories = [
  {
    title: "Boys Clothing",
    description: "Comfortable styles for little adventurers",
    image: categoryBoys,
    link: "/shop?category=boys",
  },
  {
    title: "Girls Clothing",
    description: "Pretty outfits for every occasion",
    image: categoryGirls,
    link: "/shop?category=girls",
  },
  {
    title: "Baby Clothing",
    description: "Soft essentials for your little one",
    image: categoryBaby,
    link: "/shop?category=baby",
  },
  {
    title: "Kids Shoes",
    description: "Durable footwear for active kids",
    image: categoryShoes,
    link: "/shop?category=shoes",
  },
];

const trustBadges = [
  {
    icon: Leaf,
    title: "Quality Materials",
    description: "Premium organic cotton and OEKO-TEX certified fabrics for sensitive skin",
  },
  {
    icon: Shield,
    title: "Kid-Safe Standards",
    description: "All products meet CPSIA safety requirements and are free from harmful chemicals",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free returns with free return shipping on all orders",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free standard shipping on orders over $50 with 2-5 business day delivery",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    rating: 5,
    review: "The organic cotton onesies are incredibly soft! My baby loves them and I feel good knowing the materials are safe. Already ordered more!",
    product: "Organic Cotton Onesie Set",
  },
  {
    name: "Jessica R.",
    location: "Portland, OR",
    rating: 5,
    review: "Finally found kids' clothes that survive the playground AND look adorable. The quality is unmatched for the price. Our go-to store now!",
    product: "Adventure Ready Jogger Set",
  },
  {
    name: "Emily T.",
    location: "Charlotte, NC",
    rating: 5,
    review: "Bought the floral dress for my daughter's birthday and she won't take it off! The fabric is so comfortable and washes beautifully.",
    product: "Spring Bloom Floral Dress",
  },
  {
    name: "Maria L.",
    location: "Denver, CO",
    rating: 4,
    review: "Love that everything is CPSIA certified. As a first-time mom, knowing these clothes are tested and safe gives me peace of mind.",
    product: "Newborn Essentials Bundle",
  },
];

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="container py-12 md:py-20 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Heart className="h-4 w-4" />
                Made with Love for Little Ones
              </div>
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                Comfort & Style for{" "}
                <span className="text-primary">Growing Kids</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-lg">
                Discover thoughtfully designed children's clothing that parents trust 
                and kids love. Quality fabrics, safe materials, and adorable styles.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/shop">Shop Collection</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">CPSIA Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Organic Cotton</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-hover">
                <img
                  src={heroImage}
                  alt="Happy children wearing Little Bloom clothing"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 rounded-2xl bg-card p-4 shadow-hover md:p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <Shield className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">100% Safe</p>
                    <p className="text-sm text-muted-foreground">Kid-tested materials</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge, index) => (
              <TrustBadge
                key={badge.title}
                icon={badge.icon}
                title={badge.title}
                description={badge.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Shop by Category
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From newborns to active kids, find the perfect fit for every age and occasion
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                image={category.image}
                link={category.link}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row"
          >
            <div>
              <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Handpicked favorites loved by parents and kids alike
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/shop">View All Products</Link>
            </Button>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                isNew={product.isNew}
                rating={product.rating}
                reviewCount={product.reviewCount}
                soldCount={product.soldCount}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              What Parents Are Saying
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Join hundreds of happy families who trust us for their kids' wardrobe
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-3xl bg-primary/5 p-8 md:p-12 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                  Our Promise to Parents
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  At Little Bloom, we understand that choosing clothes for your children 
                  is about more than just style. It's about safety, comfort, and quality 
                  that lasts. That's why every piece in our collection is carefully selected 
                  to meet the highest standards.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="trust-badge">
                    <Shield className="h-4 w-4" />
                    CPSIA Certified
                  </div>
                  <div className="trust-badge">
                    <Leaf className="h-4 w-4" />
                    Organic Materials
                  </div>
                  <div className="trust-badge">
                    <Award className="h-4 w-4" />
                    Registered LLC
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
