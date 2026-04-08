import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/mobile_tyre_fitting_van_in_action.webp";
import tyreSafetyImage from "@assets/generated_images/tyre_safety_check.webp";
import winterTyreImage from "@assets/generated_images/winter_driving_uk.webp";
import replaceTyreImage from "@assets/generated_images/worn_tyre_tread_indicator.webp";
import mobileFittingImage from "@assets/generated_images/mobile_tyre_fitting_london.webp";
import emergencyImage from "@assets/generated_images/flat_tyre_emergency.webp";
import tyreMarkingsImage from "@assets/generated_images/tyre_sidewall_markings.webp";

// Blog Post Data
const blogPosts = [
  {
    id: 1,
    title: "Essential Tyre Safety Tips for Hemel Hempstead & Hertfordshire Drivers",
    excerpt: "Tyres are the only contact your vehicle has with the road. Our Hemel Hempstead technicians share how to maintain them for safety and longer life.",
    date: "October 15, 2023",
    author: "Queensway Team",
    category: "Safety",
    slug: "/blog/tyre-safety-tips",
    image: tyreSafetyImage
  },
  {
    id: 2,
    title: "When Should You Replace Your Tyres? A Hertfordshire Driver's Guide",
    excerpt: "Knowing when to replace your tyres is crucial for safety. We explain the legal limits, warning signs, and age recommendations.",
    date: "November 2, 2023",
    author: "Senior Technician",
    category: "Maintenance",
    slug: "/blog/when-to-replace-tyres",
    image: replaceTyreImage
  },
  {
    id: 3,
    title: "The Ultimate Guide to Winter Tyres in Hertfordshire",
    excerpt: "Do you really need winter tyres in Hemel Hempstead and across Hertfordshire? We break down the benefits, costs, and performance for UK conditions.",
    date: "December 5, 2023",
    author: "Queensway Team",
    category: "Guides",
    slug: "/blog/winter-tyres-guide",
    image: winterTyreImage
  },
  {
    id: 4,
    title: "Why Mobile Tyre Fitting is the Best Choice in Hemel Hempstead & Herts",
    excerpt: "Save time and avoid the hassle of garage visits. Discover why busy Hemel Hempstead, Watford and St Albans drivers are switching to mobile tyre fitting.",
    date: "January 10, 2024",
    author: "Queensway Team",
    category: "Lifestyle",
    slug: "/blog/mobile-tyre-fitting-london",
    image: mobileFittingImage
  },
  {
    id: 5,
    title: "Handling a Tyre Blowout on the M1 or M25: A Safety Guide",
    excerpt: "A blowout on the M1 or M25 can be terrifying. Learn the essential safety steps to keep you and your passengers safe until our Hemel Hempstead team arrives.",
    date: "February 2, 2024",
    author: "Safety Expert",
    category: "Safety",
    slug: "/blog/handling-tyre-blowout",
    image: emergencyImage
  },
  {
    id: 6,
    title: "Decoding Tyre Markings: What Do These Numbers Mean?",
    excerpt: "Confused by the numbers on your tyre sidewall? Our Hemel Hempstead technicians decode the markings so you choose the right tyres for your vehicle.",
    date: "February 20, 2024",
    author: "Tech Specialist",
    category: "Education",
    slug: "/blog/decoding-tyre-markings",
    image: tyreMarkingsImage
  },
  {
    id: 7,
    title: "Mobile Tyre Fitting Cost Guide 2026: Hemel Hempstead & Hertfordshire Prices",
    excerpt: "Full breakdown of 2026 mobile tyre fitting prices across Hertfordshire — tyre tiers, puncture repairs, locking nut removal, batteries and how to save money.",
    date: "April 6, 2026",
    author: "Queensway Team",
    category: "Pricing",
    slug: "/blog/mobile-tyre-fitting-cost-guide",
    image: mobileFittingImage
  },
  {
    id: 8,
    title: "Pothole Damage Claims in Hertfordshire: Your 2026 Rights Guide",
    excerpt: "Hit a pothole on a Hertfordshire road? Step-by-step guide to documenting damage, claiming from the council and beating the Section 58 defence.",
    date: "April 6, 2026",
    author: "Queensway Technical Team",
    category: "Legal",
    slug: "/blog/pothole-damage-claims",
    image: emergencyImage
  },
  {
    id: 9,
    title: "Run-Flat Tyres Explained: Everything Hertfordshire Drivers Need to Know",
    excerpt: "BMW, MINI or Mercedes? Run-flat tyres explained — how they work, what they cost in 2026, why they usually can't be repaired, and when to switch.",
    date: "April 6, 2026",
    author: "Queensway Technical Team",
    category: "Education",
    slug: "/blog/run-flat-tyres-explained",
    image: tyreMarkingsImage
  }
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.queenswaymobiletyres.co.uk/blog#blog",
  "name": "Queensway Mobile Tyres Blog",
  "description": "Expert mobile tyre advice, safety tips and local driving guides from Queensway Mobile Tyres — Hemel Hempstead & Hertfordshire.",
  "url": "https://www.queenswaymobiletyres.co.uk/blog",
  "publisher": {
    "@type": "AutoRepair",
    "@id": "https://www.queenswaymobiletyres.co.uk/#business",
    "name": "Queensway Mobile Tyres"
  },
  "blogPost": blogPosts.map(p => ({
    "@type": "BlogPosting",
    "headline": p.title,
    "url": `https://www.queenswaymobiletyres.co.uk${p.slug}`,
    "datePublished": p.date,
    "author": {"@type": "Organization", "name": p.author}
  }))
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Tyre Advice & Safety Blog | Queensway Mobile Tyres Hemel Hempstead"
        description="Expert tyre safety tips, winter driving guides and mobile tyre advice for drivers in Hemel Hempstead, Watford, St Albans, Luton & across Hertfordshire."
        keywords="tyre blog hemel hempstead, hertfordshire tyre advice, mobile tyre tips, winter tyres UK, tyre safety blog, M1 M25 tyre guide"
        canonical="https://www.queenswaymobiletyres.co.uk/blog"
        schema={blogSchema}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-secondary border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            OUR <span className="text-primary">BLOG</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expert advice, local safety tips and industry news from our Hemel Hempstead mobile tyre team — serving Hertfordshire, Beds & Bucks within a 30-mile radius.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-secondary/30 rounded-lg overflow-hidden border border-white/10 hover:border-primary/50 transition-all group h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  <Link href={post.slug}>{post.title}</Link>
                </h2>

                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                <Link href={post.slug}>
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-white font-bold uppercase text-xs tracking-widest flex items-center gap-2 mt-auto">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter / CTA */}
      <div className="py-16 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">Need Professional Advice?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            If you're unsure about the condition of your tyres or need specific advice for your vehicle, our team is happy to help.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-black font-bold uppercase">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
