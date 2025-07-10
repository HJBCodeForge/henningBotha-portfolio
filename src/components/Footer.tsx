import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/henningbotha',
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/henningbotha',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/henningbotha',
      icon: <Twitter className="w-5 h-5" />,
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t ${
      darkMode 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Logo and copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <motion.button
              onClick={scrollToTop}
              className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              HB
            </motion.button>
            <div className={`flex items-center gap-2 text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span>© {currentYear} Henning Botha</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Built with <Heart className="w-4 h-4 text-red-400" fill="currentColor" /> and React
              </span>
            </div>
          </div>

          {/* Right side - Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  darkMode 
                    ? 'text-gray-400 hover:text-cyan-400' 
                    : 'text-gray-600 hover:text-cyan-600'
                }`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Visit my ${link.name} profile`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className={`mt-8 pt-8 border-t text-center ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Designed and developed with attention to accessibility and performance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
