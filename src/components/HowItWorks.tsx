import { PhoneCall, MessageSquare, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: PhoneCall,
    title: "Call Arrives",
    description: "Your VoiceSteer AI receptionist answers instantly—no hold time, no missed calls.",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversation",
    description: "AI understands your caller's needs using advanced voice recognition and intent detection.",
  },
  {
    icon: Calendar,
    title: "Smart Actions",
    description: "Books appointments, answers FAQs, routes calls, or takes messages—all without human intervention.",
  },
  {
    icon: CheckCircle,
    title: "Seamless Follow-Up",
    description: "Logs interactions, sends confirmations, and syncs with your CRM automatically.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="product" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From first ring to follow-up, VoiceSteer handles every customer interaction with intelligence and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-hero text-white rounded-full flex items-center justify-center font-poppins font-bold text-lg shadow-glow">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="hero"
            size="lg"
            className="rounded-full px-10 py-6 text-lg"
          >
            See VoiceSteer in Action
          </Button>
        </div>
      </div>
    </section>
  );
};
