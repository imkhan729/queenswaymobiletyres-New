import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Thermometer, Snowflake, CheckCircle, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import winterTyreImage from "@assets/generated_images/winter_driving_uk.webp";

export default function WinterTyresGuide() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Ultimate Guide to Winter Tyres in Hertfordshire",
    "image": winterTyreImage,
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
    "datePublished": "2023-12-05",
    "dateModified": "2026-04-06",
    "description": "Do you need winter tyres in Hemel Hempstead and across Hertfordshire? We explain the 7°C rule and the difference between summer, winter and all-season tyres.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.queenswaymobiletyres.co.uk/blog/winter-tyres-guide"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are winter tyres a legal requirement in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, unlike some European countries, winter tyres are not mandatory in the UK. However, they are highly recommended for safety when temperatures drop below 7°C."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use winter tyres in the summer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is not recommended. Winter tyres are made of a softer compound that wears out much faster in warm weather. They will also provide less grip and longer braking distances on hot dry roads."
        }
      },
      {
        "@type": "Question",
        "name": "What are All-Season tyres?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All-Season tyres are a hybrid compromise between summer and winter tyres. They perform adequately in most UK weather conditions, avoiding the hassle of swapping tyres twice a year."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Winter Tyres Guide | Do I Need Them in Hemel Hempstead & Herts?"
        description="Winter tyres vs summer explained. Understand the 7°C rule and whether all-season tyres suit driving in Hemel Hempstead, Watford, St Albans and Hertfordshire."
        keywords="winter tyres hertfordshire, all season tyres hemel hempstead, driving in snow uk, winter tyre fitting watford, 7 degree rule tyres, winter tyres st albans"
        canonical="https://www.queenswaymobiletyres.co.uk/blog/winter-tyres-guide"
        image={winterTyreImage}
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
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Seasonal Advice</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              The Ultimate Guide to Winter Tyres in Hertfordshire
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
            src={winterTyreImage}
            alt="Car driving on frosty UK road with winter tyres"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-xl mb-12 shadow-2xl border-2 border-white/5"
          />

          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <p className="text-xl leading-relaxed mb-8 font-medium text-white">
              Every year as the temperature drops, the debate begins: "Do I really need <Link href="/contact" className="text-primary hover:underline">winter tyres</Link> in the UK?" Unlike mainland Europe, we don't always get heavy snow. However, <strong className="text-primary">winter tyres aren't just for snow</strong>. They are about safety in cold temperatures.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              <Thermometer className="text-blue-400 w-8 h-8" />
              The 7°C Rule
            </h2>
            <p>
              The most critical thing to understand is the "7 degree rule", explained in detail by manufacturers like <a href="https://www.continental-tires.com/products/b2c/tire-knowledge/winter-tires/7-degree-rule/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Continental</a>.
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-500/10 p-6 rounded-xl border border-red-500/20">
                <h3 className="text-red-400 font-bold text-xl mb-2">Summer Tyres &lt; 7°C</h3>
                <p className="text-sm">Below 7°C, the rubber in standard summer tyres hardens like plastic. This significantly reduces grip and increases braking distances.</p>
              </div>
              <div className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/20">
                <h3 className="text-blue-400 font-bold text-xl mb-2">Winter Tyres &lt; 7°C</h3>
                <p className="text-sm">Winter tyres maintain high silica content which stays flexible in the cold, allowing the tyre to key into the road surface for maximum grip.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              <Snowflake className="text-white w-8 h-8" />
              Sipes: The Secret Weapon
            </h2>
            <p>
              If you look closely at a winter tyre, you will see thousands of tiny wiggly slits in the tread blocks. These are called <strong>sipes</strong>. As the tyre rotates, these sipes open up and bite into snow, slush, and ice, providing traction that a smooth block summer tyre simply cannot match.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              <CheckCircle className="text-primary w-8 h-8" />
              Are All-Season Tyres the Answer?
            </h2>
            <p>
              For many London drivers, swapping tyres twice a year is a hassle. Enter the <strong>All-Season Tyre</strong>.
            </p>
            <p className="mb-6">
              These are a hybrid design. They won't perform as well as a pure winter tyre in deep Scottish snow, nor as well as a summer tyre on a hot track day. But for the variable British weather—wet, chilly, occasional slush—they are an increasingly popular "fit and forget" solution.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong>Pros:</strong> No need to store a second set of wheels; capable in light snow.</li>
              <li><strong>Cons:</strong> Generally more expensive to buy; compromise in extreme conditions.</li>
            </ul>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" /> Frequently Asked Questions
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">Are they legal?</h4>
                  <p className="text-gray-400">Winter tyres are perfectly legal in the UK. However, check your insurance policy (most providers don't mind, but it's worth a notification).</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-bold text-white text-lg mb-2">Where do I store my summer tyres?</h4>
                  <p className="text-gray-400">If you don't have garage space, many tyre companies (including some partners) offer "tyre hotels" where they store your off-season wheels for a small fee.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary to-primary/20 p-8 rounded-2xl text-center border border-primary/30 shadow-lg shadow-primary/5">
              <h3 className="text-3xl font-bold text-white mb-4">Get Winter Ready</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Don't wait for the first snowfall. Equip your car for the cold today with Queensway Mobile Tyres.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-black font-bold uppercase hover:bg-white transition-colors w-full sm:w-auto">
                    Get a Winter Quote
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 w-full sm:w-auto">
                    More Advice
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
