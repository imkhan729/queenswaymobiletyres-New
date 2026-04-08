import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Truck, ShieldCheck, Star, Wrench, Battery, Fuel, Settings, Lock, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function WatfordLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres Watford",
        "description": "Expert mobile tyre fitting in Watford. We come to your home, work or roadside. 24/7 emergency tyre replacement in Watford (WD17, WD18, WD19, WD24, WD25).",
        "areaServed": {
            "@type": "City",
            "name": "Watford"
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
                title="Mobile Tyres Watford | Mobile Tyre Fitting Near Me WD17–WD25 | Queensway"
                description="Mobile tyres in Watford from £30 — fitted at your home, work or roadside. 24/7 mobile tyre fitter covering WD17–WD25, Rickmansworth, Bushey, Garston & M25 J19–20. New tyres, puncture repair & emergency call-out. Call 07427 515915."
                keywords="mobile tyres Watford, mobile tyres near me, mobile tyre fitting Watford, mobile tyre fitter Watford, tyres Watford, mobile tyres WD17, mobile tyres WD18, mobile tyres WD19, mobile tyres WD24, mobile tyres WD25, mobile tyres Rickmansworth, mobile tyres Bushey, mobile tyres Garston, M25 J19 tyres, 24 hour tyre repair Watford, emergency puncture repair Watford"
                image={heroImage}
                schema={schema}
            />
            <Navbar />

            {/* Hero Section */}
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src={heroImage} alt="Mobile Tyre Fitting Watford" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        QUEENSWAY MOBILE TYRES <br /><span className="text-primary">WATFORD</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4 mb-8">
                        The leading mobile tyre service in Watford. We bring the garage to your driveway, workplace, or roadside 24 hours a day.
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
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Tyre Services in Watford</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Living or working in Watford (WD17, WD18, WD19, WD24, WD25)? Don't waste time at a garage. Queensway Mobile Tyres provides a premium mobile service that fits around your schedule.
                        </p>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Whether you are parked at the <strong>Atria Watford Shopping Centre</strong>, working in <strong>Watford Business Park</strong>, or at home in <strong>Nascot Wood</strong> or <strong>Cassiobury</strong>, our expert technicians are just a phone call away.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Emergency Tyre Replacement (24/7)",
                                "Puncture Repairs at your location",
                                "Wheel Balancing & Locking Nut Removal",
                                "New Battery Supply & Fit",
                                "Same Day Service Available"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <CheckCircle className="text-primary w-5 h-5 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Coverage in Watford Area</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Watford Town Centre", "North Watford", "West Watford", "High Street",
                                "Garston", "Leavesden", "Bushey", "Oxhey",
                                "Cassiobury", "Nascot Wood", "Holywell", "Meriden"
                            ].map((area) => (
                                <div key={area} className="flex items-center gap-2 text-gray-300">
                                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-sm">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services in Watford */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">All Mobile Services in Watford</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Watford drivers benefit from our full range of mobile automotive services across all WD postcodes. We stock premium brands (Michelin, Continental, Pirelli) and budget tyres — all available for same-day fitting at your Watford home or workplace.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {[
                            { icon: Truck, label: "Mobile Tyre Fitting Watford", desc: "Same-day supply & fit in WD17, WD18, WD19, WD24, WD25 and surrounding areas.", href: "/mobile-tyre-fitting-hemel-hempstead" },
                            { icon: Clock, label: "24/7 Emergency Call-Out Watford", desc: "Blowout near the M1 or M25? Our emergency team reaches WD postcodes fast.", href: "/24-hour-emergency-mobile-tyre-fitting" },
                            { icon: Wrench, label: "Puncture Repair Watford", desc: "Permanent BS AU 159 compliant repairs — cheaper than a new tyre when possible.", href: "/mobile-puncture-repair-near-me" },
                            { icon: Settings, label: "Wheel Balancing Watford", desc: "Stop steering vibration. Digital balancing included with every new fitting.", href: "/mobile-wheel-balancing" },
                            { icon: Battery, label: "Battery Replacement Watford", desc: "Car won't start in Watford? We supply & fit AGM, EFB & standard batteries.", href: "/mobile-car-battery-replacement" },
                            { icon: Fuel, label: "Emergency Fuel Delivery Watford", desc: "Run dry near Watford? Petrol or diesel delivered to your location 24/7.", href: "/emergency-fuel-delivery" },
                            { icon: Lock, label: "Locking Nut Removal Watford", desc: "Lost your locking wheel nut key in Watford? Specialist removal guaranteed.", href: "/locking-wheel-nut-removal" },
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

                {/* Why Choose Us */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">Why Watford Drivers Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Rapid Response</h3>
                            <p className="text-gray-400">Our local vans are based near Watford, ensuring we can often reach you within 30-60 minutes for emergencies.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Truck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">We Come To You</h3>
                            <p className="text-gray-400">Home, work, or roadside. We save you the hassle of driving on a damaged tyre or waiting in a garage.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Fully Insured</h3>
                            <p className="text-gray-400">Our technicians are fully trained and insured. We treat your vehicle with the utmost care and respect.</p>
                        </div>
                    </div>
                </div>

                {/* City-Specific FAQs */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Frequently Asked Questions in Watford</h2>
                    <div className="space-y-6">
                        <div className="bg-secondary/30 p-6 rounded-lg border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-2">How quickly can you get to North Watford?</h3>
                            <p className="text-gray-400">We have vans stationed near the A41 and M1 junction, so into North Watford (WD24) we can often arrive within 30-45 minutes for emergency call-outs.</p>
                        </div>
                        <div className="bg-secondary/30 p-6 rounded-lg border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-2">Do you cover the M1 near Watford?</h3>
                            <p className="text-gray-400">Yes, we provide emergency roadside assistance on the M1 (Junction 5 & 6) and the M25 (Junction 19-21A). Our vans are fully equipped for motorway work.</p>
                        </div>
                        <div className="bg-secondary/30 p-6 rounded-lg border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-2">Is there a call-out charge for Watford residents?</h3>
                            <p className="text-gray-400">Our pricing is transparent. We quote a total price including the tyre, fitting, and call-out. There are no hidden fees for our Watford customers.</p>
                        </div>
                    </div>
                </div>

                {/* Extra FAQ */}
                <div className="mb-16">
                    <div className="space-y-5">
                        <div className="bg-secondary/30 p-6 rounded-lg border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-2">What tyre brands do you stock for Watford customers?</h3>
                            <p className="text-gray-400">We carry premium brands including <strong>Michelin, Continental, Pirelli, Bridgestone, Goodyear, and Dunlop</strong>, as well as quality mid-range options like Hankook, Yokohama, and Toyo, plus budget brands including Nexen and Avon — all available for same-day fitting in Watford.</p>
                        </div>
                        <div className="bg-secondary/30 p-6 rounded-lg border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-2">Do you supply run-flat and all-season tyres in Watford?</h3>
                            <p className="text-gray-400">Yes. We carry <strong>run-flat tyres (RFT)</strong> for BMW, Mercedes, and Mini, <strong>all-season tyres</strong> from Michelin and Continental, and <strong>XL/extra-load tyres</strong> for SUVs and 4x4s. These are all available for fitting at your Watford home or workplace.</p>
                        </div>
                    </div>
                </div>

                {/* Nearby Locations & Internal Linking */}
                <div className="mb-16 border-t border-white/10 pt-8">
                    <h3 className="text-xl font-bold text-white mb-4">Nearby Areas We Also Cover</h3>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/mobile-tyres-st-albans" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres St Albans</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-hemel-hempstead" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Hemel Hempstead</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-london" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres North London</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-harrow" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Harrow</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-luton" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Luton</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-slough" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Slough</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/locations" className="text-primary hover:text-white hover:underline text-sm font-bold">View All Locations</Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Need Tyres in Watford?</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Get a quote instantly or call our emergency line. We are open 24 hours a day, 7 days a week.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915" onClick={handlePhoneClick}>
                            <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90 w-full sm:w-auto">
                                Call Now
                            </Button>
                        </a>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase w-full sm:w-auto">
                                Contact Us
                            </Button>
                        </Link>
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
