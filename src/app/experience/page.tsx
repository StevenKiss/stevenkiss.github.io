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
  skills: string[];
  location: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Data Science Intern",
    company: "Kimberly-Clark through The Data Mine at Purdue University",
    period: "Jun 2023 - Present",
    description: [
        "Develop Python-based data pipelines to validate and clean sustainability metrics across plastic/fiber usage, water consumption, and Scope 3 emissions",
        "Design PowerBI dashboards to automate executive reporting for global environmental impact KPIs",
        "Implement machine learning models to identify data quality issues and predict resource consumption trends",
        "Integrate SAP and Sphera data sources into unified sustainability reporting frameworks",
    ],
    skills: ["Python", "Power BI", "Machine Learning", "Data Integration", "SQL"],
    location: "Remote"
  },
  {
    id: 2,
    title: "Undergraduate Data Science Researcher",
    company: "National Space Intelligence Center through The Data Mine at Purdue University",
    period: "Jan 2025 - May 2025",
    description: [
      "Analyzed continental U.S. sensor data using K-means, hierarchical clustering, DBSCAN, GMM, and ST-DBSCAN, finding K-means best mirrored U.S. biomes.",
      "Developed an algorithm to track monthly cluster evolution via a global cluster pool, identifying temporal trends.",
      "Delivered insights on seasonal variations in optical and laser sensor data to enhance system performance",
    ],
    skills: ["Python", "Scikit-learn", "Scrum", "Data Analytics", "Machine Learning", "K-means"],
    location: "West Lafayette, IN"
  },
  {
    id: 3,
    title: "ML Course Instructor",
    company: "All-in-ai",
    period: "Aug 2022 - Aug 2022",
    description: [
      "Helped organize a free summer coding camp focused on teaching Python and introductory machine learning concepts",
      "Instructed middle and high school students in Python programming and basic machine learning techniques, including using models such as random forests to predict home prices",
      "Secured sponsorships from local businesses to provide free lunches for all camp attendees",
    ],
    skills: ["Python", "Machine Learning", "Educational Instruction"],
    location: "Colorado Springs, CO"
  },
  {
    id: 4,
    title: "Semiconductor Summer Intern",
    company: "MITRE",
    period: "Jun 2022 - Aug 2022",
    description: [
      "Developed application-specific integrated circuit (ASIC) for a transistor-based ring oscillator.",
      "Gained proficiency in Verilog HDL, design verification, and EDA tools such as Xschem, Netgen, and OpenLane.",
      "Conducted circuit simulations, schematic and layout design, and clock signal propagation in a 50MHz oscillator.",
      "Mentored a co-worker by teaching semiconductor design and verification methodologies.",
    ],
    skills: ["Verilog", "Xschem", "Netgen", "OpenLane"],
    location: "Colorado Springs, CO"
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

                    {/* skills */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Code className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-600">skills:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((tech, i) => (
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
