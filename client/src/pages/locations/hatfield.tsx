import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ShieldCheck, Clock, Truck, Wrench, Battery, Settings, Lock, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function HatfieldLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Hatfield",
        "description": "Expert mobile tyre fitting in Hatfield. We serve AL9 and AL10 postcodes and the A1(M) J3 corridor. Just 15 miles from our Hemel Hempstead base.",
        "areaServed": { "@type": "City", "name": "Hatfield" },
        "provider": { "@type": "LocalBusiness", "name": "Queensway Mobile Tyres", "telephone": "07427 515915" }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Mobile Tyres Hatfield | Mobile Tyre Fitting Near Me AL9 AL10 | Queensway"
                description="Mobile tyres in Hatfield from £30 — fitted at your home, work or roadside. 24/7 mobile tyre fitter covering AL9, AL10, Hatfield Business Park & A1(M) J3. Puncture repair, new tyres & emergency call-out. Call 07427 515915."
                keywords="mobile tyres Hatfield, mobile tyres near me, mobile tyre fitting Hatfield, mobile tyre fitter Hatfield, tyres Hatfield, mobile tyres AL9, mobile tyres AL10, Hatfield Business Park tyres, A1M J3 tyre breakdown, emergency mobile tyres Hatfield, puncture repair Hatfield"
                image={heroImage}
                schema={schema}
            />
            <Navbar />

            {/* Hero */}
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20"><img src={heroImage} alt="Mobile Tyre Fitting Hatfield" className="w-full h-full object-cover" /></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">QUEENSWAY MOBILE TYRES <br /><span className="text-primary">HATFIELD</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Fast mobile tyre fitting in Hatfield — just 15 miles from our base. We come to you, 24/7.</p>
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
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in Hatfield</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Whether you are at <strong>Hatfield Business Park</strong>, in <strong>Old Hatfield</strong>, or on the <strong>A1(M)</strong>, our mobile tyre vans reach you fast. Just 15 miles from our Hemel Hempstead base, Hatfield is one of our closest and fastest response zones — typically 25–40 minutes.
                        </p>
                        <ul className="space-y-4">
                            {["A1(M) J3 Emergency Response", "Hatfield Business Park Service", "Home Visits in AL9/AL10", "Puncture Repairs & Full Replacements"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white"><ShieldCheck className="text-primary w-5 h-5 shrink-0" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Hatfield Areas Covered</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["Hatfield Town Centre", "Old Hatfield", "Hatfield Business Park", "de Havilland Campus", "Birchwood", "Newgate Street", "Essendon", "Brookmans Park"].map(area => (
                                <div key={area} className="flex items-center gap-2 text-gray-300"><MapPin className="w-4 h-4 text-primary shrink-0" /> <span className="text-sm">{area}</span></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-10">Why Hatfield Drivers Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Clock, title: "Fastest Response in Hertfordshire", desc: "At just 15 miles from our Hemel base, Hatfield is one of our quickest zones — typical arrival 25–40 minutes." },
                            { icon: Truck, title: "Business Park Specialists", desc: "We regularly service Hatfield Business Park — arrange a visit during the day while you work, zero downtime." },
                            { icon: ShieldCheck, title: "A1(M) Coverage", desc: "The A1(M) at Junction 3 (Hatfield) is one of our priority emergency routes — we respond quickly on the hard shoulder." }
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">All Services Available in Hatfield</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Covering <strong>AL9</strong> (Hatfield, Brookmans Park, Essendon) and <strong>AL10</strong> (Hatfield North, de Havilland, Birchwood) postcodes, plus the <strong>A1(M) J3 corridor</strong>. We also extend to nearby St Albans (AL1–AL4) and Welwyn Garden City (AL7/AL8). We carry Michelin, Continental, Pirelli, and budget brands for same-day fitting.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { icon: Truck, label: "Mobile Tyre Fitting Hatfield", desc: "Same-day supply & fit in AL9, AL10 — home, driveway, or business park.", href: "/mobile-tyre-fitting-hemel-hempstead" },
                            { icon: Clock, label: "24/7 Emergency Call-Out Hatfield", desc: "Breakdown on the A1(M) J3? We respond day or night, 365 days a year.", href: "/24-hour-emergency-mobile-tyre-fitting" },
                            { icon: Wrench, label: "Puncture Repair Hatfield", desc: "BS AU 159 standard permanent repairs — done at your location in 20–30 minutes.", href: "/mobile-puncture-repair-near-me" },
                            { icon: Settings, label: "Wheel Balancing Hatfield", desc: "Digital precision balancing included with every new tyre — no garage trip needed.", href: "/mobile-wheel-balancing" },
                            { icon: Battery, label: "Battery Replacement Hatfield", desc: "Dead battery in AL9 or AL10? We supply and fit AGM, EFB & standard batteries on-site.", href: "/mobile-car-battery-replacement" },
                            { icon: Lock, label: "Locking Nut Removal Hatfield", desc: "Lost your locking wheel nut key in Hatfield? Safe removal — no alloy damage guaranteed.", href: "/locking-wheel-nut-removal" },
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Frequently Asked Questions — Hatfield</h2>
                    <div className="space-y-5">
                        {[
                            {
                                q: "How fast can you reach Hatfield in an emergency?",
                                a: "Hatfield is just 15 miles from our Hemel Hempstead base, making it one of our fastest response zones. For most locations in AL9 and AL10, we aim to arrive within 25–40 minutes. For A1(M) J3 roadside emergencies, we can often be there in under 30 minutes."
                            },
                            {
                                q: "Do you service Hatfield Business Park?",
                                a: "Yes — Hatfield Business Park is one of our regular commercial call-out locations. We can attend your unit during working hours. Many clients hand over the keys and return to their desk while we fit tyres on the car park. Call to arrange a convenient time."
                            },
                            {
                                q: "Which AL postcodes do you cover in Hatfield?",
                                a: "We cover AL9 (Hatfield town centre, Old Hatfield, Brookmans Park, Essendon) and AL10 (Hatfield North, de Havilland Campus, Birchwood, Newgate Street). We also serve nearby AL8 (Welwyn Garden City) and AL1–AL4 (St Albans)."
                            },
                            {
                                q: "Do you carry run-flat tyres for BMW and Mercedes in Hatfield?",
                                a: "Yes. Run-flat tyres (RFTs) are very popular with BMW and Mercedes owners in the Hatfield area, including those associated with the University of Hertfordshire campus. We carry Michelin, Continental, and Bridgestone run-flat options for same-day fitting."
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
                        <Link href="/mobile-tyres-welwyn-garden-city" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Welwyn Garden City</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-st-albans" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres St Albans</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-watford" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Watford</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-hemel-hempstead" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Hemel Hempstead</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/locations" className="text-primary hover:text-white hover:underline text-sm font-bold">View All Locations</Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Tyre Emergency in Hatfield?</h2>
                    <p className="text-gray-300 mb-6 text-lg">24/7 mobile tyre service across AL9, AL10, and the A1(M) J3 corridor. One of our fastest response areas.</p>
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
