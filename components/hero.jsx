"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full pt-32 md:pt-40 lg:pt-48 pb-16 overflow-hidden">
      {/* Subtle Light Rays - Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diagonal Light Rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent transform -skew-x-12" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-primary/15 via-primary/3 to-transparent transform -skew-x-12" 
          style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-primary/15 via-primary/3 to-transparent transform skew-x-12" 
          style={{ animationDelay: '2s' }} />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent transform skew-x-12" />
        
        {/* Floating Orbs - Smaller and More Subtle */}
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/8 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
            transition: 'transform 0.5s ease-out',
            animationDelay: '2s'
          }}
        />
        
        {/* Small Floating Particles */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-primary/35 rounded-full animate-float" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-float" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-8 text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            style={{
              animation: 'fadeInDown 0.6s ease-out'
            }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Career Advancement</span>
          </div>

          {/* Main Heading */}
          <div 
            className="space-y-4"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.2s backwards'
            }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              <span className="gradient-title animate-gradient">
                Your AI Career Coach
              </span>
              <br />
              <span className="text-foreground/90">
                for Professional Success
              </span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Advance your career with personalized guidance, AI-powered interview prep, 
              and professional tools designed for job success in the modern world.
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
            style={{
              animation: 'fadeInUp 1s ease-out 0.4s backwards'
            }}
          >
            <Link href="/dashboard">
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold glow group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div 
            className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm text-muted-foreground"
            style={{
              animation: 'fadeIn 1.2s ease-out 0.6s backwards'
            }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-primary"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="font-medium">10,000+ professionals</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span>⭐ 4.9/5 rating</span>
            <div className="h-4 w-px bg-border" />
            <span>🚀 95% success rate</span>
          </div>

          {/* Hero Image - Replaced with Visual Cards */}
          <div 
            className="mt-12 md:mt-16 relative"
            style={{
              animation: 'fadeInUp 1s ease-out 0.8s backwards'
            }}
          >
            {/* Feature Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Card 1 */}
              <div className="group relative bg-card/50 backdrop-blur-sm border-2 border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">AI Resume Builder</h3>
                  <p className="text-sm text-muted-foreground">ATS-optimized resumes tailored to your industry</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-card/50 backdrop-blur-sm border-2 border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Interview Practice</h3>
                  <p className="text-sm text-muted-foreground">Real-time feedback on your interview responses</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-card/50 backdrop-blur-sm border-2 border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Career Analytics</h3>
                  <p className="text-sm text-muted-foreground">Track your progress and skill development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
