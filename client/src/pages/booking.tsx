import { SEO } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Loader2, CheckCircle, Car, MapPin, Wrench } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { handlePhoneClick } from "@/lib/usePhoneClick";

export default function Booking() {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking Request Received",
        description: "We have received your booking request. Our team will contact you shortly to confirm.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Book Online | Queensway Mobile Tyres"
        description="Book your mobile tyre fitting, puncture repair or battery replacement online. Fast, easy and convenient booking for London & Hertfordshire."
        keywords="book mobile tyres online, tyre fitting appointment, schedule tyre change"
      />
      <Navbar />

      <div className="pt-24 pb-12 bg-secondary border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            BOOK <span className="text-primary">ONLINE</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Schedule your mobile service in just a few clicks. We'll come to you at home or work.
          </p>
        </div>
      </div>

      <div className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Booking Form */}
          <div className="md:col-span-2 bg-secondary/30 p-6 md:p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Car className="text-primary w-6 h-6" /> Vehicle & Service Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="service">Service Required</Label>
                  <Select required>
                    <SelectTrigger className="bg-background/50 border-white/10">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tyre-fitting">Mobile Tyre Fitting</SelectItem>
                      <SelectItem value="puncture-repair">Puncture Repair</SelectItem>
                      <SelectItem value="battery">Battery Replacement</SelectItem>
                      <SelectItem value="balancing">Wheel Balancing</SelectItem>
                      <SelectItem value="locking-nut">Locking Nut Removal</SelectItem>
                      <SelectItem value="fuel">Emergency Fuel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reg">Vehicle Registration</Label>
                  <Input id="reg" placeholder="e.g. AB12 CDE" className="bg-background/50 border-white/10 uppercase" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tyre-size">Tyre Size (if known)</Label>
                <Input id="tyre-size" placeholder="e.g. 205/55 R16 91V" className="bg-background/50 border-white/10" />
                <p className="text-xs text-gray-500">You can find this on the sidewall of your current tyres.</p>
              </div>

              <div className="space-y-2">
                <Label>Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-background/50 border-white/10",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <MapPin className="text-primary w-6 h-6" /> Location & Contact
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="postcode">Postcode</Label>
                    <Input id="postcode" placeholder="e.g. WD17 1AA" className="bg-background/50 border-white/10 uppercase" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="07xxx xxxxxx" className="bg-background/50 border-white/10" required />
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <Label htmlFor="address">Full Address</Label>
                  <Input id="address" placeholder="House number and street name" className="bg-background/50 border-white/10" required />
                </div>

                <div className="space-y-2 mb-4">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Full Name" className="bg-background/50 border-white/10" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea id="notes" placeholder="Any special instructions or details about the location..." className="bg-background/50 border-white/10" />
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary text-black font-bold uppercase h-14 text-lg hover:bg-primary/90" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                  </>
                ) : (
                  "Request Booking"
                )}
              </Button>
              <p className="text-center text-xs text-gray-500">
                By submitting this form you agree to our terms of service. We will contact you to confirm the final price and time slot.
              </p>
            </form>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" /> Urgent Request?
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                For emergency call-outs or same-day service, it's faster to call us directly.
              </p>
              <a href="tel:07427515915" onClick={handlePhoneClick}>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-black font-bold">
                  Call 07427 515915
                </Button>
              </a>
              <div className="mt-4 pt-4 border-t border-primary/10">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center">Secondary line: 07988 018865</p>
              </div>
            </div>

            <div className="bg-secondary p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Why Book Online?</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Secure your preferred time slot in advance</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Get a detailed written quote before work begins</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Convenient - no need to wait on hold</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
