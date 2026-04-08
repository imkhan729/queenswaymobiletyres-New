import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ShieldCheck, Clock, Truck, Wrench, Battery, Settings, Lock, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function AylesburyLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Aylesbury",
        "description": "Expert mobile tyre fitting in Aylesbury and Aylesbury Vale. We serve HP17–HP22 postcodes and the A41 corridor. 24/7 service from our Hemel Hempstead base.",
        "areaServed": { "@type": "City", "name": "Aylesbury" },
        "provider": { "@type": "LocalBusiness", "name": "Queensway Mobile Tyres", "telephone": "07427 515915" }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Mobile Tyres Aylesbury | Mobile Tyre Fitting Near Me HP17–HP22 | Queensway"
                description="Mobile tyres in Aylesbury from £30 — fitted at your home, work or roadside. 24/7 mobile tyre fitter covering HP17–HP22, the A41 & A418 corridor and Aylesbury Vale. Puncture repair, new tyres & emergency call-out. Call 07427 515915."
                keywords="mobile tyres Aylesbury, mobile tyres near me, mobile tyre fitting Aylesbury, mobile tyre fitter Aylesbury, tyres Aylesbury, mobile tyres HP17, mobile tyres HP18, mobile tyres HP19, mobile tyres HP20, mobile tyres HP21, mobile tyres HP22, emergency mobile tyres Aylesbury, puncture repair Aylesbury, A41 tyre breakdown, Aylesbury Vale tyres"
                image={heroImage}
                schema={schema}
            />
            <Navbar />

            {/* Hero */}
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20"><img src={heroImage} alt="Mobile Tyre Fitting Aylesbury" className="w-full h-full object-cover" /></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">QUEENSWAY MOBILE TYRES <br /><span className="text-primary">AYLESBURY</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Professional mobile tyre fitting in Aylesbury and across Aylesbury Vale — we come to you, 24/7.</p>
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
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in Aylesbury</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Whether you are near <strong>Aylesbury town centre</strong>, in <strong>Bedgrove</strong>, or out at <strong>Haddenham</strong>, our fully-equipped mobile tyre vans reach you fast. Just 22 miles from our Hemel Hempstead base, we specialise in A41 and A418 roadside assistance across Aylesbury Vale.
                        </p>
                        <ul className="space-y-4">
                            {["A41 & A418 Emergency Response", "Full Aylesbury Town Coverage", "Home & Work Visits in HP Postcodes", "Puncture Repairs & Full Replacements"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white"><ShieldCheck className="text-primary w-5 h-5 shrink-0" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Aylesbury Areas Covered</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["Aylesbury Town Centre", "Bedgrove", "Fairford Leys", "Stoke Mandeville", "Bierton", "Haddenham", "Wendover", "Weston Turville"].map(area => (
                                <div key={area} className="flex items-center gap-2 text-gray-300"><MapPin className="w-4 h-4 text-primary shrink-0" /> <span className="text-sm">{area}</span></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-10">Why Aylesbury Drivers Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Clock, title: "A41 Fast Response", desc: "Based 22 miles from Aylesbury, we reach A41 and A418 breakdowns typically within 45–60 minutes." },
                            { icon: Truck, title: "Full Mobile Workshop", desc: "From your driveway in Bedgrove to your office on Rabans Lane — we bring the complete tyre fitting kit to you." },
                            { icon: ShieldCheck, title: "Transparent Pricing", desc: "No surprise call-out fees. We quote the full cost — tyre, balancing, fitting — before we set off." }
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">All Services Available in Aylesbury</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Covering <strong>HP17, HP18, HP19, HP20, HP21, HP22</strong> postcodes, the <strong>A41 and A418 corridors</strong>, and surrounding Buckinghamshire villages including Princes Risborough (HP27) and Thame. We carry Michelin, Continental, Pirelli, and budget brands for same-day fitting.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { icon: Truck, label: "Mobile Tyre Fitting Aylesbury", desc: "Same-day supply & fit across all HP postcodes — home, work, or roadside.", href: "/mobile-tyre-fitting-hemel-hempstead" },
                            { icon: Clock, label: "24/7 Emergency Call-Out Aylesbury", desc: "Breakdown on the A41 or A418 near Aylesbury? We respond day or night.", href: "/24-hour-emergency-mobile-tyre-fitting" },
                            { icon: Wrench, label: "Puncture Repair Aylesbury", desc: "BS AU 159 compliant permanent repairs at your Aylesbury location.", href: "/mobile-puncture-repair-near-me" },
                            { icon: Settings, label: "Wheel Balancing Aylesbury", desc: "Digital precision balancing — eliminates vibration, extends tyre life.", href: "/mobile-wheel-balancing" },
                            { icon: Battery, label: "Battery Replacement Aylesbury", desc: "Dead battery in Aylesbury? We supply and fit AGM, EFB & standard batteries.", href: "/mobile-car-battery-replacement" },
                            { icon: Lock, label: "Locking Nut Removal Aylesbury", desc: "Lost your locking wheel nut key? Safe specialist removal at your door.", href: "/locking-wheel-nut-removal" },
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Frequently Asked Questions — Aylesbury</h2>
                    <div className="space-y-5">
                        {[
                            {
                                q: "Do you cover the A41 near Aylesbury?",
                                a: "Yes. The A41 between Hemel Hempstead and Aylesbury is one of our key routes. If you suffer a blowout or flat on the A41, move to a safe area, activate hazard lights, and call us on 07427 515915. We'll aim to reach you within 45–60 minutes."
                            },
                            {
                                q: "Which HP postcodes do you serve in Aylesbury?",
                                a: "We cover HP17 (Stone, Dinton), HP18 (Cuddington, Haddenham), HP19 (Aylesbury North), HP20 (Aylesbury East), HP21 (Aylesbury South), and HP22 (Weston Turville, Wendover, Stoke Mandeville). We also extend to HP27 (Princes Risborough) and can reach Thame on request."
                            },
                            {
                                q: "Can you fit tyres at Aylesbury business parks?",
                                a: "Absolutely. We regularly service Rabans Lane, Gatehouse Way, Brunel Road, and other Aylesbury business parks. We can attend your unit during working hours — tyres fitted while you work, zero disruption to your day."
                            },
                            {
                                q: "What tyre brands are available in Aylesbury?",
                                a: "We stock Michelin, Continental, Pirelli, Bridgestone, Goodyear, and Dunlop at the premium end, plus Hankook, Toyo, and Nexen for budget-conscious customers. All available for same-day fitting in Aylesbury."
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
                        <Link href="/mobile-tyres-hemel-hempstead" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Hemel Hempstead</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-high-wycombe" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres High Wycombe</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-milton-keynes" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Milton Keynes</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-slough" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Slough</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/locations" className="text-primary hover:text-white hover:underline text-sm font-bold">View All Locations</Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Tyre Emergency in Aylesbury?</h2>
                    <p className="text-gray-300 mb-6 text-lg">Available 24/7 for emergency and scheduled tyre fitting across all HP postcodes and the A41/A418 corridor.</p>
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
