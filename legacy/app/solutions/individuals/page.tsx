import BackgroundPattern from "@/components/shared/background-pattern"
import Link from "next/link"
import Image from "next/image"

export default function IndividualsSolutions() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern 
        color="#E4C1D5"
        backgroundColor="white"
        title="Parkiwatch: Your Wellness Partner"
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 leading-relaxed">
                Are you or your loved one living with Parkinson's Disease?
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>Do you want to self-help yourself or your beloved one ?</p>
                <p>Do you want to feel relieved, improve your quality of life and keep a log of how you experience the disease?</p>
              </div>
            </div>
            <div className="bg-[#E4C1D5]/5 rounded-xl p-8 border border-[#E4C1D5]/10">
              <p className="text-gray-700 leading-relaxed">
                Our wellness solution empowers neurocare with AI-enabled insights from everyday devices. You can use meaningful signs of quality of life and get personalized insights. 
                <span className="block mt-4 text-sm">
                  Note: Koios Care is not a medical device and does not diagnose or treat any disease.
                </span>
              </p>
            </div>
          </section>

          {/* Key Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#E4C1D5] mb-8">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E4C1D5]/10">
                <h3 className="text-xl font-semibold text-[#E4C1D5] mb-4">24/7 Control</h3>
                <p className="text-gray-700">Take control of your disease journey with continuous monitoring and personalized insights.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E4C1D5]/10">
                <h3 className="text-xl font-semibold text-[#E4C1D5] mb-4">No Burden</h3>
                <p className="text-gray-700">Just your smartphone and a smartwatch - simple, effective, and unobtrusive monitoring.</p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#E4C1D5] mb-8">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#E4C1D5]/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#E4C1D5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#E4C1D5] mb-2">Continuous and Passive Monitoring</h3>
                  <p className="text-gray-700">Over 24 clinically meaningful metrics automatically collected and shared with your doctor.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#E4C1D5]/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#E4C1D5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#E4C1D5] mb-2">Shareable Insights</h3>
                  <p className="text-gray-700">Option to share insights to optimize your care journey.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16 bg-[#E4C1D5]/5 rounded-2xl p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#E4C1D5] mb-4">Affordable Care</h2>
              <p className="text-2xl font-semibold text-gray-700 mb-2">€20/month</p>
              <p className="text-gray-600">As much as a Netflix subscription, but for your health</p>
            </div>
          </section>

          {/* Download Section */}
          <section className="mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#E4C1D5] mb-8">Get Started Today</h2>
              <div className="flex flex-col items-center gap-6">
                <Link 
                  href="https://play.google.com/store/apps/details?id=care.koios.parkiwatch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#E4C1D5] text-white rounded-full hover:bg-[#E4C1D5]/90 transition-colors text-lg font-semibold"
                >
                  GET THE PARKIWATCH APP
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <p className="text-gray-600">Take control of your journey today</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-[#E4C1D5]/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#E4C1D5] mb-4">Need Support?</h2>
            <p className="text-gray-700 mb-6">Our team is here to help you get started and answer any questions.</p>
            <Link 
              href="mailto:info@koios.care"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#E4C1D5] text-white rounded-full hover:bg-[#E4C1D5]/90 transition-colors"
            >
              Contact Support
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