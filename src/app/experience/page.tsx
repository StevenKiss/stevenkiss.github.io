'use client';


import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Building, Code } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  location: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Example Company",
    period: "2023 - Present",
    description: [
      "Led development of key features",
      "Collaborated with cross-functional teams",
      "Implemented best practices and coding standards"
    ],
    technologies: ["React", "TypeScript", "Node.js"],
    location: "Remote"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Tech Innovators Ltd.",
    period: "2021 - 2023",
    description: [
      "Developed responsive web applications",
      "Worked closely with UI/UX designers",
      "Optimized performance for mobile and desktop"
    ],
    technologies: ["Vue.js", "Tailwind CSS", "JavaScript"],
    location: "London, UK"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Startup Hub",
    period: "2019 - 2021",
    description: [
      "Built RESTful APIs and integrated third-party services",
      "Managed cloud deployments and CI/CD pipelines",
      "Mentored junior developers"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "AWS"],
    location: "Berlin, Germany"
  },
  {
    id: 4,
    title: "Junior Web Developer",
    company: "Creative Solutions",
    period: "2018 - 2019",
    description: [
      "Maintained and updated company website",
      "Assisted in the migration to a modern tech stack",
      "Wrote unit and integration tests"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Jest"],
    location: "Toronto, Canada"
  },
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  return (
    <div className="relative min-h-screen overflow-hidden" ref={containerRef}>
      {/* Parallax Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-96 right-20 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        className="text-center py-16 px-6 relative z-10"
        style={{ y: titleY }}
      >
        <h1 className="text-6xl font-bold text-gray-800 mb-6">
          Professional Journey
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Exploring the path that led me to where I am today
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-green-400 to-purple-400 transform md:-translate-x-1/2"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-20"></div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    {/* Company & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                        <Building className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-gray-800">{experience.company}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {experience.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center space-x-2 mb-4 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{experience.location}</span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-6">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Code className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-600">Technologies:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-gradient-to-r from-blue-100 to-green-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 hover:shadow-md transition-shadow duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Section */}
      <div className="relative z-10 text-center py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready for the Next Chapter
          </h2>
          <p className="text-gray-600 text-lg">
            Always excited to take on new challenges and grow professionally
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
