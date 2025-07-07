import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      id: 1,
      image: "https://www.kuttukaranpoly.com/wp-content/uploads/2024/06/mvd_session_02.jpg",
      title: "mvd session",
      description: "mvd session."
    },
    {
      id: 2,
      image: "https://www.kuttukaranpoly.com/wp-content/uploads/2024/06/0014-scaled.jpg",
      title: "IEDC example",
      description: "iedc example of success stories."
    },
    {
      id: 3,
      image: "https://www.kuttukaranpoly.com/wp-content/uploads/2024/06/0012.jpg",
      title: "example iedc",
      description: "example iedc of success stories."
    },
    {
      id: 4,
      image: "https://www.kuttukaranpoly.com/wp-content/uploads/2023/07/DSC05414-scaled.jpg",
      title: "IEDC",
      description: "iedc success stories two"
    },
    {
      id: 5,
      image: "https://www.kuttukaranpoly.com/wp-content/uploads/2023/06/inaugration.webp",
      title: "Inauguration",
      description: "Inauguration of IEDC "
    },
  
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [stories.length]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToStory = (index: number) => {
    setCurrentStory(index);
  };

  return (
    <section id="success" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Inspiring journeys of startups that began at IEDC and achieved remarkable success
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Main Story Display */}
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={stories[currentStory].image}
                  alt={stories[currentStory].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.h3
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                  >
                    {stories[currentStory].title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl"
                  >
                    {stories[currentStory].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevStory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group"
            >
              <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextStory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group"
            >
              <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Story Indicators */}
          <div className="flex justify-center items-center mt-8 space-x-3">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStory(index)}
                className={`relative transition-all duration-300 ${
                  index === currentStory
                    ? 'w-12 h-3'
                    : 'w-3 h-3'
                }`}
              >
                <div
                  className={`w-full h-full rounded-full transition-all duration-300 ${
                    index === currentStory
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
                {index === currentStory && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Story Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {currentStory + 1} of {stories.length}
            </span>
          </div>

          {/* Auto-slide Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={currentStory}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
             
            </p>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12"
        >
          <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
            {stories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => goToStory(index)}
                className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentStory
                    ? 'ring-4 ring-blue-500 scale-110'
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;