import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
  product: string;
  delay?: number;
}

export const TestimonialCard = ({ name, location, rating, review, product, delay = 0 }: TestimonialCardProps) => {
  const initials = name.split(" ").map(n => n[0]).join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col gap-4 rounded-2xl bg-card p-6 shadow-card"
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">"{review}"</p>
      <p className="text-xs font-medium text-primary">{product}</p>
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="text-xs bg-primary/10 text-primary">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
    </motion.div>
  );
};
