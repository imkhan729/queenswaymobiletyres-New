import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Wrench, ShieldCheck, HelpCircle, AlertTriangle, MapPin, ChevronRight, PoundSterling } from "lucide-react";
import heroImage from "@assets/generated_images/mechanic_repairing_a_puncture_on_a_roadside.webp";
import tyreImage from "@assets/generated_images/close_up_of_car_tyre_tread.webp";
import { Link } from "wouter";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function PunctureRepair() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Puncture Repair",
    "name": "Mobile Puncture Repair — Hemel Hempstead & Hertfordshire",
    "provider": {
      "@type": "AutoRepair",
      "@id": "https://www.queenswaymobiletyres.co.uk/#business",
      "name": "Queensway Mobile Tyres",
      "telephone": "+447427515915",
      "priceRange": "£",
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
    "description": "Safe, permanent mobile puncture repair from £25. BS AU 159 compliant repairs at your home, workplace or roadside across Hemel Hempstead and a 30-mile radius of Hertfordshire."
  };

  const faqs = [
    { q: "How much does a mobile puncture repair cost?", a: "Our flat rate for a BS AU 159g compliant puncture repair is £25 for cars and small vans. This includes removing the wheel, demounting the tyre, internal inspection, fitting the mushroom plug-patch, rebalancing the wheel, refitting and torquing it back to the manufacturer specification. There is no call-out fee within 30 miles of Hemel Hempstead." },
    { q: "How long does a puncture repair take?", a: "About 25 to 30 minutes per tyre from arrival to handover. The repair itself takes around 15 minutes, and the rest is dismount, internal inspection, balance and refit." },
    { q: "Are your repairs permanent?", a: "Yes. Unlike rope-style 'string plugs' that some roadside services use, we apply a vulcanised mushroom plug-patch from the inside of the tyre. This is the only method approved under BS AU 159g and it lasts the remaining life of the tyre. We do not use external plug-only repairs except as a temporary get-you-home in genuine emergencies." },
    { q: "Where on the tyre can a puncture be repaired?", a: "Only in the central 75% of the tread (the 'minor repair area' as defined in BS AU 159g). Damage on the sidewall or shoulder cannot be safely repaired and the tyre must be replaced. Punctures must also be smaller than 6mm in diameter." },
    { q: "Can you repair run-flat tyres?", a: "Manufacturers including BMW, Mercedes, MINI, Pirelli and Michelin do not recommend repairing run-flat tyres because once they have been driven on while flat, the internal sidewall structure may be heat-damaged in ways that cannot be inspected from outside. We will assess each one case by case and replace where there is any doubt about safety. See our guide on <a href='/blog/run-flat-tyres-explained'>run-flat tyres explained</a>." },
    { q: "What if my tyre cannot be repaired?", a: "We always carry a stock of tyres on the van, so if a repair is not safe or not possible we can fit a brand-new tyre on the spot at our standard <a href='/mobile-tyre-fitting-hemel-hempstead'>mobile fitting rate</a>. You're never left stranded." },
    { q: "Will the repair affect my speed rating or warranty?", a: "A correctly performed BS AU 159g repair preserves the original speed and load rating of the tyre. We issue a written record of every repair so you can present it for warranty or insurance purposes if needed." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/<[^>]+>/g, '') } }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How a Mobile Puncture Repair is Carried Out",
    "totalTime": "PT30M",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "GBP", "value": "25" },
    "step": [
      { "@type": "HowToStep", "name": "Inspect the damage", "text": "We jack the vehicle, remove the wheel and locate the puncture using soapy water." },
      { "@type": "HowToStep", "name": "Demount the tyre", "text": "The tyre is demounted from the rim on our on-board changer to allow internal inspection." },
      { "@type": "HowToStep", "name": "Internal inspection", "text": "We check the inner liner for run-flat damage, sidewall bruises or any sign of structural failure." },
      { "@type": "HowToStep", "name": "Apply the patch-plug", "text": "A mushroom-style vulcanised patch-plug is fitted from inside the tyre, sealing both the puncture channel and the inner liner." },
      { "@type": "HowToStep", "name": "Rebalance and refit", "text": "The tyre is remounted, electronically balanced, refitted to the hub and torqued to manufacturer specification. TPMS reset and old-tyre disposal complete the job." }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Mobile Puncture Repair Hemel Hempstead | Flat Tyre Repair Near Me from £25"
        description="Mobile puncture repair near me from £25 — flat tyre fixed at your home, work or roadside. BS AU 159 compliant plug & patch repairs across Hemel Hempstead, Watford, St Albans, Luton & Aylesbury. Save the cost of a new tyre. Call 07427 515915."
        keywords="mobile puncture repair, mobile puncture repair near me, puncture repair Hemel Hempstead, flat tyre repair near me, tyre repair near me, mobile tyre repair, mobile tyres puncture, puncture repair Watford, puncture repair St Albans, puncture repair Luton, puncture repair cost, BSAU159 plug and patch, mobile tyres Hertfordshire, flat tyre fix"
        image={heroImage}
        schema={[schema, howToSchema, faqSchema]}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Mobile puncture repair technician plugging a tyre in Hemel Hempstead" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              QUEENSWAY MOBILE <span className="text-primary">PUNCTURE REPAIR</span> HEMEL HEMPSTEAD
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't replace it if you can repair it. We offer safe, permanent, and British Standard compliant puncture repairs at your location.
              Save money and reduce waste with our expert mobile repair service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col">
                <a href="tel:07427515915" onClick={handlePhoneClick}>
                  <Button size="lg" className="bg-primary text-black font-bold uppercase h-14 px-8 hover:bg-primary/90">
                    <Phone className="mr-2 w-5 h-5" /> Repair My Tyre: 07427 515915
                  </Button>
                </a>
                <p className="mt-2 text-[10px] text-gray-500 uppercase tracking-widest text-center sm:text-left">Secondary: 07988 018865</p>
              </div>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 uppercase w-full sm:w-auto">
                  Online Enquiry
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
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Permanent Mobile Puncture Repair to British Standards</h2>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                A nail in the tread does not have to mean a brand-new tyre. In around four out of every five cases we attend in Hemel Hempstead, Watford and St Albans, the puncture is small, central and the tyre is otherwise sound — which means we can carry out a permanent BS AU 159g compliant repair from <strong className="text-white">£25</strong>, save you the cost of a replacement, and have you back on the road in under thirty minutes.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Queensway repairs are not the rope-style "string plugs" you sometimes see at petrol stations or sold in DIY kits. A string plug is, at best, a temporary measure to limp a tyre to a workshop. We strictly follow <strong>BS AU 159g</strong> — the British Standard that governs tyre repairs in the UK and the same standard the AA, RAC and major fast-fit chains are required to work to. That means every repair starts with removing the tyre from the wheel so we can inspect the inside for hidden damage, and finishes with a vulcanised mushroom plug-patch fitted from the inside of the tyre. The result is a repair that lasts the rest of the tyre's life and preserves the original speed and load rating.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Whatever the location — driveway, office car park or hard shoulder — our mobile workshop has everything needed to complete the job in one visit. We carry vulcanising solution, a range of mushroom patch-plug sizes, fresh valves, and a full replacement tyre stock just in case the damage turns out to be unrepairable. Either way, you don't move your vehicle until you have a fully road-legal tyre fitted. For more on the law, see the official <a href="https://www.gov.uk/tyres-and-the-law" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GOV.UK tyres and the law</a> guidance.
              </p>
            </section>

            {/* Repair Criteria */}
            <section className="bg-secondary/30 rounded-lg p-8 border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">Is Your Tyre Repairable?</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-900/10 border border-green-500/30 p-6 rounded">
                  <h4 className="text-xl font-bold text-green-500 mb-4 flex items-center"><CheckCircle className="mr-2" /> YES - We Can Repair If:</h4>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" /> Damage is within the central 3/4 of the tread (Minor Repair Area).</li>
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" /> Puncture diameter is less than 6mm.</li>
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" /> Entry angle allows for safe plugging.</li>
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" /> Tyre has not been driven on while flat (run-flat damage).</li>
                  </ul>
                </div>
                <div className="bg-red-900/10 border border-red-500/30 p-6 rounded">
                  <h4 className="text-xl font-bold text-red-500 mb-4 flex items-center"><AlertTriangle className="mr-2" /> NO - Replacement Needed If:</h4>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500" /> Damage is on the sidewall or shoulder of the tyre.</li>
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500" /> Internal sidewall shows signs of overheating (run-flat).</li>
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500" /> Tyre tread is below legal limit (1.6mm).</li>
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500" /> Previous bad repairs exist in the same area.</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-400 mt-6 text-sm italic">
                *We always bring a replacement tyre with us just in case a repair is not safe or possible, ensuring you are never left stranded.
              </p>
            </section>

            {/* Areas We Cover */}
            <section className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Puncture Repair Coverage Areas</h3>
              <p className="text-gray-400 mb-4 text-sm">We carry out BS AU 159 compliant puncture repairs at your location across our full service area. Our mobile workshop reaches you within 30–60 minutes:</p>
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
              <Link href="/locations" className="text-primary hover:underline text-sm font-bold">View all coverage areas →</Link>
            </section>

            {/* Pricing */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                <PoundSterling className="text-primary w-7 h-7" /> Mobile Puncture Repair Pricing
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our pricing is flat and transparent. Cars and small vans pay one fixed rate per repair, with no hidden extras for the patch, the balance, the valve or the disposal.
              </p>
              <div className="overflow-x-auto rounded-lg border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/60 text-white uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-4 py-3">Vehicle</th>
                      <th className="px-4 py-3">What's included</th>
                      <th className="px-4 py-3">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr><td className="px-4 py-3 text-gray-300">Car / small van (up to 18")</td><td className="px-4 py-3 text-gray-400">BS AU 159 patch-plug, balance, valve, TPMS reset</td><td className="px-4 py-3 text-primary font-bold">£25</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">4×4 / SUV / large van</td><td className="px-4 py-3 text-gray-400">As above, larger fitments</td><td className="px-4 py-3 text-primary font-bold">£35</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">UHP / low-profile 19"+</td><td className="px-4 py-3 text-gray-400">As above, performance handling</td><td className="px-4 py-3 text-primary font-bold">£40</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">If repair not safe — replacement tyre</td><td className="px-4 py-3 text-gray-400">Full <Link href="/mobile-tyre-fitting-hemel-hempstead" className="text-primary hover:underline">mobile fitting</Link> on the spot</td><td className="px-4 py-3 text-primary font-bold">From £55</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <HelpCircle className="text-primary w-7 h-7" /> Puncture Repair — FAQs
              </h3>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <details key={i} className="group bg-secondary/30 rounded-lg border border-white/10 overflow-hidden">
                    <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4 hover:bg-secondary/50 transition-colors">
                      <span className="text-white font-bold text-base">{f.q}</span>
                      <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4" dangerouslySetInnerHTML={{ __html: f.a }} />
                  </details>
                ))}
              </div>
            </section>

            {/* Related Services */}
            <section className="bg-secondary/20 p-8 rounded-lg border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Other Mobile Services</h3>
              <div className="space-y-3">
                {[
                  { label: "Mobile Tyre Fitting", sub: "Full supply & fit service at your location", href: "/mobile-tyre-fitting-hemel-hempstead" },
                  { label: "24/7 Emergency Call-Out", sub: "Rapid roadside response — 30–60 mins", href: "/24-hour-emergency-mobile-tyre-fitting" },
                  { label: "Wheel Balancing", sub: "Digital balancing for smooth, safe driving", href: "/mobile-wheel-balancing" },
                  { label: "Car Battery Replacement", sub: "AGM, EFB & standard batteries", href: "/mobile-car-battery-replacement" },
                  { label: "Emergency Fuel Delivery", sub: "Petrol & diesel to your location 24/7", href: "/emergency-fuel-delivery" },
                  { label: "Locking Wheel Nut Removal", sub: "Lost key? No alloy damage guaranteed", href: "/locking-wheel-nut-removal" },
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

            {/* Why Repair */}
            <section className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <Wrench className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Cost Effective</h4>
                  <p className="text-gray-400">
                    A puncture repair is significantly cheaper than buying a brand new tyre, especially for high-performance or run-flat tyres.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Environmentally Friendly</h4>
                  <p className="text-gray-400">
                    Repairing extends the life of your tyre, reducing waste and the environmental impact of manufacturing new tyres.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: FAQs & Contact */}
          <div className="space-y-8">
            <div className="bg-secondary p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <HelpCircle className="text-primary w-5 h-5" /> Common Questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Can you repair Run-Flat tyres?</h4>
                  <p className="text-gray-400 text-sm">Most manufacturers do not recommend repairing run-flat tyres as it's difficult to assess internal structure damage. We generally recommend replacement for safety.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">How long does it take?</h4>
                  <p className="text-gray-400 text-sm">A professional puncture repair usually takes about 20-30 minutes per tyre.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Is the repair permanent?</h4>
                  <p className="text-gray-400 text-sm">Yes, our mushroom plug patch repairs are permanent and last the remaining life of the tyre.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Got a Flat?</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Send us a photo of the damage on WhatsApp and we can give you an instant assessment.
              </p>
              <a href="https://wa.me/447427515915" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-12 uppercase">
                  WhatsApp Photo
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
