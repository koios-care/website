'use client'

import BackgroundPattern from "@/components/shared/background-pattern"
import { motion } from "framer-motion"
import Link from "next/link"

export default function GenderEqualityPlan() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern 
        color="#E4C1D5"
        backgroundColor="white"
        title="Gender Equality Plan"
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#E4C1D5]/5 rounded-xl p-8 border border-[#E4C1D5]/10 mb-8"
            >
              <h1 className="text-3xl font-bold text-[#2A634D] mb-4">Gender Equality Plan</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Koios Care, we are committed to promoting gender equality and creating an inclusive workplace. 
                Our Gender Equality Plan outlines our strategies, commitments, and actions to ensure equal opportunities 
                for all employees regardless of gender.
              </p>
            </motion.div>
          </section>

          {/* PDF Viewer Section */}
          <section className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="bg-[#E4C1D5]/10 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-[#2A634D]">Gender Equality Plan Document</h2>
                  <Link
                    href="/gender.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#E4C1D5] text-white rounded-lg hover:bg-[#E4C1D5]/90 transition-colors text-sm font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </Link>
                </div>
              </div>
              <div className="w-full" style={{ height: '80vh', minHeight: '600px' }}>
                <iframe
                  src="/gender.pdf"
                  className="w-full h-full border-0"
                  title="Gender Equality Plan PDF"
                  style={{ minHeight: '600px' }}
                />
              </div>
            </motion.div>
          </section>

          {/* Additional Information */}
          <section className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-[#2A634D] mb-4">About Our Commitment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Gender Equality Plan reflects our ongoing commitment to diversity, equity, and inclusion. 
                We believe that a diverse and inclusive workplace drives innovation and excellence in everything we do.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For questions or feedback regarding our Gender Equality Plan, please contact us at{' '}
                <a href="mailto:info@koios.care" className="text-[#E4C1D5] hover:underline font-medium">
                  info@koios.care
                </a>
              </p>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  )
}

