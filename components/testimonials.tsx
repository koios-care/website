'use client'

import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="py-20" style={{ backgroundColor: '#E4C1D5' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl font-bold mb-4" 
            style={{ color: '#D25137' }}
          >
            What Our Patients Are Saying
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-8 bg-white/90 rounded-2xl shadow-lg"
          >
            <div className="absolute top-4 left-4 text-6xl opacity-20" style={{ color: '#D25137' }}>
              "
            </div>
            <blockquote className="relative z-10 text-lg leading-relaxed pt-4">
              Koios Care insights are helping me to clearly communicate how disease and treatment is affecting my life with my doctor.
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative p-8 bg-white/90 rounded-2xl shadow-lg"
          >
            <div className="absolute top-4 left-4 text-6xl opacity-20" style={{ color: '#D25137' }}>
              "
            </div>
            <blockquote className="relative z-10 text-lg leading-relaxed pt-4">
              In my current scheme - sometimes I forgot that I have Parkinson's.
            </blockquote>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p 
            className="text-sm font-medium" 
            style={{ color: '#5B112F' }}
          >
            Collaboration with 5 hospitals aiming to prove health outcomes and economic utility.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 