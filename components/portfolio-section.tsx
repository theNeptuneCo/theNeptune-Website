import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ExternalLink, Star, Smartphone, Globe } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-commerce Mobile App",
    description: "A feature-rich mobile shopping application with personalized recommendations, seamless payment processing, and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Firebase", "Payment Gateway", "Push Notifications"],
    rating: 5,
    category: "Mobile App",
    icon: <Smartphone className="h-4 w-4" />
  },
  {
    title: "Healthcare Management Platform",
    description: "A comprehensive web platform for healthcare providers to manage patient records, appointments, and billing with AI-powered insights.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "TypeScript", "AI Integration", "HIPAA Compliant"],
    rating: 5,
    category: "Web App",
    icon: <Globe className="h-4 w-4" />
  },
  {
    title: "Fitness Tracking Mobile App",
    description: "A cross-platform fitness app with workout tracking, progress analytics, and social features to keep users motivated and engaged.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Flutter", "HealthKit", "Social Features", "Analytics"],
    rating: 5,
    category: "Mobile App",
    icon: <Smartphone className="h-4 w-4" />
  }
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Our Work
          </div>
          <h2 className="heading-responsive font-bold tracking-tight">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-responsive text-muted-foreground max-w-3xl">
            Explore our latest mobile app and web development projects. Each project showcases our expertise in creating innovative digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group card-hover glass border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden relative"
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 flex items-center gap-1">
                  {project.icon}
                  {project.category}
                </Badge>
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium">{project.rating}.0</span>
              </div>

              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="relative">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="relative">
                <Button 
                  variant="ghost" 
                  className="gap-2 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300"
                >
                  View Case Study 
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-16 animate-slide-up">
          <Button variant="outline" size="lg" className="btn-secondary">
            <ExternalLink className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}