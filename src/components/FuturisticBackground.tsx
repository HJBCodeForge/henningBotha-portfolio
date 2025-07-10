import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FuturisticBackgroundProps {
  darkMode: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ darkMode }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Initialize particles
  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.6 + 0.2
      });
    }
    setParticles(newParticles);
  }, []);

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
        y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated Grid Background */}
      <div className={`absolute inset-0 opacity-20 ${darkMode ? 'opacity-30' : 'opacity-10'}`}>
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke={darkMode ? "#22d3ee" : "#0891b2"}
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={darkMode ? "#22d3ee" : "#0891b2"} stopOpacity="0.1" />
              <stop offset="50%" stopColor={darkMode ? "#22d3ee" : "#0891b2"} stopOpacity="0.3" />
              <stop offset="100%" stopColor={darkMode ? "#22d3ee" : "#0891b2"} stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${
              darkMode ? 'bg-cyan-400' : 'bg-cyan-600'
            }`}
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Geometric Floating Elements */}
      <div className="absolute inset-0">
        {/* Large Floating Hexagon */}
        <motion.div
          className="absolute"
          style={{ 
            left: '10%', 
            top: '20%',
            width: '120px',
            height: '120px'
          }}
          animate={{
            rotate: 360,
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,2 86.6,25 86.6,75 50,98 13.4,75 13.4,25"
              fill="none"
              stroke={darkMode ? "#22d3ee" : "#0891b2"}
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        </motion.div>

        {/* Medium Floating Triangle */}
        <motion.div
          className="absolute"
          style={{ 
            right: '15%', 
            top: '40%',
            width: '80px',
            height: '80px'
          }}
          animate={{
            rotate: -360,
            x: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,80 10,80"
              fill="none"
              stroke={darkMode ? "#8b5cf6" : "#7c3aed"}
              strokeWidth="1.5"
              opacity="0.3"
            />
          </svg>
        </motion.div>

        {/* Small Floating Circle */}
        <motion.div
          className="absolute"
          style={{ 
            left: '70%', 
            top: '70%',
            width: '60px',
            height: '60px'
          }}
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -25, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={darkMode ? "#f59e0b" : "#d97706"}
              strokeWidth="2"
              opacity="0.4"
            />
          </svg>
        </motion.div>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="absolute inset-0">
          {/* Diagonal Animated Lines */}
          <motion.line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke={darkMode ? "#22d3ee" : "#0891b2"}
            strokeWidth="1"
            opacity="0.1"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.line
            x1="100%"
            y1="0"
            x2="0"
            y2="100%"
            stroke={darkMode ? "#8b5cf6" : "#7c3aed"}
            strokeWidth="1"
            opacity="0.1"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </svg>
      </div>

      {/* Mouse-Following Glow Effect */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: '200px',
          height: '200px'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div
          className={`w-full h-full rounded-full ${
            darkMode 
              ? 'bg-gradient-radial from-cyan-400/20 via-cyan-400/10 to-transparent'
              : 'bg-gradient-radial from-cyan-600/15 via-cyan-600/5 to-transparent'
          } blur-xl`}
          style={{
            background: darkMode 
              ? 'radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, rgba(34, 211, 238, 0.1) 50%, transparent 100%)'
              : 'radial-gradient(circle, rgba(8, 145, 178, 0.15) 0%, rgba(8, 145, 178, 0.05) 50%, transparent 100%)'
          }}
        />
      </motion.div>

      {/* Corner Accent Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <motion.div
          className={`w-full h-full border-t-2 border-l-2 ${
            darkMode ? 'border-cyan-400' : 'border-cyan-600'
          }`}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
        <motion.div
          className={`w-full h-full border-b-2 border-r-2 ${
            darkMode ? 'border-purple-400' : 'border-purple-600'
          }`}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Subtle Gradient Overlays */}
      <div 
        className="absolute inset-0"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.05) 0%, transparent 50%, rgba(139, 92, 246, 0.05) 100%)'
            : 'linear-gradient(135deg, rgba(236, 254, 255, 0.5) 0%, transparent 50%, rgba(250, 245, 255, 0.5) 100%)'
        }}
      />
    </div>
  );
};

export default FuturisticBackground;
