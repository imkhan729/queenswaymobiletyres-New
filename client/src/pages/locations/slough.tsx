import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ShieldCheck, Clock, Truck, Wrench, Battery, Fuel, Settings, Lock, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function SloughLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Slough",
        "description": "Professional mobile tyre fitting in Slough & M4 Corridor. We cover SL1, SL2, SL3 and surrounding Berkshire areas 24/7.",
        "areaServed": { "@type": "City", "name": "Slough" },
        "provider": { "@type": "LocalBusiness", "name": "Queensway Mobile Tyres", "telephone": "07427 515915" }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO title="Mobile Tyres Slough | Mobile Tyre Fitting Near Me SL1–SL3 | Queensway" description="Mobile tyres in Slough from £30 — fitted at your home, work or roadside. 24/7 mobile tyre fitter covering Slough, Langley, Burnham, SL1–SL3 & M4 corridor. New tyres, puncture repair & emergency call-out. Call 07427 515915." keywords="mobile tyres Slough, mobile tyres near me, mobile tyre fitting Slough, mobile tyre fitter Slough, tyres Slough, mobile tyres SL1, mobile tyres SL2, mobile tyres SL3, mobile tyres Langley, mobile tyres Burnham, M4 tyre breakdown, emergency mobile tyres Slough, puncture repair Slough" image={heroImage} schema={schema} />
            <Navbar />
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20"><img src={heroImage} alt="Mobile Tyre Fitting Slough" className="w-full h-full object-cover" /></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">QUEENSWAY MOBILE TYRES <br /><span className="text-primary">SLOUGH</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Serving Slough, Trading Estate, and M4 corridor with rapid tyre replacement.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915" onClick={handlePhoneClick}><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90"><Phone className="mr-2 w-5 h-5" /> Call 07427 515915</Button></a>
                        <Link href="/booking"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase">Book Online</Button></Link>
                    </div>
                </div>
            </div>
            <div className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in Slough</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">Whether you are at work in the <strong>Slough Trading Estate</strong> or at home in <strong>Langley</strong>, we bring the tyre depot to you. Our vans are always nearby for fast M4 motorway response.</p>
                        <ul className="space-y-4">
                            {["M4 Motorway Coverage", "Trading Estate Service", "Same Day Fitting", "All SL Postcodes"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white"><ShieldCheck className="text-primary w-5 h-5 shrink-0" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Slough Areas Covered</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["Cippenham", "Burnham", "Langley", "Colnbrook", "Britwell", "Upton", "Chalvey", "Wexham"].map(area => (
                                <div key={area} className="flex items-center gap-2 text-gray-300"><MapPin className="w-4 h-4 text-primary shrink-0" /> <span className="text-sm">{area}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Services in Slough */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">All Services Available in Slough</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Our fully equipped mobile vans cover the entire Slough area including <strong>Slough Trading Estate</strong>, <strong>Langley</strong>, <strong>Burnham</strong>, and the <strong>M4 corridor</strong>. We stock Michelin, Continental, Pirelli, and budget brands including Nexen and Hankook, all available for same-day fitting.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { icon: Truck, label: "Mobile Tyre Fitting Slough", desc: "Supply & fit in SL1, SL2, SL3 and all Slough postcodes — home, work or M4 roadside.", href: "/mobile-tyre-fitting-hemel-hempstead" },
                            { icon: Clock, label: "24/7 Emergency Call-Out Slough", desc: "Breakdown on the M4? Our team responds day and night.", href: "/24-hour-emergency-mobile-tyre-fitting" },
                            { icon: Wrench, label: "Puncture Repair Slough", desc: "BS AU 159 compliant permanent repairs at your location.", href: "/mobile-puncture-repair-near-me" },
                            { icon: Settings, label: "Wheel Balancing Slough", desc: "Digital computerised balancing — included with every tyre fit.", href: "/mobile-wheel-balancing" },
                            { icon: Battery, label: "Battery Replacement Slough", desc: "Car won't start? We supply and fit the right battery on-site.", href: "/mobile-car-battery-replacement" },
                            { icon: Lock, label: "Locking Nut Removal Slough", desc: "Specialist removal without damage to your alloy wheels.", href: "/locking-wheel-nut-removal" },
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Frequently Asked Questions — Slough</h2>
                    <div className="space-y-5">
                        {[
                            {
                                q: "Do you cover the M4 motorway near Slough?",
                                a: "Yes — we provide emergency roadside tyre fitting on the M4 between Junctions 5 and 8/9. If you break down on the M4 near Slough, pull over safely, turn on hazard lights, and call us on 07427 515915."
                            },
                            {
                                q: "Can you fit tyres at the Slough Trading Estate?",
                                a: "Absolutely. The Slough Trading Estate is one of our regular call-out areas. We can arrange a van to meet you at your unit during your working day so you don't have to take time off."
                            },
                            {
                                q: "What SL postcodes do you cover?",
                                a: "We cover SL1 (Slough), SL2 (Cippenham, Farnham Royal), SL3 (Langley, Colnbrook), and also extend into nearby SL6 (Maidenhead) and SL9 (Chalfont St Giles)."
                            },
                            {
                                q: "Is there a call-out fee for Slough customers?",
                                a: "Yes, there is a call-out fee which varies by time of day. We quote the complete price — tyres, fitting, balancing, and call-out — before dispatching. No surprises."
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
                        <Link href="/mobile-tyres-harrow" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Harrow</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-london" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres North London</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-hemel-hempstead" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Hemel Hempstead</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-watford" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Watford</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-milton-keynes" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Milton Keynes</Link>
                    </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Tyre Trouble in Slough?</h2>
                    <p className="text-gray-300 mb-6 text-lg">Available 24/7 for emergency and scheduled tyre fitting across all Slough and SL postcodes.</p>
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
