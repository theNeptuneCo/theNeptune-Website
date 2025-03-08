"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header style={{ width: '90%' }} className="sticky top-0 z-50  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div style={{}} className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Code className="h-6 w-6 text-primary" /> */}
            <img src="https://avatars.githubusercontent.com/u/195533683?s=400&u=6e8e40e634c33ff0f004bf11488cd9087e3b11ff&v=4"
              style={{ height: 50, width: 50, marginRight: -12 }} />
            <span className="font-bold text-xl">theNeptune</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#services"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="#portfolio"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Portfolio
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
          <ThemeToggle />
          <Button asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden fixed inset-0 top-16 z-50 bg-background transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="container flex flex-col gap-6 p-6">
          <Link
            href="#services"
            className="text-lg font-medium py-2 transition-colors hover:text-primary"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium py-2 transition-colors hover:text-primary"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#portfolio"
            className="text-lg font-medium py-2 transition-colors hover:text-primary"
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          <Link
            href="#testimonials"
            className="text-lg font-medium py-2 transition-colors hover:text-primary"
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium py-2 transition-colors hover:text-primary"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Button asChild className="mt-4">
            <Link href="#contact" onClick={toggleMenu}>Get Started</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}