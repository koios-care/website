'use client'

import { motion } from "framer-motion";

function BringingItTogether() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
      className="relative z-10 text-center mb-16"
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
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-xl leading-relaxed text-white/90">
            At Koios Care, we are pioneering the future of healthcare through unobtrusive digital biomarker technology.
            Our journey began with a simple yet powerful vision: to transform the way we monitor and understand
            neurological and chronic conditions, starting with Parkinson's Disease.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto mb-20">
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

        {/* Our Path Forward */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-serif text-[#E4C1D5] mb-6 text-center">Our Path Forward</h3>
          <p className="text-xl leading-relaxed text-white/90 text-center max-w-3xl mx-auto mb-12">
            Building a comprehensive platform that will eventually support multiple neurological and chronic conditions, guided by three core principles.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 rounded-xl p-6 border border-[#E4C1D5]/20 backdrop-blur-sm"
            >
              <div className="bg-[#E4C1D5]/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E4C1D5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif text-[#E4C1D5] mb-3">Scientific Excellence</h4>
              <p className="text-white/80 leading-relaxed">
                Maintaining rigorous scientific standards in our research and development process.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 rounded-xl p-6 border border-[#E4C1D5]/20 backdrop-blur-sm"
            >
              <div className="bg-[#E4C1D5]/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E4C1D5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif text-[#E4C1D5] mb-3">Patient Focus</h4>
              <p className="text-white/80 leading-relaxed">
                Keeping patients' needs and experiences at the center of our innovation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/5 rounded-xl p-6 border border-[#E4C1D5]/20 backdrop-blur-sm"
            >
              <div className="bg-[#E4C1D5]/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E4C1D5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif text-[#E4C1D5] mb-3">Collaborative Growth</h4>
              <p className="text-white/80 leading-relaxed">
                Working closely with healthcare providers, researchers, and industry partners.
              </p>
            </motion.div>
          </div>
        </motion.div>

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
