import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Mail, ArrowRight, Smartphone, Globe, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-muted/50 via-background to-muted/30 border-t">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/assets/images/logo.png"
                  alt="theNeptune Logo"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                theNeptune
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Specializing in mobile app development, web development, and Generative AI solutions. 
              Creating innovative digital experiences that drive business growth.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-all duration-200">
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-all duration-200">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-all duration-200">
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-all duration-200">
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                  <Smartphone className="h-4 w-4" />
                  <span>Mobile App Development</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                  <Globe className="h-4 w-4" />
                  <span>Web Development</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                  <Sparkles className="h-4 w-4" />
                  <span>Generative AI</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                  <span>About Us</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                  <span>Portfolio</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                  <span>Contact</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-muted-foreground leading-relaxed">
              Subscribe to our newsletter for the latest in mobile app development, web development, and AI trends.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  type="email" 
                  className="border-2 focus:border-primary transition-colors duration-200"
                />
                <Button className="btn-primary px-4">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 theNeptune. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}