import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const TrustBadge = ({ icon: Icon, title, description, delay = 0 }: TrustBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-card shadow-card"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-light">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};
