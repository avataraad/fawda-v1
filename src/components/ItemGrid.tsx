
import { motion } from "framer-motion";
import ItemCard from "./ItemCard";

const items = [
  {
    title: "Small Box",
    price: 4.99,
    size: "12\" × 12\" × 12\"",
  },
  {
    title: "Medium Box",
    price: 7.99,
    size: "18\" × 18\" × 18\"",
  },
  {
    title: "Large Box",
    price: 12.99,
    size: "24\" × 24\" × 24\"",
  },
  {
    title: "Wardrobe Box",
    price: 15.99,
    size: "24\" × 24\" × 48\"",
  },
];

const ItemGrid = () => {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Store by Item
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-base text-gray-600"
          >
            Choose from our selection of storage options, perfectly sized for your needs.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item, index) => (
            <ItemCard key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ItemGrid;
