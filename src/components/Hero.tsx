import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Gradient wave background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-primary opacity-20 blur-3xl animate-wave" />
        <div className="absolute bottom-0 right-0 w-1/2 h-64 bg-gradient-cta opacity-10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground">
              <span className="flex h-2 w-2 rounded-full bg-green animate-pulse-glow" />
              No-code AI receptionist for everyone
            </div>

            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Business,
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Always Listening
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-inter leading-relaxed max-w-xl">
              VoiceSteer transforms every call into an opportunity. Handle inquiries, schedule appointments, 
              and delight customers 24/7 with intelligent AI that truly understands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-teal" />
                <span className="text-sm text-muted-foreground">500K+ calls handled</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green" />
                <span className="text-sm text-muted-foreground">98% booking rate</span>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-cta opacity-20 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="VoiceSteer AI visualization with flowing soundwaves" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};