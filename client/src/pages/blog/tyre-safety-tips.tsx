import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, CheckCircle, AlertTriangle, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import tyreSafetyImage from "@assets/generated_images/tyre_safety_check.webp";

export default function TyreSafetyTips() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Essential Tyre Safety Tips for Hemel Hempstead & Hertfordshire Drivers",
    "image": tyreSafetyImage,
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
    "datePublished": "2023-10-15",
    "dateModified": "2026-04-06",
    "description": "Essential tyre safety tips for drivers in Hemel Hempstead, Watford, St Albans and across Hertfordshire. Check tread depth, pressure and condition to stay safe on UK roads.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.queenswaymobiletyres.co.uk/blog/tyre-safety-tips"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should I check tyre pressure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend checking tyre pressures at least once a month and before every long journey. Always check pressures when the tyres are cold for accuracy."
        }
      },
      {
        "@type": "Question",
        "name": "Does tyre pressure affect fuel consumption?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, significantly. Under-inflated tyres increase rolling resistance, meaning your engine has to work harder. Proper inflation can save you money on fuel."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Essential Tyre Safety Tips | Hemel Hempstead & Hertfordshire Drivers"
        description="Tyre safety advice from Hemel Hempstead's mobile tyre experts. Learn how to check pressure, tread depth and damage to stay safe on Hertfordshire roads."
        keywords="tyre safety hemel hempstead, tyre maintenance hertfordshire, check tyre pressure, tyre tread depth law uk, mobile tyre safety watford"
        canonical="https://www.queenswaymobiletyres.co.uk/blog/tyre-safety-tips"
        image={tyreSafetyImage}
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
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Safety Guide</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Essential Tyre Safety Tips for Hemel Hempstead & Hertfordshire Drivers
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Updated March 15, 2024</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> Queensway Team</span>
            </div>
          </div>
        </div>
      </div>

      <article className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <img
            src={tyreSafetyImage}
            alt="Mechanic checking tyre safety"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-xl mb-12 shadow-2xl border-2 border-white/5"
          />

          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <p className="text-xl leading-relaxed mb-8 font-medium text-white">
              Your tyres are the only point of contact between your vehicle and the road. The contact patch of each tyre is roughly the size of a postcard. Whether you're commuting along the M1 around Hemel Hempstead or driving country lanes in Hertfordshire, that small area handles acceleration, braking, and steering forces in all weather — which is why tyre safety is absolutely critical.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              1. Check Tyre Pressure Monthly
            </h2>
            <p className="text-gray-400 mb-4">
              Incorrect tyre pressure is one of the leading causes of premature tyre wear and handling issues.
            </p>
            <ul className="space-y-4 my-6">
              <li className="flex gap-4 items-start bg-secondary/30 p-4 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block">Under-inflation</strong>
                  <span className="text-sm">Increases fuel consumption, causes the tyre to overheat, and wears the outer edges rapidly.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start bg-secondary/30 p-4 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block">Over-inflation</strong>
                  <span className="text-sm">Reduces grip, makes the ride uncomfortable, and wears the centre of the tread.</span>
                </div>
              </li>
            </ul>
            <p className="text-gray-400 mb-6">
              Check your vehicle handbook or the sticker inside the driver's door jamb for the correct pressures. Remember to check them when the tyres are cold.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              2. Inspect Tread Depth
            </h2>
            <p className="text-gray-400 mb-4">
              The <a href="https://www.gov.uk/check-vehicle-safe/tyres" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">legal minimum tread depth in the UK</a> is <strong>1.6mm</strong>. However, safety is compromised long before that limit is reached.
            </p>
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-6 flex gap-4">
              <CheckCircle className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="font-bold text-white mb-2">The 20p Test</h3>
                <p className="text-sm text-gray-300">
                  A quick way to check your tread is the "20p test" recommended by <a href="https://www.tyresafe.org/check-your-tyres/tread-depth/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TyreSafe</a>. Insert a 20p coin into the main tread grooves. If the outer band of the coin is obscured, your tread is likely above the legal limit. If you can see the outer band, you need <Link href="/booking" className="text-primary hover:underline">new tyres</Link>.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              3. Look for Damage
            </h2>
            <p className="text-gray-400 mb-4">
              Regularly inspect your tyres for cuts, cracks, or bulges (lumps) on the sidewall. These can be caused by pothole impacts or kerbing.
            </p>
            <p className="text-gray-400 mb-6 p-4 border-l-4 border-red-500 bg-red-500/10">
              <strong>Warning:</strong> A bulge in the sidewall indicates internal structural damage. This is extremely dangerous as it can lead to a sudden blowout at speed. If you see a bulge, do not drive the vehicle.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              4. Don't Forget the Spare
            </h2>
            <p className="text-gray-400 mb-8">
              If your car has a spare wheel, remember to check its pressure and condition occasionally. You don't want to find yourself with a flat tyre only to discover your spare is flat too!
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center mt-12">
              <h3 className="text-3xl font-bold text-white mb-4">Need a Safety Check?</h3>
              <p className="text-gray-300 mb-6 text-lg">
                If you're worried about the condition of your tyres, don't take risks. Our mobile technicians can inspect and replace your tyres at your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-white transition-colors">
                    Book an Inspection
                  </Button>
                </Link>
                <Link href="/booking">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Buy New Tyres
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
