"use client";

import { Github, Mail } from "lucide-react";

const footerLinks = {
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/Matheus-The-one" },
  { name: "Email", icon: Mail, href: "mailto:contact@g3oapi.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="font-bold text-2xl">g3o API</div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              AI APIs live on RapidAPI with 20,000+ calls per endpoint and 100+
              paying customers. Currently in full development mode building the
              future of AI integration.
            </p>

            {/* Social links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 g3o API. All rights reserved.
          </p>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Built with ❤️ for developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
