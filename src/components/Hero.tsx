
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-muted px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-4xl font-bold tracking-tight text-primary sm:text-6xl"
          >
            Store Your Items,
            <br />
            <span className="text-secondary">Not Just Space</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600"
          >
            Pay only for what you store. Our premium item-based storage solution
            gives you the flexibility you need with the security you deserve.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Start Storing
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
