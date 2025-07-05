import React from 'react';
import { Target, Eye, Users, Lightbulb, Rocket, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About IEDC <span className="text-blue-600">KPTC</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering the next generation of innovators and entrepreneurs through comprehensive support systems, 
            mentorship programs, and a vibrant ecosystem of creativity and business development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-600 rounded-full">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To create a thriving ecosystem that nurtures innovative thinking, entrepreneurial spirit, and 
              startup culture among students. We provide comprehensive support including mentorship, funding 
              opportunities, and industry connections to transform ideas into successful ventures.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-600 rounded-full">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the leading catalyst for innovation and entrepreneurship in academia, producing skilled 
              entrepreneurs who contribute to economic growth and societal development through technology-driven 
              solutions and sustainable business practices.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600 mx-auto" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Community Building</h4>
            <p className="text-gray-600">
              Building a strong network of like-minded individuals, mentors, and industry experts
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-b from-white to-indigo-50 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4 bg-indigo-100 rounded-full w-16 h-16 mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-indigo-600 mx-auto" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation Hub</h4>
            <p className="text-gray-600">
              Providing resources, workshops, and hackathons to foster creative problem-solving
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-b from-white to-purple-50 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4">
              <Rocket className="h-8 w-8 text-purple-600 mx-auto" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Startup Incubation</h4>
            <p className="text-gray-600">
              Supporting student startups from ideation to market launch with comprehensive guidance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;