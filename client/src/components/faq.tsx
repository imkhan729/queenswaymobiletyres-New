import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Is mobile tyre fitting actually cheaper?",
      answer: "Often, yes. Mobile tyre fitting is very cost-effective because we don't have the high overheads of a physical garage waiting room. Plus, you save money on fuel and the potential loss of earnings from taking time off work to visit a tyre shop."
    },
    {
      question: "How quickly can you get to me for an emergency tyre change?",
      answer: "For emergency call-outs within our 30-mile radius of Hemel Hempstead (covering Watford, St Albans, Luton, Aylesbury, Harrow and the M1/M25 corridor), we aim to be with you within 30-60 minutes. Our vans are strategically located across Hertfordshire to ensure the fastest possible response time."
    },
    {
      question: "Do I need to be with the car while you change the tyres?",
      answer: "You just need to be there to hand over the keys and the locking wheel nut key. After that, you can go back inside your home or office while we work. We'll simply let you know when the job is done!"
    },
    {
      question: "Can you repair a puncture at my house or work?",
      answer: "Absolutely. We come to you to repair punctures. Our technicians will inspect the tyre according to British Standard BSAU159. If it's safe to repair (e.g., in the central tread area), we'll fix it there and then."
    },
    {
      question: "What happens if you can't repair my tyre?",
      answer: "We always bring a replacement tyre on board just in case the puncture is unrepairable (for example, if it's on the sidewall or the tyre has been driven on flat). This ensures you're never left stranded."
    },
    {
      question: "Do you balance the wheels after fitting?",
      answer: "Yes, electronic wheel balancing is included as standard with every mobile tyre fitting. Our vans are equipped with the latest computerized balancers to ensure a smooth, vibration-free drive."
    },
    {
      question: "How much space do you need to change a tyre?",
      answer: "We need enough room to park our van near your vehicle and a little space around the car to work safely with our jacks. A standard driveway or car park space is usually sufficient."
    },
    {
      question: "Can you change tyres on a Sunday or Bank Holiday?",
      answer: "Yes, Queensway Mobile Tyres operates 24 hours a day, 7 days a week, including Sundays and Bank Holidays. Whether it's an emergency or a scheduled booking, we are available all year round."
    },
    {
      question: "Which areas do you cover?",
      answer: "Our base is in Hemel Hempstead, Hertfordshire. We cover a 30-mile radius, including Watford, St Albans, Luton, Aylesbury, Harrow, Slough, High Wycombe, Hatfield, Welwyn Garden City, Stevenage, Milton Keynes and the M1, M25 & M40 corridors."
    },
    {
      question: "Do you charge a call-out fee?",
      answer: "No. Queensway Mobile Tyres does not charge a separate call-out fee within our standard 30-mile service area around Hemel Hempstead. The price you're quoted is the price you pay — no hidden charges."
    }
  ];

  // FAQPage JSON-LD schema for Google rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden" aria-labelledby="faq-heading">
      {/* FAQPage JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Have Questions?</span>
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-heading font-bold text-white mt-2">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-gray-400 mt-4">Everything you need to know about our mobile tyre services.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 rounded-lg bg-secondary/30 px-6">
              <AccordionTrigger className="text-lg font-bold text-white hover:text-primary py-6 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
