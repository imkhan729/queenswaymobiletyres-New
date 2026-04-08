import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, PoundSterling, CheckCircle, Clock, MapPin, Wrench, HelpCircle, AlertTriangle, Phone } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_london.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function MobileTyreFittingCostGuide() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Mobile Tyre Fitting Cost Guide: Prices in Hemel Hempstead & Hertfordshire (2026)",
    "image": "https://www.queenswaymobiletyres.co.uk" + heroImage,
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
    "datePublished": "2026-04-06",
    "dateModified": "2026-04-06",
    "description": "A complete 2026 price guide to mobile tyre fitting costs in Hemel Hempstead, Watford, St Albans, Luton and Aylesbury — labour fees, tyre prices, emergency call-out charges and how to save money.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.queenswaymobiletyres.co.uk/blog/mobile-tyre-fitting-cost-guide"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does mobile tyre fitting cost in Hemel Hempstead?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mobile tyre fitting in Hemel Hempstead starts from £30 per tyre plus the cost of the tyre itself with Queensway Mobile Tyres. A complete set of four mid-range tyres supplied and fitted typically ranges from £240 to £480 depending on size and brand. There is no call-out fee within a 30-mile radius during scheduled hours."
        }
      },
      {
        "@type": "Question",
        "name": "Is mobile tyre fitting more expensive than a garage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. Once you factor in fuel, parking, time off work and the hassle of waiting at a garage, mobile fitting is often cheaper overall. Queensway matches or beats most high-street garage labour rates and includes free wheel balancing with every fit, which many garages charge extra for."
        }
      },
      {
        "@type": "Question",
        "name": "Do you charge extra for emergency or out-of-hours call-outs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Scheduled appointments during the day have no call-out fee within the 30-mile radius. True emergency call-outs — for example a motorway breakdown at 2am — may include a modest out-of-hours surcharge which is always quoted upfront before we dispatch."
        }
      },
      {
        "@type": "Question",
        "name": "How much is a mobile puncture repair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A BS AU 159 compliant permanent puncture repair with Queensway Mobile Tyres costs from £25. This includes removing the wheel, inspecting the tyre, fitting a combination plug-and-patch repair on the inside, rebalancing and refitting the wheel to the correct torque."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Mobile Tyre Fitting Cost Guide 2026 | Hemel Hempstead & Herts"
        description="2026 mobile tyre fitting price guide for Hemel Hempstead, Watford, St Albans, Luton & Aylesbury. Labour costs, tyre prices, call-out fees & money-saving tips."
        keywords="mobile tyre fitting cost, tyre fitting price hemel hempstead, mobile tyre fitting price hertfordshire, tyre cost watford, cheap mobile tyres luton, tyre fitting labour cost uk"
        canonical="https://www.queenswaymobiletyres.co.uk/blog/mobile-tyre-fitting-cost-guide"
        image={heroImage}
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
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Pricing & Costs</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Mobile Tyre Fitting Cost Guide: Prices in Hemel Hempstead & Hertfordshire (2026)
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Updated April 6, 2026</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> Queensway Pricing Team</span>
            </div>
          </div>
        </div>
      </div>

      <article className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <img
            src={heroImage}
            alt="Mobile tyre fitting technician pricing a new set of tyres in Hemel Hempstead"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-xl mb-12 shadow-2xl border-2 border-white/5"
          />

          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <p className="text-xl leading-relaxed mb-8 font-medium text-white">
              "How much does mobile tyre fitting actually cost?" is the single most common question we're asked by drivers in Hemel Hempstead, Watford, St Albans, Luton and across Hertfordshire. In this honest, no-fluff 2026 price guide we'll break down exactly what you can expect to pay for mobile tyre services — from a straightforward puncture repair on your driveway to a full set of four premium tyres fitted at a motorway service station at 3am. No hidden fees, no surprises.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              <PoundSterling className="text-primary w-8 h-8" />
              How Mobile Tyre Fitting Pricing Works
            </h2>
            <p className="mb-4">
              Every mobile tyre fitting quote is made up of two components: the <strong>cost of the tyre itself</strong> and the <strong>labour fee to supply and fit it</strong>. Unlike a traditional garage, there is no building overhead, no waiting-room rent and no admin staff to pay — which is why good mobile services can often match or beat high-street prices while delivering the tyre directly to your driveway.
            </p>
            <p className="mb-6">
              At Queensway Mobile Tyres, our labour rate starts from <strong>£30 per tyre</strong>, and that already includes wheel removal, old-tyre disposal (an environmental levy most garages charge extra for), digital wheel balancing, a new rubber valve, TPMS sensor reset where applicable, and a calibrated torque check on every wheel nut. No hidden extras on the invoice at the end.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              <Wrench className="text-primary w-8 h-8" />
              Tyre Price Bands (2026)
            </h2>
            <p className="mb-4">
              The biggest single variable in your total bill is the <strong>tyre itself</strong>. Prices depend on the tyre size (a 15" hatchback tyre is much cheaper than a 21" SUV tyre), the brand tier, and the speed/load rating your vehicle requires. Here is a realistic 2026 snapshot for the Hemel Hempstead and wider Hertfordshire market:
            </p>
            <div className="overflow-x-auto -mx-4 px-4 my-6">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="text-left p-3 border border-white/10 text-white">Tier</th>
                    <th className="text-left p-3 border border-white/10 text-primary">Per-tyre price (fitted)</th>
                    <th className="text-left p-3 border border-white/10 text-gray-300">Typical brands</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-white/10 text-white font-bold">Budget</td>
                    <td className="p-3 border border-white/10 text-gray-300">£60 – £90</td>
                    <td className="p-3 border border-white/10 text-gray-400">Nexen, Avon, Landsail, Sailun</td>
                  </tr>
                  <tr className="bg-white/[0.02]">
                    <td className="p-3 border border-white/10 text-white font-bold">Mid-range</td>
                    <td className="p-3 border border-white/10 text-gray-300">£90 – £130</td>
                    <td className="p-3 border border-white/10 text-gray-400">Hankook, Yokohama, Toyo, Falken, Kumho</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-white/10 text-white font-bold">Premium</td>
                    <td className="p-3 border border-white/10 text-gray-300">£130 – £220</td>
                    <td className="p-3 border border-white/10 text-gray-400">Michelin, Continental, Pirelli, Bridgestone, Goodyear, Dunlop</td>
                  </tr>
                  <tr className="bg-white/[0.02]">
                    <td className="p-3 border border-white/10 text-white font-bold">Ultra-High-Performance / Run-Flat</td>
                    <td className="p-3 border border-white/10 text-gray-300">£180 – £380+</td>
                    <td className="p-3 border border-white/10 text-gray-400">Pirelli P Zero, Michelin Pilot Sport, Continental SportContact</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-6">
              As a rough rule of thumb, most Hertfordshire family cars sit in the mid-range bracket. A complete set of four mid-range 205/55 R16 or 225/45 R17 tyres supplied and fitted at your home in Hemel Hempstead, Watford or St Albans typically lands between <strong>£360 and £520 all-in</strong>. Premium tyres for an SUV or executive saloon will push that to <strong>£600–£900</strong>. If you drive something like a Porsche 911 or Range Rover Sport, budget £1,000+ for a set of ultra-high-performance fitted tyres.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              <Clock className="text-primary w-8 h-8" />
              Service-by-Service 2026 Price List
            </h2>
            <p className="mb-4">
              Here are the typical starting prices for every service we offer across Hemel Hempstead and the 30-mile radius. Every quote is given <strong>upfront</strong> over the phone before we dispatch a van.
            </p>
            <ul className="space-y-3 my-6">
              <li className="bg-secondary/30 p-4 rounded-lg border border-white/5 flex justify-between gap-4 flex-wrap">
                <span className="text-white font-bold">Mobile tyre fitting (per tyre labour)</span>
                <span className="text-primary font-bold">from £30</span>
              </li>
              <li className="bg-secondary/30 p-4 rounded-lg border border-white/5 flex justify-between gap-4 flex-wrap">
                <span className="text-white font-bold">Permanent puncture repair (BS AU 159)</span>
                <span className="text-primary font-bold">from £25</span>
              </li>
              <li className="bg-secondary/30 p-4 rounded-lg border border-white/5 flex justify-between gap-4 flex-wrap">
                <span className="text-white font-bold">Wheel balancing (per wheel)</span>
                <span className="text-primary font-bold">FREE with fit</span>
              </li>
              <li className="bg-secondary/30 p-4 rounded-lg border border-white/5 flex justify-between gap-4 flex-wrap">
                <span className="text-white font-bold">Locking wheel nut removal (full set, 4 nuts)</span>
                <span className="text-primary font-bold">from £80</span>
              </li>
              <li className="bg-secondary/30 p-4 rounded-lg border border-white/5 flex justify-between gap-4 flex-wrap">
                <span className="text-white font-bold">Car battery supply & fit (standard)</span>
                <span className="text-primary font-bold">from £90</span>
              </li>
              <li className="bg-secondary/30 p-4 rounded-lg border border-white/5 flex justify-between gap-4 flex-wrap">
                <span className="text-white font-bold">AGM / EFB Start-Stop battery</span>
                <span className="text-primary font-bold">from £140</span>
              </li>
              <li className="bg-secondary/30 p-4 rounded-lg border border-white/5 flex justify-between gap-4 flex-wrap">
                <span className="text-white font-bold">Emergency fuel delivery (5–10L + fuel cost)</span>
                <span className="text-primary font-bold">from £55</span>
              </li>
              <li className="bg-secondary/30 p-4 rounded-lg border border-white/5 flex justify-between gap-4 flex-wrap">
                <span className="text-white font-bold">Call-out fee within 30 miles (daytime)</span>
                <span className="text-primary font-bold">£0</span>
              </li>
              <li className="bg-secondary/30 p-4 rounded-lg border border-white/5 flex justify-between gap-4 flex-wrap">
                <span className="text-white font-bold">Out-of-hours / overnight surcharge</span>
                <span className="text-primary font-bold">quoted upfront</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              <MapPin className="text-primary w-8 h-8" />
              Does Location Affect the Price?
            </h2>
            <p className="mb-6">
              Inside the 30-mile radius from Hemel Hempstead — which comfortably covers Watford, St Albans, Luton, Aylesbury, Harpenden, Berkhamsted, Tring, Chesham, Amersham, Hatfield, Welwyn Garden City, Stevenage, High Wycombe, Milton Keynes and North London — the tyre fitting price is <strong>identical</strong>. Whether we drive two miles from base to a customer in Boxmoor or 28 miles to Milton Keynes, we don't penny-pinch on mileage. For very rare call-outs at the absolute edge of our radius we may quote a small fuel surcharge, but this is always confirmed before dispatch.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              <CheckCircle className="text-primary w-8 h-8" />
              7 Ways to Save Money on Mobile Tyre Fitting
            </h2>
            <ol className="list-decimal pl-6 space-y-3 my-6 marker:text-primary marker:font-bold">
              <li><strong className="text-white">Buy in pairs.</strong> Replacing both front or both rear tyres together keeps handling balanced and often unlocks a small discount on the second tyre.</li>
              <li><strong className="text-white">Choose mid-range, not budget.</strong> Counter-intuitive, but tests by <a href="https://www.whatcar.com/advice/buying/best-and-worst-tyres/n2025" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">What Car?</a> show premium mid-range tyres last twice as long as the cheapest budget options — so the "bargain" often works out more expensive per mile.</li>
              <li><strong className="text-white">Avoid out-of-hours unless truly urgent.</strong> If your flat tyre happened on Saturday night but you don't need the car until Monday, book us for Sunday morning and skip any overnight surcharge.</li>
              <li><strong className="text-white">Repair rather than replace.</strong> A legal BS AU 159 puncture repair is £25. A new tyre could be £100+. We always check if your tyre is repairable before suggesting a replacement.</li>
              <li><strong className="text-white">Rotate your tyres every 6,000 miles.</strong> Even wear means you replace all four at once, not two at a time — dramatically lowering cost-per-mile.</li>
              <li><strong className="text-white">Keep your pressures correct.</strong> Under-inflated tyres wear out the shoulders up to 25% faster and cost you more in fuel. Use your vehicle's placard pressure (usually inside the driver's door).</li>
              <li><strong className="text-white">Book ahead when you can.</strong> If you know your MOT is due, call us a week in advance to lock in a scheduled daytime slot at the cheapest rate.</li>
            </ol>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              <AlertTriangle className="text-yellow-500 w-8 h-8" />
              Beware of "Too Cheap" Mobile Tyre Fitters
            </h2>
            <p className="mb-4">
              If a quote looks dramatically cheaper than everyone else, ask hard questions before you book. Rogue operators have been known to:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-300 marker:text-primary">
              <li>Fit part-worn tyres sold as "new" (illegal under UK consumer law unless clearly disclosed).</li>
              <li>Skip wheel balancing to save time, leaving you with vibration and premature wear.</li>
              <li>Over-torque or under-torque wheel nuts without a calibrated torque wrench — a real safety risk.</li>
              <li>Add £20–£40 "environmental disposal" surprise fees at the end of the job.</li>
              <li>Use no insurance cover, leaving you exposed if anything goes wrong.</li>
            </ul>
            <p className="mb-6">
              Every Queensway technician is insured, DBS-checked, uses calibrated torque tools and balances every wheel as standard. Read our verified Google, Yell and Trustpilot reviews before you book — 5.0★ across 47+ reviews at the time of writing.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" /> Frequently Asked Pricing Questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">Do you price-match other mobile fitters?</h4>
                  <p className="text-gray-400">Yes. If you have a written quote from another Hertfordshire mobile fitter for the same tyre and spec, send us a photo and we'll match or beat it. No small print.</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-bold text-white text-lg mb-2">Can I pay by card on the doorstep?</h4>
                  <p className="text-gray-400">Yes. Every van carries a contactless card reader. We accept cash, credit/debit card, Apple Pay, Google Pay and bank transfer. A VAT receipt is emailed immediately.</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-bold text-white text-lg mb-2">Do you do finance or Klarna for a full set?</h4>
                  <p className="text-gray-400">We don't offer in-house finance, but many of our customers use Klarna or Clearpay through their own apps with no issue — we'll process it as a standard card payment on our side.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary to-primary/20 p-8 rounded-2xl text-center border border-primary/30 shadow-lg shadow-primary/5">
              <h3 className="text-3xl font-bold text-white mb-4">Ready for an Honest, Upfront Quote?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Call us with your registration number and we'll give you an all-in price in under 60 seconds. No obligation, no pressure, no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:07427515915" onClick={handlePhoneClick}>
                  <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-white transition-colors w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" /> Call 07427 515915
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 w-full sm:w-auto">
                    Online Quote Request
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
