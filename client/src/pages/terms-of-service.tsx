import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Terms of Service | Queensway Mobile Tyres"
        description="Terms and conditions for Queensway Mobile Tyres services."
      />
      <Navbar />
      <div className="pt-24 pb-12 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none text-gray-300">
          <p>Last updated: December 14, 2025</p>
          <p>Please read these Terms of Service carefully before using the Queensway Mobile Tyres website and services.</p>
          
          <h3>1. Service Agreement</h3>
          <p>By booking a service with Queensway Mobile Tyres, you agree to these terms. We provide mobile tyre fitting, puncture repairs, and emergency call-outs.</p>
          
          <h3>2. Appointments & Cancellations</h3>
          <p>We aim to arrive at the scheduled time, but delays may occur due to traffic or unforeseen circumstances. Cancellations made less than 24 hours before the appointment may incur a fee.</p>
          
          <h3>3. Payments</h3>
          <p>Payment is due upon completion of the work unless otherwise agreed. We accept major credit/debit cards and cash.</p>
          
          <h3>4. Warranty</h3>
          <p>New tyres come with a manufacturer's warranty. Our workmanship is guaranteed for a specific period. Puncture repairs are carried out to BS AU 159 standards.</p>
          
          <h3>5. Liability</h3>
          <p>We are not liable for any pre-existing damage to your vehicle or wheels. It is your responsibility to ensure your vehicle is in a safe location for us to work.</p>
          
          <h3>6. Changes to Terms</h3>
          <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the new terms.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}