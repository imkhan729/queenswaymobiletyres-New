import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function NorthamptonLocation() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Northampton Tyres — Outside Our 30-Mile Coverage | Queensway"
                description="Northampton falls outside our standard 30-mile service radius from Hemel Hempstead. View our nearest coverage areas including Milton Keynes, Luton, and Aylesbury."
                noindex={true}
                keywords="mobile tyre fitting northampton, tyres northampton"
            />
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 max-w-3xl text-center">
                <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-500/30">
                    <AlertTriangle className="w-10 h-10 text-yellow-500" />
                </div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                    Northampton Is Outside Our Coverage Area
                </h1>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    We're sorry — Northampton is approximately 50 miles from our Hemel Hempstead base, which places it outside our standard <strong>30-mile service radius</strong>. We want to give every customer the fast response times we promise, and that means operating within our coverage zone.
                </p>
                <p className="text-gray-400 mb-10">
                    Our closest coverage areas to Northampton are <strong>Milton Keynes</strong> (approx. 18 miles south of Northampton) and <strong>Luton</strong>. Please check your location against our coverage map.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    <Link href="/mobile-tyres-milton-keynes">
                        <div className="bg-secondary/50 border border-primary/30 p-6 rounded-xl hover:border-primary/60 hover:bg-primary/10 transition-all cursor-pointer group text-left">
                            <MapPin className="text-primary w-6 h-6 mb-3" />
                            <h3 className="text-white font-bold mb-1 group-hover:text-primary">Mobile Tyres Milton Keynes</h3>
                            <p className="text-gray-400 text-sm">Our closest hub — MK postcodes, M1 J13–14</p>
                        </div>
                    </Link>
                    <Link href="/mobile-tyres-luton">
                        <div className="bg-secondary/50 border border-primary/30 p-6 rounded-xl hover:border-primary/60 hover:bg-primary/10 transition-all cursor-pointer group text-left">
                            <MapPin className="text-primary w-6 h-6 mb-3" />
                            <h3 className="text-white font-bold mb-1 group-hover:text-primary">Mobile Tyres Luton</h3>
                            <p className="text-gray-400 text-sm">LU1–LU4, Luton Airport, M1 J10–11</p>
                        </div>
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <a href="tel:07427515915" onClick={handlePhoneClick}>
                        <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-primary/90">
                            <Phone className="mr-2 w-5 h-5" /> Call to Check Coverage
                        </Button>
                    </a>
                    <Link href="/locations">
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 uppercase">
                            View All Coverage Areas
                        </Button>
                    </Link>
                </div>

                <p className="text-gray-500 text-sm">
                    Not sure if we cover your area? Call us on <a href="tel:07427515915" className="text-primary font-bold" onClick={handlePhoneClick}>07427 515915</a> — if we can reach you safely within our quality standards, we will.
                </p>
            </div>
            <Footer />
        </div>
    );
}
