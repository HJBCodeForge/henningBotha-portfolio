import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Code, Palette } from 'lucide-react';
import RotatingStack from './RotatingStack';

interface AboutProps {
  darkMode: boolean;
}

// Design to Code Visualization Component
const DesignToCodeVisualization: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [isCodeView, setIsCodeView] = useState(false);
  const [currentCodeLine, setCurrentCodeLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCodeView(prev => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isCodeView) {
      const lineInterval = setInterval(() => {
        setCurrentCodeLine(prev => (prev + 1) % 75);
      }, 150);
      return () => clearInterval(lineInterval);
    }
  }, [isCodeView]);

  return (
    <div className={`w-full h-full rounded-2xl overflow-hidden ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    } border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      
      {/* Header Bar */}
      <div className={`h-8 flex items-center px-3 ${
        darkMode ? 'bg-gray-700' : 'bg-gray-100'
      } border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
        <div className={`ml-auto text-xs flex items-center gap-1 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <motion.div
            animate={{ opacity: isCodeView ? 1 : 0.3 }}
            className="flex items-center gap-1"
          >
            <Code className="w-3 h-3" />
            <span>Code</span>
          </motion.div>
          <div className="mx-1">|</div>
          <motion.div
            animate={{ opacity: !isCodeView ? 1 : 0.3 }}
            className="flex items-center gap-1"
          >
            <Palette className="w-3 h-3" />
            <span>Design</span>
          </motion.div>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative h-[calc(100%-2rem)] overflow-hidden">
        {/* Design View */}
        <motion.div
          className="absolute inset-0 p-2"
          animate={{
            opacity: isCodeView ? 0 : 1,
            x: isCodeView ? -20 : 0
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Wireframe Elements */}
          <div className="space-y-3 relative">
            {/* Header Wireframe with Animation */}
            <motion.div 
              className={`h-6 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-300'} w-full relative overflow-hidden`}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            {/* Navigation Wireframe with Staggered Animation */}
            <div className="flex space-x-2">
              {[...Array(4)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className={`h-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} flex-1 relative overflow-hidden`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                  style={{ transformOrigin: 'left' }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Hero Section Wireframe with Pulsing Effect */}
            <motion.div 
              className={`h-12 rounded-lg ${darkMode ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20' : 'bg-gradient-to-r from-cyan-100 to-blue-100'} border border-dashed ${darkMode ? 'border-cyan-400/40' : 'border-cyan-300'} flex items-center justify-center relative overflow-hidden`}
              animate={{ 
                boxShadow: [
                  '0 0 0 0 rgba(34, 211, 238, 0)',
                  '0 0 0 4px rgba(34, 211, 238, 0.1)',
                  '0 0 0 0 rgba(34, 211, 238, 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className={`text-xs ${darkMode ? 'text-cyan-300' : 'text-cyan-600'} font-semibold`}>Hero Section</div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/20 to-purple-400/10"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            {/* Content Grid Wireframe with Individual Animations */}
            <div className="grid grid-cols-2 gap-2">
              {[...Array(4)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className={`h-6 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} relative overflow-hidden`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + i * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`absolute inset-0 ${i % 2 === 0 ? 'bg-gradient-to-r from-pink-400/20 to-purple-400/20' : 'bg-gradient-to-r from-green-400/20 to-blue-400/20'}`}
                    animate={{ 
                      opacity: [0, 0.6, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Additional Design Elements */}
            <div className="flex space-x-2 mt-3">
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i}
                  className={`h-2 rounded-full flex-1 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} relative overflow-hidden`}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.2, delay: 1.5 + i * 0.2 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: i * 0.7
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Additional Content Sections */}
            <div className="space-y-2 mt-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-4 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} relative overflow-hidden`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2 + i * 0.2 }}
                  style={{ width: `${100 - i * 15}%` }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
                    animate={{ 
                      opacity: [0, 0.4, 0],
                      x: ['-100%', '100%']
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: i * 1
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Design Tools with Animation */}
          <motion.div 
            className="absolute bottom-3 right-3 flex space-x-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            {[
              { color: 'bg-pink-400', delay: 0 },
              { color: 'bg-purple-400', delay: 0.2 },
              { color: 'bg-cyan-400', delay: 0.4 }
            ].map((tool, i) => (
              <motion.div 
                key={i}
                className={`w-3 h-3 rounded-full ${tool.color}`}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: tool.delay
                }}
              />
            ))}
          </motion.div>

          {/* Floating Design Elements */}
          <motion.div
            className="absolute top-3 left-3 w-3 h-3 rounded-full bg-yellow-400/50"
            animate={{ 
              y: [0, -8, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-6 right-6 w-2 h-2 rounded-full bg-green-400/60"
            animate={{ 
              y: [0, -6, 0],
              x: [0, 3, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>

        {/* Code View */}
        <motion.div
          className="absolute inset-0 p-2"
          animate={{
            opacity: isCodeView ? 1 : 0,
            x: isCodeView ? 0 : 20
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Code Snippets with Syntax Highlighting */}
          <div className={`text-[8px] font-mono space-y-0.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-tight h-[75%] overflow-hidden`}>
            {/* Extended React Contact Form Component */}
            <motion.div
              className="text-purple-400"
              animate={{ opacity: currentCodeLine >= 0 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-400">import</span> <span className="text-cyan-400">React</span>, <span className="text-cyan-400">{'{ useState, useEffect, useCallback }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'react'</span>;
            </motion.div>
            
            <motion.div
              className="text-purple-400"
              animate={{ opacity: currentCodeLine >= 1 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-400">import</span> <span className="text-cyan-400">{'{ motion, AnimatePresence }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'framer-motion'</span>;
            </motion.div>

            <motion.div
              className="text-purple-400"
              animate={{ opacity: currentCodeLine >= 2 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-400">import</span> <span className="text-cyan-400">{'{ User, Code, Palette }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'lucide-react'</span>;
            </motion.div>

            <div className="py-0.5"></div>

            <motion.div
              animate={{ opacity: currentCodeLine >= 3 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-purple-400">interface</span> <span className="text-yellow-400">PortfolioProps</span> {'{'} 
            </motion.div>

            <motion.div
              className="pl-2"
              animate={{ opacity: currentCodeLine >= 4 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-cyan-400">darkMode</span>: <span className="text-blue-400">boolean</span>;
            </motion.div>

            <motion.div
              animate={{ opacity: currentCodeLine >= 5 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              {'}'}
            </motion.div>

            <div className="py-0.5"></div>

            <motion.div
              animate={{ opacity: currentCodeLine >= 6 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-400">const</span> <span className="text-yellow-400">Portfolio</span>: <span className="text-purple-400">React.FC</span>&lt;<span className="text-yellow-400">PortfolioProps</span>&gt; = ({'{'} <span className="text-cyan-400">darkMode</span> {'}'}) =&gt; {'{'} 
            </motion.div>

            <motion.div
              className="pl-2"
              animate={{ opacity: currentCodeLine >= 7 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-400">const</span> [<span className="text-cyan-400">isLoading</span>, <span className="text-cyan-400">setLoading</span>] = <span className="text-yellow-400">useState</span>&lt;<span className="text-blue-400">boolean</span>&gt;(<span className="text-orange-400">false</span>);
            </motion.div>

            <motion.div
              className="pl-2"
              animate={{ opacity: currentCodeLine >= 8 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-400">const</span> [<span className="text-cyan-400">currentProject</span>, <span className="text-cyan-400">setCurrentProject</span>] = <span className="text-yellow-400">useState</span>&lt;<span className="text-blue-400">string</span> | <span className="text-blue-400">null</span>&gt;(<span className="text-orange-400">null</span>);
            </motion.div>

            <motion.div
              className="pl-2"
              animate={{ opacity: currentCodeLine >= 9 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-400">const</span> [<span className="text-cyan-400">skills</span>, <span className="text-cyan-400">setSkills</span>] = <span className="text-yellow-400">useState</span>&lt;<span className="text-blue-400">string</span>[]&gt;([]);
            </motion.div>

            <div className="py-0.5"></div>

            <motion.div
              className="pl-2"
              animate={{ opacity: currentCodeLine >= 10 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-yellow-400">useEffect</span>(() =&gt; {'{'}
            </motion.div>

            <motion.div
              className="pl-4"
              animate={{ opacity: currentCodeLine >= 11 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-400">const</span> <span className="text-cyan-400">loadSkills</span> = <span className="text-blue-400">async</span> () =&gt; {'{'}
            </motion.div>

            <motion.div
              className="pl-6"
              animate={{ opacity: currentCodeLine >= 12 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-cyan-400">setLoading</span>(<span className="text-orange-400">true</span>);
            </motion.div>

            <motion.div
              className="pl-6"
              animate={{ opacity: currentCodeLine >= 13 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-400">try</span> {'{'}
            </motion.div>

            <motion.div
              className="pl-8"
              animate={{ opacity: currentCodeLine >= 14 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-400">const</span> <span className="text-cyan-400">response</span> = <span className="text-blue-400">await</span> <span className="text-yellow-400">fetch</span>(<span className="text-green-400">'/api/skills'</span>);
            </motion.div>

            <motion.div
              className="pl-8"
              animate={{ opacity: currentCodeLine >= 15 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-400">const</span> <span className="text-cyan-400">data</span> = <span className="text-blue-400">await</span> <span className="text-cyan-400">response</span>.<span className="text-yellow-400">json</span>();
            </motion.div>

            <motion.div
              className="pl-8"
              animate={{ opacity: currentCodeLine >= 16 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-cyan-400">setSkills</span>(<span className="text-cyan-400">data</span>.<span className="text-cyan-400">skills</span>);
            </motion.div>

            <motion.div
              className="pl-6"
              animate={{ opacity: currentCodeLine >= 17 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              {'}'} <span className="text-blue-400">catch</span> (<span className="text-cyan-400">error</span>) {'{'}
            </motion.div>

            <motion.div
              className="pl-8"
              animate={{ opacity: currentCodeLine >= 18 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-cyan-400">console</span>.<span className="text-yellow-400">error</span>(<span className="text-green-400">'Failed to load skills:'</span>, <span className="text-cyan-400">error</span>);
            </motion.div>

            <motion.div
              className="pl-6"
              animate={{ opacity: currentCodeLine >= 19 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              {'}'} <span className="text-blue-400">finally</span> {'{'}
            </motion.div>

            <motion.div
              className="pl-8"
              animate={{ opacity: currentCodeLine >= 20 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-cyan-400">setLoading</span>(<span className="text-orange-400">false</span>);
            </motion.div>

            <motion.div
              className="pl-6"
              animate={{ opacity: currentCodeLine >= 21 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              {'}'}
            </motion.div>

            <motion.div
              className="pl-4"
              animate={{ opacity: currentCodeLine >= 22 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              {'}'};
            </motion.div>

            <motion.div
              className="pl-4"
              animate={{ opacity: currentCodeLine >= 23 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-yellow-400">loadSkills</span>();
            </motion.div>

            <motion.div
              className="pl-2"
              animate={{ opacity: currentCodeLine >= 24 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              {'}'}, []);
            </motion.div>

            <div className="py-0.5"></div>

            <motion.div
              className="pl-2 text-blue-400"
              animate={{ opacity: currentCodeLine >= 25 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              return (
            </motion.div>

            <motion.div
              className="pl-4"
              animate={{ opacity: currentCodeLine >= 26 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              &lt;<span className="text-red-400">AnimatePresence</span>&gt;
            </motion.div>

            <motion.div
              className="pl-6"
              animate={{ opacity: currentCodeLine >= 27 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              &lt;<span className="text-red-400">motion.div</span>
            </motion.div>

            <motion.div
              className="pl-8 text-purple-400"
              animate={{ opacity: currentCodeLine >= 28 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-cyan-400">initial</span>=<span className="text-green-400">{'{{ opacity: 0, y: 50 }}'}</span>
            </motion.div>

            <motion.div
              className="pl-8 text-purple-400"
              animate={{ opacity: currentCodeLine >= 29 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-cyan-400">animate</span>=<span className="text-green-400">{'{{ opacity: 1, y: 0 }}'}</span>
            </motion.div>

            <motion.div
              className="pl-8 text-purple-400"
              animate={{ opacity: currentCodeLine >= 30 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-cyan-400">exit</span>=<span className="text-green-400">{'{{ opacity: 0, y: -50 }}'}</span>
            </motion.div>

            <motion.div
              className="pl-8 text-purple-400"
              animate={{ opacity: currentCodeLine >= 31 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-cyan-400">transition</span>=<span className="text-green-400">{'{{ duration: 0.8, ease: "easeInOut" }}'}</span>
            </motion.div>

            <motion.div
              className="pl-8 text-purple-400"
              animate={{ opacity: currentCodeLine >= 32 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-cyan-400">className</span>=<span className="text-green-400">{`"hero-section ${darkMode ? 'dark' : 'light'}"`}</span>
            </motion.div>

            <motion.div
              className="pl-6"
              animate={{ opacity: currentCodeLine >= 33 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              &gt;
            </motion.div>

            <motion.div
              className="pl-8"
              animate={{ opacity: currentCodeLine >= 34 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              &lt;<span className="text-red-400">h1</span> <span className="text-cyan-400">className</span>=<span className="text-green-400">"text-4xl font-bold"</span>&gt;
            </motion.div>

            <motion.div
              className="pl-10"
              animate={{ opacity: currentCodeLine >= 35 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white">Full Stack Developer with a Designer's Eye</span>
            </motion.div>

            <motion.div
              className="pl-8"
              animate={{ opacity: currentCodeLine >= 36 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              &lt;/<span className="text-red-400">h1</span>&gt;
            </motion.div>

            <motion.div
              className="pl-8"
              animate={{ opacity: currentCodeLine >= 37 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              {'{'}<span className="text-cyan-400">isLoading</span> ? (
            </motion.div>

            <motion.div
              className="pl-10"
              animate={{ opacity: currentCodeLine >= 38 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              &lt;<span className="text-red-400">div</span>&gt;<span className="text-white">Loading...</span>&lt;/<span className="text-red-400">div</span>&gt;
            </motion.div>

            <motion.div
              className="pl-8"
              animate={{ opacity: currentCodeLine >= 39 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              ) : (
            </motion.div>

            <motion.div
              className="pl-10"
              animate={{ opacity: currentCodeLine >= 40 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              &lt;<span className="text-red-400">SkillsList</span> <span className="text-cyan-400">skills</span>={'{'}<span className="text-cyan-400">skills</span>{'}'} /&gt;
            </motion.div>

            <motion.div
              className="pl-8"
              animate={{ opacity: currentCodeLine >= 41 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              ){'}'}
            </motion.div>

            <motion.div
              className="pl-6"
              animate={{ opacity: currentCodeLine >= 42 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              &lt;/<span className="text-red-400">motion.div</span>&gt;
            </motion.div>

            <motion.div
              className="pl-4"
              animate={{ opacity: currentCodeLine >= 43 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              &lt;/<span className="text-red-400">AnimatePresence</span>&gt;
            </motion.div>

            <motion.div
              className="pl-2 text-blue-400"
              animate={{ opacity: currentCodeLine >= 44 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              );
            </motion.div>

            <motion.div
              animate={{ opacity: currentCodeLine >= 45 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              {'}'};
            </motion.div>

            <div className="py-0.5"></div>

            <motion.div
              animate={{ opacity: currentCodeLine >= 46 ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-400">export default</span> <span className="text-yellow-400">Portfolio</span>;
            </motion.div>
          </div>
          
          {/* Enhanced Code Cursor with Blinking Effect */}
          <motion.div
            className="absolute w-1 h-3 bg-cyan-400"
            animate={{
              opacity: [1, 0, 1],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              bottom: '20px',
              right: '20px'
            }}
          />

          {/* Code Completion Popup */}
          <motion.div
            className={`absolute bottom-8 right-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded px-2 py-1 shadow-lg`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isCodeView ? [0, 1, 1, 0] : 0,
              scale: isCodeView ? [0.8, 1, 1, 0.8] : 0.8
            }}
            transition={{ 
              duration: 4,
              times: [0, 0.2, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            <div className="text-[8px] space-y-1">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>useState</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>useEffect</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>motion.div</span>
              </div>
            </div>
          </motion.div>

          {/* Line Numbers */}
          <div className={`absolute left-2 top-2 text-[8px] ${darkMode ? 'text-gray-600' : 'text-gray-400'} font-mono leading-tight space-y-1`}>
            {Array.from({ length: 14 }, (_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  opacity: currentCodeLine >= i ? 1 : 0.3,
                  color: currentCodeLine === i ? '#22d3ee' : undefined
                }}
                transition={{ duration: 0.3 }}
              >
                {(i + 1).toString().padStart(2, '0')}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Toggle Button */}
      <motion.button
        className={`absolute bottom-2 left-2 w-8 h-8 rounded-full flex items-center justify-center text-base ${
          darkMode ? 'bg-gray-700 text-cyan-400' : 'bg-gray-100 text-cyan-600'
        } hover:scale-110 transition-transform shadow-lg border-2 ${
          darkMode ? 'border-gray-600' : 'border-gray-200'
        }`}
        onClick={() => setIsCodeView(!isCodeView)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isCodeView ? '🎨' : '⚡'}
      </motion.button>
    </div>
  );
};

// Skills Constellation Component
const SkillsConstellation: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skills = [
    { name: 'React', icon: '⚛️', color: '#61DAFB', x: 20, y: 30 },
    { name: 'TypeScript', icon: '📘', color: '#3178C6', x: 70, y: 20 },
    { name: 'Node.js', icon: '🟢', color: '#339933', x: 80, y: 60 },
    { name: 'MongoDB', icon: '🍃', color: '#47A248', x: 15, y: 70 },
    { name: 'CSS3', icon: '🎨', color: '#1572B6', x: 50, y: 50 },
    { name: 'JavaScript', icon: '⚡', color: '#F7DF1E', x: 45, y: 15 },
    { name: 'Git', icon: '🔀', color: '#F05032', x: 25, y: 55 },
    { name: 'API', icon: '🔗', color: '#FF6B6B', x: 65, y: 75 }
  ];

  return (
    <div className={`relative w-full h-full rounded-2xl overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    } border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      
      {/* Constellation Background */}
      <div className="absolute inset-0">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ transform: 'translate(1.5rem, 1.5rem)' }}>
          {skills.map((skill, i) => 
            skills.slice(i + 1).map((otherSkill, j) => (
              <motion.line
                key={`${i}-${j}`}
                x1={`${skill.x}%`}
                y1={`${skill.y}%`}
                x2={`${otherSkill.x}%`}
                y2={`${otherSkill.y}%`}
                stroke={darkMode ? '#6B7280' : '#9CA3AF'}
                strokeWidth="2"
                opacity={activeSkill === skill.name || activeSkill === otherSkill.name ? 0.9 : 0.6}
                transition={{ duration: 0.3 }}
              />
            ))
          )}
        </svg>

        {/* Skill Nodes */}
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -2, 0]
            }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.6,
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            onHoverStart={() => setActiveSkill(skill.name)}
            onHoverEnd={() => setActiveSkill(null)}
            whileHover={{ scale: 1.2 }}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-lg border-2 transition-all duration-300 ${
                activeSkill === skill.name 
                  ? 'shadow-lg transform scale-110' 
                  : 'shadow-md'
              }`}
              style={{
                backgroundColor: activeSkill === skill.name ? skill.color : (darkMode ? '#1F2937' : '#FFFFFF'),
                borderColor: skill.color,
                boxShadow: activeSkill === skill.name ? `0 0 20px ${skill.color}40` : undefined
              }}
            >
              <span className="text-base">{skill.icon}</span>
            </div>
            
            {/* Skill Label */}
            <motion.div
              className={`absolute top-10 left-1/2 transform -translate-x-1/2 text-xs font-medium px-2 py-1 rounded whitespace-nowrap ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              } border ${darkMode ? 'border-gray-600' : 'border-gray-200'} shadow-lg`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: activeSkill === skill.name ? 1 : 0,
                y: activeSkill === skill.name ? 0 : -10
              }}
              transition={{ duration: 0.2 }}
            >
              {skill.name}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Center Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`w-16 h-16 rounded-full ${
          darkMode ? 'bg-cyan-400/10' : 'bg-cyan-400/20'
        } blur-xl`}></div>
      </div>
    </div>
  );
};

// Professional Photo Component  
const ProfessionalPhoto: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <div className={`relative w-full h-full rounded-2xl overflow-hidden ${
      darkMode ? 'bg-gray-800' : 'bg-gray-100'
    } border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      
      {/* Professional Photo - Top 2/3rds */}
      <div className="relative w-full h-2/3 overflow-hidden">
        <img 
          src="/HenningBotha.jpg" 
          alt="Henning Botha - Full Stack Developer"
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        {/* Subtle overlay for consistency */}
        <div className={`absolute inset-0 ${
          darkMode ? 'bg-cyan-400/5' : 'bg-cyan-400/3'
        }`}></div>
      </div>

      {/* Bottom Section - 1/3rd */}
      <div className={`relative w-full h-1/3 flex flex-col justify-center items-center ${
        darkMode ? 'bg-gray-800' : 'bg-gray-100'
      } px-3 py-2`}>
        
        {/* Name and Title */}
        <div className="text-center mb-2">
          <h3 className={`text-sm font-semibold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>Henning Botha</h3>
          <p className={`text-xs ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Full Stack Developer</p>
        </div>

        {/* Tech Stack Banners */}
        <div className="flex flex-wrap gap-1 justify-center">
          {/* React Banner */}
          <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${
            darkMode ? 'bg-blue-900/40 border border-blue-500/30' : 'bg-blue-50 border border-blue-200'
          }`}>
            <span className="text-blue-400 text-sm">⚛️</span>
            <span className={`text-xs font-medium ${
              darkMode ? 'text-blue-300' : 'text-blue-700'
            }`}>React</span>
          </div>

          {/* JavaScript Banner */}
          <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${
            darkMode ? 'bg-yellow-900/40 border border-yellow-500/30' : 'bg-yellow-50 border border-yellow-200'
          }`}>
            <span className="text-yellow-400 text-sm">⚡</span>
            <span className={`text-xs font-medium ${
              darkMode ? 'text-yellow-300' : 'text-yellow-700'
            }`}>JavaScript</span>
          </div>

          {/* Node.js Banner */}
          <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${
            darkMode ? 'bg-green-900/40 border border-green-500/30' : 'bg-green-50 border border-green-200'
          }`}>
            <span className="text-green-400 text-sm">🟢</span>
            <span className={`text-xs font-medium ${
              darkMode ? 'text-green-300' : 'text-green-700'
            }`}>Node.js</span>
          </div>

          {/* TypeScript Banner */}
          <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${
            darkMode ? 'bg-blue-900/40 border border-blue-400/30' : 'bg-blue-50 border border-blue-300'
          }`}>
            <span className="text-blue-500 text-sm">📘</span>
            <span className={`text-xs font-medium ${
              darkMode ? 'text-blue-300' : 'text-blue-600'
            }`}>TypeScript</span>
          </div>

          {/* APIs Banner */}
          <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${
            darkMode ? 'bg-purple-900/40 border border-purple-500/30' : 'bg-purple-50 border border-purple-200'
          }`}>
            <span className="text-purple-400 text-sm">🔗</span>
            <span className={`text-xs font-medium ${
              darkMode ? 'text-purple-300' : 'text-purple-700'
            }`}>APIs</span>
          </div>

          {/* MongoDB Banner */}
          <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${
            darkMode ? 'bg-green-900/40 border border-green-600/30' : 'bg-green-50 border border-green-300'
          }`}>
            <span className="text-green-500 text-sm">🍃</span>
            <span className={`text-xs font-medium ${
              darkMode ? 'text-green-300' : 'text-green-600'
            }`}>MongoDB</span>
          </div>

          {/* Tailwind CSS Banner */}
          <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${
            darkMode ? 'bg-cyan-900/40 border border-cyan-500/30' : 'bg-cyan-50 border border-cyan-200'
          }`}>
            <span className="text-cyan-400 text-sm">🎨</span>
            <span className={`text-xs font-medium ${
              darkMode ? 'text-cyan-300' : 'text-cyan-700'
            }`}>Tailwind</span>
          </div>

          {/* Git Banner */}
          <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${
            darkMode ? 'bg-orange-900/40 border border-orange-500/30' : 'bg-orange-50 border border-orange-200'
          }`}>
            <span className="text-orange-400 text-sm">🔀</span>
            <span className={`text-xs font-medium ${
              darkMode ? 'text-orange-300' : 'text-orange-700'
            }`}>Git</span>
          </div>
        </div>
      </div>

      {/* Professional Badge */}
      <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
        darkMode ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30' : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
      }`}>
        <span className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
          Available
        </span>
      </div>
    </div>
  );
};

const About: React.FC<AboutProps> = ({ darkMode }) => {
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

  const handleRotate = (newTopIndex: number) => {
    // Optional: Add any callback logic here for when layers rotate
    console.log(`Rotated to layer: ${newTopIndex}`);
  };

  const layerComponents = [
    <DesignToCodeVisualization darkMode={darkMode} />,
    <SkillsConstellation darkMode={darkMode} />,
    <ProfessionalPhoto darkMode={darkMode} />
  ];

  return (
    <section 
      id="about" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Interactive Rotating Stack */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <RotatingStack
              onRotate={handleRotate}
              autoRotate={true}
              autoRotateInterval={5000}
              pauseOnHover={true}
              stackSpacing={3}
              className="focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 rounded-2xl"
            >
              {layerComponents}
            </RotatingStack>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2 
              variants={itemVariants}
              className={`text-4xl lg:text-5xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              About Me
            </motion.h2>
            
            <motion.div variants={itemVariants} className="prose prose-lg">
              <p className={`text-lg leading-relaxed mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                With a foundation in <span className="text-cyan-400 font-semibold">Visual Communication</span> and a passion for technology, 
                I build digital experiences that seamlessly blend form and function. My journey from design to development 
                has given me a unique perspective on creating user-centric solutions.
              </p>
              
              <p className={`text-lg leading-relaxed mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                My experience as an <span className="text-cyan-400 font-semibold">Employee Benefits Administrator</span> at ZBA 
                taught me invaluable skills in data analysis, stakeholder collaboration, and process improvement—competencies 
                that translate directly to modern software engineering. This background gives me a business-minded approach 
                to development, ensuring solutions are not just technically sound but strategically valuable.
              </p>
              
              <p className={`text-lg leading-relaxed mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Today, I specialize in <span className="text-cyan-400 font-semibold">full-stack development</span> where 
                my design thinking and analytical rigor converge to create complete, well-rounded web applications. 
                I'm passionate about building accessible, performant solutions that make a real impact.
              </p>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className={`text-2xl font-semibold flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <GraduationCap className="w-6 h-6 text-cyan-400" />
                Education
              </h3>
              
              <div className="space-y-4">
                <div className={`p-4 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-900 border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <h4 className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>Bachelor of Visual Communication</h4>
                  <p className="text-cyan-400">University of Pretoria & Open Window</p>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Foundation in design principles, user experience, and visual storytelling</p>
                </div>
              </div>

              <h3 className={`text-2xl font-semibold flex items-center gap-2 mt-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <Award className="w-6 h-6 text-cyan-400" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                <div className={`p-4 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-900 border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <h4 className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>Full Stack Development</h4>
                  <p className="text-cyan-400">100devs & HJBCodeForge</p>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Modern React, Node.js, and full-stack JavaScript development</p>
                </div>
                
                <div className={`p-4 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-900 border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <h4 className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>Advanced Programming Concepts</h4>
                  <p className="text-cyan-400">Codefinity</p>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Continuous learning in modern technologies and best practices</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
