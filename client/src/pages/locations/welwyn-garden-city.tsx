import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ShieldCheck, Clock, Truck, Wrench, Battery, Settings, Lock, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function WelwynGardenCityLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Welwyn Garden City",
        "description": "Expert mobile tyre fitting in Welwyn Garden City. We serve AL7 and AL8 postcodes and the A1(M) J4 corridor. 24/7 service from our Hemel Hempstead base.",
        "areaServed": { "@type": "City", "name": "Welwyn Garden City" },
        "provider": { "@type": "LocalBusiness", "name": "Queensway Mobile Tyres", "telephone": "07427 515915" }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Mobile Tyres Welwyn Garden City | Mobile Tyre Fitting Near Me AL7 AL8 | Queensway"
                description="Mobile tyres in Welwyn Garden City from £30 — fitted at your home, work or roadside. 24/7 mobile tyre fitter covering AL7, AL8 & A1(M) J4. New tyres, puncture repair & emergency call-out. Call 07427 515915."
                keywords="mobile tyres Welwyn Garden City, mobile tyres near me, mobile tyre fitting Welwyn Garden City, mobile tyre fitter Welwyn Garden City, tyres Welwyn Garden City, mobile tyres AL7, mobile tyres AL8, A1M J4 tyre breakdown, emergency mobile tyres Welwyn, puncture repair Welwyn Garden City"
                image={heroImage}
                schema={schema}
            />
            <Navbar />

            {/* Hero */}
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20"><img src={heroImage} alt="Mobile Tyre Fitting Welwyn Garden City" className="w-full h-full object-cover" /></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">QUEENSWAY MOBILE TYRES <br /><span className="text-primary">WELWYN GARDEN CITY</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Rapid mobile tyre fitting in Welwyn Garden City and the A1(M) corridor — 24/7 coverage.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915" onClick={handlePhoneClick}><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90"><Phone className="mr-2 w-5 h-5" /> Call 07427 515915</Button></a>
                        <Link href="/booking"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase">Book Online</Button></Link>
                    </div>
                </div>
            </div>

            <div className="py-16 container mx-auto px-4">
                {/* Intro Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in Welwyn Garden City</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Whether you are in <strong>Welwyn Garden City town centre</strong>, at the <strong>Panasonic campus</strong>, or on the <strong>A1(M)</strong>, our mobile tyre vans reach you fast. Just 18 miles from our Hemel Hempstead base, we cover the full AL7 and AL8 postcode area plus the A1(M) Junction 4 corridor.
                        </p>
                        <ul className="space-y-4">
                            {["A1(M) J4 Emergency Response", "Welwyn Garden City Town Coverage", "Home & Work Visits in AL7/AL8", "Puncture Repairs & Full Replacements"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white"><ShieldCheck className="text-primary w-5 h-5 shrink-0" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">WGC Areas Covered</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["Town Centre", "Handside", "Sherrards", "Digswell", "Panshanger", "Hatfield Hyde", "Welwyn Village", "Cole Green"].map(area => (
                                <div key={area} className="flex items-center gap-2 text-gray-300"><MapPin className="w-4 h-4 text-primary shrink-0" /> <span className="text-sm">{area}</span></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-10">Why Welwyn Garden City Drivers Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Clock, title: "A1(M) Fast Response", desc: "Our vans reach A1(M) Junction 4 (Welwyn Garden City) breakdowns typically within 35–50 minutes." },
                            { icon: Truck, title: "We Come to You", desc: "From a home driveway in Panshanger to a business park visit near the A1(M) — we bring everything to you." },
                            { icon: ShieldCheck, title: "Fully Transparent", desc: "No surprise charges. We quote tyre, balancing, fitting, and call-out before we set off." }
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

                {/* Services */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">All Services Available in Welwyn Garden City</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Covering <strong>AL7</strong> (Welwyn Garden City) and <strong>AL8</strong> (WGC North, Welwyn Village) postcodes, plus the <strong>A1(M) between Junctions 4 and 6</strong>. We also extend to Hertford (SG13), Hatfield (AL9/AL10), and St Albans (AL1–AL4). We carry Michelin, Continental, Pirelli, and budget brands for same-day fitting.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { icon: Truck, label: "Mobile Tyre Fitting Welwyn Garden City", desc: "Same-day supply & fit in AL7, AL8 — home, driveway, or office car park.", href: "/mobile-tyre-fitting-hemel-hempstead" },
                            { icon: Clock, label: "24/7 Emergency Call-Out WGC", desc: "Breakdown on the A1(M) J4? We respond around the clock, all year.", href: "/24-hour-emergency-mobile-tyre-fitting" },
                            { icon: Wrench, label: "Puncture Repair Welwyn Garden City", desc: "BS AU 159 permanent repairs at your location — home or roadside.", href: "/mobile-puncture-repair-near-me" },
                            { icon: Settings, label: "Wheel Balancing Welwyn Garden City", desc: "Digital precision balancing — done at your door, no garage visit needed.", href: "/mobile-wheel-balancing" },
                            { icon: Battery, label: "Battery Replacement WGC", desc: "Dead battery in AL7 or AL8? We supply & fit on-site, including AGM and EFB.", href: "/mobile-car-battery-replacement" },
                            { icon: Lock, label: "Locking Nut Removal Welwyn Garden City", desc: "Lost your locking key in WGC? Safe specialist removal without alloy damage.", href: "/locking-wheel-nut-removal" },
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Frequently Asked Questions — Welwyn Garden City</h2>
                    <div className="space-y-5">
                        {[
                            {
                                q: "Do you cover the A1(M) near Welwyn Garden City?",
                                a: "Yes. The A1(M) between Junction 4 (WGC South) and Junction 6 (Welwyn North) is within our priority emergency corridor. If you break down, move to a safe location, activate hazard lights, and call us on 07427 515915. We typically arrive within 35–50 minutes."
                            },
                            {
                                q: "Which postcodes do you serve in and around WGC?",
                                a: "We cover AL7 (Welwyn Garden City town centre, Panshanger, Handside) and AL8 (WGC North, Digswell, Welwyn Village). We also extend to nearby AL9 (Hatfield), AL10 (Hatfield North), and SG13 (Hertford East)."
                            },
                            {
                                q: "Can you fit tyres at WGC business parks?",
                                a: "Yes — Welwyn Garden City has several large business parks including those near Mundells, the Broadwater Road area, and the Panasonic/GSK campuses. We can attend during working hours for fleet or individual vehicle tyre replacements."
                            },
                            {
                                q: "Do you serve Welwyn village as well as the Garden City?",
                                a: "Yes. Welwyn village (AL6) is approximately 3 miles north of Welwyn Garden City and is within our regular coverage area. We treat it as part of the WGC service zone — same response times apply."
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
                        <Link href="/mobile-tyres-hatfield" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Hatfield</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-st-albans" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres St Albans</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-stevenage" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Stevenage</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-luton" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Luton</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/locations" className="text-primary hover:text-white hover:underline text-sm font-bold">View All Locations</Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Tyre Problem in Welwyn Garden City?</h2>
                    <p className="text-gray-300 mb-6 text-lg">24/7 mobile tyre service across AL7, AL8, and the A1(M) J4 corridor. Call or WhatsApp for an instant quote.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915" onClick={handlePhoneClick}><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90 w-full sm:w-auto"><Phone className="mr-2 w-5 h-5" />Call 07427 515915</Button></a>
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
