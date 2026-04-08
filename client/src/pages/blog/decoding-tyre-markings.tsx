import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Ruler, Info, Scale, Gauge, HelpCircle, CheckCircle, Activity } from "lucide-react";
import { Link } from "wouter";
import tyreMarkingsImage from "@assets/generated_images/tyre_sidewall_markings.webp";

export default function DecodingTyreMarkings() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Decoding Tyre Markings: What Do These Numbers Mean?",
        "image": tyreMarkingsImage,
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
        "datePublished": "2024-02-20",
        "dateModified": "2026-04-06",
        "description": "Our Hemel Hempstead tyre technicians explain sidewall markings — width, profile, rim size, load index and speed rating — so drivers across Hertfordshire pick the right tyre.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.queenswaymobiletyres.co.uk/blog/decoding-tyre-markings"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What does the 'R' stand for in tyre size?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The 'R' stands for Radial, which refers to the tyre's internal construction. Almost all modern car tyres are of radial construction, meaning the ply cords radiate from the bead at 90 degrees to the direction of travel."
                }
            },
            {
                "@type": "Question",
                "name": "Can I put different speed rated tyres on my car?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is generally recommended to match the speed rating specified by your vehicle manufacturer. You should not fit a lower speed rating than recommended, as this can invalidate insurance. Higher ratings are generally acceptable."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Tyre Markings Explained | Hemel Hempstead Mobile Tyre Guide"
                description="Confused by tyre numbers like 205/55 R16 91V? Our Hemel Hempstead tyre experts decode sidewall markings so drivers across Hertfordshire pick the right tyre."
                keywords="tyre markings explained, read tyre size, tyre load index chart, tyre speed rating guide, mobile tyres hemel hempstead, hertfordshire tyre guide"
                canonical="https://www.queenswaymobiletyres.co.uk/blog/decoding-tyre-markings"
                image={tyreMarkingsImage}
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
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Technical Education</span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                            Decoding Tyre Markings: The Ultimate Guide
                        </h1>
                        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Updated March 15, 2024</span>
                            <span className="flex items-center gap-2"><User className="w-4 h-4" /> Tech Specialist Team</span>
                        </div>
                    </div>
                </div>
            </div>

            <article className="py-16 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <img
                        src={tyreMarkingsImage}
                        alt="Extreme close up of tyre sidewall specifications"
                        className="w-full h-[400px] md:h-[500px] object-cover rounded-xl mb-12 shadow-2xl border-2 border-white/5"
                    />

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        <p className="text-xl leading-relaxed mb-8 font-medium text-white">
                            When ordering new tyres from <Link href="/" className="text-primary hover:underline">Queensway Mobile Tyres</Link>, we ask for your tyre size. But looking at your sidewall can be like reading a secret code. That string of numbers and letters—e.g., <strong>205/55 R16 91V</strong>—contains vital engineering data about your vehicle's capabilities.
                        </p>
                        <p className="text-gray-300 mb-8">
                            Understanding these markings ensures you choose the correct tyre for your <Link href="/mobile-tyre-fitting-hemel-hempstead" className="text-primary hover:underline">mobile tyre fitting</Link> appointment. For comprehensive safety data, organizations like <a href="https://www.tyresafe.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TyreSafe</a> provide excellent resources.
                        </p>

                        <div className="bg-secondary/50 border-2 border-primary/20 p-8 rounded-2xl my-12 text-center">
                            <h2 className="text-3xl font-heading font-bold text-white mb-8">The Anatomy of a Tyre Code</h2>
                            <div className="text-4xl md:text-6xl font-mono font-bold text-white tracking-widest mb-4">
                                <span className="text-primary">205</span>/
                                <span className="text-blue-400">55</span>
                                <span className="text-gray-500 mx-2">R</span>
                                <span className="text-green-400">16</span>
                                <span className="text-yellow-400 ml-4">91</span>
                                <span className="text-red-400">V</span>
                            </div>
                            <p className="text-gray-400 text-sm italic">Example: A common sized tyre for a family hatchback</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 mb-12">
                            <div className="bg-secondary/30 p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <Ruler className="text-primary w-6 h-6" />
                                    <h3 className="font-bold text-2xl text-white">205 - Width</h3>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    The nominal section width of the tyre in millimetres, measured from sidewall to sidewall. Wider tyres generally offer more grip but can increase fuel consumption.
                                </p>
                            </div>

                            <div className="bg-secondary/30 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <Gauge className="text-blue-400 w-6 h-6" />
                                    <h3 className="font-bold text-2xl text-white">55 - Profile</h3>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    The aspect ratio. The height of the sidewall is 55% of the tire's width (205mm). Lower numbers (e.g., 40, 35) mean "low profile" tyres found on sports cars.
                                </p>
                            </div>

                            <div className="bg-secondary/30 p-6 rounded-xl border border-white/10 hover:border-green-400/50 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <CheckCircle className="text-green-400 w-6 h-6" />
                                    <h3 className="font-bold text-2xl text-white">16 - Rim Size</h3>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    The diameter of the metal wheel rim in inches. You cannot fit a 16-inch tyre onto a 17-inch alloy wheel—they must match exactly.
                                </p>
                            </div>

                            <div className="bg-secondary/30 p-6 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <Scale className="text-yellow-400 w-6 h-6" />
                                    <h3 className="font-bold text-2xl text-white">91 - Load Index</h3>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    A numerical code indicating the maximum load the tyre can carry. 91 represents 615kg per tyre. Never fit a tyre with a lower load index than recommended.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <Activity className="text-red-400 w-8 h-8" />
                            Speed Ratings Explained
                        </h2>
                        <p>
                            The final letter indicates the maximum speed the tyre is legally approved for at full load.
                        </p>

                        <div className="overflow-x-auto my-8">
                            <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
                                <thead className="bg-white/10 text-white">
                                    <tr>
                                        <th className="p-4 border-b border-white/20">Rating Letter</th>
                                        <th className="p-4 border-b border-white/20">Max Speed (mph)</th>
                                        <th className="p-4 border-b border-white/20">Typical Usage</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">T</td>
                                        <td className="p-4">118 mph</td>
                                        <td className="p-4">Family Sedans / Vans</td>
                                    </tr>
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">H</td>
                                        <td className="p-4">130 mph</td>
                                        <td className="p-4">Sporty Hatchbacks</td>
                                    </tr>
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">V</td>
                                        <td className="p-4">149 mph</td>
                                        <td className="p-4">High Performance</td>
                                    </tr>
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">W</td>
                                        <td className="p-4">168 mph</td>
                                        <td className="p-4">Exotic Sports Cars</td>
                                    </tr>
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">Y</td>
                                        <td className="p-4">186 mph</td>
                                        <td className="p-4">Supercars</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 my-12">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <HelpCircle className="w-6 h-6 text-primary" /> Why does this matter?
                            </h3>
                            <p className="text-gray-300 mb-4">
                                Fitting the wrong tyres isn't just a technicality. It can fail your MOT, invalidate your car insurance, and compromise your safety.
                            </p>
                            <p className="text-gray-300">
                                Specifically, <strong>Speed Ratings</strong> and <strong>Load Indices</strong> must meet or exceed the vehicle manufacturer's specifications.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-secondary to-primary/20 p-8 rounded-2xl text-center border border-primary/30 shadow-lg shadow-primary/5 mt-16">
                            <h3 className="text-3xl font-bold text-white mb-4">Still Confused?</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                You don't need to be an expert. Just send us a photo of your tyre sidewall or tell us your vehicle registration, and we will find the perfect match for you.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-white transition-colors">
                                    Ask an Expert for Help
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}
