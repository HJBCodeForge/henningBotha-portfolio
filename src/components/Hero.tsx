import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enhanced particle animation component
  const Particles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-yellow-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Floating tech icons effect */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`tech-${i}`}
            className={`absolute text-2xl opacity-10 ${
              darkMode ? 'text-cyan-400' : 'text-cyan-600'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          >
            {['⚛️', '🔧', '💻', '🚀', '⚡', '🎨', '🔮', '🌟'][i]}
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section 
      id="hero" 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden`}
    >
      {/* Subtle overlay to ensure text readability */}
      <div className={`absolute inset-0 ${
        darkMode 
          ? 'bg-gray-900/20' 
          : 'bg-white/20'
      }`} />
      
      {/* Particles */}
      <Particles />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
              darkMode ? 'drop-shadow-2xl' : 'drop-shadow-lg'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              textShadow: darkMode 
                ? '0 0 30px rgba(34, 211, 238, 0.3), 0 0 60px rgba(34, 211, 238, 0.1)'
                : '0 0 20px rgba(8, 145, 178, 0.2)'
            }}
          >
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>Henning</span>{' '}
            <motion.span 
              className="text-cyan-400"
              animate={{
                textShadow: [
                  '0 0 20px rgba(34, 211, 238, 0.5)',
                  '0 0 30px rgba(34, 211, 238, 0.8)',
                  '0 0 20px rgba(34, 211, 238, 0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Botha
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className={`text-xl sm:text-2xl lg:text-3xl mb-8 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer with a{' '}
            <span className="text-cyan-400 font-semibold">Designer's Eye</span>
          </motion.p>
          
          <motion.p 
            className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting elegant, end-to-end digital experiences
          </motion.p>
          
          <motion.button
            onClick={scrollToWork}
            className={`relative inline-flex items-center px-8 py-4 text-lg font-medium text-black bg-cyan-400 rounded-lg transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 overflow-hidden ${
              darkMode ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
            }}
          >
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 opacity-0"
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative z-10">View My Work</span>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`flex flex-col items-center ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
