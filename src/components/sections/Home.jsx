import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealOnScroll } from "../RevealOnScroll";

// Define titles outside the component for stability
const titles = ["Hi, I'm Jana Ahmed", "Front End Developer"];
const typingSpeed = 100; // milliseconds between characters
const deletingSpeed = 50; // milliseconds between characters when deleting
const pauseDuration = 2000; // milliseconds to pause between phrases

export const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentPhrase = titles[currentPhraseIndex];

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Done typing, pause then start deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Done deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentPhraseIndex, isTyping, isDeleting]);

  // Animation variants for the title
  const titleVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#ffddd2] px-4 py-8 overflow-hidden"
    >
      <RevealOnScroll>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center text-center z-10 gap-10 w-full max-w-7xl">

          {/* TEXT SECTION */}
          <div className="flex-1 flex flex-col items-center md:items-start">

            {/* Container for Animated H1 to manage height */}
            <div className="h-24 sm:h-28 md:h-32 lg:h-40 flex items-center justify-center md:justify-start w-full mb-6">
              <motion.h1
                variants={titleVariants}
                initial="initial"
                animate="animate"
                className="text-2xl sm:text-5xl md:text-6xl lg:text-6xl font-bold bg-[#e29578] bg-clip-text text-transparent leading-tight mt-2"
              >
                {displayText}
                <span className="animate-pulse">|</span> {/* Cursor effect */}
              </motion.h1>
            </div>

            {/* Description Paragraph */}
            <p className="text-[#006d77] text-base sm:text-lg mb-8 max-w-xl mx-auto md:mx-0">

Senior Computer Science student with hands-on experience in modern web development, specializing in building 
responsive single-page applications using React, JavaScript (ES6+), HTML5, and CSS3. Proficient in state 
management (React Hooks), REST API integration (Axios, Fetch), and UI development with Bootstrap and Tailwand 
Css. Strong understanding of frontend architecture, component-based design, and responsive web principles.             </p>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
              <a
                href="https://drive.google.com/file/d/1Yvlw_ejdfCN_6HHCXv4jipe31ZHESnkw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#006d77] text-white py-3 px-6 rounded font-medium transition transform hover:-translate-y-1 hover:shadow-[0_0_15px_#83c5be] cursor-pointer w-full sm:w-auto text-center animate-bounce"
              >
                My Resume
              </a>
              <a
                href="#contact"
                className="border border-[#006d77] text-[#006d77] py-3 px-6 rounded font-medium transition transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] cursor-pointer w-full sm:w-auto text-center"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl transition-transform duration-500 hover:scale-125 mt-8">
              <img
                src="/assets/jana.jpg"
                alt="Jana Ahmed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};