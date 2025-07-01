'use client'
import { motion } from "motion/react";
import Image from "next/image";
import { Shadow } from "./components/Shadow";

export default function () {
  return (
    <div>
      <Image src='/2.svg' className="w-full h-screen absolute top-0" width={1380} height={1050} alt="bg-image" />
      <Image src='/cube.png' className="w-[30%] absolute top-[20vh] right-[10%]" width={2000} height={2000} alt="bg-image" />
      <Image src='/hero.png' className="w-[30%] absolute top-[20vh] right-[10%] my-drop-shadow" width={2000} height={2000} alt="bg-image" />
      <div className="absolute flex gap-20 top-[80%] left-[15%] w-[500px]">
        <motion.div
          className="flex justify-center items-center"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut"
          }}
          initial={{ scale: 1 }}
          animate={{scale:1.1}}
        >
          <Image src='/cross.svg' className="w-[100%]" width={100} height={100} alt="bg-image" />

        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            delay: .2,
            duration: 2,
            ease: "easeInOut"
          }}
          initial={{ scale: 1 }}
          animate={{scale:1.1}}
        >
          <Image src='/cross.svg' className="w-[80%]" width={100} height={100} alt="bg-image" />

        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            delay: .4,
            duration: 2,
            ease: "easeInOut"
          }}
          initial={{ scale: 1 }}
          animate={{scale:1.1}}
        >
          <Image src='/cross.svg' className="w-[60%] " width={100} height={100} alt="bg-image" />

        </motion.div>
      </div>
      <Shadow className="top-[40vh] scale-200" />
      <div className="container m-auto flex justify-center items-center h-screen px-[10%]">
        <div className="relative">
          <div className="absolute w-[50px] rounded-l-lg border-l-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.6),rgba(255,255,255,0.3),transparent)] h-full left-[-100px]"></div>
          <h1 className="flex gap-3 items-center font-bold text-2xl">Hey There! MY Name is Andrey <div className="h-[1px] w-[80px] bg-[silver]/40"></div></h1>
          <div className="text-[140px] font-extrabold uppercase">
            <div className="flex items-center gap-5 relative">Full-Stack <Image src='/3.svg' className="animate-[spin_12s_linear_infinite]" width={116} height={116} alt="bg-image" /></div>
            <div className="flex items-center gap-5 relative bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.5))] rounded-md pr-3">
              <motion.div
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 5,
                  ease: "easeInOut"
                }}
                initial={{ x: 0 }}
                animate={{ x: 20 }}>
                <Image src='/5.svg' width={392} height={86} alt="bg-image" />
              </motion.div>
              Developer
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
