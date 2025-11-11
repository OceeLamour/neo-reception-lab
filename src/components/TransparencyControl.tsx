import { Shield, Eye, Lock, Settings, BarChart3, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Eye,
    title: "Full Visibility",
    description: "View every conversation, recording, and action—nothing hidden.",
  },
  {
    icon: Shield,
    title: "Data Privacy First",
    description: "Your customer data stays yours. GDPR, HIPAA & SOC 2 compliant.",
  },
  {
    icon: Settings,
    title: "Customizable Behavior",
    description: "Set rules, scripts, and escalation paths. Your AI, your guidelines.",
  },
  {
    icon: Lock,
    title: "Secure Infrastructure",
    description: "Bank-grade encryption for calls and data. Hosted on SOC 2 Type II certified servers.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track call volume, sentiment, resolution rates, and customer satisfaction instantly.",
  },
  {
    icon: FileCheck,
    title: "Audit-Ready Logs",
    description: "Comprehensive logs for compliance, training, and quality assurance purposes.",
  },
];

export const TransparencyControl = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Transparency & Control
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You're always in command. Monitor, customize, and trust your AI receptionist with complete confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-2 border-border bg-card hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Gradient accent line at top */}
                  <div className="w-full h-1 bg-gradient-primary rounded-full mb-6" />
                  
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 max-w-3xl mx-auto bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-card text-center">
          <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
            Built for Trust, Designed for You
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            AI that empowers your business with complete visibility and control.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold text-foreground">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <Lock className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold text-foreground">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <FileCheck className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold text-foreground">GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
