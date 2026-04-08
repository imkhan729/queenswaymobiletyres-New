import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, CheckCircle, Clock, MapPin, PoundSterling, Shield, Star, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import mobileFittingImage from "@assets/generated_images/mobile_tyre_fitting_london.webp";

export default function MobileTyreFittingLondon() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Why Mobile Tyre Fitting is the Best Choice in Hemel Hempstead & Herts",
        "image": mobileFittingImage,
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
        "datePublished": "2024-01-10",
        "dateModified": "2026-04-06",
        "description": "Discover why mobile tyre fitting is the ultimate convenience for drivers in Hemel Hempstead, Watford, St Albans and across Hertfordshire. Save time, money and hassle.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.queenswaymobiletyres.co.uk/blog/mobile-tyre-fitting-london"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is mobile tyre fitting more expensive than a garage?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not necessarily. When you factor in the cost of fuel to get to a garage, potential time off work, and parking charges, mobile tyre fitting with Queensway Mobile Tyres is often more cost-effective. We offer competitive pricing with no hidden call-out fees for scheduled appointments."
                }
            },
            {
                "@type": "Question",
                "name": "How quickly can Queensway Mobile Tyres come to me in London?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer same-day tyre fitting services across London. In emergency situations, our rapid response team aims to reach you within 60 minutes, depending on your location and traffic conditions."
                }
            },
            {
                "@type": "Question",
                "name": "Do you balance the wheels as well?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, every mobile tyre fitting service includes professional electronic wheel balancing and a new rubber valve (standard) to ensure a smooth and safe ride."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Mobile Tyre Fitting Hemel Hempstead & Herts | Same-Day | Queensway"
                description="Mobile tyre fitting in Hemel Hempstead, Watford, St Albans, Luton & Aylesbury. Expert same-day service at your home or work. No call-out fee. Book now!"
                keywords="mobile tyre fitting hemel hempstead, same day tyre fitting hertfordshire, mobile tyres watford, emergency tyres st albans, mobile tyre fitter luton, Queensway Mobile Tyres"
                canonical="https://www.queenswaymobiletyres.co.uk/blog/mobile-tyre-fitting-london"
                image={mobileFittingImage}
                schema={[schema, faqSchema]}
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
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Lifestyle & Convenience</span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                            Why Mobile Tyre Fitting is the Best Choice in Hemel Hempstead & Hertfordshire
                        </h1>
                        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Updated March 15, 2024</span>
                            <span className="flex items-center gap-2"><User className="w-4 h-4" /> Queensway Team</span>
                        </div>
                    </div>
                </div>
            </div>

            <article className="py-16 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <img
                        src={mobileFittingImage}
                        alt="Queensway Mobile Tyre Fitting Van servicing a customer in Hemel Hempstead, Hertfordshire"
                        className="w-full h-[400px] md:h-[500px] object-cover rounded-xl mb-12 shadow-2xl border-2 border-white/5"
                    />

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        <p className="text-xl leading-relaxed mb-8 font-medium text-white">
                            Essential for busy drivers in Hemel Hempstead, Watford, St Albans and across Hertfordshire, <strong><Link href="/mobile-tyre-fitting-hemel-hempstead" className="text-primary hover:underline">mobile tyre fitting</Link></strong> is revolutionising how locals maintain their vehicles. Gone are the days of wasting hours at a garage. With <strong className="text-primary"><Link href="/" className="text-primary hover:underline">Queensway Mobile Tyres</Link></strong>, our Hemel Hempstead-based technicians come directly to you—whether you're at home, at work, or stuck on the roadside within our 30-mile radius.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <Clock className="text-primary w-8 h-8" />
                            The Time-Saving Revolution
                        </h2>
                        <p>
                            In a city like London, time is arguably your most valuable currency. Traditional tyre replacement involves:
                        </p>
                        <ul className="list-none space-y-4 my-6">
                            <li className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                                <span className="text-red-500 font-bold text-xl">✕</span>
                                <span>Finding a reputable garage nearby.</span>
                            </li>
                            <li className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                                <span className="text-red-500 font-bold text-xl">✕</span>
                                <span>Driving through London traffic to get there.</span>
                            </li>
                            <li className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                                <span className="text-red-500 font-bold text-xl">✕</span>
                                <span>Waiting in a cold reception area for huge lengths of time.</span>
                            </li>
                        </ul>
                        <p className="mb-8">
                            <strong>Queensway Mobile Tyres</strong> eliminates this entirely. We operate around <em>your</em> schedule. You book a time slot, and we arrive fully equipped to change your tyres while you continue with your day. It is the smartest way to manage car maintenance in the capital.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <PoundSterling className="text-primary w-8 h-8" />
                            Cost-Effective vs Traditional Garages
                        </h2>
                        <p>
                            A common myth is that convenience comes with a premium price tag. In reality, mobile tyre fitting is often more economical.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-secondary/50 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-3">Hidden Savings</h3>
                                <p className="text-sm">No fuel wasted driving to the garage. No loss of earnings from taking time off work. No parking fees while you wait.</p>
                            </div>
                            <div className="bg-secondary/50 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-3">Competitive Pricing</h3>
                                <p className="text-sm">We don't have the overheads of a massive high-street waiting room, allowing us to pass savings on to you with competitive tyre prices.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <Shield className="text-primary w-8 h-8" />
                            Safety & Professionalism Assured
                        </h2>
                        <p>
                            Our vans are not just delivery vehicles; they are <strong>state-of-the-art mobile workshops</strong>. Equipped with the latest tyre changing and balancing machinery, we can handle everything from standard 13-inch wheels to 22-inch high-performance alloys and run-flat tyres.
                        </p>
                        <p>
                            Every fitting by <strong className="text-primary">Queensway Mobile Tyres</strong> includes:
                        </p>
                        <ul className="list-none space-y-3 my-6 pl-4 border-l-2 border-primary">
                            <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5" /> Professional jack lifting to protect your chassis.</li>
                            <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5" /> Electronic wheel balancing for vibration-free driving.</li>
                            <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5" /> New valve installation (standard rubber valves).</li>
                            <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5" /> Tyre pressure monitoring system (TPMS) checks.</li>
                            <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5" /> Eco-friendly disposal of your old tyres.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <MapPin className="text-primary w-8 h-8" />
                            Serving All London Boroughs
                        </h2>
                        <p>
                            We are proud to serve the entire Greater London area. Whether you are in <strong><Link href="/mobile-tyres-london" className="text-primary hover:underline">Central London</Link></strong>, <strong><Link href="/mobile-tyres-london" className="text-primary hover:underline">North London</Link></strong>, <strong>West London</strong>, or the outskirts, our fleet is positioned to reach you fast.
                        </p>
                        <p className="text-sm text-gray-400 mb-8">
                            Popular areas include: <em>Kensington, Chelsea, Westminster, Barnet, Halingdon, Wembley, Camden, Islington, and Canary Wharf.</em>
                        </p>

                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 my-12">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <HelpCircle className="w-6 h-6 text-primary" /> Frequently Asked Questions
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-2">How much space do you need to change a tyre?</h4>
                                    <p className="text-gray-400">We just need enough space to park our van near your vehicle and a little room around the car to work safely. A driveway or a standard parking space is usually sufficient.</p>
                                </div>
                                <div className="border-t border-white/10 pt-4">
                                    <h4 className="font-bold text-white text-lg mb-2">Can you repair punctures at my home?</h4>
                                    <p className="text-gray-400">Absolutely. We adhere to <a href="https://www.tyresafe.org/tyre-safety/puncture-repairs/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">British Standard BSAU159</a>. If the puncture is in the safe repairable zone of the tread, we can <Link href="/mobile-puncture-repair-near-me" className="text-primary hover:underline">repair it on-site</Link> for a fraction of the cost of a new tyre.</p>
                                </div>
                                <div className="border-t border-white/10 pt-4">
                                    <h4 className="font-bold text-white text-lg mb-2">Do you sell premium tyre brands?</h4>
                                    <p className="text-gray-400">Yes, we stock all major brands including Michelin, Continental, Pirelli, Bridgestone, Goodyear, and Dunlop, as well as excellent mid-range and budget options.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-secondary to-primary/20 p-8 rounded-2xl text-center border border-primary/30 shadow-lg shadow-primary/5">
                            <h3 className="text-3xl font-bold text-white mb-4">Ready to Book?</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                Don't let tyre issues slow you down. Experience the premium service of Queensway Mobile Tyres today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/booking">
                                    <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-white transition-colors w-full sm:w-auto">
                                        Book Online Now
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 w-full sm:w-auto">
                                        Contact Our Team
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}
