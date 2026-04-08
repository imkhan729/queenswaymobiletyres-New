import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, Fuel, AlertTriangle, Droplets, MapPin, Clock, Truck, CheckCircle, ChevronRight, HelpCircle, PoundSterling } from "lucide-react";
import heroImage from "@assets/generated_images/emergency_fuel_canister_pour.webp";
import { Link } from "wouter";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function EmergencyFuel() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Emergency Fuel Delivery",
    "name": "Emergency Fuel Delivery Hemel Hempstead & Hertfordshire",
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
    "description": "24/7 emergency petrol and diesel delivery to stranded drivers across Hemel Hempstead and a 30-mile radius of Hertfordshire, including the M1 and M25 corridors."
  };

  const faqs = [
    { q: "How much does emergency fuel delivery cost?", a: "Daytime delivery (08:00–20:00) is £45 plus the pump price of the fuel, typically 5 to 10 litres. Night delivery (20:00–08:00) is £75. The fee covers the technician's time, the safety jerry can, and on-site refuelling. We always quote the full price before dispatching." },
    { q: "How much fuel will you bring?", a: "We deliver enough fuel — usually 5 to 10 litres — to get you safely to the nearest petrol station. Our jerry cans are UN-approved for road transport of flammable liquids and we never carry more than the legal amount in any one vehicle." },
    { q: "What if I've put the wrong fuel in my car?", a: "Do NOT start the engine. Even cycling the ignition can pump contaminated fuel through the high-pressure pump and injectors, turning a £300 drain into a £4,000 repair. Call us immediately on 07427 515915 — we will arrange a misfuelling drain service either on-site or via a partner specialist." },
    { q: "Do you cover motorways?", a: "Yes, but if you have run out of fuel on a live motorway lane, please call 999 first and follow the operator's instructions to reach a place of safety. Once you are in a hard shoulder, emergency refuge area or service station, we can attend within 60 to 90 minutes for the M1, M25, M40 and A1(M)." },
    { q: "How long will it take you to reach me?", a: "Across our core area (Hemel Hempstead, Watford, St Albans, Luton, Aylesbury) the typical arrival time is 45 to 60 minutes. Outlying areas and motorway responses take 60 to 90 minutes." },
    { q: "Can you prime my diesel after running it dry?", a: "Yes. Most modern diesel engines need to bleed air out of the fuel lines before they will restart after running dry. Our technicians carry the tools to do this on-site for the majority of mainstream cars and vans." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Emergency Fuel Delivery Hemel Hempstead | 24/7 Petrol & Diesel Near Me"
        description="24/7 emergency fuel delivery near me — petrol & diesel brought to your car across Hemel Hempstead, Watford, St Albans, Luton, Aylesbury & the M1/M25 corridor. Run out of fuel? We come to you within 60 minutes. Call 07427 515915."
        keywords="emergency fuel delivery, emergency fuel delivery near me, run out of petrol Hemel Hempstead, fuel delivery near me, diesel delivery near me, petrol delivery, mobile fuel delivery, fuel delivery Watford, fuel delivery St Albans, fuel delivery Luton, M1 fuel delivery, M25 fuel rescue, mobile tyres and fuel, 24 hour fuel delivery Hertfordshire"
        image={heroImage}
        schema={[schema, faqSchema]}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Emergency petrol and diesel delivery to a stranded driver in Hemel Hempstead, Hertfordshire" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-sm uppercase tracking-wider mb-6">
              <AlertTriangle className="w-4 h-4" /> 24/7 Emergency Service
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              QUEENSWAY EMERGENCY <span className="text-primary">FUEL DELIVERY</span> HEMEL HEMPSTEAD
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Tank empty? Engine cut out? Don't risk walking down dangerous roads to a petrol station.
              We deliver Petrol and Diesel directly to your vehicle's location to get you moving again safely.
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
                  Get Help Online
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
              <h2 className="text-3xl font-heading font-bold text-white mb-6">24/7 Emergency Petrol &amp; Diesel Delivery in Hertfordshire</h2>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                Running out of fuel is one of those things drivers swear will never happen to them — until the trip computer reads zero, the engine cuts out, and the car coasts onto the verge. Faulty fuel gauges, unexpected diversions, last-minute motorway delays and busy schedules account for thousands of "out of fuel" call-outs across the UK every week. Queensway Mobile Tyres exists to make sure that one of those moments doesn't ruin your day.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                We deliver UN-approved jerry cans of unleaded petrol or white diesel — typically 5 to 10 litres, which is enough to safely reach the nearest forecourt and fill up properly. Our technicians carry the right safety equipment, the right paperwork, and the experience to refuel a car on a roadside or in a car park without putting you, your vehicle or other road users at risk. For diesel cars that have run completely dry, we can also bleed and prime the fuel system so the engine restarts cleanly without damaging the high-pressure pump.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Operating 24 hours a day, 365 days a year, we cover a 30-mile radius from our Hemel Hempstead base — Watford, St Albans, Luton, Aylesbury, Berkhamsted, Tring, Harpenden and the M1/M25/M40 corridors. If you're stranded right now, call <a href="tel:07427515915" onClick={handlePhoneClick} className="text-primary hover:underline font-bold">07427 515915</a> — typical arrival is 45 to 60 minutes. If you have put the wrong fuel in your car, do <strong className="text-white">not</strong> start the engine: read our <Link href="/blog" className="text-primary hover:underline">misfuelling guide</Link> first.
              </p>
            </section>

            {/* Services Grid */}
            <section className="grid sm:grid-cols-2 gap-6">
              <div className="bg-secondary/30 p-6 rounded-lg border border-white/5 group hover:border-primary/50 transition-colors">
                <Fuel className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Unleaded Petrol</h3>
                <p className="text-gray-400 text-sm">
                  We carry standard unleaded petrol suitable for all petrol cars and vans. Delivered in safety-compliant jerry cans.
                </p>
              </div>
              <div className="bg-secondary/30 p-6 rounded-lg border border-white/5 group hover:border-primary/50 transition-colors">
                <Truck className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Diesel</h3>
                <p className="text-gray-400 text-sm">
                  We supply white diesel for cars and light commercial vehicles. We can also help prime the fuel system if air has entered the lines.
                </p>
              </div>
              <div className="bg-secondary/30 p-6 rounded-lg border border-white/5 group hover:border-primary/50 transition-colors">
                <Droplets className="w-10 h-10 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Wrong Fuel?</h3>
                <p className="text-gray-400 text-sm">
                  Put petrol in a diesel? <span className="text-white font-bold">Do not start the engine!</span> Call us immediately. We can arrange for a fuel drain service.
                </p>
              </div>
              <div className="bg-secondary/30 p-6 rounded-lg border border-white/5 group hover:border-primary/50 transition-colors">
                <AlertTriangle className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Roadside Safety</h3>
                <p className="text-gray-400 text-sm">
                  Stay safe inside your car. Our technicians are trained to refuel vehicles safely on the roadside, minimizing risk to you and other drivers.
                </p>
              </div>
            </section>

            {/* Why Call Us */}
            <section className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Why Choose Our Fuel Service?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <Clock className="text-primary w-5 h-5 flex-shrink-0" />
                  <span><strong>Rapid Response:</strong> We aim to reach you within 60 minutes.</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
                  <span><strong>Wide Coverage:</strong> 30-mile radius from Hemel Hempstead — Watford, St Albans, Luton, Aylesbury and the M1/M25 corridors.</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  <span><strong>System Priming:</strong> Diesel engines often need 'priming' after running dry. Our technicians know how to do this.</span>
                </li>
              </ul>
            </section>

            {/* Pricing */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                <PoundSterling className="text-primary w-7 h-7" /> Emergency Fuel Delivery Pricing
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">All prices are quoted in full before we dispatch. The fuel itself is charged at pump price with no markup — you only pay for what we deliver.</p>
              <div className="overflow-x-auto rounded-lg border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/60 text-white uppercase text-xs tracking-wider">
                    <tr><th className="px-4 py-3">Service</th><th className="px-4 py-3">Hours</th><th className="px-4 py-3">From</th></tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr><td className="px-4 py-3 text-gray-300">Daytime petrol or diesel delivery</td><td className="px-4 py-3 text-gray-400">08:00–20:00</td><td className="px-4 py-3 text-primary font-bold">£45 + fuel</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Night fuel delivery</td><td className="px-4 py-3 text-gray-400">20:00–08:00</td><td className="px-4 py-3 text-primary font-bold">£75 + fuel</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Motorway response (M1/M25/M40)</td><td className="px-4 py-3 text-gray-400">24/7</td><td className="px-4 py-3 text-primary font-bold">£65 + fuel</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Misfuelling drain (referral)</td><td className="px-4 py-3 text-gray-400">24/7</td><td className="px-4 py-3 text-primary font-bold">From £250</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <HelpCircle className="text-primary w-7 h-7" /> Emergency Fuel — FAQs
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
              <p className="text-sm text-gray-500 mt-6">
                For motorway breakdown safety see the official <a href="https://www.gov.uk/highway-code/breakdowns-and-incidents" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Highway Code rules 274–278</a>.
              </p>
            </section>
          </div>

            {/* Related Services */}
            <section className="bg-secondary/20 p-8 rounded-lg border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Our Other Mobile Services</h3>
              <div className="space-y-3">
                {[
                  { label: "Mobile Tyre Fitting", sub: "Same-day tyre supply & fit at your location", href: "/mobile-tyre-fitting-hemel-hempstead" },
                  { label: "24/7 Emergency Call-Out", sub: "Flat tyre? Blowout? 30–60 min response", href: "/24-hour-emergency-mobile-tyre-fitting" },
                  { label: "Puncture Repair", sub: "BS AU 159 standard permanent repairs", href: "/mobile-puncture-repair-near-me" },
                  { label: "Wheel Balancing", sub: "Digital balancing at your driveway", href: "/mobile-wheel-balancing" },
                  { label: "Car Battery Replacement", sub: "Dead battery? We supply & fit on-site", href: "/mobile-car-battery-replacement" },
                  { label: "Locking Wheel Nut Removal", sub: "Lost your key? No alloy damage", href: "/locking-wheel-nut-removal" },
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
              <div className="mt-4">
                <Link href="/locations" className="text-primary hover:underline text-sm font-bold">View all coverage areas →</Link>
              </div>
            </section>

          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-secondary p-8 rounded-lg border border-white/10 sticky top-24 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Urgent Assistance</h3>
              <p className="text-gray-400 mb-6 text-sm">
                If you are in a dangerous location (live lane of a motorway), please call 999 first. For safe roadside locations, call us:
              </p>
              <a href="tel:07427515915" onClick={handlePhoneClick}>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-14 uppercase text-lg animate-pulse">
                  <Phone className="mr-2 w-5 h-5" /> 07427 515915
                </Button>
              </a>
              <p className="mt-2 text-[10px] text-gray-500 uppercase tracking-widest">Alt: 07988 018865</p>
              <p className="mt-4 text-xs text-gray-500">
                Available 24 hours a day, 7 days a week.
              </p>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg border border-white/5">
              <h4 className="font-bold text-white mb-2">Other Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/mobile-tyre-fitting-hemel-hempstead" className="text-primary hover:underline">Mobile Tyre Fitting</Link></li>
                <li><Link href="/mobile-car-battery-replacement" className="text-primary hover:underline">Battery Jump Start</Link></li>
                <li><Link href="/24-hour-emergency-mobile-tyre-fitting" className="text-primary hover:underline">Emergency Breakdown</Link></li>
              </ul>
            </div>
          </div>

        </div>
      <Footer />
    </div>
  );
}
