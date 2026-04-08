import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Truck, ShieldCheck, Zap, Wrench, Battery, Fuel, Settings, Lock, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_london.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function LondonLocation() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Queensway Mobile Tyres North London",
        "description": "Premium mobile tyre fitting in North & North West London. We serve Barnet, Edgware, Harrow, Wembley, Enfield and surrounding areas. 24/7 service.",
        "areaServed": {
            "@type": "City",
            "name": "London"
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
                title="Mobile Tyres North London | Mobile Tyre Fitting Near Me 24/7 | Queensway"
                description="Mobile tyres in North London from £30 — fitted at your home, work or roadside. 24/7 mobile tyre fitter covering Barnet, Harrow, Edgware, Stanmore, Brent Cross, Borehamwood & Bushey. New tyres, puncture repair & emergency call-out. Call 07427 515915."
                keywords="mobile tyres North London, mobile tyres near me, mobile tyre fitting London, mobile tyre fitter London, tyres North London, mobile tyres Barnet, mobile tyres Edgware, mobile tyres Brent Cross, mobile tyres Borehamwood, mobile tyres Bushey, mobile tyres EN5, mobile tyres NW9, emergency mobile tyres North London, puncture repair North London"
                image={heroImage}
                schema={schema}
            />
            <Navbar />

            {/* Hero Section */}
            <div className="pt-24 pb-12 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src={heroImage} alt="Mobile Tyre Fitting North London" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        QUEENSWAY MOBILE TYRES <br /><span className="text-primary">NORTH LONDON</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4 mb-8">
                        The #1 choice for mobile tyre fitting in North & North West London. We bring the tyre shop to you.
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
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">London's Convenient Tyre Service</h2>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            Driving in London is stressful enough without the hassle of a flat tyre. Queensway Mobile Tyres provides a rapid, professional solution for drivers in North and North West London coverage areas.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <div className="bg-secondary/50 p-4 rounded border border-white/5">
                                <Zap className="text-yellow-500 w-6 h-6 mb-2" />
                                <h4 className="font-bold text-white">Emergency Response</h4>
                                <p className="text-sm text-gray-400">Fast call-out for blowouts and punctures.</p>
                            </div>
                            <div className="bg-secondary/50 p-4 rounded border border-white/5">
                                <Truck className="text-primary w-6 h-6 mb-2" />
                                <h4 className="font-bold text-white">Home & Work</h4>
                                <p className="text-sm text-gray-400">We fit tyres on your driveway or office car park.</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We handle everything from a single puncture repair to a full set of new tyres. All work is carried out to the highest safety standards by experienced technicians.
                        </p>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Key London Areas Served</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "North London", "North West London", "Barnet", "Harrow",
                                "Edgware", "Stanmore", "Wembley", "Brent Cross",
                                "Golders Green", "Finchley", "Mill Hill", "Ruislip"
                            ].map((area) => (
                                <div key={area} className="flex items-center gap-2 text-gray-300">
                                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-sm">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services in London */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">All Services Available in North London</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Our <strong>ULEZ-compliant vans</strong> operate across North and North West London. From <strong>Barnet and Edgware</strong> to <strong>Wembley and Brent Cross</strong>, we bring the full mobile workshop to you. We stock Michelin, Continental, Pirelli, and budget tyres — all available for same-day fitting in N and NW postcodes.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {[
                            { icon: Truck, label: "Mobile Tyre Fitting North London", desc: "Same-day supply & fit at your home, driveway, or office car park in N/NW postcodes.", href: "/mobile-tyre-fitting-hemel-hempstead" },
                            { icon: Clock, label: "24/7 Emergency Call-Out London", desc: "Blowout on the North Circular or M25? We respond any hour, any day.", href: "/24-hour-emergency-mobile-tyre-fitting" },
                            { icon: Wrench, label: "Puncture Repair North London", desc: "BS AU 159 compliant permanent repairs — done in 20–30 minutes at your location.", href: "/mobile-puncture-repair-near-me" },
                            { icon: Settings, label: "Wheel Balancing North London", desc: "Digital precision balancing at your door — eliminate steering vibration for good.", href: "/mobile-wheel-balancing" },
                            { icon: Battery, label: "Battery Replacement North London", desc: "Dead battery in Barnet or Harrow? We supply & fit AGM, EFB & standard batteries.", href: "/mobile-car-battery-replacement" },
                            { icon: Fuel, label: "Emergency Fuel Delivery London", desc: "Run dry near North London? Petrol or diesel delivered to your location 24/7.", href: "/emergency-fuel-delivery" },
                            { icon: Lock, label: "Locking Nut Removal North London", desc: "Lost your locking key? Specialist removal — no alloy damage guaranteed.", href: "/locking-wheel-nut-removal" },
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
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">Why Londoners Trust Queensway</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Avoid Traffic</h3>
                            <p className="text-gray-400">Don't sit in traffic trying to find a garage. We come to you, saving you hours of wasted time.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">ULEZ Compliant Vans</h3>
                            <p className="text-gray-400">Our modern fleet operates throughout the ULEZ zone, serving you wherever you are.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg text-center border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Truck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">All Makes & Models</h3>
                            <p className="text-gray-400">From city cars to SUVs and high-performance vehicles, we have the stock and expertise to help.</p>
                        </div>
                    </div>
                </div>
                {/* FAQ */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Frequently Asked Questions — North London</h2>
                    <div className="space-y-5">
                        {[
                            {
                                q: "Do your vans operate inside the ULEZ zone?",
                                a: "Yes. All of our service vans meet ULEZ and LEZ emissions standards, so we can reach you anywhere in Greater London without restriction, including within the Congestion Charge zone when required."
                            },
                            {
                                q: "Which North London postcodes do you cover?",
                                a: "We cover N1–N22 (Islington through Wood Green), NW1–NW11 (Camden through Golders Green), HA1–HA9 (Harrow through Wembley), EN1–EN5 (Enfield, Barnet, Cockfosters), and WD postcodes bordering North London."
                            },
                            {
                                q: "How fast can you reach North London in an emergency?",
                                a: "Response times for North London vary by location and time of day. For outer North London (Barnet, Edgware, Mill Hill), we typically arrive within 45–60 minutes. For inner North London (Finchley, Golders Green), we estimate 60–75 minutes depending on traffic."
                            },
                            {
                                q: "Can you help on the North Circular (A406)?",
                                a: "Yes — we provide emergency roadside assistance along the A406 North Circular. If you break down, move to the nearside lane or emergency area if possible, switch hazard lights on, and call us immediately. Do not exit the vehicle on a live carriageway."
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
                        <Link href="/mobile-tyres-harrow" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Harrow</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-watford" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Watford</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-slough" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Slough</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/mobile-tyres-hemel-hempstead" className="text-primary hover:text-white hover:underline text-sm font-bold">Mobile Tyres Hemel Hempstead</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/locations" className="text-primary hover:text-white hover:underline text-sm font-bold">View All Locations</Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Tyre Problem in North London?</h2>
                    <p className="text-gray-300 mb-6 text-lg">24/7 ULEZ-compliant mobile tyre service across all North and North West London postcodes.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:07427515915" onClick={handlePhoneClick}>
                            <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90 w-full sm:w-auto">
                                <Phone className="mr-2 w-5 h-5" /> Call 07427 515915
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
