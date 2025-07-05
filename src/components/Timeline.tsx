import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award, Users, Rocket, Lightbulb, Trophy } from 'lucide-react';

const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        
        // Use CSS custom property for smooth animation
        timelineRef.current.style.setProperty('--scroll-progress', scrollProgress.toString());
      }
    };

    const smoothScroll = () => {
      handleScroll();
      animationId = requestAnimationFrame(smoothScroll);
    };

    if (inView) {
      smoothScroll();
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [inView]);

  const milestones = [
    {
      year: '2024',
      title: 'AI Innovation Summit',
      description: 'Hosted the largest AI and ML innovation summit with 500+ participants and 50+ startups showcasing their solutions.',
      icon: Lightbulb,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2023',
      title: 'Unicorn Startup Launch',
      description: 'One of our incubated startups achieved unicorn status, becoming the first billion-dollar company from our college.',
      icon: Trophy,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2022',
      title: 'International Recognition',
      description: 'IEDC received the "Best Innovation Cell" award from the Ministry of Education for outstanding contributions.',
      icon: Award,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2021',
      title: 'Startup Accelerator Program',
      description: 'Launched our flagship accelerator program, supporting 100+ startups with funding and mentorship.',
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Pivoted to virtual events and online mentorship during the pandemic, reaching 10,000+ students globally.',
      icon: Users,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      year: '2019',
      title: 'IEDC Establishment',
      description: 'Founded the Innovation and Entrepreneurship Development Cell with a vision to foster startup culture.',
      icon: Calendar,
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Milestones and achievements that define our path of innovation and entrepreneurship
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Optimized Timeline Line with CSS Custom Properties */}
          <div 
            ref={timelineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700 rounded-full"
            style={{
              background: `linear-gradient(to bottom, 
                rgb(59, 130, 246) 0%, 
                rgb(59, 130, 246) calc(var(--scroll-progress, 0) * 100%), 
                rgb(229, 231, 235) calc(var(--scroll-progress, 0) * 100%), 
                rgb(229, 231, 235) 100%)`
            }}
          />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${milestone.color} mb-4`}>
                      <milestone.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Optimized Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ 
                    delay: index * 0.15 + 0.3, 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="relative z-10 flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg border-4 border-blue-500"
                >
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {milestone.year}
                  </span>
                </motion.div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;