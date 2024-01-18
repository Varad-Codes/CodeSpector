"use client";

import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col justify-center content-center items-center align-middle -translate-y-10"
    >
      <div className="bg-hero h-screen w-[99vw]">
        <div className="h-full w-full  p-2 translate-y-[-3rem] flex flex-col justify-center align-center items-center text-center">
          <h1 className="text-6xl md:text-7xl">CodeSpector</h1>
          <p className="text-2xl">
            Helping Bussinesses & Individuals Established On The Internet
          </p>
          <Button as={Link} color="primary" href="/services" className="text-white mt-5 max-w-sm z-[1000]">Get Started</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
