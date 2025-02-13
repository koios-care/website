"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface MetricProps {
  label: string;
  value: string;
  category: string;
  improvement?: string;
}

function MetricCard({ label, value, category, improvement }: MetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-5 text-white h-full flex flex-col"
    >
      <h3 className="text-base sm:text-lg font-semibold truncate">{label}</h3>
      <div className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold">{value}</div>
      <div className="mt-1 text-xs sm:text-sm opacity-80 flex-grow">{category}</div>
      {improvement && (
        <div className="mt-2 text-emerald-400 text-xs sm:text-sm">{improvement}</div>
      )}
    </motion.div>
  )
}

function MovingDot({ 
  x1, 
  y1, 
  x2, 
  y2, 
  delay 
}: { 
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}) {
  return (
    <motion.circle
      r="3"
      fill="#E4C1D5"
      initial={{ 
        opacity: 0,
        x: x1,
        y: y1
      }}
      animate={{ 
        opacity: [0, 1, 0],
        x: x2,
        y: y2
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "linear",
        times: [0, 0.5, 1]
      }}
      style={{
        willChange: 'transform, opacity'
      }}
    />
  )
}

function NodeText({ text, x, y, delay }: { text: string; x: number; y: number; delay: number }) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 6,
        delay: delay + 3,
        repeat: Infinity,
        repeatDelay: 8,
        times: [0, 0.1, 0.9, 1],
        ease: "easeInOut"
      }}
    >
      <rect
        x={x - 300}
        y={y - 24}
        width="600"
        height="48"
        rx="8"
        fill="white"
        opacity="0.1"
        className="backdrop-blur-lg"
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-base md:text-lg fill-current text-white font-medium font-inter"
      >
        {text}
      </text>
    </motion.g>
  );
}

function ConnectionNode({ 
  label, 
  x, 
  y, 
  delay,
  description,
  r
}: { 
  label: string; 
  x: number; 
  y: number; 
  delay: number;
  description?: string;
  r: number;
}) {
  return (
    <>
      <motion.text
        x={x}
        y={y - r - 20}
        textAnchor="middle"
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold fill-current text-white font-inter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay * 0.5 + 0.4 }}
      >
        {label}
      </motion.text>
      <motion.circle
        cx={x}
        cy={y}
        r={r}
        fill="#E4C1D5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: delay * 0.5,
          ease: "easeOut",
        }}
      />
      {description && (
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: delay * 0.5 + 0.6
          }}
        >
          <rect
            x={x - 250}
            y={y + r + 15}
            width="500"
            height="70"
            rx="8"
            fill="white"
            opacity="0.15"
            className="backdrop-blur-lg"
          />
          <text
            x={x}
            y={y + r + 45}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-sm sm:text-base md:text-lg lg:text-xl fill-current text-white/90 font-medium font-inter"
          >
            {description}
          </text>
        </motion.g>
      )}
    </>
  )
}

