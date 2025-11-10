import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-poppins text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              VoiceSteer
            </h3>
            <p className="text-sm text-background/70">
              AI that listens, understands, and guides — simply.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#integrations" className="hover:text-background transition-colors">Integrations</a></li>
              <li><a href="#security" className="hover:text-background transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#privacy" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-background transition-colors">Terms of Service</a></li>
              <li><a href="#gdpr" className="hover:text-background transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © 2025 VoiceSteer. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex gap-4">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};