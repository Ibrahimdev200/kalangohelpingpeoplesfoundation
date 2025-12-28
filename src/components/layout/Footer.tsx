import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Kalango Helping People's Foundation"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-display font-bold text-lg">Kalango Helping</h3>
                <p className="text-sm text-background/70">People's Foundation</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Empowering communities, supporting the less privileged, and building hope for a brighter future. Together,
              we can make a difference.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Programs", path: "/programs" },
                { name: "Events & Gallery", path: "/events" },
                { name: "Become a Volunteer", path: "/volunteer" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-background/80 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-background/80 text-sm">Nembe, Bayelsa State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+2347070351737" className="text-background/80 hover:text-accent text-sm">
                  +2347070351737
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:info@kalangohelpingpeoplesfoundation.com"
                  className="text-background/80 hover:text-accent text-sm"
                >
                  info@kalangofoundation.org
                </a>
              </li>
            </ul>
          </div>

          {/* Support Us */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Support Our Mission</h4>
            <p className="text-background/80 text-sm mb-4">
              Your donation helps us continue our work in empowering communities and supporting those in need.
            </p>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              <Heart className="h-4 w-4" />
              Donate Now
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Kalango Helping People's Foundation. All rights reserved.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-destructive" /> for the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
