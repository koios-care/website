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
      className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-white w-full min-w-[250px] max-w-full overflow-hidden"
    >
      <h3 className="text-lg font-semibold truncate">{label}</h3>
      <div className="mt-2 text-2xl md:text-3xl font-bold">{value}</div>
      <div className="mt-1 text-sm opacity-80">{category}</div>
      {improvement && (
        <div className="mt-2 text-emerald-400 text-sm">{improvement}</div>
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
        opacity: [0, 1, 1, 0],
        x: x2,
        y: y2
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: "linear",
        times: [0, 0.2, 0.8, 1,1.5]
      }}
    />
  )
}

function NodeText({ text, x, y, delay }: { text: string; x: number; y: number; delay: number }) {
  return (
    <motion.text
      x={x}
      y={y}
      textAnchor="middle"
      className="text-base md:text-lg fill-current text-white/90 font-medium"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 4,
        delay: delay + 1.5,
        repeat: Infinity,
        repeatDelay: 4,
        times: [0, 0.1, 0.9, 1],
        ease: "easeInOut"
      }}
    >
      {text}
    </motion.text>
  )
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
      <motion.circle
        cx={x}
        cy={y}
        r={r}
        fill="#E4C1D5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{
          duration: 0.8,
          delay: delay * 0.5,
          ease: "easeOut",
        }}
      />
      <motion.text
        x={x}
        y={y + 50}
        textAnchor="middle"
        className="text-xs fill-current text-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay * 0.5 + 0.4 }}
      >
        {label}
      </motion.text>
      {description && (
        <NodeText 
          text={description} 
          x={x} 
          y={y + 80} 
          delay={delay * 0.5}
        />
      )}
    </>
  )
}

export default function AppShowcaseWithNodes() {
  // Define the nodes in the system with descriptions - hexagonal layout
  const nodes = [
    {
      label: "Patients",
      x: 800, // Center position
      y: 450,
      delay: 0,
      description: "Understand therapy, medication, and lifestyle impact.",
      isCenter: true
    },
    {
      label: "Pharma R&D",
      x: 800,
      y: 100, // Top
      delay: 1,
      description: "Optimize clinical trials with objective HrQoL measurement.",
    },
    {
      label: "Care Providers",
      x: 1400,
      y: 325, // Top right
      delay: 2,
      description: "Personalized health insights, remote monitoring, improved outcomes.",
    },
    {
      label: "Hospitals & Payers",
      x: 1100,
      y: 575, // Bottom right
      delay: 3,
      description: "Improve outcomes, lower costs with data-driven remote care.",
    },
    {
      label: "Passive Sensing and AI",
      x: 200,
      y: 325, // Top left
      delay: 4,
      description: "Clinically meaningful frictionless solution.",
    },
    {
      label: "Marketed Solutions",
      x: 800,
      y: 700, // Bottom
      delay: 5,
      description: "Optimize Drug+AI solutions towards patient needs.",
    },
  ];

  // Define meaningful connections - simplified for clearer visualization
  const connectionPairs = [
    // Passive Sensing connects to Patients
    [4, 0],
    // Patients connects to Care Providers
    [0, 2],
    // Patients connects to Pharma R&D
    [0, 1],
    // Patients connects to Hospitals & Payers
    [0, 3],
    // Patients connects to Marketed Solutions
    [0, 5],
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
      label: "Early meaningful changes detection", 
      value: "74% ", 
      category: "Early detection to capture changes",
      improvement: "260% improvement over PROs / 2.6 months over standard of care" 
    },
    { 
      label: "Commercial data compliance", 
      value: "96%", 
      category: "Percentage of patients' days covered",
      improvement: "24% increase completeness with v.s. without feedback" 
    },
    { 
      label: "Sensing unseen symptoms", 
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
    <section className="py-20 bg-warm-purple relative">
      {/* Metrics Bar - Fixed at the top */}
      <div className="absolute top-0 left-0 right-0 bg-warm-purple/80 backdrop-blur-md py-4 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-full overflow-x-hidden">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="container mx-auto px-4 mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI for Quality of Life assessment and adjustment
        </motion.h2>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative">
        {/* Nodes Animation Layer */}
        <div className="relative h-[800px]">
          <svg className="w-full h-full" viewBox="0 0 1600 1000" fill="none">
            <g>
              {connections.map((connection) => (
                <g key={connection.id}>
                  <motion.path
                    d={connection.path}
                    stroke="#E4C1D5"
                    strokeWidth="1"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{
                      duration: 1,
                      delay: connection.delay,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Multiple dots per connection using segmented paths */}
                  {[0, 0.33, 0.66].map((offset, i) => (
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
            {nodes.map((node, index) => (
              <ConnectionNode 
                key={index} 
                {...node} 
                // Make center node slightly larger
                r={node.isCenter ? 40 : 30}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  )
} 