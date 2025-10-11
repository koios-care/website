'use client'

import BackgroundPattern from "@/components/shared/background-pattern"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern 
        color="#2A634D"
        backgroundColor="white"
        title="About Koios Care"
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#2A634D]/5 rounded-xl p-8 border border-[#2A634D]/10"
            >
              <p className="text-xl text-gray-700 leading-relaxed">
                At Koios Care, we are pioneering the future of healthcare through unobtrusive digital biomarker technology. 
                Our journey began with a simple yet powerful vision: to transform the way we monitor and understand neurological 
                and chronic conditions, starting with Parkinson's Disease.
              </p>
            </motion.div>
          </section>

          {/* Mission Section */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#2A634D] mb-8">Our Mission</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2A634D]/10">
                  <p className="text-gray-700 leading-relaxed">
                    We are dedicated to empowering care with clinically meaningful insights from everyday devices, 
                    unobtrusively. Our mission extends beyond just data collection – we aim to transform this 
                    information into actionable insights that improve patient care and quality of life.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2A634D]/10">
                    <h3 className="text-xl font-semibold text-[#2A634D] mb-4">Meaningful Insights</h3>
                    <p className="text-gray-700">
                      Converting passive data collection into clinically relevant information that helps healthcare 
                      providers make informed decisions.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2A634D]/10">
                    <h3 className="text-xl font-semibold text-[#2A634D] mb-4">Patient-Centric</h3>
                    <p className="text-gray-700">
                      Ensuring our technology seamlessly integrates into patients' daily lives without adding burden 
                      or complexity.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Vision Section */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#2A634D] mb-8">Our Vision</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2A634D]/10">
                  <p className="text-gray-700 leading-relaxed">
                    We envision a future where unobtrusive sensing and clinically meaningful technology paves the way 
                    for improved quality care for people with neuro and chronic diseases. Our technology aims to bridge 
                    the gap between everyday life and clinical care.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2A634D]/10">
                    <h3 className="text-xl font-semibold text-[#2A634D] mb-4">Global Impact</h3>
                    <p className="text-gray-700">
                      Expanding our reach to help patients worldwide while maintaining the highest standards of care 
                      and data privacy.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2A634D]/10">
                    <h3 className="text-xl font-semibold text-[#2A634D] mb-4">Innovation Leader</h3>
                    <p className="text-gray-700">
                      Continuously advancing our technology to stay at the forefront of digital health innovation 
                      and patient care.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Our Path Section */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#2A634D] mb-8">Our Path Forward</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2A634D]/10">
                  <p className="text-gray-700 leading-relaxed">
                    Starting with Parkinson's Disease, we're building a comprehensive platform that will eventually 
                    support multiple neurological and chronic conditions. Our path forward is guided by three core principles:
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2A634D]/10">
                    <div className="bg-[#2A634D]/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-[#2A634D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#2A634D] mb-4">Scientific Excellence</h3>
                    <p className="text-gray-700">
                      Maintaining rigorous scientific standards in our research and development process.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2A634D]/10">
                    <div className="bg-[#2A634D]/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-[#2A634D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#2A634D] mb-4">Patient Focus</h3>
                    <p className="text-gray-700">
                      Keeping patients' needs and experiences at the center of our innovation.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2A634D]/10">
                    <div className="bg-[#2A634D]/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-[#2A634D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#2A634D] mb-4">Collaborative Growth</h3>
                    <p className="text-gray-700">
                      Working closely with healthcare providers, researchers, and industry partners.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  )
} 