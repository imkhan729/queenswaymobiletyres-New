import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, BatteryCharging, CheckCircle, AlertTriangle, Zap, Truck, MapPin, ChevronRight, HelpCircle, PoundSterling } from "lucide-react";
import heroImage from "@assets/generated_images/car_battery_replacement_at_home.webp";
import batteryImage from "@assets/generated_images/car_battery_installation_close_up.webp";
import { Link } from "wouter";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function BatteryReplacement() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Car Battery Replacement",
    "name": "Mobile Car Battery Replacement Hemel Hempstead & Hertfordshire",
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
    "description": "Mobile car battery supply and fit at your home, workplace or roadside across Hemel Hempstead and a 30-mile radius of Hertfordshire. AGM, EFB and Start-Stop batteries for all makes and models."
  };

  const faqs = [
    { q: "How much does a mobile car battery replacement cost?", a: "All-in pricing starts from £85 for a small petrol hatchback (e.g. Fiesta, Corsa, Polo) and rises to £140–£180 for a Start-Stop EFB battery and £180–£260 for a premium AGM battery (typical of BMW, Audi, Mercedes, Range Rover). The price always includes the new battery, fitting labour, BMS coding/registration where required, and free disposal of the old battery." },
    { q: "Do you fit AGM and Start-Stop batteries?", a: "Yes. We carry AGM (Absorbent Glass Mat) and EFB (Enhanced Flooded Battery) units for all major Start-Stop vehicles. These are not interchangeable with conventional flooded batteries — we'll always check your VIN before quoting to make sure you get the correct chemistry." },
    { q: "Do modern cars need the new battery 'coded' to the ECU?", a: "Yes — most cars built after 2010 require the new battery to be registered with the Battery Management System (BMS) so the alternator knows the correct charge profile. Without coding, the new battery will be over- or under-charged and its life will be cut in half. Our technicians carry the diagnostic tools to perform this BMS reset on every fitting." },
    { q: "Will I lose my radio codes, seat memory or settings?", a: "No. We connect a memory-saver power supply through the OBD port before disconnecting the battery, so all stored data — radio codes, seat positions, sat-nav, steering angle calibration and ECU adaptations — is preserved. You drive away with the car exactly as it was." },
    { q: "Is the battery covered by warranty?", a: "Yes. Every battery we fit comes with a 3 to 5-year manufacturer warranty depending on the brand (we typically supply Yuasa, Bosch, Varta and Exide). We register the warranty in your name on the day of fitting." },
    { q: "How quickly can you reach me if my car won't start?", a: "Our average emergency arrival time across Hemel Hempstead, Watford, St Albans, Luton and Aylesbury is 45–60 minutes. If you're in a supermarket car park or on a driveway and the car simply won't crank, call 07427 515915 — we'll bring a tester first to confirm it's the battery and not the alternator." },
    { q: "Can I just have a jump start instead?", a: "Sometimes — if the battery has gone flat from leaving lights on overnight but is otherwise healthy, a jump start and a 30-minute drive may be enough. We offer a £35 mobile jump-start service. If our on-site CCA test shows the battery is genuinely failing, we'll quote for replacement on the spot." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Mobile Car Battery Replacement Hemel Hempstead | Battery Near Me 24/7"
        description="Mobile car battery replacement near me — supplied & fitted at your home, work or roadside. AGM, EFB, Start-Stop & diesel batteries. Free jump-start across Hemel Hempstead, Watford, St Albans, Luton, Aylesbury & 30-mile radius. Call 07427 515915."
        keywords="mobile car battery replacement, mobile car battery near me, car battery Hemel Hempstead, mobile battery fitting, car battery near me, battery replacement near me, jump start near me, AGM battery, EFB battery, start stop battery, mobile car battery Watford, mobile car battery St Albans, mobile car battery Luton, 24 hour mobile battery, mobile tyres and batteries"
        image={heroImage}
        schema={[schema, faqSchema]}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Mobile car battery replacement at a driveway in Hemel Hempstead, Hertfordshire" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              QUEENSWAY MOBILE CAR <span className="text-primary">BATTERY REPLACEMENT</span> HEMEL HEMPSTEAD
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Car won't start? Don't get towed to a garage. We bring a new, high-quality battery directly to you.
              Our expert technicians supply and fit batteries for all vehicle makes and models at your home, work, or roadside.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col">
                <a href="tel:07427515915" onClick={handlePhoneClick}>
                  <Button size="lg" className="bg-primary text-black font-bold uppercase h-14 px-8 hover:bg-primary/90">
                    <Phone className="mr-2 w-5 h-5" /> Call for Battery: 07427 515915
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
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Mobile Car Battery Replacement Across Hertfordshire</h2>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                Flat battery, dead car, sinking heart. It's the second most common breakdown call in the UK after punctures, and almost always at the worst possible time — first thing on a freezing January morning, or in a supermarket car park with frozen shopping in the boot. Queensway Mobile Tyres will be at your door, fully equipped, in 45 to 60 minutes with the right battery for your exact vehicle.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Choosing the right replacement battery used to be simple. Modern cars have made it anything but. A 2024 BMW 3-Series, a Land Rover Discovery and a Ford Fiesta all need completely different battery chemistries — flooded, EFB or AGM — and most cars built after 2010 also need the new battery to be electronically registered to the Battery Management System (BMS). Fitting the wrong type, or skipping the BMS coding step, will halve the life of an expensive new battery and can stop the Start-Stop system from working altogether. We get this right every time because it's all we do.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We supply premium batteries from Yuasa, Bosch, Varta and Exide, all with a 3 to 5-year manufacturer warranty. Every fitting includes a full pre-test of the alternator and starter motor (so you don't pay for a new battery if the alternator is the real problem), a memory-saver to preserve your radio codes and seat memory, BMS registration via OBD diagnostics, and free recycling of the old battery through a licensed Environment Agency channel. For background on UK battery disposal rules see <a href="https://www.gov.uk/electrical-waste-producer-supplier-responsibilities" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GOV.UK guidance</a>.
              </p>
            </section>

            {/* Diagnostic Process */}
            <section className="bg-secondary/30 p-8 rounded-lg border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <BatteryCharging className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">We Test Before We Replace</h3>
              </div>
              <p className="text-gray-300 mb-6">
                We don't just swap parts blindly. Sometimes a "dead battery" is actually a symptom of a faulty alternator or a parasitic drain. Our process includes:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Battery Health Check (CCA testing)",
                  "Alternator Charging Rate Test",
                  "Starter Motor Draw Test",
                  "Code Clearing (BMS Reset for modern cars)",
                  "Safe Disposal of Old Battery"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Coverage Areas */}
            <section className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Battery Replacement Coverage Areas</h3>
              <p className="text-gray-400 mb-4 text-sm">We supply and fit car batteries at your location across all of our service area. AGM, EFB, and Start-Stop batteries available for all makes and models:</p>
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
              <Link href="/locations" className="text-primary hover:underline text-sm font-bold">View full coverage map →</Link>
            </section>

            {/* Pricing */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                <PoundSterling className="text-primary w-7 h-7" /> Mobile Battery Replacement Prices
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">All prices include the new battery, on-site fitting, BMS coding, memory saver, free old-battery disposal, and a 3 to 5-year manufacturer warranty.</p>
              <div className="overflow-x-auto rounded-lg border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/60 text-white uppercase text-xs tracking-wider">
                    <tr><th className="px-4 py-3">Vehicle type</th><th className="px-4 py-3">Battery type</th><th className="px-4 py-3">Fitted price</th></tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr><td className="px-4 py-3 text-gray-300">Small petrol hatchback</td><td className="px-4 py-3 text-gray-400">Standard flooded (60Ah)</td><td className="px-4 py-3 text-primary font-bold">£85 – £110</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Mid-size saloon / estate</td><td className="px-4 py-3 text-gray-400">EFB Start-Stop (70–75Ah)</td><td className="px-4 py-3 text-primary font-bold">£140 – £180</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Premium / SUV / 4×4</td><td className="px-4 py-3 text-gray-400">AGM Start-Stop (80–95Ah)</td><td className="px-4 py-3 text-primary font-bold">£180 – £260</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Diesel van / commercial</td><td className="px-4 py-3 text-gray-400">Heavy-duty (100Ah+)</td><td className="px-4 py-3 text-primary font-bold">£160 – £230</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Mobile jump-start only</td><td className="px-4 py-3 text-gray-400">Battery still healthy</td><td className="px-4 py-3 text-primary font-bold">£35</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <HelpCircle className="text-primary w-7 h-7" /> Battery Replacement — FAQs
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
                  { label: "Mobile Tyre Fitting", sub: "Same-day supply & fit at your location", href: "/mobile-tyre-fitting-hemel-hempstead" },
                  { label: "24/7 Emergency Call-Out", sub: "Stranded? We reach you in 30–60 mins", href: "/24-hour-emergency-mobile-tyre-fitting" },
                  { label: "Puncture Repair", sub: "Permanent BS AU 159 compliant repairs", href: "/mobile-puncture-repair-near-me" },
                  { label: "Wheel Balancing", sub: "Digital precision balancing at your door", href: "/mobile-wheel-balancing" },
                  { label: "Emergency Fuel Delivery", sub: "Petrol & diesel delivered to you 24/7", href: "/emergency-fuel-delivery" },
                  { label: "Locking Wheel Nut Removal", sub: "Lost your key? Safe removal guaranteed", href: "/locking-wheel-nut-removal" },
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

            {/* Symptoms */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Signs Your Battery Is Failing</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-secondary/20 p-4 rounded border border-white/5">
                  <Zap className="w-8 h-8 text-yellow-500 mb-3" />
                  <h4 className="font-bold text-white mb-2">Slow Cranking</h4>
                  <p className="text-sm text-gray-400">Engine turns over slowly or struggles to start on cold mornings.</p>
                </div>
                <div className="bg-secondary/20 p-4 rounded border border-white/5">
                  <AlertTriangle className="w-8 h-8 text-red-500 mb-3" />
                  <h4 className="font-bold text-white mb-2">Warning Light</h4>
                  <p className="text-sm text-gray-400">Red battery symbol on dashboard usually indicates charging issues.</p>
                </div>
                <div className="bg-secondary/20 p-4 rounded border border-white/5">
                  <BatteryCharging className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold text-white mb-2">Old Age</h4>
                  <p className="text-sm text-gray-400">Most batteries last 3-5 years. If yours is older, it may be time to change.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-secondary rounded-lg overflow-hidden border border-white/10">
              <img src={batteryImage} alt="Professional Battery Installation" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">Professional Installation</h4>
                <p className="text-sm text-gray-400 mb-4">
                  Modern cars often require 'coding' new batteries to the ECU. Our technicians have the diagnostic tools to perform this essential step.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase">
                  <Truck className="w-4 h-4" /> We Come To You
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Need A Jump Start?</h3>
              <p className="text-gray-400 mb-6 text-sm">
                If your battery is just flat from leaving lights on, we offer a cheaper jump-start service to get you moving again.
              </p>
              <a href="tel:07427515915" onClick={handlePhoneClick}>
                <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold h-12 uppercase">
                  Call for Assistance
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
