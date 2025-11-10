import { Bot, Clock, CalendarCheck, MessageSquare, TrendingUp, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import featureAutomation from "@/assets/feature-automation.png";
import feature247 from "@/assets/feature-247.png";
import featureScheduling from "@/assets/feature-scheduling.png";

const features = [
  {
    icon: Bot,
    title: "Intelligent Conversations",
    description: "AI that truly understands context, sentiment, and intent to provide natural, human-like interactions.",
    gradient: "from-teal to-aqua",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Never miss a call again. Your AI receptionist works 24/7, handling inquiries whenever customers need you.",
    gradient: "from-green to-aqua",
  },
  {
    icon: CalendarCheck,
    title: "Smart Scheduling",
    description: "Automatically book appointments, send reminders, and manage your calendar without lifting a finger.",
    gradient: "from-violet to-aqua",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Support",
    description: "Handle phone calls, texts, and chats from a single unified AI platform.",
    gradient: "from-aqua to-green",
  },
  {
    icon: TrendingUp,
    title: "Actionable Insights",
    description: "Understand your customers better with detailed call analytics and sentiment tracking.",
    gradient: "from-teal to-violet",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance standards keep your customer data safe and private.",
    gradient: "from-green to-violet",
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Delight Every Caller
            </span>
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            Powerful features designed for service businesses who value every customer interaction
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Feature highlights with images */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-background shadow-card p-4">
              <img src={featureAutomation} alt="Automation icon" className="w-full h-full object-contain" />
            </div>
            <h4 className="font-poppins font-semibold text-foreground">Instant Setup</h4>
            <p className="text-sm text-muted-foreground">Live in 5 minutes, no coding required</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-background shadow-card p-4">
              <img src={feature247} alt="24/7 availability icon" className="w-full h-full object-contain" />
            </div>
            <h4 className="font-poppins font-semibold text-foreground">Zero Downtime</h4>
            <p className="text-sm text-muted-foreground">Always on, always ready to help</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-background shadow-card p-4">
              <img src={featureScheduling} alt="Scheduling icon" className="w-full h-full object-contain" />
            </div>
            <h4 className="font-poppins font-semibold text-foreground">Full Integration</h4>
            <p className="text-sm text-muted-foreground">Works with your existing tools</p>
          </div>
        </div>
      </div>
    </section>
  );
};