// Add this new component before the AppShowcaseWithNodes component
function HospitalCarousel() {
  const hospitals = [
    { name: "AZ Delta", image: "/azdelta.png" },
    { name: "AZ Groeninge", image: "/azgron.png" },
    { name: "AZ Oostende", image: "/azostend.png" },
    { name: "CHU Liège", image: "/chu liege.png" },
    { name: "CHU Charleroi", image: "/chu-charleroi.png" },
    { name: "Greenhouse", image: "/greenh.png" }
  ];

  return (
    <div className="w-full px-4 md:container md:mx-auto md:px-6 lg:px-8 mt-16">
      <motion.h3 
        className="text-2xl md:text-3xl font-bold text-center text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Hospital Partners
      </motion.h3>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {hospitals.map((hospital, index) => (
          <motion.div
            key={hospital.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-40 md:w-48 h-24 relative bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center justify-center"
          >
            <Image
              src={hospital.image}
              alt={hospital.name}
              width={160}
              height={80}
              className="object-contain max-h-16"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function AppShowcaseWithNodes() {
  // Define the nodes in the system with descriptions - hexagonal layout
  const nodes = [
    {
      label: "Patients",
      x: 1200,
      y: 675,
      delay: 0,
      description: "Understand therapy, medication, and lifestyle impact.",
      isCenter: true
    },
    {
      label: "Pharma R&D",
      x: 1200,
      y: 225,
      delay: 1,
      description: "Optimize clinical trials with objective HrQoL measurement.",
    },
    {
      label: "Care Providers",
      x: 1800,
      y: 450,
      delay: 2,
      description: "Remote patient managment, improved outcomes.",
    },
    {
      label: "Hospitals - Payers",
      x: 1800,
      y: 900,
      delay: 3,
      description: "Improve outcomes at lower costs.",
    },
    {
      label: "AI with Passive Sensing",
      x: 600,
      y: 450,
      delay: 4,
      description: "Clinically meaningful frictionless solution.",
    },
    {
      label: "Marketed Drug Products",
      x: 600,
      y: 900,
      delay: 5,
      description: "Deliver Drug+AI solutions personalized in patient needs.",
    },
  ];

  // Define meaningful connections - simplified for clearer visualization
  const connectionPairs = [
    // Passive Sensing connects to Patients
    [4, 0],
    // Patients connects to Care Providers
    [0, 2],
    [1, 3],
    [1, 2],
    [1,4],
    // Patients connects to Pharma R&D
    [0, 1],
    // Patients connects to Hospitals & Payers
    [0, 3],
    // Patients connects to Marketed Solutions
    [0, 5],
    [4, 5],
    // Care Providers connects to Hospitals & Payers
    [2, 3],
    // Pharma R&D connects to Marketed Solutions
    [1, 5],
  ];

  // Generate rectangular connection paths data
  const connections = connectionPairs.map(([startIdx, endIdx]) => {
    const start = nodes[startIdx];
    const end = nodes[endIdx];
    
    // If connecting to center node, make dots flow towards it
    // If connecting from center node, make dots flow outward
    const isToCenter = endIdx === 0;
    const isFromCenter = startIdx === 0;
    
    // Calculate midpoint for the horizontal segment
    const midY = (start.y + end.y) / 2;
    
    // Create a path with right angles
    const pathD = `M${start.x} ${start.y} L${start.x} ${midY} L${end.x} ${midY} L${end.x} ${end.y}`;
    
    return {
      id: `path-${startIdx}-${endIdx}`,
      start,
      end,
      path: pathD,
      points: [
        { x: start.x, y: start.y },
        { x: start.x, y: midY },
        { x: end.x, y: midY },
        { x: end.x, y: end.y }
      ],
      delay: Math.max(start.delay, end.delay),
      isToCenter,
      isFromCenter
    };
  });

  // Modified MovingDot component for segmented paths with directional flow
  function SegmentedMovingDot({ 
    points,
    delay,
    offset = 0,
    isToCenter,
    isFromCenter
  }: { 
    points: Array<{x: number, y: number}>;
    delay: number;
    offset?: number;
    isToCenter?: boolean;
    isFromCenter?: boolean;
  }) {
    // If flowing to center, use the points as is
    // If flowing from center, reverse the points
    const flowPoints = isFromCenter ? [...points].reverse() : points;
    
    return (
      <>
        {flowPoints.slice(0, -1).map((start, index) => {
          const end = flowPoints[index + 1];
          return (
            <MovingDot
              key={index}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              delay={delay + offset + (index * 0.5)}
            />
          );
        })}
      </>
    );
  }

  // Define the metrics to show
  const metrics: MetricProps[] = [
    { 
      label: "Early detection", 
      value: "74% ", 
      category: "Early detection to capture clinically meaningful changes",
      improvement: "260% improvement over research PROs / 2.6 months over standard of care" 
    },
    { 
      label: "Easy to use", 
      value: "96%", 
      category: "Percentage of patients' days covered",
      improvement: "24% increase completeness with v.s. without feedback" 
    },
    { 
      label: "Impact in symptoms", 
      value: "57%", 
      category: "HrQol gain by connecting data, science and AI",
      improvement: "avg. 1.3 h/day" 
    },
    { 
      label: "Digital Measures", 
      value: "40+", 
      category: "Concepts of neuro, brain and body health",    
      improvement: "Going beyond state of the art" 
    },
  ];

  return (
    <section className="py-20 bg-warm-purple relative w-full">
      {/* Metrics Bar - Fixed at the top */}
      <div className="absolute top-0 left-0 right-0 w-full bg-warm-purple/80 backdrop-blur-md py-4 z-20">
        <div className="w-full px-4 md:container md:mx-auto md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="w-full px-4 md:container md:mx-auto md:px-6 lg:px-8 mb-8 md:mb-16 pt-24 md:pt-16">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI for Quality of Life assessment and adjustment
        </motion.h2>
      </div>

      {/* Main Content */}
      <div className="w-full relative">
        {/* Nodes Animation Layer */}
        <div className="relative h-[600px] sm:h-[800px] md:h-[1000px] overflow-hidden">
          <svg 
            className="w-full h-full origin-center transform scale-100 sm:scale-90 md:scale-95 lg:scale-100 sm:-translate-y-[10%] md:-translate-y-[5%] lg:translate-y-0" 
            viewBox="0 0 2400 1500" 
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <g className="transform origin-center">
              {connections.map((connection) => (
                <g key={connection.id}>
                  <motion.path
                    d={connection.path}
                    stroke="#E4C1D5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="8 8"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.15 }}
                    transition={{
                      duration: 3,
                      delay: connection.delay * 0.2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 1.5
                    }}
                    style={{
                      willChange: 'transform, opacity'
                    }}
                  />
                  {/* Multiple dots per connection using segmented paths */}
                  {[0, 0.2, 0.4, 0.6, 0.8].map((offset, i) => (
                    <SegmentedMovingDot
                      key={`${connection.id}-dot-${i}`}
                      points={connection.points}
                      delay={connection.delay + 1}
                      offset={offset}
                      isToCenter={connection.isToCenter}
                      isFromCenter={connection.isFromCenter}
                    />
                  ))}
                </g>
              ))}
            </g>

            {/* Render nodes on top of paths */}
            <g className="transform origin-center">
              {nodes.map((node, index) => (
                <ConnectionNode 
                  key={index} 
                  {...node} 
                  // Make center node slightly larger
                  r={node.isCenter ? 70 : 55} // Increased sizes
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Add the hospital carousel */}
        <HospitalCarousel />
      </div>
    </section>
  )
} 