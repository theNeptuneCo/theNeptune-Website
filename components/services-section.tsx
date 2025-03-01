import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const services = [
  {
    icon: <Code2 className="h-10 w-10 text-primary" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs and challenges."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "Responsive, high-performance websites and web applications built with cutting-edge technologies."
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Database Solutions",
    description: "Robust database design, optimization, and management for efficient data handling."
  },
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and migration services to enhance your business capabilities."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your software and data from threats."
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Services</h2>
          <p className="text-muted-foreground max-w-[700px]">
            We offer a comprehensive range of software development services to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border/40 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 hover:border-primary/50 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}