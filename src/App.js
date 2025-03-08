// filepath: src/App.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css"; // Assuming you have some basic styles

function GreetingPage({ message, onBack, onNext, showNext }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-pink-600 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {message}
      </motion.h1>
      <div className="flex gap-4">
        <button onClick={onBack} className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg">
          Назад 🔙
        </button>
        {showNext && (
          <button onClick={onNext} className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg">
            Далі 👉
          </button>
        )}
      </div>
    </div>
  );
}

function FlowerAnimation({ onRestart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.p className="text-xl text-pink-600 mb-4">
          Хотілось би подарувати вживу, але через відстань поки що лише такі 🌸
        </motion.p>
        <motion.div
          className="flex justify-center gap-4 text-8xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>💐</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.7 }}>💐</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.9 }}>💐</motion.span>
        </motion.div>
        <button onClick={onRestart} className="mt-6 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg">
          Спочатку 🔄
        </button>
      </motion.div>
    </div>
  );
}

export default function WomensDayGreeting() {
  const [page, setPage] = useState(0);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 0));
  const restart = () => setPage(0);

  const messages = [
    "Нехай цей день буде сповнений радості та тепла! 🌺",
    "Бажаємо здійснення всіх мрій та натхнення! 🌟",
    "Хай кожен день буде сповнений усмішками та любов’ю! 💖",
    "Нехай весна дарує яскраві емоції та щасливі миті! 🌸",
    "Ви гідні найкращого, хай здійснюються всі бажання! 🎉",
    "Залишайтеся завжди такими чарівними та неповторними! 🌷",
    "Нехай удача завжди буде поруч з вами! 🍀",
    "Бажаємо гармонії, тепла та душевного спокою! 🕊️",
    "Ваша краса та сила надихають! 💪",
    "Хай кожен день буде сповнений світлом та добром! ☀️"
  ];

  if (page > 0 && page < messages.length) {
    return <GreetingPage message={messages[page - 1]} onBack={prevPage} onNext={nextPage} showNext={page < messages.length} />;
  }

  if (page === messages.length) {
    return <FlowerAnimation onRestart={restart} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-pink-600 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        З 8 Березня, дорогі жінки!
      </motion.h1>
      <button onClick={nextPage} className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg">
        Показати привітання 💐
      </button>
    </div>
  );
}


