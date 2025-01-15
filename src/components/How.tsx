"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import GeminiPhoto from "../../public/Gemini.png";
import EmpowerPhoto from "../../public/empower.png";
import ExchangePhoto from "../../public/exchange.png";
import EarthPhoto from "../../public/earth.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    id: 1,
    image: GeminiPhoto.src,
    title: "Ethical AI for Humanity",
    description:
      "Mr. Monei is built on a foundation of fairness, transparency, and accountability. His algorithms are designed to eliminate bias and prioritize the well-being of all people, not just the privileged few.",
  },
  {
    id: 2,
    image: EmpowerPhoto.src,
    title: "Empowering the Future",
    description:
      "Mr. Monei isn’t just about managing money—he’s about creating a future where wealth works for everyone. From small businesses in emerging markets to global sustainability initiatives, Mr. Monei is the catalyst for a new era of prosperity.",
  },
  {
    id: 3,
    image: ExchangePhoto.src,
    title: "Smart, Fair Trade Financing",
    description:
      "Mr. Monei uses AI to analyze and optimize trade flows, ensuring financing is accessible to all, regardless of geography, race, or background. By eliminating gatekeepers, he provides smart, efficient, and equitable financial solutions for businesses and individuals worldwide.",
  },
  {
    id: 4,
    image: EarthPhoto.src,
    title: "Decentralized Wealth Distribution",
    description:
      "Harnessing the power of DeFi, Mr. Monei ensures wealth is distributed directly to those who need it most. No middlemen, no hidden fees—just transparent, inclusive financial systems that empower communities.",
  },
];

const How = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="max-w-full py-32 bg-white font-libre-franklin">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start">
        {/* Left Section */}
        <div className="flex-1 items-center justify-center w-[50%] mx-auto py-24">
          <h2 className="leading-[98px] inline-block text-50xl w-[70%]">
            How Mr. Monei Works for You
          </h2>
          {/* Navigation Buttons */}
          <div className="flex inline-block space-x-4 my-16">
            <button
              onClick={handlePrev}
              className="w-[115px] h-[115px] bg-[#B9E6F8] rounded-full flex items-center justify-center"
            >
              <FaChevronLeft className="text-48xl text-[#4DB0CE]" />
            </button>
            <button
              onClick={handleNext}
              className="w-[115px] h-[115px] bg-transparent border-[4px] border-[#008EBA] rounded-full flex items-center justify-center focus:outline-none"
              style={{
                boxShadow: "none",
              }}
            >
              <FaChevronRight className="text-48xl text-[#008EBA]" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
          {/* Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {/* Current card transition out */}
              <motion.div
                key={cards[currentIndex].id}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  x: currentIndex === 0 ? 100 : -100, // Start from left or right based on direction
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: currentIndex === 0 ? -100 : 100, // Exit left or right
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="bg-[#4DB0CE] rounded-3xl p-6 md:p-8 shadow-lg max-w-full text-white text-center mx-10"
              >
                <div className="mb-4">
                  <Image
                    src={cards[currentIndex].image}
                    alt={cards[currentIndex].title}
                    className="mx-auto"
                    width={250}
                    height={250}
                  />
                </div>
                <h3 className="text-29xl leading-[59px] text-black mb-4">
                  {cards[currentIndex].title}
                </h3>
                <p className="leading-[50px] font-medium inline-block text-left text-black text-xl my-4 px-8">
                  {cards[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
