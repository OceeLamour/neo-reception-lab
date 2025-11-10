import { Stethoscope, Wrench, Briefcase, Store } from "lucide-react";

const useCases = [
  {
    icon: Stethoscope,
    industry: "Healthcare",
    title: "Patient scheduling made effortless",
    description: "Handle appointment requests, reminders, and basic patient inquiries while your staff focuses on care.",
    color: "teal",
  },
  {
    icon: Wrench,
    industry: "Home Services",
    title: "From call to service in seconds",
    description: "Book jobs, provide quotes, and manage technician schedules automatically, even after hours.",
    color: "green",
  },
  {
    icon: Briefcase,
    industry: "Professional Services",
    title: "Qualify leads while you work",
    description: "Capture client details, answer FAQs, and schedule consultations without interrupting your flow.",
    color: "violet",
  },
  {
    icon: Store,
    industry: "Retail & Local",
    title: "Answer customer questions instantly",
    description: "Provide store hours, product availability, and directions while you serve in-store customers.",
    color: "aqua",
  },
];

export const UseCases = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Built for
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Service Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            VoiceSteer adapts to your industry, speaking your language and understanding your workflow
          </p>
        </div>

        {/* Use cases */}
        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Icon side */}
              <div className="flex-1 flex justify-center">
                <div className={`relative w-32 h-32 rounded-3xl bg-${useCase.color} bg-opacity-10 flex items-center justify-center`}>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent to-background/50" />
                  <useCase.icon className={`h-16 w-16 text-${useCase.color} relative z-10`} />
                </div>
              </div>

              {/* Content side */}
              <div className="flex-1 space-y-4">
                <div className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                  {useCase.industry}
                </div>
                <h3 className="font-poppins text-2xl md:text-3xl font-bold text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider with gradient */}
        <div className="mt-20 h-1 w-full bg-gradient-accent rounded-full opacity-30" />
      </div>
    </section>
  );
};