import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Truck, ShieldCheck, Wrench, Battery, Fuel, Settings, Lock, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function HemelHempsteadLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Hemel Hempstead",
        "description": "Professional mobile tyre fitting in Hemel Hempstead. 24/7 emergency service in HP1, HP2, HP3. We come to you at home, work or M1 roadside.",
        "areaServed": {
            "@type": "City",
            "name": "Hemel Hempstead"
        },
        "provider": {
            "@type": "LocalBusiness",
            "name": "Queensway Mobile Tyres",
            "telephone": "07427 515915"
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Mobile Tyres Hemel Hempstead | Mobile Tyre Fitting Near Me 24/7 | Queensway"
                description="Mobile tyres Hemel Hempstead from £30 — fitted at your home, work or roadside. 24/7 mobile tyre fitter covering HP1, HP2, HP3, HP4 (Berkhamsted), HP5 (Chesham) & HP23 (Tring). New tyres, puncture repair & emergency call-out. Call 07427 515915."
                keywords="mobile tyres Hemel Hempstead, mobile tyres near me, mobile tyre fitting Hemel Hempstead, mobile tyre fitter Hemel Hempstead, tyres Hemel Hempstead, mobile tyres HP1, mobile tyres HP2, mobile tyres HP3, mobile tyres HP4, mobile tyres HP5, mobile tyres HP23, mobile tyres Berkhamsted, mobile tyres Chesham, mobile tyres Tring, 24 hour mobile tyres Hemel Hempstead, puncture repair Hemel Hempstead, emergency mobile tyres"
                image={heroImage}
                schema={schema}
            />
            <Navbar />

            {/* Hero Section */}
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src={heroImage} alt="Mobile Tyre Fitting Hemel Hempstead" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        QUEENSWAY MOBILE TYRES <br /><span className="text-primary">HEMEL HEMPSTEAD</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4 mb-8">
                        Fast, reliable tyre replacement in Hemel Hempstead. We bring the garage to you, 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915" onClick={handlePhoneClick}>
                            <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90">
                                <Phone className="mr-2 w-5 h-5" /> Call 07427 515915
                            </Button>
                        </a>
                        <Link href="/booking">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase">
                                Book Online
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in Hemel Hempstead</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Based in Hertfordshire, Queensway Mobile Tyres offers rapid response mobile tyre fitting throughout Hemel Hempstead (HP1, HP2, HP3). Why wait at a garage when we can come to you?
                        </p>
                        <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary mb-6">
                            <p className="text-white font-bold">M1 & A41 Breakdown Support</p>
                            <p className="text-sm text-gray-400">If you have a blowout on the M1 near Hemel or the A41 bypass, our emergency team can reach you quickly to get you back on the road safely.</p>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Emergency Tyre Replacement",
                                "Mobile Puncture Repair",
                                "Wheel Balancing",
                                "Battery Replacement",
                                "Commercial Van Tyres"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <CheckCircle className="text-primary w-5 h-5 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Local Coverage</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Hemel Hempstead Town", "Boxmoor", "Apsley", "Bennetts End",
                                "Adeyfield", "Chaulden", "Warner's End", "Gadebridge",
                                "Leverstock Green", "Nash Mills", "Felden", "Bourne End"
                            ].map((area) => (
                                <div key={area} className="flex items-center gap-2 text-gray-300">
                                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-sm">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services in Hemel */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">All Mobile Services in Hemel Hempstead</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        As our <strong>home base in Hertfordshire</strong>, Hemel Hempstead benefits from our fastest response times and largest stock of tyres. We cover HP1, HP2, and HP3 postcodes comprehensively, with premium brands (Michelin, Continental, Pirelli, Bridgestone) and budget options (Nexen, Avon) in stock.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {[
                            { icon: Truck, label: "Mobile Tyre Fitting Hemel Hempstead", desc: "Same-day supply & fit in HP1, HP2, HP3 — fastest response from our local base.", href: "/mobile-tyre-fitting-hemel-hempstead" },
                            { icon: Clock, label: "24/7 Emergency Call-Out Hemel Hempstead", desc: "M1 breakdown or flat at home — we prioritise Hemel calls as our local area.", href: "/24-hour-emergency-mobile-tyre-fitting" },
                            { icon: Wrench, label: "Puncture Repair Hemel Hempstead", desc: "BS AU 159 compliant permanent repairs. Cheaper than a new tyre when repairable.", href: "/mobile-puncture-repair-near-me" },
                            { icon: Settings, label: "Wheel Balancing Hemel Hempstead", desc: "Digital balancing at your driveway — stops vibration, extends tyre life.", href: "/mobile-wheel-balancing" },
                            { icon: Battery, label: "Battery Replacement Hemel Hempstead", desc: "AGM, EFB & standard batteries fitted at your location — all makes and models.", href: "/mobile-car-battery-replacement" },
                            { icon: Fuel, label: "Emergency Fuel Delivery Hemel Hempstead", desc: "Run dry in HP1-HP3? We deliver petrol or diesel to get you moving.", href: "/emergency-fuel-delivery" },
                            { icon: Lock, label: "Locking Nut Removal Hemel Hempstead", desc: "Lost your locking nut key in Hemel? We remove safely — no alloy damage.", href: "/locking-wheel-nut-removal" },
                        ].map(s => (
                            <Link key={s.href} href={s.href}>
                                <div className="flex items-center justify-between p-4 bg-secondary/30 border border-white/10 hover:border-primary/50 rounded-lg group transition-all cursor-pointer">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
                                            <s.icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm group-hover:text-primary transition-colors">{s.label}</p>
                                            <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">The Smart Choice for Hemel Drivers</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Save Time</h3>
                            <p className="text-gray-400">No more lunch breaks wasted at the tyre shop. We work while you work, or relax at home.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Truck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Urgent Call-Outs</h3>
                            <p className="text-gray-400">Stranded with a flat? Our emergency hotline is open 24/7/365.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Fair Pricing</h3>
                            <p className="text-gray-400">Competitive rates for premium service. No hidden fees. What we quote is what you pay.</p>
                        </div>
                    </div>
                </div>
                {/* FAQ */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Frequently Asked Questions — Hemel Hempstead</h2>
                    <div className="space-y-5">
                        {[
                            {
                                q: "How quickly can you reach me in Hemel Hempstead?",
                                a: "Hemel Hempstead is our home base, so we have the fastest response times here. For emergency call-outs within HP1–HP3, we typically arrive within 20–40 minutes. For pre-booked fittings, we offer same-day or next-morning appointments."
                            },
                            {
                                q: "Do you cover Apsley, Boxmoor, and Adeyfield?",
                                a: "Yes — we cover the entire Hemel Hempstead area including Boxmoor, Apsley, Nash Mills, Bennetts End, Adeyfield, Chaulden, Gadebridge, Warner's End, Leverstock Green, and surrounding villages."
                            },
                            {
                                q: "Can you help with a blowout on the M1 near Hemel?",
                                a: "Yes. We provide priority M1 emergency coverage between Junctions 7 (M1/A414) and 9 (Dunstable Road). If you break down, move to the hard shoulder, turn on hazard lights, and call us on 07427 515915."
                            },
                            {
                                q: "What tyre brands do you stock for Hemel customers?",
                                a: "As our home base we carry the widest stock here — premium (Michelin, Continental, Pirelli, Bridgestone, Goodyear, Dunlop), mid-range (Hankook, Yokohama, Toyo), and budget (Nexen, Avon). All-season, run-flat, and XL tyres also available."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-secondary/30 p-6 rounded-lg border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nearby Locations */}
                <div className="mb-12 border-t border-white/10 pt-8">
                    <h3 className="text-xl font-bold text-white mb-4">Nearby Areas We Also Cover</h3>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/mobile-tyres-watford" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Watford</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-st-albans" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres St Albans</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-luton" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Luton</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-aylesbury" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Aylesbury</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-hatfield" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Hatfield</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-milton-keynes" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Milton Keynes</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/locations" className="text-primary hover:text-white hover:underline text-sm font-bold">View All Locations</Link>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

function CheckCircle({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
        </svg>
    )
}
