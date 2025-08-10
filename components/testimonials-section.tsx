import Image from "next/image"
import { Quote, CheckCircle } from "lucide-react"

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

const testimonials = [
  {
    quote: "theNeptune delivered our project on time and exceeded our expectations. Their team was professional, responsive, and truly understood our business needs.",
    author: "Sarah Johnson",
    position: "CTO, FinTech Innovations",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    company: "FinTech Innovations"
  },
  {
    quote: "Working with theNeptune has been a game-changer for our company. The custom software they developed has streamlined our operations and significantly increased our productivity.",
    author: "Michael Chen",
    position: "CEO, Global Logistics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    company: "Global Logistics"
  },
  {
    quote: "The mobile app theNeptune created for us has received outstanding feedback from our users. Their attention to detail and focus on user experience is exceptional.",
    author: "Emily Rodriguez",
    position: "Product Manager, HealthPlus",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    company: "HealthPlus"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Testimonials
          </div>
          <h2 className="heading-responsive font-bold tracking-tight">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-responsive text-description max-w-2xl">
            Don't just take our word for it. Here's what our clients have to say about working with theNeptune.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group card-hover glass border-border/40 bg-card/60 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Quote className="h-6 w-6 text-primary" />
                </div>
              </div>

              <CardContent className="pt-8 pb-6">
                {/* Quote */}
                <blockquote className="text-description leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Company Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-xs font-medium text-muted-foreground">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  {testimonial.company}
                </div>
              </CardContent>

              <CardFooter className="flex items-center gap-4 pt-0">
                <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-enhanced">
                    {testimonial.position}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-muted-enhanced">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-sm text-muted-enhanced">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">5.0</div>
            <div className="text-sm text-muted-enhanced">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-sm text-muted-enhanced">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}