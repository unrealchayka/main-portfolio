'use client'
import { motion } from "motion/react";
import Image from "next/image";
import { Shadow } from "./components/Shadow";
import InfiniteSlider from "./components/InfinitySlider";
import { useState } from "react";

export default function () {
  return (
    <>
      <Preview />
      <About />
      <InfiniteSlider speed={0.4} words={['Creative', 'Innovative', 'Designer', 'Digital', 'IT', 'Backend', 'Frontend', 'Full-stack', 'Web Dev', '#Hello_World_XD', 'Skills', 'world',]} />
      <Skills/>
      <Contact/>
    </>
  );
}

function Preview() {
  return (
    <div className="relative">
      <Image src='/2.svg' className="w-full h-screen absolute top-0" width={1380} height={1050} alt="bg-image" />
      <Image src='/cube.png' className="w-[30%] absolute top-[20vh] right-[10%]" width={2000} height={2000} alt="bg-image" />
      <Image src='/hero.png' className="w-[30%] absolute top-[20vh] right-[10%] my-drop-shadow" width={2000} height={2000} alt="bg-image" />
      <div className="absolute flex gap-10 top-[80%] left-[15%] w-[500px]">
        <motion.div
          className="flex justify-center items-center"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut"
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
        >
          <Image src='/cross.svg' className="w-[80%]" width={100} height={100} alt="bg-image" />

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
          animate={{ scale: 1.1 }}
        >
          <Image src='/cross.svg' className="w-[60%]" width={100} height={100} alt="bg-image" />

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
          animate={{ scale: 1.1 }}
        >
          <Image src='/cross.svg' className="w-[40%] " width={100} height={100} alt="bg-image" />

        </motion.div>
      </div>
      <motion.div
        className="flex absolute z-2 bottom-20 left-[50%] translate-x-[-50%] rotate-180 justify-center items-center"
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          delay: .4,
          duration: 2,
          ease: "easeInOut"
        }}
        initial={{ y: 0 }}
        animate={{ y: 10 }}
      >
        <Image src='/arrows3.svg' className="w-[100%]" width={100} height={100} alt="bg-image" />

      </motion.div>
      <Shadow className="top-[40vh] scale-200" />
      <div className="container m-auto flex justify-center items-center h-screen px-[10%]">
        <div className="relative">
          <div className="absolute w-[50px] border-3 border-r-0 h-full left-[-100px]"></div>
          <div className="absolute w-[50px] border-3 border-l-0 h-full right-[-100px]"></div>
          <h1 className="flex gap-3 items-center font-bold text-2xl pb-3">Hey There! MY Name is Andrey <div className="h-[1px] w-[80px] bg-[silver]/40"></div></h1>
          <div className="text-[140px] font-extrabold uppercase">
            <div className="flex items-center gap-5 relative bg-[linear-gradient(to_right,transparent_5%,rgba(255,255,255,0.3),transparent_80%)] text-[#050505] my-text-shadow">
              Full-Stack
              <Image src='/3.svg' className="animate-[spin_12s_linear_infinite]" width={116} height={116} alt="bg-image" />
              <div className="absolute h-[2px] w-[700px] bg-[linear-gradient(to_right,transparent_5%,rgba(255,255,255,1),transparent_80%)] bottom-[-0.5px] z-4 left-[40%] translate-x-[-50%]"></div>
              <div className="absolute h-[2px] w-[700px] bg-[linear-gradient(to_right,transparent_5%,rgba(255,255,255,0.8),transparent_80%)] top-[-0.5px] z-4 left-[40%] translate-x-[-50%]"></div>
            </div>
            <div className="flex items-center gap-5 relative bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.8),transparent)] pr-3">
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
  )
}

