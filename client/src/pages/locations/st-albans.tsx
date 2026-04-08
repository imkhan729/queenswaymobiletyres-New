import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Truck, ShieldCheck, Wrench, Battery, Fuel, Settings, Lock, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mechanic_repairing_a_puncture_on_a_roadside.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function StAlbansLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres St Albans",
        "description": "Mobile tyre fitting experts in St Albans. We come to you at home or work. 24/7 emergency puncture repair and tyre replacement in AL1, AL2, AL3, AL4.",
        "areaServed": {
            "@type": "City",
            "name": "St Albans"
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
                title="Mobile Tyres St Albans | Mobile Tyre Fitting Near Me AL1–AL4 | Queensway"
                description="Mobile tyres in St Albans from £30 — fitted at your home, work or roadside. 24/7 mobile tyre fitter covering AL1–AL4, Harpenden, London Colney & M25 J21A–22. New tyres, puncture repair & emergency call-out. Call 07427 515915."
                keywords="mobile tyres St Albans, mobile tyres near me, mobile tyre fitting St Albans, mobile tyre fitter St Albans, tyres St Albans, mobile tyres AL1, mobile tyres AL2, mobile tyres AL3, mobile tyres AL4, mobile tyres Harpenden, mobile tyres London Colney, M25 J21A tyres, 24 hour tyres St Albans, emergency puncture repair St Albans"
                image={heroImage}
                schema={schema}
            />
            <Navbar />

            {/* Hero Section */}
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src={heroImage} alt="Mobile Tyre Fitting St Albans" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        QUEENSWAY MOBILE TYRES <br /><span className="text-primary">ST ALBANS</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4 mb-8">
                        St Albans' premier mobile tyre service. Expert fitting at your home, workplace, or roadside 24/7.
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
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Expert Tyre Fitting in St Albans</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Looking for a trusted mobile tyre fitter in St Albans (AL1 - AL4)? Queensway Mobile Tyres offers a premium, hassle-free service that brings the tyre depot to your doorstep.
                        </p>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Whether you are stuck on the <strong>A414</strong>, working in the city centre, or relaxing at home in <strong>Marshalswick</strong> or <strong>Chiswell Green</strong>, our technicians are ready to help.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "24/7 Emergency Roadside Assistance",
                                "Convenient Home Tyre Fitting",
                                "Puncture Repairs & Balancing",
                                "Wide Range of Premium & Budget Tyres",
                                "Locking Wheel Nut Removal"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <CheckCircle className="text-primary w-5 h-5 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Areas Covered in St Albans</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "St Albans City Centre", "London Colney", "Park Street", "Bricket Wood",
                                "Chiswell Green", "Marshalswick", "Redbourn", "Wheathampstead",
                                "Sandridge", "Jersey Farm", "Fleetville", "Smallford"
                            ].map((area) => (
                                <div key={area} className="flex items-center gap-2 text-gray-300">
                                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-sm">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-16">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Fast Response</h3>
                            <p className="text-gray-400">We prioritize emergency calls in St Albans and can often be with you in under 60 minutes.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Truck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Mobile Workshop</h3>
                            <p className="text-gray-400">Our vans are equipped with the latest tyre changing machines to handle low profiles and run-flats.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Satisfaction Guaranteed</h3>
                            <p className="text-gray-400">We pride ourselves on our 5-star reputation in Hertfordshire. Professional, polite, and efficient.</p>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">All Services Available in St Albans</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        From the <strong>St Albans Cathedral area in AL1</strong> to <strong>London Colney</strong> and <strong>Harpenden</strong>, our mobile service covers the full AL postcode area. We stock Michelin, Continental, and Pirelli alongside quality budget brands — all available same-day.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {[
                            { icon: Truck, label: "Mobile Tyre Fitting St Albans", desc: "Same-day supply & fit in AL1, AL2, AL3, AL4 and surrounding villages.", href: "/mobile-tyre-fitting-hemel-hempstead" },
                            { icon: Clock, label: "24/7 Emergency Call-Out St Albans", desc: "Breakdown on the A414 or M10? Our emergency team responds around the clock.", href: "/24-hour-emergency-mobile-tyre-fitting" },
                            { icon: Wrench, label: "Puncture Repair St Albans", desc: "Permanent BS AU 159 compliant repairs at your home or roadside in St Albans.", href: "/mobile-puncture-repair-near-me" },
                            { icon: Settings, label: "Wheel Balancing St Albans", desc: "Digital balancing included with every new tyre — we come to your driveway.", href: "/mobile-wheel-balancing" },
                            { icon: Battery, label: "Battery Replacement St Albans", desc: "Dead battery in St Albans? We supply and fit the right battery on-site.", href: "/mobile-car-battery-replacement" },
                            { icon: Lock, label: "Locking Nut Removal St Albans", desc: "Lost your locking wheel nut key in AL postcodes? We remove safely.", href: "/locking-wheel-nut-removal" },
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Frequently Asked Questions — St Albans</h2>
                    <div className="space-y-5">
                        {[
                            {
                                q: "Can you fit tyres in St Albans city centre?",
                                a: "Yes. We regularly service St Albans city centre — including the Civic Centre car park and surrounding streets. If you can't park on your road, we can often meet you at a nearby car park."
                            },
                            {
                                q: "Do you cover London Colney and Harpenden?",
                                a: "Absolutely. Our St Albans coverage extends to London Colney (AL2), Harpenden (AL5), Park Street (AL2), Bricket Wood, Wheathampstead, and all surrounding villages in the AL postcode area."
                            },
                            {
                                q: "Can you help on the A414 between St Albans and Hemel?",
                                a: "Yes — the A414 is one of our priority emergency routes. If you suffer a blowout or flat between St Albans and Hemel Hempstead, we can typically reach you within 25–35 minutes."
                            },
                            {
                                q: "Do you supply run-flat tyres in St Albans?",
                                a: "Yes. We carry run-flat tyres from Michelin, Continental, and Bridgestone — popular for BMW, Mini, and Mercedes vehicles common in the St Albans area. We also advise on whether a run-flat can be repaired or must be replaced."
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
                        <Link href="/mobile-tyres-watford" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Watford</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-luton" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Luton</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-stevenage" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Stevenage</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/locations" className="text-primary hover:text-white hover:underline text-sm font-bold">View All Locations</Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-secondary to-background border-t border-b border-white/10 py-16 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Tyre Trouble in St Albans?</h2>
                    <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                        Don't let a flat tyre ruin your day. Contact Queensway Mobile Tyres for immediate assistance in St Albans and AL postcodes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915" onClick={handlePhoneClick}>
                            <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90 w-full sm:w-auto">
                                Call 07427 515915
                            </Button>
                        </a>
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

function CheckCircle({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
        </svg>
    )
}
