import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, AlertTriangle, PhoneCall, ShieldCheck, Activity, Info } from "lucide-react";
import { Link } from "wouter";
import emergencyImage from "@assets/generated_images/flat_tyre_emergency.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function HandlingTyreBlowout() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Handling a Tyre Blowout on the M1 or M25: A Safety Guide",
        "image": emergencyImage,
        "author": {
            "@type": "Organization",
            "name": "Queensway Mobile Tyres",
            "url": "https://www.queenswaymobiletyres.co.uk/"
        },
        "publisher": {
            "@type": "AutoRepair",
            "@id": "https://www.queenswaymobiletyres.co.uk/#business",
            "name": "Queensway Mobile Tyres",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.queenswaymobiletyres.co.uk/favicon.png"
            }
        },
        "datePublished": "2024-02-02",
        "dateModified": "2026-04-06",
        "description": "How to handle a high-speed tyre blowout on the M1 or M25 around Hemel Hempstead and Hertfordshire. Step-by-step safety instructions from Queensway's emergency team.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.queenswaymobiletyres.co.uk/blog/handling-tyre-blowout"
        }
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Handle a High-Speed Tyre Blowout",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Don't Brake",
                "text": "Your instinct will be to brake, but this can cause you to lose control. Hold the wheel firmly and maintain speed initially."
            },
            {
                "@type": "HowToStep",
                "name": "Ease Off the Accelerator",
                "text": "Gently lift your foot off the gas to allow the vehicle to slow down naturally."
            },
            {
                "@type": "HowToStep",
                "name": "Steer Straight",
                "text": "Correct the steering gently to counteract the pull of the blown tyre."
            },
            {
                "@type": "HowToStep",
                "name": "Pull Over Safely",
                "text": "Once speed is manageable, signal and move to the hard shoulder or emergency refuge area."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Tyre Blowout on the M1 or M25? Hemel Hempstead Safety Guide"
                description="Blowout on the M1 or M25 near Hemel Hempstead? Step-by-step safety instructions plus 24/7 emergency mobile tyre replacement across Hertfordshire. Call 07427 515915."
                keywords="tyre blowout m1, tyre blowout m25, emergency tyre change hemel hempstead, motorway breakdown hertfordshire, smart motorway safety, mobile tyre emergency watford"
                canonical="https://www.queenswaymobiletyres.co.uk/blog/handling-tyre-blowout"
                image={emergencyImage}
                schema={[schema, howToSchema]}
            />
            <Navbar />

            <div className="pt-24 pb-12 bg-secondary border-b border-white/5">
                <div className="container mx-auto px-4">
                    <Link href="/blog">
                        <Button variant="link" className="text-gray-400 hover:text-primary pl-0 mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                        </Button>
                    </Link>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Safety & Emergency</span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                            Handling a Tyre Blowout on the M1 or M25: A Hertfordshire Safety Guide
                        </h1>
                        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Updated March 15, 2024</span>
                            <span className="flex items-center gap-2"><User className="w-4 h-4" /> Queensway Safety Team</span>
                        </div>
                    </div>
                </div>
            </div>

            <article className="py-16 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <img
                        src={emergencyImage}
                        alt="Car with flat tyre on motorway shoulder at sunset"
                        className="w-full h-[400px] md:h-[500px] object-cover rounded-xl mb-12 shadow-2xl border-2 border-white/5"
                    />

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        <p className="text-xl leading-relaxed mb-8 font-medium text-white">
                            Experiencing a tyre blowout at 70mph on the M1 or M25 around Hemel Hempstead is one of the most terrifying experiences a driver can face. The sudden loud bang, followed by a violent pull on the steering wheel, can induce panic. Your immediate reaction in those first few seconds is critical. This guide by <strong className="text-primary">Queensway Mobile Tyres</strong>, Hertfordshire's 24/7 emergency mobile tyre team, could save your life.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <AlertTriangle className="text-red-500 w-8 h-8" />
                            Immediate Actions: The Critical Seconds
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl">
                                <h3 className="text-red-500 font-bold text-xl mb-3 flex items-center gap-2">❌ DO NOT</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3"><span className="text-xl">•</span> slam on the brakes (this will cause a spin).</li>
                                    <li className="flex items-center gap-3"><span className="text-xl">•</span> Jerk the steering wheel violently.</li>
                                    <li className="flex items-center gap-3"><span className="text-xl">•</span> Stop in a live lane if you can possibly avoid it.</li>
                                </ul>
                            </div>
                            <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-xl">
                                <h3 className="text-green-500 font-bold text-xl mb-3 flex items-center gap-2">✅ DO</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3"><span className="text-xl">•</span> Grip the wheel firmly with both hands.</li>
                                    <li className="flex items-center gap-3"><span className="text-xl">•</span> Lift off the accelerator gently.</li>
                                    <li className="flex items-center gap-3"><span className="text-xl">•</span> Allow the car to slow down naturally.</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <ShieldCheck className="text-primary w-8 h-8" />
                            Once You Have Stopped
                        </h2>
                        <p>
                            Once you have managed to pull over to the hard shoulder or an Emergency Refuge Area (ERA):
                        </p>
                        <ol className="list-decimal pl-6 space-y-4 text-gray-300 my-6 marker:text-primary marker:font-bold">
                            <li><strong>Turn on Hazards:</strong> Activate your hazard warning lights immediately.</li>
                            <li><strong>Exit Left:</strong> Everyone must leave the vehicle through the left-hand passenger doors. Never open doors on the traffic side.</li>
                            <li><strong>Get to Safety:</strong> Move behind the crash barrier and stand well upstream of your vehicle (so if your car is hit, it won't be pushed into you).</li>
                            <li><strong>Stay Visible:</strong> Wear a high-vis jacket if you have one.</li>
                        </ol>

                        <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-xl mb-12 shadow-lg shadow-red-900/20">
                            <h3 className="font-bold text-red-500 mb-2 flex items-center gap-2 text-xl"><Info className="w-6 h-6" /> CRITICAL WARNING</h3>
                            <p className="text-lg text-white">
                                <strong>NEVER attempt to change a tyre on the hard shoulder of a motorway.</strong> It is statistically one of the most dangerous places to be. Call a professional service like our <Link href="/24-hour-emergency-mobile-tyre-fitting" className="text-primary hover:underline">emergency team</Link> with the correct safety equipment. For more rules on motorway breakdowns, consult the <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Highway Code (Rules 274-287)</a>.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                        <PhoneCall className="text-primary w-8 h-8" />
                        Who To Call?
                    </h2>
                    <p>
                        You have two main options. If you have breakdown cover, you can call them, though wait times can be unpredictable during peak hours. For advice on smart motorways, check <a href="https://nationalhighways.co.uk/road-safety/driving-on-motorways/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">National Highways</a>.
                    </p>
                    <p className="mb-6">
                        For fastest service, especially if you don't have cover, call <strong><Link href="/" className="text-primary hover:underline">Queensway Mobile Tyres</Link> Emergency Team</strong>. We act as a priority service for motorway call-outs.
                    </p>
                    <ul className="list-none space-y-3 my-6 pl-4 border-l-2 border-primary">
                        <li><strong>• Location Tracking:</strong> We use GPS to pinpoint your exact location on the M25, M1, M4, or A406.</li>
                        <li><strong>• Specialist Vans:</strong> Our vehicles are equipped with high-visibility lighting and safety equipment for roadside work.</li>
                        <li><strong>• Rapid Response:</strong> We aim to be with you within 60 minutes.</li>
                    </ul>

                    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center mt-12">
                        <h3 className="text-3xl font-bold text-white mb-4">Stuck Right Now?</h3>
                        <p className="text-gray-300 mb-8 text-lg">
                            Our emergency team operates 24/7. Don't risk your safety.
                        </p>
                        <div className="flex flex-col gap-6 justify-center items-center">
                            <a href="tel:07427515915" className="inline-flex items-center gap-3 text-4xl md:text-5xl font-black text-primary hover:text-white transition-colors" onClick={handlePhoneClick}>
                                <PhoneCall className="w-10 h-10 md:w-12 md:h-12" /> 07427 515915
                            </a>
                            <div className="flex gap-2 items-center text-sm text-gray-400 bg-black/30 px-4 py-2 rounded-full">
                                <Activity className="w-4 h-4 text-green-500" />
                                <span>Average arrival time: 45 mins</span>
                            </div>
                            <Link href="/24-hour-emergency-mobile-tyre-fitting">
                                <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold mt-4">
                                    View Emergency Areas Covered
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </article>

            <Footer />
        </div >
    );
}
