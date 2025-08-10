import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Smartphone, Globe, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/8 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">

          {/* Main Content */}
          <div className="space-y-8 max-w-4xl animate-slide-up">

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="hero-heading">
                Taming the {" "}
                <span className="gradient-text">Digital Tides</span>
              </h1>
              <p className="text-xl md:text-1xl text-description max-w-3xl mx-auto leading-relaxed">
                We specialize in mobile app development, web development, and Generative AI solutions. 
                Creating innovative digital experiences that drive business growth.
              </p>
            </div>

            {/* Services Preview */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20">
                <Smartphone className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium font-sans">Mobile Apps</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium font-sans">Web Development</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium font-sans">Generative AI</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary px-8 py-6 text-lg">
                <Link href="#contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium">
                <Link href="#portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce pt-8">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}