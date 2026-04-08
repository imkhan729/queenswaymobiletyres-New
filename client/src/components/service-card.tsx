import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  className?: string;
}

export function ServiceCard({ title, description, icon: Icon, image, className }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className={cn(
        "h-full border border-white/5 overflow-hidden group relative bg-secondary/50 flex flex-col transition-all duration-300",
        "hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] hover:border-primary/50",
        className
      )}>
        {image ? (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
            <div className="absolute top-4 left-4 w-10 h-10 rounded bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300 z-10">
              <Icon className="w-5 h-5 text-primary group-hover:text-black transition-colors duration-300" />
            </div>
          </div>
        ) : (
          <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
        )}
        
        <CardHeader className={cn("relative z-10 flex-grow-0 pb-2", !image && "pt-8")}>
          {!image && (
            <div className="w-12 h-12 rounded bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <Icon className="w-6 h-6 text-primary group-hover:text-black transition-colors duration-300" />
            </div>
          )}
          <CardTitle className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors uppercase tracking-wide">{title}</CardTitle>
        </CardHeader>
        
        <CardContent className="relative z-10 flex-grow">
          <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </Card>
    </motion.div>
  );
}