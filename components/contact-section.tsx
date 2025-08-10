"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send, Clock, Smartphone, Globe, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      })
    }, 1500)
  }

  const services = [
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Mobile App Development",
      description: "iOS, Android, and cross-platform solutions"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Web Development",
      description: "Responsive websites and web applications"
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Generative AI",
      description: "Custom AI solutions and integrations"
    }
  ]

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Our Location",
      details: ["123 Tech Boulevard", "Innovation District", "San Francisco, CA 94105"]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      details: ["info@theneptune.co", "support@theneptune.co"]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9AM - 6PM", "Sat: 10AM - 4PM"]
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="heading-responsive font-bold tracking-tight">
            Let&apos;s Build{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-responsive text-description max-w-3xl">
            Ready to start your mobile app or web development project? Let&apos;s discuss how we can bring your ideas to life with our expertise in mobile apps, web development, and AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Services</h3>
              <p className="text-description">
                Choose from our core services or let us know about your specific requirements.
              </p>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="group p-4 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-muted-enhanced text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group p-4 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-enhanced text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
                      <div className="animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4 text-center">
                  <h3 className="text-2xl font-bold">Start Your Project</h3>
                  <p className="text-description">
                    Tell us about your project and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 border-1 focus:border-primary transition-colors duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 focus:border-primary transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Input
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 border-2 focus:border-primary transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="flex h-12 w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="web-development">Web Development</option>
                  <option value="generative-ai">Generative AI</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[150px] border-2 focus:border-primary transition-colors duration-200 resize-none"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-primary h-12 text-lg text-primary-foreground" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Send Message
                    <Send className="h-5 w-5" />
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}