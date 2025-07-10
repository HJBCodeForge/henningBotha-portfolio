import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Globe, Settings } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = [
    {
      title: "Front-End",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "React Native", icon: "📱" },
      ]
    },
    {
      title: "Back-End",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚂" },
        { name: "RESTful APIs", icon: "🔌" },
        { name: "Authentication", icon: "🔐" },
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Database Design", icon: "🗄️" },
      ]
    },
    {
      title: "Concepts & Tools",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "OOP", icon: "🏗️" },
        { name: "Web Accessibility", icon: "♿" },
        { name: "Agile/SCRUM", icon: "🔄" },
        { name: "SEO", icon: "🔍" },
        { name: "Git/GitHub", icon: "📦" },
        { name: "VS Code", icon: "💻" },
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              My Toolkit
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              A comprehensive set of technologies and methodologies I use to build 
              robust, scalable, and accessible web applications.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={`rounded-xl p-6 border ${
                  darkMode 
                    ? 'bg-gray-900 border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-cyan-400">
                    {category.icon}
                  </div>
                  <h3 className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors group cursor-default ${
                        darkMode 
                          ? 'bg-gray-800 hover:bg-gray-700' 
                          : 'bg-white hover:bg-gray-100 border border-gray-200'
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className={`transition-colors ${
                        darkMode 
                          ? 'text-gray-300 group-hover:text-white' 
                          : 'text-gray-700 group-hover:text-gray-900'
                      }`}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Accessibility Statement */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-lg border ${
              darkMode 
                ? 'bg-cyan-400/10 border-cyan-400/20' 
                : 'bg-cyan-50 border-cyan-200'
            }`}>
              <span className="text-2xl">♿</span>
              <p className="text-cyan-400 font-medium">
                Committed to building inclusive applications accessible to all users
              </p>
            </div>
          </motion.div>

          {/* Learning Statement */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <p className={darkMode ? 'text-gray-500' : 'text-gray-600'}>
              Always learning and staying current with the latest technologies and best practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
