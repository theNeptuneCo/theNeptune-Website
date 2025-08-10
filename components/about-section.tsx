import Image from "next/image"
import { Smartphone, Globe, Sparkles, Users, Zap, Target, Shield } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: <Smartphone className="h-6 w-6 text-primary flex-shrink-0" />,
      title: "Mobile-First Approach",
      description: "We prioritize mobile app development with a focus on creating intuitive, high-performance applications for iOS and Android."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
      title: "Modern Web Development",
      description: "Building responsive, scalable web applications using the latest technologies like React, Next.js, and modern frameworks."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary flex-shrink-0" />,
      title: "AI-Powered Solutions",
      description: "Integrating cutting-edge AI and machine learning technologies to create intelligent, automated solutions for your business."
    },
    {
      icon: <Users className="h-6 w-6 text-primary flex-shrink-0" />,
      title: "Expert Team",
      description: "Our team consists of experienced mobile developers, web developers, and AI specialists who are experts in their fields."
    }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative group animate-fade-in">
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Mobile and Web Development"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                About Us
              </div>
              <h2 className="heading-responsive font-bold tracking-tight">
                About{" "}
                <span className="gradient-text">theNeptune</span>
              </h2>
              <p className="text-responsive text-description leading-relaxed">
                Founded in 2020, theNeptune specializes in mobile app development, web development, and Generative AI solutions. 
                We're passionate about creating innovative digital experiences that help businesses succeed in the mobile-first world.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group p-6 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-enhanced text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-enhanced">Mobile Apps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">30+</div>
                <div className="text-sm text-muted-enhanced">Web Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-enhanced">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}