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
    <div className="relative overflow-hidden">
      <Image 
        src='/2.svg' 
        className="w-full h-screen object-cover absolute top-0" 
        width={1380} 
        height={1050} 
        alt="bg-image" 
        priority
      />
      
      <div className="absolute top-[20vh] sm:top-[10vh] right-[5%] sm:right-[10%] w-[40%] sm:w-[30%]">
        <Image 
          src='/cube.png' 
          className="w-full" 
          width={2000} 
          height={2000} 
          alt="cube-image" 
        />
        <Image 
          src='/hero.png' 
          className="w-full absolute top-0 left-0 my-drop-shadow" 
          width={2000} 
          height={2000} 
          alt="hero-image" 
        />
      </div>

      <div className="absolute flex gap-4 sm:gap-10 top-[70%] sm:top-[80%] left-[5%] sm:left-[15%] w-[80%] sm:w-[500px]">
        {[80, 60, 40].map((size, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center"
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
          >
            <Image 
              src='/cross.svg' 
              className={`w-[${size}%]`} 
              width={100} 
              height={100} 
              alt="cross-icon" 
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex absolute z-10 bottom-10 sm:bottom-20 left-[50%] translate-x-[-50%] rotate-180 justify-center items-center w-12 sm:w-16"
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.4,
          duration: 2,
          ease: "easeInOut"
        }}
        initial={{ y: 0 }}
        animate={{ y: 10 }}
      >
        <Image 
          src='/arrows3.svg' 
          className="w-full" 
          width={100} 
          height={100} 
          alt="scroll-indicator" 
        />
      </motion.div>

      <Shadow className="top-[30vh] sm:top-[40vh] scale-100 sm:scale-150 lg:scale-200" />

      <div className="container mx-auto flex justify-center pt-[30%] sm:pt-0 sm:items-center h-[70vh] sm:h-screen px-4 sm:px-[10%]">
        <div className="relative w-full max-w-4xl">
          <div className="hidden sm:block absolute w-12 border-3 border-r-0 h-full left-[-80px] sm:left-[-100px]"></div>
          <div className="hidden sm:block absolute w-12 border-3 border-l-0 h-full right-[-80px] sm:right-[-100px]"></div>
          
          <h1 className="flex  gap-3 items-start sm:items-center font-bold text-xl sm:text-2xl pb-3">
            Hey There! My Name is Andrey 
            <div className="h-[1px] w-16 sm:w-[80px] bg-[silver]/40"></div>
          </h1>
          
          <div className="text-4xl sm:text-4xl md:text-6xl lg:text-[120px] font-extrabold uppercase">
            <div className="flex items-center gap-2 sm:gap-5 relative bg-gradient-to-r from-transparent via-white/30 to-transparent text-[#050505] my-text-shadow py-2 sm:py-0">
              <span>Full-Stack</span>
              <Image 
                src='/3.svg' 
                className="w-16 h-16 sm:w-24 sm:h-24 animate-[spin_12s_linear_infinite]" 
                width={116} 
                height={116} 
                alt="spinning-icon" 
              />
              <div className="hidden sm:block absolute h-[2px] w-[200px] md:w-[500px] lg:w-[700px] bg-gradient-to-r from-transparent via-white to-transparent bottom-[-0.5px] z-4 left-[40%] translate-x-[-50%]"></div>
              <div className="hidden sm:block absolute h-[2px] w-[200px] md:w-[500px] lg:w-[700px] bg-gradient-to-r from-transparent via-white/80 to-transparent top-[-0.5px] z-4 left-[40%] translate-x-[-50%]"></div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-5 relative bg-gradient-to-r from-transparent via-black/80 to-transparent mt-2 sm:mt-0">
              <motion.div
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 5,
                  ease: "easeInOut"
                }}
                initial={{ x: 0 }}
                animate={{ x: 20 }}
                className="w-32 sm:w-auto"
              >
                <Image 
                  src='/5.svg' 
                  className="w-full" 
                  width={392} 
                  height={86} 
                  alt="motion-icon" 
                />
              </motion.div>
              <span>Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="my-[5%] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-5% pt-16 md:pt-24 lg:pt-[100px]">
        <h1 className="flex gap-3 items-center font-bold text-xl sm:text-2xl">
          About Me
          <div className="h-[1px] w-12 sm:w-[80px] bg-[silver]/40"></div>
        </h1>
        
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-5 relative">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[100px] font-bold leading-tight sm:leading-none">
            Passion for <br /> Digital Innovation
          </p>
          <div className="self-end sm:self-center">
            <Image 
              src='/1.svg' 
              className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-[100px] h-auto" 
              width={100} 
              height={100} 
              alt="image" 
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-5% mt-16 sm:mt-24 md:mt-32 lg:mt-[200px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-[10%]">
          <div className="w-full sm:w-4/5 md:w-2/3 lg:w-[30%] h-auto">
            <Image 
              src='/hero.avif' 
              className="w-full h-auto rounded-lg" 
              width={640} 
              height={1024} 
              alt="bg-image" 
              layout="responsive"
            />
          </div>
          
          <div className="w-full lg:w-[60%] space-y-4 sm:space-y-5 p-4 sm:p-[3%]">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              My journey began with a deep curiosity about how systems work behind the scenes. What started as simple scripts evolved into a passion for building robust, scalable architectures.
              Driven by an engineering mindset, I specialize in creating efficient backend solutions while maintaining strong frontend capabilities.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              My focus is on developing high-performance systems that handle complex logic while delivering seamless user experiences.
              From database optimizations to API design and cloud infrastructure, I bridge the gap between system reliability and user-centric interfaces. Every line of code I write is measured by its performance impact and maintainability.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-10">
              <div className="text-center">
                <span className="text-[#C9F31D] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[80px]">58</span>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">Projects Completed</p>
              </div>
              
              <div className="border-x border-[silver] px-4 sm:px-5">
                <span className="text-[#C9F31D] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[80px]">1000+</span>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">Happy Clients</p>
              </div>
              
              <div className="text-center">
                <span className="text-[#C9F31D] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[80px]">342</span>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">Cups of Coffee</p>
              </div>
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
        <p className="flex mt-10 justify-between text-[20px] sm:text-[25px] lg:text-[40px] md:text-[30px] xl:text-[100px] items-center gap-5 relative font-bold leading-none">
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
        <div className="flex flex-col items-center text-[20px] sm:text-[25px] lg:text-[40px] md:text-[30px] xl:text-[100px]">
          <h1 className="text-[#C9F31D] uppercasefont-bold text-center font-bold">Let’s Talk</h1>
          <a href="https://t.me/noname431" className="text-white font-bold text-center">akorucev@gmail.com</a>
          <a href="https://t.me/noname431" className="text-[silver]/40 transition-colors hover:text-[#615bff] font-bold text-center">https://t.me/noname431</a>
        </div>
      </div>
    </div>
  )
}