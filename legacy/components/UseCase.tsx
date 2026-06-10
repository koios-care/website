'use client'

import { motion } from 'framer-motion'

interface UseCaseProps {
  title: string
  challenge: string
  solution: string
  results: string[]
}

export default function UseCase({ title, challenge, solution, results }: UseCaseProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-warm-purple/10 hover:border-warm-purple/20 transition-all"
    >
      <h2 className="text-2xl font-bold text-warm-purple mb-6">{title}</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-warm-purple mb-2">Challenge</h3>
          <p className="text-gray-700">{challenge}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-warm-purple mb-2">Solution</h3>
          <p className="text-gray-700">{solution}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-warm-purple mb-2">Results</h3>
          <ul className="list-disc list-inside space-y-2">
            {results.map((result, index) => (
              <li key={index} className="text-gray-700">{result}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 