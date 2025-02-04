export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="text-sm mb-4">Last updated: February 4, 2025</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            This Privacy Policy describes how Chop AI ("we," "our," or "us") collects, uses, and protects your information when you use our mobile application and website (collectively, the "Service"). By using Chop AI, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="mb-4">We collect several types of information for various purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Account information (email, name, profile data)</li>
            <li>Usage data (learning progress, interactions, preferences)</li>
            <li>Device information (device type, operating system, unique identifiers)</li>
            <li>Analytics data (app performance, feature usage, crash reports)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve our learning card service</li>
            <li>Personalize your learning experience</li>
            <li>Analyze and optimize app performance</li>
            <li>Communicate updates and support information</li>
            <li>Protect against misuse or abuse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p className="mb-4">
            You have the right to access, update, or delete your personal information. You can manage your data through the app settings or contact our support team for assistance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:me@alvropena.com" className="text-blue-600 hover:text-blue-800">
              me@alvropena.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
