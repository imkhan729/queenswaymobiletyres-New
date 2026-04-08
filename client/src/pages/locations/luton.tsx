import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ShieldCheck, Clock, Truck, Wrench, Battery, Fuel, Settings, Lock, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function LutonLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Luton",
        "description": "Expert mobile tyre fitting in Luton & Luton Airport. We come to you 24/7. Emergency tyre replacement in LU1, LU2, LU3, LU4.",
        "areaServed": { "@type": "City", "name": "Luton" },
        "provider": { "@type": "LocalBusiness", "name": "Queensway Mobile Tyres", "telephone": "07427 515915" }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO title="Mobile Tyres Luton | Mobile Tyre Fitting Near Me LU1–LU4 | Queensway" description="Mobile tyres in Luton from £30 — fitted at your home, work, Luton Airport or roadside. 24/7 mobile tyre fitter covering LU1–LU4 & M1 J10–11. New tyres, puncture repair & emergency call-out. Call 07427 515915." keywords="mobile tyres Luton, mobile tyres near me, mobile tyre fitting Luton, mobile tyre fitter Luton, tyres Luton, mobile tyres Luton Airport, mobile tyres LU1, mobile tyres LU2, mobile tyres LU3, mobile tyres LU4, M1 J10 tyres, M1 J11 tyres, 24 hour tyre repair Luton, emergency puncture repair Luton" image={heroImage} schema={schema} />
            <Navbar />
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20"><img src={heroImage} alt="Mobile Tyre Fitting Luton" className="w-full h-full object-cover" /></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">QUEENSWAY MOBILE TYRES <br /><span className="text-primary">LUTON</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Fast, reliable mobile tyre services in Luton and London Luton Airport areas.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915" onClick={handlePhoneClick}><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90"><Phone className="mr-2 w-5 h-5" /> Call 07427 515915</Button></a>
                        <Link href="/booking"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase">Book Online</Button></Link>
                    </div>
                </div>
            </div>
            <div className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in Luton</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">Stuck near <strong>Luton Airport</strong> or on the <strong>M1</strong>? Our mobile tyre fitting team provides rapid response coverage across all Luton postcodes (LU1-LU4). We bring the expert tyre shop to you.</p>
                        <ul className="space-y-4">
                            {["Luton Airport Emergency Service", "M1 Junction 10 & 11 Rapid Response", "Home & Work Fitting", "Locking Nut Removal", "Puncture Repairs"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white"><ShieldCheck className="text-primary w-5 h-5 shrink-0" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Areas Covered</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["Luton Town Centre", "Leagrave", "Stopsley", "Wigmore", "Chaul End", "Bury Park", "Luton Airport", "Caddington"].map(area => (
                                <div key={area} className="flex items-center gap-2 text-gray-300"><MapPin className="w-4 h-4 text-primary shrink-0" /> <span className="text-sm">{area}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Why Choose Us */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-10">Why Luton Drivers Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Clock, title: "Rapid Response", desc: "Our vans are positioned near the M1 J10–11, meaning we can often reach Luton Airport and LU postcodes within 30–45 minutes." },
                            { icon: Truck, title: "We Come to You", desc: "Whether you're parked at Luton Airport short-stay or at home in Stopsley, we bring the full workshop to your location." },
                            { icon: ShieldCheck, title: "Transparent Pricing", desc: "We quote a full price before arriving — covering tyres, fitting, balancing, and call-out. No hidden charges." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services in Luton */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">All Services Available in Luton</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { icon: Truck, label: "Mobile Tyre Fitting Luton", desc: "Same-day supply & fit at your home, work or roadside in all LU postcodes.", href: "/mobile-tyre-fitting-hemel-hempstead" },
                            { icon: Clock, label: "24/7 Emergency Call-Out Luton", desc: "Blowout on the M1 or A505? We reach you fast day or night.", href: "/24-hour-emergency-mobile-tyre-fitting" },
                            { icon: Wrench, label: "Puncture Repair Luton", desc: "BS AU 159 compliant permanent repairs — save money on a new tyre.", href: "/mobile-puncture-repair-near-me" },
                            { icon: Settings, label: "Wheel Balancing Luton", desc: "Digital balancing at your driveway — included with every new tyre.", href: "/mobile-wheel-balancing" },
                            { icon: Battery, label: "Battery Replacement Luton", desc: "AGM, EFB & standard batteries supply and fit at your location.", href: "/mobile-car-battery-replacement" },
                            { icon: Fuel, label: "Emergency Fuel Delivery Luton", desc: "Petrol or diesel delivered to you — great for Luton Airport area.", href: "/emergency-fuel-delivery" },
                            { icon: Lock, label: "Locking Nut Removal Luton", desc: "Lost your key? Our specialist tools remove nuts without alloy damage.", href: "/locking-wheel-nut-removal" },
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

                {/* FAQ */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Frequently Asked Questions — Luton</h2>
                    <div className="space-y-5">
                        {[
                            {
                                q: "Can you fit tyres at Luton Airport?",
                                a: "Yes. We provide mobile tyre fitting at Luton Airport's short-stay and long-stay car parks, as well as the airport business park. Call us and we will arrange a fitting slot to meet your flight schedule."
                            },
                            {
                                q: "How quickly can you reach me on the M1 near Luton?",
                                a: "We have vans staged near the M1 Junction 10 and Junction 11. For emergency M1 breakdowns in the Luton area, we typically arrive within 30–45 minutes. Call 07427 515915 immediately and share your location on WhatsApp."
                            },
                            {
                                q: "Do you cover all LU postcodes?",
                                a: "Yes — we cover LU1 (Luton town centre), LU2 (Stopsley, Wigmore), LU3 (Leagrave, Bury Park), LU4 (Chaul End, Caddington), and LU5 (Dunstable, Houghton Regis) with the same fast response."
                            },
                            {
                                q: "What tyre brands do you stock for Luton customers?",
                                a: "We carry premium brands including Michelin, Continental, Pirelli, Bridgestone, and Goodyear, as well as mid-range Hankook, Yokohama, and Toyo, plus budget options — all available for same-day fitting in Luton."
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
                <div className="mb-16 border-t border-white/10 pt-8">
                    <h3 className="text-xl font-bold text-white mb-4">Nearby Areas We Also Cover</h3>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/mobile-tyres-hemel-hempstead" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Hemel Hempstead</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-st-albans" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres St Albans</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-watford" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Watford</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-stevenage" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Stevenage</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-aylesbury" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Aylesbury</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-milton-keynes" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Milton Keynes</Link>
                    </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Need Tyres in Luton?</h2>
                    <p className="text-gray-300 mb-8 text-lg">Available 24/7 — call or WhatsApp for an instant quote. We serve all Luton postcodes including Luton Airport.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915" onClick={handlePhoneClick}><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90 w-full sm:w-auto">Call 07427 515915</Button></a>
                        <a href="https://wa.me/447427515915" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase w-full sm:w-auto">WhatsApp Us</Button>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
