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
        {/* Introduction */}
        <div className="text-center mb-8">
          <p className="text-gray-600">Effective Date: 20 June 2024</p>
        </div>

        <p className="text-lg mb-8">
          Koios Care BV cares about your privacy and is committed to protecting
          your personal data in accordance with fair information practices and
          applicable data privacy laws.
        </p>

        {/* Scope of This Privacy Notice */}
        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          Scope of This Privacy Notice
        </h2>
        <p className="mb-6">
          This Privacy Notice (“Notice”) explains how we collect and use
          individuals’ Personal Data (“you” or “user”) in the course of our
          operations, our mobile application (Parkiwatch), and other services
          provided by us (collectively, the “Services”). Personal Data is any
          information relating to an identified or identifiable individual and
          does not include data whereby personally identifiable information has
          been removed (such as fully anonymized or aggregated data).
        </p>
        <p className="mb-6">
          Please read this Notice carefully. If you do not agree with this
          Notice or any part thereof, you should not access or use any part of
          the Services or otherwise provide us with your Personal Data. If you
          change your mind in the future, you should stop using the Services and
          provide us with no further Personal Data.
        </p>

        {/* What Personal Data We Collect */}
        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          What Personal Data We Collect
        </h2>
        <p className="mb-6">
          Use of the Services is voluntary. To the extent you choose to use the
          Services, we may collect Personal Data about you directly from you or
          from third parties (including our partners and service providers), as
          listed below:
        </p>

        <h3 className="text-xl font-semibold text-warm-purple mb-3">
          Information You Provide Directly
        </h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <span className="font-semibold">Contact Information:</span> Date of
            birth, gender, username, mailing address, email address, job title,
            prefix/title, and telephone number.
          </li>
          <li>
            <span className="font-semibold">Relationship Information:</span>{" "}
            Product and service interests, contact preferences, languages,
            marketing preferences, demographic data.
          </li>
          <li>
            <span className="font-semibold">Service Information:</span> Content
            you add in the app, responses to questionnaires, information about
            your interaction with Koios Care, biometric data (e.g., heart rate,
            voice data), device usage monitoring, geolocation data, movement
            data, and touchscreen data.
          </li>
          <li>
            <span className="font-semibold">Support Information:</span> Email
            address and the content of your correspondence with us (including
            technical support requests, complaints, queries, and feedback).
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
        </ul>

        <h3 className="text-xl font-semibold text-warm-purple mb-3">
          Information from Third Parties
        </h3>
        <p className="mb-6">
          We may also receive information about you from third parties, such as
          our partners and service providers, and combine this with information
          we collect directly from you.
        </p>

        {/* Location Data */}
        <h3 className="text-xl font-semibold text-warm-purple mb-3">
          Location Data
        </h3>
        <p className="mb-6">
          We collect your device’s precise location when you use the phone. This
          happens both when you use the Parkiwatch app as well as in the
          background—provided you have granted the necessary permission. This
          data type is used to calculate the activity performed outside your
          home and to determine lifespace insights. GDPR generally requires data
          to be kept for no longer than is necessary. Processing happens within
          a window of 28 days and is deleted afterward.
        </p>
        <p className="mb-6">
          This processing is carried out in accordance with Article 6(1)(f) of
          the GDPR, based on our legitimate interest in providing users with a
          relevant product and optimizing the app for their needs. Your IP
          address is processed solely on servers in the EU. Your location is not
          saved on your device but is deleted again as soon as your session
          ends.
        </p>

        {/* How We Use Personal Data */}
        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          How We Use Personal Data
        </h2>
        <p className="mb-6">
          We use your Personal Data for one or more of the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <span className="font-semibold">
              Providing and Improving the Services:
            </span>{" "}
            To perform our contractual obligations and provide you with the
            Services you request, process transactions, communicate with you
            about your account, and personalize your experience.
          </li>
          <li>
            <span className="font-semibold">Support:</span> To respond to your
            inquiries, provide technical support, and address your complaints.
          </li>
          <li>
            <span className="font-semibold">Analytics and Research:</span> To
            understand how users interact with our Services, improve our
            Services, and develop new products and features.
          </li>
          <li>
            <span className="font-semibold">Scientific Research:</span> We may
            use your Personal Data, including Sensitive Personal Data, for
            scientific research purposes, provided such research is
            proportionate to the aim pursued. We may also anonymize (or
            de-identify) your Personal Data for these research activities.
          </li>
          <li>
            <span className="font-semibold">Enforcing Terms of Service:</span>{" "}
            It is in our legitimate interests to enforce our Terms of Service,
            ensure the integrity of our Services, conduct audits, and defend
            ourselves against legal claims or disputes.
          </li>
        </ul>

        {/* Data Disclosures */}
        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          Data Disclosures
        </h2>
        <p className="mb-6">
          We may disclose Personal Data to our affiliates for any of the
          purposes described in this Notice. We may use third parties, such as
          our vendors, partners, and service providers, to provide or perform
          Services and functions on our behalf, as necessary to fulfill the
          project or as otherwise authorized by you. Any access to such Personal
          Data will be limited to the purpose for which the information was
          provided.
        </p>
        <p className="mb-6">
          We may also make Personal Data concerning individuals available to
          public or judicial authorities, law enforcement personnel, and
          agencies as required by law. Where permitted by law, we may also
          disclose such information to third parties (including legal counsel)
          when necessary for the establishment, exercise, or defense of legal
          claims, to enforce our rights, protect our property or the rights,
          property, or safety of others, or as needed to support external audit,
          compliance, and corporate governance functions.
        </p>
        <p className="mb-6">
          In the event of a sale, merger, liquidation, dissolution, or sale or
          transfer of the substantial assets of Koios Care BV (or any of its
          business operations), Personal Data may be transferred to the party
          acquiring all or part of the equity or assets of Koios Care BV or its
          business operations.
        </p>

        {/* Data Handling Procedures */}
        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          Data Handling Procedures
        </h2>

        {/* Security Measures */}
        <h3 className="text-xl font-semibold text-warm-purple mb-3">
          Security Measures
        </h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <span className="font-semibold">Encryption:</span> We implement
            robust encryption techniques to protect data both in transit and at
            rest. We also utilize data masking and pseudonymization to minimize
            the risk of identifying individuals when sharing data for research
            purposes.
          </li>
          <li>
            <span className="font-semibold">Storage:</span> We utilize secure
            cloud storage solutions with strong security features, backups, and
            disaster recovery plans.
          </li>
          <li>
            <span className="font-semibold">Access Control:</span> We implement
            fine-grained access control mechanisms to ensure that only
            authorized individuals can access specific data.
          </li>
          <li>
            <span className="font-semibold">Regular Assessments:</span> We
            conduct regular vulnerability assessments, penetration testing, and
            continuous monitoring to identify and address potential security
            weaknesses.
          </li>
          <li>
            <span className="font-semibold">Auditability and Logging:</span> We
            maintain an audit trail (e.g., via AWS Control Tower foundations)
            integrated with a central audit account. We set up alerting for
            unusual behavior, monitor service availability, and track read/write
            operations. We also enable S3 versioning and DynamoDB point-in-time
            recovery, using AWS-managed keys for encryption at rest.
          </li>
        </ul>

        {/* Data Deletion */}
        <h3 className="text-xl font-semibold text-warm-purple mb-3">
          Data Deletion
        </h3>
        <p className="mb-6">
          The deletion of users’ data is performed upon request and includes a
          manual approval step to prevent accidental deletion. This manual
          approval process is implemented using AWS Step Functions, as described{" "}
          <a
            href="https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/"
            className="text-warm-purple hover:text-warm-purple/80 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>

        {/* International Transfers */}
        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          International Transfers
        </h2>
        <p className="mb-6">
          Personal Data provided to Koios Care BV will be processed by us inside
          the European Economic Area and will be accessed by our staff and third
          parties working for us for the purposes set forth in this Notice or
          for other purposes subject to your approval. Your Personal Data may
          also be held, processed, and accessed outside the EEA, including in
          countries that have not been determined by the European Commission to
          provide an adequate level of data protection (e.g., the United
          States). In any such transfer, Koios Care BV will ensure that
          appropriate data protection safeguards (such as the European
          Commission’s Standard Contractual Clauses) are in place. To obtain a
          copy of the relevant transfer mechanism or for additional information,
          please contact us.
        </p>

        {/* Your Rights and Choices */}
        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          Your Rights and Choices
        </h2>
        <p className="mb-6">
          By providing Personal Data to us, you understand and agree to the
          collection, processing, international transfer, and use of such
          information as set forth in this Privacy Notice. Where required by
          applicable law, we will obtain your explicit consent. You may opt out
          of our Services at any time by providing Koios Care BV with written or
          electronic notice. Please note that if you withdraw your consent, we
          may be unable to provide you with certain Services.
        </p>
        <p className="mb-6">
          We may send you commercial or promotional emails regarding our
          Services. If you wish to unsubscribe, please follow the instructions
          contained in the email or contact us. Note that if you opt out of
          receiving commercial emails from us, you may still receive
          administrative messages regarding our Services (e.g., updates or
          billing notices).
        </p>
        <p className="mb-6">
          If you are located in the European Economic Area (EEA), you may
          exercise the following rights in relation to the Personal Data we hold
          about you:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <span className="font-semibold">Withdrawal of consent:</span> Where
            we rely on consent, you have the right to withdraw your consent at
            any time. However, this will not affect the lawfulness of any
            processing carried out before your withdrawal.
          </li>
          <li>
            <span className="font-semibold">Access:</span> You have the right to
            access your Personal Data and to receive an explanation of how we
            use it and with whom we share it.
          </li>
          <li>
            <span className="font-semibold">Correction:</span> You have the
            right to correct any Personal Data we hold about you that is
            inaccurate or incomplete.
          </li>
          <li>
            <span className="font-semibold">Erasure:</span> You have the right
            to request that we erase or delete your Personal Data.
          </li>
          <li>
            <span className="font-semibold">Object to processing:</span> You
            have the right to object to our processing of your Personal Data
            where we rely on a legitimate interest.
          </li>
          <li>
            <span className="font-semibold">Restrict processing:</span> In
            certain circumstances, you have the right to request that we stop
            processing your Personal Data, other than for storage purposes.
          </li>
          <li>
            <span className="font-semibold">Portability:</span> You have the
            right to receive your Personal Data in a structured, commonly used,
            and machine-readable format, and to request that we transfer such
            data to a third party where feasible.
          </li>
        </ul>

        {/* Data Sharing and Research */}
        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          Data Sharing and Research
        </h2>
        <p className="mb-6">
          We may share de-identified processed data as part of research
          activities. Data sharing will be limited to research purposes and will
          adhere to strict data anonymization and privacy guidelines. All such
          sharing will include appropriate technical and contractual safeguards
          to ensure the protection of your Personal Data.
        </p>

        {/* Data Retention */}
        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          Data Retention
        </h2>
        <p className="mb-6">
          We will retain your Personal Data for as long as necessary for the
          purposes for which it was collected. When determining the retention
          period, we take into account various criteria, such as the type of
          products and Services requested or provided, any potential
          re‑enrollment with our Services, the impact on the Services if we
          delete certain information, and applicable retention policies or legal
          requirements.
        </p>

        {/* Children's Privacy */}
        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          Children’s Privacy
        </h2>
        <p className="mb-6">
          The Services are not directed to children, and we do not knowingly
          collect Personal Data from anyone under the age of 18. If you learn
          that a child has provided us with Personal Data in violation of this
          Policy, please contact us.
        </p>

        {/* Updates to Our Privacy Notice */}
        <h2 className="text-2xl font-bold text-warm-purple mb-4">
          Updates to Our Privacy Notice
        </h2>
        <p className="mb-6">
          This Privacy Notice may be updated periodically and without prior
          notice to you to reflect changes in our Personal Data practices. We
          will post a prominent notice on our website to notify you of any
          significant changes to our Privacy Notice and indicate when it was
          most recently updated. You should also check this page from time to
          time to ensure that you are happy with any changes.
        </p>

        {/* Contact Us */}
        <h2 className="text-2xl font-bold text-warm-purple mb-4">Contact Us</h2>
        <p className="mb-4">
          We welcome all requests, suggestions, and questions concerning our use
          of your information. All such communication should be directed to:
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
          <p>This Privacy Notice may be updated periodically. Please check back for any changes.</p>
        </div>
      </div>
    </div>
  );
}
