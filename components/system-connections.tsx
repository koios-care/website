"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface MetricProps {
  label: string;
  value: string;
  category: string;
  improvement?: string;
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
        times: [0, 0.2, 0.8, 1]
      }}
    />
  )
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
      className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-white"
    >
      <h3 className="text-lg font-semibold">{label}</h3>
      <div className="mt-2 text-3xl font-bold">{value}</div>
      <div className="mt-1 text-sm opacity-80">{category}</div>
      {improvement && (
        <div className="mt-2 text-emerald-400 text-sm">↑ {improvement}</div>
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
  // Define the nodes in the system
  const nodes = [
    { label: "Patients", x: 400, y: 300, delay: 0 },
    { label: "Researchers", x: 800, y: 200, delay: 0.2 },
    { label: "Care Providers", x: 1200, y: 300, delay: 0.4 },
    { label: "Patients", x: 800, y: 500, delay: 0.6 },
    { label: "Passive Sensing", x: 400, y: 700, delay: 0.8 },
    { label: "Quality of Life decisions", x: 1200, y: 700, delay: 1 },
  ];

  // Generate connection paths data
  const connections = nodes.flatMap((start, i) =>
    nodes.slice(i + 1).map((end, j) => {
      const pathD = `M${start.x} ${start.y} Q${(start.x + end.x) / 2} ${(start.y + end.y) / 2 - 50} ${end.x} ${end.y}`;
      return {
        id: `path-${i}-${j}`,
        start,
        end,
        path: pathD,
        delay: Math.max(start.delay, end.delay)
      };
    })
  );

  // Define the metrics to show
  const metrics: MetricProps[] = [
    { 
      label: "Response Time", 
      value: "57%", 
      category: "Faster",
      improvement: "32% improvement" 
    },
    { 
      label: "Patient Coverage", 
      value: "100%", 
      category: "Complete",
      improvement: "40% increase" 
    },
    { 
      label: "Quality Score", 
      value: "92", 
      category: "Out of 100",
      improvement: "28% better" 
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-warm-purple py-20">
      <div className="container mx-auto px-4">
        <AnimatedTitle />

        <div className="relative">
          {/* SVG Connection Diagram */}
          <svg className="w-full h-[800px]" viewBox="0 0 1600 1000" fill="none">
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
                      delay={connection.delay + 1 + offset} 
                    />
                  ))}
                </g>
              ))}
            </g>

            {/* Render nodes on top of paths */}
            {nodes.map((node, index) => (
              <ConnectionNode key={index} {...node} />
            ))}
          </svg>

          {/* Metrics Grid */}
          <div className="absolute top-4 right-4 space-y-4 w-64">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-white/80 max-w-2xl mx-auto">
            Our AI-powered platform seamlessly connects all stakeholders in the healthcare ecosystem,
            enabling faster response times, better treatment decisions, and improved patient outcomes.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 