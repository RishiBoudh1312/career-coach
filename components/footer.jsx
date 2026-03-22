import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-muted/50 to-background border-t border-primary/10">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <svg 
                width="160" 
                height="48" 
                viewBox="0 0 200 60" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-auto"
              >
                {/* Pulse Line Icon */}
                <g id="pulse-icon">
                  {/* Background Circle */}
                  <circle cx="25" cy="30" r="22" fill="url(#footerGradient1)" opacity="0.15"/>
                  
                  {/* Pulse Line */}
                  <path 
                    d="M 8 30 L 15 30 L 18 20 L 22 40 L 25 25 L 28 35 L 32 30 L 42 30" 
                    stroke="url(#footerGradient2)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="none"
                  />
                  
                  {/* Dot at end of pulse */}
                  <circle cx="42" cy="30" r="2.5" fill="#2DD4BF"/>
                </g>
                
                {/* Text: CareerPulse */}
                <text 
                  x="55" 
                  y="38" 
                  fontFamily="'Outfit', sans-serif" 
                  fontSize="24" 
                  fontWeight="700" 
                  fill="#E5E7EB"
                >
                  Career<tspan fill="#2DD4BF">Pulse</tspan>
                </text>
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="footerGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#5EEAD4', stopOpacity: 1 }} />
                  </linearGradient>
                  
                  <linearGradient id="footerGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#5EEAD4', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Empowering professionals with AI-driven career guidance and tools for success in the modern workplace.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {[
                { label: "Features", href: "/#features" },
                { label: "How it Works", href: "/#how-it-works" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "Pricing", href: "/pricing" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                { label: "Documentation", href: "/docs" },
                { label: "Blog", href: "/blog" },
                { label: "Support", href: "/support" },
                { label: "FAQ", href: "/#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} CareerPulse. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
