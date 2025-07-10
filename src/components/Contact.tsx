import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/henningbotha',
      icon: <Github className="w-6 h-6" />,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/henningbotha',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/henningbotha',
      icon: <Twitter className="w-6 h-6" />,
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section 
      id="contact" 
      className={`relative py-20 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-100/50'} overflow-hidden`}
      ref={ref}
    >
      {/* Contact section-specific futuristic elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Communication-themed floating elements */}
        <motion.div
          className="absolute top-16 left-16"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle
              cx="50" cy="50" r="30"
              fill="none"
              stroke={darkMode ? "#22d3ee" : "#0891b2"}
              strokeWidth="2"
              opacity="0.4"
            />
            <circle
              cx="50" cy="50" r="15"
              fill="none"
              stroke={darkMode ? "#22d3ee" : "#0891b2"}
              strokeWidth="1"
              opacity="0.6"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10"
          animate={{
            y: [0, -40, 0],
            rotate: [0, -360],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="90" height="90" viewBox="0 0 100 100">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke={darkMode ? "#8b5cf6" : "#7c3aed"}
              strokeWidth="1.5"
              opacity="0.3"
            />
            <polygon
              points="50,25 75,75 25,75"
              fill="none"
              stroke={darkMode ? "#8b5cf6" : "#7c3aed"}
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </motion.div>

        {/* Communication icons floating */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute text-xl opacity-10 ${
              darkMode ? 'text-cyan-400' : 'text-cyan-600'
            }`}
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            {['📧', '💬', '🔗', '📱', '💻', '🌐', '📞', '✨'][i]}
          </motion.div>
        ))}

        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <motion.path
            d="M 20,80 Q 50,20 80,80"
            fill="none"
            stroke={darkMode ? "#22d3ee" : "#0891b2"}
            strokeWidth="1"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M 80,20 Q 50,60 20,20"
            fill="none"
            stroke={darkMode ? "#f59e0b" : "#d97706"}
            strokeWidth="1"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </svg>

        {/* Contact grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="contactGrid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="25" cy="25" r="1"
                  fill={darkMode ? "#22d3ee" : "#0891b2"}
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGrid)" />
          </svg>
        </div>

        {/* Corner accent for contact */}
        <motion.div
          className="absolute top-10 right-20 w-24 h-24"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className={`w-full h-full border-2 ${
            darkMode ? 'border-purple-400/20' : 'border-purple-600/20'
          } transform rotate-45`} />
        </motion.div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
            style={{
              textShadow: darkMode 
                ? '0 0 20px rgba(34, 211, 238, 0.2)'
                : '0 0 10px rgba(8, 145, 178, 0.1)'
            }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className={`text-xl mb-12 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            I'm actively seeking <span className="text-cyan-400 font-semibold">full-time opportunities</span> and 
            available for <span className="text-cyan-400 font-semibold">freelance projects</span>. 
            Whether you're looking for a dedicated team member or need help bringing your vision to life, 
            let's discuss how we can work together.
          </motion.p>

          {/* Email CTA */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.a
              href="mailto:henning.botha@gmail.com"
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-cyan-400 text-black font-semibold rounded-lg transition-all duration-200 text-lg group overflow-hidden"
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
              <span className="relative z-10 flex items-center gap-3">
                <Mail className="w-6 h-6" />
                henning.botha@gmail.com
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <p className={`mb-6 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Connect with me on</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-12 h-12 rounded-lg border transition-all duration-200 hover:scale-110 ${
                    darkMode 
                      ? 'bg-gray-800 text-gray-400 border-gray-700 hover:border-current'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-current shadow-sm'
                  } ${link.color}`}
                  whileHover={{ 
                    y: -2,
                    boxShadow: darkMode 
                      ? '0 4px 20px rgba(34, 211, 238, 0.3)'
                      : '0 4px 20px rgba(8, 145, 178, 0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Visit my ${link.name} profile`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Alternative contact method */}
          <motion.div variants={itemVariants} className="mt-12">
            <p className={`text-sm ${
              darkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Ready to discuss your next project or full-time opportunity? Let's connect and explore how my skills can contribute to your success.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
