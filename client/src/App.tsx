import { Switch, Route, Redirect } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { ScrollToTop } from "@/components/scroll-to-top";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingActionButtons } from "@/components/floating-action-buttons";

// Home is eager — it's the landing page for ~70% of traffic, so we want
// the first paint to happen without waiting for a second chunk.
import Home from "@/pages/home";

// Everything else is lazy so users only download the page they ask for.
const NotFound = lazy(() => import("@/pages/not-found"));
const MobileTyreFitting = lazy(() => import("@/pages/services/mobile-tyre-fitting"));
const EmergencyCallOut = lazy(() => import("@/pages/services/emergency-call-out"));
const PunctureRepair = lazy(() => import("@/pages/services/puncture-repair"));
const BatteryReplacement = lazy(() => import("@/pages/services/battery-replacement"));
const WheelBalancing = lazy(() => import("@/pages/services/wheel-balancing"));
const EmergencyFuel = lazy(() => import("@/pages/services/emergency-fuel"));
const LockingNutRemoval = lazy(() => import("@/pages/services/locking-nut-removal"));
const Booking = lazy(() => import("@/pages/booking"));
const Blog = lazy(() => import("@/pages/blog"));
const TyreSafetyTips = lazy(() => import("@/pages/blog/tyre-safety-tips"));
const WhenToReplaceTyres = lazy(() => import("@/pages/blog/when-to-replace-tyres"));
const WinterTyresGuide = lazy(() => import("@/pages/blog/winter-tyres-guide"));
const MobileTyreFittingLondon = lazy(() => import("@/pages/blog/mobile-tyre-fitting-london"));
const HandlingTyreBlowout = lazy(() => import("@/pages/blog/handling-tyre-blowout"));
const DecodingTyreMarkings = lazy(() => import("@/pages/blog/decoding-tyre-markings"));
const MobileTyreFittingCostGuide = lazy(() => import("@/pages/blog/mobile-tyre-fitting-cost-guide"));
const PotholeDamageClaims = lazy(() => import("@/pages/blog/pothole-damage-claims"));
const RunFlatTyresExplained = lazy(() => import("@/pages/blog/run-flat-tyres-explained"));
const Locations = lazy(() => import("@/pages/locations"));
const Contact = lazy(() => import("@/pages/contact"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));
const SitemapPage = lazy(() => import("@/pages/sitemap-page"));
const About = lazy(() => import("@/pages/about"));
const WatfordLocation = lazy(() => import("@/pages/locations/watford"));
const StAlbansLocation = lazy(() => import("@/pages/locations/st-albans"));
const HemelHempsteadLocation = lazy(() => import("@/pages/locations/hemel-hempstead"));
const LondonLocation = lazy(() => import("@/pages/locations/london"));
const LutonLocation = lazy(() => import("@/pages/locations/luton"));
const MiltonKeynesLocation = lazy(() => import("@/pages/locations/milton-keynes"));
const HarrowLocation = lazy(() => import("@/pages/locations/harrow"));
const SloughLocation = lazy(() => import("@/pages/locations/slough"));
const NorthamptonLocation = lazy(() => import("@/pages/locations/northampton"));
const StevenageLocation = lazy(() => import("@/pages/locations/stevenage"));
const AylesburyLocation = lazy(() => import("@/pages/locations/aylesbury"));
const HighWycombeLocation = lazy(() => import("@/pages/locations/high-wycombe"));
const WelwynGardenCityLocation = lazy(() => import("@/pages/locations/welwyn-garden-city"));
const HatfieldLocation = lazy(() => import("@/pages/locations/hatfield"));

