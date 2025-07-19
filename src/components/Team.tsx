import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Calendar, ChevronDown } from "lucide-react";

const Team: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState("2025-26");

   const members2023_24 = [
     {
       id: 1,
       name: "Asfin",
       role: "Member",
      //  department: "Computer Science",
      //  email: "alex.thompson@student.college.edu",
      //  linkedin: "https://linkedin.com/in/alexthompson",
      //  github: "https://github.com/alexthompson",
       image:
         "/assets/photos/Asfin.jpg",
     },
     {
       id: 2,
       name: "Manuvel",
       role: "Member",
      //  department: "Electronics & Communication",
      //  email: "priya.patel@student.college.edu",
      //  linkedin: "https://linkedin.com/in/priyapatel",
       image:
         "/assets/photos/Manuvel.jpg",
     },
     {
       id: 3,
       name: "Shafeek",
       role: "Member",
      //  department: "Information Technology",
      //  email: "david.rodriguez@student.college.edu",
      //  linkedin: "https://linkedin.com/in/davidrodriguez",
      //  github: "https://github.com/davidrodriguez",
       image:
         "/assets/photos/Shafeek.jpg",
     },
     {
       id: 4,
       name: "Sreejesh",
       role: "Member",
      //  department: "Business Administration",
      //  email: "emily.zhang@student.college.edu",
      //  linkedin: "https://linkedin.com/in/emilyzhang",
      //  twitter: "https://twitter.com/emilyzhang",
       image:
         "/assets/photos/Sreejesh.jpg",
     },
    //   {
    //    id: 5,
    //    name: "Sreekanth",
    //    role: "Member",
    //   //  department: "Business Administration",
    //   //  email: "emily.zhang@student.college.edu",
    //   //  linkedin: "https://linkedin.com/in/emilyzhang",
    //   //  twitter: "https://twitter.com/emilyzhang",
    //    image:
    //      "/assets/photos/",
    //  },
   ];
  const members2024_25 = [
    {
     id: 6,
      name: "Abhinav K",
      role: "Leader",
      department: "Computer Engineering",   
      email: "Abhinavksathyann@gmail.com",
      linkedin: "https://www.linkedin.com/in/abhinavksathyan",
      image:
        "/assets/photos/Abhinav.jpg",
    },
    {
      id: 9,
      name: "Shaham Mubeen MS",
      role: "Member",
      department: "Computer Engineering",   
      email: "mubeenshaham9846@gmail.com",
      linkedin: "https://www.linkedin.com/in/shaham-mubeen-a02517368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      image:
        "/assets/photos/Shaham.jpeg",
    },
    {
      id: 10,
      name: "Amaljith M A ",
      role: "Member",
      department: "Electrical & Electronics Engineering",
      email: "amaljithma65@gmail.com",
      linkedin: "https://www.linkedin.com/in/amal-jith-151809333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image:
        "/assets/photos/AmalJith.jpg",
    },
    {
      id: 11,
      name: "Aju Vincent",
      role: "Member",
      department: "Automobile Engineering",
      email: "ajuvincent0@gmail.com",
      linkedin: "https://www.linkedin.com/in/aju-vincent-47b862333",
      // twitter: "https://twitter.com/rohanmehta",
      image:
        "/assets/photos/Aju.jpg",
    },
    {
      id: 12,
      name: "Alan charly",
      role: "Member",
      department: "Mechanical Engineering",
      email: "antonyalan4401@gmail.com",
      linkedin: "",
      image:
        "/assets/photos/Alen.jpg",
    },
    //    {
    //   id: 13,
    //   name: "AmalKrishna",
    //   role: "Member",
    //   department: "Mechanical Engineering",
    //   // email: "ishita.jain@student.college.edu",
    //   linkedin: "",
    //   image:
    //     "/assets/photos/Amal.jpg",
    // },
    //    {
    //   id: 14,
    //   name: "Anandhu",
    //   role: "Member",
    //   department: "Automobile Engineering",
    //   // email: "ishita.jain@student.college.edu",
    //   linkedin: "",
    //   image:
    //     "/assets/photos/Anandhu.jpg",
    // },
          {
      id: 15,
      name: "Bijo K Boby",
      role: "Member",
      department: "Electrical & Electronics Engineering",
      email: "bijogamer840@gmail.com",
      linkedin: "",
      image:
        "/assets/photos/BIJO.jpg",
    },
    {
      id: 16,
      name: "Meshak david suraj",
      role: "Member",
      department: "Automobile Engineering",
      email: "meshakdavidsuraj@gmail.com",
      linkedin: "https://www.linkedin.com/in/meshak-suraj-6a6732333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image:
        "/assets/photos/Devid.jpg",
    },
  ];

  const members2025_26 = [
    {
      id: 9,
      name: "Shaham Mubeen MS",
      role: "Leader",
      department: "Computer Engineering",   
      email: "mubeenshaham9846@gmail.com",
      linkedin: "https://www.linkedin.com/in/shaham-mubeen-a02517368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      image:
        "/assets/photos/Shaham.jpeg",
    },
    {
      id: 10,
      name: "Amaljith M A ",
      role: "Member",
      department: "Electrical & Electronics Engineering",
      email: "amaljithma65@gmail.com",
      linkedin: "https://www.linkedin.com/in/amal-jith-151809333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image:
        "/assets/photos/AmalJith.jpg",
    },
    {
      id: 11,
      name: "Aju Vincent",
      role: "Member",
      department: "Automobile Engineering",
      email: "ajuvincent0@gmail.com",
      linkedin: "https://www.linkedin.com/in/aju-vincent-47b862333",
      image:
        "/assets/photos/Aju.jpg",
    },
    {
      id: 12,
      name: "Alan charly",
      role: "Member",
      department: "Mechanical Engineering",
      email: "antonyalan4401@gmail.com",
      linkedin: "",
      image:
        "/assets/photos/Alen.jpg",
    },
       {
      id: 13,
      name: "Amalkrishna K P",
      role: "Member",
      department: "Automobile Engineering",
      email: "amal.38.2255@gmail.com",
      linkedin: "https://www.linkedin.com/in/amal-amal-8b5808333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image:
        "/assets/photos/Amal.jpg",
    },
       {
      id: 14,
      name: "Anandhakrishnan TP ",
      role: "Member",
      department: "Automobile Engineering",
      email: "tpanandhu753@gmail.com",
      linkedin: "https://www.linkedin.com/in/anandhu-tp-005b83333",
      image:
        "/assets/photos/Anandhu.jpg",
    },
     {
      id: 15,
      name: "Bijo K Boby",
      role: "Member",
      department: "Electrical & Electronics Engineering",
      email: "bijogamer840@gmail.com",
      linkedin: "",
      image:
        "/assets/photos/BIJO.jpg",
    },
    {
      id: 16,
      name: "Meshak david suraj",
      role: "Member",
      department: "Automobile Engineering",
      email: "meshakdavidsuraj@gmail.com",
      linkedin: "https://www.linkedin.com/in/meshak-suraj-6a6732333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image:
        "/assets/photos/Devid.jpg",
    },
  ];

  const yearOptions = [
    { value: "2025-26", label: "Members 2025-26 (Current)",  members: members2025_26 },
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
