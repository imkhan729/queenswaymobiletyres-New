import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ShieldCheck, Clock, Truck, Wrench, Battery, Settings, Lock, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function HighWycombeLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres High Wycombe",
        "description": "Expert mobile tyre fitting in High Wycombe. We serve HP10–HP15 postcodes and the M40 J4 corridor. 24/7 service from our Hemel Hempstead base.",
        "areaServed": { "@type": "City", "name": "High Wycombe" },
        "provider": { "@type": "LocalBusiness", "name": "Queensway Mobile Tyres", "telephone": "07427 515915" }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Mobile Tyres High Wycombe | Mobile Tyre Fitting Near Me HP10–HP15 | Queensway"
                description="Mobile tyres in High Wycombe from £30 — fitted at your home, work or roadside. 24/7 mobile tyre fitter covering HP10–HP15 & the M40 J4 corridor. New tyres, puncture repair & emergency call-out. Call 07427 515915."
                keywords="mobile tyres High Wycombe, mobile tyres near me, mobile tyre fitting High Wycombe, mobile tyre fitter High Wycombe, tyres High Wycombe, mobile tyres HP10, mobile tyres HP11, mobile tyres HP12, mobile tyres HP13, mobile tyres HP14, mobile tyres HP15, M40 J4 tyre breakdown, emergency mobile tyres High Wycombe, puncture repair High Wycombe"
                image={heroImage}
                schema={schema}
            />
            <Navbar />

            {/* Hero */}
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20"><img src={heroImage} alt="Mobile Tyre Fitting High Wycombe" className="w-full h-full object-cover" /></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">QUEENSWAY MOBILE TYRES <br /><span className="text-primary">HIGH WYCOMBE</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Fast mobile tyre fitting in High Wycombe and across South Buckinghamshire — we come to you.</p>
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
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in High Wycombe</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Whether you are in <strong>High Wycombe town centre</strong>, at <strong>Cressex Business Park</strong>, or commuting along the <strong>M40</strong>, our mobile tyre vans reach you fast. Located just 22 miles from our Hemel Hempstead base, we provide rapid coverage for all HP postcodes in and around Wycombe.
                        </p>
                        <ul className="space-y-4">
                            {["M40 J4 Emergency Response", "High Wycombe Town Coverage", "Home & Work Visits in HP Postcodes", "Puncture Repairs & Wheel Balancing"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white"><ShieldCheck className="text-primary w-5 h-5 shrink-0" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">High Wycombe Areas Covered</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["High Wycombe Centre", "Cressex", "Micklefield", "Downley", "Naphill", "Hazlemere", "Booker", "Loudwater"].map(area => (
                                <div key={area} className="flex items-center gap-2 text-gray-300"><MapPin className="w-4 h-4 text-primary shrink-0" /> <span className="text-sm">{area}</span></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-10">Why High Wycombe Drivers Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Clock, title: "M40 Fast Response", desc: "Our vans are positioned to reach M40 J4 (High Wycombe) breakdowns typically within 40–55 minutes." },
                            { icon: Truck, title: "We Come to You", desc: "From your driveway in Downley to Cressex Business Park — we bring the full workshop to you." },
                            { icon: ShieldCheck, title: "No Hidden Fees", desc: "Full upfront pricing on every job — tyre, fitting, balancing, and call-out all quoted before dispatch." }
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">All Services Available in High Wycombe</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Covering <strong>HP10, HP11, HP12, HP13, HP14, HP15</strong> postcodes, the <strong>M40 J4 corridor</strong>, and surrounding South Buckinghamshire towns including Marlow, Beaconsfield, and Amersham. We stock Michelin, Continental, Pirelli, and budget brands for same-day fitting.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { icon: Truck, label: "Mobile Tyre Fitting High Wycombe", desc: "Same-day supply & fit across all HP10–HP15 postcodes — home or work.", href: "/mobile-tyre-fitting-hemel-hempstead" },
                            { icon: Clock, label: "24/7 Emergency Call-Out High Wycombe", desc: "Blowout on the M40 J4 or A40? We dispatch immediately, day or night.", href: "/24-hour-emergency-mobile-tyre-fitting" },
                            { icon: Wrench, label: "Puncture Repair High Wycombe", desc: "BS AU 159 compliant permanent repairs — faster and often cheaper than a full replacement.", href: "/mobile-puncture-repair-near-me" },
                            { icon: Settings, label: "Wheel Balancing High Wycombe", desc: "Digital precision balancing at your door — stops vibration, extends tyre life.", href: "/mobile-wheel-balancing" },
                            { icon: Battery, label: "Battery Replacement High Wycombe", desc: "Dead battery in HP postcodes? We supply and fit AGM, EFB & standard batteries.", href: "/mobile-car-battery-replacement" },
                            { icon: Lock, label: "Locking Nut Removal High Wycombe", desc: "Lost your locking wheel nut key? Specialist removal — no alloy damage.", href: "/locking-wheel-nut-removal" },
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Frequently Asked Questions — High Wycombe</h2>
                    <div className="space-y-5">
                        {[
                            {
                                q: "Do you cover M40 Junction 4 near High Wycombe?",
                                a: "Yes. M40 Junction 4 (High Wycombe) is within our priority emergency corridor. If you break down on the M40 between Junctions 3 and 5, move to a safe location and call us on 07427 515915. We aim to reach you within 45–60 minutes."
                            },
                            {
                                q: "Which HP postcodes do you serve in High Wycombe?",
                                a: "We cover HP10 (Wooburn Green, Loudwater), HP11 (High Wycombe East), HP12 (High Wycombe West, Cressex), HP13 (High Wycombe Centre, Downley), HP14 (Stokenchurch, Naphill), and HP15 (Hazlemere, Holmer Green). We also extend to Marlow (SL7) and Beaconsfield (HP9)."
                            },
                            {
                                q: "Can you service Cressex Business Park?",
                                a: "Yes — Cressex Business Park is one of our regular locations. We can arrange an early-morning or lunchtime visit to fit your tyres with minimal disruption to the working day. Just call or WhatsApp us to book."
                            },
                            {
                                q: "Do you cover Marlow and Beaconsfield from High Wycombe?",
                                a: "Absolutely. Marlow (SL7) is approximately 7 miles from High Wycombe and well within our service radius. Beaconsfield (HP9) is similarly close. Both are easily reachable — call us for a quote and estimated arrival time."
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
                        <Link href="/mobile-tyres-aylesbury" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Aylesbury</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-slough" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Slough</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-watford" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Watford</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/locations" className="text-primary hover:text-white hover:underline text-sm font-bold">View All Locations</Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Tyre Emergency in High Wycombe?</h2>
                    <p className="text-gray-300 mb-6 text-lg">24/7 mobile tyre service across HP10–HP15, M40 J4, and surrounding South Buckinghamshire areas.</p>
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
