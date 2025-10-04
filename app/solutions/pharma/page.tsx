import BackgroundPattern from "@/components/shared/background-pattern"
import Link from "next/link"
import Image from "next/image"
import UseCase from "@/components/UseCase"

export default function PharmaSolutions() {
  const pharmaUseCases = [
    {
      title: "Decentralized Digital Endpoint of Quality of Life in Neurology",
      challenge: "Need to develop objective measures of disease progression for a neurodegenerative condition in their clinical trials.",
      solution: "We implemented our digital measure platform to capture continuous movement data and cognitive function metrics through passive smartphone and wearablemonitoring.",
      results: [
        "Successfully validated novel digital endpoints of Quality of Life and Disease Progression",
        "Potential to reduce costs by 40% and patient-outcomes in HrQoL by 57%",
        "Patient compliance to 77%",
        "Generated rich real-world evidence data"
      ],
    },
    {
      title: "QoL insights for improving medication in Parkinson's",
      challenge: "Need to close the loop between patients' visits using objective measures during care",
      solution: "We provided the digital measures, onboarding and analytics to patients to better understand their own health",
      results: [
        "Improved patient-caregiver communication",
        "Observed reduced time-with symptoms by clincians' drug-tuning",
        "L-Dopa 96% correlation with the digital measure of digital motor function",
        "Upcoming deployment in 5 hospitals"
      ],
    },
    {
      title: "Daytime Sleepiness",
      challenge: " improve the screening pathway of narcolepsy from obstructive sleep apnea (which is 60% misdiagnosed) using digital measures of daytime-movement and circadian response through heart-rate physiology.",
      solution: "We implemented our digital measure to relate daytime sleepiness and meal intake.",
      results: [
        "0.85 AUC for the detection of daytime sleepiness",
        "Cost-benefit analysis shows 8x ROI on asset",
        "0.83 average fix-rater ICC",
      ],
    },
    {
      title: "Remote Patient Monitoring in IBD",
      challenge: "Sudden inflammation often leads to poor patient adherence and poor outcomes. We implemented a novel physiology and ADL-baseed digital biomarker platform to capture disease activity and patient engagement data.",
      solution: "Our platform provided continuous remote monitoring of symptoms and medication adherence, with real-time alerts for adverse events.",
      results: [
        ">6 digital biomarkers with high test-retest reliability",
        "Improved early detection of adverse events through passive sensing",
        "Enhanced patient engagement scores"
      ],
    },
    {
      title: "Decentralized Clinical Trial Implementation",
      challenge: "A pharmaceutical company needed to continue their clinical trials during the pandemic while ensuring patient safety and data quality.",
      solution: "We deployed our decentralized trial platform with remote monitoring capabilities and integrated ePRO collection.",
      results: [
        "Successfully transitioned 80% of trial activities to remote",
        "Maintained trial timeline without delays",
        "Reduced site visits by 60%",
        "Achieved 90% patient satisfaction rate"
      ],
    },
  ]

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
          <section id="key-benefits" className="mb-16">
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
          <section id="solutions" className="mb-16">
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
                  <p className="text-gray-700">Advanced analytics and ML-powered insights for better decision making.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section id="success-stories" className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-warm-purple mb-4">Success Stories</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Discover how leading pharmaceutical companies are transforming their clinical trials and research with our digital health platform.
              </p>
            </div>
            {pharmaUseCases.map((useCase, index) => (
              <UseCase key={index} {...useCase} />
            ))}
          </section>

          {/* Contact Section */}
          <section className="bg-warm-purple/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-warm-purple mb-4">Ready to Transform Your Clinical Research?</h2>
            <p className="text-gray-700 mb-6">Let's connect to learn how our solutions can enhance your clinical trials and research.</p>
            <Link 
              href="mailto:info@koios.care?cc=dimitris@koios.care&subject=Koios%20Care%20Information"
              className="inline-flex items-center justify-center px-6 py-3 bg-warm-purple text-white rounded-full hover:bg-warm-purple/90 transition-colors"
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