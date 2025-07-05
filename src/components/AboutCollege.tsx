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
    { icon: Users, value: '500+', label: 'Students' },
    { icon: GraduationCap, value: '5+', label: 'Programs' },
    { icon: Building, value: '5+', label: 'Departments' },
    { icon: Award, value: '5+', label: 'Awards' }
  ];

  const facilities = [
    {
      icon: Microscope,
      title: 'HERO Two‑Wheeler Skill Development Center',
      description: 'Collaboration with Hero MotoCorp and NCVET‑approved training on two‑wheeler maintenance and repair—63 days of theory and practical, followed by 14 days of on‑the‑job training.'
    },
    {
      icon: BookOpen,
      title: 'Library',
      description: 'Stocks university textbooks, reference works, journals, and magazines. Located on the first floor of the west block, it features a large reading area, OPAC, reprographic services, overnight reference issue, internet access, and a spacious study environment.'
    },
    {
      icon: Globe,
      title: ' Indoor & Outdoor Games & Gym',
      description: 'Outdoor facilities include football, badminton, shuttle courts, and a jumping pit. A sports complex and fitness centre offer gym equipment (treadmill, bikes) plus indoor table‑tennis. '
    },
    {
      icon: Trophy,
      title: 'Store',
      description: 'A cooperative store offering books, stationery, mentoring guides, evaluation materials, and reprographic services at subsidised rates.'
    }
  ];

  const programs = [
    'Diploma in Electrical & Electronics Engineering',
    'Diploma in Automobile Engineering',
    'Diploma in Mechanical Engineering',
    'Diploma in Civil Engineering',
    'Diploma in Computer Engineering'
  
  ];

  const achievements = [
    {
      year: '2024',
      title: 'Academic Membership in ICT Academy',
      description: 'The college proudly earned academic membership in the ICT Academy, strengthening its commitment to bridging academic learning with industry-grade digital skills'
    },
    {
      year: '2022-23',
      title: 'Faculty Development & Innovation',
      description: 'Computer Engineering, Automobile, Civil, and Humanities faculty members successfully completed various AICTE‑ and SITTTR‑led Faculty Development Programs, including Universal Human Values and NBA Accreditation Process training'
    },
    {
      year: '2022-23',
      title: 'Active NSS & Community Service',
      description: 'The NSS unit carried out multiple impactful initiatives—tree plantations, Clean India Campaign, anti-drug quiz, unity run, cultural events, and health-awareness programs—bolstering community engagement'
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
           Educational initiatives and activities that raise academic standards and promote academic excellence.
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
              The Kuttukaran Polytechnic College run by the Kuttukaran Foundation, an educational trust under the Kuttukaran Group, is a well – established polytechnic college at Manakkappady, N. Paravur, Ernakulam. The institution is approved by the AICTE – Govt of India and affiliated to SBTE / DTE – Govt. of Kerala. Kuttukaran is a leading business Group operating multi– brand vehicle dealerships in Kerala and beyond. 
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Our goal is to provide high – quality technical education to aspiring minds thereby nurturing entrepreneurs and professionals. Kuttukaran Polytechnic College ensures the greatest academic experience possible, by focusing on skill development, placement, and research.
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
              src="https://kuttukaranpoly.com/wp-content/uploads/2022/10/Pic.jpg"
              alt="College Campus"
              className="w-full h-130 object-cover rounded-2xl shadow-lg"
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
             To give a platform for exploring and improving individual skill sets.<br></br>
To facilitate transformation of capabilities of young talent into competencies.<br></br>
To sharpen individual competencies into entrepreneurial and employability skills.<br></br>
To cater persistently to the Industry demand.
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
              “Igniting the passion for learning and excellence.”
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
            Facilities
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
             We offer a comprehensive range of diploma programs designed to equip students with industry-relevant skills and knowledge. Our curriculum blends practical training with strong academic foundations, preparing graduates to thrive in today’s rapidly evolving technical and professional landscape.
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