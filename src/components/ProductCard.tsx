import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  rating?: number;
  reviewCount?: number;
  soldCount?: number;
}

export const ProductCard = ({ id, name, price, image, category, isNew, rating, reviewCount, soldCount }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="product-card group"
    >
      <Link to={`/product/${id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {isNew && (
            <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              New
            </span>
          )}
        </div>
        <div className="p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {category}
          </p>
          <h3 className="mb-2 font-semibold text-foreground line-clamp-1">{name}</h3>
          {rating !== undefined && (
            <div className="mb-2 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                <span className="text-sm font-medium text-foreground">{rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">({reviewCount} reviews)</span>
              {soldCount !== undefined && soldCount > 0 && (
                <span className="text-xs text-muted-foreground">· {soldCount.toLocaleString()}+ sold</span>
              )}
            </div>
          )}
          <p className="text-lg font-bold text-primary">${price.toFixed(2)}</p>
        </div>
      </Link>
    </motion.div>
  );
};
