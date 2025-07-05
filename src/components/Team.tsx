import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Calendar, ChevronDown } from "lucide-react";

const Team: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState("2025-26");

  const members2023_24 = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Student Coordinator",
      department: "Computer Science",
      email: "alex.thompson@student.college.edu",
      linkedin: "https://linkedin.com/in/alexthompson",
      github: "https://github.com/alexthompson",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Events Coordinator",
      department: "Electronics & Communication",
      email: "priya.patel@student.college.edu",
      linkedin: "https://linkedin.com/in/priyapatel",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "Technical Coordinator",
      department: "Information Technology",
      email: "david.rodriguez@student.college.edu",
      linkedin: "https://linkedin.com/in/davidrodriguez",
      github: "https://github.com/davidrodriguez",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "Emily Zhang",
      role: "Marketing Coordinator",
      department: "Business Administration",
      email: "emily.zhang@student.college.edu",
      linkedin: "https://linkedin.com/in/emilyzhang",
      twitter: "https://twitter.com/emilyzhang",
      image:
        "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const members2024_25 = [
    {
      id: 5,
      name: "Rahul Sharma",
      role: "Student Coordinator",
      department: "Computer Science",
      email: "rahul.sharma@student.college.edu",
      linkedin: "https://linkedin.com/in/rahulsharma",
      github: "https://github.com/rahulsharma",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 6,
      name: "Sneha Reddy",
      role: "Research Coordinator",
      department: "Mechanical Engineering",
      email: "sneha.reddy@student.college.edu",
      linkedin: "https://linkedin.com/in/snehareddy",
      image:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 7,
      name: "Arjun Kumar",
      role: "Finance Coordinator",
      department: "Economics",
      email: "arjun.kumar@student.college.edu",
      linkedin: "https://linkedin.com/in/arjunkumar",
      image:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 8,
      name: "Kavya Nair",
      role: "Design Coordinator",
      department: "Design",
      email: "kavya.nair@student.college.edu",
      linkedin: "https://linkedin.com/in/kavyanair",
      image:
        "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const members2025_26 = [
    {
      id: 9,
      name: "Vikram Singh",
      role: "Junior Coordinator",
      department: "Computer Science",
      email: "vikram.singh@student.college.edu",
      linkedin: "https://linkedin.com/in/vikramsingh",
      github: "https://github.com/vikramsingh",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 10,
      name: "Ananya Gupta",
      role: "Content Coordinator",
      department: "English Literature",
      email: "ananya.gupta@student.college.edu",
      linkedin: "https://linkedin.com/in/ananyagupta",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 11,
      name: "Rohan Mehta",
      role: "Social Media Coordinator",
      department: "Mass Communication",
      email: "rohan.mehta@student.college.edu",
      linkedin: "https://linkedin.com/in/rohanmehta",
      twitter: "https://twitter.com/rohanmehta",
      image:
        "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 12,
      name: "Ishita Jain",
      role: "Outreach Coordinator",
      department: "Psychology",
      email: "ishita.jain@student.college.edu",
      linkedin: "https://linkedin.com/in/ishitajain",
      image:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const yearOptions = [
    { value: "2025-26", label: "Members 2025-26", members: members2025_26 },
    { value: "2024-25", label: "Members 2024-25", members: members2024_25 },
    { value: "2023-24", label: "Members 2023-24", members: members2023_24 },
  ];

  const currentMembers =
    yearOptions.find((option) => option.value === selectedYear)?.members ||
    members2025_26;

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate individuals driving innovation and entrepreneurship
            across different academic years
          </p>
        </motion.div>

        <div>
          {/* Year Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-6 py-3 pr-10 text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {yearOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </motion.div>

          {/* Current Year Header */}
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {
                  yearOptions.find((option) => option.value === selectedYear)
                    ?.label
                }
              </h3>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Members Grid */}
          <motion.div
            key={`${selectedYear}-grid`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentMembers.map((member, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {member.department}
                  </p>

                  <div className="flex space-x-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                    >
                      <Mail className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                    >
                      <Linkedin className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </a>
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        <Github className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
