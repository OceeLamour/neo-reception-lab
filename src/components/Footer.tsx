import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#061C1E] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-poppins text-2xl font-bold bg-gradient-to-r from-[#0099A8] to-[#4BD37B] bg-clip-text text-transparent">
              VoiceSteer
            </h3>
            <p className="text-sm text-white/70">
              AI that listens, understands, and guides — simply.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-poppins font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#product" className="hover:text-[#4BD37B] transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-[#4BD37B] transition-colors">Pricing</a></li>
              <li><a href="#integrations" className="hover:text-[#4BD37B] transition-colors">Integrations</a></li>
              <li><a href="#docs" className="hover:text-[#4BD37B] transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-poppins font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-[#4BD37B] transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-[#4BD37B] transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-[#4BD37B] transition-colors">Blog</a></li>
              <li><a href="#support" className="hover:text-[#4BD37B] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-poppins font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#privacy" className="hover:text-[#4BD37B] transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-[#4BD37B] transition-colors">Terms of Service</a></li>
              <li><a href="#gdpr" className="hover:text-[#4BD37B] transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2025 VoiceSteer. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-[#4BD37B] transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-[#4BD37B] transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-[#4BD37B] transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-[#4BD37B] transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};