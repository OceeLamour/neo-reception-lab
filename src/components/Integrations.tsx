import { Card } from "@/components/ui/card";
import { Zap, Calendar, ShoppingCart, MessageSquare, Database, Webhook } from "lucide-react";

const integrations = [
  {
    icon: Calendar,
    name: "Google Calendar",
    description: "Sync appointments and schedules automatically",
    category: "Scheduling",
  },
  {
    icon: ShoppingCart,
    name: "Shopify",
    description: "Connect your e-commerce store for order updates",
    category: "E-commerce",
  },
  {
    icon: MessageSquare,
    name: "Twilio",
    description: "Power phone calls, SMS, and WhatsApp messaging",
    category: "Communications",
  },
  {
    icon: Database,
    name: "CRM Systems",
    description: "Integrate with Salesforce, HubSpot, and more",
    category: "Sales",
  },
  {
    icon: Zap,
    name: "Zapier",
    description: "Connect to 5,000+ apps with no code",
    category: "Automation",
  },
  {
    icon: Webhook,
    name: "Custom APIs",
    description: "Build custom integrations with our REST API",
    category: "Developer",
  },
];

export const Integrations = () => {
  return (
    <section id="integrations" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Seamless
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Integrations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            VoiceSteer works with the tools you already use. Connect your favorite apps in minutes, no technical expertise required.
          </p>
        </div>

        {/* Integration grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal to-green">
                  <integration.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-poppins font-semibold text-foreground">
                      {integration.name}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {integration.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-inter">
                    {integration.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see your tool? We're constantly adding new integrations.
          </p>
          <a
            href="#support"
            className="text-teal hover:text-green font-semibold transition-colors"
          >
            Request an integration →
          </a>
        </div>
      </div>
    </section>
  );
};
