import { useState, useEffect, useRef, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingStackProps {
  children: ReactNode[];
  onRotate?: (newTopIndex: number) => void;
  autoRotate?: boolean;
  autoRotateInterval?: number;
  pauseOnHover?: boolean;
  className?: string;
  stackSpacing?: number; // Percentage spacing between layers
}

interface LayerState {
  index: number;
  zIndex: number;
  offsetX: number;
  offsetY: number;
  scale: number;
  opacity: number;
}

const RotatingStack = ({
  children,
  onRotate,
  autoRotate = false,
  autoRotateInterval = 4000,
  pauseOnHover = true,
  className = '',
  stackSpacing = 3
}: RotatingStackProps) => {
  const [currentTopIndex, setCurrentTopIndex] = useState(0);
  const [layers, setLayers] = useState<LayerState[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const autoRotateRef = useRef<number | null>(null);

  // Initialize layer states
  const initializeLayers = useCallback(() => {
    const newLayers: LayerState[] = children.map((_, index) => {
      const position = (index - currentTopIndex + children.length) % children.length;
      return {
        index,
        zIndex: children.length - position,
        offsetX: position * stackSpacing,
        offsetY: position * stackSpacing,
        scale: 1 - (position * 0.05), // Slight scale reduction for depth
        opacity: position === 0 ? 1 : 0.8 - (position * 0.2)
      };
    });
    setLayers(newLayers);
  }, [children, currentTopIndex, stackSpacing]);

  // Initialize layers on mount and when dependencies change
  useEffect(() => {
    initializeLayers();
  }, [initializeLayers]);

  // Auto-rotation logic
  useEffect(() => {
    if (autoRotate && !isHovered && !isTransitioning) {
      autoRotateRef.current = setInterval(() => {
        next();
      }, autoRotateInterval);
    } else {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
        autoRotateRef.current = null;
      }
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [autoRotate, isHovered, isTransitioning, autoRotateInterval]);

  // Navigation methods
  const next = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newTopIndex = (currentTopIndex + 1) % children.length;
    setCurrentTopIndex(newTopIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
      onRotate?.(newTopIndex);
    }, 300);
  }, [currentTopIndex, children.length, isTransitioning, onRotate]);

  const previous = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newTopIndex = (currentTopIndex - 1 + children.length) % children.length;
    setCurrentTopIndex(newTopIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
      onRotate?.(newTopIndex);
    }, 300);
  }, [currentTopIndex, children.length, isTransitioning, onRotate]);

  // Keyboard event handling
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        next();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        previous();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('keydown', handleKeyDown);
      return () => container.removeEventListener('keydown', handleKeyDown);
    }
  }, [next, previous]);

  // Touch event handling
  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (!touchStartRef.current) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;

    // Only respond to horizontal swipes that are longer than vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        previous(); // Swipe right = previous
      } else {
        next(); // Swipe left = next
      }
    }

    touchStartRef.current = null;
  };

  // Mouse event handling
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsHovered(false);
    }
  };

  // Expose methods via ref (if needed)
  useEffect(() => {
    if (containerRef.current) {
      (containerRef.current as any).next = next;
      (containerRef.current as any).previous = previous;
    }
  }, [next, previous]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0} // Make focusable for keyboard events
      style={{ outline: 'none', minHeight: '400px', paddingBottom: '40px' }}
    >
      {/* Stack Container - 80% of available space */}
      <div className="relative" style={{ width: '80%', aspectRatio: '1/1' }}>
        {/* Background Gradient Frame */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl transform rotate-3"></div>
        
        {/* Render layers */}
        <AnimatePresence>
          {layers.map((layer) => (
            <motion.div
              key={layer.index}
              className="absolute w-full h-full"
              style={{
                zIndex: layer.zIndex,
              }}
              initial={{
                left: `${layer.offsetX}%`,
                top: `${layer.offsetY}%`,
                scale: layer.scale,
                opacity: layer.opacity,
              }}
              animate={{
                left: `${layer.offsetX}%`,
                top: `${layer.offsetY}%`,
                scale: layer.scale,
                opacity: layer.opacity,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
            >
              {/* Lazy loading for performance - only render visible layers */}
              {layer.zIndex >= children.length - 2 && children[layer.index]}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Auto-rotation pause indicator - Removed */}
        {/* {autoRotate && isHovered && (
          <div className="absolute top-4 right-4 w-8 h-8 bg-black/20 rounded-full flex items-center justify-center z-50">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
          </div>
        )} */}
      </div>

      {/* Layer Indicators - Outside and below the stack */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 z-50" style={{ top: '100%', marginTop: '12px' }}>
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning && index !== currentTopIndex) {
                setIsTransitioning(true);
                setCurrentTopIndex(index);
                setTimeout(() => {
                  setIsTransitioning(false);
                  onRotate?.(index);
                }, 300);
              }
            }}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentTopIndex
                ? 'bg-cyan-400 scale-125 shadow-lg'
                : 'bg-gray-400 hover:bg-gray-300'
            }`}
            aria-label={`Go to layer ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Controls - Outside the stack */}
      <button
        onClick={previous}
        disabled={isTransitioning}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors disabled:opacity-50 z-50 font-bold"
        aria-label="Previous layer"
        style={{ fontSize: '24px', fontWeight: '900' }}
      >
        ‹
      </button>
      <button
        onClick={next}
        disabled={isTransitioning}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors disabled:opacity-50 z-50 font-bold"
        aria-label="Next layer"
        style={{ fontSize: '24px', fontWeight: '900' }}
      >
        ›
      </button>
    </div>
  );
};

export default RotatingStack;
export type { RotatingStackProps };
