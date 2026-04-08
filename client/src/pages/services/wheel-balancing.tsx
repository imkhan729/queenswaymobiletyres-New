import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Settings, RotateCw, ShieldCheck, Zap, Gauge, MapPin, ChevronRight, HelpCircle, PoundSterling } from "lucide-react";
import heroImage from "@assets/generated_images/digital_wheel_balancer_screen.webp";
import wheelImage from "@assets/generated_images/close_up_of_car_tyre_tread.webp"; // Reusing generic tread/wheel image or similar
import { Link } from "wouter";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function WheelBalancing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Wheel Balancing",
    "name": "Mobile Wheel Balancing Hemel Hempstead & Hertfordshire",
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
    "description": "Professional mobile wheel balancing at your home or work across Hemel Hempstead and a 30-mile radius. Digital precision balancing eliminates vibration and uneven tyre wear."
  };

  const faqs = [
    { q: "How much does mobile wheel balancing cost?", a: "Wheel balancing on its own costs £15 per wheel, or £50 for a full set of four. Balancing is always included free of charge whenever we fit a new tyre as part of our standard mobile fitting service." },
    { q: "How do I know if my wheels need balancing?", a: "The classic symptom is a vibration through the steering wheel that starts at around 50–55 mph and gets worse with speed. If you feel the vibration in the seat or floor instead, it's usually one of the rear wheels. Other signs include uneven 'cupping' wear on the tread and premature wheel-bearing wear." },
    { q: "How long does it take to balance a wheel?", a: "About 10 to 15 minutes per wheel using our digital balancer. A full set of four typically takes 45 minutes to an hour, including removing each wheel, balancing, and torquing back to manufacturer specification." },
    { q: "What's the difference between balancing and wheel alignment?", a: "Balancing equalises the weight distribution around the wheel so it spins smoothly — it fixes vibration. Alignment (sometimes called tracking) adjusts the angles at which the wheels meet the road — it fixes the car pulling to one side and uneven inside/outside tread wear. We currently offer mobile balancing only; alignment requires a fixed-floor laser rig." },
    { q: "Do you balance alloy wheels with hidden weights?", a: "Yes. Our balancers support the FIA (Fit Inside Alloy) mode which places adhesive weights on the inside of the rim where they cannot be seen. This is the standard for premium alloy wheels on BMW, Audi, Mercedes and similar." },
    { q: "Should I get my wheels balanced after every tyre rotation?", a: "Yes, ideally. Any time the tyre is moved on the rim or to a different position on the car, the balance can shift. We recommend a re-balance every 6,000–8,000 miles or whenever you notice vibration." },
    { q: "Will balancing fix a buckled alloy wheel?", a: "No. Balancing compensates for weight imbalance, but a buckled or out-of-round rim will still produce vibration. If we discover the rim itself is the problem during balancing, we'll show you and recommend a wheel refurbisher in Hemel Hempstead or Watford." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Mobile Wheel Balancing Hemel Hempstead | At-Home Wheel Balancing Near Me £15"
        description="Mobile wheel balancing near me from £15 per wheel — digital precision balancing at your home or work. Fix steering shake across Hemel Hempstead, Watford, St Albans, Luton, Aylesbury & 30-mile radius. Call 07427 515915."
        keywords="mobile wheel balancing, mobile wheel balancing near me, wheel balancing Hemel Hempstead, mobile tyre balancing, wheel balancing near me, at home wheel balancing, mobile tyres, mobile tyre fitter, steering shake fix, wheel balancing Watford, wheel balancing St Albans, wheel balancing Luton, mobile balancing Hertfordshire"
        image={heroImage}
        schema={[schema, faqSchema]}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Digital mobile wheel balancing equipment serving Hemel Hempstead and Hertfordshire" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              QUEENSWAY MOBILE <span className="text-primary">WHEEL BALANCING</span> HEMEL HEMPSTEAD
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Eliminate uncomfortable steering vibration and extend the life of your tyres.
              We bring precision digital wheel balancing equipment directly to your driveway or workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col">
                <a href="tel:07427515915" onClick={handlePhoneClick}>
                  <Button size="lg" className="bg-primary text-black font-bold uppercase h-14 px-8 hover:bg-primary/90">
                    <Phone className="mr-2 w-5 h-5" /> Book Now: 07427 515915
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
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Mobile Wheel Balancing — Smooth Out Steering Vibration at Your Door</h2>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                Wheel balancing is the process of equalising the weight distribution of the combined tyre and wheel assembly so that it spins perfectly true at speed. As little as 10 grams of imbalance — about the weight of a £1 coin — is enough to produce a noticeable vibration through the steering wheel at 60 mph, and over time that vibration shortens the life of your tyres, your wheel bearings, your steering rack and your suspension bushes.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Queensway Mobile Tyres carries the same generation of digital balancers that you'd find in a high-street fast-fit centre, mounted inside the van and powered from an on-board generator. We can balance steel wheels, alloy wheels, low-profile UHP fitments and specialist run-flat assemblies up to 22-inch — all from your driveway, your office car park or wherever you happen to be parked. The job typically takes 45 minutes for a full set of four, and there is no call-out fee within 30 miles of Hemel Hempstead.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Balancing is also included free of charge any time we fit a new tyre as part of our <Link href="/mobile-tyre-fitting-hemel-hempstead" className="text-primary hover:underline">mobile tyre fitting service</Link> or carry out a <Link href="/mobile-puncture-repair-near-me" className="text-primary hover:underline">puncture repair</Link>. If you are noticing a steering shake but you're not sure whether it's a balance issue or something else, send us a quick description on WhatsApp and we'll talk you through the diagnosis before you book.
              </p>
            </section>

            {/* Signs You Need It */}
            <section className="bg-secondary/30 rounded-lg p-8 border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Signs Your Wheels Need Balancing</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Steering Wheel Vibration",
                    desc: "The most common sign. Shaking in the steering wheel, usually starting at around 50-60mph and getting worse with speed.",
                    icon: Zap
                  },
                  {
                    title: "Seat or Floor Vibration",
                    desc: "If the rear wheels are out of balance, you might feel the vibration through the car seat or floor rather than the steering wheel.",
                    icon: RotateCw
                  },
                  {
                    title: "Uneven Tyre Wear",
                    desc: "Imbalanced wheels can cause 'cupping' or patchy wear on the tyre tread, shortening the life of your expensive tyres.",
                    icon: Gauge
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded bg-background/50 border border-white/5">
                    <div className="mt-1 text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Areas */}
            <section className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Wheel Balancing Service Areas</h3>
              <p className="text-gray-400 mb-4 text-sm">Our mobile balancing units serve the full 30-mile radius from our Hemel Hempstead base. Wheel balancing is included free with every new tyre fitting:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { name: "Hemel Hempstead", href: "/mobile-tyres-hemel-hempstead" },
                  { name: "Watford", href: "/mobile-tyres-watford" },
                  { name: "St Albans", href: "/mobile-tyres-st-albans" },
                  { name: "Luton", href: "/mobile-tyres-luton" },
                  { name: "Harrow", href: "/mobile-tyres-harrow" },
                  { name: "Slough", href: "/mobile-tyres-slough" },
                  { name: "Milton Keynes", href: "/mobile-tyres-milton-keynes" },
                  { name: "North London", href: "/mobile-tyres-london" },
                ].map(area => (
                  <Link key={area.name} href={area.href} className="px-3 py-1 bg-background rounded-full text-sm text-gray-300 border border-white/10 hover:border-primary/40 hover:text-primary flex items-center gap-1 transition-colors">
                    <MapPin className="w-3 h-3 text-primary" /> {area.name}
                  </Link>
                ))}
              </div>
              <Link href="/locations" className="text-primary hover:underline text-sm font-bold">See full coverage area →</Link>
            </section>

            {/* Pricing */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                <PoundSterling className="text-primary w-7 h-7" /> Mobile Wheel Balancing Prices
              </h3>
              <div className="overflow-x-auto rounded-lg border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/60 text-white uppercase text-xs tracking-wider">
                    <tr><th className="px-4 py-3">Service</th><th className="px-4 py-3">Includes</th><th className="px-4 py-3">Price</th></tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr><td className="px-4 py-3 text-gray-300">Single wheel balance</td><td className="px-4 py-3 text-gray-400">Digital spin, weights, refit, torque</td><td className="px-4 py-3 text-primary font-bold">£15</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Full set of 4 wheels</td><td className="px-4 py-3 text-gray-400">All four balanced, torqued, TPMS reset</td><td className="px-4 py-3 text-primary font-bold">£50</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Included with new tyre fitting</td><td className="px-4 py-3 text-gray-400">Standard with every fit</td><td className="px-4 py-3 text-primary font-bold">FREE</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Hidden weight (FIA) alloy mode</td><td className="px-4 py-3 text-gray-400">Adhesive weights inside the rim</td><td className="px-4 py-3 text-primary font-bold">No extra</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <HelpCircle className="text-primary w-7 h-7" /> Wheel Balancing — FAQs
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

            {/* Related Services */}
            <section className="bg-secondary/20 p-8 rounded-lg border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Other Mobile Services</h3>
              <div className="space-y-3">
                {[
                  { label: "Mobile Tyre Fitting", sub: "Supply & fit at your home, work or roadside", href: "/mobile-tyre-fitting-hemel-hempstead" },
                  { label: "24/7 Emergency Call-Out", sub: "Rapid response — we come to you in 30–60 mins", href: "/24-hour-emergency-mobile-tyre-fitting" },
                  { label: "Puncture Repair", sub: "Permanent BS AU 159 compliant repairs", href: "/mobile-puncture-repair-near-me" },
                  { label: "Car Battery Replacement", sub: "All battery types — AGM, EFB, standard", href: "/mobile-car-battery-replacement" },
                  { label: "Emergency Fuel Delivery", sub: "Petrol or diesel delivered 24/7", href: "/emergency-fuel-delivery" },
                  { label: "Locking Wheel Nut Removal", sub: "Safe removal without alloy damage", href: "/locking-wheel-nut-removal" },
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

            {/* Technical Detail */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Balancing Technology</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We use the latest generation of mobile balancers that offer:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Static and Dynamic balancing modes",
                  "Alloy wheel protection modes (hidden weights)",
                  "Laser-guided weight placement accuracy",
                  "Calibration for cars, vans, and 4x4s"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-secondary rounded-lg overflow-hidden border border-white/10 sticky top-24">
              <div className="p-8 text-center">
                <Settings className="w-16 h-16 text-primary mx-auto mb-6 animate-spin-slow" />
                <h3 className="text-xl font-bold text-white mb-4">Balancing vs Alignment</h3>
                <p className="text-sm text-gray-400 mb-6 text-left">
                  <strong>Balancing</strong> fixes vibration/wobble.<br /><br />
                  <strong>Alignment</strong> (Tracking) fixes the car pulling to one side.<br /><br />
                  We focus on balancing to ensure your tyres roll smoothly and last longer.
                </p>
                <a href="tel:07427515915" onClick={handlePhoneClick}>
                  <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold uppercase">
                    Book Balancing
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="text-primary w-5 h-5" /> Protect Your Investment
              </h4>
              <p className="text-sm text-gray-400">
                Driving with unbalanced wheels damages suspension components, wheel bearings, and steering racks. A small cost now saves big repair bills later.
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
