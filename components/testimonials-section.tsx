import Image from "next/image"
import { Quote } from "lucide-react"

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
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Working with theNeptune has been a game-changer for our company. The custom software they developed has streamlined our operations and significantly increased our productivity.",
    author: "Michael Chen",
    position: "CEO, Global Logistics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The mobile app theNeptune created for us has received outstanding feedback from our users. Their attention to detail and focus on user experience is exceptional.",
    author: "Emily Rodriguez",
    position: "Product Manager, HealthPlus",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Don't just take our word for it. Here's what our clients have to say about working with theNeptune.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border/40 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 hover:border-primary/50 hover:shadow-lg"
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}