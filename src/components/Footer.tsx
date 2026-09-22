import { Link } from "react-router-dom";
import { navLinks, siteConfig } from "../data/siteConfig";
import { contactInfo, socialLinks } from "../data/contactInfo";
import logo from "../assets/mavuno-logo.png";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-harvest-100">
      <div className="container-page py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Mavuno Maize Flour" className="h-14 w-auto object-contain bg-harvest-50 p-2" />
          <p className="mt-4 text-sm leading-relaxed text-harvest-100/80 max-w-xs">
            {siteConfig.productName} — {siteConfig.slogan}
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-maize-400">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-maize-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-maize-400">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-harvest-100/80">
            <li>
              Phone:{" "}
              <a href={`tel:${contactInfo.phoneTel}`} className="hover:text-maize-400 transition-colors">
                {contactInfo.phone}
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-maize-400 transition-colors"
              >
                {contactInfo.whatsapp}
              </a>
            </li>
            <li>
              General:{" "}
              <a href={`mailto:${contactInfo.email.general}`} className="hover:text-maize-400 transition-colors">
                {contactInfo.email.general}
              </a>
            </li>
            <li>
              Sales:{" "}
              <a href={`mailto:${contactInfo.email.sales}`} className="hover:text-maize-400 transition-colors">
                {contactInfo.email.sales}
              </a>
            </li>
            <li>Address: {contactInfo.physicalAddress}</li>
            <li>{contactInfo.postalAddress}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-maize-400">Follow Mavuno</h3>
          <ul className="mt-4 space-y-2 text-sm text-harvest-100/80">
            {socialLinks.map((s) => (
              <li key={s.platform}>
                <a
                  href={s.url}
                  className="hover:text-maize-400 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-harvest-50/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-harvest-100/70">
          <p>© {siteConfig.currentYear} Mavuno. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-maize-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-maize-400">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
