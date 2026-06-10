import BackgroundPattern from "@/components/shared/background-pattern"
import Link from "next/link"
import Image from "next/image"

export default function ResearchersSolutions() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern 
        color="#89CFF0"
        backgroundColor="white"
        title="Koios Care Research Platform"
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Section */}
          <section className="mb-16">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Are you active in research programs or clinical studies that aim to measure the impact on quality of life? Our passive digital biomarker platform for commercial devices helps maximize subject adherence while providing comprehensive data collection capabilities.
            </p>
            <div className="bg-[#89CFF0]/5 rounded-xl p-6 border border-[#89CFF0]/10">
              <p className="text-gray-700">
                We understand the challenges of rebuilding systems across different studies and research programmes. That's why we created the secure, validated, and compliant Koios Care Research Platform - enabling researchers to use commercial devices for passive data collection with access to over 30 clinically meaningful indicators.
              </p>
            </div>
          </section>

          {/* Key Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#89CFF0] mb-8">Platform Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#89CFF0]/10">
                <h3 className="text-xl font-semibold text-[#89CFF0] mb-4">Low-Cost, Low-Burden Solution</h3>
                <p className="text-gray-700">Off-the-shelf smartwatch integration and bring your own device options for maximum accessibility and usability.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#89CFF0]/10">
                <h3 className="text-xl font-semibold text-[#89CFF0] mb-4">High Adherence Rate</h3>
                <p className="text-gray-700">Passive monitoring and activity-based triggers ensure consistent data collection without user burden.</p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#89CFF0] mb-8">Platform Features</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#89CFF0]/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#89CFF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#89CFF0] mb-2">Comprehensive Data Collection</h3>
                  <p className="text-gray-700">Raw data collection from sensors and devices, with eCOAs and ePROs triggered based on subjects' activities.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#89CFF0]/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#89CFF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#89CFF0] mb-2">24/7 Passive Monitoring</h3>
                  <p className="text-gray-700">Continuous collection of unique passive indicators of quality of life through commercial devices.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Validated Indicators Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#89CFF0] mb-8">Validated Quality of Life Indicators</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Eating Behaviour",
                "Physical Activity",
                "Sleep Quality",
                "Neurocognition",
                "Location-based Socioeconomic",
                "Cognitive Function"
              ].map((indicator, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg border border-[#89CFF0]/10 text-center"
                >
                  <span className="text-gray-700">{indicator}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-[#89CFF0]/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#89CFF0] mb-4">Ready to Transform Your Research?</h2>
            <p className="text-gray-700 mb-6">Let's connect to learn how our platform can enhance your research programs and clinical studies.</p>
            <Link 
              href="mailto:info@koios.care"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#89CFF0] text-white rounded-full hover:bg-[#89CFF0]/90 transition-colors"
            >
              Let's Connect
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
} 