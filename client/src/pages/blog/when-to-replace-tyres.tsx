import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, AlertTriangle, CheckCircle, Ruler, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import replaceTyreImage from "@assets/generated_images/worn_tyre_tread_indicator.webp";

export default function WhenToReplaceTyres() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "When Should You Replace Your Tyres? A Hertfordshire Driver's Guide",
    "image": replaceTyreImage,
    "author": {
      "@type": "Organization",
      "name": "Queensway Mobile Tyres",
      "url": "https://www.queenswaymobiletyres.co.uk/"
    },
    "publisher": {
      "@type": "AutoRepair",
      "@id": "https://www.queenswaymobiletyres.co.uk/#business",
      "name": "Queensway Mobile Tyres",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.queenswaymobiletyres.co.uk/favicon.png"
      }
    },
    "datePublished": "2023-11-02",
    "dateModified": "2026-04-06",
    "description": "Unsure if your tyres need changing? Our Hemel Hempstead technicians explain the 1.6mm legal limit, warning signs and the 20p test for drivers across Hertfordshire.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.queenswaymobiletyres.co.uk/blog/when-to-replace-tyres"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the legal minimum tread depth in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The legal minimum tread depth for cars in the UK is 1.6mm across the central three-quarters of the tread width and around the entire circumference of the tyre. Driving with tyres below this limit is illegal and unsafe."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I replace my tyres?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no set timeframe as it depends on mileage and driving style. However, we recommend checking them every month. Tyres over 10 years old should generally be replaced regardless of tread depth due to rubber degradation."
        }
      },
      {
        "@type": "Question",
        "name": "What is the penalty for bald tyres?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can face a fine of up to £2,500 and 3 penalty points PER TYRE. If all four tyres are illegal, that could mean a £10,000 fine and loss of your licence."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="When to Replace Tyres? UK Tread Depth Limit | Hemel Hempstead Guide"
        description="Know the UK 1.6mm legal tread depth. Our Hemel Hempstead tyre experts explain the 20p test, warning signs and when to replace. Serving Herts, Beds & Bucks."
        keywords="when to replace car tyres, legal tyre tread depth uk, 20p tyre test, worn tyre signs, replacement tyres hemel hempstead, tyre safety hertfordshire"
        canonical="https://www.queenswaymobiletyres.co.uk/blog/when-to-replace-tyres"
        image={replaceTyreImage}
        schema={[schema, faqSchema]}
      />
      <Navbar />

      <div className="pt-24 pb-12 bg-secondary border-b border-white/5">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="link" className="text-gray-400 hover:text-primary pl-0 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Button>
          </Link>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Maintenance & Law</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              When Should You Replace Your Tyres? A Hertfordshire Driver's Guide
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Updated March 15, 2024</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> Senior Technician</span>
            </div>
          </div>
        </div>
      </div>

      <article className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <img
            src={replaceTyreImage}
            alt="Close up of worn tyre tread indicator"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-xl mb-12 shadow-2xl border-2 border-white/5"
          />

          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <p className="text-xl leading-relaxed mb-8 font-medium text-white">
              Knowing when to replace your tyres is not just about avoiding a hefty fine; it is the single most important maintenance task for your safety. At <strong className="text-primary">Queensway Mobile Tyres</strong>, our Hemel Hempstead-based team sees hundreds of dangerous tyres every week across Hertfordshire, Bedfordshire and Buckinghamshire. This guide explains exactly what to look for.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              <Ruler className="text-primary w-8 h-8" />
              The 1.6mm Legal Limit (and why 3mm is better)
            </h2>
            <p>
              <a href="https://www.gov.uk/check-vehicle-safe/tyres" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">UK law</a> states that car tyres must have a minimum tread depth of <strong>1.6mm</strong> across the central three-quarters of the tyre.
            </p>
            <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl my-6">
              <h3 className="text-red-500 font-bold text-xl mb-2 flex items-center gap-2"><AlertTriangle className="w-6 h-6" /> The Danger Zone</h3>
              <p className="text-gray-300">
                In wet conditions, a tyre with 1.6mm of tread takes an extra <strong>8 metres</strong> (two car lengths) to stop from 50mph compared to a new tyre.
              </p>
            </div>
            <p>
              This is why most experts, including <a href="https://www.rospa.com/road-safety/advice/vehicles/tyres" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ROSPA</a> and our team, recommend <Link href="/booking" className="text-primary hover:underline">replacing tyres</Link> when they reach <strong>3mm</strong>. Performance drops off significantly after this point.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              <CheckCircle className="text-primary w-8 h-8" />
              The "20p Test" - Check in Seconds
            </h2>
            <p>
              You don't need specialist equipment to check your tread. The rim of a standard British 20p coin is just under 3mm wide.
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-gray-300 my-6 marker:text-primary marker:font-bold">
              <li>Take a 20p coin.</li>
              <li>Insert it into the main tread grooves of your tyre.</li>
              <li>If the outer band of the coin is obscured by the tyre, your tread is likely above the legal limit.</li>
              <li>If you can see the outer band of the coin, your tyres may be illegal and unsafe. <strong>Replace immediately.</strong></li>
            </ol>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              <AlertTriangle className="text-yellow-500 w-8 h-8" />
              Other Warning Signs
            </h2>
            <p>
              Tread depth isn't the only factor. Inspect your sidewalls for:
            </p>
            <ul className="list-none space-y-4 my-6">
              <li className="bg-secondary/30 p-4 rounded-lg border border-white/5">
                <strong className="text-white block mb-1">Cracks & Crazing</strong>
                <span className="text-sm">Signs of ageing rubber. Common on cars that are parked for long periods. Old rubber provides less grip.</span>
              </li>
              <li className="bg-secondary/30 p-4 rounded-lg border border-white/5">
                <strong className="text-white block mb-1">Bulges (Lumps)</strong>
                <span className="text-sm text-red-400 font-bold">CRITICAL DANGER.</span>
                <span className="text-sm"> This indicates internal structural failure (usually from hitting a pothole). The tyre could blow out at any moment. Do not drive.</span>
              </li>
            </ul>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" /> Frequently Asked Questions
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">Can I replace just one tyre?</h4>
                  <p className="text-gray-400">Ideally, tyres should be replaced in pairs across the same axle (both fronts or both rears) to ensure balanced handling and braking. If replacing only one, ensure it matches the other in size and type.</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-bold text-white text-lg mb-2">How old is too old?</h4>
                  <p className="text-gray-400">Check the DOT code on the sidewall. A code like "2521" means it was made in the 25th week of 2021. Tyres older than 10 years should be replaced, even if they look new.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary to-primary/20 p-8 rounded-2xl text-center border border-primary/30 shadow-lg shadow-primary/5">
              <h3 className="text-3xl font-bold text-white mb-4">Tyres Worn Out?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We can replace them on your driveway today. No hassle, no waiting rooms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-white transition-colors w-full sm:w-auto">
                    Book Replacement
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 w-full sm:w-auto">
                    Check My Tyres
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
