import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, AlertTriangle, FileText, Camera, Scale, PoundSterling, ShieldCheck, HelpCircle, CheckCircle, PhoneCall } from "lucide-react";
import { Link } from "wouter";
import potholeImage from "@assets/generated_images/flat_tyre_emergency.webp";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function PotholeDamageClaims() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Pothole Damage Claims in Hertfordshire: Your 2026 Rights Guide",
        "image": potholeImage,
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
        "description": "Hit a pothole in Hemel Hempstead, Watford or St Albans? Full guide to documenting damage, claiming from Hertfordshire County Council, and Section 58 defence explained.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.queenswaymobiletyres.co.uk/blog/pothole-damage-claims"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can I claim for pothole damage from Hertfordshire County Council?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Hertfordshire County Council is the highway authority for most non-trunk roads in Hemel Hempstead, Watford, St Albans, Hitchin and the wider county. You can submit a claim via their online Fault Reporting portal, providing photos, repair invoices and a location pin. If they cannot prove a 'reasonable inspection regime' under Section 58 of the Highways Act 1980, they may be liable."
                }
            },
            {
                "@type": "Question",
                "name": "What is the Section 58 defence and why does it matter?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Section 58 of the Highways Act 1980 allows councils to defend against claims if they can prove they inspected and maintained the road to a reasonable standard. Around 65% of pothole claims are rejected on these grounds. To succeed, you typically need evidence the defect was reported previously, was unusually deep (over 40mm is the national intervention threshold), or that inspection records show gaps."
                }
            },
            {
                "@type": "Question",
                "name": "Should I claim on my insurance or from the council?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For damage under £500, claiming from the council is usually better because an insurance claim risks your no-claims bonus and excess. For major damage (bent rims, broken suspension, multiple tyres) an insurance claim may be faster. You can pursue both simultaneously, but you cannot double-recover the same loss."
                }
            },
            {
                "@type": "Question",
                "name": "How long do I have to submit a pothole damage claim?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Under the Limitation Act 1980, you have six years to bring a civil claim for property damage in England and Wales. However, councils prefer claims within 14 days of the incident while evidence is fresh, and delays weaken your case significantly."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Pothole Damage Claims Hertfordshire 2026 | Queensway Mobile Tyres"
                description="Hit a pothole in Hemel Hempstead, Watford or St Albans? Full guide to claiming tyre and wheel damage from Hertfordshire County Council. Section 58 explained."
                keywords="pothole damage claim hertfordshire, pothole claim hemel hempstead, pothole damage watford, tyre damage st albans, section 58 highways act, hertfordshire county council pothole"
                canonical="https://www.queenswaymobiletyres.co.uk/blog/pothole-damage-claims"
                image={potholeImage}
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
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Your Legal Rights</span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                            Pothole Damage Claims in Hertfordshire: The Complete 2026 Guide
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
                        src={potholeImage}
                        alt="Damaged tyre from pothole impact on Hertfordshire road"
                        className="w-full h-[400px] md:h-[500px] object-cover rounded-xl mb-12 shadow-2xl border-2 border-white/5"
                    />

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        <p className="text-xl leading-relaxed mb-8 font-medium text-white">
                            If you drive regularly around Hemel Hempstead, Watford, St Albans or anywhere across Hertfordshire, you've probably felt that sickening crunch of a wheel dropping into a pothole. One bad pothole can destroy a tyre, buckle an alloy, knock your tracking out, or even damage your suspension. The repair bill can run into hundreds — sometimes over a thousand pounds. The good news? You often have a legal right to recover that money, and this guide from <strong><Link href="/" className="text-primary hover:underline">Queensway Mobile Tyres</Link></strong> walks you through exactly how to do it.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <AlertTriangle className="text-red-500 w-8 h-8" />
                            Why Are Hertfordshire Roads So Bad?
                        </h2>
                        <p>
                            According to the 2026 ALARM (Annual Local Authority Road Maintenance) survey, the local road repair backlog in England now exceeds £17 billion. Hertfordshire County Council is responsible for around 3,200 miles of carriageway across the county, and like most local authorities, it is working with a stretched budget. A combination of heavy HGV traffic on routes like the A41, A414, A4147 and A4251, freeze-thaw cycles during our wet winters, and decades of surface dressing (rather than proper resurfacing) has left swathes of road vulnerable to cratering.
                        </p>
                        <p>
                            The result is that streets in Hemel Hempstead estates, the rural lanes around Berkhamsted and Tring, and even main commuter routes through Watford and St Albans now carry hundreds of potholes at any given time. Many of these exceed the national intervention threshold of 40mm deep — the depth at which a defect is meant to be actioned within a set number of days.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <Scale className="text-primary w-8 h-8" />
                            Your Legal Foundation: The Highways Act 1980
                        </h2>
                        <p>
                            The entire claims system rests on <strong>Section 41</strong> of the Highways Act 1980, which places a legal duty on highway authorities to maintain the public highway. If they fail, and you suffer loss as a direct result, you can sue for damages in the small claims court.
                        </p>
                        <p>
                            However, councils have a powerful defence in <strong>Section 58</strong>. If they can prove they had a reasonable system of inspection and repair in place, they escape liability even if the pothole existed. This is why, nationally, around 65% of pothole damage claims are initially rejected. But rejection is not the end — about a third of rejected claims succeed on appeal when the claimant provides strong evidence. The key to winning is documentation.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <Camera className="text-primary w-8 h-8" />
                            Step 1: Document the Scene (Immediately)
                        </h2>
                        <p>
                            Your claim lives or dies on the quality of your evidence. If it is safe to do so, before you leave the scene, gather the following:
                        </p>
                        <ul className="list-none space-y-3 my-6 pl-4 border-l-2 border-primary">
                            <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5 flex-shrink-0" /> <strong>Photographs of the pothole</strong> from multiple angles — wide shot showing the road, close-up showing the crater.</li>
                            <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5 flex-shrink-0" /> <strong>Measurement</strong> — place a ruler, coin or shoe in the hole for scale. A 2p coin is 26mm. Courts love scale objects.</li>
                            <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5 flex-shrink-0" /> <strong>GPS coordinates</strong> — open Google Maps, drop a pin, screenshot it.</li>
                            <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5 flex-shrink-0" /> <strong>Date, time and weather</strong> — noted in writing.</li>
                            <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5 flex-shrink-0" /> <strong>Damage photos</strong> — tyre sidewall, cracked alloy, fluid leak, whatever applies.</li>
                            <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5 flex-shrink-0" /> <strong>Witness details</strong> — passenger, nearby driver, anyone who saw it.</li>
                        </ul>
                        <p>
                            Never stop in a live lane on a smart motorway section of the M1 or M25. If it happens there, follow the advice in our <Link href="/blog/handling-tyre-blowout" className="text-primary hover:underline">tyre blowout safety guide</Link> and get to a refuge area first.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <FileText className="text-primary w-8 h-8" />
                            Step 2: Identify the Correct Authority
                        </h2>
                        <p>
                            This is where most claims go wrong. Different bodies are responsible for different roads, and claiming from the wrong one wastes weeks:
                        </p>
                        <div className="overflow-x-auto my-8">
                            <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
                                <thead className="bg-white/10 text-white">
                                    <tr>
                                        <th className="p-4 border-b border-white/20">Road Type</th>
                                        <th className="p-4 border-b border-white/20">Authority</th>
                                        <th className="p-4 border-b border-white/20">Examples</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">Motorways</td>
                                        <td className="p-4">National Highways</td>
                                        <td className="p-4">M1, M25, M10</td>
                                    </tr>
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">A-roads (trunk)</td>
                                        <td className="p-4">National Highways</td>
                                        <td className="p-4">A1(M), parts of A5</td>
                                    </tr>
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">A-roads (local)</td>
                                        <td className="p-4">Hertfordshire CC</td>
                                        <td className="p-4">A41, A414, A4251, A4147</td>
                                    </tr>
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">B-roads & residential</td>
                                        <td className="p-4">Hertfordshire CC</td>
                                        <td className="p-4">Estates in Hemel, Watford, St Albans</td>
                                    </tr>
                                    <tr className="bg-white/5 border-b border-white/5">
                                        <td className="p-4 font-bold text-white">Private estate roads</td>
                                        <td className="p-4">Management company</td>
                                        <td className="p-4">Some housing developments</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            For the vast majority of Hemel Hempstead, Tring, Berkhamsted, Watford, St Albans and Hitchin incidents, your claim goes to <strong>Hertfordshire County Council</strong>. Their fault reporting portal is at <a href="https://www.hertfordshire.gov.uk/services/recycling-waste-and-environment/roads-pavements-and-streetlights/road-maintenance/report-a-problem-with-a-road-or-pavement.aspx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">hertfordshire.gov.uk</a>, and you should both <em>report</em> the defect and <em>submit a damage claim</em> — they are two separate actions.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <PoundSterling className="text-primary w-8 h-8" />
                            Step 3: Get Repair Quotes (Not Opinions)
                        </h2>
                        <p>
                            Councils pay what you have <em>actually</em> spent, evidenced by VAT invoices — not what you were quoted. Before you submit, get at least two written quotes and then have the work done. Acceptable evidence includes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300 my-6 marker:text-primary">
                            <li>Itemised VAT invoice from a qualified fitter (including a mobile service like ours)</li>
                            <li>Photographs of the damaged and replaced components</li>
                            <li>Before and after tracking/alignment printouts if the geometry was knocked out</li>
                            <li>Bank statement or card receipt showing payment</li>
                        </ul>
                        <p>
                            When we attend pothole damage call-outs, we provide a clear itemised invoice that meets council evidentiary standards. If the damage extends beyond the tyre — for example a cracked alloy, split suspension arm bush or bent track rod — we'll advise you on what needs a proper workshop and we'll document the tyre-side evidence cleanly so you can prove causation.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <ShieldCheck className="text-primary w-8 h-8" />
                            Step 4: Defeating the Section 58 Defence
                        </h2>
                        <p>
                            When your claim is rejected (and many first attempts are), don't give up. You're entitled to request — under the Environmental Information Regulations 2004 — the council's inspection records for that stretch of road. Specifically ask for:
                        </p>
                        <ol className="list-decimal pl-6 space-y-3 text-gray-300 my-6 marker:text-primary marker:font-bold">
                            <li>The inspection frequency category assigned to the road</li>
                            <li>The date of the last recorded inspection before your incident</li>
                            <li>Any defects logged on that inspection</li>
                            <li>Any previous reports of the specific pothole that caused damage</li>
                            <li>The council's written inspection and repair policy document</li>
                        </ol>
                        <p>
                            If the road should have been inspected monthly and the last record is three months old, Section 58 fails. If another driver reported the same hole two weeks earlier and no action was taken, Section 58 fails. This is where most successful claims are won.
                        </p>

                        <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-xl mb-12 shadow-lg shadow-red-900/20">
                            <h3 className="font-bold text-red-500 mb-2 flex items-center gap-2 text-xl"><AlertTriangle className="w-6 h-6" /> Don't Sign Away Your Rights</h3>
                            <p className="text-lg text-white">
                                Some councils offer a small "goodwill payment" in exchange for signing a full-and-final settlement. If the offer doesn't cover your actual losses, you are usually better off rejecting it and pursuing the matter in the small claims court, where the fee for claims under £500 is just £35 and no solicitor is required.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
                            <HelpCircle className="text-primary w-8 h-8" />
                            Insurance vs Council — Which Is Better?
                        </h2>
                        <p>
                            For damage under about £500, pursue the council first. Insurance excesses commonly start at £250, and a claim usually costs you two years of your no-claims bonus — often more than the damage itself. For catastrophic impacts where multiple wheels, tyres, suspension and alignment are affected and the bill exceeds £1,000, an insurance claim may get you back on the road faster while you pursue the council in parallel for the excess.
                        </p>

                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 my-12">
                            <h3 className="text-2xl font-bold text-white mb-6">How Queensway Helps Pothole Victims</h3>
                            <p className="text-gray-300 mb-4">
                                Because we're mobile, we come to where the damage happened — your driveway, workplace or the roadside — within 60 minutes in most of Hemel Hempstead, Watford, St Albans, Berkhamsted, Tring, Kings Langley and Harpenden. On every pothole call-out we:
                            </p>
                            <ul className="list-none space-y-3 my-4">
                                <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5 flex-shrink-0" /> Inspect the tyre, rim and visible suspension components</li>
                                <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5 flex-shrink-0" /> Photograph damage for your claim file</li>
                                <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5 flex-shrink-0" /> Replace damaged tyres with quality brands (same-day)</li>
                                <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5 flex-shrink-0" /> Provide a clear VAT invoice that meets council evidentiary standards</li>
                                <li className="flex items-center gap-2"><CheckCircle className="text-primary w-5 h-5 flex-shrink-0" /> Advise if further workshop repair is needed</li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6 mt-12">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-white text-lg mb-2">How long does a Hertfordshire pothole claim take?</h3>
                                <p className="text-gray-400">From submission, expect an initial acknowledgement within two weeks and a formal decision in 4–8 weeks. Appeals and small claims court actions add another 2–6 months.</p>
                            </div>
                            <div className="border-t border-white/10 pt-4">
                                <h3 className="font-bold text-white text-lg mb-2">Can I claim for tyre wear if the pothole only 'weakened' the sidewall?</h3>
                                <p className="text-gray-400">Yes, if a qualified technician can demonstrate the impact caused internal belt damage or a bulge. We document this clearly on our invoices when we replace the tyre.</p>
                            </div>
                            <div className="border-t border-white/10 pt-4">
                                <h3 className="font-bold text-white text-lg mb-2">What if I hit the pothole on a council-owned car park road?</h3>
                                <p className="text-gray-400">Off-highway surfaces aren't covered by the Highways Act. You'd need to claim under occupiers' liability, which is harder. Photograph everything the same way.</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-secondary to-primary/20 p-8 rounded-2xl text-center border border-primary/30 shadow-lg shadow-primary/5 mt-16">
                            <h3 className="text-3xl font-bold text-white mb-4">Hit a Pothole? Let Us Help.</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                Our mobile technicians cover all of Hertfordshire within a 30-mile radius of Hemel Hempstead. We'll replace damaged tyres and provide the documentation you need to recover your costs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a href="tel:07427515915" onClick={handlePhoneClick}>
                                    <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-white transition-colors">
                                        <PhoneCall className="w-5 h-5 mr-2" /> Call 07427 515915
                                    </Button>
                                </a>
                                <Link href="/booking">
                                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                                        Book a Fitting
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