function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div
        className="w-12 h-12 rounded-full border-[3px] border-primary/20 border-t-primary animate-spin"
        aria-label="Loading page"
      />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Switch>
        <Route path="/" component={Home} />

        {/* Service pages — descriptive SEO slugs */}
        <Route path="/mobile-tyre-fitting-hemel-hempstead" component={MobileTyreFitting} />
        <Route path="/24-hour-emergency-mobile-tyre-fitting" component={EmergencyCallOut} />
        <Route path="/mobile-puncture-repair-near-me" component={PunctureRepair} />
        <Route path="/mobile-car-battery-replacement" component={BatteryReplacement} />
        <Route path="/mobile-wheel-balancing" component={WheelBalancing} />
        <Route path="/emergency-fuel-delivery" component={EmergencyFuel} />
        <Route path="/locking-wheel-nut-removal" component={LockingNutRemoval} />

        {/* Old service slugs → 301-style redirects to new descriptive URLs */}
        <Route path="/mobile-tyre-fitting"><Redirect to="/mobile-tyre-fitting-hemel-hempstead" /></Route>
        <Route path="/emergency-call-out"><Redirect to="/24-hour-emergency-mobile-tyre-fitting" /></Route>
        <Route path="/puncture-repair"><Redirect to="/mobile-puncture-repair-near-me" /></Route>
        <Route path="/battery-replacement"><Redirect to="/mobile-car-battery-replacement" /></Route>
        <Route path="/wheel-balancing"><Redirect to="/mobile-wheel-balancing" /></Route>
        <Route path="/emergency-fuel"><Redirect to="/emergency-fuel-delivery" /></Route>
        <Route path="/locking-nut-removal"><Redirect to="/locking-wheel-nut-removal" /></Route>

        <Route path="/booking" component={Booking} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/tyre-safety-tips" component={TyreSafetyTips} />
        <Route path="/blog/when-to-replace-tyres" component={WhenToReplaceTyres} />
        <Route path="/blog/winter-tyres-guide" component={WinterTyresGuide} />
        <Route path="/blog/mobile-tyre-fitting-london" component={MobileTyreFittingLondon} />
        <Route path="/blog/handling-tyre-blowout" component={HandlingTyreBlowout} />
        <Route path="/blog/decoding-tyre-markings" component={DecodingTyreMarkings} />
        <Route path="/blog/mobile-tyre-fitting-cost-guide" component={MobileTyreFittingCostGuide} />
        <Route path="/blog/pothole-damage-claims" component={PotholeDamageClaims} />
        <Route path="/blog/run-flat-tyres-explained" component={RunFlatTyresExplained} />

        {/* Locations index */}
        <Route path="/locations" component={Locations} />

        {/* Location pages — descriptive /mobile-tyres-<city> slugs */}
        <Route path="/mobile-tyres-watford" component={WatfordLocation} />
        <Route path="/mobile-tyres-st-albans" component={StAlbansLocation} />
        <Route path="/mobile-tyres-hemel-hempstead" component={HemelHempsteadLocation} />
        <Route path="/mobile-tyres-london" component={LondonLocation} />
        <Route path="/mobile-tyres-luton" component={LutonLocation} />
        <Route path="/mobile-tyres-milton-keynes" component={MiltonKeynesLocation} />
        <Route path="/mobile-tyres-harrow" component={HarrowLocation} />
        <Route path="/mobile-tyres-slough" component={SloughLocation} />
        <Route path="/mobile-tyres-northampton" component={NorthamptonLocation} />
        <Route path="/mobile-tyres-stevenage" component={StevenageLocation} />
        <Route path="/mobile-tyres-aylesbury" component={AylesburyLocation} />
        <Route path="/mobile-tyres-high-wycombe" component={HighWycombeLocation} />
        <Route path="/mobile-tyres-welwyn-garden-city" component={WelwynGardenCityLocation} />
        <Route path="/mobile-tyres-hatfield" component={HatfieldLocation} />

        {/* Old /locations/<city> slugs → redirect to new descriptive URLs */}
        <Route path="/locations/watford"><Redirect to="/mobile-tyres-watford" /></Route>
        <Route path="/locations/st-albans"><Redirect to="/mobile-tyres-st-albans" /></Route>
        <Route path="/locations/hemel-hempstead"><Redirect to="/mobile-tyres-hemel-hempstead" /></Route>
        <Route path="/locations/london"><Redirect to="/mobile-tyres-london" /></Route>
        <Route path="/locations/luton"><Redirect to="/mobile-tyres-luton" /></Route>
        <Route path="/locations/milton-keynes"><Redirect to="/mobile-tyres-milton-keynes" /></Route>
        <Route path="/locations/harrow"><Redirect to="/mobile-tyres-harrow" /></Route>
        <Route path="/locations/slough"><Redirect to="/mobile-tyres-slough" /></Route>
        <Route path="/locations/northampton"><Redirect to="/mobile-tyres-northampton" /></Route>
        <Route path="/locations/stevenage"><Redirect to="/mobile-tyres-stevenage" /></Route>
        <Route path="/locations/aylesbury"><Redirect to="/mobile-tyres-aylesbury" /></Route>
        <Route path="/locations/high-wycombe"><Redirect to="/mobile-tyres-high-wycombe" /></Route>
        <Route path="/locations/welwyn-garden-city"><Redirect to="/mobile-tyres-welwyn-garden-city" /></Route>
        <Route path="/locations/hatfield"><Redirect to="/mobile-tyres-hatfield" /></Route>

        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/terms" component={TermsOfService} />
        <Route path="/sitemap" component={SitemapPage} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid');
    if (gclid) {
      sessionStorage.setItem('gclid', gclid);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
        <FloatingActionButtons />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
