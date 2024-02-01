import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import mackbook from "@/assets/image/macbook-exposed.png";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.5, delayChildren: 0.5 },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: 500 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: "spring", bounce: 0.25 },
  },
};

const laptop = {
  initial: { y: 0, rotate: 0, scale: 3 },
  animate: {
    y: 30,
    rotate: -30,
    scale: 1,
    transition: {
      rotate: {
        delay: 1,
        duration: 1,
      },
      scale: {
        duration: 1,
      },
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    
      <Container className="grid grid-cols-1 lg:grid-cols-2 h-screen place-content-center gap-10 lg:gap-0">
        <motion.div
          className="mt-28 lg:mt-0 w-full mx-auto"
          variants={intro}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl lg:text-8xl font-bold text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray">Don't worry.</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray mt-10 mb-5 max-w-[50ch]"
            variants={introChildren}
          >
            Welcome to <span className="text-black font-semibold dark:text-white">iRepair</span>
            , your one-stop place for all kinds of{" "}
            <span className="text-black font-semibold dark:text-white">Macbook repairs</span>{" "}
            and diagnostics.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-10 lg:mt-0 w-[85%] md:w-[80%] xl:w-[90%] mx-auto"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img
            className="h-[95%] object-contain"
            src={mackbook}
            alt="MackBook"
          />
        </motion.div>
      </Container>
   
  );
};

export default HeroSection;
