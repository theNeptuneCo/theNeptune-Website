import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Taming the Digital Tides.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We build Cutting Edge Software that Drives Innovation and Growth for Businesses. From web applications to Enterprise solutions, We Deliver Excellence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="px-8">
              <Link href="#contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link href="#portfolio">
                View Our Work
              </Link>
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}