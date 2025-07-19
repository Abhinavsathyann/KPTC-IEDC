import React from "react";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { Mail, Phone, Linkedin, Quote } from "lucide-react";

const Leadership: React.FC = () => {


  const leaders = [
    {
      id: 1,
      name: "Dr. Prasanna",
      position: "DIRECTOR",
      image:
        "https://www.kuttukaranpoly.com/wp-content/uploads/2023/07/Director-1536x1024.jpg",
      email: "#",
      phone: "#",
      linkedin: "#",
      message:
        "At Kuttukaran Polytechnic College, we proudly build on the legacy of one of South India’s largest and most respected automobile dealership groups. Established on March 21, 2022, through the acquisition of Matha College of Technology, we offer programs in Automobile, Mechanical, Electrical and Electronics, Civil, and Computer Engineering. We are committed to nurturing young minds through strong theoretical foundations and hands-on learning. Alongside academics, we emphasize extracurricular activities, industry interactions, and internships to develop well-rounded, industry-ready graduates. With Kuttukaran’s proven 80-year legacy and the support of our faculty, management, parents, and stakeholders, we aim to empower students with skills, knowledge, and values for employability and entrepreneurship.",
    },
    {
      id: 2,
      name: "Ms. Jilja Rajesh",
      position: "PRINCIPAL",
      image:
        "https://www.kuttukaranpoly.com/wp-content/uploads/2023/07/Principal-1536x1024.jpg",
      email: "#",
      phone: "#",
      linkedin: "#",
      message:
        "Welcome to Kuttukaran Polytechnic College, where we are dedicated to edifying, empowering, and exploring the potential of every student. Our vision is to transform capabilities into competencies through rigorous academics, practical training, and industry-relevant curriculum. Rooted in the legacy of the automobile industry, we focus on skill development, employability, and staying aligned with the latest trends through strong industry partnerships. Our dedicated faculty ensures that students receive the best guidance on their journey toward excellence. Join us at KPTC — discover your potential, build valuable skills, and unlock a world of opportunities.",
    },
    {
      id: 3,
      name: "Mr. Sandeep",
      position: "Dean",
      image:
        "",
      email: "#",
      phone: "#",
      linkedin: "#",
      message:
        "Research and innovation are the cornerstones of progress. Our mission is to create an ecosystem where groundbreaking research flourishes, where students and faculty collaborate to solve real-world problems, and where innovation becomes a way of life.",
    },
    {
      id: 4,
      name: "Dr. T Dhanalakshmi",
      position: "Academic Advisor",
      image: "/assets/photos/AA.jpg",
      email: "aa@kuttukaranpoly.com",
      phone: "#",
      linkedin: "#",
      message:
        "Research and innovation are the cornerstones of progress. Our mission is to create an ecosystem where groundbreaking research flourishes, where students and faculty collaborate to solve real-world problems, and where innovation becomes a way of life.",
    },
    {
      id: 5,
      name: "Mr. Ebin petter",
      position: "IEDC Coordinator",
      image:
        "/assets/photos/EbinSir.jpg",
      email: "#",
      phone: "#",
      linkedin: "#",
      message:
        "Research and innovation are the cornerstones of progress. Our mission is to create an ecosystem where groundbreaking research flourishes, where students and faculty collaborate to solve real-world problems, and where innovation becomes a way of life.",
    },
  ];

  const departmentHeads = [
    {
      name: "Ms Jitha K Wilson",
      department: "Civil Engineering",
      image:
        "https://www.kuttukaranpoly.com/wp-content/uploads/2023/07/HOD-CIVIL-1536x1024.jpg",
      email: "hod.civil@kuttukaranpoly.com",
    },
    {
      name: "Mr Harisankar H",
      department: "Mechanical Engineering",
      image:
        "https://www.kuttukaranpoly.com/wp-content/uploads/2023/07/HOD-MECH-2-1536x1024.jpg",
      email: "hod.mech@kuttukaranpoly.com",
    },
    {
      name: "Ms Ashitha Baby",
      department: "Electrical & Electronics Engineering",
      image:
        "https://www.kuttukaranpoly.com/wp-content/uploads/2023/07/HOD-EEE-1536x1024.jpg",
      email: "hod.eee@kuttukaranpoly.com",
    },
    {
      name: "Ms Asamol M A",
      department: "Computer Engineering",
      image:
        "https://www.kuttukaranpoly.com/wp-content/uploads/2023/07/HOD-CS-1536x1024.jpg",
      email: "hod.computer@kuttukaranpoly.com",
    },
    {
      name: "Automobile Engineering",
      department: "Mr Sharath Krishnan C K",
      image:
        "https://www.kuttukaranpoly.com/wp-content/uploads/2025/03/Sharath-Krishnan-C-K.jpeg",
      email: "hod.auto@kuttukaranpoly.com",
    },
    {
      name: "Science & Humanities",
      department: "Ms Usha Radhakrishnan",
      image:
        "https://www.kuttukaranpoly.com/wp-content/uploads/2023/07/HOD-SH-1536x1024.jpg",
      email: "hod.sh@kuttukaranpoly.com",
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