function About() {
  return (
    <div className="my-[5%]">
      <div className="container m-auto px-[5%] pt-[100px]">
        <h1 className="flex gap-3 items-center font-bold text-2xl">About Me<div className="h-[1px] w-[80px] bg-[silver]/40"></div></h1>
        <p className="flex mt-10 justify-between text-[100px] items-center gap-5 relative font-bold leading-none">
          Passion for <br /> Digital Innovation
          <Image src='/1.svg' className="" width={100} height={100} alt="image" />
        </p>
      </div>
      <div className="container m-auto px-[5%] mt-[200px] flex relative h-[60vh] justify-center items-center gap-[10%]">
        <Image src='/hero.avif' className="w-[30%] h-auto" width={640} height={1024} alt="bg-image" />
        <div className="w-[60%] text-[20px] p-[3%]">
          <p>
            My journey began with a deep curiosity about how systems work behind the scenes. What started as simple scripts evolved into a passion for building robust, scalable architectures.
            Driven by an engineering mindset, I specialize in creating efficient backend solutions while maintaining strong frontend capabilities.
          </p>
          <p className="mt-5">
            My focus is on developing high-performance systems that handle complex logic while delivering seamless user experiences.
            From database optimizations to API design and cloud infrastructure, I bridge the gap between system reliability and user-centric interfaces. Every line of code I write is measured by its performance impact and maintainability.
          </p>
          <div className="flex justify-center gap-10 mt-10">
            <div>
              <span className="text-[#C9F31D] text-[80px]">58</span>
              <p className="text-[24px]">Projects Completed</p>
            </div>
            <div className="border-x border-[silver] px-5">
              <span className="text-[#C9F31D] text-[80px]">1000+</span>
              <p>Happy Clients</p>
            </div>
            <div>
              <span className="text-[#C9F31D] text-[80px]">342</span>
              <p>Cups of Coffee</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

function Skills(){
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skillsData = {
    backend: {
      "Продвинутый уровень": ["Django", "DRF", "Python", "PostgreSQL"],
      "Средний уровень": ["Flask", "FastAPI", "Celery", "REST API"],
      "Базовый уровень": ["Docker", "Redis", "Linux", 'Node Js'],
    },
    frontend: {
      "Средний уровень": ["JavaScript", "HTML", "CSS3", "CSS", "Next Js", "React"],
      "Базовый уровень": ["Tailwind", "jQuery", "Three Js", "Gsap", "Framer Motion", "Bootstrap"],
    },
    others: {
      "Средний уровень": ["ООП", "GitHub"],
      "Базовый уровень": ["Aiogram"],
    },
  };

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="container p-[5%] mx-auto my-[5%] bg-[#111]">
        <h1 className="flex gap-3 items-center font-bold text-2xl">Skills<div className="h-[1px] w-[80px] bg-[silver]/40"></div></h1>
        <p className="flex mt-10 justify-between text-[100px] items-center gap-5 relative font-bold leading-none">
          Look what <br />I've learned
          <Image src='/block3.svg' className="w-[25%] absolute right-[20%]" width={100} height={100} alt="image" />
        </p>
      
      <div className="space-y-4 mt-20">
        {Object.entries(skillsData).map(([category, levels]) => (
          <div key={category} className="overflow-hidden">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full p-4 text-left hover:bg-gray-200 hover:text-black transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-xl capitalize">
                {category === 'backend' && 'Backend'}
                {category === 'frontend' && 'Frontend'}
                {category === 'others' && 'Другие навыки'}
              </span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  activeCategory === category ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeCategory === category && (
              <div className="p-4">
                {Object.entries(levels).map(([level, skills]) => (
                  <div key={level} className="mb-4 last:mb-0">
                    <h3 className="font-medium  mb-2">{level}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-[#222] rounded-full text-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


function Contact(){
  return(
    <div className="bg-black py-[5%]">
      <div className="container m-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-[#C9F31D] uppercase text-[200px] font-bold text-center translate-y-10">Let’s Talk</h1>
          <p className="text-white text-[100px] font-bold  text-center">akorucev@gmail.com</p>
          <a href="https://t.me/noname431" className="text-[silver]/40 text-[60px] font-bold text-center">https://t.me/noname431</a>
        </div>
      </div>
    </div>
  )
}