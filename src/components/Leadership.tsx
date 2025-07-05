import React from "react";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { Mail, Phone, Linkedin, Quote } from "lucide-react";

const Leadership: React.FC = () => {


  const leaders = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      position: "Principal",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "principal@college.edu",
      phone: "+1 (555) 123-4567",
      linkedin: "https://linkedin.com/in/rajeshkumar",
      message:
        "Education is the most powerful weapon which you can use to change the world. At our institution, we are committed to nurturing not just academic excellence, but also character, creativity, and critical thinking. Our students are prepared to be leaders who will shape the future of our society.",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      position: "Dean of Academic Affairs",
      image:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "dean.academic@college.edu",
      phone: "+1 (555) 123-4568",
      linkedin: "https://linkedin.com/in/priyasharma",
      message:
        "Academic excellence is not just about grades; it's about fostering a culture of inquiry, innovation, and intellectual growth. We strive to create an environment where every student can discover their potential and pursue their passions with confidence and purpose.",
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      position: "Dean of Research & Innovation",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "dean.research@college.edu",
      phone: "+1 (555) 123-4569",
      linkedin: "https://linkedin.com/in/amitpatel",
      message:
        "Research and innovation are the cornerstones of progress. Our mission is to create an ecosystem where groundbreaking research flourishes, where students and faculty collaborate to solve real-world problems, and where innovation becomes a way of life.",
    },
  ];

  const departmentHeads = [
    {
      name: "Dr. Sarah Johnson",
      department: "Computer Science & Engineering",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "hod.cse@college.edu",
    },
    {
      name: "Dr. Michael Chen",
      department: "Electronics & Communication",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "hod.ece@college.edu",
    },
    {
      name: "Dr. Lisa Rodriguez",
      department: "Mechanical Engineering",
      image:
        "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "hod.mech@college.edu",
    },
    {
      name: "Dr. David Kim",
      department: "Business Administration",
      image:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "hod.mba@college.edu",
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Visionary leaders driving excellence in education, research, and
            innovation
          </p>
        </motion.div>

        <div >
          {/* Senior Leadership */}
          <div className="mb-20">
            {leaders.map((leader, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden mb-12"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Image and Basic Info */}
                  <div className="lg:col-span-1 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 p-8">
                    <div className="text-center">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-lg"
                      />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6">
                        {leader.position}
                      </p>

                      <div className="flex justify-center space-x-3">
                        <a
                          href={`mailto:${leader.email}`}
                          className="p-2 bg-white dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                        >
                          <Mail className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                        </a>
                        <a
                          href={`tel:${leader.phone}`}
                          className="p-2 bg-white dark:bg-gray-800 rounded-full hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-200"
                        >
                          <Phone className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                        </a>
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                        >
                          <Linkedin className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start mb-4">
                      <Quote className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Message from {leader.position}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic text-lg">
                      "{leader.message}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Department Heads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Department Heads
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentHeads.map((head, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={head.image}
                      alt={head.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {head.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 text-sm">
                      {head.department}
                    </p>

                    <a
                      href={`mailto:${head.email}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm transition-colors duration-200"
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
