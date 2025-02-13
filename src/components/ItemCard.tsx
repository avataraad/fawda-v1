
import { motion } from "framer-motion";
import { Archive } from "lucide-react";

interface ItemCardProps {
  title: string;
  price: number;
  size: string;
  image?: string;
}

const ItemCard = ({ title, price, size, image }: ItemCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Archive className="h-12 w-12 text-secondary" />
          </div>
        )}
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="font-serif text-lg font-semibold text-primary">{title}</h3>
        <p className="text-sm text-gray-600">{size}</p>
        <p className="font-medium text-secondary">
          ${price.toFixed(2)}<span className="text-sm text-gray-500">/month</span>
        </p>
      </div>
    </motion.div>
  );
};

export default ItemCard;
