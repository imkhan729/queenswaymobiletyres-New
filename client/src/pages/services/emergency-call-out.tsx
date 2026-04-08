import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, Clock, ShieldAlert, MapPin, CheckCircle, Wrench, ChevronRight, HelpCircle, PoundSterling } from "lucide-react";
import heroImage from "@assets/generated_images/mechanic_repairing_a_puncture_on_a_roadside.webp";
import { Link } from "wouter";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function EmergencyCallOut() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "name": "24/7 Emergency Mobile Tyre Fitting — Hemel Hempstead & Herts",
    "provider": {
      "@type": "AutoRepair",
      "@id": "https://www.queenswaymobiletyres.co.uk/#business",
      "name": "Queensway Mobile Tyres",
      "telephone": "+447427515915",
      "openingHours": "Mo-Su 00:00-23:59",
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
      {"@type": "City", "name": "Aylesbury"},
      {"@type": "AdministrativeArea", "name": "Hertfordshire"}
    ],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "description": "24/7 emergency mobile tyre fitting and roadside assistance based in Hemel Hempstead. Typical 30-60 minute response across a 30-mile radius covering Hertfordshire, Beds, Bucks and the M1/M25/M40."
  };

  const faqs = [
    { q: "How fast can you reach me in an emergency?", a: "Across our core service area — Hemel Hempstead, Watford, St Albans, Luton and Aylesbury — our typical arrival time is 30 to 60 minutes, day or night. Outlying areas (Milton Keynes, North London, Slough) take up to 90 minutes. We dispatch the nearest available van the moment you call, and you'll get a live ETA before we set off." },
    { q: "How much does an emergency call-out cost?", a: "Daytime call-outs (08:00–20:00) start from £40 plus the cost of any tyre or part. Night call-outs (20:00–08:00) start from £80. Both fees include the labour to fit a new tyre, a fresh valve, balance, TPMS reset and old-tyre disposal — there is nothing extra to pay on top." },
    { q: "Do you cover the M1, M25 and other motorways?", a: "Yes. We attend the M1 between Junctions 4 and 11, the M25 between Junctions 17 and 25, the A41, the A1(M) and the M40 around High Wycombe. For motorway breakdowns please first move to a safe place — ideally an emergency refuge area or service station — and call 999 if you cannot reach safety." },
    { q: "What information do you need from me?", a: "Your exact location (a WhatsApp location pin is best), your tyre size from the sidewall (e.g. 225/45 R17), your vehicle make and model, and a contact number. If you have a locking wheel nut, please tell us — we carry universal removal tools either way." },
    { q: "Can you help if my car has been driven on a flat?", a: "Yes, but driving on a fully flat tyre will usually destroy it beyond repair and may damage the wheel rim. If that has happened we will fit a replacement on the spot. Standard tyres can never be re-used after being driven flat, and run-flat tyres should only be driven up to 50 miles at 50 mph max before replacement." },
    { q: "Do you work on Christmas Day, bank holidays and overnight?", a: "Yes — 24 hours a day, 365 days a year, including all bank holidays and the Christmas/New Year period. There is no surcharge for bank holidays beyond the standard night-rate fee if applicable." },
    { q: "What payment methods do you accept on-site?", a: "Card (Visa, Mastercard, Amex), Apple Pay, Google Pay, contactless, bank transfer and cash. You'll get a VAT receipt by email immediately after payment." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="24 Hour Mobile Tyres Hemel Hempstead | Emergency Mobile Tyre Fitting Near Me"
        description="24/7 emergency mobile tyres near me — flat tyre, blowout or roadside breakdown? We come to you across Hemel Hempstead, Watford, St Albans, Luton, Aylesbury, M1 & M25 within 30–60 minutes. No call-out fee. Call 07427 515915."
        keywords="24 hour mobile tyres, emergency mobile tyres, mobile tyres near me, 24/7 mobile tyre fitting, emergency tyre fitting Hemel Hempstead, mobile tyre fitter near me, night mobile tyres, roadside tyre fitting, M1 emergency tyres, M25 emergency tyres, mobile tyres Watford, mobile tyres St Albans, mobile tyres Luton, emergency puncture repair, blowout roadside, 24 hour tyre fitter Hertfordshire"
        image={heroImage}
        schema={[schema, faqSchema]}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-red-950/30 relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Emergency roadside tyre fitting technician in Hemel Hempstead, Hertfordshire" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500 text-red-500 mb-8 animate-pulse">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider">24/7 Emergency Response Team Active</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              QUEENSWAY 24/7 EMERGENCY <span className="text-red-500">MOBILE TYRES NEAR ME</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Stranded with a flat tyre or blowout? Don't panic. Our emergency response team is on standby 24 hours a day to get you back on the road safely and quickly.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:07427515915" onClick={handlePhoneClick}>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase h-16 px-10 text-xl shadow-[0_0_30px_rgba(220,38,38,0.4)] w-full sm:w-auto">
                  <Phone className="mr-3 w-6 h-6 animate-bounce" /> CALL NOW: 07427 515915
                </Button>
              </a>
              <a href="https://wa.me/447427515915" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-16 px-8 uppercase w-full sm:w-auto">
                  WhatsApp Location
                </Button>
              </a>
            </div>

            <p className="mt-6 text-gray-400 font-medium flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-red-500" /> Average Response Time: <span className="text-white">30-60 Minutes</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left Column */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-heading font-bold text-white mb-6">24/7 Emergency Mobile Tyre Fitting Across Hertfordshire</h2>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                A puncture, blowout or flat tyre never happens at a convenient time. It happens at 11pm on a Tuesday, on the hard shoulder of the M25, in the rain, with a meeting at 9am the next morning. Queensway Mobile Tyres exists for exactly that moment — a fully-equipped emergency mobile tyre service operating 24 hours a day, 365 days a year, from our Hemel Hempstead base across the whole of Hertfordshire and the surrounding counties.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Most national breakdown services will either tow you to the nearest garage (which is almost certainly closed at night) or provide a temporary tyre inflator and send you on your way to find help in the morning. We do neither. Every Queensway emergency van carries a full workshop on board — a tyre changer, a digital balancer, an air compressor, a stock of valves and weights, and crucially, a mobile catalogue of <Link href="/mobile-tyre-fitting-hemel-hempstead" className="text-primary hover:underline">tyres in every common UK size</Link>. We arrive, we fit, you drive away. The whole job is usually finished within 45 minutes of pulling up alongside you.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our emergency response area covers a 30-mile radius from Hemel Hempstead, including the M1 (Junctions 4–11), the M25 (Junctions 17–25), the A41, the A1(M) and the A5. If you've broken down near an Ikea, a service station, a pub car park or a country lane between Tring and Berkhamsted, we've almost certainly attended that exact spot before. Call <a href="tel:07427515915" onClick={handlePhoneClick} className="text-primary hover:underline font-bold">07427 515915</a> first — even if you also call a recovery service, we will usually be there before they are.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/30 p-6 rounded-lg border border-white/5">
                <ShieldAlert className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Roadside Safety First</h3>
                <p className="text-gray-400 text-sm">
                  Our technicians are trained in roadside safety protocols. We use high-visibility vehicles and safety lighting to ensure a secure working environment while we change your tyre on the roadside or hard shoulder.
                </p>
              </div>
              <div className="bg-secondary/30 p-6 rounded-lg border border-white/5">
                <Wrench className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Locking Wheel Nut Removal</h3>
                <p className="text-gray-400 text-sm">
                  Lost your locking wheel nut key? Don't worry. Our emergency vans carry specialist removal tools to safely remove locking nuts without damaging your alloy wheels.
                </p>
              </div>
            </div>

            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">What To Do If You Have A Blowout</h3>
              <div className="bg-secondary/20 rounded-lg p-6 border-l-4 border-red-500 space-y-4">
                <ol className="list-decimal list-inside space-y-3 text-gray-300">
                  <li><strong className="text-white">Stop Safely:</strong> Pull over to a safe place immediately. Do not drive on a flat tyre as it destroys the wheel rim.</li>
                  <li><strong className="text-white">Make Yourself Visible:</strong> Turn on hazard lights. If on a motorway, exit the vehicle from the passenger side and stand behind the barrier.</li>
                  <li><strong className="text-white">Call Us:</strong> Dial <a href="tel:07427515915" className="text-primary hover:underline" onClick={handlePhoneClick}> 07427 515915</a> (or alt: <a href="tel:07988018865" className="text-primary hover:underline">07988 018865</a>). Give us your location (WhatsApp location drop is best) and tyre size.</li>
                  <li><strong className="text-white">Wait Safely:</strong> We will dispatch the nearest van immediately and give you an ETA.</li>
                </ol>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Emergency Coverage Areas — 24/7</h3>
              <p className="text-gray-400 mb-4">
                Our emergency fleet is strategically positioned around the M25, M1, and major London routes. We respond to breakdowns along motorways, A-roads, and residential streets. Current priority coverage includes:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {[
                  { name: "Hemel Hempstead", href: "/mobile-tyres-hemel-hempstead" },
                  { name: "Watford", href: "/mobile-tyres-watford" },
                  { name: "St Albans", href: "/mobile-tyres-st-albans" },
                  { name: "Luton Airport Area", href: "/mobile-tyres-luton" },
                  { name: "Aylesbury & A41", href: "/mobile-tyres-aylesbury" },
                  { name: "High Wycombe & M40", href: "/mobile-tyres-high-wycombe" },
                  { name: "Hatfield & A1(M) J3", href: "/mobile-tyres-hatfield" },
                  { name: "Welwyn Garden City", href: "/mobile-tyres-welwyn-garden-city" },
                  { name: "Harrow", href: "/mobile-tyres-harrow" },
                  { name: "Slough & M4", href: "/mobile-tyres-slough" },
                  { name: "Milton Keynes", href: "/mobile-tyres-milton-keynes" },
                  { name: "North London", href: "/mobile-tyres-london" },
                ].map((area) => (
                  <Link key={area.name} href={area.href} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                    <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" /> {area.name}
                  </Link>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                We also cover the <strong className="text-white">M1 (Junctions 4–11)</strong>, <strong className="text-white">M25 (Junctions 17–25)</strong>, <strong className="text-white">A41</strong>, and <strong className="text-white">A1(M)</strong> corridors. <Link href="/locations" className="text-primary hover:underline">View all coverage areas →</Link>
              </p>
            </section>

            {/* Emergency Pricing */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                <PoundSterling className="text-primary w-7 h-7" /> Emergency Call-Out Pricing
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We are completely transparent about emergency rates — there are no hidden surcharges, no time-of-arrival markups, no "fuel levies" added at the end. The price you are quoted on the phone is the price you pay when we arrive, and it always includes the labour, the new valve, the wheel balance, the TPMS reset and the disposal of your old tyre.
              </p>
              <div className="overflow-x-auto rounded-lg border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/60 text-white uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-4 py-3">Service</th>
                      <th className="px-4 py-3">Hours</th>
                      <th className="px-4 py-3">From</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr><td className="px-4 py-3 text-gray-300">Daytime call-out + fitting</td><td className="px-4 py-3 text-gray-400">08:00–20:00</td><td className="px-4 py-3 text-primary font-bold">£40</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Night call-out + fitting</td><td className="px-4 py-3 text-gray-400">20:00–08:00</td><td className="px-4 py-3 text-primary font-bold">£80</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Bank holiday call-out</td><td className="px-4 py-3 text-gray-400">All day</td><td className="px-4 py-3 text-primary font-bold">£40 / £80</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300">Motorway response (M1/M25/M40)</td><td className="px-4 py-3 text-gray-400">24/7</td><td className="px-4 py-3 text-primary font-bold">£60 / £100</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3">All prices exclude the cost of the new tyre. See our <Link href="/blog/mobile-tyre-fitting-cost-guide" className="text-primary hover:underline">full cost guide</Link>. Official guidance on motorway breakdowns: <a href="https://www.gov.uk/highway-code/breakdowns-and-incidents" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Highway Code rules 274–278</a>.</p>
            </section>

            {/* FAQ */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <HelpCircle className="text-primary w-7 h-7" /> Emergency Tyre Fitting — FAQs
              </h3>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <details key={i} className="group bg-secondary/30 rounded-lg border border-white/10 overflow-hidden">
                    <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4 hover:bg-secondary/50 transition-colors">
                      <span className="text-white font-bold text-base">{f.q}</span>
                      <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {f.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Related Services */}
            <section className="bg-secondary/20 p-8 rounded-lg border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Other Mobile Services</h3>
              <div className="space-y-3">
                {[
                  { label: "Mobile Tyre Fitting", sub: "Scheduled same-day tyre supply & fit", href: "/mobile-tyre-fitting-hemel-hempstead" },
                  { label: "Puncture Repair", sub: "BS AU 159 compliant on-site repairs", href: "/mobile-puncture-repair-near-me" },
                  { label: "Wheel Balancing", sub: "Digital balancing — eliminates vibration", href: "/mobile-wheel-balancing" },
                  { label: "Car Battery Replacement", sub: "Dead battery? We come to you", href: "/mobile-car-battery-replacement" },
                  { label: "Emergency Fuel Delivery", sub: "Petrol & diesel delivered 24/7", href: "/emergency-fuel-delivery" },
                  { label: "Locking Wheel Nut Removal", sub: "Specialist tools, no alloy damage", href: "/locking-wheel-nut-removal" },
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

          {/* Right Column: Pricing & Contact */}
          <div className="space-y-8">
            <div className="bg-secondary p-8 rounded-lg border border-white/10 sticky top-24">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Transparent Pricing</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-gray-300">Call-Out Fee (Day)</span>
                  <span className="text-white font-bold">From £40</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-gray-300">Call-Out Fee (Night)</span>
                  <span className="text-white font-bold">From £80</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-gray-300">Tyre Fitting</span>
                  <span className="text-white font-bold">Included</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-gray-300">New Valve & Balance</span>
                  <span className="text-white font-bold">Included</span>
                </div>
              </div>

              <div className="bg-red-900/20 p-4 rounded text-center mb-6 border border-red-500/30">
                <p className="text-red-400 text-sm font-bold uppercase">No Hidden Costs</p>
                <p className="text-gray-400 text-xs mt-1">We quote the full price before dispatching a van.</p>
              </div>

              <a href="tel:07427515915" onClick={handlePhoneClick}>
                <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold h-12 uppercase">
                  Get Immediate Quote
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
