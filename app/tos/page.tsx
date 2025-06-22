import BackgroundPattern from "@/components/shared/background-pattern"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern 
        color="#2A634D"
        backgroundColor="white"
        title="Terms and Conditions of Use"
      />
      <div className="container mx-auto px-4 py-16 relative z-10 prose prose-lg max-w-4xl">
        <div className="text-center mb-8">
          <p className="text-gray-600">Last Updated: December 2024</p>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#2A634D] mb-4">Terms and Conditions of Use - Koios Care</h1>
          <p className="text-lg text-[#2A634D] mb-2">Building your path to wellbeing</p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Article 1: Object</h2>
          <div className="bg-[#2A634D]/5 p-6 rounded-lg mb-6">
            <p className="text-[#2A634D] font-medium">Summary: These General Conditions of Use define the conditions under which you may access and use the Koios Care wellness device and associated services.</p>
          </div>
          <div className="space-y-4">
            <p>These General Conditions of Use ("GCU" or "Terms") define the conditions under which you (the "User" or "you") may access and use the Koios Care wellness device and any associated mobile application or services (collectively, the "Koios Care Service" or "Service") offered by Koios Care BV ("Company," "we," "us," or "our").</p>
            <p>Use of the Koios Care Service is only possible if you accept these GCU.</p>
            <p className="font-semibold text-[#2A634D]">BY ACCESSING OR USING THE KOIOS CARE SERVICE, YOU AGREE TO THESE TERMS AND CONDITIONS OF USE; IF YOU DO NOT AGREE, PLEASE DO NOT USE THE KOIOS CARE SERVICE.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Article 2: Definitions</h2>
          <div className="space-y-4">
            <p><strong>Koios Care BV</strong> (or "we" or "us"): Refers to the company Koios Care BV, a Belgian company with registered office at Filip Williotstraat 9, 2600 Antwerpen, with VAT number BE0786.830.148.</p>
            <p><strong>GCU:</strong> These General Conditions of Use.</p>
            <p><strong>User</strong> (or "you"): The natural person using the Koios Care Service for personal wellbeing purposes.</p>
            <p><strong>Koios Care Service</strong> (or "Service"): Refers to the Koios Care wellness device, its associated mobile application(s), software, content, and any related services provided by the Company for personal wellbeing.</p>
            <p><strong>Biometric Data:</strong> Refers to heart rate variability, skin temperature, activity levels, sleep patterns, and electrothermal activity collected through the Koios Care device and/or app.</p>
            <p><strong>Content:</strong> Specifically refers to all texts, information, graphics, images, videos, audio files, illustrations, data, interfaces, trademarks, logos, and computer codes of the Koios Care Service.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Article 3: Warning – Not a Medical Device</h2>
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
            <p className="font-semibold text-red-800 mb-2">THE KOIOS CARE SERVICE IS A WELLNESS DEVICE INTENDED FOR GENERAL WELLBEING PURPOSES ONLY. IT IS NOT A MEDICAL DEVICE AND IS NOT INTENDED TO DIAGNOSE, TREAT, CURE, MITIGATE, OR PREVENT ANY DISEASE, ILLNESS, OR MEDICAL CONDITION.</p>
            <p className="text-red-700">THE KOIOS CARE SERVICE DOES NOT SUPPORT EMERGENCY SITUATIONS AND SHOULD NOT BE USED AS A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT. ALWAYS SEEK THE ADVICE OF YOUR PHYSICIAN OR OTHER QUALIFIED HEALTH PROVIDER WITH ANY QUESTIONS YOU MAY HAVE REGARDING A MEDICAL CONDITION. NEVER DISREGARD PROFESSIONAL MEDICAL ADVICE OR DELAY IN SEEKING IT BECAUSE OF SOMETHING YOU HAVE READ OR INTERPRETED FROM THE KOIOS CARE SERVICE.</p>
          </div>
          <p>Please read any user manuals or instructions provided with the Koios Care Service carefully.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Article 4: Service Description - Intended Use</h2>
          <p className="mb-4">The Koios Care Service is designed to provide Users with insights and tools to support their personal wellbeing journey. This may include:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Tracking of Biometric Data and lifestyle factors</li>
            <li>Providing personalized information and feedback based on the data collected</li>
            <li>Offering wellness programs, exercises, or suggestions</li>
            <li>Supporting Parkinson's Disease symptom management through the Parkiwatch application</li>
          </ul>
          <p>The information provided by the Koios Care Service is intended to support your wellbeing choices but does not constitute medical advice.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Article 5: Biometric Data Collection and Use</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">(a) Purpose of Collection and Use:</h3>
              <p className="mb-3">We collect and process your Biometric Data solely for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide the core functionalities of the Koios Care Service, such as tracking your sleep patterns to offer sleep quality insights and monitoring activity levels to suggest wellness goals</li>
                <li>To personalize your user experience within the Koios Care Service</li>
                <li>For internal analysis to improve the Koios Care Service's functionality, features, and user experience, provided such data is anonymized or pseudonymized where feasible</li>
                <li>To support Parkinson's Disease symptom management and quality of life assessment</li>
              </ul>
              <p className="mt-3">We will not collect, use, or store your Biometric Data for any purposes other than those disclosed in these Terms and our Privacy Policy without your explicit consent.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">(b) Explicit Consent:</h3>
              <p className="font-semibold text-[#2A634D] mb-2">YOUR USE OF THE KOIOS CARE SERVICE AND ITS FEATURES THAT COLLECT BIOMETRIC DATA CONSTITUTES YOUR EXPLICIT CONSENT TO THE COLLECTION, PROCESSING, USE, AND STORAGE OF YOUR BIOMETRIC DATA AS DESCRIBED IN THESE TERMS AND OUR PRIVACY POLICY.</p>
              <p>You will be asked to provide explicit consent before any Biometric Data is initially collected. You can withdraw your consent at any time by contacting us at info@koios.care. Withdrawing consent may limit or disable certain features of the Koios Care Service.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">(c) Storage and Security:</h3>
              <p>We are committed to protecting your Biometric Data. We implement commercially reasonable technical, administrative, and physical security measures designed to protect your Biometric Data from unauthorized access, use, disclosure, alteration, or destruction. Details regarding our security practices are further outlined in our Privacy Policy.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">(d) Data Retention and Deletion:</h3>
              <p>We will retain your Biometric Data only for as long as necessary to fulfill the purposes for which it was collected, as required to provide you with the Service, or as required by applicable law. Upon your request, account termination, or when the data is no longer needed for its initial purpose, we will permanently destroy or anonymize your Biometric Data in accordance with our Privacy Policy and applicable legal requirements.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Article 6: Access to the Koios Care Service</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">6.1 Prerequisites</h3>
              <p>To use the Koios Care Service, Users need internet access with sufficient bandwidth (for app features) and compatible computer hardware or mobile devices meeting the minimum configuration required. Users are solely responsible for choosing their network and hardware.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">6.2 Creating an Account</h3>
              <p>To access the Koios Care Service, Users must create an Account, typically using an email address and a password. You must provide accurate, verifiable, complete, and up-to-date personal information.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">6.3 Login Details</h3>
              <p>Your login details are personal and confidential. You are responsible for maintaining their confidentiality and for all activities under your Account. Notify us immediately at info@koios.care of any unauthorized or suspicious use.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">6.4 Account Management</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are responsible for your Account</li>
                <li>Take precautions to prevent unauthorized third-party access</li>
                <li>You may only use your Account for personal, non-commercial purposes</li>
                <li>Users can modify and update their Account data. Users acknowledge they are solely responsible for the data provided</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">6.5 Duration and Deletion of the Account</h3>
              <p>Your Account is created upon acceptance of these GCU. If your Account is not used for a period of 3 years, it may be archived or deleted. You may request deletion of your Account by contacting us at info@koios.care or via any in-app account deletion feature.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Article 7: Using the Koios Care Service</h2>
          <p className="mb-4">Users must use the Koios Care Service in accordance with its intended wellbeing purpose and any accompanying documentation.</p>
          <p className="mb-4">You may not:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Use automated methods (scraping, crawling) to access or copy any part of the Service or Content</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Probe, scan, or test the vulnerability of the Service</li>
            <li>Impose an unreasonable load on the Service's infrastructure</li>
            <li>Use the Service for any unlawful purpose</li>
          </ul>
          <p>Any misuse may result in suspension or termination of your access.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Article 8: Intellectual Property</h2>
          <p>The Koios Care Service and its Content are the exclusive property of Koios Care BV or its licensors and are protected by applicable intellectual property laws. We grant you a limited, personal, non-exclusive, non-transferable, non-assignable license to access and use the Koios Care Service for your personal wellbeing, subject to these GCU. No part of the Koios Care Service or its Content may be copied, reproduced, or distributed without our prior written consent.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Article 9: Warranty</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
            <p className="font-semibold text-yellow-800">THE KOIOS CARE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE OPERATION, AVAILABILITY, ACCURACY, RELIABILITY, OR COMPLETENESS OF THE SERVICE OR ITS CONTENT, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE (INCLUDING FITNESS FOR ANY MEDICAL PURPOSE, WHICH IS EXPRESSLY DISCLAIMED), OR NON-INFRINGEMENT.</p>
          </div>
          <p className="mb-4">WE DO NOT GUARANTEE THAT THE SERVICE WILL OPERATE WITHOUT INTERRUPTION OR ERROR, OR THAT ANY BIOMETRIC DATA TRACKED WILL BE COMPLETELY ACCURATE OR SUITABLE FOR ANY PURPOSE OTHER THAN GENERAL WELLNESS TRACKING.</p>
          <p>Interruptions may occur due to maintenance, network issues, or other events.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Article 10: Liability</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
            <p className="font-semibold text-yellow-800">TO THE FULLEST EXTENT PERMITTED BY LAW, KOIOS CARE BV SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (C) ANY CONTENT OBTAINED FROM THE SERVICE, INCLUDING ANY RELIANCE ON SUCH CONTENT FOR PURPOSES OTHER THAN GENERAL WELLNESS; OR (D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS, DATA (INCLUDING BIOMETRIC DATA), OR CONTENT.</p>
          </div>
          <p className="mb-4">IN NO EVENT SHALL OUR AGGREGATE LIABILITY EXCEED THE AMOUNT YOU PAID US, IF ANY, IN THE PAST SIX MONTHS FOR THE SERVICES GIVING RISE TO THE CLAIM, OR A NOMINAL SUM OF €50.</p>
          <p className="mb-4">THE KOIOS CARE SERVICE IS FOR WELLNESS PURPOSES ONLY. YOU ARE SOLELY RESPONSIBLE FOR YOUR WELLBEING DECISIONS AND FOR CONSULTING WITH QUALIFIED HEALTH PROFESSIONALS FOR ANY HEALTH CONCERNS OR BEFORE MAKING ANY CHANGES TO YOUR DIET, EXERCISE, OR LIFESTYLE.</p>
          <p>USERS ARE SOLELY RESPONSIBLE FOR THE DATA AND INFORMATION THEY INPUT INTO THE KOIOS CARE SERVICE.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Article 11: Privacy Policy and Personal Data</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">11.1 Processing and Purposes</h3>
              <p>We collect and process your Personal Data, including Biometric Data, as described in our Privacy Policy, which is an integral part of these GCU and available at <a href="/privacy" className="text-[#2A634D] hover:underline">our Privacy Policy</a>. Please consult the Privacy Policy for detailed information.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">11.2 Rights</h3>
              <p className="mb-3">In accordance with applicable data protection laws (GDPR), you have rights to access, rectify, delete, restrict, or object to the processing of your Personal Data, withdraw consent, and data portability. You can exercise these rights by contacting us at: info@koios.care</p>
              <p className="mb-3">We have implemented GDPR-compliant processes to ensure the rights of users. You can exercise your data rights (access, correction, deletion, portability) by a simple inquiry to info@koios.care.</p>
              <p>If you feel your rights have not been respected, you can lodge a complaint with the competent data protection authority.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">11.3 Data Hosting</h3>
              <p>Your Personal Data, including Biometric Data, collected via the Koios Care Service is hosted on secure servers located within the European Economic Area (EEA). We take appropriate measures to ensure data security and do not share any data with third parties without your explicit consent.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Article 12: Non-Compliance with Terms</h2>
          <p>If you breach these GCU, we reserve the right to terminate or restrict your use of and access to the Koios Care Service, without prior warning, at our sole discretion.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Article 13: Modifications</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">13.1 Modification of the GCU</h3>
              <p>We reserve the right to modify these Terms at any time, especially to reflect changes to the Service or legal developments, with thirty (30) days' notice (e.g., via email or in-app notification). Continued use of the Service after modifications take effect constitutes acceptance. If you do not agree with the new GCU, you must stop using the Service and may request account deletion by contacting info@koios.care.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">13.2 Modifying the Koios Care Service</h3>
              <p>We may add, modify, or delete functionalities of the Koios Care Service at any time. We will endeavor to inform Users of significant changes.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Article 14: General Stipulations</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">14.1 Applicable Law - Disputes</h3>
              <p>These GCU are governed by Belgian law. In case of dispute, please first contact us at info@koios.care. Any disputes not resolved amicably shall be submitted to the competent courts of Antwerp, Belgium.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A634D] mb-3">14.2 Invalidity of a Provision</h3>
              <p>If any provision of these GCU is deemed invalid, the remaining provisions will continue in full force and effect.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2A634D] mb-6">Contact Us</h2>
          <div className="bg-[#2A634D]/5 p-6 rounded-lg">
            <p className="mb-2"><strong>For questions about these Terms:</strong> info@koios.care</p>
            <p className="mb-2"><strong>For privacy-related inquiries:</strong> info@koios.care</p>
            <p className="mb-2"><strong>For general inquiries:</strong> info@koios.care</p>
            <div className="mt-4">
              <p className="font-semibold">Koios Care BV</p>
              <p>Filip Williotstraat 9</p>
              <p>2600 Antwerpen</p>
              <p>Belgium</p>
              <p>VAT: BE0786.830.148</p>
            </div>
          </div>
        </section>

        <div className="text-sm text-gray-600 mt-16 pt-8 border-t border-gray-200">
          <p>These Terms may be updated periodically. Changes will take effect 7 days after notification. Your continued use of the Website indicates acceptance of any changes.</p>
        </div>
      </div>
    </div>
  )
} 