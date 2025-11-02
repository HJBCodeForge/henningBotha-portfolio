import { motion } from 'framer-motion';
import { X, ExternalLink, Github, User, Target, Lightbulb, Code } from 'lucide-react';
import { Project } from '../App';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  darkMode: boolean;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, darkMode }) => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border ${
          darkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`sticky top-0 border-b p-6 flex items-center justify-between ${
          darkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          <h2 className={`text-2xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>{project.title}</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              darkMode 
                ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Image */}
          <div className={`h-64 rounded-lg overflow-hidden ${
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
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-6xl">
                {project.id === 'hip-coffee' && '☕'}
                {project.id === 'happy-notes' && '📝'}
                {project.id === 'de-antonio-barbershop' && '✂️'}
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.description}
            </p>
          </div>

          {/* Case Study Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Challenge */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-cyan-400" />
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>The Challenge</h3>
              </div>
              <p className={`leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {project.challenge}
              </p>
            </div>

            {/* My Role */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="w-6 h-6 text-cyan-400" />
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>My Role</h3>
              </div>
              <p className={`leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {project.role}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 text-cyan-400" />
              <h3 className={`text-xl font-semibold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 text-sm font-medium text-white rounded-lg ${getTechColor(tech)}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* The Solution */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-cyan-400" />
              <h3 className={`text-xl font-semibold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>The Solution</h3>
            </div>
            <p className={`leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.solution}
            </p>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 pt-6 border-t ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </motion.a>
            
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-6 py-3 border rounded-lg transition-colors ${
                darkMode 
                  ? 'border-gray-600 text-white hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-900 hover:bg-gray-50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              View Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
