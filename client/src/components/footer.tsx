import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-3">
            <div className="flex flex-col mb-6">
              <span className="font-heading font-bold text-2xl text-white tracking-wider">QUEENSWAY</span>
              <span className="text-xs text-primary font-bold tracking-[0.3em] uppercase">Mobile Tyres</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              London's premier mobile tyre fitting service. We bring the garage to your door, 24/7. Expert technicians, competitive prices, and rapid response times.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61573474325309"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Queensway Mobile Tyres on Facebook"
                className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/qwmobiletyre247/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Queensway Mobile Tyres on Instagram"
                className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1.5">
            <h3 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-wider">Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/mobile-tyre-fitting-hemel-hempstead" className="text-gray-400 hover:text-primary transition-colors">Mobile Fitting</Link></li>
              <li><Link href="/24-hour-emergency-mobile-tyre-fitting" className="text-gray-400 hover:text-primary transition-colors">Emergency</Link></li>
              <li><Link href="/locations" className="text-gray-400 hover:text-primary transition-colors">Locations</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1.5">
            <h3 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/mobile-tyre-fitting-hemel-hempstead" className="text-gray-400 hover:text-primary transition-colors">Tyre Fitting</Link></li>
              <li><Link href="/mobile-puncture-repair-near-me" className="text-gray-400 hover:text-primary transition-colors">Puncture repair</Link></li>
              <li><Link href="/24-hour-emergency-mobile-tyre-fitting" className="text-gray-400 hover:text-primary transition-colors">Roadside</Link></li>
              <li><Link href="/mobile-car-battery-replacement" className="text-gray-400 hover:text-primary transition-colors">Batteries</Link></li>
              <li><Link href="/mobile-wheel-balancing" className="text-gray-400 hover:text-primary transition-colors">Balancing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 lg:pl-4">
            <h3 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span className="text-gray-400">101 Queensway, Service Station, Hemel Hempstead HP2 5HD</span>
              </li>
              <li>
                <a href="tel:07427515915" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group" onClick={handlePhoneClick}>
                  <Phone className="w-5 h-5 text-primary group-hover:animate-pulse" />
                  <span className="font-bold text-white text-lg">07427 515 915</span>
                </a>
              </li>
              <li>
                <a href="tel:07988018865" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group">
                  <Phone className="w-5 h-5 text-primary/60" />
                  <span className="text-sm font-medium">07988 018 865</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/447427515915" className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  <span className="text-white">WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@queenswaymobiletyres.co.uk" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors overflow-hidden">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="truncate text-xs">info@queenswaymobiletyres.co.uk</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Locations */}
          <div className="lg:col-span-3 lg:pl-4">
            <h3 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-wider">Popular Locations</h3>
            <ul className="two-column-list text-sm">
              <li><Link href="/mobile-tyres-watford" className="text-gray-400 hover:text-primary transition-colors">Watford</Link></li>
              <li><Link href="/mobile-tyres-st-albans" className="text-gray-400 hover:text-primary transition-colors">St Albans</Link></li>
              <li><Link href="/mobile-tyres-luton" className="text-gray-400 hover:text-primary transition-colors">Luton</Link></li>
              <li><Link href="/mobile-tyres-milton-keynes" className="text-gray-400 hover:text-primary transition-colors">Milton Keynes</Link></li>
              <li><Link href="/mobile-tyres-harrow" className="text-gray-400 hover:text-primary transition-colors">Harrow</Link></li>
              <li><Link href="/mobile-tyres-slough" className="text-gray-400 hover:text-primary transition-colors">Slough</Link></li>
              <li><Link href="/mobile-tyres-london" className="text-gray-400 hover:text-primary transition-colors">London</Link></li>
              <li><Link href="/mobile-tyres-hemel-hempstead" className="text-gray-400 hover:text-primary transition-colors">Hemel</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Queensway Mobile Tyres. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}