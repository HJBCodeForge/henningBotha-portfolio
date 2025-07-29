import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import FuturisticBackground from './components/FuturisticBackground';

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  challenge: string;
  role: string;
  solution: string;
  liveDemo: string;
  github: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 'image-bg-remover',
    title: 'Background Remover API',
    description: 'AI-powered REST API for removing backgrounds from images with high precision.',
    shortDescription: 'FastAPI-based service for secure, efficient background removal using ONNX and rembg, with API key management and web demo.',
    technologies: ['FastAPI', 'Python', 'rembg', 'ONNX Runtime', 'SQLite', 'Pillow', 'Docker'],
    challenge: 'Enable developers and businesses to automate image background removal with high accuracy, security, and scalability, supporting multiple formats and easy integration.',
    role: 'Lead Backend Developer & API Architect',
    solution: 'Designed and implemented a robust REST API with token-based authentication, rate limiting, and usage tracking. Integrated ONNX-powered rembg for fast, accurate background removal. Provided a web demo, API documentation, and Docker deployment for seamless adoption.',
    liveDemo: 'web-production-faaf.up.railway.app',
    github: 'https://github.com/HJBCodeForge/image-bg-remover-api',
    image: '/BackGroundRemoverAPI.jpg'
  },
  {
    id: 'happy-notes',
    title: 'Happy Notes',
    description: 'Full-stack note-taking app with user profiles',
    shortDescription: 'Personal note-taking application with full CRUD functionality and user authentication.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    challenge: 'Users need a persistent, personal, and simple note-taking application with full CRUD functionality that maintains their data securely across sessions.',
    role: 'Full Stack Developer',
    solution: 'Developed a complete MERN stack application with JWT authentication, allowing users to create, read, update, and delete notes. Implemented secure user registration and login with password hashing and session management.',
    liveDemo: 'https://happy-notes-demo.vercel.app',
    github: 'https://github.com/henningbotha/happy-notes'
  },
  {
    id: 'stellarvista',
    title: 'StellarVista',
    description: 'NASA APOD viewer with dynamic content',
    shortDescription: 'React-based application showcasing NASA\'s Astronomy Picture of the Day with elegant UI.',
    technologies: ['React', 'NASA API', 'CSS3', 'JavaScript'],
    challenge: 'Showcase the ability to work with third-party APIs and create a visually engaging, single-page application that presents complex astronomical data in an accessible format.',
    role: 'Frontend Developer',
    solution: 'Created a responsive React application that fetches and displays NASA\'s APOD data with dynamic media cards and subtle micro-interactions. Implemented error handling, loading states, and optimized performance for various media types.',
    liveDemo: 'https://hjbcodeforge.github.io/StellarVista/',
    github: 'https://github.com/HJBCodeForge/StellarVista',
    image: '/StellarVistaDemo-min.jpg'
  },
  {
    id: 'de-antonio-barbershop',
    title: 'De Antonio Barbershop',
    description: 'Dynamic e-commerce and booking platform',
    shortDescription: 'Comprehensive digital storefront with e-commerce, appointment scheduling, and customer reviews.',
    technologies: ['JavaScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Calendar API'],
    challenge: 'A local barbershop needed a comprehensive digital storefront to increase customer engagement and sales while managing appointments and showcasing services.',
    role: 'Full Stack Developer',
    solution: 'Built a complete business solution with integrated e-commerce functionality, appointment booking system, customer review management, and payment processing. Resulted in 40% increase in online bookings and improved customer satisfaction.',
    liveDemo: 'https://hjbcodeforge.github.io/De_Antonio_Barbershop/',
    github: 'https://github.com/HJBCodeForge/De_Antonio_Barbershop',
    image: '/deAntonio.png'
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Futuristic Background */}
      <FuturisticBackground darkMode={darkMode} />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Projects projects={projects} onProjectClick={setSelectedProject} darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
        
        <Footer darkMode={darkMode} />
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
            darkMode={darkMode}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
