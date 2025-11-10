import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../App';

interface ProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onProjectClick, darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'React': 'bg-blue-500',
      'Node.js': 'bg-green-500',
      'MongoDB': 'bg-green-600',
      'Express': 'bg-gray-600',
      'Socket.io': 'bg-purple-500',
      'JWT': 'bg-red-500',
      'JavaScript': 'bg-yellow-500',
      'CSS3': 'bg-blue-400',
      'PostgreSQL': 'bg-blue-700',
      'Stripe': 'bg-indigo-500',
      'NASA API': 'bg-orange-500',
      'Calendar API': 'bg-red-600',
      'FastAPI': 'bg-teal-500',
      'Python': 'bg-yellow-400',
      'rembg': 'bg-gray-700',
      'ONNX Runtime': 'bg-blue-600',
      'SQLite': 'bg-blue-400',
      'Pillow': 'bg-indigo-400',
      'Docker': 'bg-blue-500',
      '.NET 8': 'bg-purple-600',
      'ASP.NET Core': 'bg-purple-700',
      'Entity Framework Core': 'bg-emerald-600',
      'OpenAPI': 'bg-lime-600',
      'AWS Elastic Beanstalk': 'bg-orange-500',
    };
    return colors[tech] || 'bg-gray-500';
  };

  return (
    <section 
      id="work" 
      className={`relative py-20 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-100/50'} overflow-hidden`}
      ref={ref}
    >
      {/* Section-specific futuristic elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes for projects section */}
        <motion.div
          className="absolute top-20 left-10"
          animate={{
            rotate: 360,
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg width="80" height="80" viewBox="0 0 100 100">
            <rect
              x="20" y="20" width="60" height="60"
              fill="none"
              stroke={darkMode ? "#22d3ee" : "#0891b2"}
              strokeWidth="1.5"
              opacity="0.4"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-32 right-20"
          animate={{
            rotate: -360,
            x: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg width="60" height="60" viewBox="0 0 100 100">
            <polygon
              points="50,5 95,75 5,75"
              fill="none"
              stroke={darkMode ? "#f59e0b" : "#d97706"}
              strokeWidth="2"
              opacity="0.3"
            />
          </svg>
        </motion.div>

        {/* Floating tech particles specific to projects */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute text-lg opacity-10 ${
              darkMode ? 'text-purple-400' : 'text-purple-600'
            }`}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -60, 0],
              rotate: [0, 180],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          >
            {['💻', '🔧', '⚡', '🚀', '🎯', '🔥', '💡', '⭐', '🎨', '🔮', '🌟', '⚛️'][i]}
          </motion.div>
        ))}

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="projectsGrid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke={darkMode ? "#8b5cf6" : "#7c3aed"}
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#projectsGrid)" />
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className={`text-4xl lg:text-5xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
              style={{
                textShadow: darkMode 
                  ? '0 0 20px rgba(34, 211, 238, 0.2)'
                  : '0 0 10px rgba(8, 145, 178, 0.1)'
              }}
            >
              Featured Projects
            </motion.h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              A showcase of projects that demonstrate my ability to solve real-world problems 
              through thoughtful design and robust engineering.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`group relative rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-cyan-400' 
                    : 'bg-white border-gray-200 hover:border-cyan-400 shadow-lg hover:shadow-xl'
                }`}
                onClick={() => onProjectClick(project)}
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className={`h-64 overflow-hidden ${
                  !project.image ? 'flex items-center justify-center' : ''
                } ${
                  darkMode 
                    ? 'bg-gradient-to-br from-cyan-400/20 to-blue-500/20' 
                    : 'bg-gradient-to-br from-cyan-100 to-blue-100'
                }`}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} Demo Screenshot`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-4xl">
                      {index === 0 && '☕'}
                      {index === 1 && '📝'}
                      {index === 3 && '✂️'}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`mb-4 line-clamp-2 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-medium text-white rounded-full ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium text-gray-400 bg-gray-700 rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveDemo, '_blank');
                      }}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                      className={`flex items-center gap-2 transition-colors ${
                        darkMode 
                          ? 'text-gray-400 hover:text-gray-300' 
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className={`mb-6 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Want to see more? Check out my GitHub for additional projects and contributions.
            </p>
            <motion.a
              href="https://github.com/HJBCodeForge"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors border ${
                darkMode 
                  ? 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-cyan-400'
                  : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50 hover:border-cyan-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View All Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
