import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GraduationCap, 
  Building, 
  Users, 
  Award, 
  BookOpen, 
  Microscope,
  Globe,
  Trophy,
  Calendar,
  MapPin
} from 'lucide-react';

const AboutCollege: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Users, value: '15,000+', label: 'Students' },
    { icon: GraduationCap, value: '50+', label: 'Programs' },
    { icon: Building, value: '25+', label: 'Departments' },
    { icon: Award, value: '100+', label: 'Awards' }
  ];

  const facilities = [
    {
      icon: Microscope,
      title: 'Research Labs',
      description: 'State-of-the-art research facilities with cutting-edge equipment for innovation and discovery.'
    },
    {
      icon: BookOpen,
      title: 'Digital Library',
      description: 'Comprehensive digital library with access to millions of books, journals, and research papers.'
    },
    {
      icon: Globe,
      title: 'Innovation Hub',
      description: 'Dedicated spaces for startups, incubation, and collaborative innovation projects.'
    },
    {
      icon: Trophy,
      title: 'Sports Complex',
      description: 'World-class sports facilities including gymnasium, swimming pool, and outdoor courts.'
    }
  ];

  const programs = [
    'Computer Science & Engineering',
    'Electronics & Communication',
    'Mechanical Engineering',
    'Civil Engineering',
    'Business Administration',
    'Biotechnology',
    'Information Technology',
    'Electrical Engineering'
  ];

  const achievements = [
    {
      year: '2024',
      title: 'NIRF Ranking #15',
      description: 'Achieved top 15 position in National Institutional Ranking Framework'
    },
    {
      year: '2023',
      title: 'Best Innovation Award',
      description: 'Recognized for outstanding contribution to research and innovation'
    },
    {
      year: '2022',
      title: 'Accreditation A++',
      description: 'Received highest grade from National Assessment and Accreditation Council'
    },
    {
      year: '2021',
      title: 'Industry Partnership',
      description: 'Established partnerships with 50+ leading industry organizations'
    }
  ];

  return (
    <section id="about-college" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">College</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A premier institution of higher learning, fostering excellence in education, research, and innovation since 1965
          </p>
        </motion.div>

        {/* College Overview */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Legacy</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Established in 1965, our college has been at the forefront of educational excellence for over five decades. 
              We have consistently evolved to meet the changing needs of society while maintaining our core values of 
              integrity, innovation, and inclusivity.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Our institution is renowned for its commitment to holistic education, combining academic rigor with 
              practical application. We prepare students not just for careers, but for leadership roles in an 
              increasingly complex and interconnected world.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Established 1965</span>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Main Campus</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="College Campus"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To provide world-class education that empowers students with knowledge, skills, and values necessary 
              to excel in their chosen fields while contributing meaningfully to society through innovation, 
              research, and ethical leadership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To be a globally recognized institution of excellence that shapes future leaders, drives innovation, 
              and creates sustainable solutions for the challenges facing humanity in the 21st century and beyond.
            </p>
          </motion.div>
        </div>

        {/* Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            World-Class Facilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                  <facility.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {facility.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Academic Programs */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Academic Programs
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              We offer a comprehensive range of undergraduate and postgraduate programs designed to meet 
              the evolving needs of industry and society.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{program}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Notable Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-500 pl-6 py-2"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {achievement.year}
                    </span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCollege;