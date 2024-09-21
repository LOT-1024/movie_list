"use client";

import Image from "next/image";
import footer from "@/assets/footer.png";
import icon from "@/assets/logo.png";
import { motion } from "framer-motion";

const containerAnimation = {
  starter: {},
  ended: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const leftItemAnimation = {
  starter: {
    x: -15,
    opacity: 0,
  },
  ended: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const rightItemAnimation = {
  starter: {
    x: 15,
    opacity: 0,
  },
  ended: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const Footer = () => {
  return (
    <footer className="h-[15.625rem] relative mt-36">
      <Image fill src={footer} alt="Footer background" />
      <motion.div
        className="w-4/5 mx-auto h-full relative flex items-center justify-between"
        variants={containerAnimation}
        initial="starter"
        whileInView="ended"
      >
        <motion.div className="flex items-center" variants={leftItemAnimation}>
          <Image src={icon} alt="icon" className="w-24" />
          <p className="text-white font-semibold text-lg md:text-2xl">
            Movie Wido
          </p>
        </motion.div>
        <motion.p
          className="text-white/50 text-lg md:text-2xl font-semibold"
          variants={rightItemAnimation}
        >
          TunggulDev
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
