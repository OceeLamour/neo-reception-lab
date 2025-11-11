import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Code, FileText, HelpCircle, Rocket } from "lucide-react";

const resources = [
  {
    icon: Rocket,
    title: "Quick Start Guide",
    description: "Get your AI receptionist up and running in under 5 minutes",
    link: "/documentation#setup",
    badge: "Popular",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Complete guides for setup, configuration, and customization",
    link: "/documentation",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video walkthroughs for all features",
    link: "/documentation#support",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Technical documentation for developers and integrations",
    link: "/documentation#support",
  },
  {
    icon: FileText,
    title: "Best Practices",
    description: "Learn how top businesses optimize their AI receptionists",
    link: "/documentation#support",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Answers to the most common questions",
    link: "/documentation#troubleshooting",
  },
];

export const Docs = () => {
  return (
    <section id="docs" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Documentation &
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            Everything you need to master VoiceSteer. From quick start guides to advanced customization.
          </p>
        </div>

        {/* Resource grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border group cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-teal to-green group-hover:scale-110 transition-transform">
                    <resource.icon className="h-6 w-6 text-white" />
                  </div>
                  {resource.badge && (
                    <span className="text-xs font-semibold text-green bg-green/10 px-2 py-1 rounded-full">
                      {resource.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-poppins text-lg font-semibold mb-2 text-foreground">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground font-inter mb-4 flex-1">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  className="text-sm font-semibold text-teal hover:text-green transition-colors inline-flex items-center gap-1 group"
                >
                  Read more
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center max-w-2xl mx-auto pt-8 border-t border-border">
          <h3 className="font-poppins text-2xl font-bold mb-4 text-foreground">
            Need More Help?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help you succeed. Contact us for personalized assistance, documentation, and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/documentation#support">
              <Button variant="hero" size="lg">
                Contact Support
              </Button>
            </a>
            <a href="/documentation">
              <Button variant="outline" size="lg">
                View Full Documentation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
