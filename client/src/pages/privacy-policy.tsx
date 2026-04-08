import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Privacy Policy | Queensway Mobile Tyres"
        description="Privacy Policy for Queensway Mobile Tyres. How we handle your data."
      />
      <Navbar />
      <div className="pt-24 pb-12 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-gray-300">
          <p>Last updated: December 14, 2025</p>
          <p>At Queensway Mobile Tyres, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>

          <h3>1. Information We Collect</h3>
          <p>We may collect personal information such as your name, phone number, email address, vehicle registration number, and location details when you book our services or contact us.</p>

          <h3>2. How We Use Your Information</h3>
          <p>We use your information to:</p>
          <ul>
            <li>Provide mobile tyre fitting and emergency services.</li>
            <li>Process payments and invoices.</li>
            <li>Communicate with you regarding your booking or enquiry.</li>
            <li>Improve our services and website functionality.</li>
          </ul>

          <h3>3. Data Sharing</h3>
          <p>We do not sell your personal data. We may share your information with trusted third-party service providers (e.g., payment processors) only as necessary to provide our services.</p>

          <h3>4. Security</h3>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse.</p>

          <h3>5. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at info@queenswaymobiletyres.co.uk.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}