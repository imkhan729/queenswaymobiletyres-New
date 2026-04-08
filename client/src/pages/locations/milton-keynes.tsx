import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ShieldCheck, Clock, Truck, Wrench, Battery, Fuel, Settings, Lock, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function MiltonKeynesLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Milton Keynes",
        "description": "Professional mobile tyre fitting in Milton Keynes (MK). 24/7 emergency coverage across the grid system and M1 Junctions 13-14.",
        "areaServed": { "@type": "City", "name": "Milton Keynes" },
        "provider": { "@type": "LocalBusiness", "name": "Queensway Mobile Tyres", "telephone": "07427 515915" }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO title="Mobile Tyres Milton Keynes | Mobile Tyre Fitting Near Me MK1–MK19 | Queensway" description="Mobile tyres in Milton Keynes from £30 — fitted at your home, work or roadside. 24/7 mobile tyre fitter covering all MK postcodes, Bletchley, Wolverton & M1 J13–14. New tyres, puncture repair & emergency call-out. Call 07427 515915." keywords="mobile tyres Milton Keynes, mobile tyres near me, mobile tyre fitting Milton Keynes, mobile tyre fitter Milton Keynes, tyres Milton Keynes, mobile tyres MK1, mobile tyres MK2, mobile tyres MK9, mobile tyres MK14, mobile tyres MK19, mobile tyres Bletchley, mobile tyres Wolverton, M1 J13 tyres, emergency mobile tyres Milton Keynes" image={heroImage} schema={schema} />
            <Navbar />
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20"><img src={heroImage} alt="Mobile Tyre Fitting Milton Keynes" className="w-full h-full object-cover" /></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">QUEENSWAY MOBILE TYRES <br /><span className="text-primary">MILTON KEYNES</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Serving Milton Keynes and surrounding Buckinghamshire areas with rapid mobile tyre services.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915" onClick={handlePhoneClick}><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90"><Phone className="mr-2 w-5 h-5" /> Call 07427 515915</Button></a>
                        <Link href="/booking"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase">Book Online</Button></Link>
                    </div>
                </div>
            </div>
            <div className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in MK</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">Whether you are shopping at <strong>The Centre:MK</strong> or working in <strong>Bletchley</strong>, a flat tyre shouldn't ruin your day. Our mobile technicians navigate the Milton Keynes grid roads efficiently to reach you fast.</p>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">We provide complete coverage for all MK postcodes, offering everything from puncture repairs to full set replacements on your driveway.</p>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">MK Areas Covered</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["Central Milton Keynes", "Bletchley", "Wolverton", "Newport Pagnell", "Stony Stratford", "Kingston", "Shenley", "Woburn Sands"].map(area => (
                                <div key={area} className="flex items-center gap-2 text-gray-300"><MapPin className="w-4 h-4 text-primary shrink-0" /> <span className="text-sm">{area}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Why Choose Us */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-10">Why Milton Keynes Drivers Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Clock, title: "Grid Road Expert", desc: "Our technicians know the MK grid road system inside-out, meaning faster arrival times than any local garage call-out." },
                            { icon: Truck, title: "We Come to You", desc: "Whether you're at Centre:MK, working in Bletchley, or at home in Shenley — we bring the workshop to your door." },
                            { icon: ShieldCheck, title: "Fully Insured Technicians", desc: "All our technicians are trained, DBS-checked, and fully insured. Your vehicle is in safe hands." }
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">All Services Available in Milton Keynes</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Covering all MK postcodes, <strong>M1 Junctions 13 and 14</strong>, and surrounding Buckinghamshire towns including Newport Pagnell and Stony Stratford. We stock Michelin, Continental, Pirelli, Goodyear, and budget brands for same-day fitting.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { icon: Truck, label: "Mobile Tyre Fitting Milton Keynes", desc: "Same-day supply & fit across all MK postcodes — home, work, or grid road breakdown.", href: "/mobile-tyre-fitting-hemel-hempstead" },
                            { icon: Clock, label: "24/7 Emergency Call-Out MK", desc: "Blowout on the M1 J13–14 or A5? We dispatch immediately, day or night.", href: "/24-hour-emergency-mobile-tyre-fitting" },
                            { icon: Wrench, label: "Puncture Repair Milton Keynes", desc: "BS AU 159 standard permanent repairs — often cheaper than a full replacement.", href: "/mobile-puncture-repair-near-me" },
                            { icon: Settings, label: "Wheel Balancing Milton Keynes", desc: "Digital balancing included with every fitting — we come to your driveway.", href: "/mobile-wheel-balancing" },
                            { icon: Battery, label: "Battery Replacement Milton Keynes", desc: "Dead battery in MK? We supply and fit AGM, EFB, and standard batteries.", href: "/mobile-car-battery-replacement" },
                            { icon: Fuel, label: "Emergency Fuel Delivery MK", desc: "Run dry near Milton Keynes? We deliver petrol or diesel to your location.", href: "/emergency-fuel-delivery" },
                            { icon: Lock, label: "Locking Nut Removal Milton Keynes", desc: "Lost your locking wheel nut key? Safe specialist removal at your door.", href: "/locking-wheel-nut-removal" },
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Frequently Asked Questions — Milton Keynes</h2>
                    <div className="space-y-5">
                        {[
                            {
                                q: "Can you navigate the MK grid roads quickly?",
                                a: "Absolutely. Our technicians are very familiar with Milton Keynes' unique grid road system and can reach most postcodes within 30–60 minutes of your call. We also have knowledge of H-roads and V-roads for the fastest routing."
                            },
                            {
                                q: "Do you cover M1 Junctions 13 and 14?",
                                a: "Yes — M1 Junction 13 (Northampton South) and Junction 14 (Milton Keynes) are both within our priority emergency response corridor. If you break down between these junctions, call us immediately on 07427 515915."
                            },
                            {
                                q: "What MK postcodes do you cover?",
                                a: "We cover all Milton Keynes postcodes including MK1 (Bletchley), MK2 (Fenny Stratford), MK3 (Central MK), MK4 (Emerson Valley), MK6 (Springfield), MK7 (Wavendon), MK8 (Crownhill), MK9 (CMK), MK10–17, and surrounding areas including Newport Pagnell and Woburn Sands."
                            },
                            {
                                q: "Can you fit tyres at Milton Keynes Business Parks?",
                                a: "Yes — we regularly service Shenley Brook End, Tongwell, and other MK business parks. We can arrange a van to fit your tyres while you're at your desk, with zero disruption to your working day."
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
                        <Link href="/mobile-tyres-aylesbury" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Aylesbury</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-luton" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Luton</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-hemel-hempstead" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Hemel Hempstead</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-slough" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Slough</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/locations" className="text-primary hover:text-white hover:underline text-sm font-bold">View All Locations</Link>
                    </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Need Tyres in Milton Keynes?</h2>
                    <p className="text-gray-300 mb-6 text-lg">24/7 mobile tyre service across all MK postcodes, M1 J13–14, and surrounding Buckinghamshire areas.</p>
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
