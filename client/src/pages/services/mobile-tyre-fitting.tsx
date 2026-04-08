import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Clock, MapPin, Truck, ShieldCheck, Wrench, Star, ChevronRight, HelpCircle, PoundSterling, Calendar, Award } from "lucide-react";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import vanInterior from "@assets/generated_images/mobile_tyre_fitting_van_interior.webp";
import { Link } from "wouter";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function MobileTyreFitting() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile Tyre Fitting",
    "name": "Mobile Tyre Fitting Hemel Hempstead & Hertfordshire",
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
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "47"
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
    "description": "Expert mobile tyre fitting based in Hemel Hempstead, Hertfordshire. Same-day supply & fit at your home, workplace or roadside within a 30-mile radius.",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "30.00",
        "priceCurrency": "GBP"
      },
      "description": "Mobile tyre fitting from £30 + cost of tyre. No call-out fee within 30 miles of Hemel Hempstead."
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Mobile Tyre Fitting Works at Your Location",
    "totalTime": "PT45M",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "GBP", "value": "30" },
    "step": [
      { "@type": "HowToStep", "name": "Book your fitting", "text": "Call, WhatsApp or fill our online form with your tyre size, vehicle reg and address." },
      { "@type": "HowToStep", "name": "Quote & confirmation", "text": "We confirm tyre options, total price and a same-day or next-day arrival window." },
      { "@type": "HowToStep", "name": "Technician arrives", "text": "A fully-equipped Queensway van arrives at your home, workplace or roadside." },
      { "@type": "HowToStep", "name": "Fit & balance", "text": "We jack the vehicle, remove the old tyre, fit the new tyre, install a fresh valve and electronically balance each wheel." },
      { "@type": "HowToStep", "name": "TPMS reset & payment", "text": "We reset TPMS, torque the wheel nuts, dispose of the old tyre and take card or bank transfer payment on the spot." }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does mobile tyre fitting cost in Hemel Hempstead?", "acceptedAnswer": { "@type": "Answer", "text": "Queensway Mobile Tyres charges from £30 per tyre for fitting, balancing, valve and disposal — plus the cost of the tyre itself. Budget tyres start around £55 fitted, mid-range from £85 fitted, and premium brands like Michelin or Continental from £120 fitted. There is no call-out fee within 30 miles of Hemel Hempstead." } },
      { "@type": "Question", "name": "How quickly can you get to me?", "acceptedAnswer": { "@type": "Answer", "text": "For pre-booked appointments we offer slots from same-day to within 48 hours. For 24/7 emergency call-outs across Hemel Hempstead, Watford, St Albans, Luton and Aylesbury our average arrival time is 45–60 minutes." } },
      { "@type": "Question", "name": "Do I need to be at home when you fit the tyres?", "acceptedAnswer": { "@type": "Answer", "text": "No. Many customers leave the keys with a neighbour, building concierge or workplace reception. We just need access to the vehicle, the locking wheel nut key (if fitted) and a flat surface to work on." } },
      { "@type": "Question", "name": "What sizes and types of tyres do you fit?", "acceptedAnswer": { "@type": "Answer", "text": "We fit every standard car and 4×4 size from 13-inch up to 22-inch, including run-flat tyres (RFT, RSC, SSR, ROF), low-profile UHP tyres, all-season tyres and winter tyres. We also handle van tyres up to LCV ratings." } },
      { "@type": "Question", "name": "Do you fit tyres I supply myself?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can fit customer-supplied tyres at our standard fitting rate (£30 per wheel including balance, valve and disposal). We just ask that the tyres are correctly sized for your vehicle and in road-legal condition." } },
      { "@type": "Question", "name": "How long does mobile tyre fitting take?", "acceptedAnswer": { "@type": "Answer", "text": "A single tyre takes about 15–20 minutes from start to finish. A full set of four typically takes 45–60 minutes including balance, TPMS reset and a torque check on every wheel nut." } },
      { "@type": "Question", "name": "Will you balance the wheels?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — every fitting includes electronic wheel balancing as standard. Our digital balancers are calibrated to the same standards as a high-street garage." } },
      { "@type": "Question", "name": "What happens to my old tyres?", "acceptedAnswer": { "@type": "Answer", "text": "We take old tyres away for free and dispose of them through licensed Environment Agency-registered recyclers, in line with UK end-of-life tyre regulations." } }
    ]
  };

  const faqs = [
    { q: "How much does mobile tyre fitting cost in Hemel Hempstead?", a: "Queensway Mobile Tyres charges from £30 per tyre for fitting, balancing, valve and disposal — plus the cost of the tyre itself. Budget tyres start around £55 fitted, mid-range from £85 fitted, and premium brands like Michelin or Continental from £120 fitted. There is no call-out fee within 30 miles of Hemel Hempstead." },
    { q: "How quickly can you get to me?", a: "For pre-booked appointments we offer slots from same-day to within 48 hours. For 24/7 emergency call-outs across Hemel Hempstead, Watford, St Albans, Luton and Aylesbury our average arrival time is 45–60 minutes." },
    { q: "Do I need to be at home when you fit the tyres?", a: "No. Many customers leave the keys with a neighbour, building concierge or workplace reception. We just need access to the vehicle, the locking wheel nut key (if fitted) and a flat surface to work on." },
    { q: "What sizes and types of tyres do you fit?", a: "We fit every standard car and 4×4 size from 13-inch up to 22-inch, including run-flat tyres (RFT, RSC, SSR, ROF), low-profile UHP tyres, all-season tyres and winter tyres. We also handle van tyres up to LCV ratings." },
    { q: "Do you fit tyres I supply myself?", a: "Yes. We can fit customer-supplied tyres at our standard fitting rate (£30 per wheel including balance, valve and disposal). We just ask that the tyres are correctly sized for your vehicle and in road-legal condition." },
    { q: "How long does mobile tyre fitting take?", a: "A single tyre takes about 15–20 minutes from start to finish. A full set of four typically takes 45–60 minutes including balance, TPMS reset and a torque check on every wheel nut." },
    { q: "Will you balance the wheels?", a: "Yes — every fitting includes electronic wheel balancing as standard. Our digital balancers are calibrated to the same standards as a high-street garage." },
    { q: "What happens to my old tyres?", a: "We take old tyres away for free and dispose of them through licensed Environment Agency-registered recyclers, in line with UK end-of-life tyre regulations." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Mobile Tyres Hemel Hempstead | Mobile Tyre Fitting from £30 | Queensway"
        description="Mobile tyres in Hemel Hempstead from £30 — supplied & fitted at your home, work or roadside. Same-day mobile tyre fitting across Watford, St Albans, Luton, Aylesbury & 30-mile radius. All major brands, no call-out fee. Call 07427 515915."
        keywords="mobile tyres, mobile tyres Hemel Hempstead, mobile tyres near me, mobile tyre fitting, mobile tyre fitter, mobile tyre fitting near me, mobile tyre fitting Hemel Hempstead, tyres fitted at home, same day mobile tyres, cheap mobile tyres, mobile tyres Watford, mobile tyres St Albans, mobile tyres Luton, mobile tyres Aylesbury, mobile tyres Hertfordshire, mobile tyres HP1, mobile tyres HP2, mobile tyres HP3, home tyre fitting, mobile tyre replacement"
        image={heroImage}
        schema={[schema, howToSchema, faqSchema]}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Queensway Mobile Tyres van fitting tyres in Hemel Hempstead, Hertfordshire" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              QUEENSWAY <span className="text-primary">MOBILE TYRES</span> HEMEL HEMPSTEAD <br />FITTED AT HOME FROM £30
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Based in Hemel Hempstead and covering a 30-mile radius across Hertfordshire, Bedfordshire and Buckinghamshire. We bring a fully-equipped mobile tyre workshop to your home, workplace or roadside — no more waiting in cold garages or taking time off work. Expert technicians, all major brands, same-day appointments from £30.
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
                  Get a Quote Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left Column: Content */}
          <div className="md:col-span-2 space-y-12">

            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Mobile Tyre Fitting at Your Home, Workplace or Roadside</h2>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                Queensway Mobile Tyres is a fully-equipped mobile tyre workshop based in Hemel Hempstead, Hertfordshire. We bring everything a high-street fast-fit centre has — and a few things they don't — straight to your driveway, your office car park, or the hard shoulder of the M1 if that's where you've ground to a halt.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Booking a traditional tyre garage usually means three things you don't have time for: driving on a tyre you already know is unsafe, waiting in a queue while their fitter finishes someone else's set of four, and either taking a half-day off work or losing a Saturday morning. Mobile tyre fitting flips that on its head — you stay where you are, we drive to you, and the whole job is usually done in under an hour from the moment we arrive.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Every Queensway van carries a workshop-grade tyre changer, a digital wheel balancer, a 12-volt generator, an air compressor, calibrated torque wrenches and a stock of valves, weights and consumables. We can fit any standard car, 4×4 or van tyre from 13-inch up to 22-inch, including <Link href="/blog/run-flat-tyres-explained" className="text-primary hover:underline">run-flat tyres</Link> (RFT, RSC, SSR, ROF and ZP), low-profile UHP tyres, and seasonal all-season or winter rubber. If your car is on the road in the UK, we can almost certainly fit it.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our average <Link href="/24-hour-emergency-mobile-tyre-fitting" className="text-primary hover:underline">emergency response time</Link> across Hemel Hempstead, Watford, St Albans, Luton and Aylesbury is between 45 and 60 minutes. Pre-booked appointments are usually available the same day or the next day. Either way, you get the same standard of fit: torqued to the manufacturer's specification, electronically balanced, TPMS reset, and the old tyres taken away for free at the end.
              </p>
            </section>

            {/* How It Works */}
            <section className="bg-secondary/30 p-8 rounded-lg border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">How Mobile Tyre Fitting Works — Step by Step</h3>
              <ol className="space-y-5">
                {[
                  { t: "Get a quote", d: "Call 07427 515915, WhatsApp us, or fill in the online quote form. Tell us your tyre size (e.g. 205/55 R16), the number of tyres you need, your vehicle reg and your postcode. We'll give you an all-in price within minutes — no obligation, no upsell." },
                  { t: "Book your slot", d: "Pick a same-day, next-day or scheduled appointment. For 24/7 emergencies we head out immediately and aim to be with you in 45–60 minutes." },
                  { t: "We arrive fully equipped", d: "Our technician parks the Queensway van next to your vehicle, sets up the cones if you're roadside, and confirms the tyre brand and size before any work starts." },
                  { t: "Fitting & balancing", d: "We jack the car safely, remove the wheel, demount the old tyre on our on-board changer, fit the new tyre with a fresh rubber valve, and balance it on the digital balancer to within 5 grams." },
                  { t: "TPMS reset, torque & payment", d: "Each wheel goes back on the hub, every nut is torqued to the manufacturer's value, the tyre pressure monitoring system is reset, and the old tyres are loaded into the van for licensed recycling. You pay by card, bank transfer or cash on the spot." }
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-black font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{step.t}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Pricing */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                <PoundSterling className="text-primary w-7 h-7" /> Mobile Tyre Fitting Prices in Hertfordshire
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our fitting fee is a flat <strong className="text-white">£30 per wheel</strong> and includes the new tyre, removal of the old tyre, a new rubber valve, electronic balancing, TPMS reset, torque-spec tightening and free disposal. The only variable is the tyre itself. Below is a realistic guide to what you'll pay all-in for the most common UK car sizes (15"–18"), based on real prices we charged customers in 2026.
              </p>
              <div className="overflow-x-auto rounded-lg border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/60 text-white uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-4 py-3">Tyre tier</th>
                      <th className="px-4 py-3">Typical brands</th>
                      <th className="px-4 py-3">Fitted price (per tyre)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr><td className="px-4 py-3 text-gray-300 font-bold">Budget</td><td className="px-4 py-3 text-gray-400">Sunfull, Wanli, Nankang, Three-A</td><td className="px-4 py-3 text-primary font-bold">£55 – £75</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300 font-bold">Mid-range</td><td className="px-4 py-3 text-gray-400">Avon, Falken, Hankook, Toyo, Kumho</td><td className="px-4 py-3 text-primary font-bold">£85 – £110</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300 font-bold">Premium</td><td className="px-4 py-3 text-gray-400">Michelin, Continental, Pirelli, Bridgestone, Goodyear, Dunlop</td><td className="px-4 py-3 text-primary font-bold">£120 – £180</td></tr>
                    <tr><td className="px-4 py-3 text-gray-300 font-bold">Run-flat / UHP</td><td className="px-4 py-3 text-gray-400">BMW, Mercedes, MINI fitments — Pirelli P Zero RFT, Michelin Pilot Sport ZP</td><td className="px-4 py-3 text-primary font-bold">£160 – £260</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3">Prices include VAT. 19" and larger sizes attract a £5–£10 surcharge. Customer-supplied tyres are fitted at the same £30/wheel rate. See our <Link href="/blog/mobile-tyre-fitting-cost-guide" className="text-primary hover:underline">full cost guide</Link> for a detailed breakdown.</p>
            </section>

            {/* Tyre Brands */}
            <section className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                <Award className="text-primary w-7 h-7" /> Tyre Brands & Types We Fit
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We are an independent mobile fitter, which means we are not tied to any single manufacturer. We can source any tyre approved for sale in the UK and we'll always recommend the option that genuinely fits your driving style, your budget and the way you use the car — not whatever happens to be on a quota.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Premium brands</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Michelin (CrossClimate, Pilot Sport, Primacy)</li>
                    <li>• Continental (PremiumContact, SportContact, AllSeasonContact)</li>
                    <li>• Pirelli (P Zero, Cinturato, Scorpion)</li>
                    <li>• Bridgestone (Turanza, Potenza, Weather Control)</li>
                    <li>• Goodyear (Vector 4Seasons, Eagle F1)</li>
                    <li>• Dunlop (Sport Maxx, BluResponse)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Specialist fitments</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Run-flat tyres (RFT, RSC, SSR, ROF, MOE, ZP)</li>
                    <li>• Ultra-High-Performance (UHP) low-profile</li>
                    <li>• All-season tyres (M+S / 3PMSF rated)</li>
                    <li>• Winter tyres for the Chiltern hills</li>
                    <li>• 4×4 and SUV tyres up to 22"</li>
                    <li>• LCV / van tyres up to commercial loads</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The Process */}
            <section className="bg-secondary/30 p-8 rounded-lg border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Comprehensive Service Includes:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Removal of old tyre and safe disposal",
                  "New tyre installation",
                  "New rubber valve replacement (standard)",
                  "Electronic wheel balancing",
                  "Bead seal application if required",
                  "Wheel nut torque check to manufacturer specs"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Benefits of Our Mobile Service</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Save Time & Hassle</h4>
                    <p className="text-gray-400">
                      No need to take time off work or give up your weekend. We come to your office car park or driveway.
                      You simply hand us the keys (or locking wheel nut), and we do the rest while you carry on with your day.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Safety First</h4>
                    <p className="text-gray-400">
                      Driving on damaged or illegal tyres to get to a garage is dangerous and risks points on your license.
                      Stay safe at home and let us come to you. All our technicians are fully trained and insured.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <Wrench className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Expert Fitting</h4>
                    <p className="text-gray-400">
                      Our technicians are experienced professionals who treat every car like their own. We use protective equipment
                      to ensure your alloy wheels are never damaged during the fitting process.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Areas We Cover */}
            <section className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Areas We Cover</h3>
              <p className="text-gray-400 mb-6">
                We are proud to serve a wide area across Hertfordshire and the Home Counties from our Hemel Hempstead base. Our <Link href="/locations" className="text-primary hover:underline">30-mile coverage area</Link> includes every major town between the M1, M25 and M40.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Mobile Tyre Fitting in Rickmansworth</h4>
                  <p className="text-sm text-gray-400">
                    We offer fast <strong>mobile tyre fitting in Rickmansworth</strong> and the WD3 area. Whether you're near the Aquadrome or in the town centre, our technicians can reach you quickly for emergency repairs or scheduled replacements.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Tyre Services in Bushey</h4>
                  <p className="text-sm text-gray-400">
                    Our <strong>mobile tyre professionals in Bushey</strong> are available 24/7. We cover Bushey Heath, North Bushey, and surrounding WD23 locations, bringing the garage directly to your driveway or workplace.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Watford", href: "/mobile-tyres-watford" },
                  { name: "St Albans", href: "/mobile-tyres-st-albans" },
                  { name: "Hemel Hempstead", href: "/mobile-tyres-hemel-hempstead" },
                  { name: "Harrow", href: "/mobile-tyres-harrow" },
                  { name: "Slough", href: "/mobile-tyres-slough" },
                  { name: "Luton", href: "/mobile-tyres-luton" },
                  { name: "Aylesbury", href: "/mobile-tyres-aylesbury" },
                  { name: "High Wycombe", href: "/mobile-tyres-high-wycombe" },
                  { name: "Hatfield", href: "/mobile-tyres-hatfield" },
                  { name: "Welwyn Garden City", href: "/mobile-tyres-welwyn-garden-city" },
                  { name: "Milton Keynes", href: "/mobile-tyres-milton-keynes" },
                  { name: "North London", href: "/mobile-tyres-london" },
                  { name: "Stevenage", href: "/mobile-tyres-stevenage" },
                ].map(area => (
                  <Link key={area.name} href={area.href} className="px-3 py-1 bg-background rounded-full text-sm text-gray-300 border border-white/10 hover:border-primary/40 hover:text-primary flex items-center gap-1 transition-colors">
                    <MapPin className="w-3 h-3 text-primary" /> {area.name}
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/locations" className="text-primary hover:underline text-sm font-bold">View all 80+ locations we cover →</Link>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <HelpCircle className="text-primary w-7 h-7" /> Mobile Tyre Fitting — FAQs
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
              <p className="text-sm text-gray-500 mt-6">
                Still have a question? Call us on <a href="tel:07427515915" onClick={handlePhoneClick} className="text-primary hover:underline font-bold">07427 515915</a> or read our <Link href="/blog" className="text-primary hover:underline">tyre advice blog</Link>. For background on tyre safety law see the official <a href="https://www.gov.uk/tyres-and-the-law" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GOV.UK tyres and the law</a> guidance.
              </p>
            </section>

            {/* Related Services Section */}
            <section className="bg-secondary/20 p-8 rounded-lg border border-white/5">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Other Mobile Services</h3>
              <div className="space-y-3">
                {[
                  { label: "24/7 Emergency Call-Out", sub: "Rapid roadside response in 30–60 mins", href: "/24-hour-emergency-mobile-tyre-fitting" },
                  { label: "Puncture Repair", sub: "BS AU 159 compliant permanent repairs", href: "/mobile-puncture-repair-near-me" },
                  { label: "Wheel Balancing", sub: "Digital precision — no vibration", href: "/mobile-wheel-balancing" },
                  { label: "Car Battery Replacement", sub: "AGM, EFB & standard batteries fitted", href: "/mobile-car-battery-replacement" },
                  { label: "Emergency Fuel Delivery", sub: "Petrol & diesel to your location 24/7", href: "/emergency-fuel-delivery" },
                  { label: "Locking Wheel Nut Removal", sub: "Lost key? We remove safely", href: "/locking-wheel-nut-removal" },
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

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-24">
              {/* Image Card */}
              <div className="bg-secondary rounded-lg overflow-hidden border border-white/10 mb-8">
                <img src={vanInterior} alt="Mobile Tyre Fitting Van Equipment" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2">State-of-the-Art Vans</h4>
                  <p className="text-sm text-gray-400">
                    Our vans are equipped with high-performance tyre changers and digital wheel balancers, powered by on-board generators and compressed air systems.
                  </p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-primary p-6 rounded-lg text-black text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 uppercase">Need Tyres Today?</h3>
                <p className="mb-6 font-medium">We often have same-day appointments available!</p>
                <a href="tel:07427515915" onClick={handlePhoneClick}>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 font-bold h-12 uppercase mb-3">
                    Call 07427 515915
                  </Button>
                </a>
                <a href="https://wa.me/447427515915" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-black text-black hover:bg-black/10 font-bold h-12 uppercase">
                    WhatsApp Us
                  </Button>
                </a>
                <p className="mt-3 text-[10px] text-black/60 uppercase tracking-widest font-bold">Alt: 07988 018865</p>
              </div>

              {/* Trust Signals */}
              <div className="bg-secondary/50 p-6 rounded-lg border border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Star className="text-yellow-500 w-5 h-5 fill-current" />
                  <span>5-Star Rated Service</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Truck className="text-primary w-5 h-5" />
                  <span>We Come To You</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <ShieldCheck className="text-primary w-5 h-5" />
                  <span>Fully Insured</span>
                </div>
              </div>

              {/* Pricing Signals */}
              <div className="bg-secondary/50 p-6 rounded-lg border border-white/5 space-y-4">
                <h4 className="text-white font-bold mb-2">Transparent Pricing</h4>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Free Instant Quote</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Prices from <strong>£30</strong> + Tyre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
