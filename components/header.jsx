import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  await checkUser();

  return (
    <header className="fixed top-0 w-full border-b border-primary/10 bg-background/40 backdrop-blur-xl z-50 supports-[backdrop-filter]:bg-background/40">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group relative">
          <div className="absolute -inset-2 bg-primary/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          <svg 
            width="180" 
            height="50" 
            viewBox="0 0 200 60" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="relative transition-transform group-hover:scale-105"
          >
            {/* Pulse Line Icon */}
            <g id="pulse-icon">
              {/* Background Circle */}
              <circle cx="25" cy="30" r="22" fill="url(#gradient1)" opacity="0.15"/>
              
              {/* Pulse Line */}
              <path 
                d="M 8 30 L 15 30 L 18 20 L 22 40 L 25 25 L 28 35 L 32 30 L 42 30" 
                stroke="url(#gradient2)" 
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
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#5EEAD4', stopOpacity: 1 }} />
              </linearGradient>
              
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#5EEAD4', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          <SignedIn>
            {/* Industry Insights Button */}
            <Link href="/dashboard">
              <Button
                variant="ghost"
                className="hidden md:inline-flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <LayoutDashboard className="h-4 w-4" />
                Industry Insights
              </Button>
              <Button 
                variant="ghost" 
                className="md:hidden w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary transition-all"
              >
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            {/* Growth Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 group">
                  <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                  <span className="hidden md:block font-semibold">Growth Tools</span>
                  <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-56 bg-card/95 backdrop-blur-xl border-primary/20 shadow-2xl"
              >
                <DropdownMenuItem asChild className="cursor-pointer group">
                  <Link href="/resume" className="flex items-center gap-3 p-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Build Resume</div>
                      <div className="text-xs text-muted-foreground">ATS-optimized templates</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild className="cursor-pointer group">
                  <Link href="/ai-cover-letter" className="flex items-center gap-3 p-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <PenBox className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Cover Letter</div>
                      <div className="text-xs text-muted-foreground">AI-powered writing</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild className="cursor-pointer group">
                  <Link href="/interview" className="flex items-center gap-3 p-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Interview Prep</div>
                      <div className="text-xs text-muted-foreground">Practice & feedback</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity" />
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 ring-2 ring-primary/20 hover:ring-primary/40 transition-all",
                    userButtonPopoverCard: "shadow-2xl bg-card/95 backdrop-blur-xl border-primary/20",
                    userPreviewMainIdentifier: "font-semibold",
                    userButtonPopoverActionButton: "hover:bg-primary/10",
                  },
                }}
                afterSignOutUrl="/"
              />
            </div>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
