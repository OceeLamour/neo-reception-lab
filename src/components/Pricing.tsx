import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  badge?: string;
  features: string[];
  cta: string;
  variant: "outline" | "hero";
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Test VoiceSteer with real customers — no credit card needed",
    features: [
      "50 conversations per month",
      "Web Chat only",
      "Basic scheduling",
      "Email support",
      "15-day conversation history",
      "Human handoff included",
    ],
    cta: "Start Free Now",
    variant: "outline" as const,
  },
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Small businesses ready to scale",
    features: [
      "500 conversations per month",
      "Web Chat + SMS",
      "Basic scheduling",
      "Email support",
      "30-day conversation history",
      "Human handoff included",
      "Knowledge base",
    ],
    cta: "Start Free Trial",
    variant: "outline" as const,
  },
  {
    name: "Business",
    price: "$149",
    period: "/month",
    description: "The plan 85% of service businesses choose",
    badge: "All-in-One",
    features: [
      "2,000 conversations per month",
      "Phone + WhatsApp + SMS + Web",
      "Advanced scheduling & CRM",
      "Priority support",
      "90-day conversation history",
      "Custom voice & personality",
      "Analytics dashboard",
      "Human handoff included",
      "Appointment booking",
      "Shopify, Square, Calendar integrations",
    ],
    cta: "Start Free Trial",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$499",
    period: "/month",
    description: "Advanced features and dedicated support for large operations",
    features: [
      "10,000+ conversations per month",
      "All Channels + Custom Integrations",
      "Unlimited agents",
      "Dedicated account manager",
      "Unlimited conversation history",
      "White-label options",
      "Custom AI training",
      "99.9% SLA guarantee",
      "Human handoff included",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-white/90 font-inter">
            Start free for 14 days. No credit card required. Cancel anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 bg-background/95 backdrop-blur-sm border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow ${
                plan.popular ? "border-green md:-translate-y-4 shadow-soft" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-cta rounded-full text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}
              {plan.badge && !plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-sm font-semibold text-white">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-poppins text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <Button 
                  variant={plan.variant} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3 pt-6 border-t border-border">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust message */}
        <p className="text-center mt-12 text-white/80 font-inter">
          All plans include our core AI technology and regular updates
        </p>
      </div>
    </section>
  );
};