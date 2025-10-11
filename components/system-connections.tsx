"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface MetricProps {
  label: string;
  value: string;
  category: string;
  improvement?: string;
}

type ControlPoints = {
  cp1x: number;
  cp1y: number;
  cp2x: number;
  cp2y: number;
} | {
  x: number;
  y: number;
};

function MovingDot({ 
  x1, 
  y1, 
  x2, 
  y2, 
  controlPoints,
  isDoubleCurve,
  delay 
}: { 
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  controlPoints: ControlPoints;
  isDoubleCurve: boolean;
  delay: number;
}) {
  const pathString = isDoubleCurve 
    ? `M${x1} ${y1} C${(controlPoints as any).cp1x} ${(controlPoints as any).cp1y} ${(controlPoints as any).cp2x} ${(controlPoints as any).cp2y} ${x2} ${y2}`
    : `M${x1} ${y1} Q${(controlPoints as any).x} ${(controlPoints as any).y} ${x2} ${y2}`;

  return (
    <motion.circle
      r="3"
      fill="#E4C1D5"
      style={{
        offsetPath: `path("${pathString}")`,
      }}
      initial={{ offsetDistance: 0 }}
      animate={{ 
        offsetDistance: 1,
        offsetRotate: isDoubleCurve ? "0deg" : "auto"
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: "linear"
      }}
    />
  );
}

function ConnectionNode({ 
  label, 
  x, 
  y, 
  delay 
}: { 
  label: string; 
  x: number; 
  y: number; 
  delay: number 
}) {
  return (
    <>
      <motion.circle
        cx={x}
        cy={y}
        r="30"
        fill="#E4C1D5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{
          duration: 0.5,
          delay,
          ease: "easeOut",
        }}
      />
      <motion.text
        x={x}
        y={y + 50}
        textAnchor="middle"
        className="text-sm font-medium fill-current text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
      >
        {label}
      </motion.text>
    </>
  )
}

function MetricCard({ label, value, category, improvement }: MetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white"
    >
      <h3 className="heading-style text-xl font-bold mb-4">{label}</h3>
      <div className="text-4xl font-bold mb-3 heading-style">{value}</div>
      <div className="text-sm text-white/80 body-style leading-snug mb-3">{category}</div>
      {improvement && (
        <div className="text-[#4ADE80] text-sm body-style leading-snug">{improvement}</div>
      )}
    </motion.div>
  )
}

