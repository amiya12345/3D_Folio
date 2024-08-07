import React from "react";
import Spline from "@splinetool/react-spline";
import Typed from "react-typed";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <section name="home" className="max-h-[100rem] max-w-full relative">
      <motion.div
        className="flex flex-col justify-center items-center absolute z-5 top-[50%] w-full"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ delay: 1, duration: 2.5, type: "spring" }}
      >
        <p className="text-[32px] font-bold  max-w-3xl mx-auto text-nft">
          <Typed
            className="lg:font-bold lg:text-[32px] sm:text-[16px] sm:font-semibold text-center max-w-3xl mx-auto text-nft"
            strings={[
              "Hello!",
              "Hola!",
              "Namaste!",
              "Bonjour!",
              "Ciao!",
              "Konnichiwa!",
            ]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
          I am
        </p>
        <h1 className=" font-semibold text-3xl lg:text-6xl lg:tracking-[12px]  text-center text-nft  font-omiofont1  sm:text-3xl tracking-[2px]">
          Amiya Ranjan
        </h1>
        <p className="lg:text-[24px] font-semibold py-3  max-w-3xl mx-auto text-nft lg:tracking-[8px] sm:text-[16px tracking-[4px]">
          3D Generalist | Visual Designer
        </p>
      </motion.div>
      <div className="max-h-[100vh] mt-0 mb-auto ml-auto mr-auto overflow-hidden">
        <div className="w-full h-full flex">
         
        </div>
      </div>
    </section>
  );
};
export default Home;
