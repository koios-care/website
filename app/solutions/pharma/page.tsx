import BackgroundPattern from "@/components/shared/background-pattern"
import Link from "next/link"
import Image from "next/image"

export default function PharmaSolutions() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern 
        color="#4A2B5F"
        backgroundColor="white"
        title="Solutions for Pharma"
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Key Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-warm-purple mb-8">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-purple/10">
                <h3 className="text-xl font-semibold text-warm-purple mb-4">Digital Endpoints</h3>
                <p className="text-gray-700">Capture real-world evidence and digital biomarkers through passive monitoring of daily activities.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-purple/10">
                <h3 className="text-xl font-semibold text-warm-purple mb-4">Clinical Trials</h3>
                <p className="text-gray-700">Enhance clinical trials with continuous patient monitoring and objective outcome measures.</p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-warm-purple mb-8">Features</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-warm-purple/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-warm-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-purple mb-2">Remote Patient Monitoring</h3>
                  <p className="text-gray-700">Continuous monitoring of patient symptoms and treatment responses in their natural environment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-warm-purple/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-warm-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-purple mb-2">Real-time Analytics</h3>
                  <p className="text-gray-700">Advanced analytics and AI-powered insights for better decision making.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-warm-purple/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-warm-purple mb-4">Ready to Transform Your Clinical Research?</h2>
            <p className="text-gray-700 mb-6">Get in touch to learn how our solutions can enhance your clinical trials and research.</p>
            <Link 
              href="mailto:info@koios.care"
              className="inline-flex items-center justify-center px-6 py-3 bg-warm-purple text-white rounded-full hover:bg-warm-purple/90 transition-colors"
            >
              Contact Us
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