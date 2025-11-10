import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integrations", href: "#integrations" },
  { label: "Docs", href: "#docs" },
  { label: "Support", href: "#support" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "h-20 lg:h-[88px]",
        isScrolled
          ? "bg-[#061C1E]/90 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-6 lg:px-8">
        {/* Logo with Icon + Wordmark */}
        <a href="#home" className="flex items-center gap-3 group" aria-label="VoiceSteer Home">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0099A8] to-[#4BD37B] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-xl">V</span>
          </div>
          <span
            className={cn(
              "font-poppins font-semibold text-xl lg:text-2xl transition-colors duration-300",
              "text-white"
            )}
          >
            VoiceSteer
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-poppins font-semibold text-base lg:text-[17px] relative group transition-all duration-200",
                "text-white hover:text-[#4BD37B]",
                "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5",
                "after:bg-[#0099A8] after:transition-all after:duration-300 after:ease-out",
                "hover:after:w-full focus:after:w-full",
                "focus:outline-none focus:text-[#4BD37B]"
              )}
              tabIndex={0}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Button
            className={cn(
              "rounded-full px-8 py-2.5 bg-[#4BD37B] text-white font-poppins font-semibold text-base",
              "hover:bg-[#3BC26B] hover:scale-105 hover:shadow-[0_8px_20px_rgba(75,211,123,0.4)]",
              "active:scale-100 transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-[#4BD37B] focus:ring-offset-2 focus:ring-offset-[#061C1E]",
              "shadow-[0_4px_14px_rgba(75,211,123,0.3)]"
            )}
            aria-label="Start free trial"
          >
            Start Free
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:max-w-sm bg-white border-l-0"
          >
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-poppins font-semibold text-lg text-foreground hover:text-[#0099A8] transition-colors py-2 focus:outline-none focus:text-[#0099A8]"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className={cn(
                  "rounded-full w-full mt-6 bg-[#4BD37B] text-white font-poppins font-semibold py-6",
                  "hover:bg-[#3BC26B] hover:shadow-[0_6px_16px_rgba(75,211,123,0.4)]",
                  "active:scale-98 transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-[#4BD37B] focus:ring-offset-2"
                )}
                onClick={() => setIsOpen(false)}
                aria-label="Start free trial"
              >
                Start Free
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
