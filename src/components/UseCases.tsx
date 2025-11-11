import { useEffect, useRef, useState } from "react";
import healthcareWebP from "@/assets/VoiceSteer_Healthcare_Patient_Scheduling.webp";
import healthcarePng from "@/assets/VoiceSteer_Healthcare_Patient_Scheduling.png";
import homeServicesWebP from "@/assets/VoiceSteer_Home_Services_Field_Agent.webp";
import homeServicesPng from "@/assets/VoiceSteer_Home_Services_Field_Agent.png";
import professionalWebP from "@/assets/VoiceSteer_Professional_Services_Lead_Management.webp";
import professionalPng from "@/assets/VoiceSteer_Professional_Services_Lead_Management.png";
import retailWebP from "@/assets/VoiceSteer_Retail_Local_Instant_Response.webp";
import retailPng from "@/assets/VoiceSteer_Retail_Local_Instant_Response.png";

interface UseCase {
  industry: string;
  title: string;
  description: string;
  imageWebP: string;
  imagePng: string;
  alt: string;
}

const useCases: UseCase[] = [
  {
    industry: "Healthcare",
    title: "Patient scheduling made effortless",
    description: "Handle appointment requests, reminders, and patient inquiries while your staff focuses on care.",
    imageWebP: healthcareWebP,
    imagePng: healthcarePng,
    alt: "VoiceSteer assisting clinic with patient scheduling",
  },
  {
    industry: "Home Services",
    title: "From call to service in seconds",
    description: "Book jobs, manage technician schedules, and confirm appointments—even after hours.",
    imageWebP: homeServicesWebP,
    imagePng: homeServicesPng,
    alt: "VoiceSteer helping home services business schedule field appointments",
  },
  {
    industry: "Professional Services",
    title: "Qualify leads while you work",
    description: "Capture client details, answer FAQs, and schedule consultations automatically—without interrupting your flow.",
    imageWebP: professionalWebP,
    imagePng: professionalPng,
    alt: "VoiceSteer managing professional services lead qualification",
  },
  {
    industry: "Retail & Local",
    title: "Answer customer questions instantly",
    description: "Provide store hours, product availability, and directions while you serve in-store customers.",
    imageWebP: retailWebP,
    imagePng: retailPng,
    alt: "VoiceSteer providing instant responses to retail customer inquiries",
  },
];

export const UseCases = () => {
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(useCases.length).fill(false));
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      // If reduced motion is preferred, show all blocks immediately
      setIsVisible(new Array(useCases.length).fill(true));
      return;
    }

    const observers: IntersectionObserver[] = [];

    blockRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.25,
          rootMargin: "0px",
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [prefersReducedMotion]);

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
            VoiceSteer adapts to your industry—speaking your language, automating your workflow, and letting you focus on what matters most.
          </p>
        </div>

        {/* Use cases */}
        <div className="space-y-20 md:space-y-28">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              ref={(el) => (blockRefs.current[index] = el)}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Image side */}
              <div
                className={`${index % 2 === 1 ? "md:col-start-2" : ""} ${
                  prefersReducedMotion
                    ? "opacity-100"
                    : isVisible[index]
                    ? "animate-fadeInScale"
                    : "opacity-0"
                }`}
                style={
                  !prefersReducedMotion && !isVisible[index]
                    ? { transform: "scale(0.98)" }
                    : undefined
                }
              >
                <div className="relative rounded-xl overflow-hidden shadow-soft bg-muted aspect-video">
                  <picture>
                    <source srcSet={useCase.imageWebP} type="image/webp" />
                    <img
                      src={useCase.imagePng}
                      alt={useCase.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>

              {/* Content side */}
              <div
                className={`${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""} space-y-4`}
              >
                {/* Industry badge */}
                <div
                  className={`${
                    prefersReducedMotion
                      ? "opacity-100"
                      : isVisible[index]
                      ? "animate-fadeInUp"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={
                    !prefersReducedMotion && isVisible[index]
                      ? { animationDelay: "0ms" }
                      : undefined
                  }
                >
                  <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                    {useCase.industry}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-poppins text-2xl md:text-3xl font-bold text-foreground ${
                    prefersReducedMotion
                      ? "opacity-100"
                      : isVisible[index]
                      ? "animate-fadeInUp"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={
                    !prefersReducedMotion && isVisible[index]
                      ? { animationDelay: "60ms" }
                      : undefined
                  }
                >
                  {useCase.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-lg text-muted-foreground font-inter leading-relaxed ${
                    prefersReducedMotion
                      ? "opacity-100"
                      : isVisible[index]
                      ? "animate-fadeInUp"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={
                    !prefersReducedMotion && isVisible[index]
                      ? { animationDelay: "140ms" }
                      : undefined
                  }
                >
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
