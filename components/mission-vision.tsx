'use client'

import { motion } from "framer-motion";

function BringingItTogether() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
      className="relative z-10 text-center mb-24"
    >
      <h2 className="font-serif text-6xl md:text-7xl lg:text-4xl text-[#E4C1D5] leading-tight tracking-wide">
        Bringing it all together
      </h2>
    </motion.div>
  )
}

export function MissionVision() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#2A634D]">
      <BringingItTogether />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h3 className="text-3xl font-serif text-[#E4C1D5] mb-6">Mission</h3>
            <p className="text-xl leading-relaxed text-white/90">
              Empowering care with clinically meaningful insights from everyday devices, unobtrusively. Starting with Parkinson's Disease.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <h3 className="text-3xl font-serif text-[#E4C1D5] mb-6">Vision</h3>
            <p className="text-xl leading-relaxed text-white/90">
              Unobtrusive sensing and clinically meaningful technology will pave the way for improved quality care for people with neuro and chronic diseases.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-24 max-w-3xl mx-auto"
        >
          <p className="text-xl leading-relaxed text-white/90">
            At Koios, we want to map out those physical, mental and social connections.
            We want to translate this story in a graphic element with connection points.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 