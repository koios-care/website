import BackgroundPattern from "@/components/shared/background-pattern"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern 
        color="#E4C1D5"
        backgroundColor="white"
        title="Privacy Policy"
      />
      <div className="container mx-auto px-4 py-16 relative z-10 prose prose-lg max-w-4xl">
        <div className="text-center mb-8">
          <p className="text-gray-600">Effective Date: 22 June 2023</p>
        </div>

        <p className="text-lg mb-8">
          Koios Care BV cares about your privacy and is committed to protecting your personal data in accordance with fair information practices and applicable data privacy laws.
        </p>

        <h2 className="text-2xl font-bold text-warm-purple mb-4">Scope Of This Privacy Notice</h2>
        <p className="mb-6">
          This Privacy Notice ("Notice") explains how we collect and use individuals' Personal Data ("you" or "user") in the course of our operations, including our website(s), mobile application(s) and other services provided by us (collectively the "Services"). Personal Data is all information relating to an identified or identifiable individual, and does not include data whereby personally identifiable information has been removed (such as anonymous data).
        </p>

        <p className="mb-6">Please read this Notice carefully.</p>

        <p className="mb-8">
          If you do not agree with this Notice or any part thereof, you should not access or use any part of the Services, or otherwise provide us with your Personal Data. If you change your mind in the future, you should stop using the Services and provide us with no further Personal Data.
        </p>

        <h2 className="text-2xl font-bold text-warm-purple mb-4">What Personal Data We Collect</h2>
        <p className="mb-6">
          Use of the Services is voluntary. To the extent you choose to use the Services, we may collect Personal Data about you directly from you or from third parties, as listed below:
        </p>

        <h3 className="text-xl font-semibold text-warm-purple mb-3">Information Collected from You:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><span className="font-semibold">Contact Information</span> that allows us to communicate with you, such as your name, job title, age, date of birth, prefix and title, gender, username, mailing address, telephone numbers, email address or other addresses that allow us to send you messages.</li>
          <li><span className="font-semibold">Relationship Information</span> that helps us do business with you, such as the types of products and Services that may interest you, contact and product preferences, languages, marketing preferences and demographic data.</li>
          <li><span className="font-semibold">Service Information</span> that helps us provide our Services to you, including content that you choose to add in the app or when otherwise using the Services, responses to questionnaires, and biometric data such as heart rate, voice data, device usage monitoring, geolocation data, movement data, touchscreen data, and questionnaires' responses.</li>
          <li><span className="font-semibold">Support Information</span> that helps respond to your queries, including your email address and correspondence details.</li>
          <li><span className="font-semibold">System Related Information</span> about your device including model, version and operating system.</li>
        </ul>

        <h2 className="text-2xl font-bold text-warm-purple mb-4">Information Security</h2>
        <p className="mb-8">
          We apply appropriate technical, physical and organizational measures to protect Personal Data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure or access. We maintain a comprehensive information security program proportionate to the risks, using industry-accepted practices and enhanced security measures for sensitive Personal Data.
        </p>

        <h2 className="text-2xl font-bold text-warm-purple mb-4">Contact Us</h2>
        <p className="mb-4">
          We welcome all requests, suggestions and questions concerning our use of your information.
        </p>
        <p className="mb-8">
          All such communication should be directed to{' '}
          <a href="mailto:info@koios.care" className="text-warm-purple hover:text-warm-purple/80 underline">
            info@koios.care
          </a>
        </p>

        <div className="text-sm text-gray-600 mt-16 pt-8 border-t border-gray-200">
          <p>
            This Privacy Notice may be updated periodically. We will post a prominent notice on our website to notify you of any significant changes.
          </p>
        </div>
      </div>
    </div>
  )
} 