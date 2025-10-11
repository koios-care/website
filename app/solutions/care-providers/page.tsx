import BackgroundPattern from "@/components/shared/background-pattern"
import Link from "next/link"
import Image from "next/image"

export default function CareProvidersSolutions() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern 
        color="#D25137"
        backgroundColor="white"
        title="Solutions for Care Providers"
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Key Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#D25137] mb-8">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#D25137]/10">
                <h3 className="text-xl font-semibold text-[#D25137] mb-4">Enhanced Patient Care</h3>
                <p className="text-gray-700">Support care delivery through continuous monitoring and timely insights.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#D25137]/10">
                <h3 className="text-xl font-semibold text-[#D25137] mb-4">Efficient Workflow</h3>
                <p className="text-gray-700">Streamline your clinical workflow with automated data collection and analysis.</p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#D25137] mb-8">Features</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#D25137]/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#D25137]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#D25137] mb-2">Patient Monitoring Dashboard</h3>
                  <p className="text-gray-700">Comprehensive view of patient status and progress with intuitive visualizations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#D25137]/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#D25137]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#D25137] mb-2">Clinical Insights</h3>
                  <p className="text-gray-700">AI-powered insights to support care planning and inform clinical discussions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-[#D25137]/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#D25137] mb-4">Ready to Enhance Your Practice?</h2>
            <p className="text-gray-700 mb-6">Learn how our solutions can help you provide better care for your patients.</p>
            <Link 
              href="mailto:info@koios.care"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#D25137] text-white rounded-full hover:bg-[#D25137]/90 transition-colors"
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