import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ShieldCheck, Clock, Truck, Wrench, Battery, Fuel, Settings, Lock, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function StevenageLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Stevenage",
        "description": "Expert mobile tyre fitting in Stevenage. We cover SG1, SG2 and A1(M) corridor. 24/7 service.",
        "areaServed": { "@type": "City", "name": "Stevenage" },
        "provider": { "@type": "LocalBusiness", "name": "Queensway Mobile Tyres", "telephone": "07427 515915" }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO title="Mobile Tyres Stevenage | Mobile Tyre Fitting Near Me SG1 SG2 | Queensway" description="Mobile tyres in Stevenage from £30 — fitted at your home, work or roadside. 24/7 mobile tyre fitter covering SG1, SG2 & A1(M) J7–J8. New tyres, puncture repair & emergency call-out. Call 07427 515915." keywords="mobile tyres Stevenage, mobile tyres near me, mobile tyre fitting Stevenage, mobile tyre fitter Stevenage, tyres Stevenage, mobile tyres SG1, mobile tyres SG2, A1M Stevenage tyre breakdown, emergency mobile tyres Stevenage, puncture repair Stevenage" image={heroImage} schema={schema} />
            <Navbar />
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20"><img src={heroImage} alt="Mobile Tyre Fitting Stevenage" className="w-full h-full object-cover" /></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">QUEENSWAY MOBILE TYRES <br /><span className="text-primary">STEVENAGE</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Rapid response tyre fitting in Stevenage and along the A1(M).</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915" onClick={handlePhoneClick}><Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90"><Phone className="mr-2 w-5 h-5" /> Call 07427 515915</Button></a>
                        <Link href="/booking"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase">Book Online</Button></Link>
                    </div>
                </div>
            </div>
            <div className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in Stevenage</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">Whether you are near <strong>Gunnels Wood Road</strong> or living in <strong>Chells</strong>, our mobile vans are equipped to handle any tyre emergency. We specialize in A1(M) roadside assistance.</p>
                        <ul className="space-y-4">
                            {["A1(M) Emergency Response", "Stevenage Town Coverage", "Home & Work Visits", "Puncture Repairs"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white"><ShieldCheck className="text-primary w-5 h-5 shrink-0" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Areas Covered</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["Old Town", "Broadwater", "Shephall", "Chells", "Bedwell", "Symonds Green", "Knebworth"].map(area => (
                                <div key={area} className="flex items-center gap-2 text-gray-300"><MapPin className="w-4 h-4 text-primary shrink-0" /> <span className="text-sm">{area}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Why Choose Us */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-10">Why Stevenage Drivers Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Clock, title: "A1(M) Fast Response", desc: "Our vans are positioned to reach A1(M) breakdowns between Junctions 6 and 8 (Stevenage) typically within 30–45 minutes." },
                            { icon: Truck, title: "Full Mobile Workshop", desc: "From your driveway in Chells to your office on Gunnels Wood Road — we bring the complete tyre fitting kit to you." },
                            { icon: ShieldCheck, title: "Transparent Pricing", desc: "No call-out surprise fees. We quote the full cost upfront before dispatching — tyre, balancing, and fitting included." }
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">All Services Available in Stevenage</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Covering <strong>SG1 and SG2</strong> postcodes, the <strong>A1(M) corridor</strong>, and surrounding Hertfordshire towns including Hitchin, Letchworth, and Welwyn Garden City. We carry Michelin, Continental, Pirelli, and budget options for same-day fitting.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { icon: Truck, label: "Mobile Tyre Fitting Stevenage", desc: "Same-day supply & fit in SG1, SG2 and all Stevenage postcodes.", href: "/mobile-tyre-fitting-hemel-hempstead" },
                            { icon: Clock, label: "24/7 Emergency Call-Out Stevenage", desc: "Breakdown on the A1(M) near Stevenage? We respond 24/7.", href: "/24-hour-emergency-mobile-tyre-fitting" },
                            { icon: Wrench, label: "Puncture Repair Stevenage", desc: "BS AU 159 compliant permanent repairs at your home or roadside.", href: "/mobile-puncture-repair-near-me" },
                            { icon: Settings, label: "Wheel Balancing Stevenage", desc: "Precision digital balancing — no more steering wheel vibration.", href: "/mobile-wheel-balancing" },
                            { icon: Battery, label: "Battery Replacement Stevenage", desc: "Dead battery in SG1 or SG2? We supply and fit on-site.", href: "/mobile-car-battery-replacement" },
                            { icon: Lock, label: "Locking Nut Removal Stevenage", desc: "Lost your locking key in Stevenage? Safe specialist removal.", href: "/locking-wheel-nut-removal" },
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Frequently Asked Questions — Stevenage</h2>
                    <div className="space-y-5">
                        {[
                            {
                                q: "Do you cover the A1(M) near Stevenage?",
                                a: "Yes. The A1(M) between Junctions 6 (Welwyn) and 8 (Stevenage South) and Junction 9 (Stevenage North) is one of our priority emergency routes. Move to a safe location, switch on hazard lights, and call us on 07427 515915."
                            },
                            {
                                q: "Do you cover Gunnels Wood Road and Stevenage Business Park?",
                                a: "Absolutely. Gunnels Wood Road and the surrounding Stevenage Business Park are within our regular service area. We can attend your unit during working hours or early morning to minimise disruption."
                            },
                            {
                                q: "What SG postcodes do you serve?",
                                a: "We cover SG1 (Stevenage town centre, Bedwell, Broadwater), SG2 (Shephall, Chells, Pin Green), and also extend to SG3 (Knebworth), SG4 (Hitchin), and SG6 (Letchworth) within our 30-mile radius from Hemel Hempstead."
                            },
                            {
                                q: "Can you fit run-flat tyres in Stevenage?",
                                a: "Yes — we carry run-flat tyres (RFT) from Michelin, Continental, and Bridgestone, which are common on BMWs and Mercedes popular in the Stevenage area. We also advise whether a run-flat is repairable or requires immediate replacement."
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
                        <Link href="/mobile-tyres-luton" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Luton</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-st-albans" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres St Albans</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-welwyn-garden-city" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Welwyn Garden City</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-hatfield" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Hatfield</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-hemel-hempstead" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Hemel Hempstead</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/locations" className="text-primary hover:text-white hover:underline text-sm font-bold">View All Locations</Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Tyre Emergency in Stevenage?</h2>
                    <p className="text-gray-300 mb-6 text-lg">Available 24/7 for emergency and scheduled tyre fitting across SG postcodes and the A1(M) corridor.</p>
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
