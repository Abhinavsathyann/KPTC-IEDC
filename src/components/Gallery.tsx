import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar } from 'lucide-react';


const Gallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const galleryImages = [
    {
     src: "/assets/photos/events1.jpg",
      alt: "Startup Pitch Competition",
      title: "Annual Startup Pitch Competition 2024",
      date: "March 2024",
      description: "Students presenting innovative business ideas to industry experts"
    },
    {
      src: "/assets/photos/EVENTS2.jpg",
      alt: "Innovation Workshop",
      title: "AI/ML Innovation Workshop",
      date: "February 2024",
      description: "Hands-on workshop on artificial intelligence and machine learning"
    },
    {
      src: "/assets/photos/EVENTS3.jpg",
      alt: "Hackathon Event",
      title: "48-Hour Hackathon Challenge",
      date: "January 2024",
      description: "Intensive coding competition with participants from various departments"
    },
    {
      src: "/assets/photos/EVENTS4.jpg",
      alt: "Mentorship Program",
      title: "Industry Mentorship Program Launch",
      date: "December 2023",
      description: "Connecting students with industry professionals for guidance"
    },
    {
      src: "/assets/photos/NEC2023.jpg",
      alt: "Startup Showcase",
      title: "Student Startup Showcase",
      date: "November 2023",
      description: "Showcasing innovative student-led startup projects"
    },
    {
      src: "/assets/photos/NEC2023LOGO.jpg",
      alt: "Entrepreneurship Seminar",
      title: "Entrepreneurship Leadership Seminar",
      date: "October 2023",
      description: "Leadership skills development for aspiring entrepreneurs"
    },
    {
      src: "/assets/photos/NEC2023QUALIFIED.jpg",
      alt: "Innovation Lab",
      title: "IEDC Innovation Lab Opening",
      date: "September 2023",
      description: "State-of-the-art innovation laboratory inauguration ceremony"
    },
    {
      src: "/assets/photos/NEC2024TEAM.jpg",
      alt: "Team Building",
      title: "Team Building Workshop",
      date: "August 2023",
      description: "Building stronger connections within the IEDC community"
    },
    {
      src: "/assets/photos/NEC2024TEAM(1).jpg",
      alt: "Tech Conference",
      title: "Annual Tech Innovation Conference",
      date: "July 2023",
      description: "Bringing together tech leaders and innovators from industry"
    },
    {
      src: "/assets/photos/ESUMMIT24.jpg",
      alt: "Blockchain Workshop",
      title: "Blockchain Technology Workshop",
      date: "June 2023",
      description: "Understanding blockchain and cryptocurrency technologies"
    },
    {
      src: "/assets/photos/ESUMMIT24-2.jpg",
      alt: "Mobile App Hackathon",
      title: "Mobile App Development Hackathon",
      date: "May 2023",
      description: "Creating innovative mobile applications in limited time"
    },
    {
      src: "/assets/photos/ESUMMIT25.jpg",
      alt: "Healthcare Innovation",
      title: "Healthcare Innovation Challenge",
      date: "April 2023",
      description: "Developing solutions for healthcare challenges and problems"
    },
     {
      src: "/assets/photos/ESUMMIT25-10.jpg",
      alt: "Healthcare Innovation",
      title: "Healthcare Innovation Challenge",
      date: "April 2023",
      description: "Developing solutions for healthcare challenges and problems"
    },
     {
      src: "/assets/photos/ESUMMIT25-2.jpg",
      alt: "Healthcare Innovation",
      title: "Healthcare Innovation Challenge",
      date: "April 2023",
      description: "Developing solutions for healthcare challenges and problems"
    },
     {
      src: "/assets/photos/ESUMMIT25-9.jpg",
      alt: "Healthcare Innovation",
      title: "Healthcare Innovation Challenge",
      date: "April 2023",
      description: "Developing solutions for healthcare challenges and problems"
    },
     {
      src: "/assets/photos/CELLUNIT2024-9.jpg",
      alt: "Healthcare Innovation",
      title: "Healthcare Innovation Challenge",
      date: "April 2023",
      description: "Developing solutions for healthcare challenges and problems"
    },
     {
      src: "/assets/photos/CELLUNIT2024-8.jpg",
      alt: "Healthcare Innovation",
      title: "Healthcare Innovation Challenge",
      date: "April 2023",
      description: "Developing solutions for healthcare challenges and problems"
    },
     {
      src: "/assets/photos/CELLUNIT2024-1.jpg",
      alt: "Healthcare Innovation",
      title: "Healthcare Innovation Challenge",
      date: "April 2023",
      description: "Developing solutions for healthcare challenges and problems"
    },
     {
      src: "/assets/photos/CELLUNIT2024-3.jpg",
      alt: "Healthcare Innovation",
      title: "Healthcare Innovation Challenge",
      date: "April 2023",
      description: "Developing solutions for healthcare challenges and problems"
    },
     {
      src: "/assets/photos/CELLUNIT2024-2.jpg",
      alt: "Healthcare Innovation",
      title: "Healthcare Innovation Challenge",
      date: "April 2023",
      description: "Developing solutions for healthcare challenges and problems"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Photo <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Capturing moments of innovation, collaboration, and entrepreneurial spirit in our IEDC community
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                    <div className="flex items-center text-white/80 text-xs space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{image.date}</span>
                    </div>
                    <p className="text-white/90 text-xs mt-2 leading-relaxed">{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

