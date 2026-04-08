import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ShieldCheck, Clock, Truck, Wrench, Battery, Fuel, Settings, Lock, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function HarrowLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Harrow",
        "description": "Expert mobile tyre fitting in Harrow & North West London. We come to you 24/7. Emergency tyre replacement in HA1, HA2, HA3.",
        "areaServed": { "@type": "City", "name": "Harrow" },
        "provider": { "@type": "LocalBusiness", "name": "Queensway Mobile Tyres", "telephone": "07427 515915" }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO title="Mobile Tyres Harrow | Mobile Tyre Fitting Near Me HA1–HA9 | Queensway" description="Mobile tyres in Harrow from £30 — fitted at your home, work or roadside. Mobile tyre fitter covering Harrow, Wealdstone, Pinner, Stanmore, Edgware & HA1–HA9 postcodes. Same-day puncture repair & new tyres. Call 07427 515915." keywords="mobile tyres Harrow, mobile tyres near me, mobile tyre fitting Harrow, mobile tyre fitter Harrow, tyres Harrow, mobile tyres HA1, mobile tyres HA2, mobile tyres HA3, mobile tyres HA8, mobile tyres Wealdstone, mobile tyres Pinner, mobile tyres Stanmore, emergency mobile tyres Harrow, puncture repair Harrow" image={heroImage} schema={schema} />
            <Navbar />
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20"><img src={heroImage} alt="Mobile Tyre Fitting Harrow" className="w-full h-full object-cover" /></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">QUEENSWAY MOBILE TYRES <br /><span className="text-primary">HARROW</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Professional tyre services delivered to your door in Harrow and North West London.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915" onClick={handlePhoneClick}><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90"><Phone className="mr-2 w-5 h-5" /> Call 07427 515915</Button></a>
                        <Link href="/booking"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase">Book Online</Button></Link>
                    </div>
                </div>
            </div>
            <div className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in Harrow</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">Living in Harrow (HA1) or surrounding areas like Pinner and Stanmore? Avoid the traffic and long waits at garages. Queensway Mobile Tyres brings the entire fitting center to your location.</p>
                        <ul className="space-y-4">
                            {["Same Day Appointments", "All HA Postcodes Covered", "Puncture Repairs", "SUV & Van Tyres"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white"><ShieldCheck className="text-primary w-5 h-5 shrink-0" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Harrow Areas Covered</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["Harrow on the Hill", "Wealdstone", "South Harrow", "North Harrow", "Pinner", "Rayners Lane", "Stanmore", "Kenton"].map(area => (
                                <div key={area} className="flex items-center gap-2 text-gray-300"><MapPin className="w-4 h-4 text-primary shrink-0" /> <span className="text-sm">{area}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Why Choose Us */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-10">Why Harrow Drivers Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Clock, title: "Fast Response", desc: "We serve all HA postcodes — Harrow, Pinner, Stanmore, Ruislip — with typical arrival of 30–60 minutes." },
                            { icon: Truck, title: "Avoid London Traffic", desc: "No need to drive on a damaged tyre through heavy North West London traffic. We come to you." },
                            { icon: ShieldCheck, title: "Fully Insured", desc: "Our technicians are trained, certified, and fully insured. We treat your vehicle with the utmost care." }
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

                {/* Services in Harrow */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">All Services Available in Harrow</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Whether you need an <strong>emergency tyre change in Harrow on the Hill</strong>, a scheduled fitting in <strong>Pinner</strong>, or a battery replacement in <strong>Stanmore</strong>, our fully equipped mobile vans are ready. We serve the full HA postcode area (HA1–HA9) with Michelin, Continental, Pirelli, and budget tyres in stock.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { icon: Truck, label: "Mobile Tyre Fitting Harrow", desc: "Same-day supply & fit in HA1, HA2, HA3 and all Harrow postcodes.", href: "/mobile-tyre-fitting-hemel-hempstead" },
                            { icon: Clock, label: "24/7 Emergency Call-Out Harrow", desc: "Rapid roadside response in Harrow and North West London.", href: "/24-hour-emergency-mobile-tyre-fitting" },
                            { icon: Wrench, label: "Puncture Repair Harrow", desc: "BS AU 159 compliant repairs at your location. Cheaper than a new tyre.", href: "/mobile-puncture-repair-near-me" },
                            { icon: Settings, label: "Wheel Balancing Harrow", desc: "Stop the steering wheel vibration. Digital balancing at your door.", href: "/mobile-wheel-balancing" },
                            { icon: Battery, label: "Battery Replacement Harrow", desc: "Dead battery? We supply and fit at your Harrow location.", href: "/mobile-car-battery-replacement" },
                            { icon: Lock, label: "Locking Nut Removal Harrow", desc: "Lost your locking key? Specialist removal without alloy damage.", href: "/locking-wheel-nut-removal" },
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Frequently Asked Questions — Harrow</h2>
                    <div className="space-y-5">
                        {[
                            {
                                q: "How fast can you reach Harrow town centre?",
                                a: "From our Hertfordshire base via the A409 or M1/North Circular, we typically reach Harrow town centre (HA1) within 45–60 minutes. For urgent calls, we prioritise the nearest available van."
                            },
                            {
                                q: "Do you cover Pinner, Stanmore, and Ruislip?",
                                a: "Yes — we cover all HA postcodes including HA1 (Harrow), HA2 (South Harrow), HA3 (Kenton, Wealdstone), HA4 (Ruislip), HA5 (Pinner), HA7 (Stanmore), HA8 (Edgware) and HA9 (Wembley)."
                            },
                            {
                                q: "What tyre brands do you carry for Harrow customers?",
                                a: "We stock a wide range from Michelin, Continental, and Pirelli at the premium end, to Hankook, Yokohama, and Nexen at budget-friendly prices. We also carry run-flat and low-profile tyres for popular Harrow vehicles including BMWs and Mercedes."
                            },
                            {
                                q: "Can you help if my locking wheel nut key is missing?",
                                a: "Absolutely — locking wheel nut removal is one of our specialist services. We use Dynomec tools to safely remove the nut without welding or drilling, protecting your alloy wheels."
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
                        <Link href="/mobile-tyres-london" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres North London</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-watford" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Watford</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-slough" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Slough</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-hemel-hempstead" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Hemel Hempstead</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/locations" className="text-primary hover:text-white hover:underline text-sm font-bold">All Locations</Link>
                    </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Tyre Emergency in Harrow?</h2>
                    <p className="text-gray-300 mb-6 text-lg">24/7 service available across all Harrow postcodes and North West London. Call or WhatsApp for an instant quote.</p>
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
