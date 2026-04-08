import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Link } from "wouter";

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Sitemap | Queensway Mobile Tyres"
        description="Site map for Queensway Mobile Tyres."
      />
      <Navbar />
      <div className="pt-24 pb-12 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Sitemap</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Main Pages</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/locations" className="text-gray-300 hover:text-white">Locations</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/mobile-tyre-fitting-hemel-hempstead" className="text-gray-300 hover:text-white">Mobile Tyre Fitting</Link></li>
              <li><Link href="/24-hour-emergency-mobile-tyre-fitting" className="text-gray-300 hover:text-white">Emergency Call Out</Link></li>
              <li><Link href="/mobile-puncture-repair-near-me" className="text-gray-300 hover:text-white">Puncture Repair</Link></li>
              <li><Link href="/mobile-car-battery-replacement" className="text-gray-300 hover:text-white">Battery Replacement</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Blog</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/decoding-tyre-markings" className="text-gray-300 hover:text-white">Decoding Tyre Markings</Link></li>
              <li><Link href="/blog/handling-tyre-blowout" className="text-gray-300 hover:text-white">Handling Tyre Blowouts</Link></li>
              <li><Link href="/blog/mobile-tyre-fitting-london" className="text-gray-300 hover:text-white">Mobile Tyre Fitting London</Link></li>
              <li><Link href="/blog/tyre-safety-tips" className="text-gray-300 hover:text-white">Tyre Safety Tips</Link></li>
              <li><Link href="/blog/when-to-replace-tyres" className="text-gray-300 hover:text-white">When to Replace Tyres</Link></li>
              <li><Link href="/blog/winter-tyres-guide" className="text-gray-300 hover:text-white">Winter Tyres Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Locations</h3>
            <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <li><Link href="/mobile-tyres-watford" className="text-gray-300 hover:text-white">Watford</Link></li>
              <li><Link href="/mobile-tyres-st-albans" className="text-gray-300 hover:text-white">St Albans</Link></li>
              <li><Link href="/mobile-tyres-hemel-hempstead" className="text-gray-300 hover:text-white">Hemel Hempstead</Link></li>
              <li><Link href="/mobile-tyres-luton" className="text-gray-300 hover:text-white">Luton</Link></li>
              <li><Link href="/mobile-tyres-milton-keynes" className="text-gray-300 hover:text-white">Milton Keynes</Link></li>
              <li><Link href="/mobile-tyres-stevenage" className="text-gray-300 hover:text-white">Stevenage</Link></li>
              <li><Link href="/mobile-tyres-harrow" className="text-gray-300 hover:text-white">Harrow</Link></li>
              <li><Link href="/mobile-tyres-slough" className="text-gray-300 hover:text-white">Slough</Link></li>
              <li><Link href="/mobile-tyres-aylesbury" className="text-gray-300 hover:text-white">Aylesbury</Link></li>
              <li><Link href="/mobile-tyres-high-wycombe" className="text-gray-300 hover:text-white">High Wycombe</Link></li>
              <li><Link href="/mobile-tyres-hatfield" className="text-gray-300 hover:text-white">Hatfield</Link></li>
              <li><Link href="/mobile-tyres-welwyn-garden-city" className="text-gray-300 hover:text-white">Welwyn Garden City</Link></li>
              <li><Link href="/mobile-tyres-london" className="text-gray-300 hover:text-white">North London</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}