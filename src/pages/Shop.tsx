import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Filter, Grid3X3, LayoutGrid } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const categories = [
  { name: "All Products", slug: "all" },
  { name: "Boys Clothing", slug: "boys" },
  { name: "Girls Clothing", slug: "girls" },
  { name: "Baby Clothing", slug: "baby" },
  { name: "Kids Shoes", slug: "shoes" },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gridCols, setGridCols] = useState<3 | 4>(4);
  
  const activeCategory = searchParams.get("category") || "all";

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.categorySlug === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (slug: string) => {
    if (slug === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Shop Our Collection
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Quality clothing and shoes for babies, toddlers, and kids. 
              All items are carefully curated for comfort, safety, and style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-8 md:py-12">
        <div className="container">
          {/* Filter Bar */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.slug}
                  variant={activeCategory === category.slug ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(category.slug)}
                  className="rounded-full"
                >
                  {category.name}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} products
              </span>
              <div className="hidden md:flex items-center gap-2 border-l border-border pl-4">
                <button
                  onClick={() => setGridCols(3)}
                  className={`p-2 rounded-md transition-colors ${
                    gridCols === 3 ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label="3 column grid"
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setGridCols(4)}
                  className={`p-2 rounded-md transition-colors ${
                    gridCols === 4 ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label="4 column grid"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className={`grid gap-6 sm:grid-cols-2 ${
            gridCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }`}>
            {filteredProducts.map((product) => (
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

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-muted-foreground">
                No products found in this category.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => handleCategoryChange("all")}
              >
                View All Products
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
