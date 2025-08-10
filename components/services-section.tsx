import {
  Smartphone,
  Globe,
  Sparkles,
  ArrowRight
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { cn } from "@/lib/utils"

const services = [
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
    features: ["iOS & Android", "React Native", "Flutter", "Performance Optimized"]
  },
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: "Web Development",
    description: "Responsive, high-performance websites and web applications built with cutting-edge technologies and modern frameworks.",
    features: ["Responsive Design", "React/Next.js", "SEO Optimized", "Fast Loading"]
  },
  {
    icon: <Sparkles className="h-12 w-12 text-primary" />,
    title: "Generative AI Solutions",
    description: "Custom AI solutions that leverage the latest in machine learning and generative technologies to enhance your business.",
    features: ["Custom AI Models", "ChatGPT Integration", "Image Generation", "Process Automation"]
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium font-sans">
            Our Services
          </div>
          <h2 className="section-heading">
            What We{" "}
            <span className="gradient-text">Specialize In</span>
          </h2>
          <p className="text-responsive text-description max-w-2xl">
            We focus on three core areas: mobile app development, web development, and Generative AI solutions. 
            Each service is designed to deliver exceptional results and drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                "group card-hover glass border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden relative",
                "lg:col-span-1"
              )}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative text-center">
                <div className="mb-6 p-4 rounded-2xl bg-primary/10 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300 font-heading">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative space-y-6 text-center">
                <CardDescription className="text-base leading-relaxed text-description">
                  {service.description}
                </CardDescription>
                
                {/* Features list */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center gap-2 text-sm text-muted-enhanced font-sans">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Learn more link */}
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 text-primary text-sm font-medium font-sans group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium font-sans">
            Ready to build something amazing?
          </div>
          <p className="mt-4 text-muted-enhanced">
            Let's discuss your project and create the perfect solution for your business.
          </p>
        </div>
      </div>
    </section>
  )
}