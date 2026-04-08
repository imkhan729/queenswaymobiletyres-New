import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, Lock, Unlock, ShieldCheck, AlertTriangle, CheckCircle, Wrench, Truck, MapPin, ChevronRight, HelpCircle, PoundSterling } from "lucide-react";
import heroImage from "@assets/generated_images/close_up_of_car_tyre_tread.webp"; // Reusing tread image as it fits generic tyre work
import { Link } from "wouter";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function LockingNutRemoval() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Locking Wheel Nut Removal",
    "name": "Mobile Locking Wheel Nut Removal Hemel Hempstead & Hertfordshire",
    "provider": {
      "@type": "AutoRepair",
      "@id": "https://www.queenswaymobiletyres.co.uk/#business",
      "name": "Queensway Mobile Tyres",
      "telephone": "+447427515915",
      "priceRange": "££",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hemel Hempstead",
        "addressRegion": "Hertfordshire",
        "addressCountry": "GB"
      }
    },
    "areaServed": [
      {"@type": "City", "name": "Hemel Hempstead"},
      {"@type": "City", "name": "Watford"},
      {"@type": "City", "name": "St Albans"},
      {"@type": "City", "name": "Luton"},
      {"@type": "City", "name": "Aylesbury"}
    ],
    "description": "Specialist Dynomec locking wheel nut removal at your home or workplace across Hemel Hempstead and a 30-mile radius of Hertfordshire. 99% success rate with no alloy damage."
  };

  const faqs = [
    { q: "How much does it cost to remove a locking wheel nut?", a: "We charge £30 per nut, or £80 for a full set of four. The price includes a replacement standard wheel nut so you can drive away safely. There is no call-out fee within 30 miles of Hemel Hempstead." },
    { q: "Will the removal damage my alloy wheel?", a: "No. We use Dynomec specialist removal tools (the same ones used by police forces, AA and main dealers) which grip the locking nut from the outside and turn it off without touching the alloy. We have a 99% success rate with zero rim damage." },
    { q: "What if I've lost the locking key entirely?", a: "Not a problem. The Dynomec tool does not need the key — it cuts a temporary new gripping profile into the nut and removes it. Just call us, give us your make and model, and we'll bring the right tooling on the van." },
    { q: "Can you remove McGard, Audi, BMW or Mercedes locking nuts?", a: "Yes — we routinely remove McGard, Audi factory, BMW factory, Mercedes star, Land Rover, Vauxhall and Ford locking nuts. Hardened-steel aftermarket locks (e.g. some Range Rover security wheels) take longer but are still removable in around 20–30 minutes per wheel." },
    { q: "How long does the removal take?", a: "A standard locking nut takes about 10 minutes to remove. A seized or hardened nut can take up to 30 minutes. A full set of four is normally finished within an hour." },
    { q: "Do you supply replacement nuts after removal?", a: "Yes. The fitting fee includes a brand-new standard wheel nut to replace each locking nut we remove, in the correct thread, seat shape and torque rating for your vehicle." },
    { q: "Should I replace the locking nuts after removal?", a: "That's your call. Locking nuts deter casual wheel theft but they can also strand you when you lose the key — and modern alloys are usually identifiable to police anyway. Many of our customers choose to fit standard nuts and keep their alloys insured rather than risk being locked out again." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Locking Wheel Nut Removal Hemel Hempstead | Mobile Dynomec from £30"
        description="Mobile locking wheel nut removal near me from £30 — Dynomec specialist, no alloy damage, 99% success rate. We come to you across Hemel Hempstead, Watford, St Albans, Luton, Aylesbury & 30-mile radius. Call 07427 515915."
        keywords="locking wheel nut removal, locking wheel nut removal near me, lost locking wheel nut key, locking nut removal Hemel Hempstead, mobile dynomec, locking wheel nut removal Watford, locking wheel nut removal St Albans, locking wheel nut removal Luton, alloy safe locking nut removal, mobile tyre fitter, mobile tyres Hertfordshire"
        image={heroImage}
        schema={[schema, faqSchema]}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Mobile locking wheel nut removal specialist in Hemel Hempstead, Hertfordshire" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              QUEENSWAY LOCKING WHEEL NUT <span className="text-primary">REMOVAL</span> HEMEL HEMPSTEAD
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Lost your locking wheel nut key? Nut damaged or overtightened? Don't panic.
              Our mobile specialists use advanced tools to safely remove locking nuts without damaging your expensive alloy wheels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col">
                <a href="tel:07427515915" onClick={handlePhoneClick}>
                  <Button size="lg" className="bg-primary text-black font-bold uppercase h-14 px-8 hover:bg-primary/90">
                    <Phone className="mr-2 w-5 h-5" /> Call Now: 07427 515915
                  </Button>
                </a>
                <p className="mt-2 text-[10px] text-gray-500 uppercase tracking-widest text-center sm:text-left">Secondary: 07988 018865</p>
              </div>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 uppercase w-full sm:w-auto">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left Column */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Mobile Locking Wheel Nut Removal — 99% Success, No Alloy Damage</h2>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                Almost every car on UK roads is fitted with at least one locking wheel nut per wheel — a small security feature designed to stop your alloys disappearing in the night. It's a brilliant idea, until the day you need to change a tyre and the unique removal key has vanished from the boot, snapped in half on the last fitting, or simply doesn't fit anymore because the pattern has worn smooth. At that point, the very thing that was supposed to protect your wheels is the only thing standing between you and a working car.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Queensway Mobile Tyres has been removing locking wheel nuts across Hemel Hempstead, Watford, St Albans, Luton and Aylesbury for years, and we have a <strong className="text-white">99% success rate</strong> with zero alloy damage. We don't use grinders, drills or welding — those are last-resort techniques that almost always wreck the wheel and sometimes the hub as well. Instead, we use the same <strong>Dynomec specialist removal kit</strong> that police forces, the AA, and Audi/BMW main dealers rely on. The Dynomec tool grips the locking nut from the outside, cuts a precise temporary profile, and turns it off cleanly in around 10 minutes per wheel.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Every removal includes a brand-new replacement standard wheel nut in the correct thread and seat type, torqued to the manufacturer's specification — so you drive away with a fully road-legal wheel. We attend at your home, your office car park or the side of the road. There's no need to be towed to a garage, and most jobs are finished in well under an hour. Combine the service with a fresh <Link href="/mobile-tyre-fitting-hemel-hempstead" className="text-primary hover:underline">tyre fit</Link> or <Link href="/mobile-puncture-repair-near-me" className="text-primary hover:underline">puncture repair</Link> on the same visit and we will discount the locking-nut fee.
              </p>
            </section>

            {/* Why Choose Us */}
            <section className="bg-secondary/30 p-8 rounded-lg border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Why Choose Our Removal Service?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <ShieldCheck className="text-primary w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-2">No Wheel Damage</h4>
                    <p className="text-sm text-gray-400">Our techniques are non-destructive to the alloy wheel. We guarantee no damage to your rims.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Truck className="text-primary w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-2">We Come To You</h4>
                    <p className="text-sm text-gray-400">Can't move the car because of a flat tyre and lost key? We solve the problem on your driveway.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Wrench className="text-primary w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-2">All Makes & Models</h4>
                    <p className="text-sm text-gray-400">We can remove nuts from Ford, BMW, Audi, Mercedes, McGard, and more.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-primary w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-2">Replacement Nuts</h4>
                    <p className="text-sm text-gray-400">We can often supply standard wheel nuts to replace the removed locking ones so you can drive safely.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                <PoundSterling className="text-primary w-7 h-7" /> Locking Wheel Nut Removal Prices
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">All prices include a brand-new replacement standard wheel nut, torqued to the manufacturer's specification. No call-out fee within 30 miles of Hemel Hempstead.</p>
              <div className="overflow-x-auto rounded-lg border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/60 text-white uppercase text-xs tracking-wider">
                    <tr><th className="px-4 py-3">Service</th><th className="px-4 py-3">Includes</th><th className="px-4 py-3">Price</th></tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr><td className="px-4 py-3 text-gray-300">Single nut removal</td><td className="px-4 py-3 text-gray-400">Removal + 1 replacement nut</td><td className="px-4 py-3 text-primary font-bold">£30</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Full set of 4 wheels</td><td className="px-4 py-3 text-gray-400">Removal + 4 replacement nuts</td><td className="px-4 py-3 text-primary font-bold">£80</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Combined with tyre fitting</td><td className="px-4 py-3 text-gray-400">Same-visit discount</td><td className="px-4 py-3 text-primary font-bold">−£10</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Hardened security nut (Range Rover etc.)</td><td className="px-4 py-3 text-gray-400">Extended labour time</td><td className="px-4 py-3 text-primary font-bold">£40 per nut</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <HelpCircle className="text-primary w-7 h-7" /> Locking Wheel Nut Removal — FAQs
              </h3>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <details key={i} className="group bg-secondary/30 rounded-lg border border-white/10 overflow-hidden">
                    <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4 hover:bg-secondary/50 transition-colors">
                      <span className="text-white font-bold text-base">{f.q}</span>
                      <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">{f.a}</div>
                  </details>
                ))}
              </div>
            </section>

            {/* Common Scenarios */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">When Do You Need This Service?</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-secondary/20 p-4 rounded border border-white/5 text-center">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Lost Key</h4>
                  <p className="text-sm text-gray-400">The most common reason. The unique removal key is missing from the car.</p>
                </div>
                <div className="bg-secondary/20 p-4 rounded border border-white/5 text-center">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-500">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Damaged Key</h4>
                  <p className="text-sm text-gray-400">The pins in the key have sheared off or the pattern is worn.</p>
                </div>
                <div className="bg-secondary/20 p-4 rounded border border-white/5 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Overtightened</h4>
                  <p className="text-sm text-gray-400">Previous tyre fitter used an impact gun and the nut is seized.</p>
                </div>
              </div>
            </section>
          </div>

            {/* Coverage Areas & Related Services */}
            <section className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Service Areas</h3>
              <p className="text-gray-400 mb-4 text-sm">We remove locking wheel nuts at your location across our 30-mile service area around Hemel Hempstead. No need to tow to a garage:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { name: "Hemel Hempstead", href: "/mobile-tyres-hemel-hempstead" },
                  { name: "Watford", href: "/mobile-tyres-watford" },
                  { name: "St Albans", href: "/mobile-tyres-st-albans" },
                  { name: "Luton", href: "/mobile-tyres-luton" },
                  { name: "Harrow", href: "/mobile-tyres-harrow" },
                  { name: "Slough", href: "/mobile-tyres-slough" },
                ].map(area => (
                  <Link key={area.name} href={area.href} className="px-3 py-1 bg-background rounded-full text-sm text-gray-300 border border-white/10 hover:border-primary/40 hover:text-primary flex items-center gap-1 transition-colors">
                    <MapPin className="w-3 h-3 text-primary" /> {area.name}
                  </Link>
                ))}
              </div>
              <Link href="/locations" className="text-primary hover:underline text-sm font-bold">View all coverage areas →</Link>
            </section>

            {/* Related Services */}
            <section className="bg-secondary/20 p-8 rounded-lg border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Other Mobile Services</h3>
              <div className="space-y-3">
                {[
                  { label: "Mobile Tyre Fitting", sub: "Supply & fit at your location — all brands", href: "/mobile-tyre-fitting-hemel-hempstead" },
                  { label: "24/7 Emergency Call-Out", sub: "Rapid response — 30–60 minute arrival", href: "/24-hour-emergency-mobile-tyre-fitting" },
                  { label: "Puncture Repair", sub: "Permanent BS AU 159 compliant repairs", href: "/mobile-puncture-repair-near-me" },
                  { label: "Wheel Balancing", sub: "Digital balancing at your driveway", href: "/mobile-wheel-balancing" },
                  { label: "Car Battery Replacement", sub: "AGM, EFB & standard batteries", href: "/mobile-car-battery-replacement" },
                  { label: "Emergency Fuel Delivery", sub: "Run out? We deliver petrol or diesel", href: "/emergency-fuel-delivery" },
                ].map(s => (
                  <Link key={s.href} href={s.href}>
                    <div className="flex items-center justify-between p-3 bg-background/40 border border-white/5 hover:border-primary/30 rounded group transition-all cursor-pointer">
                      <div>
                        <p className="text-white text-sm font-bold group-hover:text-primary transition-colors">{s.label}</p>
                        <p className="text-gray-500 text-xs">{s.sub}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-secondary p-8 rounded-lg border border-white/10 sticky top-24 text-center">
              <Unlock className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Fixed Price Removal</h3>
              <p className="text-sm text-gray-400 mb-6">
                We charge a fixed fee for removing locking wheel nuts. The price depends on the number of nuts (usually 4) and the complexity.
              </p>
              <div className="bg-white/5 p-4 rounded mb-6">
                <p className="text-white font-bold text-lg">From £80</p>
                <p className="text-xs text-gray-500">For all 4 wheels</p>
              </div>
              <a href="tel:07427515915" onClick={handlePhoneClick}>
                <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold uppercase">
                  Get A Quote
                </Button>
              </a>
            </div>
          </div>

        </div>
      <Footer />
    </div>
  );
}
