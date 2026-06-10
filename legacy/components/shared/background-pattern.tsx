"use client"

import { motion } from "framer-motion"

interface BackgroundPatternProps {
  color: string
  backgroundColor: string
  title: string
}

function ConnectionPaths({ color }: { color: string }) {
  // Define the base unit size for the pattern
  const unit = 200;

  // Helper function to create L-shaped path
  const createLShape = (startX: number, startY: number, direction: 'tr' | 'br' | 'bl' | 'tl' = 'tr') => {
    const size = unit;
    switch(direction) {
      case 'tr': // top-right L
        return `M${startX} ${startY} L${startX} ${startY - size} L${startX + size} ${startY - size}`;
      case 'br': // bottom-right L
        return `M${startX} ${startY} L${startX} ${startY + size} L${startX + size} ${startY + size}`;
      case 'bl': // bottom-left L
        return `M${startX} ${startY} L${startX} ${startY + size} L${startX - size} ${startY + size}`;
      case 'tl': // top-left L
        return `M${startX} ${startY} L${startX} ${startY - size} L${startX - size} ${startY - size}`;
      default:
        return '';
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 1600 1000" fill="none" preserveAspectRatio="xMidYMid slice">
        <title>Connection Points</title>
        
        {/* L-shaped connections */}
        {[
          // Top section - spaced out
          { x: 400, y: 200, dir: 'tr', delay: 0 },
          { x: 800, y: 200, dir: 'tl', delay: 2 },
          { x: 1200, y: 200, dir: 'tr', delay: 4 },
          // Middle section (sparse to leave space for content)
          { x: 400, y: 500, dir: 'br', delay: 3 },
          { x: 1200, y: 500, dir: 'bl', delay: 5 },
          // Bottom section
          { x: 400, y: 800, dir: 'br', delay: 1 },
          { x: 800, y: 800, dir: 'bl', delay: 3.5 },
          { x: 1200, y: 800, dir: 'br', delay: 6 }
        ].map((shape, index) => (
          <motion.path
            key={`l-shape-${index}`}
            d={createLShape(shape.x, shape.y, shape.dir as any)}
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{
              duration: 4,
              delay: shape.delay,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 4
            }}
          />
        ))}

        {/* Connection points at corners */}
        {[
          // Top section dots - spaced out
          [400, 200, 0], [600, 200, 2], [800, 200, 4], [1000, 200, 1], [1200, 200, 3],
          // Middle sparse section dots
          [400, 500, 2.5], [1200, 500, 4.5],
          // Bottom section dots
          [400, 800, 1.5], [600, 800, 3.5], [800, 800, 5], [1000, 800, 2], [1200, 800, 4]
        ].map(([cx, cy, delay], index) => (
          <motion.circle
            key={`point-${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="4"
            fill={color}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{
              duration: 2,
              delay: delay,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function BackgroundPattern({ color, backgroundColor, title }: BackgroundPatternProps) {
  return (
    <div className="relative min-h-[50vh] w-full flex items-center justify-center overflow-hidden" style={{ backgroundColor }}>
      <div className="absolute inset-0">
        <ConnectionPaths color={color} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8"
            style={{ color }}
          >
            {title}
          </motion.h1>
        </motion.div>
      </div>
    </div>
  )
} 