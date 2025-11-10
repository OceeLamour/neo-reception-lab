import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
        "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300",
        isScrolled
          ? "bg-[#061C1E]/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">V</span>
          </div>
          <span
            className={cn(
              "font-poppins font-semibold text-xl transition-colors",
              isScrolled ? "text-white" : "text-white"
            )}
          >
            VoiceSteer
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-poppins font-semibold text-base relative group transition-colors",
                isScrolled ? "text-white" : "text-white",
                "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green after:transition-all after:duration-300 hover:after:w-full hover:text-green"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Button
            className="rounded-full px-8 py-2 bg-green text-white hover:bg-green/90 hover:scale-105 shadow-glow font-poppins font-semibold"
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
              className={cn(
                "transition-colors",
                isScrolled ? "text-white hover:bg-white/10" : "text-white hover:bg-white/10"
              )}
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
                  className="font-poppins font-semibold text-lg text-foreground hover:text-green transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="rounded-full w-full mt-4 bg-green text-white hover:bg-green/90 shadow-glow font-poppins font-semibold py-6"
                onClick={() => setIsOpen(false)}
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