function AnimatedTitle() {
  const title = "Koios Care System Connections";
  const words = title.split(" ");
  
  return (
    <div className="text-4xl font-bold text-center text-white mb-16">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.2,
            ease: "easeOut"
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export default function SystemConnections() {
  // Define the nodes in the system with adjusted positions and descriptions
  const nodes = [
    { 
      label: "Drug+AI in Pharma R&D",
      description: "Optimize clinical trials with objective HrQoL measurement.",
      x: 800, 
      y: 150, 
      delay: 0 
    },
    { 
      label: "AI with Passive Sensing",
      description: "Clinically meaningful frictionless solution.",
      x: 300, 
      y: 350, 
      delay: 0.2 
    },
    { 
      label: "Care Providers",
      description: "Remote managment, improved outcomes.",
      x: 1300, 
      y: 350, 
      delay: 0.4 
    },
    { 
      label: "Patients",
      description: "Understand therapy, medication, and lifestyle impact.",
      x: 800, 
      y: 500, 
      delay: 0.6 
    },
    { 
      label: "Marketed Drug Products",
      description: "Optimize Drug+AI solutions towards patient needs.",
      x: 300, 
      y: 650, 
      delay: 0.8 
    },
    { 
      label: "Hospitals - Payers",
      description: "Improve outcomes, lower costs with data-driven remote care.",
      x: 1300, 
      y: 650, 
      delay: 1 
    },
  ];

  // Update the connection type
  type Connection = {
    id: string;
    start: typeof nodes[0];
    end: typeof nodes[0];
    path: string;
    isDoubleCurve: boolean;
    controlPoints: ControlPoints;
    delay: number;
  };

  // Update the connections map to use the new types
  const connections: Connection[] = nodes.flatMap((start, i) =>
    nodes.slice(i + 1).map((end, j) => {
      const midX = (start.x + end.x) / 2;
      const midY = (start.y + end.y) / 2;
      
      // Calculate the distance between points
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Adjust curve height based on distance and relative positions
      const curveHeight = distance * 0.5;
      
      // Determine if the connection is diagonal
      const isDiagonal = Math.abs(dx) > 100 && Math.abs(dy) > 100;
      
      // For diagonal connections, create an S-curve using two control points
      if (isDiagonal) {
        const cp1x = start.x + dx * 0.2;
        const cp1y = start.y + (dy < 0 ? -curveHeight : curveHeight);
        const cp2x = end.x - dx * 0.2;
        const cp2y = end.y + (dy < 0 ? curveHeight : -curveHeight);
        const pathD = `M${start.x} ${start.y} C${cp1x} ${cp1y} ${cp2x} ${cp2y} ${end.x} ${end.y}`;
        return {
          id: `path-${i}-${j}`,
          start,
          end,
          path: pathD,
          isDoubleCurve: true,
          controlPoints: { cp1x, cp1y, cp2x, cp2y },
          delay: Math.max(start.delay, end.delay)
        };
      }
      
      // For horizontal or vertical connections, use a single quadratic curve
      const controlY = midY + (dy < 0 ? -curveHeight : curveHeight);
      const pathD = `M${start.x} ${start.y} Q${midX} ${controlY} ${end.x} ${end.y}`;
      return {
        id: `path-${i}-${j}`,
        start,
        end,
        path: pathD,
        isDoubleCurve: false,
        controlPoints: { x: midX, y: controlY },
        delay: Math.max(start.delay, end.delay)
      };
    })
  );

  // Define the metrics to show
  const metrics: MetricProps[] = [
    { 
      label: "Detection of changes", 
      value: "74%", 
      category: "Early detection to capture clinically meaningful changes",
      improvement: "280% improvement over research PROs / 2.6 months over standard of care" 
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
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-warm-purple py-20">
      <div className="container mx-auto px-4">
        <AnimatedTitle />

        <div className="relative">
          <div className="relative">
            {/* Background layer for connections and dots */}
            <svg className="absolute inset-0 w-full h-[800px]" viewBox="0 0 1600 1000" fill="none" style={{ zIndex: 1 }}>
            {/* Connection paths */}
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
                  {/* Multiple dots per connection */}
                  {[0, 0.33, 0.66].map((offset, i) => (
                    <MovingDot 
                      key={`${connection.id}-dot-${i}`}
                      x1={connection.start.x}
                      y1={connection.start.y}
                      x2={connection.end.x}
                      y2={connection.end.y}
                        controlPoints={connection.isDoubleCurve ? connection.controlPoints : connection.controlPoints}
                        isDoubleCurve={connection.isDoubleCurve}
                      delay={connection.delay + 1 + offset} 
                    />
                  ))}
                </g>
              ))}
            </g>
            </svg>

            {/* Foreground layer for nodes and text */}
            <svg className="relative w-full h-[800px] mb-32" viewBox="0 0 1600 1000" fill="none" style={{ zIndex: 2 }}>
            {/* Render nodes on top of paths */}
            {nodes.map((node, index) => (
                <g key={index} className="relative">
                  {/* Node circle */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="60"
                    fill="#E4C1D5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      duration: 0.5,
                      delay: node.delay,
                      ease: "easeOut",
                    }}
                  />
                  
                  {/* Node label (inside circle) */}
                  <motion.foreignObject
                    x={node.x - 50}
                    y={node.y - 20}
                    width="100"
                    height="40"
                    style={{ overflow: 'visible' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: node.delay + 0.2 }}
                  >
                    <div className="text-center">
                      <span className="text-sm font-medium text-warm-purple">
                        {node.label}
                      </span>
                    </div>
                  </motion.foreignObject>

                  {/* Description tooltip (appears on hover) */}
                  <motion.foreignObject
                    x={node.x + 70}
                    y={node.y - 30}
                    width="200"
                    height="60"
                    style={{ overflow: 'visible', pointerEvents: 'none' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-white/90 p-2 rounded-lg shadow-lg transform -translate-y-1/2">
                      <p className="text-xs text-warm-purple leading-tight">
                        {node.description}
                      </p>
                    </div>
                  </motion.foreignObject>
                </g>
            ))}
          </svg>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-32" style={{ zIndex: 3, position: 'relative' }}>
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          <motion.div 
            className="text-center mt-16 relative"
            style={{ zIndex: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="text-white/80 max-w-2xl mx-auto">
              Our AI-powered platform seamlessly connects all stakeholders in the healthcare ecosystem,
              enabling better outcomes through real-time insights and collaboration.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 