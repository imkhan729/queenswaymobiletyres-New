import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Award, Users, Shield, Clock } from "lucide-react";
import mechanicImage from "@assets/generated_images/mechanic_checking_tyre_pressure.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="About Us | Queensway Mobile Tyres"
        description="Learn about Queensway Mobile Tyres, London's trusted mobile tyre fitting experts. 24/7 emergency service, experienced technicians, and customer-first approach."
      />
      <Navbar />

      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            ABOUT <span className="text-primary">US</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driven by a passion for automotive safety and customer convenience, we are revolutionizing the tyre industry one fitting at a time.
          </p>
        </div>
      </div>

      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">OUR STORY</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Founded with the mission to eliminate the hassle of traditional garage visits, Queensway Mobile Tyres has grown into London's most reliable mobile tyre service. <strong>With over 10 years of hands-on experience</strong> in the automotive industry, we realized that modern life is busy, and taking time out to sit in a waiting room for new tyres just doesn't fit into people's schedules anymore.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We invested in a fleet of state-of-the-art mobile vans, equipped with the latest tyre changing and balancing machinery, allowing us to deliver dealership-quality service on your driveway, at your office, or on the roadside.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <span className="block font-bold text-white">Top Rated</span>
                  <span className="text-sm text-gray-500">5-Star Reviews</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <span className="block font-bold text-white">Expert Team</span>
                  <span className="text-sm text-gray-500">Fully Qualified</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-lg"></div>
            <img src={mechanicImage} alt="Expert Tyre Technician" className="relative rounded-lg shadow-2xl border border-white/10" />
          </div>
        </div>

        <div className="bg-secondary/50 p-8 rounded border border-white/5 text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-white mb-8">OUR VALUES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Safety First</h3>
              <p className="text-gray-400">We never cut corners. Every fitting is double-checked for safety and performance.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Reliability</h3>
              <p className="text-gray-400">When we say we'll be there, we'll be there. You can count on us in an emergency.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Transparency</h3>
              <p className="text-gray-400">No hidden fees. We provide clear, upfront quotes before any work begins.</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-primary text-black p-12 rounded-lg">
          <h2 className="text-3xl font-heading font-bold mb-4">READY TO EXPERIENCE THE DIFFERENCE?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-medium">
            Join thousands of satisfied customers who have switched to mobile tyre fitting.
          </p>
          <a href="tel:07427515915" onClick={handlePhoneClick}>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold uppercase h-14 px-8 text-lg">
              <Phone className="mr-2 w-5 h-5" /> Call 07427 515915
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}