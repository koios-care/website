import BackgroundPattern from "@/components/shared/background-pattern";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern
        color="#E4C1D5"
        backgroundColor="white"
        title="Privacy Notice for Parkiwatch"
      />
      <div className="container mx-auto px-4 py-16 relative z-10 prose prose-lg max-w-4xl">
        <div className="text-center mb-8">
          <p className="text-gray-600">Effective Date: 20 June 2024</p>
        </div>

        <p className="text-lg mb-8">
          Koios Care BV values your privacy and is committed to protecting your
          personal data in accordance with applicable data protection laws and
          fair information practices.
        </p>

        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          Scope of This Privacy Notice
        </h2>
        <p className="mb-6">
          This Privacy Notice ("Notice") explains how we collect and use
          personal data ("you" or "user") through our mobile application
          (Parkiwatch) and other services (collectively the "Services").
          Personal data includes any information that identifies or can be used
          to identify an individual. It does not include anonymized data.
        </p>

        <p className="mb-6">Please read this Notice carefully.</p>

        <p className="mb-8">
          If you do not agree with this Notice, you should discontinue using the
          Services and refrain from providing personal data. If you change your
          mind later, you should stop using the Services and cease sharing
          personal data with us.
        </p>

        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          What Personal Data We Collect
        </h2>
        <p className="mb-6">
          Use of our Services is voluntary. If you choose to use them, we may
          collect personal data directly from you or from third parties, as
          outlined below:
        </p>

        <h3 className="text-xl font-semibold text-warm-purple mb-3">
          Information You Provide Directly
        </h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <span className="font-semibold">Contact Information:</span> Name,
            date of birth, gender, username, mailing address, email address.
          </li>
          <li>
            <span className="font-semibold">Relationship Information:</span>{" "}
            Preferences regarding products and services, contact preferences,
            language settings, marketing preferences, and demographic data.
          </li>
          <li>
            <span className="font-semibold">Service Information:</span> Content
            added in the app, responses to questionnaires, biometric data (heart
            rate, voice data), device usage monitoring, geolocation data,
            movement data, touchscreen interactions.
          </li>
          <li>
            <span className="font-semibold">Support Information:</span> Email
            address, correspondence content, technical support requests,
            complaints, and feedback.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-warm-purple mb-3">
          Information We Collect Automatically
        </h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <span className="font-semibold">Device Information:</span> Model,
            version, and operating system of your device.
          </li>
          <li>
            <span className="font-semibold">Location Data:</span> Precise
            location data, used for activity tracking and lifespace insights.
            Data is retained for a maximum of 28 days before being deleted.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          How We Use Personal Data
        </h2>
        <p className="mb-6">
          We process personal data for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <span className="font-semibold">Providing and Improving Services:</span> 
            Processing transactions, communicating with you, and enhancing user experience.
          </li>
          <li>
            <span className="font-semibold">Support:</span> Responding to inquiries, 
            addressing technical issues, and resolving complaints.
          </li>
          <li>
            <span className="font-semibold">Analytics and Research:</span> Understanding 
            how users interact with our Services to improve functionality and develop new features.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          Data Security & Retention
        </h2>
        <p className="mb-6">
          We apply appropriate security measures to protect personal data from
          unauthorized access, loss, or misuse. Data is stored securely, with
          encryption for sensitive information. We retain personal data only as
          long as necessary for its intended purpose, complying with applicable
          laws.
        </p>

        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          Your Rights and Choices
        </h2>
        <p className="mb-6">
          You have rights over your personal data, including:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <span className="font-semibold">Access:</span> Request a copy of
            your personal data.
          </li>
          <li>
            <span className="font-semibold">Correction:</span> Update inaccurate
            or incomplete data.
          </li>
          <li>
            <span className="font-semibold">Deletion:</span> Request the
            deletion of your personal data.
          </li>
          <li>
            <span className="font-semibold">Opt-out:</span> Unsubscribe from
            marketing communications.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          Data Sharing
        </h2>
        <p className="mb-6">
          We may share anonymized data for research purposes. Data is securely
          stored and transferred only when necessary, with appropriate
          safeguards in place.
        </p>

        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          International Transfers
        </h2>
        <p className="mb-6">
          Your data may be transferred outside the EEA. In such cases, we
          ensure compliance with European data protection standards.
        </p>

        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          Children's Privacy
        </h2>
        <p className="mb-6">
          The Services are not directed at children under 18. If we become aware
          of any such data collection, we will delete it promptly.
        </p>

        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          Updates to This Privacy Notice
        </h2>
        <p className="mb-6">
          We may update this Notice periodically. Any significant changes will
          be communicated through our website.
        </p>

        <h2 className="text-2xl font-bold text-warm-purple mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns regarding this Notice, please
          contact us at:
        </p>
        <p className="mb-8">
          <a
            href="mailto:info@koios.care"
            className="text-warm-purple hover:text-warm-purple/80 underline"
          >
            info@koios.care
          </a>
        </p>

        <div className="text-sm text-gray-600 mt-16 pt-8 border-t border-gray-200">
          <p>
            This Privacy Notice may be updated periodically. Please check back
            for any changes.
          </p>
        </div>
      </div>
    </div>
  );
}
