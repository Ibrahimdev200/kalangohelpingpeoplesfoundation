import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* About */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Kalango Helping People's Foundation"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg">Kalango Helping</h3>
                <p className="text-xs sm:text-sm text-background/70">People's Foundation</p>
              </div>
            </div>
            <p className="text-background/80 text-xs sm:text-sm leading-relaxed">
              Empowering communities, supporting the less privileged, and building 
              hope for a brighter future. Together, we can make a difference.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Programs", path: "/programs" },
                { name: "Events & Gallery", path: "/events" },
                { name: "Become a Volunteer", path: "/volunteer" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-accent transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-background/80 text-xs sm:text-sm">
                  Nembe, Bayelsa State, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" />
                <a href="tel:+2347070351737" className="text-background/80 hover:text-accent text-xs sm:text-sm">
                  +234 707 035 1737
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" />
                <a href="https://wa.me/16143778612" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-accent text-xs sm:text-sm">
                  WhatsApp: +1 (614) 377-8612
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
                <a href="mailto:info@kalangohelpingpeoplesfoundation.com" className="text-background/80 hover:text-accent text-xs sm:text-sm break-all">
                  info@kalangohelpingpeoplesfoundation.com
                </a>
              </li>
            </ul>
          </div>

          {/* Support Us */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Support Our Mission</h4>
            <p className="text-background/80 text-xs sm:text-sm mb-3 sm:mb-4">
              Your donation helps us continue our work in empowering 
              communities and supporting those in need.
            </p>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm sm:text-base"
            >
              <Heart className="h-4 w-4" />
              Donate Now
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-background/60 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Kalango Helping People's Foundation. All rights reserved.
            </p>
            <p className="text-background/60 text-xs sm:text-sm flex items-center gap-1">
              Made with <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-destructive" /> for the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
