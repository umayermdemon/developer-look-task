import { Facebook, Globe, Instagram } from "lucide-react";

const footerLinks = [
  {
    title: "Support",
    links: [
      "Help Center",
      "Get help with a safety issue",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
      "Report neighborhood concern",
    ],
  },
  {
    title: "Hosting",
    links: [
      "Airbnb your home",
      "Airbnb your experience",
      "Airbnb your service",
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
      "Hosting responsibly",
      "Airbnb-friendly apartments",
      "Join a free Hosting class",
      "Find a co-host",
    ],
  },
  {
    title: "Airbnb",
    links: [
      "2025 Summer Release",
      "Newsroom",
      "Careers",
      "Investors",
      "Gift cards",
      "Airbnb.org emergency stays",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t pt-8 pb-4 text-black md:mx-8">
      {/* Footer Links */}
      <div className="mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <div className="font-semibold mb-3">{section.title}</div>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between border-t pt-4 text-xs text-gray-600 gap-2">
        <div className="flex flex-row items-center gap-2 md:gap-4">
          <span>© 2025 Airbnb, Inc.</span>
          <span className="hidden md:inline">·</span>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Your Privacy Choices
          </a>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <button className="flex items-center gap-1 hover:underline">
            <Globe className="w-4 h-4" />
            English (US)
          </button>
          <span>$ USD</span>
          <a href="#" aria-label="Facebook">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
