import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Shield, Zap, AlertCircle, CheckCircle, XCircle, HelpCircle, Car, Wrench, PhoneCall } from "lucide-react";
import { Link } from "wouter";
import runFlatImage from "@assets/generated_images/tyre_sidewall_markings.webp";

export default function RunFlatTyresExplained() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Run-Flat Tyres Explained: Everything Hertfordshire Drivers Need to Know",
        "image": runFlatImage,
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
        "datePublished": "2026-04-06",
        "dateModified": "2026-04-06",
        "description": "Run-flat tyres explained for BMW, MINI and Mercedes drivers in Hemel Hempstead and Hertfordshire. How they work, costs, repair options and whether to keep them.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.queenswaymobiletyres.co.uk/blog/run-flat-tyres-explained"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can run-flat tyres be repaired?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In the vast majority of cases, no. Most run-flat manufacturers (Bridgestone, Michelin, Pirelli, Continental) advise against repair because there is no reliable way to confirm internal damage after the tyre has been driven on while deflated. If a run-flat has been driven on after losing pressure, it must be replaced."
                }
            },
            {
                "@type": "Question",
                "name": "How far can I drive on a run-flat after a puncture?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most modern run-flat tyres are designed to run for approximately 50 miles at up to 50mph after total pressure loss. This is enough to get home or to a safe location, but you should slow down immediately when your TPMS alerts and not continue beyond the manufacturer's limit."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need to replace run-flats with run-flats?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If your car was originally supplied with run-flats (common on BMW, MINI and Mercedes) and has no spare wheel, you should keep run-flats to preserve the mobility system. Switching to standard tyres leaves you without any puncture contingency. You can switch, but must carry a repair kit or compact spare."
                }
            },
            {
                "@type": "Question",
                "name": "Are run-flat tyres more expensive than standard tyres?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes — typically 20 to 40 percent more than an equivalent standard tyre from the same brand. A premium 225/45 R17 run-flat might cost £150–£200 compared with £110–£150 for the non-run-flat version."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Run-Flat Tyres Explained 2026 | BMW & Mercedes Herts Fitting"
                description="Run-flat tyres guide for BMW, MINI and Mercedes drivers in Hemel Hempstead and Hertfordshire. How they work, costs, whether to repair and mobile fitting."
                keywords="run flat tyres explained, run flat tyre repair, bmw run flat tyres, mercedes run flat, run flat hemel hempstead, mobile run flat fitting hertfordshire"
                canonical="https://www.queenswaymobiletyres.co.uk/blog/run-flat-tyres-explained"
                image={runFlatImage}
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
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Technical Deep Dive</span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                            Run-Flat Tyres Explained: The Complete Guide for Hertfordshire Drivers
                        </h1>
                        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Published April 6, 2026</span>
                            <span className="flex items-center gap-2"><User className="w-4 h-4" /> Queensway Technical Team</span>
                        </div>
                    </div>
                </div>
            </div>

            <article className="py-16 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <img
                        src={runFlatImage}
                        alt="Run-flat tyre sidewall markings on premium German car"
                        className="w-full h-[400px] md:h-[500px] object-cover rounded-xl mb-12 shadow-2xl border-2 border-white/5"
                    />

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        <p className="text-xl leading-relaxed mb-8 font-medium text-white">
                            If you drive a BMW 3 Series or 5 Series, a MINI Cooper, a Mercedes C-Class, or many of the newer Rolls-Royce, Lexus and Toyota models common on Hertfordshire driveways, you probably have run-flat tyres fitted — whether you realise it or not. These are marked with designations like <strong>RFT, RSC, SSR, ROF, MOE, ZP</strong> or simply "run-flat" on the sidewall, and they work very differently from standard tyres. In this guide, <strong><Link href="/" className="text-primary hover:underline">Queensway Mobile Tyres</Link></strong>, Hemel Hempstead's mobile fitting specialists, explain exactly how run-flats work, what it means when one fails, how much replacement costs, and whether you should keep them or switch.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <Shield className="text-primary w-8 h-8" />
                            What Is a Run-Flat Tyre?
                        </h2>
                        <p>
                            A run-flat tyre is engineered to allow continued driving for a limited distance — usually around <strong>50 miles at up to 50mph</strong> — after all air pressure has been lost. Instead of relying on air pressure to support the vehicle, a run-flat uses a heavily reinforced sidewall that can carry the weight of the car on its own.
                        </p>
                        <p>
                            There are two main designs in use today:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-secondary/50 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Zap className="text-primary w-5 h-5" /> Self-Supporting (SSR)</h3>
                                <p className="text-sm text-gray-400">The most common type on cars from BMW, MINI, Mercedes and Audi. The sidewall contains extra rubber reinforcement and heat-resistant compounds that keep the tyre's shape even when deflated. You feel little difference at first — it is the TPMS light that alerts you.</p>
                            </div>
                            <div className="bg-secondary/50 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Car className="text-primary w-5 h-5" /> Support Ring System</h3>
                                <p className="text-sm text-gray-400">Uses a hard rubber ring bonded to the wheel rim inside the tyre. When air is lost, the tyre bead drops onto this ring, which physically supports the car. Used on a small number of Rolls-Royce, Bentley and armoured vehicles. More expensive.</p>
                            </div>
                        </div>
                        <p>
                            Because run-flats remove the need for a spare wheel, car manufacturers save weight (around 25kg) and boot space. That is why modern BMWs don't even have a spare wheel well — only a repair kit, at best.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <CheckCircle className="text-primary w-8 h-8" />
                            How Do I Know If I Have Them?
                        </h2>
                        <p>
                            Look at the sidewall of your tyre. You'll see a size code like <strong>225/50 R17 98W</strong> followed by one or more of these abbreviations:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300 my-6 marker:text-primary">
                            <li><strong>RFT</strong> — Run Flat Tyre (Bridgestone, Firestone)</li>
                            <li><strong>RSC</strong> — Run-flat System Component (BMW OE)</li>
                            <li><strong>SSR</strong> — Self-Supporting Run-flat (Continental)</li>
                            <li><strong>ROF</strong> — Run On Flat (Goodyear, Dunlop)</li>
                            <li><strong>ZP</strong> or <strong>Zero Pressure</strong> — Michelin</li>
                            <li><strong>MOE / MOExtended</strong> — Mercedes-Benz Original Equipment</li>
                            <li><strong>★ (star symbol)</strong> — BMW approved fitment (not all star-marked tyres are run-flats, but most are)</li>
                        </ul>
                        <p>
                            If you still aren't sure, our technicians can confirm it in 30 seconds when we attend for a fitting or inspection. You can also find more on sidewall codes in our <Link href="/blog/decoding-tyre-markings" className="text-primary hover:underline">decoding tyre markings guide</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <AlertCircle className="text-red-500 w-8 h-8" />
                            Can Run-Flats Be Repaired?
                        </h2>
                        <p>
                            This is the single most-asked question we get at Queensway, and the answer is almost always <strong>no</strong>. Here's why:
                        </p>
                        <p>
                            The moment a run-flat tyre has been driven on while deflated, the reinforced sidewall flexes in ways it was never designed to during normal use. Microscopic damage inside the reinforcement can weaken the tyre's structure in ways no visual inspection can detect. For safety reasons, the <strong>British Tyre Manufacturers Association</strong> and every major premium brand — Bridgestone, Michelin, Pirelli, Continental, Goodyear — advise that a run-flat tyre which has been run flat should be <em>replaced, not repaired</em>.
                        </p>
                        <p>
                            In the rare case where you notice a slow puncture <strong>before</strong> pressure is completely lost and pull over immediately, and the puncture is in the tread area within the BS AU 159 repair zone, some manufacturers (notably Pirelli and Michelin) permit a single repair. We will always check with the specific manufacturer's guidance before refusing or accepting a repair.
                        </p>

                        <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-xl mb-12 shadow-lg shadow-red-900/20">
                            <h3 className="font-bold text-red-500 mb-2 flex items-center gap-2 text-xl"><XCircle className="w-6 h-6" /> Warning</h3>
                            <p className="text-lg text-white">
                                Beware of budget fitters offering to repair run-flats that have been driven on flat. This is against manufacturer guidance and puts you and your passengers at risk. If something fails at 70mph on the M1 or M25, the consequences are severe.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <Wrench className="text-primary w-8 h-8" />
                            Run-Flat Replacement: What It Costs
                        </h2>
                        <p>
                            Run-flat tyres are more expensive than standard tyres because of the extra engineering in the sidewall, the rarer sizes they typically come in, and the fact they are largely fitted to premium cars. Here are typical 2026 prices for mobile fitting in Hertfordshire (tyre + fitting + balancing + valve):
                        </p>
                        <div className="overflow-x-auto my-8">
                            <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
                                <thead className="bg-white/10 text-white">
                                    <tr>
                                        <th className="p-4 border-b border-white/20">Vehicle Example</th>
                                        <th className="p-4 border-b border-white/20">Common Size</th>
                                        <th className="p-4 border-b border-white/20">Price Range (per tyre)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">MINI Cooper</td>
                                        <td className="p-4">195/55 R16</td>
                                        <td className="p-4">£130–£180</td>
                                    </tr>
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">BMW 3 Series</td>
                                        <td className="p-4">225/50 R17</td>
                                        <td className="p-4">£160–£220</td>
                                    </tr>
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">Mercedes C-Class</td>
                                        <td className="p-4">225/45 R18</td>
                                        <td className="p-4">£180–£240</td>
                                    </tr>
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">BMW 5 Series</td>
                                        <td className="p-4">245/45 R18</td>
                                        <td className="p-4">£200–£270</td>
                                    </tr>
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">BMW X5 / Mercedes GLE</td>
                                        <td className="p-4">275/40 R20</td>
                                        <td className="p-4">£260–£360</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            For a deeper breakdown of service and fitting prices across all tyre types, see our <Link href="/blog/mobile-tyre-fitting-cost-guide" className="text-primary hover:underline">2026 mobile tyre fitting cost guide</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12">Should You Keep Run-Flats or Switch?</h2>
                        <p>
                            This is a genuine choice for many BMW and MINI drivers, and there is no universal answer. Here are the trade-offs:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-xl">
                                <h3 className="text-green-500 font-bold text-xl mb-3">Keep Run-Flats If...</h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex gap-2"><CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-1" /> You don't have a spare wheel and don't want one</li>
                                    <li className="flex gap-2"><CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-1" /> You do a lot of motorway miles (M1, M25, A1(M))</li>
                                    <li className="flex gap-2"><CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-1" /> You value safety after a puncture above ride quality</li>
                                    <li className="flex gap-2"><CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-1" /> Your car was factory-tuned specifically for run-flat dynamics</li>
                                </ul>
                            </div>
                            <div className="bg-yellow-500/10 border border-yellow-500/30 p-6 rounded-xl">
                                <h3 className="text-yellow-500 font-bold text-xl mb-3">Switch to Standard If...</h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex gap-2"><CheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0 mt-1" /> You find the ride uncomfortable on Herts B-roads</li>
                                    <li className="flex gap-2"><CheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0 mt-1" /> You're willing to carry a repair kit or space-saver</li>
                                    <li className="flex gap-2"><CheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0 mt-1" /> You want to save 20–30% on tyre costs</li>
                                    <li className="flex gap-2"><CheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0 mt-1" /> You've confirmed your TPMS will still function correctly</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            <strong>Important:</strong> If you switch, all four wheels must be changed to standard tyres at the same time — mixing run-flats and standard tyres across an axle (or diagonally) upsets the car's handling balance and can affect stability control calibration. Our technicians will never mix types.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <HelpCircle className="text-primary w-8 h-8" />
                            Run-Flat Maintenance: The Non-Negotiables
                        </h2>
                        <ol className="list-decimal pl-6 space-y-3 text-gray-300 my-6 marker:text-primary marker:font-bold">
                            <li><strong>Check pressures monthly.</strong> Run-flats hide under-inflation for longer than standard tyres, making pressure checks more important, not less.</li>
                            <li><strong>Never ignore the TPMS light.</strong> It is your only warning that pressure has been lost — pull over as soon as it is safe.</li>
                            <li><strong>Don't exceed 50mph / 50 miles after deflation.</strong> This is the manufacturer's limit, not a suggestion.</li>
                            <li><strong>Replace in pairs on the same axle.</strong> For the same reason as standard tyres — balanced grip is essential.</li>
                            <li><strong>Use an approved fitter.</strong> Run-flats require specific bead-breaking technique and lubricant. Damaging the reinforced sidewall during fitting is a real risk with cheap equipment.</li>
                        </ol>

                        <div className="bg-gradient-to-br from-secondary to-primary/20 p-8 rounded-2xl text-center border border-primary/30 shadow-lg shadow-primary/5 mt-16">
                            <h3 className="text-3xl font-bold text-white mb-4">Run-Flat Tyres? We've Got You Covered.</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                Queensway Mobile Tyres carries run-flats from all major brands, with professional fitting equipment designed for reinforced sidewalls. We come to your home or workplace anywhere in Hemel Hempstead, Watford, St Albans, Berkhamsted, Tring and across Hertfordshire — same day.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a href="tel:07427515915">
                                    <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-white transition-colors">
                                        <PhoneCall className="w-5 h-5 mr-2" /> Call 07427 515915
                                    </Button>
                                </a>
                                <Link href="/booking">
                                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                                        Book Mobile Fitting
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
