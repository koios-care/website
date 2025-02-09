import BackgroundPattern from "@/components/shared/background-pattern"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundPattern 
        color="#2A634D"
        backgroundColor="white"
        title="Terms of Service"
      />
      <div className="container mx-auto px-4 py-16 relative z-10 prose prose-lg max-w-4xl">
        <div className="text-center mb-8">
          <p className="text-gray-600">Last Updated: June 2023</p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wood-green mb-6">1. Welcome</h2>
          <div className="bg-wood-green/5 p-6 rounded-lg mb-6">
            <p className="text-wood-green font-medium">Summary: These terms govern your use of www.koios.care. By using our website, you agree to these terms.</p>
          </div>
          <div className="space-y-4">
            <p>1.1. Welcome to our website, www.koios.care (referred to as "the Website"), which is owned and operated by Koios Care BV ("we," "the Company," "our," or "us").</p>
            <p>1.2. These terms and conditions (referred to as "the Terms") govern the use of our Website, which provides information related to our solution for Parkinson's Disease (PD) symptom management.</p>
            <p>1.3. Each section begins with a summary in a highlight box. These highlights are informal summaries and do not form part of these Terms.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wood-green mb-6">2. Access and Use</h2>
          <div className="bg-wood-green/5 p-6 rounded-lg mb-6">
            <p className="text-wood-green font-medium">Summary: The website is accessible via web browser, but we cannot guarantee 100% availability.</p>
          </div>
          <div className="space-y-4">
            <p>2.1. You can access the Website using your web browser and internet connection.</p>
            <p>2.2. We strive to ensure the Website is available at all times. However, due to the nature of online services, we cannot guarantee uninterrupted availability.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wood-green mb-6">3. Our Content</h2>
          <div className="bg-wood-green/5 p-6 rounded-lg mb-6">
            <p className="text-wood-green font-medium">Summary: All content is protected by intellectual property rights and requires our permission for use.</p>
          </div>
          <div className="space-y-4">
            <p>3.1. All content, materials, text, images, trademarks, brand names, logos, and software on the Website are owned by us or our licensors.</p>
            <p>3.2. No permission is granted for the use of Our Content without our prior written consent.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wood-green mb-6">4. Prohibited Uses</h2>
          <div className="bg-wood-green/5 p-6 rounded-lg mb-6">
            <p className="text-wood-green font-medium">Summary: You may not use our content commercially, modify it, or use it for illegal purposes.</p>
          </div>
          <ul className="list-disc pl-6 space-y-3">
            <li>Commercially use Our Content</li>
            <li>Copy, adapt, or modify any part of Our Content</li>
            <li>Use the Website for any illegal purpose</li>
            <li>Interfere with or disrupt the Website or its servers</li>
            <li>Remove or tamper with copyright notices</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wood-green mb-6">Contact Information</h2>
          <div className="bg-white shadow-sm rounded-lg p-6 border border-wood-green/20">
            <div className="space-y-4">
              <p><strong>Address:</strong> Filip Williotstraat 9, 2600 Antwerpen</p>
              <p><strong>Email:</strong> <a href="mailto:info@koios.care" className="text-wood-green hover:text-wood-green/80">info@koios.care</a></p>
              <p><strong>Phone:</strong> +30 6982791753</p>
              <p><strong>VAT:</strong> BE0786.830.148</p>
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