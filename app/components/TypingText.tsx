import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition:{duration: 1} }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const ProfileSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techItems = [
    "Backend-магия: 2 года глубокого погружения в Python (Django, DRF) + эксперименты с Flask/FastAPI и Node.js",
    "Frontend-вызовы: React/Next.js — создаю не просто интерфейсы, а цифровые впечатления",
    "Инструментарий: PostgreSQL, MongoDB, Firebase, Timeweb + автоматизация на Linux",
    "Боты-переговорщики: Telegram-решения на Aiogram"
  ];

  const whyMeItems = [
    "Превращать сложные требования в элегантные решения",
    "Развивать fullstack-экспертизу",
    "Работать с современным стеком"
  ];

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="text-sm sm:text-base md:text-lg lg:text-xl space-y-6"
    >
      <motion.div variants={fadeIn} className="flex items-center gap-2">
        <Link 
          href="https://github.com/unrealchayka" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-black transition-colors bg-[#C9F31D] hover:text-[#C9F31D] hover:bg-transparent rounded-md px-3 py-1 "
        >
          <motion.span whileHover={{ scale: 1.05 }}>
            GitHub
          </motion.span>
        </Link>
      </motion.div>

      <motion.h1 variants={fadeIn} className="text-2xl font-bold">
        🔥 Андрей | Fullstack-разработчик с бэкенд-уклоном
      </motion.h1>

      <motion.section variants={fadeIn} className="space-y-6">
        <motion.p variants={fadeIn}>
          Привет! Я — страстный самоучка в мире веб-разработки, за 2.5 года превративший ежедневные 6-10 часов кодинга в серьезный технический бэкграунд. Моя философия: 
          <q className="italic"> Код должен решать проблемы, а не создавать их</q>.
        </motion.p>

        <motion.div variants={fadeIn}>
          <h2 className="text-xl font-semibold mb-2">💻 Технологический арсенал:</h2>
          <motion.ul className="list-disc pl-6 space-y-2">
            {techItems.map((item, index) => (
              <motion.li 
                key={index}
                variants={fadeInItem}
                custom={index}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.section>

      <motion.section variants={fadeIn} className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">⚡ Не только код:</h2>
          <motion.p variants={fadeIn}>
            Спортсмен с 12-летним стажем (дисциплина = мой middle name), ЗОЖ-адвокат без вредных привычек. Выпускник ТКУиК, где научился не только коммерции, но и искусству быстрого обучения.
          </motion.p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">🌱 Почему я?</h2>
          <motion.p variants={fadeIn} className="mb-2">
            Готов впитывать знания как Django ORM впитывает данные! Ищу команду, где смогу:
          </motion.p>
          <motion.ul className="list-disc pl-6 space-y-2">
            {whyMeItems.map((item, index) => (
              <motion.li 
                key={index}
                variants={fadeInItem}
                custom={index}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      <motion.div variants={fadeIn} className="text-gray-600">
        📍 My location: пос. Тайцы (Санкт-Петербург), но мой код доступен из любой точки мира.
      </motion.div>
    </motion.div>
  );
};

export default ProfileSection;